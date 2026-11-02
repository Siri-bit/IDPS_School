import React, { useState } from 'react';
import { Building, MapPin, CheckCircle, ArrowRight, ShieldCheck, DollarSign, Layers, ChevronRight, Sparkles } from 'lucide-react';
import { FRANCHISE_MODELS, FranchiseModel } from '../data/idpsData';

interface FranchiseModelsSectionProps {
  onSelectModel: (modelId: string) => void;
}

export const FranchiseModelsSection: React.FC<FranchiseModelsSectionProps> = ({ onSelectModel }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'preschool' | 'primary' | 'middle' | 'k12' | 'special'>('all');
  const [selectedModel, setSelectedModel] = useState<FranchiseModel>(FRANCHISE_MODELS[3]); // Default K-12 Flagship

  const filteredModels = activeCategory === 'all'
    ? FRANCHISE_MODELS
    : FRANCHISE_MODELS.filter(m => m.category === activeCategory);

  const getFeeDisplay = (model: FranchiseModel) => {
    if (model.franchiseFee.general) return model.franchiseFee.general;
    if (model.franchiseFee.tier1) return `Tier 1: ${model.franchiseFee.tier1} • Tier 2: ${model.franchiseFee.tier2}`;
    return 'Contact Central Secretariat';
  };

  return (
    <section id="franchise-models" className="py-8 lg:py-10 bg-[#E6EEE8] border-b border-[#BACBBF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-3">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>7 INSTITUTIONAL ARCHETYPES</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            Franchise Business Opportunity
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#264935] font-normal">
            Bespoke school models tailored to your land parcel, investment bandwidth, and demographic catchment area.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All 7 Models' },
            { id: 'preschool', label: 'Early Years (Junior)' },
            { id: 'primary', label: 'Primary Wing (K-5)' },
            { id: 'middle', label: 'Elementary (K-8)' },
            { id: 'k12', label: 'Flagship K-12 (10+2)' },
            { id: 'special', label: 'Specialist & Global' }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#021D12] text-[#E5B842] shadow-sm'
                  : 'bg-[#F2F6F3] text-[#163323] hover:bg-[#DFE7E1] border border-[#CAD8CE]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Master Two-Column Interactive Model Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 5 COLUMNS: Model Selection Deck */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#004D2C] px-1 mb-2">
              Select School Model to Inspect
            </div>

            {filteredModels.map((model) => {
              const isSelected = selectedModel.id === model.id;
              return (
                <div
                  key={model.id}
                  onClick={() => setSelectedModel(model)}
                  className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#021D12] text-white border-[#0A3B26] shadow-md -translate-y-0.5'
                      : 'bg-[#F2F6F3] text-[#05180E] border-[#CAD8CE] hover:border-[#BACBBF] hover:bg-[#E6EEE8]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wide px-2 py-0.5 rounded ${
                      isSelected ? 'bg-[#0A3B26] text-[#E5B842]' : 'bg-[#E6EEE8] text-[#004D2C]'
                    }`}>
                      {model.badge}
                    </span>
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#E5B842]' : 'text-[#004D2C]'}`}>
                      {model.classes}
                    </span>
                  </div>

                  <h3 className={`font-serif text-base font-bold mt-2 ${isSelected ? 'text-white' : 'text-[#05180E]'}`}>
                    {model.name}
                  </h3>

                  <div className={`mt-2 flex items-center justify-between text-xs font-mono pt-2 border-t ${
                    isSelected ? 'border-[#0A3B26] text-[#A3C4AF]' : 'border-[#CAD8CE] text-[#264935]'
                  }`}>
                    <span>Area: {model.setupArea.split('(')[0]}</span>
                    <span className="font-bold text-[#E5B842]">{model.franchiseFee.general || 'Tiered Capex'}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT 7 COLUMNS: Detailed Model Specification Dossier */}
          <div className="lg:col-span-7">
            <div className="bg-[#F2F6F3] rounded-3xl p-6 sm:p-8 shadow-md border border-[#CAD8CE] space-y-6">
              
              {/* Dossier Header */}
              <div className="border-b border-[#CAD8CE] pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#004D2C]">
                    Institutional Blueprint Dossier
                  </span>
                  <span className="text-xs font-mono font-bold text-[#E5B842] bg-[#021D12] px-2.5 py-1 rounded-md">
                    {selectedModel.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#05180E] tracking-tight">
                  {selectedModel.name}
                </h3>
                <p className="text-sm text-[#264935] mt-1 font-medium">
                  Grade Spectrum: <strong className="text-[#05180E]">{selectedModel.classes}</strong>
                </p>
              </div>

              {/* Key Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#E6EEE8] border border-[#BACBBF]">
                  <div className="text-[11px] font-mono font-bold text-[#004D2C] uppercase tracking-wider mb-1">
                    Land &amp; Built-up Area
                  </div>
                  <div className="font-serif font-bold text-base text-[#05180E]">
                    {selectedModel.setupArea}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#E6EEE8] border border-[#BACBBF]">
                  <div className="text-[11px] font-mono font-bold text-[#004D2C] uppercase tracking-wider mb-1">
                    Franchise Fee Structure
                  </div>
                  <div className="font-serif font-bold text-sm text-[#004D2C]">
                    {getFeeDisplay(selectedModel)}
                  </div>
                </div>
              </div>

              {/* Model Description */}
              <div>
                <h4 className="font-serif font-bold text-sm text-[#05180E] mb-2">
                  Format Description &amp; Pedagogy
                </h4>
                <p className="text-sm text-[#163323] leading-relaxed">
                  {selectedModel.description}
                </p>
              </div>

              {/* Highlights Checklist */}
              <div>
                <h4 className="font-serif font-bold text-sm text-[#05180E] mb-3">
                  Mandatory Architectural &amp; Academic Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedModel.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#264935]">
                      <CheckCircle className="w-4 h-4 text-[#004D2C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demographic Ideal For */}
              <div className="p-4 rounded-2xl bg-[#DFE7E1] border border-[#BACBBF]">
                <div className="text-[11px] font-mono font-bold text-[#004D2C] uppercase tracking-wider mb-1">
                  Ideal Demographic Setting
                </div>
                <div className="text-xs sm:text-sm text-[#05180E] font-medium">
                  {selectedModel.idealFor}
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-4 border-t border-[#CAD8CE] flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onSelectModel(selectedModel.id)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#004D2C] hover:bg-[#025A36] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer font-mono tracking-wider"
                >
                  <span>Inquire for {selectedModel.name.split('.')[1]?.trim() || selectedModel.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#E5B842]" />
                </button>

                <div className="text-xs text-[#264935] font-mono">
                  Territory Exclusivity Guaranteed
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
