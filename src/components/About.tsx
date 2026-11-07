import React from 'react';
import { Phone, Mail, Instagram, MessageCircle, Camera, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';
import { SafeImage } from './SafeImage';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0c] text-[#dedbd2] relative overflow-hidden border-t border-[#1e1e24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
            The Artist Behind The Lens
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f5f1] font-normal tracking-tight">
            Meet Dhanasekar
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37]/60 mx-auto mt-4" />
        </div>

        {/* 2-Column Split: Image & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#d4af37]/25 pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#2d2d35]">
                <SafeImage
                  src={BUSINESS_INFO.images.dhanasekar}
                  fallbackSrc={BUSINESS_INFO.images.bridal}
                  alt="Dhanasekar, Principal Photographer & Founder of Dhanas Photography"
                  className="w-full h-auto object-cover aspect-square sm:aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-serif text-xl font-semibold text-[#f5f2eb]">Dhanasekar</p>
                  <p className="text-xs text-[#d4af37] tracking-wider uppercase">Founder & Lead Photographer</p>
                </div>
              </div>

              {/* Gear & Quality Spec Tag */}
              <div className="mt-4 p-4 rounded-lg bg-[#141418] border border-[#26262e] text-xs text-[#a3a097] flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-[#d4af37] font-medium">
                  <Camera className="w-4 h-4" />
                  <span>Professional Equipment Standard</span>
                </div>
                <p>Dual Full-Frame Bodies · Prime GM Lenses (35mm, 50mm, 85mm f/1.4) · 4K Cinema Drone</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Prose & Vision */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="font-serif text-2xl sm:text-3xl text-[#e8e4d9] font-light italic leading-snug mb-6">
              "A wedding isn’t merely a sequence of rituals; it is a tapestry of unscripted tears, joyful laughter, and centuries-old heritage uniting two families."
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#bbb8af] leading-relaxed font-light">
              <p>
                Hello, I am <strong className="text-[#f5f3ef] font-medium">Dhanasekar</strong>, founder and principal photographer at <strong className="text-[#f5f3ef] font-medium">Dhanas Photography</strong>. For over a decade, I have had the profound honor of documenting weddings across Tamil Nadu and South India.
              </p>
              <p>
                My philosophy is grounded in quiet observation and genuine connection. I believe the most unforgettable photographs are not manufactured with rigid poses, but captured during the fleeting in-between moments: a bride's breath before the Muhurtham, a father's trembling hands during Kanyadaanam, or the bursting laughter between newlyweds during the Akshata shower.
              </p>
              <p>
                Whether it is a traditional temple wedding in Madurai, a vibrant grand reception in Chennai, an intimate pre-wedding session along the coast, or a destination celebration, I bring patience, technical mastery, and heartfelt respect to every assignment.
              </p>
            </div>

            {/* Core Promises */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-8 pt-6 border-t border-[#202026]">
              <div className="flex items-start gap-2.5 text-xs text-[#d0cdc4]">
                <div className="p-1 rounded bg-[#d4af37]/10 text-[#d4af37] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Unobtrusive, respectful coverage that honors traditional rituals</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#d0cdc4]">
                <div className="p-1 rounded bg-[#d4af37]/10 text-[#d4af37] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>True-to-life skin tones & timeless color grading</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#d0cdc4]">
                <div className="p-1 rounded bg-[#d4af37]/10 text-[#d4af37] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Prompt teaser delivery within 5–7 days of the wedding</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#d0cdc4]">
                <div className="p-1 rounded bg-[#d4af37]/10 text-[#d4af37] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Direct communication with Dhanasekar from start to finish</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone1Raw}`}
                className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#0d0d0f] bg-gold-gradient rounded shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 9944504303</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${encodeURIComponent('Hello Dhanasekar, I would like to speak regarding our wedding photography.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-medium tracking-wider uppercase text-[#25D366] bg-[#142318] border border-[#25D366]/40 hover:bg-[#1a3021] rounded transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Dhanasekar</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-5 py-3 text-xs font-medium tracking-wider uppercase text-[#f3f0e8] bg-[#1a1a20] border border-[#373740] hover:border-[#d4af37]/50 rounded transition-all"
              >
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
