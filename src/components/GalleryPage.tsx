import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, Maximize2, Download, Heart } from 'lucide-react';
import Logo from './Logo';

interface GalleryPageProps {
  onBack: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

interface PhotoItem {
  id: string;
  title: string;
  location: string;
  src: string;
  span: string;
  heightClass: string;
}

const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 'photo-1',
    title: 'AlUla Rock Formations & Sandstone Monoliths',
    location: 'AlUla Valley, Saudi Arabia',
    src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1600',
    span: 'lg:col-span-2 md:col-span-2',
    heightClass: 'h-[320px] sm:h-[400px]',
  },
  {
    id: 'photo-2',
    title: 'Footprints Across Golden Dunes',
    location: 'Rub al Khali, Arabian Desert',
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000',
    span: 'lg:col-span-1 md:col-span-1',
    heightClass: 'h-[320px] sm:h-[400px]',
  },
  {
    id: 'photo-3',
    title: 'Caravan Across the Dune Ridge',
    location: 'Wahiba Sands, Oman',
    src: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1000',
    span: 'lg:col-span-1 md:col-span-1',
    heightClass: 'h-[280px] sm:h-[340px]',
  },
  {
    id: 'photo-4',
    title: 'Sunset Tea & Desert Hospitality',
    location: 'AlUla Desert Camp',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
    span: 'lg:col-span-1 md:col-span-1',
    heightClass: 'h-[280px] sm:h-[340px]',
  },
  {
    id: 'photo-5',
    title: 'Sunlight Through Slot Canyon Walls',
    location: 'Hegra Canyon Passage',
    src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1000',
    span: 'lg:col-span-1 md:col-span-1',
    heightClass: 'h-[280px] sm:h-[340px]',
  },
  {
    id: 'photo-6',
    title: 'Turquoise Oasis Sky & Wispy Clouds',
    location: 'AlUla Sky Route',
    src: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=1000',
    span: 'lg:col-span-1 md:col-span-1',
    heightClass: 'h-[200px] sm:h-[240px]',
  },
  {
    id: 'photo-7',
    title: 'Golden Sunset Horizon Over Mountain Ridge',
    location: 'AlUla Highland Vista',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600',
    span: 'lg:col-span-2 md:col-span-2',
    heightClass: 'h-[200px] sm:h-[240px]',
  },
];

export default function GalleryPage({ onBack, onNavigateSection }: GalleryPageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPhotos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNavClick = (sectionId: string) => {
    onBack();
    if (onNavigateSection) {
      setTimeout(() => {
        onNavigateSection(sectionId);
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[#060606] text-white py-6 sm:py-10 px-4 sm:px-8 lg:px-12 selection:bg-[#FF5A1F] selection:text-black font-sans antialiased w-full">
      {/* Top Header Bar */}
      <header className="flex items-center justify-between pb-6 sm:pb-8 border-b border-white/10 mb-8 sm:mb-12 w-full">
        {/* Left Brand */}
        <div
          onClick={onBack}
          className="cursor-pointer group flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black border border-white/20 p-1.5 shadow-lg shadow-[#FF5A1F]/20 group-hover:border-[#FF5A1F]/50 transition-all">
            <Logo className="h-full w-full" />
          </div>
          <span className="font-syne font-bold text-lg sm:text-xl text-white tracking-wider group-hover:text-[#FF5A1F] transition-colors">
            NIHAL <span className="text-[#FF5A1F] font-light">/ GALLERY</span>
          </span>
        </div>

        {/* Center Location Meta */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-400">
          <span>Based in:</span>
          <span className="font-bold text-[#FF5A1F]">AlUla & Global Routes</span>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden sm:flex items-center gap-6 text-xs sm:text-sm font-medium text-neutral-400">
            <button
              onClick={() => handleNavClick('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="text-[#FF5A1F] font-bold border-b-2 border-[#FF5A1F] pb-0.5 cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Return Floating Badge Button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs font-syne font-bold text-white shadow-lg hover:bg-[#FF5A1F] hover:text-black hover:border-[#FF5A1F] transition-all cursor-pointer backdrop-blur-md"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </header>

      {/* Hero Section Header */}
      <div className="pb-8 sm:pb-12 w-full">
        {/* Stories Pill Badge */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF5A1F]/15 border border-[#FF5A1F]/40 text-[#FF5A1F] text-xs font-mono font-bold uppercase tracking-wider">
            Our Stories
          </span>
        </motion.div>

        {/* Title & Caption Row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-syne text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[0.95]"
          >
            Photo Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs sm:text-sm text-neutral-400 max-w-xs md:text-right font-sans leading-relaxed"
          >
            Captured moments from our desert trips and scenic routes.
          </motion.p>
        </div>
      </div>

      {/* Photos Grid Full Bleed Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 w-full">
        {GALLERY_PHOTOS.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 + index * 0.08,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={() => setSelectedPhoto(photo)}
            className={`group relative ${photo.span} ${photo.heightClass} rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#111111] border border-white/10 cursor-pointer shadow-xl hover:border-[#FF5A1F]/50 hover:shadow-[#FF5A1F]/20 transition-all duration-500 transform hover:-translate-y-1`}
          >
            <img
              src={photo.src}
              alt={photo.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Overlay & Hover Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
              <div className="flex justify-end">
                <button
                  onClick={(e) => toggleLike(photo.id, e)}
                  className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                    likedPhotos[photo.id]
                      ? 'bg-red-500 text-white'
                      : 'bg-black/50 text-white hover:bg-[#FF5A1F] hover:text-black border border-white/20'
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      likedPhotos[photo.id] ? 'fill-current' : ''
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-end justify-between text-white">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#FF5A1F]">
                    {photo.location}
                  </p>
                  <h3 className="font-syne font-bold text-sm sm:text-base leading-tight mt-0.5 text-white">
                    {photo.title}
                  </h3>
                </div>
                <div className="h-9 w-9 rounded-full bg-[#FF5A1F] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Info Bar */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4 w-full">
        <p>© {new Date().getFullYear()} NIHAL / AlUla Scenic Route Archive.</p>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[#FF5A1F]">7 HIGH-RES CURATED SHOTS</span>
          <button
            onClick={onBack}
            className="font-bold text-white hover:text-[#FF5A1F] transition-colors cursor-pointer"
          >
            Return Home →
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-xl"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center bg-[#0d0d11] rounded-3xl p-4 sm:p-6 border border-white/15 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#FF5A1F] hover:text-black transition-colors cursor-pointer border border-white/10"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] max-w-full object-contain"
                />
              </div>

              <div className="mt-4 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-3 px-2">
                <div>
                  <span className="text-xs font-mono text-[#FF5A1F]">
                    {selectedPhoto.location}
                  </span>
                  <h2 className="font-syne font-bold text-lg sm:text-xl text-white">
                    {selectedPhoto.title}
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => toggleLike(selectedPhoto.id, e)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium transition-colors cursor-pointer border border-white/15"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        likedPhotos[selectedPhoto.id]
                          ? 'fill-red-500 text-red-500'
                          : ''
                      }`}
                    />
                    <span>
                      {likedPhotos[selectedPhoto.id] ? 'Liked' : 'Like'}
                    </span>
                  </button>
                  <a
                    href={selectedPhoto.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF5A1F] text-black text-xs font-bold hover:bg-orange-500 transition-colors cursor-pointer shadow-md"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Original Image</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

