import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  soundEnabled?: boolean;
  setSoundEnabled?: (val: boolean) => void;
  onOpenAiModal?: () => void;
  onOpenResumeModal?: () => void;
  onOpenBookingModal?: () => void;
}

export default function Navbar({
  activeSection,
  setActiveSection
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Works' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Navbar Container */}
      <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
        <div
          className={`mx-auto flex items-center justify-between px-3.5 py-2.5 sm:px-6 sm:py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#08080c]/92 backdrop-blur-2xl border-white/20 shadow-2xl shadow-black/90'
              : 'bg-[#0d0d12]/85 backdrop-blur-xl border-white/15 shadow-2xl'
          }`}
        >
          {/* Left Brand - Circular N Avatar + Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="group flex items-center gap-2.5 sm:gap-3 pr-2 cursor-pointer"
          >
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-black shadow-md group-hover:scale-105 group-hover:bg-[#FF5A1F] transition-all">
              <span className="font-syne font-black text-lg text-black leading-none tracking-tight">N</span>
            </div>
            <span className="font-syne font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-[#FF5A1F] transition-colors">
              Nihal
            </span>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold transition-colors rounded-full cursor-pointer ${
                  activeSection === link.id
                    ? 'text-black font-bold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="floatingNavActive"
                    className="absolute inset-0 rounded-full bg-[#FF5A1F] shadow-md shadow-[#FF5A1F]/30"
                    style={{ zIndex: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Action Controls matching reference image */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* WhatsApp / Chat Icon */}
            <a
              href="https://wa.me/14158903211"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-black hover:bg-[#FF5A1F] hover:text-black transition-all shadow-md group"
              title="Chat / WhatsApp"
            >
              <MessageCircle className="h-4 w-4 text-black" />
            </a>

            {/* Instagram Squircle Icon */}
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-white text-black hover:bg-[#FF5A1F] hover:text-black transition-all shadow-md"
              title="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>

            {/* Github Pill Button with Arrow Badge */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 sm:gap-2.5 rounded-full bg-black border border-white/20 pl-3.5 pr-1 py-1 hover:border-[#FF5A1F] transition-all shadow-lg"
            >
              <span className="font-syne text-xs sm:text-sm font-bold text-white group-hover:text-[#FF5A1F] transition-colors">
                Github
              </span>
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white text-black group-hover:bg-[#FF5A1F] transition-colors">
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </div>
            </a>

            {/* Mobile Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:text-[#FF5A1F] hover:border-[#FF5A1F]/40 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4 text-[#FF5A1F]" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md rounded-3xl bg-[#09090d]/95 backdrop-blur-2xl border border-white/15 p-6 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[#FF5A1F] font-mono font-bold mb-1">
                Navigation Menu
              </span>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-left text-sm font-syne font-medium transition-all cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-[#FF5A1F] text-black font-bold shadow-md shadow-[#FF5A1F]/30'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && <span className="h-1.5 w-1.5 rounded-full bg-black" />}
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-around">
                <a
                  href="https://wa.me/14158903211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-[#FF5A1F] hover:text-black transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-[#FF5A1F] hover:text-black transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

