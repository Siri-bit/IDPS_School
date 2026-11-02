import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, BookOpen, Cpu, GraduationCap, Trophy, Globe2, ShieldCheck } from 'lucide-react';

interface IdpsEdgeProps {
  onOpenApplyModal: () => void;
}

export const IdpsEdge: React.FC<IdpsEdgeProps> = ({ onOpenApplyModal }) => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const pillars = [
    {
      num: '01',
      title: 'Holistic Academic Rigour',
      subtitle: 'CBSE Aligned Benchmark Curriculum',
      icon: BookOpen,
      tagline: 'Standardized Excellence Across 35+ Campuses',
      desc: 'Our academic blueprint adheres to the highest CBSE standards, harmonized with inquiry-based learning, diagnostic formative assessments, and comprehensive board preparation modules that guarantee exceptional pass percentages and top competitive ranks.',
      keyMetrics: '100% Board Pass Rate Benchmark',
      advantages: [
        'Centralized lesson plans and standardized question banks',
        'Early childhood phonics and foundational numeracy focus',
        'Remedial acceleration and talent identification wings',
        'National Olympiad, NTSE, and JEE/NEET foundational coaching'
      ],
      photo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80'
    },
    {
      num: '02',
      title: 'Experiential STEM & Robotics',
      subtitle: 'Innovation Incubators & Practical Inquiry',
      icon: Cpu,
      tagline: 'Future-Ready Technologists from Grade 1',
      desc: 'Bridging textbook theory with tangible invention. Every IDPS campus integrates dedicated robotics suites, 3D printing, coding curriculum, and composite physics, chemistry, and biology laboratories conforming to international safety standards.',
      keyMetrics: 'Age 6+ Coding & Robotics Integration',
      advantages: [
        'Turnkey STEM equipment and consumables supplied directly by HQ',
        'Annual National IDPS Science & Tech Innovation Fair',
        'Hands-on experimental learning modules in every semester',
        'Interactive 75" digital panels installed in core classrooms'
      ],
      photo: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80'
    },
    {
      num: '03',
      title: 'Central Faculty Academy',
      subtitle: 'Continuous Professional Development',
      icon: GraduationCap,
      tagline: 'Empowered Teachers, Inspiring Classrooms',
      desc: 'Great schools are built by inspiring educators. The Central IDPS Faculty Academy conducts rigorous recruitment screening, 15-day pre-launch teacher bootcamps, and mandatory quarterly pedagogical upgradation seminars.',
      keyMetrics: '120+ Hours Annual Faculty Training',
      advantages: [
        'Central panel participation during local teacher interviews',
        'Classroom management & student mental wellness certification',
        'Quarterly pedagogical audits and constructive feedback scorecards',
        'Access to the proprietary IDPS Teachers Knowledge Vault'
      ],
      photo: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80'
    },
    {
      num: '04',
      title: 'Athletic & Sports Blueprint',
      subtitle: 'Olympic Discipline & Physical Literacy',
      icon: Trophy,
      tagline: 'Champions on the Field and in Life',
      desc: 'Physical education is integral to our daily timetable. From sprawling cricket fields and synthetic basketball courts to martial arts, yoga, and swimming pools, every scholar discovers athletic confidence and sportsmanship.',
      keyMetrics: '8+ Dedicated Sports Disciplines',
      advantages: [
        'Architectural guidance on turf selection and court layouts',
        'Qualified NIS-certified physical education instructors',
        'Annual Inter-IDPS National Sports Olympiad tournament',
        'Mandatory morning physical conditioning and yoga practice'
      ],
      photo: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80'
    },
    {
      num: '05',
      title: 'Roots & Global Citizenship',
      subtitle: 'Indian Values with International Outlook',
      icon: Globe2,
      tagline: 'Nurturing Compassionate Global Minds',
      desc: 'Rooted firmly in traditional Indian hospitality, moral discipline, and respect for nature, while developing multilingual fluency, debate eloquence, and perspective on global sustainability challenges.',
      keyMetrics: 'Multi-lingual & Ethical Leadership',
      advantages: [
        'Celebration of national heritage, arts, and cultural festivals',
        'Model United Nations (MUN) and public speaking societies',
        'Community service and social responsibility projects',
        'Zero-bullying, restorative discipline environment'
      ],
      photo: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80'
    },
    {
      num: '06',
      title: 'Turnkey Institutional Governance',
      subtitle: 'Full Lifecycle Partner Assurance',
      icon: ShieldCheck,
      tagline: 'From Site Selection to Thriving Campus',
      desc: 'Our franchise trustees are never left alone. With a 90-day time-bound implementation roadmap, society liaison, CBSE documentation support, and ongoing centralized marketing, your capital translates into a premier school.',
      keyMetrics: '90-Day Guaranteed Launch Framework',
      advantages: [
        'Architectural CAD blueprints and 3D interior design packs',
        'Exclusive territory protection and brand trademark licensing',
        'Centrally coordinated admissions marketing across Google & Meta',
        'Transparent fee retention structure with rapid capital recovery'
      ],
      photo: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const activePillar = pillars[activePillarIndex];

  return (
    <section id="idps-edge" className="py-8 lg:py-10 bg-[#DFE7E1] border-b border-[#BACBBF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-3">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>THE 6 PILLARS OF DISTINCT ADVANTAGE</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            The IDPS Edge
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#264935] font-normal">
            Why visionary educationists choose the International Delhi Public School Society to build enduring academic legacies.
          </p>
        </div>

        {/* Master Interactive Stage: Top Segmented Pillar Selector Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-2 bg-[#E6EEE8] rounded-2xl mb-8 border border-[#CAD8CE]">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillarIndex === idx;
            return (
              <button
                key={pillar.num}
                type="button"
                onClick={() => setActivePillarIndex(idx)}
                className={`p-3 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#021D12] text-white shadow-md'
                    : 'bg-[#F2F6F3] text-[#163323] hover:bg-[#E6EEE8]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono font-black ${isActive ? 'text-[#E5B842]' : 'text-[#004D2C]'}`}>
                    {pillar.num}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#E5B842]' : 'text-[#264935]'}`} />
                </div>
                <div className={`text-xs font-serif font-bold leading-tight truncate ${isActive ? 'text-white' : 'text-[#05180E]'}`}>
                  {pillar.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Central Master Stage: Full Bleed Two-Column Presentation */}
        <div className="bg-[#F2F6F3] rounded-3xl overflow-hidden shadow-md border border-[#CAD8CE] grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left 6 Columns: Immersive Photography with Ambient Information Box */}
          <div className="lg:col-span-6 relative aspect-16/10 lg:aspect-auto min-h-[380px] overflow-hidden bg-[#021D12]">
            <img
              src={activePillar.photo}
              alt={activePillar.title}
              className="w-full h-full object-cover object-center filter brightness-[0.88] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021D12] via-[#021D12]/30 to-transparent" />
            
            {/* Overlay Telemetry Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#021D12]/90 backdrop-blur-md border border-[#0A3B26] text-white flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E5B842]">
                  Pillar Benchmark
                </div>
                <div className="font-serif font-bold text-sm text-white">
                  {activePillar.keyMetrics}
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#004D2C] flex items-center justify-center text-[#E5B842]">
                <activePillar.icon className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Right 6 Columns: Deep Editorial Content & Advantages */}
          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#004D2C] uppercase tracking-wider">
                <span>PILLAR {activePillar.num} OF 06</span>
                <span className="text-[#CAD8CE]">/</span>
                <span className="text-[#D4A232]">{activePillar.subtitle}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#05180E] leading-tight mb-3">
                {activePillar.title}
              </h3>

              <div className="text-xs font-mono font-semibold text-[#004D2C] mb-4">
                &gt; {activePillar.tagline}
              </div>

              <p className="text-sm sm:text-base text-[#163323] leading-relaxed mb-6">
                {activePillar.desc}
              </p>

              {/* Specific HQ Deliverables & Advantages */}
              <div className="space-y-2.5 mb-8">
                {activePillar.advantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#264935]">
                    <CheckCircle2 className="w-4 h-4 text-[#004D2C] shrink-0 mt-0.5" />
                    <span className="leading-normal">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-[#CAD8CE] flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={onOpenApplyModal}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#004D2C] hover:bg-[#025A36] text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer font-mono tracking-wider"
              >
                <span>Partner with IDPS Society</span>
                <ArrowRight className="w-4 h-4 text-[#E5B842]" />
              </button>

              <div className="text-xs text-[#264935] font-mono">
                Pillar {activePillarIndex + 1} of 6
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
