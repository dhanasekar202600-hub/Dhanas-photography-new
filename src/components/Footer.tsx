import React from 'react';
import { Phone, Mail, Instagram, MessageCircle, ArrowUp, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-[#1a1a20] text-[#a09d94] text-xs py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#1c1c24]">
          {/* Col 1: Brand */}
          <div className="md:col-span-1 space-y-3">
            <a href="#" className="inline-block">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#f5f3ef] uppercase">
                Dhanas Photography
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#a59b84] uppercase">
                by Dhanasekar
              </span>
            </a>
            <p className="text-xs text-[#8f8c83] leading-relaxed font-light">
              Fine art wedding photography, candid moments, and cinematic films preserving sacred Indian traditions across generations.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">Explore</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Wedding Portfolio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Dhanasekar</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Photography Services</a></li>
              <li><a href="#candid" className="hover:text-white transition-colors">Candid Philosophy</a></li>
              <li><a href="#pre-wedding" className="hover:text-white transition-colors">Pre-Wedding Shoots</a></li>
              <li><a href="#films" className="hover:text-white transition-colors">Cinematic Wedding Films</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Customer Testimonials</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">Direct Contact</p>
            <div className="space-y-2.5 text-xs text-[#c5c2b8]">
              <p className="text-[11px] text-[#737068]">Mobile 1 (Call & WhatsApp):</p>
              <a href={`tel:${BUSINESS_INFO.phone1Raw}`} className="block hover:text-[#d4af37] transition-colors font-medium">
                {BUSINESS_INFO.phone1}
              </a>

              <p className="text-[11px] text-[#737068] pt-1">Mobile 2:</p>
              <a href={`tel:${BUSINESS_INFO.phone2Raw}`} className="block hover:text-[#d4af37] transition-colors font-medium">
                {BUSINESS_INFO.phone2}
              </a>

              <p className="text-[11px] text-[#737068] pt-1">Email:</p>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="block hover:text-[#d4af37] transition-colors font-medium">
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>

          {/* Col 4: Social & WhatsApp */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">Connect & Follow</p>
            <p className="text-xs text-[#8f8c83] leading-relaxed">
              Follow our daily wedding reels, stories, and behind-the-scenes moments on Instagram.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#141419] border border-neutral-800 hover:border-[#E1306C] hover:text-[#E1306C] transition-colors text-white"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${encodeURIComponent('Hello Dhanasekar, I would like to inquire about wedding photography.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#141419] border border-neutral-800 hover:border-[#25D366] hover:text-[#25D366] transition-colors text-white"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone1Raw}`}
                className="p-2.5 rounded-lg bg-[#141419] border border-neutral-800 hover:border-[#d4af37] hover:text-[#d4af37] transition-colors text-white"
                aria-label="Call Dhanasekar"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="p-2.5 rounded-lg bg-[#141419] border border-neutral-800 hover:border-[#d4af37] hover:text-[#d4af37] transition-colors text-white"
                aria-label="Email Dhanasekar"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#716e66]">
          <p>
            © {new Date().getFullYear()} Dhanas Photography · Owned & Operated by Dhanasekar. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors uppercase tracking-wider"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#d4af37]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
