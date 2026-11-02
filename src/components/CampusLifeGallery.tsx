import React, { useState } from 'react';
import { Camera, MapPin, Maximize2, X, ChevronRight, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'academic' | 'sports' | 'stem' | 'cultural';
  tag: string;
  location: string;
  src: string;
  description: string;
}

export const CampusLifeGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'academic' | 'sports' | 'stem' | 'cultural'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Interactive 4K Digital Classroom Learning',
      category: 'academic',
      tag: 'Academic Rigor',
      location: 'IDPS New Delhi Campus',
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      description: 'Scholars collaborating on interactive scientific case studies using digital touch panels and digital student workbooks.'
    },
    {
      id: 'g2',
      title: 'Annual Inter-Campus Athletic Championship',
      category: 'sports',
      tag: 'Olympic Sports',
      location: 'IDPS Jaipur Campus',
      src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
      description: 'Track and field athletes competing in 400m sprint relays during the national Inter-IDPS winter athletic meet.'
    },
    {
      id: 'g3',
      title: 'Robotics & Automation Tinkering Lab',
      category: 'stem',
      tag: 'STEM Innovation',
      location: 'IDPS Gurugram Campus',
      src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
      description: 'Middle-wing scholars assembling obstacle-avoiding autonomous Arduino robots under the mentorship of senior faculty.'
    },
    {
      id: 'g4',
      title: 'National Heritage Annual Day Festival',
      category: 'cultural',
      tag: 'Performing Arts',
      location: 'IDPS Bengaluru Campus',
      src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      description: 'Senior dance troupe presenting classical Bharatnatyam and Odissi ensembles in front of 2,000+ parents and trustees.'
    },
    {
      id: 'g5',
      title: 'Composite Chemistry & Molecular Analysis',
      category: 'stem',
      tag: 'Science Laboratories',
      location: 'IDPS Noida Campus',
      src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
      description: 'Senior secondary students conducting volumetric titration experiments inside the chemical fume-extracted laboratory.'
    },
    {
      id: 'g6',
      title: 'Junior Wing Sensory Exploration Activity',
      category: 'academic',
      tag: 'Early Years',
      location: 'IDPS Lucknow Campus',
      src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
      description: 'Pre-primary scholars engaging in tactile Montessori shape-sorting and phonics games with certified early childhood mentors.'
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="media" className="py-8 lg:py-10 bg-[#DFE7E1] border-b border-[#BACBBF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#004D2C] mb-3">
            <span className="w-8 h-[2px] bg-[#D4A232]" />
            <span>STUDENT LIFE, PASSION &amp; CELEBRATION</span>
            <span className="w-8 h-[2px] bg-[#D4A232]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#05180E] tracking-tight leading-tight">
            Campus Life &amp; Moments
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#264935] font-normal">
            A glimpse into the daily rhythm of academic curiosity, athletic fervor, and creative expression across our national network.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Campus Moments' },
            { id: 'academic', label: 'Academics & Early Years' },
            { id: 'sports', label: 'Athletic Fields' },
            { id: 'stem', label: 'Robotics & Science' },
            { id: 'cultural', label: 'Performing Arts' }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#021D12] text-[#E5B842] shadow-sm'
                  : 'bg-[#F2F6F3] text-[#163323] hover:bg-[#E6EEE8] border border-[#CAD8CE]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Curated Editorial Mosaic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative rounded-3xl overflow-hidden shadow-sm border border-[#CAD8CE] cursor-pointer bg-[#021D12] transition-all hover:-translate-y-1 hover:shadow-xl ${
                idx === 0 ? 'md:col-span-2 aspect-16/9' : 'aspect-4/3'
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021D12] via-[#021D12]/40 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E5B842] bg-[#021D12]/80 px-2.5 py-0.5 rounded border border-[#0A3B26]">
                    {item.tag}
                  </span>
                  <span className="p-2 rounded-xl bg-[#021D12]/80 border border-[#D4A232]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-[#E5B842]" />
                  </span>
                </div>

                <h3 className="font-serif font-black text-base sm:text-lg text-white leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-[#A3C4AF] mt-1 font-mono">
                  <MapPin className="w-3 h-3 text-[#D4A232] shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#021D12]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#F2F6F3] rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-[#BACBBF]"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-[#021D12] overflow-hidden">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#021D12]/80 text-[#E5B842] border border-[#D4A232]/40 hover:bg-[#021D12] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#004D2C]">
                <span className="font-bold uppercase tracking-wider">{selectedPhoto.tag}</span>
                <span className="flex items-center gap-1 text-[#264935]">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A232]" />
                  <span>{selectedPhoto.location}</span>
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-black text-[#05180E]">
                {selectedPhoto.title}
              </h3>

              <p className="text-sm text-[#163323] leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
