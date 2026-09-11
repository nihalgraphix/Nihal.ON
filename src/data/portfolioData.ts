import {
  Project,
  Service,
  ProcessStep,
  SkillCategory,
  ExperienceItem,
  Testimonial,
  BlogPost,
  GalleryItem,
  FAQItem
} from '../types';

import heroPortrait from '../assets/images/hero_portrait_1785413008544.jpg';
import aboutPortrait from '../assets/images/about_portrait_1785413022971.jpg';
import galleryImageOne from '../components/image/1000009034.jpg';
import galleryImageTwo from '../components/image/1000009035.jpg';
import galleryImageThree from '../components/image/1000009036.jpg';
import galleryImageFour from '../components/image/16337.png';
import galleryImageFive from '../components/image/20251106_112821(1)(1).jpg';
import galleryImageSix from '../components/image/20251106_172421.jpg';
import galleryImageSeven from '../components/image/IMG_20251205_205918_106~2.jpg';
import galleryImageEight from '../components/image/Zenitsu 3.png';

export { heroPortrait, aboutPortrait };

export const PERSONAL_INFO = {
  name: "Nihal . ON",
  title: "Senior Creative Technologist & Design Director",
  tagline: "Building Digital Experiences That Feel Premium.",
  location: "Kochi, Kerala, India",
  status: "🟢 Available for Q3/Q4 Projects",
  yearsExperience: "6+",
  projectsCompleted: "150+",
  clientSatisfaction: "98%",
  happyClients: "50+",
  email: "nihal.graphix@gmail.com",
  phone: "+91 9946001322",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  dribbble: "https://dribbble.com",
  behance: "https://behance.com",
  calendly: "https://calendly.com",
  blogUrl: "https://medium.com",
};

export const BRANDS = [
  { name: "SupaBlox", logo: "⚡" },
  { name: "HypeBlox", logo: "🔥" },
  { name: "FrameBlox", logo: "📐" },
  { name: "UltraBlox", logo: "💎" },
  { name: "Aetheria AI", logo: "🌐" },
  { name: "Fluxora Cloud", logo: "♾️" },
  { name: "Vortex OS", logo: "🌀" },
  { name: "Luminary Labs", logo: "✨" },
];

export const AWARDS = [
  { year: "2026", title: "Awwwards Site of the Day", category: "Developer & Site of the Month Nominee", project: "Fluxora Cyberpunk Portal" },
  { year: "2025", title: "Framer Template of the Year", category: "Best Luxury Portfolio Category", project: "FolioBlox Framer Template" },
  { year: "2025", title: "CSS Design Awards - Special Kudos", category: "UI, UX & Innovation", project: "Vortex OS Interactive Design" },
  { year: "2024", title: "FWA of the Day", category: "Best Interactive Experience", project: "Aetheria Neural Canvas" },
];

export const PROJECTS: Project[] = [
  {
    id: "fluxora-cyberpunk",
    title: "Fluxora Studio Portal",
    subtitle: "Technology Crafted For All, Not Machines",
    category: "Web Design",
    year: "2026",
    client: "Fluxora Global Ltd",
    role: "Lead Designer & Creative Technologist",
    duration: "8 Weeks",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    description: "An award-winning dark futuristic portal designed for Fluxora Studio. Blends glowing neon light sculpture visuals with hyper-responsive Framer Motion transitions and custom WebGL shaders.",
    challenge: "Fluxora needed to stand out from generic B2B tech platforms by introducing a cinematic, human-centric aesthetic that communicated complex quantum AI capabilities without looking clinical.",
    solution: "We developed an immersive dark luxury aesthetic featuring high-contrast orange ambient gradients, typography paired with Space Grotesk, micro-interactive WebGL particle canvases, and instant sub-100ms route transitions.",
    impactMetrics: [
      { label: "Conversion Lift", value: "+185%" },
      { label: "Avg Session Duration", value: "4m 12s" },
      { label: "Awwwards Score", value: "8.92/10" }
    ],
    technologies: ["React 19", "Next.js 15", "Tailwind CSS", "GSAP", "Three.js", "Framer Motion"],
    liveUrl: "https://example.com/fluxora",
    githubUrl: "https://github.com/example/fluxora",
    galleryImages: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
    ],
    wireframes: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
    ],
    clientFeedback: {
      quote: "Nihal . ON transformed our entire brand narrative. The website doesn't just look like a winner on Awwwards—it drove our biggest enterprise quarter in company history.",
      author: "Marcus Thorne",
      role: "Chief Marketing Officer",
      company: "Fluxora Global",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "aetheria-ai",
    title: "Aetheria Neural Canvas",
    subtitle: "Generative AI Platform for World Building",
    category: "AI Products",
    year: "2025",
    client: "Aetheria Labs",
    role: "UX Architecture & Frontend Engineering",
    duration: "12 Weeks",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop",
    description: "Real-time canvas interface allowing digital artists and game designers to generate 3D assets and photorealistic environments using prompt-driven node workflows.",
    challenge: "Structuring complex generative node graphs and prompt sliders into an intuitive dark mode canvas that doesn't overwhelm creative directors.",
    solution: "Designed a sleek dockable HUD with glassmorphism cards, contextual radial menus, and hardware-accelerated pan-zoom canvas rendering.",
    impactMetrics: [
      { label: "Active Monthly Users", value: "320K+" },
      { label: "Retention Rate", value: "78%" },
      { label: "Product Hunt", value: "#1 Product of Day" }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Canvas API", "Gemini API", "Node.js"],
    liveUrl: "https://example.com/aetheria",
    githubUrl: "https://github.com/example/aetheria",
    galleryImages: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
    ],
    clientFeedback: {
      quote: "Nihal . ON has that rare blend of extreme aesthetic vision and rock-solid technical execution. Our user engagement tripled after launch.",
      author: "Dr. Elena Rostova",
      role: "VP of Design",
      company: "Aetheria AI",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "vortex-os",
    title: "Vortex Cybernetic OS",
    subtitle: "Spatial Operating System for Next-Gen Wearables",
    category: "Motion",
    year: "2025",
    client: "Vortex Technologies",
    role: "Lead UI/UX & Motion Designer",
    duration: "6 Weeks",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    description: "A futuristic spatial OS prototype engineered for AR glasses with voice-assisted HUD overlays and gesture-controlled spatial widgets.",
    challenge: "Crafting gesture feedback loops that feel natural in 3D depth space without inducing visual fatigue.",
    solution: "Utilized subtle neon orange depth halos, optical physics-based parallax, and sound feedback triggers for precise tactile spatial control.",
    impactMetrics: [
      { label: "Patent Filings", value: "4 Grants" },
      { label: "Gesture Accuracy", value: "99.4%" },
      { label: "FWA Award", value: "FWA of Day" }
    ],
    technologies: ["Three.js", "WebGL", "Framer Motion", "GSAP", "WebAudio API"],
    galleryImages: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "luminary-luxury",
    title: "Luminary High Fashion",
    subtitle: "E-Commerce Luxury Experience for Paris Runway",
    category: "Brand Identity",
    year: "2025",
    client: "Luminary Couture Paris",
    role: "Creative Director",
    duration: "10 Weeks",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
    description: "Minimalist luxury digital flagship store featuring high-res editorial video lookbooks and custom 360-degree garment inspection canvas.",
    challenge: "Delivering ultra-high resolution video and image galleries while maintaining instant 60fps scrolling on mobile devices.",
    solution: "Implemented adaptive progressive streaming, custom canvas video loopers, and editorial magazine typography.",
    impactMetrics: [
      { label: "Sales Increase", value: "+210%" },
      { label: "Mobile Checkout", value: "2.1x Faster" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "Shopify Plus", "Framer Motion"]
  },
  {
    id: "folioblox-framer",
    title: "FolioBlox Framer System",
    subtitle: "Ultra-Premium Framer Portfolio Template",
    category: "Web Design",
    year: "2025",
    client: "Community Product",
    role: "Creator & Engineer",
    duration: "4 Weeks",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1600&auto=format&fit=crop",
    description: "Top-selling Framer design system utilized by over 1,200 creative directors, agencies, and senior developers worldwide.",
    challenge: "Creating modular components that remain lightweight and easily customizable without breaking complex motion hierarchies.",
    solution: "Engineered clean variant controls, orange glow token presets, and dark noise backdrop effects.",
    impactMetrics: [
      { label: "Templates Sold", value: "1,200+" },
      { label: "Rating", value: "4.98/5.0" }
    ],
    technologies: ["Framer", "React", "CSS Modules", "Figma"]
  },
  {
    id: "cyber-fintech",
    title: "Krypton Web3 Exchange",
    subtitle: "High-Frequency Algorithmic Trading Platform",
    category: "Mobile Apps",
    year: "2024",
    client: "Krypton Capital",
    role: "Lead Product Designer",
    duration: "14 Weeks",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
    description: "Sub-millisecond data density dashboard for crypto institutional traders with live orderbook heatmaps and execution alerts.",
    challenge: "Displaying over 50 real-time data streams without causing DOM lagging or layout jank.",
    solution: "Used Web Workers for background sorting and virtualized WebGL canvas charts for continuous 60fps trading visuals.",
    impactMetrics: [
      { label: "Daily Trading Vol", value: "$1.2B+" },
      { label: "System Latency", value: "<12ms" }
    ],
    technologies: ["React", "TypeScript", "D3.js", "WebSockets", "Tailwind CSS"]
  }
];

export const SERVICES: Service[] = [
  {
    id: "ui-ux-design",
    iconName: "Layout",
    title: "UI/UX Design",
    subtitle: "User-Centered & High Conversion",
    description: "Designing sleek, intuitive, and conversion-optimized digital interfaces. From wireframes to pixel-perfect design systems.",
    deliverables: ["User Journey Maps", "High-Fidelity Figma Prototypes", "Design Tokens & UI Kit", "Usability Audits"],
    tools: ["Figma", "Rive", "Principle", "UserTesting"],
    estimatedTime: "2 - 4 Weeks"
  },
  {
    id: "web-design",
    iconName: "Monitor",
    title: "Web Design & Direction",
    subtitle: "Awwwards-Winning Quality",
    description: "Art-directed web layouts that command attention. Immersive typography, dark luxury aesthetics, and cinematic layouts.",
    deliverables: ["Full Interactive Website Design", "Mobile-First Design System", "Micro-animations Guide", "Custom Assets"],
    tools: ["Figma", "Photoshop", "Illustrator", "Framer"],
    estimatedTime: "3 - 5 Weeks"
  },
  {
    id: "frontend-dev",
    iconName: "Code",
    title: "Frontend Engineering",
    subtitle: "Performant & Type-Safe Code",
    description: "Building ultra-fast modern web applications using React 19, Next.js, and TypeScript with 60fps animations.",
    deliverables: ["Clean Modular Repository", "SEO & Lighthouse 95+ Optimization", "Responsive Cross-Device Layout", "CI/CD Pipeline"],
    tools: ["React 19", "Next.js", "TypeScript", "Tailwind CSS"],
    estimatedTime: "3 - 6 Weeks"
  },
  {
    id: "brand-identity",
    iconName: "Sparkles",
    title: "Brand Identity",
    subtitle: "Distinctive & Memorable",
    description: "Creating futuristic brand identities, emblem marks, guidelines, typography pairings, and digital design language.",
    deliverables: ["Logo Suite & Emblem", "Brand Style Guide & Token Sheet", "Social Media & Marketing Assets", "Packaging Mockups"],
    tools: ["Illustrator", "Photoshop", "Midjourney", "Figma"],
    estimatedTime: "2 - 4 Weeks"
  },
  {
    id: "motion-gsap",
    iconName: "Zap",
    title: "Motion & GSAP Animations",
    subtitle: "Fluid Physics & Parallax",
    description: "Crafting fluid scroll-driven animations, 3D tilt hover cards, particle fields, and page route transitions.",
    deliverables: ["GSAP ScrollTrigger Setup", "Framer Motion Component Suite", "Custom Loader Animations", "Interactive Canvas Effects"],
    tools: ["GSAP", "Framer Motion", "Three.js", "Lenis"],
    estimatedTime: "2 - 3 Weeks"
  },
  {
    id: "ai-integrations",
    iconName: "Bot",
    title: "AI & Smart Agent Integrations",
    subtitle: "LLM & Generative Workflows",
    description: "Integrating Gemini and AI models directly into your web products for smart chat, auto-generation, and workflow automation.",
    deliverables: ["Server API Proxy Setup", "Interactive AI Chatbot/Concierge", "Prompt Engineering & Guardrails", "Streaming Response UI"],
    tools: ["Gemini API", "Node.js", "Express", "OpenAI"],
    estimatedTime: "2 - 4 Weeks"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Alignment",
    duration: "Week 1",
    summary: "Deep dive into business objectives, brand strategy, target audience, and competitive landscape.",
    details: ["In-depth strategy call & scope mapping", "Competitor & visual moodboard audit", "Project roadmap & milestone definition"]
  },
  {
    step: "02",
    title: "Research & Architecture",
    duration: "Week 1-2",
    summary: "Mapping out user flows, content structure, sitemap, and visual moodboards.",
    details: ["Information architecture & sitemap creation", "User journey mapping & touchpoint definition", "Visual aesthetic direction proposal"]
  },
  {
    step: "03",
    title: "Concept Strategy",
    duration: "Week 2",
    summary: "Developing 2 distinct creative directions with typography, colors, and key screen concepts.",
    details: ["Typography & color token exploration", "Interactive hero section moodboard", "Client review & feedback call"]
  },
  {
    step: "04",
    title: "Wireframes & UX",
    duration: "Week 2-3",
    summary: "Creating high-fidelity wireframes to solidify content layout and structural hierarchy.",
    details: ["Figma wireframe layouts for all viewports", "Copywriting structure & content placement", "UX prototyping & flow testing"]
  },
  {
    step: "05",
    title: "UI Design & Motion",
    duration: "Week 3-4",
    summary: "Transforming wireframes into pixel-perfect, dark-luxury screens with micro-interactions.",
    details: ["Full responsive UI design system", "3D card mockups & visual asset rendering", "Motion design specifications"]
  },
  {
    step: "06",
    title: "Development & Build",
    duration: "Week 4-6",
    summary: "Translating Figma designs into production-ready React / Next.js code with clean architecture.",
    details: ["Component-driven modular frontend build", "GSAP & Framer Motion smooth animations", "API proxy & backend integration"]
  },
  {
    step: "07",
    title: "Testing & Polish",
    duration: "Week 6-7",
    summary: "Rigorous quality assurance across mobile devices, browsers, and Lighthouse performance checks.",
    details: ["Cross-browser & mobile device testing", "Lighthouse 95+ score optimization", "Accessibility & contrast audits"]
  },
  {
    step: "08",
    title: "Launch & Growth",
    duration: "Week 8",
    summary: "Deploying to Cloud Run/Vercel, setting up domain DNS, and providing post-launch support.",
    details: ["Domain configuration & SSL deployment", "Analytics & SEO metadata setup", "30 days post-launch warranty"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Engineering",
    items: [
      { name: "React 19", level: 98, icon: "Code2", experienceYears: "6 yrs", tag: "Expert" },
      { name: "Next.js 15", level: 95, icon: "Globe", experienceYears: "5 yrs", tag: "Expert" },
      { name: "TypeScript", level: 96, icon: "FileCode", experienceYears: "6 yrs", tag: "Expert" },
      { name: "Tailwind CSS", level: 99, icon: "Palette", experienceYears: "6 yrs", tag: "Master" },
      { name: "HTML5 / CSS3", level: 99, icon: "Layout", experienceYears: "6+ yrs", tag: "Master" }
    ]
  },
  {
    category: "Design & Motion",
    items: [
      { name: "Framer Motion", level: 96, icon: "Zap", experienceYears: "5 yrs", tag: "Expert" },
      { name: "GSAP", level: 92, icon: "Activity", experienceYears: "4 yrs", tag: "Advanced" },
      { name: "Figma & Design Systems", level: 98, icon: "Figma", experienceYears: "6 yrs", tag: "Master" },
      { name: "Three.js / WebGL", level: 85, icon: "Box", experienceYears: "3 yrs", tag: "Advanced" },
      { name: "Photoshop & Illustrator", level: 90, icon: "Image", experienceYears: "6 yrs", tag: "Expert" }
    ]
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Node.js & Express", level: 90, icon: "Server", experienceYears: "5 yrs", tag: "Advanced" },
      { name: "MongoDB & Supabase", level: 88, icon: "Database", experienceYears: "4 yrs", tag: "Advanced" },
      { name: "REST & GraphQL APIs", level: 92, icon: "Cpu", experienceYears: "5 yrs", tag: "Expert" },
      { name: "Google Cloud / Vercel", level: 89, icon: "Cloud", experienceYears: "4 yrs", tag: "Advanced" }
    ]
  },
  {
    category: "Creative & AI Tech",
    items: [
      { name: "Gemini API & LLMs", level: 94, icon: "Bot", experienceYears: "2 yrs", tag: "Expert" },
      { name: "Midjourney / Image Gen", level: 95, icon: "Sparkles", experienceYears: "3 yrs", tag: "Expert" },
      { name: "Lenis Smooth Scroll", level: 96, icon: "Layers", experienceYears: "3 yrs", tag: "Expert" },
      { name: "Sound Synthesizers", level: 84, icon: "Volume2", experienceYears: "2 yrs", tag: "Interm." }
    ]
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "NIHAL Creative Studio",
    role: "Lead Creative Technologist & Director",
    period: "2023 - Present",
    location: "San Francisco, CA",
    type: "Full-Time / Studio Lead",
    description: "Directing high-end digital design and full-stack engineering for B2B SaaS, Web3 platforms, and luxury brands.",
    achievements: [
      "Built 40+ web products with average 98/100 Lighthouse performance scores.",
      "Received 3 Awwwards Site of the Day and 2 FWA recognitions.",
      "Engineered custom design systems downloaded over 1,200+ times."
    ],
    technologies: ["React 19", "Next.js", "TypeScript", "GSAP", "Tailwind CSS", "Gemini API"],
    isCurrent: true
  },
  {
    id: "exp-2",
    company: "Aetheria AI Labs",
    role: "Senior UI/UX Architect & Staff Engineer",
    period: "2021 - 2023",
    location: "Remote",
    type: "Full-Time",
    description: "Led the design system team for generative 3D creative suite, managing 6 product designers and 8 frontend engineers.",
    achievements: [
      "Redesigned node canvas workspace, reducing customer onboarding time by 45%.",
      "Grew monthly active users from 50K to 320K+ in 18 months.",
      "Architected accessible dark mode theme engine used across all enterprise sub-apps."
    ],
    technologies: ["React", "TypeScript", "Canvas API", "Figma", "Tailwind CSS"]
  },
  {
    id: "exp-3",
    company: "Vortex Digital Agency",
    role: "Senior Motion & Frontend Developer",
    period: "2019 - 2021",
    location: "New York, NY",
    type: "Full-Time",
    description: "Crafted interactive marketing experiences, 3D WebGL portals, and e-commerce flagship stores for Fortune 500 clients.",
    achievements: [
      "Delivered 25+ client sites on schedule with zero critical post-launch bugs.",
      "Mentored junior developers on GSAP ScrollTrigger and CSS performance optimization."
    ],
    technologies: ["Three.js", "GSAP", "Vue/React", "Shopify", "SCSS"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Nihal . ON is in a league of his own. He took our rough concept and created an Awwwards-worthy portal that immediately established our enterprise credibility.",
    author: "Marcus Thorne",
    role: "Chief Marketing Officer",
    company: "Fluxora Global",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    projectRef: "Fluxora Studio Portal"
  },
  {
    id: "test-2",
    quote: "Rarely do you find a designer who can write rock-solid TypeScript and implement complex WebGL motion smoothly. Nihal . ON delivered beyond all expectations.",
    author: "Dr. Elena Rostova",
    role: "VP of Design",
    company: "Aetheria AI",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    projectRef: "Aetheria Neural Canvas"
  },
  {
    id: "test-3",
    quote: "Working with Nihal . ON felt like having an entire Apple-level design team at our fingertips. Our conversion rate increased by 185% in month one.",
    author: "David Chen",
    role: "Founder & CEO",
    company: "Krypton Web3",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    projectRef: "Krypton Exchange"
  },
  {
    id: "test-4",
    quote: "The level of polish, spatial typography, and responsive detail Nihal . ON brings to the table is mind-blowing. Highest recommendation possible.",
    author: "SOPHIA VALENTINA",
    role: "Creative Director",
    company: "Luminary Fashion Paris",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    projectRef: "Luminary High Fashion"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Mastering Dark Luxury Aesthetics in Modern Web Design",
    excerpt: "Why high-contrast black canvases, glowing orange highlights, and micro-typography are defining the future of high-end B2B and creative web experiences.",
    content: `Dark luxury web design is far more than just setting background: #000. It requires mathematical precision in contrast ratios, subtle ambient background glow, optical letter spacing, and purposeful whitespace.

In this article, we explore:
1. The Psychology of Dark Luxury: How deep black (#060606) creates a focused, high-stakes atmosphere.
2. Controlled Glow Highlights: Using RGBA orange glows (#FF5A1F22) to draw eyes directly to primary call-to-actions without visual fatigue.
3. Typography Pairing: Matching geometric headers like Syne and Space Grotesk with high-readability body fonts like Plus Jakarta Sans.
4. Smooth Micro-Interactions: Why 60fps Framer Motion transitions create an expensive, tangible feel.`,
    category: "Design Tips",
    readTime: "5 min read",
    date: "July 24, 2026",
    author: "Nihal . ON",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tags: ["UI/UX", "Dark Mode", "Typography", "Aesthetics"]
  },
  {
    id: "blog-2",
    title: "Building 60fps Scroll Animations with GSAP ScrollTrigger & React 19",
    excerpt: "A practical guide to avoiding layout reflows, batching DOM updates, and crafting silky smooth parallax scroll effects without killing browser performance.",
    content: `Achieving flawless 60fps scrolling performance on complex web applications requires understanding how browsers render frames.

Key techniques covered:
- Using transform and opacity properties only to avoid costly repaint cycles.
- Utilizing Lenis smooth scroll for smooth momentum without hijacking user hardware events.
- Cleaning up GSAP timelines in React 19 useEffect hooks to prevent memory leaks.`,
    category: "Development",
    readTime: "7 min read",
    date: "July 12, 2026",
    author: "Nihal . ON",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    tags: ["React 19", "GSAP", "Performance", "Animation"]
  },
  {
    id: "blog-3",
    title: "Integrating Gemini AI as an Interactive Design Assistant",
    excerpt: "How server-side AI proxies can turn passive portfolio websites into active, conversational sales representatives that answer project queries 24/7.",
    content: `Passive static portfolios are evolving into intelligent, conversational hubs. By leveraging server-side Gemini API proxies, you can provide prospective clients with instant answers regarding project scope, tech stack compatibility, and scheduling availability.

Benefits:
- Immediate client engagement without waiting for email replies.
- Pre-qualifying leads with structured prompt guardrails.
- Keeping API keys completely hidden behind secure server routes.`,
    category: "AI",
    readTime: "6 min read",
    date: "June 28, 2026",
    author: "Nihal . ON",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop",
    tags: ["AI", "Gemini API", "Full-Stack", "Node.js"]
  },
  {
    id: "blog-4",
    title: "Spatial Micro-Interactions & Fluid Motion Systems",
    excerpt: "How spring physics and tactile feedback loops elevate modern web applications from flat screens to immersive digital artifacts.",
    content: `Spatial micro-interactions bridge the gap between digital pixels and real-world tactile feedback.

In this guide, we break down:
- Designing spring curve physics for card hover tilts and cursor tracking.
- Maintaining consistent visual velocity during route transitions.
- Balancing delight with accessibility and reduced motion preferences.`,
    category: "UI/UX",
    readTime: "4 min read",
    date: "June 15, 2026",
    author: "Nihal . ON",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    tags: ["UI/UX", "GSAP", "Dark Mode", "Aesthetics"]
  },
  {
    id: "blog-5",
    title: "Framer vs Custom React: Choosing the Right Stack for Speed",
    excerpt: "An engineer's breakdown comparing Framer web builders with custom React 19 + Tailwind engineering for high-conversion startup products.",
    content: `Choosing between no-code Framer builders and bespoke React engineering depends on project scale and custom integration requirements.

Key comparison points:
- Speed to market vs complete architectural freedom.
- Custom API integrations, server proxying, and authentication capabilities.
- Long-term scalability and design system maintenance.`,
    category: "Strategy",
    readTime: "5 min read",
    date: "May 30, 2026",
    author: "Nihal . ON",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop",
    tags: ["React 19", "Full-Stack", "UI/UX"]
  },
  {
    id: "blog-6",
    title: "Next-Gen Design Tokens for High-Contrast Interfaces",
    excerpt: "Structuring scalable CSS variables and design tokens that seamlessly handle warm neon accents, dark noise backdrops, and fluid typography.",
    content: `Consistent design tokens ensure your web application maintains brand integrity across hundreds of components.

In this overview:
- Setting up semantic token names for background depths and glow layers.
- Using OKLCH color spaces for natural gradient blends.
- Auto-generating Tailwind CSS utilities from Figma token configurations.`,
    category: "Design Systems",
    readTime: "6 min read",
    date: "May 18, 2026",
    author: "Nihal . ON",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
    tags: ["Typography", "Aesthetics", "Dark Mode"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Selected projects from the last month",
    category: "Photography",
    image: galleryImageOne,
    aspectRatio: "aspect-[3/4]",
    date: "2026",
    likes: 842
  },
  {
    id: "gal-2",
    title: "Otherworldly places located on Earth",
    category: "Concepts",
    image: galleryImageTwo,
    aspectRatio: "aspect-[3/4]",
    date: "2026",
    likes: 912
  },
  {
    id: "gal-3",
    title: "Visualizing distorted sound mixes",
    category: "Motion",
    image: galleryImageThree,
    aspectRatio: "aspect-[3/4]",
    date: "2026",
    likes: 1240
  },
  {
    id: "gal-4",
    title: "Getting that film look in post",
    category: "Branding",
    image: galleryImageFour,
    aspectRatio: "aspect-[3/4]",
    date: "2025",
    likes: 670
  },
  {
    id: "gal-5",
    title: "Cybernetic Silhouette & Neon Lights",
    category: "Photography",
    image: galleryImageFive,
    aspectRatio: "aspect-[3/4]",
    date: "2026",
    likes: 540
  },
  {
    id: "gal-6",
    title: "Fluxora Ambient Studio & Liquid Art",
    category: "UI",
    image: galleryImageSix,
    aspectRatio: "aspect-[3/4]",
    date: "2025",
    likes: 780
  },
  {
    id: "gal-7",
    title: "Aetheria Node Spatial Canvas",
    category: "UI",
    image: galleryImageSeven,
    aspectRatio: "aspect-[3/4]",
    date: "2025",
    likes: 930
  },
  {
    id: "gal-8",
    title: "Luminary Minimal Runway Experience",
    category: "Branding",
    image: galleryImageEight,
    aspectRatio: "aspect-[3/4]",
    date: "2025",
    likes: 1120
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "General",
    question: "What is your typical project timeline?",
    answer: "Most full design & engineering projects take between 4 to 8 weeks depending on scope complexity. Design-only or Framer template customization sprints can be completed in 2 to 3 weeks."
  },
  {
    category: "Pricing",
    question: "What are your pricing structures?",
    answer: "We offer both fixed-scope project pricing and monthly dedicated creative studio retainers. Fixed projects generally start at $5,000 for web design & frontend packages."
  },
  {
    category: "Process",
    question: "How do we collaborate during the project?",
    answer: "We maintain weekly asynchronous video updates via Loom, real-time Slack or Discord channel sync, and Figma design reviews where you can comment directly on active wireframes and UI components."
  },
  {
    category: "Technical",
    question: "Do you build full-stack web applications or just static sites?",
    answer: "I specialize in full-stack web platforms using React 19, Next.js, Node.js, Express, Tailwind CSS, GSAP, and cloud services (GCP, Firebase, Supabase). I also build custom AI integrations using Gemini API."
  },
  {
    category: "General",
    question: "Are you available for long-term contract or agency white-label work?",
    answer: "Yes, I collaborate with select creative agencies and venture-backed tech startups worldwide as an embedded Lead Technologist or Design Advisor."
  }
];

export const CREATIVE_MANIFESTO = [
  {
    title: "01. Design With Purpose, Build With Impact",
    content: "Aesthetics without functional depth is merely decoration. Every line of typography, grid spacing, and micro-animation must solve a real strategic user objective."
  },
  {
    title: "02. Never Settle For Default AI Templates",
    content: "Craftsmanship lies in bespoke typography pairing, custom neon lighting ratios, mathematical border radius calculations, and high-performance code."
  },
  {
    title: "03. Performance Is An Essential Feature",
    content: "Sub-second page loads, 60fps animations, and 95+ Lighthouse scores are non-negotiable standards for modern digital luxury."
  }
];
