import { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import {
  Layout,
  Monitor,
  Code,
  Sparkles,
  Zap,
  Bot,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="h-6 w-6 text-[#FF5A1F]" />;
      case 'Monitor': return <Monitor className="h-6 w-6 text-[#FF5A1F]" />;
      case 'Code': return <Code className="h-6 w-6 text-[#FF5A1F]" />;
      case 'Sparkles': return <Sparkles className="h-6 w-6 text-[#FF5A1F]" />;
      case 'Zap': return <Zap className="h-6 w-6 text-[#FF5A1F]" />;
      case 'Bot': return <Bot className="h-6 w-6 text-[#FF5A1F]" />;
      default: return <Sparkles className="h-6 w-6 text-[#FF5A1F]" />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#060606] overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-[#FF5A1F]/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-space uppercase tracking-widest text-[#FF5A1F] mb-3">
              <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Design & Engineering Services
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm font-sans leading-relaxed">
            Tailored execution for venture-backed founders, creative directors, and ambitious enterprises seeking Awwwards-grade digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group glass-card glass-card-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between transition-all"
            >
              <div>
                {/* Icon & Timeframe */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 group-hover:bg-[#FF5A1F] group-hover:text-black transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-space text-neutral-300">
                    <Clock className="h-3 w-3 text-[#FF5A1F]" />
                    <span>{service.estimatedTime}</span>
                  </div>
                </div>

                <h3 className="font-syne text-2xl font-bold text-white mb-1 group-hover:text-[#FF5A1F] transition-colors">
                  {service.title}
                </h3>
                <div className="text-xs font-space text-[#FF5A1F] mb-4 font-semibold">
                  {service.subtitle}
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase font-space text-neutral-500 font-bold block mb-2">
                    Key Deliverables
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5A1F] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & CTA */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1 max-w-[180px]">
                  {service.tools.slice(0, 3).map((tool, i) => (
                    <span key={i} className="text-[10px] font-space text-neutral-400 bg-white/5 px-2 py-0.5 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-1.5 rounded-full bg-[#FF5A1F] px-4 py-2 text-xs font-bold text-black hover:bg-orange-500 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
