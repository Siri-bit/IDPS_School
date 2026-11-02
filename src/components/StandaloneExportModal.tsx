import React, { useState } from 'react';
import { X, Download, FileCode, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { IDPS_CONTACT } from '../data/idpsData';

interface StandaloneExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<StandaloneExportModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownloadOfflineHtml = () => {
    // Trigger download of the standalone HTML
    const link = document.createElement('a');
    link.href = '/standalone_index.html';
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#021D12]/75 backdrop-blur-xs">
      <div className="bg-[#F4F7F5] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#BACBBF] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#4A6E59] hover:text-[#071C12] rounded-full hover:bg-[#E9EFEA] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="w-12 h-12 bg-[#DCE6DE] text-[#004D2C] rounded-xl flex items-center justify-center border border-[#BACBBF]">
            <FileCode className="w-6 h-6 text-[#004D2C]" />
          </div>

          <div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#004D2C]">
              Offline Portable Website
            </div>
            <h3 className="font-serif text-2xl font-black text-[#071C12] mt-0.5">
              Download Standalone index.html
            </h3>
            <p className="text-xs text-[#2A4B38] mt-1 leading-relaxed">
              As requested, you can download a 100% self-contained <strong className="text-[#071C12]">index.html</strong> file that opens in any browser (Chrome, Edge, Safari, Firefox) immediately with a single double-click—no terminal, node, or servers required!
            </p>
          </div>

          <div className="bg-[#E9EFEA] p-4 rounded-xl border border-[#BACBBF] space-y-2 text-xs text-[#213F2F]">
            <div className="font-bold text-[#071C12] flex items-center gap-1.5 font-serif">
              <Sparkles className="w-4 h-4 text-[#D4A232]" />
              <span>What is Included in the Download:</span>
            </div>
            <ul className="space-y-1 text-[#2A4B38] list-disc list-inside">
              <li>Complete HTML5, responsive CSS, and interactive vanilla JavaScript.</li>
              <li>Includes official IDPS Society Crest Logo and President Narayan Karn portrait.</li>
              <li>All 7 Franchise Models, 11 Support Services, and 90-Day Roadmap.</li>
              <li>Curriculum Framework, CBSE Affiliation Guidance &amp; Teacher Training.</li>
              <li>Official Contact Desk (Pandav Nagar, New Delhi) &amp; Helplines.</li>
            </ul>
          </div>

          {downloaded ? (
            <div className="p-3 bg-[#DCE6DE] text-[#004D2C] rounded-xl border border-[#BACBBF] text-xs font-semibold flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#004D2C]" />
              <span>Download initialized! Check your browser downloads folder for 'index.html'.</span>
            </div>
          ) : null}

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleDownloadOfflineHtml}
              className="w-full sm:flex-1 py-3 px-4 text-xs font-bold font-mono tracking-wider text-white bg-[#004D2C] hover:bg-[#025A36] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#E5B842]" />
              <span>Download index.html Now</span>
            </button>

            <a
              href="/standalone_index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-4 text-xs font-semibold font-mono text-[#213F2F] hover:text-[#071C12] bg-[#E9EFEA] hover:bg-[#EDF3EF] rounded-xl border border-[#BACBBF] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Preview Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="text-[11px] text-[#4A6E59] text-center font-mono">
            To view offline: save `index.html` to any folder and double-click to open.
          </div>
        </div>
      </div>
    </div>
  );
};
