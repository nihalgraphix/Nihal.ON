import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

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
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'blog', label: 'Blog' },
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
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl transition-all duration-300">
        <div
          className={`mx-auto flex items-center justify-between px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#080808]/92 backdrop-blur-2xl border-white/20 shadow-2xl shadow-black/90'
              : 'bg-[#0d0d0d]/85 backdrop-blur-xl border-white/15 shadow-2xl'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="group flex items-center gap-3 text-lg sm:text-xl font-bold tracking-tight text-white pr-2"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5A1F] text-black font-syne font-black text-lg shadow-lg shadow-[#FF5A1F]/30 group-hover:scale-108 transition-transform">
              N
            </span>
            <span className="font-syne tracking-wider text-white group-hover:text-[#FF5A1F] transition-colors">
              NIHAL
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 sm:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3.5 py-2 text-xs xl:text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'text-black font-bold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="floatingNavActive"
                    className="absolute inset-0 rounded-full bg-[#FF5A1F] shadow-md shadow-[#FF5A1F]/40"
                    style={{ zIndex: 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:text-[#FF5A1F] hover:border-[#FF5A1F]/40 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-[#FF5A1F]" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Floating Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md rounded-3xl bg-[#090909]/95 backdrop-blur-2xl border border-white/15 p-6 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[#FF5A1F] font-space font-bold mb-1">
                Navigation Menu
              </span>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-left text-sm font-syne font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-[#FF5A1F] text-black font-bold shadow-md shadow-[#FF5A1F]/30'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && <span className="h-1.5 w-1.5 rounded-full bg-black" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
