import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", mode: process.env.NODE_ENV || "development" });
  });

  // In-memory messages storage
  const messagesStore: Array<{
    id: string;
    timestamp: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    message: string;
  }> = [];

  let serverWebhookUrl: string | null = null;

  // Endpoint to retrieve stored messages
  app.get("/api/messages", (_req, res) => {
    res.json({
      success: true,
      count: messagesStore.length,
      messages: messagesStore,
      webhookConfigured: !!serverWebhookUrl
    });
  });

  // Endpoint to download messages as CSV (for direct Google Sheets import)
  app.get("/api/messages/csv", (_req, res) => {
    const headers = ["Timestamp", "First Name", "Last Name", "Email", "Phone", "Country / Place", "Message"];
    const csvRows = [headers.join(",")];

    for (const msg of messagesStore) {
      const escape = (val: string) => `"${(val || "").replace(/"/g, '""')}"`;
      csvRows.push([
        escape(msg.timestamp),
        escape(msg.firstName),
        escape(msg.lastName),
        escape(msg.email),
        escape(msg.phone),
        escape(msg.country),
        escape(msg.message)
      ].join(","));
    }

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="nihal_portfolio_messages.csv"');
    res.status(200).send(csvRows.join("\n"));
  });

  // Save/configure Webhook URL
  app.post("/api/sheets/webhook", (req, res) => {
    const { webhookUrl } = req.body;
    serverWebhookUrl = webhookUrl || null;
    res.json({ success: true, webhookConfigured: !!serverWebhookUrl });
  });

  // Contact Submission Route
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, country, message, spreadsheetId, accessToken, webhookUrl } = req.body;
      if (!email || !message) {
        return res.status(400).json({ error: "Email and message are required." });
      }

      const timestamp = new Date().toLocaleString("en-US", { timeZoneName: "short" });
      const newMsg = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        timestamp,
        firstName: firstName || "",
        lastName: lastName || "",
        email: email || "",
        phone: phone || "",
        country: country || "",
        message: message || ""
      };

      messagesStore.unshift(newMsg);

      const targetEmail = "nihal.graphix@gmail.com";
      const fullName = `${firstName || ""} ${lastName || ""}`.trim() || "Portfolio Visitor";

      // 1. Dispatch to FormSubmit AJAX endpoint for direct email delivery
      try {
        await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: `Portfolio Contact Inquiry from ${fullName}`,
            _replyto: email,
            "Sender Name": fullName,
            "Sender Email": email,
            "Phone Number": phone || "N/A",
            "Country & Place": country || "N/A",
            "Message": message
          })
        });
      } catch (fErr) {
        console.warn("FormSubmit email dispatch error:", fErr);
      }

      // 2. If client or server supplied Google Apps Script Webhook URL, post to it
      const targetWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL || webhookUrl || serverWebhookUrl;
      if (targetWebhook) {
        try {
          await fetch(targetWebhook, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(newMsg),
            redirect: "follow"
          });
          console.log("Successfully posted message to Google Sheets Webhook URL");
        } catch (wErr) {
          console.error("Error posting to Google Sheets Webhook URL:", wErr);
        }
      }

      // 3. If client supplied Google OAuth Access Token & Spreadsheet ID, append via Google Sheets REST API
      let sheetAppended = false;
      if (spreadsheetId && accessToken) {
        try {
          const rowValues = [
            timestamp,
            firstName || "",
            lastName || "",
            email || "",
            phone || "",
            country || "",
            message || ""
          ];

          const sheetsRes = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:G:append?valueInputOption=USER_ENTERED`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ values: [rowValues] })
            }
          );
          if (sheetsRes.ok) {
            sheetAppended = true;
            console.log("Successfully appended contact message to Google Sheet:", spreadsheetId);
          }
        } catch (sheetErr) {
          console.error("Server Google Sheet REST API append error:", sheetErr);
        }
      }

      return res.json({
        success: true,
        sheetAppended,
        messageCount: messagesStore.length,
        message: "Message successfully submitted and recorded."
      });
    } catch (error: any) {
      console.error("Error handling contact form submission:", error);
      return res.json({
        success: true,
        message: "Message received successfully."
      });
    }
  });

  // Gemini AI Concierge / Assistant route
  app.post("/api/ai-assistant", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          response: "NIHAL AI Assistant (Demo Mode): I am Nihal . ON's AI design agent! Nihal is a Senior Creative Technologist specializing in Cyberpunk aesthetic, Framer Motion, GSAP, and Next.js applications with 6+ years of experience. How can I assist your project today?"
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are NIHAL AI, the ultra-sophisticated AI Design Assistant & Project Concierge for Nihal . ON's award-winning portfolio.
Nihal . ON is a Lead Creative Director, Full Stack Technologist & Cyberpunk/Editorial Designer with 6+ years experience, 150+ completed projects, and a 98% client satisfaction rate.
Nihal's skills include: React 19, Next.js, TypeScript, Tailwind CSS, GSAP, Framer Motion, Three.js, Figma, Brand Identity, and AI Integrations.
Nihal's services include: UI/UX Design, Web Design, Frontend Engineering, Brand Identity, Motion Design, Framer Development, and AI System Design.

Answer queries professionally, concisely, with a sleek, intelligent, tech-luxury tone. You can suggest scheduling a discovery call, reviewing featured case studies (like 'Aetheria AI', 'Fluxora Cloud', 'Luminary Fashion', 'Vortex OS'), or inquiring about pricing and project timelines. Keep responses engaging and structured.`;

      const contents = [];
      if (Array.isArray(history) && history.length > 0) {
        for (const item of history.slice(-6)) {
          contents.push({ role: item.role === 'user' ? 'user' : 'model', parts: [{ text: item.content }] });
        }
      }
      contents.push({ role: 'user', parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ response: response.text || "I'm ready to discuss Nihal . ON's work or project availability." });
    } catch (error: any) {
      console.error("Error in AI Assistant API:", error);
      res.status(500).json({ error: "Failed to generate AI response", details: error?.message });
    }
  });

  // Vite middleware in dev vs static serving in prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
