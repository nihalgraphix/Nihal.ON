import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", mode: process.env.NODE_ENV || "development" });
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
          response: "NEXUS AI Assistant (Demo Mode): I am Alex Vance's AI design agent! Alex is a Senior Creative Technologist specializing in Cyberpunk aesthetic, Framer Motion, GSAP, and Next.js applications with 6+ years of experience. How can I assist your project today?"
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are NEXUS AI, the ultra-sophisticated AI Design Assistant & Project Concierge for Alex Vance's award-winning portfolio.
Alex Vance is a Lead Creative Director, Full Stack Technologist & Cyberpunk/Editorial Designer with 6+ years experience, 150+ completed projects, and a 98% client satisfaction rate.
Alex's skills include: React 19, Next.js, TypeScript, Tailwind CSS, GSAP, Framer Motion, Three.js, Figma, Brand Identity, and AI Integrations.
Alex's services include: UI/UX Design, Web Design, Frontend Engineering, Brand Identity, Motion Design, Framer Development, and AI System Design.

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

      res.json({ response: response.text || "I'm ready to discuss Alex Vance's work or project availability." });
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
