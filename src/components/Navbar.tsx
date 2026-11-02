import React, { useState } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { IDPS_CONTACT } from '../data/idpsData';

interface NavbarProps {
  onOpenApplyModal: (modelId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exact navigation links from the reference screenshot
  // ABOUT | OUR SCHOOLS | ACADEMICS | STUDENT EXCELLENCE | IDPS EDGE | CAREERS | MEDIA
  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'OUR SCHOOLS', href: '#our-schools' },
    { label: 'ACADEMICS', href: '#academics' },
    { label: 'STUDENT EXCELLENCE', href: '#student-excellence' },
    { label: 'IDPS EDGE', href: '#idps-edge' },
    { label: 'CAREERS', href: '#careers' },
    { label: 'MEDIA', href: '#media' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 -mb-20 lg:-mb-22 transition-all duration-300 w-full overflow-x-clip ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl' 
          : 'bg-gradient-to-b from-black/90 via-black/45 to-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 lg:h-22 gap-2 sm:gap-4">
          
          {/* LEFT ZONE: FULL NAME OF SCHOOL & IDPS CREST */}
          <div className="flex items-center gap-2 sm:gap-3 shrink min-w-0">
            <a 
              href="#" 
              className="flex items-center gap-2 sm:gap-3 group min-w-0"
              title="International Delhi Public School - The IDPS Society, New Delhi"
            >
              {/* IDPS Official Crest Badge */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white rounded-lg sm:rounded-xl p-0.5 sm:p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0 border border-white/30">
                <img
                  src={IDPS_CONTACT.logoUrl}
                  alt="IDPS Society Official Crest"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Full School Name */}
              <div className="flex flex-col text-left min-w-0">
                <span className="font-heading font-extrabold text-white text-[11px] sm:text-sm lg:text-[15px] 2xl:text-[16px] tracking-wide uppercase leading-tight drop-shadow-sm group-hover:text-amber-100 transition-colors truncate">
                  INTERNATIONAL DELHI
                </span>
                <span className="font-heading font-extrabold text-white text-[11px] sm:text-sm lg:text-[15px] 2xl:text-[16px] tracking-wide uppercase leading-tight drop-shadow-sm group-hover:text-amber-100 transition-colors truncate">
                  PUBLIC SCHOOL
                </span>
                <div className="hidden xs:flex items-center gap-1.5 text-[7.5px] sm:text-[9px] lg:text-[9.5px] tracking-wider font-semibold mt-0.5 leading-none">
                  <span className="text-slate-300 uppercase">THE IDPS SOCIETY, NEW DELHI</span>
                  <span className="text-amber-400">•</span>
                  <span className="text-amber-400 font-bold">Estd. 2012</span>
                </div>
              </div>
            </a>
          </div>

          {/* CENTER ZONE: DESKTOP NAVIGATION LINKS */}
          <nav className="hidden xl:flex items-center gap-2 2xl:gap-5 text-[11.5px] 2xl:text-[13px] font-bold text-white/90 tracking-wider shrink min-w-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-1 px-1 hover:text-amber-400 transition-colors uppercase whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-amber-400 after:to-orange-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT ZONE: "OPEN AN IDPS SCHOOL" CTA LINK & BUTTON (Guaranteed to fit screen) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Quick Call Desk icon - visible only on wide screens to protect CTA button width */}
            <a
              href="tel:+917004222833"
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors shrink-0"
              title="Call Franchise Desk: +91 7004222833"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-[11px]">7004222833</span>
            </a>

            {/* "Open an IDPS School" Button - Responsive and precisely fitted to screen */}
            <button
              onClick={() => onOpenApplyModal()}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4.5 lg:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs lg:text-sm font-bold text-white rounded-lg shadow-lg hover:shadow-orange-500/25 hover:brightness-110 active:scale-[0.98] transition-all duration-200 whitespace-nowrap overflow-hidden border border-white/25 bg-gradient-to-r from-[#ea580c] via-[#b62a52] to-[#4c1653] cursor-pointer shrink-0"
              title="Open an IDPS School - Start Franchise Application"
            >
              <span className="relative z-10 tracking-wide font-heading">
                Open an IDPS School
              </span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile / Tablet menu toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 border border-white/10 transition-colors shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0f0d]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Mobile School Info Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-white/10">
            <div className="w-10 h-10 bg-white rounded-lg p-0.5 flex items-center justify-center shrink-0 border border-white/20">
              <img
                src={IDPS_CONTACT.logoUrl}
                alt="IDPS Crest"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-xs tracking-wider uppercase leading-tight">
                INTERNATIONAL DELHI PUBLIC SCHOOL
              </span>
              <span className="text-[9px] text-amber-300 font-medium">
                THE IDPS SOCIETY, NEW DELHI • Estd. 22nd Feb 2012
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3.5 py-2.5 rounded-lg text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 tracking-wider uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Apply Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#ea580c] via-[#b62a52] to-[#4c1653] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Open an IDPS School</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
