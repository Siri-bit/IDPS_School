import React from 'react';
import { ArrowRight, FileText, Sparkles, Building2 } from 'lucide-react';
import { IDPS_CONTACT } from '../data/idpsData';

interface HeroSectionProps {
  onOpenApplyModal: (modelId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApplyModal }) => {
  return (
    <section className="relative text-white overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24 bg-[#001D10]">
      {/* 1. BACKGROUND VIDEO (Plays smoothly behind/near header section) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <iframe
          src="https://www.youtube-nocookie.com/embed/ZVmBXzBNOK4?autoplay=1&mute=1&loop=1&playlist=ZVmBXzBNOK4&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1"
          className="absolute top-[38%] sm:top-[40%] left-1/2 w-[130vw] h-[130vh] min-w-[1200px] min-h-[100%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none opacity-85"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          title="IDPS Students and Campus Life Video"
        />

        {/* 2. TRANSLUCENT OVERLAY FOR HEADER & HERO LEGIBILITY */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20"
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#001D10] via-transparent to-black/25"
          aria-hidden="true" 
        />
      </div>

      {/* 3. HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-6 w-full">
        <div className="max-w-4xl space-y-6 text-left">
          {/* Welcome Headline */}
          <div className="space-y-3">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Welcome to The International Delhi Public School Society</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-balance">
              Shaping India’s Next Generation of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-100 font-serif italic">
                Global Leaders
              </span>
            </h1>

            <p className="font-heading text-lg sm:text-2xl font-semibold text-emerald-200">
              Empowering Education • Inspiring Excellence • Building Futures
            </p>
          </div>

          {/* Value Proposition Paragraph */}
          <p className="text-base sm:text-lg text-emerald-50/90 leading-relaxed max-w-2xl font-light">
            One vision, one CBSE academic standard, one commitment to quality — delivered across every IDPS campus nationwide. 
            Join India's premier educational network managed by visionary leaders with a <strong className="font-semibold text-white">guaranteed 90-day launch roadmap</strong> and 360° operational handholding.
          </p>

          {/* The 4 Crest Tenets */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-emerald-200/95 py-1">
            <span className="font-bold text-amber-300">Crest Tenets:</span>
            <span className="bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10">Discipline</span>
            <span className="text-white/40">·</span>
            <span className="bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10">Dedication</span>
            <span className="text-white/40">·</span>
            <span className="bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10">Duty</span>
            <span className="text-white/40">·</span>
            <span className="bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10">Selfless Service</span>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={() => onOpenApplyModal()}
              className="inline-flex items-center gap-2.5 px-7 py-4 text-sm font-bold text-[#002B15] bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Partner With Us / Apply for Franchise</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#models"
              className="inline-flex items-center gap-2 px-5 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all backdrop-blur-md"
            >
              <Building2 className="w-4 h-4 text-amber-300" />
              <span>Explore 7 Models</span>
            </a>

            <a
              href={IDPS_CONTACT.brochurePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-4 text-xs font-semibold text-emerald-200 hover:text-white underline underline-offset-4 transition-colors"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Download Brochure PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4. Bottom Smooth Curved Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 70" 
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 text-[#FAFAF7]"
        >
          <path 
            fill="currentColor" 
            d="M500,67C126.7,66.3,0.8,13.8,0,0v70l1000,0V1C1000,13.4,873.3,67.8,500,67z"
          />
        </svg>
      </div>
    </section>
  );
};
