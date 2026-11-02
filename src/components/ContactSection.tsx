import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';
import { IDPS_CONTACT, FRANCHISE_MODELS } from '../data/idpsData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    proposedModel: 'k12',
    landArea: '',
    investmentBudget: '₹25L - ₹50L',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-8 lg:py-10 bg-[#E6EEE8] border-b border-[#BACBBF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-3">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>CENTRAL SECRETARIAT &amp; EXPRESSION OF INTEREST</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            Institutional Advisory &amp; Contact Desk
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#264935] font-normal">
            Connect directly with the Central Franchise Secretariat in New Delhi for confidential viability consultations.
          </p>
        </div>

        {/* Master Console Layout: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 5 Columns: Official Secretariat Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Registered Headquarters Card */}
            <div className="bg-[#021D12] text-white rounded-3xl p-6 sm:p-8 space-y-5 border border-[#0A3B26] shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#0A3B26]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E5B842] uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-[#D4A232]" />
                  <span>National Headquarters</span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-[#004D2C] px-2 py-0.5 rounded text-white">
                  Estd. 2012
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  The IDPS Society, New Delhi
                </h3>
                <p className="text-xs sm:text-sm text-[#A3C4AF] leading-relaxed">
                  {IDPS_CONTACT.registeredOffice}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0A3B26] space-y-3 text-xs font-mono">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E5B842] shrink-0" />
                  <div>
                    <span className="text-[#A3C4AF] block text-[10px]">Franchise Desks:</span>
                    <a href="tel:+917004222833" className="text-white hover:underline font-bold">+91 7004222833</a>
                    <span className="text-[#A3C4AF]"> / </span>
                    <a href="tel:+919631910016" className="text-white hover:underline font-bold">+91 9631910016</a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E5B842] shrink-0" />
                  <div>
                    <span className="text-[#A3C4AF] block text-[10px]">Official Correspondence:</span>
                    <a href={`mailto:${IDPS_CONTACT.email}`} className="text-white hover:underline font-bold">{IDPS_CONTACT.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#E5B842] shrink-0" />
                  <div>
                    <span className="text-[#A3C4AF] block text-[10px]">Consultation Hours:</span>
                    <span className="text-[#F2F6F3]">Monday – Saturday: 9:30 AM – 6:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality & Due Diligence Assurance Plaque */}
            <div className="bg-[#F2F6F3] rounded-3xl p-6 border border-[#CAD8CE] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#004D2C] uppercase">
                <ShieldCheck className="w-4 h-4 text-[#D4A232]" />
                <span>Strict Territorial Exclusivity</span>
              </div>
              <p className="text-xs text-[#264935] leading-relaxed">
                All inquiries are treated with utmost commercial confidentiality. Upon initial review, our central team verifies demographic exclusivity for your requested catchment.
              </p>
            </div>

          </div>

          {/* Right 7 Columns: Franchise Expression of Interest (EOI) Console */}
          <div className="lg:col-span-7">
            <div className="bg-[#F2F6F3] rounded-3xl p-6 sm:p-8 shadow-md border border-[#CAD8CE]">
              
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#004D2C] text-[#E5B842] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-black text-[#05180E]">
                    Application Successfully Registered
                  </h3>
                  <p className="text-sm text-[#264935] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName || 'Partner'}</strong>. Your application docket has been routed to the President&apos;s Secretariat. A Senior Franchise Director will contact you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#004D2C] text-white text-xs font-bold rounded-xl shadow-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#CAD8CE] pb-3 mb-4">
                    <h3 className="font-serif text-xl font-black text-[#05180E]">
                      Franchise Expression of Interest (EOI)
                    </h3>
                    <p className="text-xs text-[#264935]">
                      Please furnish accurate details for demographic feasibility analysis.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#05180E] mb-1">
                        Full Name / Trustee Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#E6EEE8] border border-[#BACBBF] text-xs text-[#05180E] placeholder-[#264935]/50 focus:outline-none focus:border-[#004D2C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-[#05180E] mb-1">
                        Contact Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#E6EEE8] border border-[#BACBBF] text-xs text-[#05180E] placeholder-[#264935]/50 focus:outline-none focus:border-[#004D2C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#05180E] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. trust@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#E6EEE8] border border-[#BACBBF] text-xs text-[#05180E] placeholder-[#264935]/50 focus:outline-none focus:border-[#004D2C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-[#05180E] mb-1">
                        Proposed City &amp; State *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Varanasi, UP"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#E6EEE8] border border-[#BACBBF] text-xs text-[#05180E] placeholder-[#264935]/50 focus:outline-none focus:border-[#004D2C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#05180E] mb-1">
                        Target School Model
                      </label>
                      <select
                        value={formData.proposedModel}
                        onChange={(e) => setFormData({ ...formData, proposedModel: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#E6EEE8] border border-[#BACBBF] text-xs text-[#05180E] focus:outline-none focus:border-[#004D2C]"
                      >
                        {FRANCHISE_MODELS.map(m => (
                          <option key={m.id} value={m.id}>
                            {m.name} ({m.classes})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-[#05180E] mb-1">
                        Estimated Land / Space
                      </label>
                      <input
                        type="text"
                        value={formData.landArea}
                        onChange={(e) => setFormData({ ...formData, landArea: e.target.value })}
                        placeholder="e.g. 2 Acres / 15,000 Sq. Ft."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#E6EEE8] border border-[#BACBBF] text-xs text-[#05180E] placeholder-[#264935]/50 focus:outline-none focus:border-[#004D2C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#05180E] mb-1">
                      Additional Notes or Inquiries
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Mention your background, land ownership status, or specific target launch academic year..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#E6EEE8] border border-[#BACBBF] text-xs text-[#05180E] placeholder-[#264935]/50 focus:outline-none focus:border-[#004D2C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#004D2C] hover:bg-[#025A36] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer font-mono tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#E5B842]" />
                    <span>Submit Expression of Interest</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
