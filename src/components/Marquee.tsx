import { BRANDS, AWARDS } from '../data/portfolioData';
import { Award, Trophy, Star } from 'lucide-react';

export default function Marquee() {
  return (
    <section className="relative py-12 border-y border-white/10 bg-[#090909] overflow-hidden">
      {/* Brands Ticker */}
      <div className="mb-8 text-center">
        <p className="text-xs font-space uppercase tracking-widest text-neutral-400">
          Trusted By Industry Pioneers & Next-Gen Brands
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap py-2">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-[#111111]/80 px-6 py-2.5 backdrop-blur-md hover:border-[#FF5A1F]/50 transition-colors"
            >
              <span className="text-lg">{brand.logo}</span>
              <span className="font-syne text-sm font-bold tracking-wider text-neutral-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Awards Highlights */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AWARDS.map((award, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover p-4 rounded-2xl flex items-center gap-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#FF5A1F]/10 text-[#FF5A1F] border border-[#FF5A1F]/30">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center justify-between text-[11px] font-space text-[#FF5A1F]">
                  <span>{award.title}</span>
                  <span>{award.year}</span>
                </div>
                <h4 className="text-xs font-syne font-bold text-white truncate">{award.project}</h4>
                <p className="text-[10px] text-neutral-400 truncate">{award.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
