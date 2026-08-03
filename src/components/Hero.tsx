import { motion } from 'motion/react';
import { Sparkles, ArrowDown, ChevronRight, ChevronLeft } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onSelectProject: (id: string) => void;
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-10 sm:pb-14 lg:pb-16 bg-gradient-to-b from-[#FF5A1F] via-[#E84A10] to-[#C83600] w-full overflow-hidden rounded-b-[36px] sm:rounded-b-[48px] lg:rounded-b-[60px] shadow-2xl shadow-[#FF5A1F]/20 border-b border-white/10">
      {/* Full-width Hero Banner Frame matching the website's #FF5A1F color scheme with no black space at top */}
      <div className="relative w-full px-4 sm:px-8 lg:px-16 pb-4 overflow-hidden">
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-black/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[560px] lg:min-h-[620px]">
          
          {/* Left Column: Headline, Pill, Subtitle & Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:space-y-8 text-white z-20">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-space font-bold text-black shadow-lg">
                <Sparkles className="h-3.5 w-3.5 text-[#FF5A1F]" />
                <span>AI-Driven Agency</span>
              </span>
            </motion.div>

            {/* Giant Display Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-white">
                Your AI sprint
                <br />
                <span className="inline-flex items-center flex-wrap gap-2">
                  <span>team on demand</span>
                  {/* Embedded Floating Pill Badge with mini icons */}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#B02800] border border-white/25 px-3 py-1.5 shadow-lg align-middle transform translate-y-[-2px]">
                    <span className="h-4 w-4 rounded-full bg-white flex items-center justify-center text-[9px] font-bold text-[#FF5A1F]">✦</span>
                    <span className="h-4 w-4 rounded-full bg-orange-300 flex items-center justify-center text-[8px] font-bold text-black">M</span>
                    <span className="h-4 w-4 rounded-full bg-white flex items-center justify-center text-[8px] text-orange-600 font-bold">🧡</span>
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-white/95 font-sans max-w-md leading-relaxed font-normal"
            >
              From discovery to deployment, we plug into your stack to prototype, validate, and launch AI experiences your users actually love.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#services"
                className="rounded-full bg-[#090909] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-2xl hover:bg-black hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer font-syne border border-white/10"
              >
                Explore Services
              </a>

              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenResumeModal();
                }}
                className="rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-bold text-black shadow-lg hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer font-syne"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Center Column: Hooded Model standing seamlessly directly on the orange canvas */}
          <div className="lg:col-span-4 relative flex items-end justify-center h-full my-2 lg:my-0 z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative w-full max-w-[380px] sm:max-w-[440px] h-[520px] sm:h-[580px] lg:h-[640px] flex items-end justify-center"
            >
              {/* Subject image blending seamlessly into orange canvas */}
              <div className="relative w-full h-full flex items-end justify-center">
                <img
                  src="/src/assets/images/regenerated_image_1785750001960.png"
                  alt="AI Sprint Leader"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top rounded-3xl filter brightness-105 contrast-105 drop-shadow-2xl pointer-events-auto"
                />
                {/* Smooth bottom transition into client logo bar */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#C83600] to-transparent pointer-events-none" />
              </div>

              {/* "Scroll for more ↓" pill at bottom center of model */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[11px] font-space font-bold text-black shadow-2xl hover:bg-neutral-100 transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <span>Scroll for more</span>
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black text-white text-[10px]">
                    <ArrowDown className="h-2.5 w-2.5" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Case study testimonial & Growth metric */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-10 text-white z-20 lg:pl-4">
            {/* Top Right Testimonial Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-xs sm:text-sm text-white/95 font-sans leading-relaxed">
                We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.
              </p>
            </motion.div>

            {/* Bottom Right Growth Metric Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-2 pt-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-space font-extrabold uppercase tracking-widest text-white/80">
                  OUR GROWTH
                </span>
                <div className="flex items-center gap-1 text-white/80">
                  <ChevronLeft className="h-3.5 w-3.5 cursor-pointer hover:text-white" />
                  <ChevronRight className="h-3.5 w-3.5 cursor-pointer hover:text-white" />
                </div>
              </div>

              <div className="font-syne text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-none">
                {PERSONAL_INFO.projectsCompleted || "230K"}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Large Semi-Transparent Background Watermark Text across bottom */}
        <div className="absolute bottom-6 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-10 text-center">
          <span className="font-syne text-[100px] sm:text-[180px] lg:text-[220px] font-black text-white uppercase tracking-tighter leading-none block">
            ActionAi
          </span>
        </div>

        {/* Client / Stack Logo Bar across the bottom */}
        <div className="relative z-20 pt-8 mt-8 border-t border-white/20 mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-6 opacity-95 text-white font-syne text-xs sm:text-sm font-bold tracking-wider uppercase">
            <span className="flex items-center gap-1.5"><span className="text-lg">●</span> Calendly</span>
            <span className="flex items-center gap-1.5"><span className="text-lg">☁</span> classpass</span>
            <span className="flex items-center gap-1.5"><span className="text-lg">⚙</span> GitHub</span>
            <span className="flex items-center gap-1.5"><span className="text-lg">⚡</span> Basecamp</span>
            <span className="flex items-center gap-1.5"><span className="text-lg">〰</span> attentive</span>
            <span className="flex items-center gap-1.5"><span className="text-lg">★</span> GUMROAD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
