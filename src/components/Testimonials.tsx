import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-[#060606] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 right-0 h-96 w-96 rounded-full bg-[#FF5A1F]/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-space uppercase tracking-widest text-[#FF5A1F] mb-3">
            <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What Founders & Leaders Say
          </h2>
        </div>
      </div>

      {/* Infinite Testimonial Slider */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-normal py-4">
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 w-[380px] sm:w-[450px] flex-shrink-0 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#FF5A1F]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FF5A1F]" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-white/20" />
                </div>

                <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.author}
                  referrerPolicy="no-referrer"
                  className="h-11 w-11 rounded-full object-cover border border-[#FF5A1F]"
                />
                <div>
                  <h4 className="font-syne font-bold text-white text-sm">{t.author}</h4>
                  <p className="text-[11px] text-neutral-400 font-space">
                    {t.role} // <span className="text-[#FF5A1F]">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
