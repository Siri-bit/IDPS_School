import React from 'react';
import { Phone, Mail, MapPin, FileText, Sparkles } from 'lucide-react';
import { IDPS_CONTACT } from '../data/idpsData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#03170E] text-[#D1E0D7] text-xs py-2 px-4 border-b border-[#0A3B26]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Contact info zone */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#F1C95A]" />
            <span className="font-medium text-[#D4A232]">Franchise Desk:</span>
            <a href="tel:+917004222833" className="hover:underline font-mono">7004222833</a>
            <span className="text-white/40">/</span>
            <a href="tel:+919631910016" className="hover:underline font-mono">9631910016</a>
          </div>

          <div className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#F1C95A]" />
            <a href={`mailto:${IDPS_CONTACT.email}`} className="hover:underline">{IDPS_CONTACT.email}</a>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-stone-300">
            <MapPin className="w-3.5 h-3.5 text-[#F1C95A]" />
            <span>Regd Office: Pandav Nagar, New Delhi - 110092</span>
          </div>
        </div>

        {/* Right utility items */}
        <div className="flex items-center gap-3 ml-auto">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-[#F1C95A] font-medium tracking-wide">
            <Sparkles className="w-3 h-3 text-[#F1C95A]" />
            <span>CBSE Pattern Network • Estd. 22nd Feb 2012</span>
          </span>
          <span className="hidden sm:inline text-white/30" aria-hidden="true">·</span>

          <a
            href={IDPS_CONTACT.brochurePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] text-[#F1C95A] hover:text-[#FFF5DC] font-bold transition-colors bg-[#0A3B26]/60 hover:bg-[#004D2C] px-3 py-1 rounded-md border border-[#D4A232]/40"
            title="Download Official Franchise Brochure PDF"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Brochure (PDF)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
