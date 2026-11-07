import React from 'react';
import { Compass, Sun, MapPin, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';
import { SafeImage } from './SafeImage';

interface PreWeddingSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PreWeddingSection: React.FC<PreWeddingSectionProps> = ({ onOpenBooking }) => {
  const destinations = [
    { name: 'Chettinad Heritage Mansions', vibe: 'Royal Vintage & Teak Pillars' },
    { name: 'Mahabalipuram Coastal Rocks', vibe: 'Sunset Shores & Sculpted Stone' },
    { name: 'Pondicherry French Quarter', vibe: 'Pastel Streets & Bougainvillea' },
    { name: 'Yercaud & Kodaikanal Hills', vibe: 'Misty Pine Groves & Golden Sunlight' },
  ];

  return (
    <section id="pre-wedding" className="py-24 bg-[#0a0a0c] text-[#dedbd2] relative border-t border-[#1e1e24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
            Before The Big Day
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f5f1] font-normal tracking-tight">
            Cinematic Pre-Wedding Stories
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37]/60 mx-auto mt-4" />
          <p className="text-sm text-[#a8a59c] mt-4 font-light">
            A serene, unhurried space for you both to connect, celebrate your love story, and get completely comfortable in front of the camera before your wedding celebrations begin.
          </p>
        </div>

        {/* Feature Visual Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-[#2d2d37] shadow-2xl mb-12">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[500px] w-full overflow-hidden">
            <SafeImage
              src={BUSINESS_INFO.images.preWedding}
              fallbackSrc={BUSINESS_INFO.images.hero}
              alt="Romantic pre-wedding couple photoshoot at golden hour by Dhanas Photography"
              className="w-full h-full object-cover"
            />
            {/* Ambient vignette scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />

            {/* Banner Overlay Text */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-medium">
                  Golden Hour Romance
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#fbfaf8] font-light mt-1">
                  Sunset Heritage Pavilions & Lake Views
                </h3>
                <p className="text-xs sm:text-sm text-[#cfccc3] font-light max-w-xl mt-1 hidden sm:block">
                  Crafting cinematic, fashion-forward portraits that feel intimate, natural, and authentically yours.
                </p>
              </div>

              <button
                onClick={() => onOpenBooking('Pre-Wedding & Post-Wedding Shoots')}
                className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0d0d0f] bg-gold-gradient rounded shadow hover:brightness-110 transition-all whitespace-nowrap"
              >
                Plan Your Pre-Wedding
              </button>
            </div>
          </div>
        </div>

        {/* 4 Popular Pre-Wedding Locations & Tips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-[#121216] border border-[#23232c] hover:border-[#d4af37]/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-[#d4af37] mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider font-semibold">Location Idea</span>
              </div>
              <h4 className="font-serif text-base text-[#f5f3ee] font-medium mb-1">
                {dest.name}
              </h4>
              <p className="text-xs text-[#9c9991] font-light">
                {dest.vibe}
              </p>
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Callout for Location Consultation */}
        <div className="mt-8 text-center text-xs text-[#a9a69d] flex items-center justify-center gap-2">
          <span>Not sure which location suits your style?</span>
          <a
            href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${encodeURIComponent('Hello Dhanasekar, can you suggest good locations and outfit styling for our pre-wedding shoot?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4af37] underline hover:text-white transition-colors font-medium flex items-center gap-1"
          >
            <span>Ask Dhanasekar directly on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
