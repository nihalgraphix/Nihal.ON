import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS, PERSONAL_INFO } from '../data/portfolioData';
import { BlogPost } from '../types';
import { ArrowUpRight, Clock, X, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  const tags = ['All', 'UI/UX', 'Dark Mode', 'React 19', 'GSAP', 'AI', 'Full-Stack'];

  const filteredPosts = selectedTag === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.tags.includes(selectedTag));

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="relative py-20 bg-[#060606] overflow-hidden">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#FF5A1F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#FF5A1F]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-5"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-space uppercase tracking-widest text-[#FF5A1F] mb-2">
              <span className="h-2 w-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span>Editorial Journal</span>
            </div>
            <h2 className="font-syne text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Thoughts On Design & Tech
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-between md:justify-end">
            {/* Tag Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-space font-semibold transition-all cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-[#FF5A1F] text-black font-bold shadow-md shadow-[#FF5A1F]/30 scale-105'
                      : 'bg-[#121216] text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Scroll Navigation Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleScroll('left')}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#121216] text-white hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-black transition-all shadow-md active:scale-95 cursor-pointer"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#121216] text-white hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-black transition-all shadow-md active:scale-95 cursor-pointer"
                aria-label="Scroll Right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3x2 Bento Grid Layout Container with Horizontal Scroll fallback */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-4 pt-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[200px] min-w-full">
            {filteredPosts.map((post, index) => {
              const bentoClasses = [
                "lg:col-span-2", // Card 1: Wide (2 cols)
                "lg:col-span-1", // Card 2: Standard (1 col)
                "lg:col-span-1", // Card 3: Standard (1 col)
                "lg:col-span-1", // Card 4: Standard (1 col)
                "lg:col-span-1", // Card 5: Standard (1 col)
                "lg:col-span-2", // Card 6: Wide (2 cols)
              ];
              const layoutClass = bentoClasses[index % bentoClasses.length];

              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedPost(post)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-white/10 hover:border-[#FF5A1F]/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#FF5A1F]/15 flex flex-col justify-between ${layoutClass}`}
                >
                  {/* Card Background Image */}
                  <div className="absolute inset-0 z-0 bg-[#0d0d10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Web-matched Dark Overlay with Gradient for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 group-hover:from-black/90 group-hover:via-black/50 transition-colors duration-500" />
                    {/* Subtle brand glow overlay */}
                    <div className="absolute inset-0 bg-[#FF5A1F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Top Category Label Overlay */}
                  <div className="relative z-10 p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-[11px] font-space font-bold uppercase tracking-wider text-white/90 drop-shadow">
                        {post.category}
                      </span>
                      <span className="text-[9px] font-space font-medium text-white/60 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                        {post.date}
                      </span>
                    </div>

                    <h3 className="font-syne text-base sm:text-lg font-bold text-white leading-snug tracking-tight mt-2 drop-shadow-md group-hover:text-[#FF5A1F] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                  </div>

                  {/* Bottom Action Pill Button matching reference image layout */}
                  <div className="relative z-10 p-4 sm:p-5 mt-auto pt-2 flex items-end justify-between">
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-white text-black font-space font-bold text-[11px] sm:text-xs px-3 py-1.5 shadow-md group-hover:bg-[#FF5A1F] group-hover:text-black transition-all duration-300 transform group-hover:translate-x-0.5">
                      <span>Read Article</span>
                      <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>

                    <div className="flex items-center gap-1 text-[10px] font-space font-medium text-white/70 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                      <Clock className="h-3 w-3 text-[#FF5A1F]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Read More on Blog Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <a
            href={PERSONAL_INFO.blogUrl || "https://medium.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#FF7A00] text-black font-space font-extrabold text-xs sm:text-sm px-6 py-3 shadow-xl shadow-[#FF5A1F]/20 hover:shadow-[#FF5A1F]/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <BookOpen className="h-4 w-4 stroke-[2.5]" />
            <span>Read More on Blog</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </motion.div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl p-4 sm:p-6 lg:p-12"
          >
            <div className="mx-auto max-w-3xl rounded-3xl bg-[#090909] border border-white/15 p-6 sm:p-10 shadow-2xl relative my-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-space text-[#FF5A1F] font-bold">
                  <BookOpen className="h-4 w-4" /> {selectedPost.category} // {selectedPost.readTime}
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#FF5A1F] hover:text-black transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <h1 className="font-syne text-2xl sm:text-4xl font-extrabold text-white">
                {selectedPost.title}
              </h1>

              <div className="flex items-center gap-3 text-xs font-space text-neutral-400">
                <span>By {selectedPost.author}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
              </div>

              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#111111]">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none text-neutral-300 text-sm font-sans whitespace-pre-line leading-relaxed space-y-4">
                {selectedPost.content}
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="rounded-full bg-[#FF5A1F] px-6 py-2.5 text-xs font-bold text-black hover:bg-orange-500 transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
