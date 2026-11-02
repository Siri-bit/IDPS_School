import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, ChevronRight, Award } from 'lucide-react';
import { TIMELINE_STEPS } from '../data/idpsData';

interface RoadmapSectionProps {
  onOpenApplyModal: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onOpenApplyModal }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = TIMELINE_STEPS[activeStepIndex];

  return (
    <section id="roadmap" className="py-8 lg:py-10 bg-[#E6EEE8] border-b border-[#BACBBF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-3">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>TIME-BOUND TURNKEY EXECUTION FRAMEWORK</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            90-Day Turnkey Launch Roadmap
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#264935] font-normal">
            From initial site application to grand inaugural ribbon-cutting in exactly 90 days, guided by central specialists.
          </p>
        </div>

        {/* Master Gantt Progression Bar */}
        <div className="bg-[#DFE7E1] p-3 rounded-2xl mb-8 border border-[#BACBBF] overflow-x-auto scrollbar-none">
          <div className="flex items-center min-w-[700px] justify-between gap-1">
            {TIMELINE_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.days}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex-1 py-3 px-2 rounded-xl text-center transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#021D12] text-white shadow-md'
                      : isPast
                      ? 'bg-[#E6EEE8] text-[#004D2C]'
                      : 'text-[#264935] hover:bg-[#E6EEE8]'
                  }`}
                >
                  <div className={`text-[10px] font-mono font-black ${isActive ? 'text-[#E5B842]' : 'text-[#004D2C]'}`}>
                    {step.days}
                  </div>
                  <div className="text-[11px] font-serif font-bold truncate mt-0.5">
                    {step.phase.split(':')[1]?.trim() || step.phase}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Inspection Plaque */}
        <div className="bg-[#F2F6F3] rounded-3xl p-6 sm:p-10 shadow-md border border-[#CAD8CE] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 4 Columns: Stage Badge & Velocity Gauge */}
          <div className="lg:col-span-4 bg-[#021D12] text-white rounded-2xl p-6 sm:p-8 space-y-4 border border-[#0A3B26]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E5B842]">
                {activeStep.phase}
              </span>
              <span className="text-xs font-mono font-bold text-white bg-[#004D2C] px-2.5 py-0.5 rounded">
                Stage {activeStepIndex + 1} of 9
              </span>
            </div>

            <div className="py-2">
              <div className="text-3xl sm:text-4xl font-serif font-black text-white">
                {activeStep.days}
              </div>
              <div className="text-xs text-[#A3C4AF] font-mono mt-1">
                Elapsed Implementation Horizon
              </div>
            </div>

            <div className="pt-4 border-t border-[#0A3B26] text-xs text-[#A3C4AF] space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E5B842] shrink-0" />
                <span>Central Project Manager Assigned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5B842] shrink-0" />
                <span>Society Oversight at Every Milestone</span>
              </div>
            </div>
          </div>

          {/* Right 8 Columns: Deliverables & Milestones */}
          <div className="lg:col-span-8 space-y-5">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#004D2C] mb-1">
                PHASE MILESTONE &amp; OBJECTIVE
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#05180E] leading-tight">
                {activeStep.title}
              </h3>
              <p className="text-sm text-[#163323] leading-relaxed mt-2">
                {activeStep.desc}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#05180E] mb-3">
                Milestone Deliverables &amp; Clearances
              </h4>
              <div className="space-y-2.5">
                {activeStep.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#264935]">
                    <CheckCircle2 className="w-4 h-4 text-[#004D2C] shrink-0 mt-0.5" />
                    <span className="leading-normal">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#CAD8CE] flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={onOpenApplyModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#004D2C] hover:bg-[#025A36] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer font-mono tracking-wider"
              >
                <span>Initiate Day 1 Application</span>
                <ArrowRight className="w-4 h-4 text-[#E5B842]" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#264935]">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                  className="px-3 py-1.5 rounded-lg bg-[#E6EEE8] hover:bg-[#DFE7E1] disabled:opacity-40 cursor-pointer"
                >
                  &larr; Prev
                </button>
                <button
                  type="button"
                  disabled={activeStepIndex === TIMELINE_STEPS.length - 1}
                  onClick={() => setActiveStepIndex(Math.min(TIMELINE_STEPS.length - 1, activeStepIndex + 1))}
                  className="px-3 py-1.5 rounded-lg bg-[#E6EEE8] hover:bg-[#DFE7E1] disabled:opacity-40 cursor-pointer"
                >
                  Next &rarr;
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
