import React from 'react';
import { FileText, Download, CheckCircle, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { IDPS_CONTACT } from '../data/idpsData';

export const BrochurePreviewSection: React.FC = () => {
  return (
    <section className="py-8 lg:py-10 bg-[#DFE7E1] border-b border-[#BACBBF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Master Publication Dossier Container */}
        <div className="bg-[#021D12] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-[#0A3B26]">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 8 Columns: Official Prospectus Pitch */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#E5B842] bg-[#004D2C]/60 px-3 py-1 rounded-md border border-[#0A3B26]">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL DOCUMENTS &amp; PROSPECTUS VAULT</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-black text-white leading-tight">
                Download the Complete IDPS Business Proposal &amp; Franchise Brochure
              </h2>

              <p className="text-sm sm:text-base text-[#A3C4AF] leading-relaxed max-w-2xl font-normal">
                Access our 14-page comprehensive institutional blueprint including land metrics, architectural CAD specifications, fee retention grids, staffing matrices, and 3-year projected profit models.
              </p>

              {/* 4 Key Contents Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#D1E0D7]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#E5B842] shrink-0" />
                  <span>14-Page Comprehensive Business Proposal</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#E5B842] shrink-0" />
                  <span>11 Core Support Services Document</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#E5B842] shrink-0" />
                  <span>Complete Fee &amp; Salary Grid Annexures</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#E5B842] shrink-0" />
                  <span>90-Day Execution Timelines &amp; Deliverables</span>
                </div>
              </div>

              {/* Download Buttons Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={IDPS_CONTACT.brochurePdfUrl}
                  download="IDPS_Franchise_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold font-mono tracking-wider text-white bg-[#004D2C] hover:bg-[#025A36] rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#E5B842]" />
                  <span>Download Official Brochure (PDF)</span>
                </a>

                <a
                  href={IDPS_CONTACT.servicesPdfUrl}
                  download="IDPS_Support_Services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold font-mono tracking-wider text-[#A3C4AF] hover:text-white bg-[#062E1D] hover:bg-[#0A3B26] border border-[#0A3B26] rounded-xl transition-all cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-[#E5B842]" />
                  <span>Support &amp; Services PDF</span>
                </a>
              </div>
            </div>

            {/* Right 4 Columns: Realistic Publication Plaque */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-[#F2F6F3] text-[#05180E] rounded-3xl p-7 shadow-2xl border-2 border-[#D4A232]/80 max-w-xs w-full text-center space-y-4">
                <img
                  src={IDPS_CONTACT.logoUrl}
                  alt="IDPS Society"
                  className="h-20 w-auto mx-auto object-contain"
                />
                <div className="border-t border-b border-[#CAD8CE] py-3 space-y-1">
                  <div className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#004D2C]">
                    Official Publication
                  </div>
                  <h4 className="font-serif font-black text-sm text-[#05180E]">
                    Business Proposal &amp; Franchise Brochure
                  </h4>
                  <div className="text-[11px] text-[#264935] font-normal">
                    The International Delhi Public School Society, New Delhi
                  </div>
                </div>

                <div className="text-[11px] text-[#163323] bg-[#E6EEE8] p-3 rounded-xl border border-[#BACBBF] text-left space-y-1 font-mono">
                  <div>• Founded: 22 Feb 2012</div>
                  <div>• Models: Pre-Nursery to 10+2</div>
                  <div>• Regd: Pandav Nagar, New Delhi</div>
                </div>

                <a
                  href={IDPS_CONTACT.brochurePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 rounded-xl bg-[#004D2C] hover:bg-[#025A36] text-white text-xs font-bold font-mono tracking-wider transition-colors shadow-xs"
                >
                  Direct PDF Access
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
