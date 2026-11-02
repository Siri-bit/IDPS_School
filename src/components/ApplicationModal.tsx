import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building, ShieldCheck, Download } from 'lucide-react';
import { FRANCHISE_MODELS, IDPS_CONTACT } from '../data/idpsData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModelId?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialModelId = 'k12'
}) => {
  const [modelId, setModelId] = useState(initialModelId);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [landDetails, setLandDetails] = useState('2 Acres');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const selectedModel = FRANCHISE_MODELS.find(m => m.id === modelId) || FRANCHISE_MODELS[3];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#021D12]/75 backdrop-blur-xs">
      <div className="bg-[#F4F7F5] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#BACBBF] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#4A6E59] hover:text-[#071C12] rounded-full hover:bg-[#E9EFEA] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#DCE6DE] text-[#004D2C] rounded-full flex items-center justify-center mx-auto shadow-xs border border-[#BACBBF]">
              <CheckCircle2 className="w-8 h-8 text-[#004D2C]" />
            </div>
            <h3 className="font-serif text-2xl font-black text-[#071C12]">
              Franchise Registration Initialized
            </h3>
            <p className="text-sm text-[#2A4B38] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#071C12]">{name}</strong>. Your inquiry for <strong className="text-[#004D2C]">{selectedModel.name}</strong> in <strong className="text-[#071C12]">{city || 'your region'}</strong> has been registered directly with the IDPS Secretariat.
            </p>
            <div className="bg-[#E9EFEA] p-4 rounded-xl border border-[#BACBBF] text-xs text-[#213F2F] text-left space-y-1.5 font-mono">
              <div>• Reference Code: <strong className="text-[#004D2C]">IDPS-APP-{Math.floor(100000 + Math.random() * 900000)}</strong></div>
              <div>• Executive Discussions Window: <strong className="text-[#071C12]">Day 3 to Day 7</strong></div>
              <div>• Direct Helpline: <strong className="text-[#071C12]">+91 7004222833 / 9631910016</strong></div>
            </div>
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <a
                href={IDPS_CONTACT.brochurePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold font-mono tracking-wider text-white bg-[#004D2C] hover:bg-[#025A36] rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#E5B842]" />
                <span>Download Brochure PDF</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold font-mono text-[#213F2F] bg-[#E9EFEA] hover:bg-[#EDF3EF] rounded-xl border border-[#BACBBF] cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-[#CEDBD0] pb-3">
              <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#004D2C]">
                The International Delhi Public School Society
              </div>
              <h3 className="font-serif text-2xl font-black text-[#071C12] mt-0.5">
                Apply for School Franchise
              </h3>
              <p className="text-xs text-[#4A6E59] mt-1 font-normal">
                Day 1 Application Formality · Confidential Site Viability Review
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#071C12] mb-1.5">
                Select Franchise Model
              </label>
              <select
                value={modelId}
                onChange={(e) => setModelId(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-[#E9EFEA] border border-[#BACBBF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004D2C] focus:bg-[#F4F7F5] text-[#071C12] font-medium"
              >
                {FRANCHISE_MODELS.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.setupArea})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#071C12] mb-1.5">
                  Applicant Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#E9EFEA] border border-[#BACBBF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004D2C] focus:bg-[#F4F7F5] text-[#071C12]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#071C12] mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#E9EFEA] border border-[#BACBBF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004D2C] focus:bg-[#F4F7F5] text-[#071C12]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#071C12] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#E9EFEA] border border-[#BACBBF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004D2C] focus:bg-[#F4F7F5] text-[#071C12]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#071C12] mb-1.5">
                  Target City &amp; State *
                </label>
                <input
                  type="text"
                  required
                  placeholder="City, State"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-[#E9EFEA] border border-[#BACBBF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004D2C] focus:bg-[#F4F7F5] text-[#071C12]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#071C12] mb-1.5">
                Land Status / Setup Area
              </label>
              <select
                value={landDetails}
                onChange={(e) => setLandDetails(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-[#E9EFEA] border border-[#BACBBF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004D2C] focus:bg-[#F4F7F5] text-[#071C12]"
              >
                <option value="3,000 - 5,000 Sq. Ft.">3,000 - 5,000 Sq. Ft. (Junior Play School)</option>
                <option value="5,000 - 10,000 Sq. Ft.">5,000 - 10,000 Sq. Ft. (Primary Wing)</option>
                <option value="10,000 - 15,000 Sq. Ft.">10,000 - 15,000 Sq. Ft. (Middle Foundation)</option>
                <option value="2 Acres">2 Acres Campus (K-12 Flagship)</option>
                <option value="5 Acres">5 Acres Mega Campus (IDPS Premium)</option>
                <option value="Currently Looking for Land">Currently Scouting Land Parcel</option>
              </select>
            </div>

            <div className="p-3 bg-[#E9EFEA] rounded-xl border border-[#BACBBF] text-xs text-[#2A4B38] flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4A232] shrink-0 mt-0.5" />
              <span>
                Your intent is kept 100% confidential. You will receive the preliminary demographic survey dossier and agreement draft.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold font-mono tracking-wider text-white bg-[#004D2C] hover:bg-[#025A36] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#E5B842]" />
              <span>Submit Intent &amp; Request Executive Callback</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
