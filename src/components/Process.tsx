import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Sparkles, Layers } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState<string>('01');

  const selectedStepObj = PROCESS_STEPS.find(s => s.step === activeStep) || PROCESS_STEPS[0];

  return (
    <section id="process" className="relative py-28 bg-[#090909] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-space uppercase tracking-widest text-[#FF5A1F] mb-3">
            <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
            <span>Methodology</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            An 8-Step Blueprint For Digital Excellence
          </h2>
          <p className="text-neutral-400 text-sm font-sans mt-3">
            A transparent, predictable process refined over 150+ successful deployments worldwide.
          </p>
        </div>

        {/* Horizontal / Grid Step Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {PROCESS_STEPS.map((s) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                activeStep === s.step
                  ? 'bg-[#FF5A1F] text-black border-[#FF5A1F] shadow-lg shadow-[#FF5A1F]/30 scale-105'
                  : 'bg-[#111111] text-neutral-300 border-white/10 hover:border-white/30'
              }`}
            >
              <span className={`font-syne text-xl font-black ${activeStep === s.step ? 'text-black' : 'text-[#FF5A1F]'}`}>
                {s.step}
              </span>
              <span className="font-syne text-xs font-bold truncate mt-2">
                {s.title.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Step Expanded Drawer Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8 sm:p-12 rounded-3xl border border-[#FF5A1F]/40 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="font-syne text-4xl font-extrabold text-[#FF5A1F]">
                    {selectedStepObj.step}
                  </span>
                  <div>
                    <h3 className="font-syne text-2xl font-bold text-white">
                      {selectedStepObj.title}
                    </h3>
                    <span className="text-xs font-space text-neutral-400">
                      Phase Horizon: {selectedStepObj.duration}
                    </span>
                  </div>
                </div>

                <p className="text-base text-neutral-200 font-sans leading-relaxed">
                  {selectedStepObj.summary}
                </p>
              </div>

              {/* Details Checklist */}
              <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 min-w-[300px] space-y-3">
                <span className="text-xs uppercase font-space text-[#FF5A1F] font-bold block">
                  Phase Milestone Deliverables
                </span>
                {selectedStepObj.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5A1F] flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
