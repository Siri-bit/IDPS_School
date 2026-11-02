import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, MapPin, Users, GraduationCap, 
  Award, Clock, CheckCircle2, TrendingUp, Sparkles
} from 'lucide-react';

interface AnimatedStatsSectionProps {
  onOpenApplyModal?: (modelId?: string) => void;
}

interface StatItem {
  id: string;
  targetValue: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  kicker: string;
  icon: React.ElementType;
  delayMs: number;
}

export const AnimatedStatsSection: React.FC<AnimatedStatsSectionProps> = ({ onOpenApplyModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Core Statistics from Real IDPS Society Credentials
  const stats: StatItem[] = [
    {
      id: 'heritage',
      targetValue: 14,
      suffix: '+',
      label: 'Years of Legacy',
      sublabel: 'Founded 22nd Feb 2012 in New Delhi',
      kicker: 'CBSE Affiliated Network',
      icon: Clock,
      delayMs: 0
    },
    {
      id: 'campuses',
      targetValue: 35,
      suffix: '+',
      label: 'Operational Campuses',
      sublabel: 'Established & thriving branches nationwide',
      kicker: 'Pan-India Footprint',
      icon: Building2,
      delayMs: 100
    },
    {
      id: 'states',
      targetValue: 15,
      suffix: '+',
      label: 'Indian States Covered',
      sublabel: 'From Delhi NCR to Karnataka & Kerala',
      kicker: 'National Presence',
      icon: MapPin,
      delayMs: 200
    },
    {
      id: 'students',
      targetValue: 45000,
      suffix: '+',
      label: 'Active Scholars',
      sublabel: 'Enrolled across Pre-Nursery to 10+2',
      kicker: 'Thriving Learners',
      icon: Users,
      delayMs: 300
    },
    {
      id: 'faculty',
      targetValue: 2370,
      suffix: '+',
      label: 'Certified Faculty',
      sublabel: 'Trained by Central Teachers Academy',
      kicker: 'Pedagogical Excellence',
      icon: GraduationCap,
      delayMs: 400
    },
    {
      id: 'board-rate',
      targetValue: 100,
      suffix: '%',
      label: 'CBSE Pass Standard',
      sublabel: 'Standardized exams & lesson blueprints',
      kicker: 'Academic Benchmark',
      icon: Award,
      delayMs: 500
    },
    {
      id: 'roadmap',
      targetValue: 90,
      suffix: ' Days',
      label: 'Turnkey Launch Velocity',
      sublabel: 'From LOI to inaugural ribbon-cutting',
      kicker: 'Guaranteed Framework',
      icon: TrendingUp,
      delayMs: 600
    },
    {
      id: 'models',
      targetValue: 7,
      suffix: ' Models',
      label: 'Tailored Franchise Tiers',
      sublabel: 'Junior Play Wing to 5-Acre K-12 Elite',
      kicker: 'Customizable Capex',
      icon: CheckCircle2,
      delayMs: 700
    }
  ];

  // Scroll-triggered viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger animation once
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-8 lg:py-10 bg-[#EFF3F0] border-b border-[#BACBBF] relative overflow-hidden"
    >
      {/* Subtle architectural ambient texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#021D12 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Strip with Slide & Fade In */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-2.5">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>MEASURABLE NATIONAL IMPACT</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            Institutional Growth &amp; Milestones
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#264935] font-normal">
            Fourteen years of verifiable academic rigour, infrastructure milestones, and nationwide trust.
          </p>
        </div>

        {/* 8 Metric Cards Grid with Staggered Slide & Fade In */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                style={{ transitionDelay: `${stat.delayMs}ms` }}
                className={`group bg-[#F2F6F3] rounded-2xl p-5 border border-[#CAD8CE] shadow-xs hover:shadow-md hover:border-[#004D2C]/40 hover:-translate-y-1 transition-all duration-700 ease-out flex flex-col justify-between ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                {/* Card Top: Icon & Kicker */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#004D2C]">
                    {stat.kicker}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#E6EEE8] text-[#004D2C] group-hover:bg-[#021D12] group-hover:text-[#E5B842] transition-colors flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Counter Number */}
                <div className="py-1">
                  <div className="font-serif font-black text-3xl sm:text-4xl text-[#05180E] group-hover:text-[#004D2C] tracking-tight transition-colors">
                    {stat.prefix}
                    <AnimatedCounter
                      target={stat.targetValue}
                      active={isVisible}
                      duration={1800 + stat.delayMs}
                    />
                    <span className="text-[#D4A232] ml-0.5">{stat.suffix}</span>
                  </div>
                  
                  <div className="font-serif font-bold text-sm text-[#05180E] mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>

                {/* Bottom Subtitle */}
                <div className="pt-3 mt-2 border-t border-[#CAD8CE]/70 text-[11px] text-[#264935] leading-normal font-normal">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// Smooth Ease-Out Easing Function
function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

// Individual Animated Number Hook & Component
interface AnimatedCounterProps {
  target: number;
  active: boolean;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, active, duration = 2000 }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      
      const nextValue = Math.floor(easedProgress * target);
      setCurrentValue(nextValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCurrentValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [active, target, duration]);

  // Format large numbers with comma separator (e.g. 45,000, 2,370)
  return <span>{currentValue.toLocaleString('en-IN')}</span>;
};
