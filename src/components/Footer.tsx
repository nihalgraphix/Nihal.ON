import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowUp, Heart, Sparkles, Phone, Mail, Instagram, Youtube, Linkedin, Github, Globe, CloudSun } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer({
  setActiveSection
}: {
  setActiveSection: (sec: string) => void;
}) {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'X', handle: '@nihal.on', url: PERSONAL_INFO.twitter, icon: '𝕏' },
    { name: 'Instagram', handle: '@nihal.on', url: PERSONAL_INFO.instagram, icon: '📸' },
    { name: 'Dribbble', handle: '@nihal.on', url: PERSONAL_INFO.dribbble, icon: '🎨' },
    { name: 'YouTube', handle: '@nihal.on', url: 'https://youtube.com', icon: '▶' },
    { name: 'GitHub', handle: '@nihal.on', url: PERSONAL_INFO.github, icon: '💼' }
  ];

  return (
    <footer className="relative bg-[#080808] text-white w-full py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-12 rounded-t-[28px] sm:rounded-t-[36px] overflow-hidden border-t border-white/10">
      {/* Inner Footer Content Container */}
      <div className="mx-auto max-w-7xl relative">
        
        {/* Top 4-Column Grid Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-6 pb-8 sm:pb-10 border-b border-white/10">
          
          {/* Column 1: Bio Statement (lg:col-span-4) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <h2 className="font-syne text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              Nihal is independent creative director and solopreneur
            </h2>
            <p className="mt-2 text-xs text-neutral-400 font-sans leading-relaxed">
              Crafting high-impact AI products, digital experiences, and brand identity systems for visionary founders worldwide.
            </p>
          </div>

          {/* Column 2: Explore Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-space font-bold text-neutral-500 uppercase tracking-wider mb-3">
              Explore
            </h3>
            <ul className="space-y-2 text-xs font-space font-medium text-neutral-300">
              <li>
                <button
                  onClick={() => {
                    setActiveSection('about');
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF5A1F] transition-colors cursor-pointer"
                >
                  Bio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveSection('projects');
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF5A1F] transition-colors cursor-pointer"
                >
                  Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveSection('services');
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF5A1F] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveSection('blog');
                    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF5A1F] transition-colors cursor-pointer"
                >
                  Newsletter
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveSection('contact');
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF5A1F] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Me Social Pills (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-space font-bold text-neutral-500 uppercase tracking-wider mb-3">
              Follow me
            </h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-space font-medium text-neutral-200 hover:bg-[#FF5A1F] hover:text-black hover:border-[#FF5A1F] transition-all"
                >
                  <span className="text-xs">{item.icon}</span>
                  <span>{item.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: CTAs & Action Badges (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-start space-y-4">
            {/* Call Nihal CTA */}
            <div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('contact');
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2.5 text-base font-syne font-extrabold text-white hover:text-[#FF5A1F] transition-colors"
              >
                <span>Call Nihal</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF5A1F] text-black text-xs transition-transform group-hover:scale-110 shadow-md">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <span className="text-[11px] font-space text-neutral-500 block mt-0.5">
                Let's work together
              </span>
            </div>

            {/* Courses & Tools CTA */}
            <div>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('services');
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2.5 text-base font-syne font-extrabold text-white hover:text-[#FF5A1F] transition-colors"
              >
                <span>Courses & Tools</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white text-xs transition-transform group-hover:scale-110 shadow-md">
                  <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                </span>
              </a>
              <span className="text-[11px] font-space text-neutral-500 block mt-0.5">
                Creative tools & templates
              </span>
            </div>
          </div>

        </div>

        {/* Center Giant Brand Display Typography matching the reference photo */}
        <div className="py-4 sm:py-6 flex items-center justify-center overflow-hidden select-none">
          <h1 className="font-syne font-black text-[11vw] lg:text-[100px] xl:text-[120px] leading-none tracking-tighter text-white uppercase w-full text-center hover:text-[#FF5A1F] transition-colors duration-500">
            n i h a l . o n
          </h1>
        </div>

        {/* Bottom Metadata & Copyright Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-space text-neutral-500">
          <div className="flex items-center gap-3">
            <span>Nihal . On ©{new Date().getFullYear()}</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400 font-mono">
            <span>Kochi, Kerala, India</span>
            <span>{currentTime || '12:00 PM'}</span>
            <span className="flex items-center gap-1 text-white font-bold">
              <span>21°C</span>
              <CloudSun className="h-3.5 w-3.5 text-[#FF5A1F]" />
            </span>

            {/* Back to Top Quick Scroll Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#FF5A1F] hover:text-black transition-all shadow-sm cursor-pointer"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

