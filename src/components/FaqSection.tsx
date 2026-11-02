import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, FileText, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { FAQ_DATA, IDPS_CONTACT } from '../data/idpsData';

interface FaqSectionProps {
  onOpenApplyModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenApplyModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs = FAQ_DATA.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-8 lg:py-10 bg-[#E6EEE8] border-b border-[#BACBBF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-3">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>PARTNER DUE DILIGENCE &amp; INQUIRY</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#264935] font-normal">
            Everything prospective franchise trustees need to know regarding affiliations, capital expenditure, and central society support.
          </p>
        </div>

        {/* Master Knowledge Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 4 Columns: Direct Investor Help Desk Plaque */}
          <div className="lg:col-span-4 bg-[#021D12] text-white rounded-3xl p-6 sm:p-8 space-y-5 border border-[#0A3B26] shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#004D2C] flex items-center justify-center text-[#E5B842] shadow-sm">
              <HelpCircle className="w-6 h-6" />
            </div>

            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E5B842] mb-1">
                Central Society Helpdesk
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                Have specific queries about your city?
              </h3>
              <p className="text-xs text-[#A3C4AF] leading-relaxed mt-2">
                Our Central Franchise Directors provide direct feasibility evaluations and confidential demographic catchment reports.
              </p>
            </div>

            <div className="pt-4 border-t border-[#0A3B26] space-y-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#F2F6F3]">
                <Phone className="w-4 h-4 text-[#E5B842] shrink-0" />
                <span>+91 7004222833 / 9631910016</span>
              </div>
              <div className="text-[#A3C4AF]">
                Email: {IDPS_CONTACT.franchiseEmail}
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenApplyModal}
              className="w-full py-3.5 bg-[#004D2C] hover:bg-[#025A36] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer font-mono tracking-wider flex items-center justify-center gap-2"
            >
              <span>Submit Franchise EOI</span>
              <ArrowRight className="w-4 h-4 text-[#E5B842]" />
            </button>
          </div>

          {/* Right 8 Columns: Accordion FAQ Console */}
          <div className="lg:col-span-8 space-y-4">
            {/* Search Input Bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search queries regarding land, fee structures, CBSE affiliation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl bg-[#F2F6F3] border border-[#CAD8CE] text-xs sm:text-sm text-[#05180E] placeholder-[#264935]/60 focus:outline-none focus:border-[#004D2C]"
              />
            </div>

            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center text-xs font-mono text-[#264935] bg-[#F2F6F3] rounded-2xl border border-[#CAD8CE]">
                No questions found matching your search. Please contact our Central Franchise Desk directly.
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={idx}
                    className="bg-[#F2F6F3] rounded-2xl border border-[#CAD8CE] overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#E6EEE8] transition-colors"
                    >
                      <span className="font-serif font-bold text-sm sm:text-base text-[#05180E] leading-snug">
                        {faq.question}
                      </span>
                      <span className="p-1.5 rounded-lg bg-[#E6EEE8] text-[#004D2C] shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#163323] leading-relaxed border-t border-[#CAD8CE]/60 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
