import React from 'react';
import { MessageCircle, Phone, ArrowDown, Award, Calendar, Heart, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden">
      {/* Background Hero Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={BUSINESS_INFO.images.hero}
          fallbackSrc={BUSINESS_INFO.images.candid}
          alt="Royal Indian Wedding Couple by Dhanas Photography"
          className="w-full h-full object-cover scale-[1.02] transform transition-transform duration-1000 ease-out"
          containerClassName="w-full h-full"
          loading="eager"
        />
        {/* Measured dark gold scrim overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/65 to-black/60" />
        <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-black/20 via-transparent to-black/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Top Kicker */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#d4af37] font-medium">
            <span>Dhanas Photography</span>
            <span aria-hidden="true">·</span>
            <span>By Dhanasekar</span>
            <span aria-hidden="true">·</span>
            <span>South India & Worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#fbfaf8] mb-6 tracking-tight text-balance">
            We Turn Sacred Vows Into{' '}
            <span className="italic font-light text-gold-gradient">Timeless Fine Art.</span>
          </h1>

          {/* Subheading / Description */}
          <p className="text-[#c8c5bc] text-base sm:text-lg leading-relaxed font-light max-w-2xl mb-8">
            Specializing in royal South Indian weddings, intimate candid emotions, breathtaking bridal portraits, and soul-stirring cinematic films. Honoring your sacred moments with subtle artistry.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0d0d0f] bg-gold-gradient rounded shadow-xl hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap"
            >
              Check Date Availability
            </button>

            <a
              href="#portfolio"
              className="px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#f0ede6] bg-[#18181d]/80 border border-[#3b3b44] hover:border-[#d4af37]/60 hover:bg-[#202026] rounded backdrop-blur-sm transition-all whitespace-nowrap"
            >
              Explore Portfolio
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${encodeURIComponent('Hello Dhanasekar, I would like to check availability and packages for wedding photography.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#25D366] bg-[#122318]/90 border border-[#25D366]/40 hover:bg-[#193223] rounded backdrop-blur-sm transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Dhanasekar</span>
            </a>
          </div>

          {/* Quick Direct Contacts */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#a9a7a0]">
            <span className="text-[#d4af37] font-medium">Direct Line:</span>
            <a href={`tel:${BUSINESS_INFO.phone1Raw}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>{BUSINESS_INFO.phone1}</span>
            </a>
            <span className="hidden sm:inline text-neutral-600">/</span>
            <a href={`tel:${BUSINESS_INFO.phone2Raw}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>{BUSINESS_INFO.phone2}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4-Column KPI Trust Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-[#111115]/90 border border-[#26262d] backdrop-blur-md rounded-xl shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#1a1a22] border border-[#d4af37]/20 text-[#d4af37]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#f5f3ef] tabular-nums">10+ Years</p>
              <p className="text-[11px] text-[#9c9991] tracking-wider uppercase">Mastering Wedding Craft</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#1a1a22] border border-[#d4af37]/20 text-[#d4af37]">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#f5f3ef] tabular-nums">450+ Weddings</p>
              <p className="text-[11px] text-[#9c9991] tracking-wider uppercase">Sacred Moments Preserved</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#1a1a22] border border-[#d4af37]/20 text-[#d4af37]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#f5f3ef]">100% Candid</p>
              <p className="text-[11px] text-[#9c9991] tracking-wider uppercase">Unscripted Raw Emotion</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#1a1a22] border border-[#d4af37]/20 text-[#d4af37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#f5f3ef]">4K Cinema & HDR</p>
              <p className="text-[11px] text-[#9c9991] tracking-wider uppercase">Luxury Archival Quality</p>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#portfolio"
            aria-label="Scroll to Portfolio"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9c9991] hover:text-[#d4af37] transition-colors"
          >
            <span>Scroll To Discover</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#d4af37]" />
          </a>
        </div>
      </div>
    </section>
  );
};
