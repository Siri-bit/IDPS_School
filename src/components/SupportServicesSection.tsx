import React, { useState } from 'react';
import {
  Globe, Share2, MapPin, Target, Users, GraduationCap,
  Palette, Briefcase, FileCheck, BookOpen, ShieldCheck,
  CheckCircle2, ArrowRight, Sparkles, Layers
} from 'lucide-react';
import { SUPPORT_PILLARS, SupportPillar } from '../data/idpsData';

export const SupportServicesSection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('01');
  const [activePhase, setActivePhase] = useState<'all' | 'digital' | 'faculty' | 'academics'>('all');

  const iconMap: Record<string, React.ElementType> = {
    Globe, Share2, MapPin, Target, Users, GraduationCap,
    Palette, Briefcase, FileCheck, BookOpen, ShieldCheck
  };

  const filteredPillars = SUPPORT_PILLARS.filter(pillar => {
    if (activePhase === 'digital') return ['01', '02', '03', '04', '07'].includes(pillar.number);
    if (activePhase === 'faculty') return ['05', '06'].includes(pillar.number);
    if (activePhase === 'academics') return ['08', '09', '10', '11'].includes(pillar.number);
    return true;
  });

  const selectedPillar = SUPPORT_PILLARS.find(p => p.number === selectedPillarId) || SUPPORT_PILLARS[0];
  const SelectedIcon = iconMap[selectedPillar.iconName] || Globe;

  return (
    <section id="support-services" className="py-8 lg:py-10 bg-[#DFE7E1] border-b border-[#BACBBF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-3">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>CENTRAL SECRETARIAT OPERATIONAL ENGINE</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            11 Core Support &amp; Central Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#264935] font-normal">
            Exhaustive, 360-degree operational scaffolding provided by the Central Society to ensure seamless school governance.
          </p>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All 11 Pillars' },
            { id: 'digital', label: 'Digital, PR & Brand Identity (1-4, 7)' },
            { id: 'faculty', label: 'Staff Recruitment & Faculty Academy (5, 6)' },
            { id: 'academics', label: 'Curriculum, Affiliation & Audits (8-11)' }
          ].map(phase => (
            <button
              key={phase.id}
              type="button"
              onClick={() => setActivePhase(phase.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activePhase === phase.id
                  ? 'bg-[#021D12] text-[#E5B842] shadow-sm'
                  : 'bg-[#F2F6F3] text-[#163323] hover:bg-[#E6EEE8] border border-[#CAD8CE]'
              }`}
            >
              {phase.label}
            </button>
          ))}
        </div>

        {/* Command Deck Layout: Left Interactive Grid & Right Master Service Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 6 COLUMNS: Interactive Service Matrix Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredPillars.map((pillar) => {
              const Icon = iconMap[pillar.iconName] || Globe;
              const isSelected = selectedPillar.number === pillar.number;

              return (
                <div
                  key={pillar.number}
                  onClick={() => setSelectedPillarId(pillar.number)}
                  className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#021D12] text-white border-[#0A3B26] shadow-md -translate-y-0.5'
                      : 'bg-[#F2F6F3] text-[#05180E] border-[#CAD8CE] hover:border-[#BACBBF] hover:bg-[#E6EEE8]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-mono font-black ${isSelected ? 'text-[#E5B842]' : 'text-[#004D2C]'}`}>
                      Pillar #{pillar.number}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#E5B842]' : 'text-[#264935]'}`} />
                  </div>

                  <h3 className={`font-serif text-sm font-bold leading-snug line-clamp-1 ${isSelected ? 'text-white' : 'text-[#05180E]'}`}>
                    {pillar.title}
                  </h3>

                  <p className={`text-[11px] mt-1 line-clamp-2 leading-relaxed ${isSelected ? 'text-[#A3C4AF]' : 'text-[#264935]'}`}>
                    {pillar.subtitle || pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT 6 COLUMNS: Deep Service Inspection Dossier */}
          <div className="lg:col-span-6">
            <div className="bg-[#F2F6F3] rounded-3xl p-6 sm:p-8 shadow-md border border-[#CAD8CE] space-y-6">
              
              <div className="flex items-start justify-between border-b border-[#CAD8CE] pb-5">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#004D2C] mb-1">
                    CENTRAL DELIVERABLE SPECIFICATION
                  </div>
                  <h3 className="font-serif text-2xl font-black text-[#05180E] leading-tight">
                    {selectedPillar.title}
                  </h3>
                  {selectedPillar.subtitle && (
                    <p className="text-xs font-mono font-semibold text-[#D4A232] mt-1">
                      {selectedPillar.subtitle}
                    </p>
                  )}
                </div>
                
                <div className="w-12 h-12 rounded-2xl bg-[#021D12] flex items-center justify-center text-[#E5B842] shrink-0 shadow-sm">
                  <SelectedIcon className="w-6 h-6" />
                </div>
              </div>

              {/* Comprehensive Description */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#05180E] mb-2">
                  Operational Scope
                </h4>
                <p className="text-sm text-[#163323] leading-relaxed">
                  {selectedPillar.description}
                </p>
              </div>

              {/* Specific Deliverables List */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#05180E] mb-3">
                  Key Central Deliverables &amp; SOPs
                </h4>
                <div className="space-y-2.5">
                  {selectedPillar.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#264935]">
                      <CheckCircle2 className="w-4 h-4 text-[#004D2C] shrink-0 mt-0.5" />
                      <span className="leading-normal">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Central Society Guarantee Plaque */}
              <div className="p-4 rounded-2xl bg-[#E6EEE8] border border-[#BACBBF] flex items-center justify-between text-xs font-mono">
                <span className="text-[#05180E] font-semibold">
                  Guaranteed Central Turnkey Execution
                </span>
                <span className="text-[#004D2C] font-bold">
                  SOP-Verified
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
