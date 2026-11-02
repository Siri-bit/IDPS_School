import React from 'react';
import { ArrowUp, Download, Phone, Mail, MapPin, ShieldCheck, Sparkles, Building2, ExternalLink } from 'lucide-react';
import { IDPS_CONTACT, FRANCHISE_MODELS } from '../data/idpsData';

interface FooterProps {
  onOpenApplyModal: () => void;
  onOpenOfflineModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApplyModal, onOpenOfflineModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#021D12] text-[#D1E0D7] border-t-2 border-[#D4A232]/80 relative overflow-hidden">
      
      {/* Top Gazette Marquee Bar */}
      <div className="bg-[#01140C] border-b border-[#0A3B26] py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#E5B842]">
            <Sparkles className="w-4 h-4 text-[#E5B842]" />
            <span className="font-bold">National K-12 Benchmark • 35+ Operational Campuses Across 15 States</span>
          </div>
          <div className="flex items-center gap-4 text-[#A3C4AF]">
            <span>CBSE Pattern Network</span>
            <span>•</span>
            <span>Estd. 22nd Feb 2012</span>
            <span>•</span>
            <span>The IDPS Society, New Delhi</span>
          </div>
        </div>
      </div>

      {/* Main 5-Column Architectural Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Institutional Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 border border-white/20">
                <img
                  src={IDPS_CONTACT.logoUrl}
                  alt="IDPS Society Crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-black text-lg text-white leading-tight">
                  INTERNATIONAL DELHI PUBLIC SCHOOL
                </h3>
                <p className="text-[10px] font-mono text-[#E5B842] uppercase tracking-wider">
                  The IDPS Society, New Delhi • Estd. 2012
                </p>
              </div>
            </div>

            <p className="text-xs text-[#A3C4AF] leading-relaxed">
              Empowering visionary educationists to build landmark CBSE institutions. Committed to holistic academic rigour, character formation, and Olympic athletic discipline.
            </p>

            <div className="pt-2 text-[11px] font-mono text-[#D4A232] space-y-1">
              <div>Motto: {IDPS_CONTACT.motto}</div>
              <div className="text-[#A3C4AF]">Regd: {IDPS_CONTACT.registeredOffice}</div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenApplyModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#004D2C] hover:bg-[#025A36] text-white text-xs font-bold font-mono tracking-wider rounded-xl shadow-xs transition-all"
              >
                <span>Open an IDPS School</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5B842]">
              Quick Directory
            </h4>
            <ul className="space-y-2 text-xs text-[#A3C4AF]">
              <li><a href="#about" className="hover:text-white transition-colors">About Society</a></li>
              <li><a href="#president-message" className="hover:text-white transition-colors">President&apos;s Message</a></li>
              <li><a href="#idps-edge" className="hover:text-white transition-colors">The IDPS Edge</a></li>
              <li><a href="#our-schools" className="hover:text-white transition-colors">Network Map</a></li>
              <li><a href="#franchise-models" className="hover:text-white transition-colors">7 School Models</a></li>
              <li><a href="#support-services" className="hover:text-white transition-colors">11 Core Services</a></li>
              <li><a href="#infrastructure" className="hover:text-white transition-colors">Campus Standards</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">90-Day Roadmap</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Investor FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: 7 School Formats (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5B842]">
              Franchise Formats
            </h4>
            <ul className="space-y-2 text-xs text-[#A3C4AF]">
              {FRANCHISE_MODELS.map(m => (
                <li key={m.id}>
                  <a href="#franchise-models" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>{m.name}</span>
                    <span className="font-mono text-[10px] text-[#E5B842]">{m.classes.split(' ')[0]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Secretariat Contacts (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5B842]">
              Franchise Desk
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#A3C4AF]">
              <div>
                <span className="block text-[10px] uppercase font-mono text-[#E5B842]">Direct Helplines</span>
                <a href="tel:+917004222833" className="text-white hover:underline font-mono font-bold">+91 7004222833</a>
                <span className="text-[#A3C4AF]"> / </span>
                <a href="tel:+919631910016" className="text-white hover:underline font-mono font-bold">+91 9631910016</a>
              </div>

              <div>
                <span className="block text-[10px] uppercase font-mono text-[#E5B842]">Official Email</span>
                <a href={`mailto:${IDPS_CONTACT.email}`} className="text-white hover:underline">{IDPS_CONTACT.email}</a>
              </div>

              <div>
                <span className="block text-[10px] uppercase font-mono text-[#E5B842]">Corporate Portal</span>
                <span className="text-white font-mono">{IDPS_CONTACT.website}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#0A3B26] space-y-2">
              <a
                href={IDPS_CONTACT.brochurePdfUrl}
                download="IDPS_Franchise_Brochure.pdf"
                className="flex items-center gap-2 text-xs font-mono text-[#E5B842] hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Franchise Brochure (PDF)</span>
              </a>

              <button
                type="button"
                onClick={onOpenOfflineModal}
                className="flex items-center gap-2 text-xs font-mono text-[#A3C4AF] hover:text-white transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Offline Deployment Kit</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-[#0A3B26] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A3C4AF]">
          <div>
            &copy; 2012 – {new Date().getFullYear()} {IDPS_CONTACT.societyName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Pandav Nagar, New Delhi – 110092</span>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#E5B842] hover:text-white transition-colors cursor-pointer font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
