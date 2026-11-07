import React from 'react';
import { Heart, Sparkles, MessageCircle, Camera } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';
import { SafeImage } from './SafeImage';

interface CandidSectionProps {
  onOpenBooking: () => void;
}

export const CandidSection: React.FC<CandidSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="candid" className="py-24 bg-[#0d0d10] text-[#dedbd2] relative border-t border-[#1e1e24] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Editorial Insights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unscripted & Raw</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f5f1] font-normal tracking-tight mb-6">
              The Poetry of Unposed Candid Moments
            </h2>

            <p className="text-base sm:text-lg text-[#d0cec7] font-serif italic mb-6 leading-relaxed">
              "The most precious wedding memories are rarely staged. They happen in the spontaneous burst of laughter between rituals, the quiet tear in a mother’s eye, and the private smiles shared only between the two of you."
            </p>

            <div className="space-y-4 text-sm text-[#a8a59c] leading-relaxed font-light mb-8">
              <p>
                At Dhanas Photography, our candid approach is rooted in profound patience and stealth. Instead of asking you to freeze in place or hold an unnatural smile for the camera, Dhanasekar observes the rhythm of your day from discreet angles.
              </p>
              <p>
                We capture the nervous excitement in the bridal suite, the vibrant chaotic joy of the Haldi turmeric splash, the holy sanctity of the Mangala Vadhyam, and the heartfelt embraces during the farewell.
              </p>
            </div>

            {/* 3 Pillars of Dhanas Candid Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-[#141418] border border-[#25252d] mb-8">
              <div>
                <p className="text-xs font-semibold text-[#f5f3ee] uppercase tracking-wider mb-1">Zero Interruption</p>
                <p className="text-[11px] text-[#9c9991]">We let your rituals unfold organically without constant pausing or directing.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#f5f3ee] uppercase tracking-wider mb-1">True Skin Tones</p>
                <p className="text-[11px] text-[#9c9991]">Rich, natural color science that honors our vibrant South Indian traditions.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#f5f3ee] uppercase tracking-wider mb-1">Micro Expressions</p>
                <p className="text-[11px] text-[#9c9991]">Fast prime lenses capturing the split-second emotions you might otherwise miss.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#0d0d0f] bg-gold-gradient rounded shadow-md hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Inquire For Candid Coverage
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${encodeURIComponent('Hello Dhanasekar, I love your candid photography style. I would like to discuss our wedding dates.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-medium tracking-wider uppercase text-[#25D366] bg-[#142318] border border-[#25D366]/40 hover:bg-[#1a3021] rounded transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Candid Packages</span>
              </a>
            </div>
          </div>

          {/* Right Column: Large Candid Feature Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2d2d37] shadow-2xl">
              <SafeImage
                src={BUSINESS_INFO.images.candid}
                fallbackSrc={BUSINESS_INFO.images.hero}
                alt="Joyful candid moment during sacred vows ceremony by Dhanas Photography"
                className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/11]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <div>
                  <p className="text-xs text-[#d4af37] tracking-wider uppercase font-medium">Sacred Akshata Shower</p>
                  <p className="font-serif text-lg font-light text-[#f3f0e8]">Unfiltered Joy & Holy Petals</p>
                </div>
                <div className="p-2.5 rounded-full bg-black/60 border border-white/20 text-[#d4af37]">
                  <Heart className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
