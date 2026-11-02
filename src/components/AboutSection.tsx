import React, { useState } from 'react';
import { Landmark, Compass, Award, Target, BookOpen, Users2, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { IDPS_CONTACT } from '../data/idpsData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'philosophy' | 'governance'>('mission');

  const milestones = [
    {
      year: '2012',
      title: 'Foundation in New Delhi',
      detail: 'Registered on 22nd February 2012 with a solemn mandate to establish benchmark CBSE schools across emerging Indian towns and urban centers.'
    },
    {
      year: '2016',
      title: 'Pan-India Zonal Expansion',
      detail: 'Crossed 15 campuses across North and Central India, launching our proprietary Central Teacher Training Academy.'
    },
    {
      year: '2021',
      title: 'Smart STEM & NEP Transformation',
      detail: 'Pioneered experiential learning labs, robotics suites, and aligned curricula with the National Education Policy (NEP 2020).'
    },
    {
      year: '2026',
      title: '35+ Campuses & 45k+ Scholars',
      detail: 'A nationwide educational fraternity with 45,000+ enrolled students and 2,370+ passionate educators across 15 states.'
    }
  ];

  return (
    <section id="about" className="py-8 lg:py-10 bg-[#E6EEE8] border-b border-[#BACBBF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-3">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>ESTABLISHED 22ND FEBRUARY 2012 • NEW DELHI</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            About The Institution
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#264935] font-normal">
            Pioneering educational excellence through structured CBSE rigor, human values, and visionary campus governance.
          </p>
        </div>

        {/* Master Institutional Heritage & Manifesto Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT 5 COLUMNS: Chronological Heritage Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F2F6F3] rounded-3xl p-6 sm:p-8 shadow-sm border border-[#CAD8CE]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#CAD8CE]">
                <div className="w-10 h-10 rounded-2xl bg-[#021D12] flex items-center justify-center text-[#E5B842] shadow-sm">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-black text-lg text-[#05180E]">
                    The Society Journey
                  </h3>
                  <p className="text-xs text-[#264935] font-mono">
                    14+ Years of Legacy
                  </p>
                </div>
              </div>

              {/* Vertical Chronology Line */}
              <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#004D2C] via-[#D4A232] to-[#CAD8CE]">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="relative group">
                    {/* Bullet marker */}
                    <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-[#021D12] border-2 border-[#D4A232] group-hover:scale-125 transition-transform" />
                    
                    <div>
                      <span className="font-mono text-xs font-black text-[#004D2C] tracking-wide block">
                        {milestone.year}
                      </span>
                      <h4 className="font-serif font-bold text-sm text-[#05180E] mt-0.5">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-[#264935] mt-1 leading-relaxed">
                        {milestone.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Society Identity Card */}
            <div className="bg-[#021D12] text-[#F2F6F3] rounded-3xl p-6 shadow-xl border border-[#0A3B26]">
              <div className="text-[11px] font-mono font-bold text-[#E5B842] uppercase tracking-wider mb-2">
                Registered Society Credentials
              </div>
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                {IDPS_CONTACT.societyName}
              </h4>
              <p className="text-xs text-[#A3C4AF] leading-relaxed mb-4">
                {IDPS_CONTACT.registeredOffice}
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-[#D4A232] pt-3 border-t border-[#0A3B26]">
                <span>Estd. 22nd Feb 2012</span>
                <span>Regd. No. Verified</span>
              </div>
            </div>
          </div>

          {/* RIGHT 7 COLUMNS: Interactive Core Manifesto & Key Telemetry */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Tabbed Manifesto Console */}
            <div className="bg-[#F2F6F3] rounded-3xl p-6 sm:p-8 shadow-sm border border-[#CAD8CE]">
              
              {/* Segmented Control Buttons (Zero-Pill, Elegant Architectural Nav) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-[#DFE7E1] rounded-2xl mb-6 border border-[#BACBBF]">
                <button
                  type="button"
                  onClick={() => setActiveTab('mission')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'mission'
                      ? 'bg-[#021D12] text-[#E5B842] shadow-sm'
                      : 'text-[#163323] hover:text-[#05180E]'
                  }`}
                >
                  Our Mission
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('vision')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'vision'
                      ? 'bg-[#021D12] text-[#E5B842] shadow-sm'
                      : 'text-[#163323] hover:text-[#05180E]'
                  }`}
                >
                  Our Vision
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('philosophy')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'philosophy'
                      ? 'bg-[#021D12] text-[#E5B842] shadow-sm'
                      : 'text-[#163323] hover:text-[#05180E]'
                  }`}
                >
                  Pedagogy
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('governance')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'governance'
                      ? 'bg-[#021D12] text-[#E5B842] shadow-sm'
                      : 'text-[#163323] hover:text-[#05180E]'
                  }`}
                >
                  Governance
                </button>
              </div>

              {/* Dynamic Tab Content Display */}
              <div className="min-h-[180px] flex flex-col justify-center">
                {activeTab === 'mission' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#004D2C] uppercase tracking-wide">
                      <Target className="w-4 h-4 text-[#D4A232]" />
                      <span>Action-Oriented Institutional Mission</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#05180E]">
                      Empowering young minds with intellect, moral courage, and global competence.
                    </h3>
                    <p className="text-sm text-[#264935] leading-relaxed">
                      To provide an enriching learning environment that blends time-tested Indian values with modern scientific enquiry, preparing students to excel in national competitive examinations and global higher education.
                    </p>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#004D2C] uppercase tracking-wide">
                      <Compass className="w-4 h-4 text-[#D4A232]" />
                      <span>Long-Term Educational Horizon</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#05180E]">
                      To be India&apos;s most trusted and progressive K-12 schooling fraternity.
                    </h3>
                    <p className="text-sm text-[#264935] leading-relaxed">
                      To establish 100+ state-of-the-art campuses across every Indian state, nurturing compassionate, innovative, and disciplined scholars who contribute meaningfully to society and nation-building.
                    </p>
                  </div>
                )}

                {activeTab === 'philosophy' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#004D2C] uppercase tracking-wide">
                      <BookOpen className="w-4 h-4 text-[#D4A232]" />
                      <span>Curricular Ethos &amp; Student-Centricity</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#05180E]">
                      Experiential learning anchored in the National Education Policy (NEP 2020).
                    </h3>
                    <p className="text-sm text-[#264935] leading-relaxed">
                      Moving beyond rote memorization into design thinking, linguistic mastery, inquiry-based scientific exploration, digital competence, and mandatory sports and cultural engagement.
                    </p>
                  </div>
                )}

                {activeTab === 'governance' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#004D2C] uppercase tracking-wide">
                      <ShieldCheck className="w-4 h-4 text-[#D4A232]" />
                      <span>Central Support &amp; Institutional Governance</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#05180E]">
                      Zero-compromise operational audit and continuous trustee guidance.
                    </h3>
                    <p className="text-sm text-[#264935] leading-relaxed">
                      Our Central Corporate Office maintains continuous liaison with all partner campuses, conducting term audits, standardized examinations, faculty evaluations, and affiliation assistance.
                    </p>
                  </div>
                )}
              </div>

              {/* Four Core Values Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-[#CAD8CE]">
                <div className="text-center p-3 rounded-2xl bg-[#E6EEE8]">
                  <div className="font-serif font-bold text-xs text-[#05180E]">Discipline</div>
                  <div className="text-[10px] text-[#264935] mt-0.5">Foundational Ethos</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-[#E6EEE8]">
                  <div className="font-serif font-bold text-xs text-[#05180E]">Dedication</div>
                  <div className="text-[10px] text-[#264935] mt-0.5">Teacher Mastery</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-[#E6EEE8]">
                  <div className="font-serif font-bold text-xs text-[#05180E]">Duty</div>
                  <div className="text-[10px] text-[#264935] mt-0.5">Civic Leadership</div>
                </div>
                <div className="text-center p-3 rounded-2xl bg-[#E6EEE8]">
                  <div className="font-serif font-bold text-xs text-[#05180E]">Service</div>
                  <div className="text-[10px] text-[#264935] mt-0.5">Nation Building</div>
                </div>
              </div>

            </div>

            {/* National Impact Metric Telemetry */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#F2F6F3] rounded-3xl p-5 text-center border border-[#CAD8CE] shadow-xs">
                <div className="font-serif text-3xl sm:text-4xl font-black text-[#004D2C]">
                  35+
                </div>
                <div className="text-xs font-semibold text-[#05180E] mt-1">
                  Campuses
                </div>
                <div className="text-[10px] text-[#264935] font-mono mt-0.5">
                  15 Indian States
                </div>
              </div>

              <div className="bg-[#F2F6F3] rounded-3xl p-5 text-center border border-[#CAD8CE] shadow-xs">
                <div className="font-serif text-3xl sm:text-4xl font-black text-[#004D2C]">
                  45k+
                </div>
                <div className="text-xs font-semibold text-[#05180E] mt-1">
                  Learners
                </div>
                <div className="text-[10px] text-[#264935] font-mono mt-0.5">
                  Enrolled Nationwide
                </div>
              </div>

              <div className="bg-[#F2F6F3] rounded-3xl p-5 text-center border border-[#CAD8CE] shadow-xs">
                <div className="font-serif text-3xl sm:text-4xl font-black text-[#004D2C]">
                  2.3k+
                </div>
                <div className="text-xs font-semibold text-[#05180E] mt-1">
                  Faculty
                </div>
                <div className="text-[10px] text-[#264935] font-mono mt-0.5">
                  Certified Mentors
                </div>
              </div>

              <div className="bg-[#F2F6F3] rounded-3xl p-5 text-center border border-[#CAD8CE] shadow-xs">
                <div className="font-serif text-3xl sm:text-4xl font-black text-[#004D2C]">
                  100%
                </div>
                <div className="text-xs font-semibold text-[#05180E] mt-1">
                  CBSE Rigor
                </div>
                <div className="text-[10px] text-[#264935] font-mono mt-0.5">
                  Board Affiliations
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
