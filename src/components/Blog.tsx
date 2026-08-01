import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';
import { ArrowUpRight, Clock, Calendar, X, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

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
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="relative py-28 bg-[#090909] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-space uppercase tracking-widest text-[#FF5A1F] mb-3">
              <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
              <span>Editorial Journal</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Thoughts On Design & Tech
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between md:justify-end gap-4">
            {/* Tag Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-space font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-[#FF5A1F] text-black font-bold shadow-lg shadow-[#FF5A1F]/30'
                      : 'bg-[#111111] text-neutral-400 hover:text-white border border-white/10'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => handleScroll('left')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#111111] text-white hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-black transition-all shadow-md active:scale-95 cursor-pointer"
                aria-label="Slide Left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#111111] text-white hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-black transition-all shadow-md active:scale-95 cursor-pointer"
                aria-label="Slide Right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Slidable Blog Cards Horizontal Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="flex-shrink-0 w-[300px] sm:w-[370px] lg:w-[400px] snap-start group cursor-pointer rounded-3xl glass-card glass-card-hover overflow-hidden border border-white/10 flex flex-col justify-between transition-all duration-300"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#111111]">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 rounded-full bg-[#FF5A1F] px-3 py-1 text-[10px] font-space font-bold text-black">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-space text-neutral-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-[#FF5A1F]" /> {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-neutral-500" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-syne text-lg font-bold text-white group-hover:text-[#FF5A1F] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-space text-[#FF5A1F] font-bold group-hover:underline">
                    Read Article →
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 group-hover:bg-[#FF5A1F] group-hover:text-black transition-colors">
                    <ArrowUpRight className="h-4 w-4 text-white group-hover:text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
