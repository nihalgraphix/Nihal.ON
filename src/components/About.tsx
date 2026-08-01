import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  Target,
  Eye,
  Award,
  Sparkles,
  CheckCircle2,
  Code,
  Compass,
  Zap,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO, aboutPortrait, CREATIVE_MANIFESTO } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState<'story' | 'mission' | 'manifesto' | 'values'>('story');

  const tabItems = [
    { id: 'story', label: 'My Story', icon: User },
    { id: 'mission', label: 'Mission & Vision', icon: Target },
    { id: 'manifesto', label: 'Design Manifesto', icon: Sparkles },
    { id: 'values', label: 'Core Values', icon: Compass },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#060606] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#FF5A1F]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-space uppercase tracking-widest text-[#FF5A1F] mb-3">
              <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
              <span>Behind The Work</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Shaping Digital Experiences That Make Life Simpler.
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm font-sans leading-relaxed">
            I am a Lead Creative Technologist based in San Francisco, combining high-fashion editorial design with modern full-stack web engineering.
          </p>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Stats Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111111] shadow-2xl">
              <img
                src={aboutPortrait}
                alt="Nihal . ON Studio Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-[520px] object-cover object-center filter saturate-[1.1] contrast-[1.05] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent opacity-80" />

              {/* Glowing Badge on Image */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl glass-card border border-white/10">
                <div className="font-syne text-2xl font-extrabold text-white">6+ Years</div>
                <div className="text-xs text-[#FF5A1F] font-space font-semibold">Senior Creative Direction</div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-neutral-400 font-space uppercase">Global Impact</div>
                  <div className="text-sm font-syne font-bold text-white">50+ Worldwide Clients</div>
                </div>
                <Globe className="h-6 w-6 text-[#FF5A1F]" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tabbed Content & Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            {/* Nav Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#111111] border border-white/10 w-fit">
              {tabItems.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold font-space transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#FF5A1F] text-black shadow-lg shadow-[#FF5A1F]/30'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Panels */}
            <div className="min-h-[260px] glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
              <AnimatePresence mode="wait">
                {activeTab === 'story' && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="font-syne text-xl font-bold text-white">
                      From Graphic Arts to High-Performance Code
                    </h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      My journey began in high-fashion editorial print and graphic design in New York. As the web evolved, I recognized that code is the ultimate creative medium. Over the past 6+ years, I have helped venture-backed startups and global brands build software that feels as deliberate and tangible as physical luxury items.
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Whether architecting a dark-mode spatial canvas or fine-tuning sub-100ms route transitions, my work focuses on eliminating cognitive friction for users while evoking delight.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'mission' && (
                  <motion.div
                    key="mission"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="flex items-center gap-2 font-syne text-lg font-bold text-white mb-2">
                        <Target className="h-5 w-5 text-[#FF5A1F]" /> My Mission
                      </h4>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        To elevate digital products by bridging the gap between artistic vision and rock-solid full-stack software engineering.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="flex items-center gap-2 font-syne text-lg font-bold text-white mb-2">
                        <Eye className="h-5 w-5 text-[#FF5A1F]" /> My Vision
                      </h4>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        Creating a web ecosystem where performant 60fps animations, intelligent AI assistants, and accessible dark aesthetics are standard across every digital touchpoint.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'manifesto' && (
                  <motion.div
                    key="manifesto"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {CREATIVE_MANIFESTO.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                        <h4 className="font-syne text-xs font-bold text-[#FF5A1F] mb-1">{item.title}</h4>
                        <p className="text-xs text-neutral-300 leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'values' && (
                  <motion.div
                    key="values"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {[
                      { title: "Bespoke Precision", desc: "No cookie-cutter templates. Every layout is crafted from first principles." },
                      { title: "60fps Motion", desc: "Silky smooth transitions that feel hardware-accelerated." },
                      { title: "Type Safety", desc: "Clean TypeScript architecture with zero compromise on stability." },
                      { title: "Direct Collaboration", desc: "You work directly with the creator, not junior account managers." },
                    ].map((val, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                        <div className="font-syne text-sm font-bold text-white mb-1">{val.title}</div>
                        <p className="text-xs text-neutral-400">{val.desc}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Quick CTA */}
            <div className="flex items-center justify-between pt-2">
              <div className="text-xs font-space text-neutral-400">
                Ready to elevate your digital presence?
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 rounded-full border border-[#FF5A1F]/50 bg-[#FF5A1F]/10 px-5 py-2.5 text-xs font-semibold text-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-black transition-all"
              >
                <span>Get In Touch</span>
                <Zap className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
