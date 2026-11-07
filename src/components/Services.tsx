import React from 'react';
import { Camera, Film, BookOpen, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/photographyData';
import { SafeImage } from './SafeImage';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#0d0d10] text-[#dedbd2] relative border-t border-[#1e1e24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
            Bespoke Offerings
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f5f1] font-normal tracking-tight">
            Photography & Film Services
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37]/60 mx-auto mt-4" />
          <p className="text-sm text-[#a8a59c] mt-4 font-light">
            Every celebration is unique. We offer comprehensive coverage tailored to your wedding itinerary, ceremonies, and personal aesthetic.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-[#131317] border border-[#24242c] hover:border-[#d4af37]/50 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Service Visual Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a20]">
                  <SafeImage
                    src={service.image}
                    fallbackSrc={BUSINESS_INFO.images.hero}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 bg-black/70 backdrop-blur-sm text-[#d4af37] border border-[#d4af37]/30 rounded">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#f6f4ee] font-semibold mb-2 group-hover:text-[#d4af37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#d4af37] tracking-wider uppercase mb-4 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#a8a59c] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 pt-4 border-t border-[#202026]">
                    <p className="text-[11px] uppercase tracking-wider text-[#7e7b72] font-semibold">Includes:</p>
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[#c5c2b9]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 text-xs font-semibold tracking-wider uppercase text-[#e6e3da] bg-[#1c1c24] border border-[#30303c] hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c0c0e] rounded transition-all"
                >
                  Inquire For This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package Callout */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-[#17171d] via-[#15151a] to-[#17171d] border border-[#2f2f3a] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl text-[#f5f3ec] font-normal mb-1">
              Need a Custom Multi-Day Wedding Package?
            </h4>
            <p className="text-xs sm:text-sm text-[#a4a197] font-light">
              We offer bespoke quotes for multi-day weddings (Nichayathartham, Haldi, Sangeet, Muhurtham, and Reception).
            </p>
          </div>
          <button
            onClick={() => onSelectService('Custom Multi-Day Wedding Package')}
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#0d0d0f] bg-gold-gradient rounded shadow-md hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};
