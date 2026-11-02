import React, { useState } from 'react';
import { Quote, Star, ShieldCheck, MapPin, Building2, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  campus: string;
  state: string;
  yearEstd: string;
  studentCount: string;
  quote: string;
  keyHighlight: string;
}

export const TestimonialsSection: React.FC = () => {
  const [activeTrusteeIndex, setActiveTrusteeIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Dr. R. K. Singhania',
      role: 'Chairman & Managing Trustee',
      campus: 'IDPS Gurugram Campus',
      state: 'Haryana',
      yearEstd: '2017',
      studentCount: '2,100+ Scholars',
      keyHighlight: 'Broke even within 2.5 years of inaugural session',
      quote: 'Partnering with the International Delhi Public School Society was the single best decision for our educational trust. Their central architectural planning and faculty training bootcamps gave us an immediate prestige status in Gurugram. From Day 1, parents recognized the academic credibility.'
    },
    {
      id: 't2',
      name: 'Smt. Sunita Verma',
      role: 'Founder Director',
      campus: 'IDPS Lucknow Campus',
      state: 'Uttar Pradesh',
      yearEstd: '2019',
      studentCount: '1,750+ Scholars',
      keyHighlight: '100% CBSE Class X & XII First-Division Results',
      quote: 'The 11 core support services are genuinely delivered as promised. The Central Academic Directors visit quarterly, auditing pedagogical quality and mentoring our faculty. We attained complete admissions capacity within 3 academic cycles.'
    },
    {
      id: 't3',
      name: 'Shri Vikramaditya Rao',
      role: 'Trustee & President',
      campus: 'IDPS Bengaluru Campus',
      state: 'Karnataka',
      yearEstd: '2018',
      studentCount: '2,300+ Scholars',
      keyHighlight: 'Regional STEM & Robotics Champions for 3 Consecutive Years',
      quote: 'The society brand carries monumental weight with discerning parents. The turnkey curriculum, robotics laboratory blueprints, and teacher recruitment board participation gave our school an unmatched competitive moat in the city.'
    },
    {
      id: 't4',
      name: 'Dr. Meenakshi Sundaram',
      role: 'Executive Trustee',
      campus: 'IDPS Jaipur Campus',
      state: 'Rajasthan',
      yearEstd: '2016',
      studentCount: '1,800+ Scholars',
      keyHighlight: 'Largest multi-acre CBSE sports infrastructure in the zone',
      quote: 'What sets IDPS apart from typical commercial franchise systems is institutional ethics. President Narayan Karn and the Central Secretariat treat every campus as an extension of their national family, providing continuous guidance whenever required.'
    }
  ];

  const activeTrustee = testimonials[activeTrusteeIndex];

  return (
    <section id="student-excellence" className="py-8 lg:py-10 bg-[#DFE7E1] border-b border-[#BACBBF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-3">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>TRUSTEE TESTIMONIALS &amp; CASE STUDIES</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            Voices of Trust &amp; Leadership
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#264935] font-normal">
            Real experiences from educational entrepreneurs and managing trustees steering IDPS campuses across the nation.
          </p>
        </div>

        {/* Master Case Study Layout: Left Featured Spotlight & Right Selector Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 7 Columns: Featured Spotlight Testimonial Plaque */}
          <div className="lg:col-span-7 bg-[#F2F6F3] rounded-3xl p-8 sm:p-10 shadow-md border border-[#CAD8CE] space-y-6 relative">
            <Quote className="w-12 h-12 text-[#D4A232]/30 absolute top-6 right-8 pointer-events-none" />

            {/* Campus Credentials Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#CAD8CE]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#004D2C]">
                <Building2 className="w-4 h-4 text-[#D4A232]" />
                <span>{activeTrustee.campus}</span>
                <span className="text-[#CAD8CE]">·</span>
                <span className="text-[#264935]">{activeTrustee.state}</span>
              </div>
              <div className="text-xs font-mono font-semibold text-[#E5B842] bg-[#021D12] px-2.5 py-0.5 rounded">
                Estd. {activeTrustee.yearEstd} • {activeTrustee.studentCount}
              </div>
            </div>

            {/* Quotation Prose */}
            <p className="font-serif text-lg sm:text-xl text-[#05180E] font-medium leading-relaxed italic">
              &ldquo;{activeTrustee.quote}&rdquo;
            </p>

            {/* Verified Highlight Callout */}
            <div className="p-3.5 rounded-2xl bg-[#E6EEE8] border border-[#BACBBF] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#004D2C] shrink-0" />
              <div className="text-xs text-[#163323] font-medium">
                <strong>Campus Milestone:</strong> {activeTrustee.keyHighlight}
              </div>
            </div>

            {/* Trustee Author Details */}
            <div className="pt-4 border-t border-[#CAD8CE] flex items-center justify-between">
              <div>
                <div className="font-serif font-black text-base text-[#05180E]">
                  {activeTrustee.name}
                </div>
                <div className="text-xs text-[#004D2C] font-medium">
                  {activeTrustee.role}
                </div>
              </div>

              <div className="flex items-center gap-1 text-[#E5B842]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Trustee Selector Strip */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#004D2C] px-1 mb-2">
              Select Trustee Case Study
            </div>

            {testimonials.map((item, idx) => {
              const isSelected = activeTrusteeIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTrusteeIndex(idx)}
                  className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#021D12] text-white border-[#0A3B26] shadow-md -translate-y-0.5'
                      : 'bg-[#F2F6F3] text-[#05180E] border-[#CAD8CE] hover:border-[#BACBBF] hover:bg-[#E6EEE8]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-serif text-sm font-bold ${isSelected ? 'text-white' : 'text-[#05180E]'}`}>
                      {item.name}
                    </span>
                    <span className={`text-[11px] font-mono font-semibold ${isSelected ? 'text-[#E5B842]' : 'text-[#004D2C]'}`}>
                      Estd. {item.yearEstd}
                    </span>
                  </div>

                  <div className={`text-xs mt-1 font-mono ${isSelected ? 'text-[#A3C4AF]' : 'text-[#264935]'}`}>
                    {item.campus} ({item.state})
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
