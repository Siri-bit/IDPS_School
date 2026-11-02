import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PresidentSection } from './components/PresidentSection';
import { AboutSection } from './components/AboutSection';
import { FranchiseModelsSection } from './components/FranchiseModelsSection';
import { SupportServicesSection } from './components/SupportServicesSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { CampusLifeGallery } from './components/CampusLifeGallery';
import { RoadmapSection } from './components/RoadmapSection';
import { IdpsEdge } from './components/IdpsEdge';
import { NetworkLocator } from './components/NetworkLocator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { BrochurePreviewSection } from './components/BrochurePreviewSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { StandaloneExportModal } from './components/StandaloneExportModal';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedModelId, setSelectedModelId] = useState<string>('k12');
  const [isOfflineModalOpen, setIsOfflineModalOpen] = useState(false);

  const handleOpenApplyModal = (modelId?: string) => {
    if (modelId) {
      setSelectedModelId(modelId);
    }
    setIsApplyModalOpen(true);
  };

  const handleOpenOfflineModal = () => {
    setIsOfflineModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EFF3F0] text-[#0A1D13]">
      {/* Institutional Sticky Header (Matches Reference UI) */}
      <Navbar onOpenApplyModal={handleOpenApplyModal} />

      {/* 3. Hero Section with Quick Intent Checker */}
      <main className="flex-1">
        <HeroSection onOpenApplyModal={handleOpenApplyModal} />

        {/* 4. President's Message & Leadership Spotlight - Narayan Karn */}
        <PresidentSection />

        {/* 5. About Society, Mission, Vision & Strategic Advantages */}
        <AboutSection />

        {/* 6. The IDPS Edge (Jaipuria Edge equivalent) */}
        <IdpsEdge onOpenApplyModal={() => handleOpenApplyModal()} />

        {/* 7. Our Schools / Pan-India Branch Network Locator */}
        <NetworkLocator onOpenApplyModal={() => handleOpenApplyModal()} />

        {/* 8. 7 Comprehensive Franchise Models */}
        <FranchiseModelsSection onSelectModel={handleOpenApplyModal} />

        {/* 9. 11 Core Support & Services Pillars */}
        <SupportServicesSection />

        {/* 10. Infrastructure Requirements & Inventory Standards */}
        <InfrastructureSection />

        {/* 11. Campus Life & Student Photo Gallery */}
        <CampusLifeGallery />

        {/* 12. 90-Day Implementation Roadmap */}
        <RoadmapSection onOpenApplyModal={() => handleOpenApplyModal()} />

        {/* 14. Testimonials & Voices of Trust */}
        <TestimonialsSection />

        {/* 15. Frequently Asked Questions (from index_23f1adaa.html) */}
        <FaqSection onOpenApplyModal={() => handleOpenApplyModal()} />

        {/* 16. Official Prospectus & Brochure Preview */}
        <BrochurePreviewSection />

        {/* 17. Corporate Contact Desk & Application Form */}
        <ContactSection />
      </main>

      {/* 13. Comprehensive Institutional Footer */}
      <Footer
        onOpenApplyModal={() => handleOpenApplyModal()}
        onOpenOfflineModal={handleOpenOfflineModal}
      />

      {/* Interactive Modals */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialModelId={selectedModelId}
      />

      <StandaloneExportModal
        isOpen={isOfflineModalOpen}
        onClose={() => setIsOfflineModalOpen(false)}
      />
    </div>
  );
}
