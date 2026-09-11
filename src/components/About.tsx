import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, aboutPortrait } from '../data/portfolioData';

// 8-Pointed Starburst Icon for Header with #FF5A1F accent
function StarburstIcon({ className = "w-6 h-6 sm:w-8 sm:h-8 text-[#FF5A1F]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 0L17.9 11.2L27.3 4.7L20.8 14.1L32 16L20.8 17.9L27.3 27.3L17.9 20.8L16 32L14.1 20.8L4.7 27.3L11.2 17.9L0 16L11.2 14.1L4.7 4.7L14.1 11.2Z" />
    </svg>
  );
}

// 4-Pointed Sparkle Star Icon for Cards
function SparkleStar({ className = "w-7 h-7 text-[#FF5A1F]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

// Elegant Handcrafted Signature SVG
function SignatureGraphic({ className = "w-36 h-14 text-white/80" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 50 Q 25 10 35 45 T 55 40 Q 65 20 75 55 T 95 38" />
      <path d="M85 45 Q 110 40 135 46 Q 160 48 185 40" />
      <path d="M45 28 Q 70 20 100 24" />
      <path d="M140 25 Q 155 15 165 42 Q 175 60 190 35 Q 200 20 215 48" />
      <circle cx="225" cy="46" r="2.5" fill="currentColor" />
    </svg>
  );
}

interface AboutProps {
  onOpenResumeModal?: () => void;
}

export default function About({ onOpenResumeModal }: AboutProps) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#060606] text-white overflow-hidden selection:bg-[#FF5A1F] selection:text-black">
      {/* Background Ambient Warm/Orange Glows matching website theme */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-[#FF5A1F]/10 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#FF5A1F]/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-10 left-10 h-64 w-64 rounded-full bg-[#E84A10]/10 blur-[140px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Section Header: ABOUT */}
        <div className="flex items-center justify-center mb-14 sm:mb-20 text-center">
          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase">
            About
          </h2>
        </div>

        {/* Bento Grid Layout Container */}
        <div className="space-y-6 sm:space-y-7">
          
          {/* TOP ROW: [ Portrait Card ] + [ Self-Introduction Card ] */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
            
            {/* Left: Portrait Card with warm gradient frame matching #FF5A1F */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 rounded-[32px] p-6 sm:p-7 bg-gradient-to-br from-[#161619] via-[#0f0f12] to-[#0a0a0c] border border-white/[0.08] hover:border-[#FF5A1F]/30 shadow-2xl flex flex-col justify-center items-center relative group transition-all duration-300"
            >
              <div className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[24px] overflow-hidden relative bg-gradient-to-tr from-[#FF5A1F] via-[#E84A10] to-[#FF9254] shadow-inner p-1">
                <img
                  src={aboutPortrait}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center rounded-[22px] filter contrast-[1.08] saturate-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 rounded-[22px] bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Right: Self Introduction / Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8 rounded-[32px] p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-[#161619] via-[#0f0f12] to-[#0a0a0c] border border-white/[0.08] hover:border-[#FF5A1F]/30 shadow-2xl flex flex-col justify-between relative transition-all duration-300"
            >
              <div className="mb-6">
                <SparkleStar className="w-8 h-8 text-[#FF5A1F] mb-6 sm:mb-8" />
                <h3 className="font-syne text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed max-w-2xl">
                  I am a San Francisco-based Creative Technologist & Senior Product Designer with a focus on web design, high-performance UI systems, and full-stack development. I have a diverse range of experience having worked across venture-backed startups, creative agencies, and global product studios.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                  <span className="text-neutral-300">{PERSONAL_INFO.status}</span>
                </div>
                <span className="text-neutral-600 hidden sm:inline">•</span>
                <div className="text-neutral-400">{PERSONAL_INFO.location}</div>
              </div>
            </motion.div>

          </div>

          {/* MIDDLE ROW: [ EXPERIENCE Card ] + [ EDUCATION Card ] */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch">
            
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-[32px] p-8 sm:p-10 bg-gradient-to-br from-[#161619] via-[#0f0f12] to-[#0a0a0c] border border-white/[0.08] hover:border-[#FF5A1F]/30 shadow-2xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#FF5A1F] uppercase">
                  Experience
                </h4>
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
              </div>

              <div className="space-y-7">
                <div>
                  <span className="text-xs font-mono text-[#FF5A1F] font-semibold tracking-wide">
                    2023 - PRESENT
                  </span>
                  <h5 className="text-base sm:text-lg font-syne font-bold text-white mt-1">
                    Lead Creative Technologist & Director
                  </h5>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    NIHAL Creative Studio
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <span className="text-xs font-mono text-neutral-500 font-medium tracking-wide">
                    2021 - 2023
                  </span>
                  <h5 className="text-base sm:text-lg font-syne font-bold text-white mt-1">
                    Senior UI/UX Architect & Staff Engineer
                  </h5>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Aetheria AI Labs
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <span className="text-xs font-mono text-neutral-500 font-medium tracking-wide">
                    2019 - 2021
                  </span>
                  <h5 className="text-base sm:text-lg font-syne font-bold text-white mt-1">
                    Senior Motion & Frontend Developer
                  </h5>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Vortex Digital Agency
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[32px] p-8 sm:p-10 bg-gradient-to-br from-[#161619] via-[#0f0f12] to-[#0a0a0c] border border-white/[0.08] hover:border-[#FF5A1F]/30 shadow-2xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#FF5A1F] uppercase">
                  Education
                </h4>
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
              </div>

              <div className="space-y-7">
                <div>
                  <span className="text-xs font-mono text-[#FF5A1F] font-semibold tracking-wide">
                    2018 - 2022
                  </span>
                  <h5 className="text-base sm:text-lg font-syne font-bold text-white mt-1">
                    Bachelor Degree in Computer Science & Interactive Media
                  </h5>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    University of California, Berkeley
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <span className="text-xs font-mono text-neutral-500 font-medium tracking-wide">
                    2022 - 2024
                  </span>
                  <h5 className="text-base sm:text-lg font-syne font-bold text-white mt-1">
                    Master Degree in Human-Computer Interaction
                  </h5>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Stanford University Center for Design Research
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <span className="text-xs font-mono text-neutral-500 font-medium tracking-wide">
                    2024 - 2025
                  </span>
                  <h5 className="text-base sm:text-lg font-syne font-bold text-white mt-1">
                    Advanced Creative Direction & WebGL Systems
                  </h5>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Awwwards Masterclass & Design Institute
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* BOTTOM ROW: [ Profiles Card ] + [ Let's work together Card ] + [ Credentials Card ] */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-7 items-stretch">
            
            {/* Card 1: Profiles Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="md:col-span-3 rounded-[32px] p-6 sm:p-7 bg-gradient-to-br from-[#161619] via-[#0f0f12] to-[#0a0a0c] border border-white/[0.08] hover:border-[#FF5A1F]/30 shadow-2xl flex flex-col justify-between group transition-all duration-300"
            >
              {/* Circular Social Icon Grid */}
              <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-black/50 border border-white/5 mb-6">
                <a
                  href={PERSONAL_INFO.dribbble}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF5A1F] hover:text-black text-neutral-400 border border-white/10 hover:border-[#FF5A1F] flex items-center justify-center transition-all duration-300"
                  title="Dribbble"
                >
                  <Dribbble className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF5A1F] hover:text-black text-neutral-400 border border-white/10 hover:border-[#FF5A1F] flex items-center justify-center transition-all duration-300"
                  title="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF5A1F] hover:text-black text-neutral-400 border border-white/10 hover:border-[#FF5A1F] flex items-center justify-center transition-all duration-300"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              {/* Bottom Label & Action */}
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#FF5A1F] uppercase block">
                    Stay with me
                  </span>
                  <h5 className="text-lg font-syne font-bold text-white mt-0.5">
                    Profiles
                  </h5>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F] transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Let's work together. (Wider Center Card) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={scrollToContact}
              className="md:col-span-6 rounded-[32px] p-7 sm:p-9 bg-gradient-to-br from-[#161619] via-[#0f0f12] to-[#0a0a0c] border border-white/[0.08] hover:border-[#FF5A1F]/40 shadow-2xl flex flex-col justify-between cursor-pointer group transition-all duration-300 relative overflow-hidden"
            >
              <div className="pointer-events-none absolute -right-10 -bottom-10 w-48 h-48 bg-[#FF5A1F]/15 rounded-full blur-3xl group-hover:bg-[#FF5A1F]/25 transition-all" />

              <SparkleStar className="w-8 h-8 text-[#FF5A1F] mb-6" />

              <div className="my-auto py-2">
                <h4 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  Let&apos;s <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] via-[#FF8040] to-[#FFA066] group-hover:brightness-110 transition-all">
                    work together.
                  </span>
                </h4>
              </div>

              <div className="flex items-center justify-end mt-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F] transition-all">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: Credentials Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              onClick={onOpenResumeModal}
              className="md:col-span-3 rounded-[32px] p-6 sm:p-7 bg-gradient-to-br from-[#161619] via-[#0f0f12] to-[#0a0a0c] border border-white/[0.08] hover:border-[#FF5A1F]/30 shadow-2xl flex flex-col justify-between group transition-all duration-300 cursor-pointer"
            >
              {/* Artistic Signature */}
              <div className="flex items-center justify-center py-3">
                <SignatureGraphic className="w-40 h-14 text-white/70 group-hover:text-[#FF5A1F] transition-colors duration-300" />
              </div>

              {/* Bottom Label & Action */}
              <div className="flex items-end justify-between mt-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#FF5A1F] uppercase block">
                    More about me
                  </span>
                  <h5 className="text-lg font-syne font-bold text-white mt-0.5">
                    Credentials
                  </h5>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F] transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
