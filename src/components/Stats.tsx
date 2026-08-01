import { motion } from 'motion/react';
import { containerVariants, itemVariants } from './AnimatedSection';
import { Github, GitCommit, GitPullRequest, Star, Sparkles } from 'lucide-react';

export default function Stats() {
  // Simulated GitHub Contribution Grid (12 weeks x 7 days)
  const days = Array.from({ length: 84 }, (_, i) => {
    const intensity = Math.floor(Math.random() * 4); // 0, 1, 2, 3
    return intensity;
  });

  const getCellColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-white/5';
      case 1: return 'bg-[#FF5A1F]/30';
      case 2: return 'bg-[#FF5A1F]/60';
      case 3: return 'bg-[#FF5A1F] shadow-sm shadow-[#FF5A1F]';
      default: return 'bg-white/5';
    }
  };

  return (
    <section className="relative py-20 bg-[#090909] border-y border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Stats Counter Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "150+", label: "Projects Completed", subtitle: "Web apps, design systems & mobile" },
            { value: "98%", label: "Client Satisfaction", subtitle: "5-star rating on all case studies" },
            { value: "50+", label: "Global Clients", subtitle: "Silicon Valley, London, Paris, Tokyo" },
            { value: "6+", label: "Years Experience", subtitle: "Senior creative & full-stack role" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 text-center space-y-2"
            >
              <div className="font-syne text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#FF5A1F]">
                {item.value}
              </div>
              <div className="font-syne font-bold text-white text-base">{item.label}</div>
              <div className="text-xs text-neutral-400 font-space">{item.subtitle}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Contributions & Open Source Activity */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2 text-xs font-space text-[#FF5A1F] font-bold uppercase">
              <Github className="h-4 w-4" /> Live Open Source Pulse
            </div>
            <h3 className="font-syne text-2xl font-bold text-white">
              Continuous Commit & Innovation Rhythm
            </h3>
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Active open source maintainer contributing to Next.js templates, Framer motion presets, and React component libraries.
            </p>

            <div className="flex items-center gap-6 pt-2 text-xs font-space text-neutral-400">
              <span className="flex items-center gap-1.5">
                <GitCommit className="h-4 w-4 text-[#FF5A1F]" /> 1,840 Commits in 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-amber-400 fill-amber-400" /> 2.4k GitHub Stars
              </span>
            </div>
          </div>

          {/* Contribution Heatmap */}
          <div className="p-6 rounded-2xl bg-[#111111] border border-white/10">
            <div className="text-[11px] font-space text-neutral-400 mb-3 flex items-center justify-between">
              <span>Contribution Activity (Last 12 Weeks)</span>
              <span className="text-[#FF5A1F] font-bold">100% Active Days</span>
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-1.5">
              {days.map((level, i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-xs ${getCellColor(level)} transition-all hover:scale-125`}
                  title={`Level ${level} activity`}
                />
              ))}
            </div>

            <div className="flex items-center justify-between mt-4 text-[10px] font-space text-neutral-500">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <div className="h-2.5 w-2.5 rounded-xs bg-white/5" />
                <div className="h-2.5 w-2.5 rounded-xs bg-[#FF5A1F]/30" />
                <div className="h-2.5 w-2.5 rounded-xs bg-[#FF5A1F]/60" />
                <div className="h-2.5 w-2.5 rounded-xs bg-[#FF5A1F]" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
