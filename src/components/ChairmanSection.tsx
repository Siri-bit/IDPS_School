import React from 'react';
import { Quote, Award, ShieldCheck, CheckCircle2, Phone, Mail, Building2, MapPin } from 'lucide-react';
import { IDPS_CONTACT } from '../data/idpsData';

export const ChairmanSection: React.FC = () => {
  return (
    <section id="president-message" className="py-8 lg:py-10 bg-[#DFE7E1] border-b border-[#BACBBF] relative overflow-hidden">
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#021D12 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pre-heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-3">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>PRESIDENTIAL DISPATCH &amp; PHILOSOPHY</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            From the Desk of the President
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#264935] font-normal">
            Steering the national benchmark in K-12 education with institutional integrity and pedagogical vision.
          </p>
        </div>

        {/* Master Editorial Layout: Asymmetric Split Monograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT 5 COLUMNS: Presidential Portrait in Gilded Architectural Arch */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold frame offset */}
              <div className="absolute -inset-2.5 rounded-3xl border-2 border-[#D4A232]/40 -rotate-1 pointer-events-none" />
              
              {/* Main Portrait Card */}
              <div className="relative bg-[#021D12] rounded-3xl overflow-hidden shadow-2xl border border-[#0A3B26]">
                <div className="aspect-4/5 sm:aspect-3/4 relative overflow-hidden">
                  <img
                    src={IDPS_CONTACT.presidentPhotoUrl}
                    alt={IDPS_CONTACT.presidentName}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98]"
                  />
                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021D12] via-[#021D12]/30 to-transparent" />
                </div>

                {/* Presidential Identity Plaque */}
                <div className="p-6 sm:p-7 relative bg-gradient-to-b from-[#021D12] to-[#062E1D] border-t border-[#0A3B26]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#E5B842]">
                      Central Society Leadership
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#A3C4AF] font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#E5B842]" />
                      <span>Estd. 2012</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#F2F6F3] tracking-tight">
                    {IDPS_CONTACT.presidentName}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3C4AF] mt-1 font-medium">
                    {IDPS_CONTACT.presidentTitle}
                  </p>

                  {/* Society Regd Seal strip */}
                  <div className="mt-4 pt-4 border-t border-[#0A3B26]/80 flex items-center justify-between text-[11px] text-[#A3C4AF]">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#E5B842]" />
                      <span>The IDPS Society, New Delhi</span>
                    </span>
                    <span className="text-[#E5B842] font-mono font-semibold">Regd. HQ</span>
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-4 -right-4 bg-[#F2F6F3] text-[#05180E] p-3 rounded-2xl shadow-xl border border-[#BACBBF] flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#021D12] flex items-center justify-center text-[#E5B842]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-black text-[#004D2C] leading-none uppercase">
                    35+ Campuses
                  </div>
                  <div className="text-[10px] text-[#264935] font-medium mt-0.5">
                    15 States Across India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 7 COLUMNS: Presidential Monograph Editorial Prose */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Lead Quotation Banner */}
            <div className="bg-[#F2F6F3] rounded-3xl p-6 sm:p-8 shadow-sm border border-[#CAD8CE] relative">
              <Quote className="w-10 h-10 text-[#D4A232]/40 absolute top-5 right-6 pointer-events-none" />
              
              <p className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#05180E] leading-snug italic relative z-10">
                &ldquo;True education transcends textbooks and syllabus boundaries. It is the noble craft of forging resilient intellects, upright character, and visionary global leaders.&rdquo;
              </p>
            </div>

            {/* Structured Presidential Narrative with Drop-Cap Styling */}
            <div className="bg-[#F2F6F3] rounded-3xl p-6 sm:p-8 shadow-sm border border-[#CAD8CE] space-y-5 text-sm sm:text-base text-[#163323] leading-relaxed">
              <p className="first-letter:font-serif first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:text-[#004D2C]">
                When we established <strong>The International Delhi Public School Society</strong> on 22nd February 2012, our central mission was unyielding: to bring uncompromising, world-class schooling to every aspiring city and district in India. Over the past 14 years, that vision has blossomed into a distinguished fraternity of 35+ vibrant campuses, empowering more than 45,000 learners every single day.
              </p>

              <p>
                To our prospective Franchise Partners and Trustees, we offer more than a prestigious brand mark. We bring an exhaustive, turnkey operating framework — from architectural planning and CBSE syllabus standardization to rigorous faculty training academies and high-conversion parent outreach. We walk beside you at every step of your institution&apos;s journey.
              </p>

              {/* 3 Executive Pillars of Commitment */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3.5 rounded-2xl bg-[#E6EEE8] border border-[#BACBBF]">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#004D2C] shrink-0" />
                    <span className="font-serif font-bold text-xs text-[#05180E]">Zero Compromise</span>
                  </div>
                  <p className="text-[11px] text-[#264935] leading-normal">
                    Strict adherence to CBSE academic blueprints &amp; infrastructure.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#E6EEE8] border border-[#BACBBF]">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#004D2C] shrink-0" />
                    <span className="font-serif font-bold text-xs text-[#05180E]">Turnkey Support</span>
                  </div>
                  <p className="text-[11px] text-[#264935] leading-normal">
                    Guaranteed 90-day launch roadmap backed by central experts.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#E6EEE8] border border-[#BACBBF]">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#004D2C] shrink-0" />
                    <span className="font-serif font-bold text-xs text-[#05180E]">Lifetime Value</span>
                  </div>
                  <p className="text-[11px] text-[#264935] leading-normal">
                    Continuous faculty mentorship and quality assurance audits.
                  </p>
                </div>
              </div>

              {/* Signature & Official Verification Strip */}
              <div className="pt-4 border-t border-[#CAD8CE] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="font-serif font-black text-lg text-[#05180E]">
                    Narayan Karn
                  </div>
                  <div className="text-xs text-[#004D2C] font-semibold">
                    President, The IDPS Society, New Delhi
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#264935]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4A232]" />
                    <span>Pandav Nagar, New Delhi</span>
                  </span>
                  <span className="text-[#CAD8CE]">|</span>
                  <a href="tel:+917004222833" className="text-[#004D2C] hover:underline font-bold">
                    +91 7004222833
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export const PresidentSection = ChairmanSection;
