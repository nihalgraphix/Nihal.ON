import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, Maximize2, Download, Heart, Search, Filter, SlidersHorizontal, Image as ImageIcon, ArrowDown, Sparkles, Copy, Eye, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface GalleryPageProps {
  onBack: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

type PhotoCategory = 'All' | 'Landscapes' | 'Desert Routes' | 'Architecture' | 'Sunset & Stars' | 'Culture';

interface PhotoItem {
  id: string;
  title: string;
  location: string;
  category: 'Landscapes' | 'Desert Routes' | 'Architecture' | 'Sunset & Stars' | 'Culture';
  src: string;
  span?: string;
  heightClass?: string;
  tags: string[];
}

const CATEGORIES: PhotoCategory[] = [
  'All',
  'Landscapes',
  'Desert Routes',
  'Architecture',
  'Sunset & Stars',
  'Culture',
];

const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 'photo-1',
    title: 'AlUla Rock Formations & Sandstone Monoliths',
    location: 'AlUla Valley, Saudi Arabia',
    category: 'Landscapes',
    src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1600',
    span: 'xl:col-span-2 lg:col-span-2 md:col-span-2',
    heightClass: 'h-[190px] sm:h-[230px]',
    tags: ['sandstone', 'canyon', 'monolith', 'valley'],
  },
  {
    id: 'photo-2',
    title: 'Footprints Across Golden Dunes',
    location: 'Rub al Khali, Arabian Desert',
    category: 'Desert Routes',
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000',
    span: 'xl:col-span-1 lg:col-span-1 md:col-span-1',
    heightClass: 'h-[190px] sm:h-[230px]',
    tags: ['dunes', 'desert', 'dune ridge', 'tracks'],
  },
  {
    id: 'photo-3',
    title: 'Caravan Across the Dune Ridge',
    location: 'Wahiba Sands, Oman',
    category: 'Desert Routes',
    src: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1000',
    span: 'xl:col-span-1 lg:col-span-1 md:col-span-1',
    heightClass: 'h-[190px] sm:h-[230px]',
    tags: ['caravan', 'camels', 'desert', 'ridge'],
  },
  {
    id: 'photo-4',
    title: 'Sunset Tea & Desert Hospitality',
    location: 'AlUla Desert Camp',
    category: 'Culture',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
    span: 'xl:col-span-1 lg:col-span-1 md:col-span-1',
    heightClass: 'h-[180px] sm:h-[210px]',
    tags: ['camp', 'hospitality', 'sunset', 'tradition'],
  },
  {
    id: 'photo-5',
    title: 'Sunlight Through Slot Canyon Walls',
    location: 'Hegra Canyon Passage',
    category: 'Landscapes',
    src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1000',
    span: 'xl:col-span-1 lg:col-span-1 md:col-span-1',
    heightClass: 'h-[180px] sm:h-[210px]',
    tags: ['slot canyon', 'sunbeams', 'rocks', 'hegra'],
  },
  {
    id: 'photo-6',
    title: 'Ancient Tombs of Hegra Heritage Site',
    location: 'Madain Salih, AlUla',
    category: 'Architecture',
    src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=1200',
    span: 'xl:col-span-2 lg:col-span-2 md:col-span-2',
    heightClass: 'h-[180px] sm:h-[210px]',
    tags: ['hegra', 'tombs', 'nabataean', 'heritage', 'carved'],
  },
  {
    id: 'photo-7',
    title: 'Turquoise Oasis Sky & Wispy Clouds',
    location: 'AlUla Sky Route',
    category: 'Landscapes',
    src: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=1000',
    span: 'xl:col-span-1 lg:col-span-1 md:col-span-1',
    heightClass: 'h-[180px] sm:h-[210px]',
    tags: ['sky', 'clouds', 'route', 'horizon'],
  },
  {
    id: 'photo-8',
    title: 'Golden Sunset Horizon Over Mountain Ridge',
    location: 'AlUla Highland Vista',
    category: 'Sunset & Stars',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600',
    span: 'xl:col-span-2 lg:col-span-2 md:col-span-2',
    heightClass: 'h-[180px] sm:h-[210px]',
    tags: ['sunset', 'mountain', 'golden hour', 'vista'],
  },
  {
    id: 'photo-9',
    title: 'Stargazing Under Arabian Milky Way',
    location: 'Gharameel Dark Sky Reserve',
    category: 'Sunset & Stars',
    src: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=1200',
    span: 'xl:col-span-2 lg:col-span-2 md:col-span-2',
    heightClass: 'h-[180px] sm:h-[210px]',
    tags: ['milky way', 'stars', 'night', 'stargazing', 'astronomy'],
  },
  {
    id: 'photo-10',
    title: 'Maraya Concert Hall Mirror Architecture',
    location: 'Ashar Valley, AlUla',
    category: 'Architecture',
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    span: 'xl:col-span-1 lg:col-span-1 md:col-span-1',
    heightClass: 'h-[180px] sm:h-[210px]',
    tags: ['maraya', 'mirrors', 'architecture', 'design', 'modern'],
  },
  {
    id: 'photo-11',
    title: 'Bedouin Coffee & Incense Ceremony',
    location: 'AlUla Old Town',
    category: 'Culture',
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1000',
    span: 'xl:col-span-1 lg:col-span-1 md:col-span-1',
    heightClass: 'h-[180px] sm:h-[210px]',
    tags: ['coffee', 'ceremony', 'bedouin', 'incense', 'culture'],
  },
  {
    id: 'photo-12',
    title: 'Wadi Desert Off-Road Expedition',
    location: 'Wadi Al-Fann Route',
    category: 'Desert Routes',
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200',
    span: 'xl:col-span-2 lg:col-span-2 md:col-span-2',
    heightClass: 'h-[180px] sm:h-[210px]',
    tags: ['offroad', 'wadi', 'expedition', 'adventure', 'route'],
  },
];

const ARC_PHOTOS = [
  {
    id: 'photo-arch-1',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    title: 'Monochrome Halftone Portrait',
    angle: -30,
    rotate: 12,
    yOffset: 24,
    extraClass: 'filter grayscale contrast-125',
  },
  {
    id: 'photo-arch-2',
    src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800',
    title: 'Cyberpunk Helmet Suit',
    angle: -20,
    rotate: 7,
    yOffset: 12,
    extraClass: 'brightness-90 contrast-110',
  },
  {
    id: 'photo-arch-3',
    src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=800',
    title: 'Sci-Fi Corridor Figure',
    angle: -10,
    rotate: 3,
    yOffset: 4,
    extraClass: 'brightness-95',
  },
  {
    id: 'photo-arch-4',
    src: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800',
    title: 'Neon Green Glow Split',
    angle: 0,
    rotate: 0,
    yOffset: 0,
    isCenter: true,
  },
  {
    id: 'photo-arch-5',
    src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800',
    title: 'Futuristic White Motorcycle',
    angle: 10,
    rotate: -3,
    yOffset: 4,
    extraClass: '',
  },
  {
    id: 'photo-arch-6',
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=800',
    title: 'Cyberpunk Reflective Visor',
    angle: 20,
    rotate: -7,
    yOffset: 12,
    extraClass: '',
  },
  {
    id: 'photo-arch-7',
    src: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=800',
    title: 'Vivid Pink VR Headset',
    angle: 30,
    rotate: -12,
    yOffset: 24,
    extraClass: '',
  },
];

export default function GalleryPage({ onBack, onNavigateSection }: GalleryPageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory>('All');

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

  // Filter photos by Category and Search Query
  const filteredPhotos = useMemo(() => {
    return GALLERY_PHOTOS.filter((photo) => {
      const matchesCategory =
        selectedCategory === 'All' || photo.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        photo.title.toLowerCase().includes(query) ||
        photo.location.toLowerCase().includes(query) ||
        photo.category.toLowerCase().includes(query) ||
        photo.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Calculate count for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<PhotoCategory, number> = {
      All: GALLERY_PHOTOS.length,
      Landscapes: 0,
      'Desert Routes': 0,
      Architecture: 0,
      'Sunset & Stars': 0,
      Culture: 0,
    };

    GALLERY_PHOTOS.forEach((photo) => {
      counts[photo.category] = (counts[photo.category] || 0) + 1;
    });

    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-[#060606] text-white py-3 sm:py-5 px-3 sm:px-6 lg:px-10 selection:bg-[#FF5A1F] selection:text-black font-sans antialiased w-full">
      {/* Top Header Bar */}
      <header className="flex items-center justify-between py-3 px-4 sm:px-6 mb-6 w-full max-w-7xl mx-auto">
        {/* Left Brand */}
        <div
          onClick={onBack}
          className="cursor-pointer group flex items-center gap-2.5"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg overflow-hidden">
            <Logo className="h-full w-full" />
          </div>
          <span className="font-syne font-bold text-lg text-white tracking-tight">
            Nihal Frames
          </span>
        </div>

        {/* Right Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer backdrop-blur-md"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>
      </header>

      {/* Main Dark Card Hero Showcase */}
      <div className="relative w-full max-w-7xl mx-auto rounded-[32px] sm:rounded-[40px] bg-[#0c0c10] text-white pt-10 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-8 shadow-2xl overflow-hidden border border-white/10 mb-8 text-center">
        {/* Subtle Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-b from-purple-900/15 via-red-900/10 to-transparent blur-[90px] pointer-events-none rounded-full" />

        {/* Top Notification Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181820]/90 border border-white/10 text-xs text-neutral-300 shadow-inner backdrop-blur-md cursor-pointer hover:border-purple-500/40 transition-all"
        >
          <span>Try our personal cards now!</span>
          <span className="text-[#a855f7] font-medium flex items-center gap-0.5">
            Learn more <ArrowRight className="h-3 w-3" />
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="font-sans text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-tight"
        >
          Create your <span className="font-semibold">FaceCards</span>
        </motion.h1>

        {/* Faded Secondary Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          className="font-sans text-2xl sm:text-4xl font-normal text-neutral-500 tracking-tight mt-1"
        >
          Express Yourself with this Cards
        </motion.h2>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed font-sans"
        >
          With our cutting-edge FaceCards feature, you can now craft your own
          personalized bank card based on your unique facial features.
        </motion.p>

        {/* Center Pill CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.36 }}
          className="mt-6 flex justify-center"
        >
          <button
            onClick={() => {
              document.getElementById('gallery-grid-start')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-black font-sans font-semibold text-xs sm:text-sm shadow-xl hover:bg-neutral-200 transition-all cursor-pointer hover:scale-105 group"
          >
            <span>Start today!</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white text-xs">
              →
            </div>
          </button>
        </motion.div>

        {/* 3D FaceCards Showcase Deck with Speed-light Streaks Background */}
        <div className="relative w-full max-w-5xl mx-auto h-[260px] sm:h-[340px] md:h-[380px] mt-12 sm:mt-16 flex justify-center items-center overflow-hidden">
          {/* Neon Speed-light Streak Background Overlay */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[140px] bg-gradient-to-r from-purple-900/40 via-amber-500/30 to-red-600/40 blur-3xl pointer-events-none" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent shadow-[0_0_20px_#f59e0b] pointer-events-none" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-2 h-[2px] bg-gradient-to-r from-purple-500/60 via-red-500/70 to-amber-500/60 blur-[1px] pointer-events-none" />

          {/* Far Left Translucent Card Silhouette */}
          <div className="hidden lg:block absolute left-2 top-1/2 -translate-y-1/2 w-[180px] h-[280px] rounded-[24px] bg-neutral-900/40 border border-white/5 opacity-40 backdrop-blur-sm -rotate-3" />

          {/* CARD 1: Red Crimson Theme (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6 }}
            className="relative z-10 w-[150px] sm:w-[210px] md:w-[250px] h-[220px] sm:h-[300px] md:h-[350px] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-gradient-to-b from-[#8b001a] via-[#5c0012] to-[#120004] border border-red-500/30 shadow-2xl p-3 sm:p-5 flex flex-col justify-between text-left group hover:scale-105 transition-transform duration-300 -mr-2 sm:-mr-4"
          >
            {/* Halftone / Dot pattern overlay */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
            
            {/* Face/Portrait Image Tinted Overlay */}
            <div className="absolute inset-0 overflow-hidden mix-blend-overlay opacity-50">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                alt="Card Portrait"
                className="w-full h-full object-cover filter contrast-150"
              />
            </div>

            {/* Top Logo & Card Name */}
            <div className="relative z-10 flex items-center gap-2">
              <div className="h-5 w-5 bg-white text-black rounded p-0.5 flex items-center justify-center font-bold text-[10px]">
                ✦
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-white tracking-wider leading-none">Personal</p>
                <p className="text-[9px] sm:text-[10px] text-red-200 tracking-wider leading-none mt-0.5">Cards®</p>
              </div>
            </div>

            {/* Middle Card Details */}
            <div className="relative z-10 space-y-2 sm:space-y-3">
              <div>
                <p className="text-[8px] sm:text-[9px] text-red-300 font-mono tracking-widest uppercase">CARD NO.</p>
                <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono font-bold text-white tracking-widest mt-0.5">
                  <span>8758 **** **** 0947</span>
                  <Copy className="h-3 w-3 text-red-200 opacity-80 cursor-pointer hover:opacity-100" />
                </div>
              </div>

              <div>
                <p className="text-[8px] sm:text-[9px] text-red-300 font-mono tracking-widest uppercase">CARD HOLDER</p>
                <p className="text-[10px] sm:text-xs font-mono font-bold text-white tracking-wider mt-0.5 uppercase">
                  MARGARET O. GUIDRY
                </p>
              </div>
            </div>

            {/* Bottom Expiry & CCV */}
            <div className="relative z-10 flex items-center justify-between border-t border-red-500/20 pt-2 text-[8px] sm:text-[10px] font-mono text-red-200">
              <div>
                <span className="block text-[7px] sm:text-[8px] text-red-300">EXP DATE</span>
                <span className="font-bold text-white">10/14</span>
              </div>
              <div>
                <span className="block text-[7px] sm:text-[8px] text-red-300">CCV</span>
                <span className="font-bold text-white">0**</span>
              </div>
              <Eye className="h-3 w-3 text-red-200 opacity-80 cursor-pointer" />
            </div>
          </motion.div>

          {/* CARD 2: Amber Gold Theme (Center - Highlighted) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative z-20 w-[160px] sm:w-[220px] md:w-[260px] h-[230px] sm:h-[310px] md:h-[365px] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-gradient-to-b from-[#d97706] via-[#92400e] to-[#291003] border-2 border-amber-400/50 shadow-[0_0_40px_rgba(217,119,6,0.3)] p-3 sm:p-5 flex flex-col justify-between text-left group hover:scale-105 transition-transform duration-300"
          >
            {/* Halftone / Dot pattern overlay */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:10px_10px] pointer-events-none" />

            {/* Face/Portrait Image Tinted Overlay */}
            <div className="absolute inset-0 overflow-hidden mix-blend-overlay opacity-60">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Card Portrait"
                className="w-full h-full object-cover filter contrast-125"
              />
            </div>

            {/* Top Logo & Card Name */}
            <div className="relative z-10 flex items-center gap-2">
              <div className="h-5 w-5 bg-white text-black rounded p-0.5 flex items-center justify-center font-bold text-[10px]">
                ✦
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-white tracking-wider leading-none">Personal</p>
                <p className="text-[9px] sm:text-[10px] text-amber-200 tracking-wider leading-none mt-0.5">Cards®</p>
              </div>
            </div>

            {/* Middle Card Details */}
            <div className="relative z-10 space-y-2 sm:space-y-3">
              <div>
                <p className="text-[8px] sm:text-[9px] text-amber-200 font-mono tracking-widest uppercase">CARD NO.</p>
                <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono font-bold text-white tracking-widest mt-0.5">
                  <span>3759 **** **** 9456</span>
                  <Copy className="h-3 w-3 text-amber-200 opacity-80 cursor-pointer hover:opacity-100" />
                </div>
              </div>

              <div>
                <p className="text-[8px] sm:text-[9px] text-amber-200 font-mono tracking-widest uppercase">CARD HOLDER</p>
                <p className="text-[10px] sm:text-xs font-mono font-bold text-white tracking-wider mt-0.5 uppercase">
                  ROBERT M. MCCRAY
                </p>
              </div>
            </div>

            {/* Bottom Expiry & CCV */}
            <div className="relative z-10 flex items-center justify-between border-t border-amber-400/30 pt-2 text-[8px] sm:text-[10px] font-mono text-amber-100">
              <div>
                <span className="block text-[7px] sm:text-[8px] text-amber-200">EXP DATE</span>
                <span className="font-bold text-white">12/30</span>
              </div>
              <div>
                <span className="block text-[7px] sm:text-[8px] text-amber-200">CCV</span>
                <span className="font-bold text-white">9**</span>
              </div>
              <Eye className="h-3 w-3 text-amber-200 opacity-80 cursor-pointer" />
            </div>
          </motion.div>

          {/* CARD 3: Purple Magenta Theme (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
            className="relative z-10 w-[150px] sm:w-[210px] md:w-[250px] h-[220px] sm:h-[300px] md:h-[350px] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-gradient-to-b from-[#581c87] via-[#3b0764] to-[#0f021e] border border-purple-500/30 shadow-2xl p-3 sm:p-5 flex flex-col justify-between text-left group hover:scale-105 transition-transform duration-300 -ml-2 sm:-ml-4"
          >
            {/* Halftone / Dot pattern overlay */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

            {/* Face/Portrait Image Tinted Overlay */}
            <div className="absolute inset-0 overflow-hidden mix-blend-overlay opacity-50">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Card Portrait"
                className="w-full h-full object-cover filter contrast-150"
              />
            </div>

            {/* Top Logo & Card Name */}
            <div className="relative z-10 flex items-center gap-2">
              <div className="h-5 w-5 bg-white text-black rounded p-0.5 flex items-center justify-center font-bold text-[10px]">
                ✦
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-white tracking-wider leading-none">Personal</p>
                <p className="text-[9px] sm:text-[10px] text-purple-200 tracking-wider leading-none mt-0.5">Cards®</p>
              </div>
            </div>

            {/* Middle Card Details */}
            <div className="relative z-10 space-y-2 sm:space-y-3">
              <div>
                <p className="text-[8px] sm:text-[9px] text-purple-300 font-mono tracking-widest uppercase">CARD NO.</p>
                <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono font-bold text-white tracking-widest mt-0.5">
                  <span>9270 **** **** 1554</span>
                  <Copy className="h-3 w-3 text-purple-200 opacity-80 cursor-pointer hover:opacity-100" />
                </div>
              </div>

              <div>
                <p className="text-[8px] sm:text-[9px] text-purple-300 font-mono tracking-widest uppercase">CARD HOLDER</p>
                <p className="text-[10px] sm:text-xs font-mono font-bold text-white tracking-wider mt-0.5 uppercase">
                  JANICE W. SEYMOUR
                </p>
              </div>
            </div>

            {/* Bottom Expiry & CCV */}
            <div className="relative z-10 flex items-center justify-between border-t border-purple-500/20 pt-2 text-[8px] sm:text-[10px] font-mono text-purple-200">
              <div>
                <span className="block text-[7px] sm:text-[8px] text-purple-300">EXP DATE</span>
                <span className="font-bold text-white">07/06</span>
              </div>
              <div>
                <span className="block text-[7px] sm:text-[8px] text-purple-300">CCV</span>
                <span className="font-bold text-white">2**</span>
              </div>
              <Eye className="h-3 w-3 text-purple-200 opacity-80 cursor-pointer" />
            </div>
          </motion.div>

          {/* Far Right Translucent Card Silhouette */}
          <div className="hidden lg:block absolute right-2 top-1/2 -translate-y-1/2 w-[180px] h-[280px] rounded-[24px] bg-neutral-900/40 border border-white/5 opacity-40 backdrop-blur-sm rotate-3" />
        </div>
      </div>

      {/* Search & Filter Controls Bar */}
      <div id="gallery-grid-start" className="my-3 sm:my-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-[#0d0d12] border border-white/10 shadow-xl">
        {/* Search Input Box */}
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search photos by title, location, tag..."
            className="w-full pl-10 pr-9 py-2 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Categories Tab Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none w-full lg:w-auto">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-3 py-1.5 rounded-xl text-xs font-syne font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#FF5A1F] text-black shadow-md shadow-[#FF5A1F]/30'
                    : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                    isActive
                      ? 'bg-black/20 text-black font-extrabold'
                      : 'bg-white/10 text-neutral-400'
                  }`}
                >
                  {categoryCounts[cat]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Search/Category Results Indicator */}
      {(searchQuery || selectedCategory !== 'All') && (
        <div className="mb-3 flex items-center justify-between text-xs text-neutral-400 px-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span>Showing {filteredPhotos.length} of {GALLERY_PHOTOS.length} photos</span>
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FF5A1F]/20 text-[#FF5A1F] border border-[#FF5A1F]/30 text-[11px]">
                Category: {selectedCategory}
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-white text-[11px]">
                Query: "{searchQuery}"
              </span>
            )}
          </div>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-xs text-[#FF5A1F] hover:underline font-bold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Photos Grid - 3 to 4 Column Responsive Grid Layout */}
      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 w-full">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                delay: index * 0.03,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative ${photo.span || ''} ${photo.heightClass || 'h-[190px] sm:h-[220px]'} rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#111116] border border-white/10 cursor-pointer shadow-xl hover:border-[#FF5A1F]/50 hover:shadow-[#FF5A1F]/20 transition-all duration-300 transform hover:-translate-y-1`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Category Pill Tag in Top-Left */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-neutral-300 uppercase tracking-wider">
                  {photo.category}
                </span>
              </div>

              {/* Gradient Overlay & Hover Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <button
                    onClick={(e) => toggleLike(photo.id, e)}
                    className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                      likedPhotos[photo.id]
                        ? 'bg-red-500 text-white'
                        : 'bg-black/60 text-white hover:bg-[#FF5A1F] hover:text-black border border-white/20'
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
                  <div className="pr-2">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#FF5A1F]">
                      {photo.location}
                    </p>
                    <h3 className="font-syne font-bold text-xs sm:text-sm leading-tight mt-0.5 text-white line-clamp-2">
                      {photo.title}
                    </h3>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#FF5A1F] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Empty Search Results State */
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="my-16 py-16 px-6 text-center rounded-3xl bg-[#0d0d12] border border-white/10 flex flex-col items-center max-w-md mx-auto"
        >
          <div className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 mb-4">
            <ImageIcon className="h-6 w-6 text-[#FF5A1F]" />
          </div>
          <h3 className="font-syne font-bold text-lg text-white mb-2">No photos found</h3>
          <p className="text-xs text-neutral-400 leading-relaxed mb-6">
            We couldn't find any shots matching "{searchQuery}" in category "{selectedCategory}".
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 rounded-full bg-[#FF5A1F] text-black text-xs font-syne font-bold hover:bg-orange-500 transition-colors shadow-lg cursor-pointer"
          >
            Clear Search & Filters
          </button>
        </motion.div>
      )}

      {/* Footer Info Bar */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4 w-full">
        <p>© {new Date().getFullYear()} NIHAL / AlUla Scenic Route Archive.</p>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[#FF5A1F]">
            {filteredPhotos.length} HIGH-RES SHOTS
          </span>
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

              <div className="w-full max-h-[72vh] flex items-center justify-center rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[72vh] max-w-full object-contain"
                />
              </div>

              <div className="mt-4 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-3 px-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FF5A1F]/20 text-[#FF5A1F] border border-[#FF5A1F]/30">
                      {selectedPhoto.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {selectedPhoto.location}
                    </span>
                  </div>
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


