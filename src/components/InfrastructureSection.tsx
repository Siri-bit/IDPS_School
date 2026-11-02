import React, { useState } from 'react';
import { Monitor, Cpu, BookOpen, Trophy, Palette, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const InfrastructureSection: React.FC = () => {
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);

  const facilities = [
    {
      id: 'smart-classrooms',
      name: 'Smart Interactive Classrooms',
      icon: Monitor,
      specs: 'Minimum 500 Sq. Ft. per Room • Max 35 Students per Section',
      desc: 'Ergonomically engineered learning spaces equipped with 75" ultra-HD interactive touchscreen flat panels, dual-band Wi-Fi connectivity, anti-glare acoustics, and age-adapted modular furniture that fosters collaborative problem-solving.',
      photo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
      features: [
        '75" Interactive 4K Touch Panels preloaded with CBSE digital content',
        'Certified non-toxic, ergonomic student benches and posture chairs',
        'Energy-efficient daylight harvesting and ambient air-conditioning',
        'Direct connection to school ERP for attendance and multimedia lessons'
      ]
    },
    {
      id: 'stem-labs',
      name: 'STEM, Robotics & Science Labs',
      icon: Cpu,
      specs: 'Minimum 800 Sq. Ft. Composite Suites • Fire & Chemical NOC Standards',
      desc: 'Purpose-built laboratories for Physics, Chemistry, Biology, and Robotics. Fitted with epoxy acid-resistant workstations, safety eyewash stations, exhaust fume hoods, and state-of-the-art robotic kits aligned with international tinkering curricula.',
      photo: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
      features: [
        'Pre-commissioned laboratory inventory dispatched directly from central HQ',
        'High-grade microscopes, electronic balances, and optical benches',
        'Arduino and Raspberry Pi kits with age-graded curriculum manuals',
        'Independent safety circuit breakers and emergency cut-offs'
      ]
    },
    {
      id: 'library',
      name: 'Central Research & Digital Library',
      icon: BookOpen,
      specs: 'Minimum 1,200 Sq. Ft. • 5,000+ Curated Titles • Digital RFID',
      desc: 'A serene sanctum of literature and knowledge. Featuring cozy reading alcoves, multimedia research kiosks with Kindle e-readers, national periodicals, and an automated RFID library cataloging system.',
      photo: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
      features: [
        'Curated book lists spanning global classics, sciences, and history',
        'Dedicated early childhood illustrated storytelling corner',
        'High-speed digital workstation carrels for academic research',
        'Subscription to National Geographic, Scientific American & CBSE journals'
      ]
    },
    {
      id: 'sports',
      name: 'Olympic Sports & Athletic Arenas',
      icon: Trophy,
      specs: 'Multi-Acre Sports Complex • Turf Football, Basketball, Cricket & Track',
      desc: 'Comprehensive outdoor and indoor athletic infrastructure designed to foster teamwork, endurance, and sporting excellence under the guidance of NIS-certified physical directors.',
      photo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
      features: [
        'All-weather synthetic turf basketball and volleyball courts',
        'Professional turf cricket practice nets with automated bowling machines',
        'Covered badminton courts and table tennis indoor arena',
        'Half-Olympic swimming pool with dedicated coaches (Premium models)'
      ]
    },
    {
      id: 'performing-arts',
      name: 'Performing Arts & Creative Studios',
      icon: Palette,
      specs: 'Acoustically Treated Studios • Dance, Music & Fine Arts Suites',
      desc: 'Vibrant creative sanctuaries for theatrical expression, classical and Western vocal music, Indian instrumental arts, pottery, sculpting, and digital media creation.',
      photo: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      features: [
        'Mirrored dance studio with sprung wooden shock-absorbing floors',
        'Soundproof music studio equipped with keyboards, drums, and sitars',
        'Fine arts atelier with natural northern daylight and display galleries',
        'Annual theatrical auditorium productions and regional showcase'
      ]
    },
    {
      id: 'safety',
      name: 'Safe & Monitored Biometric Perimeter',
      icon: ShieldCheck,
      specs: 'Zero-Blindspot CCTV • RFID Gates • GPS Transport Fleet',
      desc: 'Uncompromising child safety protocols. 24/7 high-definition security camera coverage, biometric access for all visitors, medical infirmary with qualified nurse, and real-time GPS tracking for student buses.',
      photo: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
      features: [
        'Central control room with multi-angle CCTV camera feeds',
        'RFID tap-in card system notifying parents upon student entry and exit',
        'Fleet of GPS-monitored school buses with verified lady attendants',
        'Fully equipped 4-bed campus health clinic with on-call pediatrician'
      ]
    }
  ];

  const activeFacility = facilities[activeFacilityIndex];

  return (
    <section id="infrastructure" className="py-8 lg:py-10 bg-[#E6EEE8] border-b border-[#BACBBF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-3">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>ARCHITECTURAL BENCHMARKS &amp; STANDARDS</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            Turnkey Project Implementation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#264935] font-normal">
            World-class campus specifications engineered to meet and exceed CBSE, state affiliation, and international safety norms.
          </p>
        </div>

        {/* Master Studio Layout: Facility Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 bg-[#DFE7E1] rounded-2xl mb-8 border border-[#BACBBF]">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            const isActive = activeFacilityIndex === idx;
            return (
              <button
                key={fac.id}
                type="button"
                onClick={() => setActiveFacilityIndex(idx)}
                className={`py-2.5 px-3 rounded-xl text-left transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#021D12] text-[#E5B842] shadow-sm'
                    : 'text-[#163323] hover:text-[#05180E] hover:bg-[#E6EEE8]'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#E5B842]' : 'text-[#004D2C]'}`} />
                <span className="text-xs font-serif font-bold truncate">
                  {fac.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Studio Showcase: Two-Column Deep Specification Card */}
        <div className="bg-[#F2F6F3] rounded-3xl overflow-hidden shadow-md border border-[#CAD8CE] grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left 6 Columns: Blueprint Facility Photography */}
          <div className="lg:col-span-6 relative aspect-16/10 lg:aspect-auto min-h-[360px] overflow-hidden bg-[#021D12]">
            <img
              src={activeFacility.photo}
              alt={activeFacility.name}
              className="w-full h-full object-cover object-center filter brightness-[0.9] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021D12] via-[#021D12]/20 to-transparent" />

            {/* Spatial Spec Ribbon */}
            <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-2xl bg-[#021D12]/90 backdrop-blur-md border border-[#0A3B26] text-white">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E5B842]">
                Architectural Metric
              </div>
              <div className="text-xs font-mono text-[#F2F6F3] mt-0.5 truncate">
                {activeFacility.specs}
              </div>
            </div>
          </div>

          {/* Right 6 Columns: Technical Specifications */}
          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#004D2C] uppercase tracking-wider">
                <activeFacility.icon className="w-4 h-4 text-[#D4A232]" />
                <span>ARCHITECTURAL STANDARD SPECIFICATION</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#05180E] leading-tight mb-3">
                {activeFacility.name}
              </h3>

              <p className="text-sm sm:text-base text-[#163323] leading-relaxed mb-6">
                {activeFacility.desc}
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#05180E]">
                  Mandatory Infrastructure Deliverables
                </h4>
                {activeFacility.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#264935]">
                    <CheckCircle2 className="w-4 h-4 text-[#004D2C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Turnkey Assurance Plaque */}
            <div className="pt-4 border-t border-[#CAD8CE] flex items-center justify-between text-xs font-mono">
              <span className="text-[#05180E] font-semibold">
                Central CAD Blueprints &amp; 3D Visuals Supplied
              </span>
              <span className="text-[#004D2C] font-bold">
                CBSE Compliant
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
