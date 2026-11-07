import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Camera, MapPin, Calendar, Heart } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, BUSINESS_INFO } from '../data/photographyData';
import { SafeImage } from './SafeImage';

interface PortfolioProps {
  onOpenBooking: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'ceremony', label: 'Wedding Ceremonies' },
    { id: 'bridal', label: 'Bridal & Groom' },
    { id: 'candid', label: 'Candid Moments' },
    { id: 'pre-wedding', label: 'Pre-Wedding' },
    { id: 'couple', label: 'Couple Portraits' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const activeItem: GalleryItem | null = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0c] text-[#dedbd2] relative border-t border-[#1e1e24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
            Visual Anthology
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f5f1] font-normal tracking-tight">
            Curated Wedding Portfolio
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37]/60 mx-auto mt-4" />
          <p className="text-sm text-[#a8a59c] mt-4 font-light">
            Every photograph is treated as an heirloom, crafted with reverence for authentic light and sacred rituals.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-[#0d0d0f] font-semibold shadow-md'
                  : 'bg-[#15151a] text-[#a8a59c] hover:text-[#f0ede6] hover:bg-[#1f1f26] border border-[#26262e]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#141418] border border-[#22222a] hover:border-[#d4af37]/60 transition-all duration-300 shadow-md hover:shadow-2xl"
              >
                {/* Visual Asset */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                  <SafeImage
                    src={item.image}
                    fallbackSrc={item.fallbackImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Measured Scrim Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Quick Expand Icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-[#f5f3ef] opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm border border-white/20">
                    <ZoomIn className="w-4 h-4 text-[#d4af37]" />
                  </div>

                  {/* Metadata Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                    <div className="flex items-center gap-2 text-[11px] text-[#d4af37] uppercase tracking-widest font-medium mb-1">
                      <span>{item.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.year}</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl text-[#f6f4ee] font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#a9a69d] mt-1 flex items-center gap-1.5 font-light">
                      <MapPin className="w-3 h-3 text-[#d4af37]" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All on Instagram Prompt */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#9c9991] mb-3">
            Want to see our latest wedding teasers and real-time ceremony stories?
          </p>
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-medium tracking-wider uppercase bg-[#16161c] border border-[#2b2b36] hover:border-[#E1306C] text-[#e3e0d8] hover:text-[#E1306C] transition-all"
          >
            <span>Follow @dhanas_photography_ on Instagram</span>
          </a>
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-3 text-[#dedbd2] hover:text-[#d4af37] bg-[#141418]/80 hover:bg-[#202028] border border-white/10 rounded-full transition-colors z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-[#dedbd2] hover:text-[#d4af37] bg-[#141418]/80 hover:bg-[#202028] border border-white/10 rounded-full transition-colors z-20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-[#dedbd2] hover:text-[#d4af37] bg-[#141418]/80 hover:bg-[#202028] border border-white/10 rounded-full transition-colors z-20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content Center */}
          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row items-center bg-[#101014] border border-[#2b2b36] rounded-2xl overflow-hidden shadow-2xl relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Preview Box */}
            <div className="relative flex-1 w-full max-h-[60vh] lg:max-h-[80vh] bg-black flex items-center justify-center p-2">
              <SafeImage
                src={activeItem.image}
                fallbackSrc={activeItem.fallbackImage}
                alt={activeItem.title}
                className="max-h-[58vh] lg:max-h-[78vh] w-auto max-w-full object-contain mx-auto"
                containerClassName="w-full flex items-center justify-center"
              />
            </div>

            {/* Sidebar Details */}
            <div className="w-full lg:w-80 p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#24242e] bg-[#121216]">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-medium mb-1">
                  <span>{activeItem.categoryLabel}</span>
                  <span>·</span>
                  <span>{activeItem.year}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#f6f4ee] font-semibold mb-2">
                  {activeItem.title}
                </h3>

                <p className="text-xs text-[#d0cec7] flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{activeItem.location}</span>
                </p>

                <p className="text-xs text-[#a9a69d] leading-relaxed mb-6 font-light">
                  {activeItem.description}
                </p>

                {activeItem.cameraInfo && (
                  <div className="p-3 bg-[#18181f] rounded-lg border border-[#2b2b36] text-[11px] text-[#8e8b82] space-y-1 mb-6">
                    <p className="text-[#d4af37] font-mono uppercase tracking-wider text-[10px]">Technical Note</p>
                    <p className="font-mono">{activeItem.cameraInfo}</p>
                  </div>
                )}
              </div>

              <div className="space-y-2 pt-4 border-t border-[#22222a]">
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0d0d0f] bg-gold-gradient rounded shadow hover:brightness-110 transition-all text-center"
                >
                  Inquire For This Style
                </button>
                <p className="text-[10px] text-center text-[#7e7b73]">
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
