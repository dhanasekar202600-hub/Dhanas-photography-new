import React from 'react';
import { Phone, Mail, Instagram, MessageCircle, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';
import { BookingForm } from './BookingForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0c] text-[#dedbd2] relative border-t border-[#1e1e24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
            Begin Your Story
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f5f1] font-normal tracking-tight">
            Contact & Wedding Booking
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37]/60 mx-auto mt-4" />
          <p className="text-sm text-[#a8a59c] mt-4 font-light">
            We accept a limited number of weddings each season to guarantee undivided personal attention and artisanal delivery for every couple.
          </p>
        </div>

        {/* 2-Column Split: Contact Details Card & Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121217] border border-[#262630] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="font-serif text-2xl text-[#f6f4ee] font-semibold mb-2">
                Dhanas Photography
              </h3>
              <p className="text-xs text-[#d4af37] tracking-widest uppercase mb-6 font-medium">
                Dhanasekar · Principal Artist
              </p>

              <div className="space-y-5 text-xs sm:text-sm text-[#c8c5bb]">
                {/* Phone 1 */}
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2 rounded-lg bg-[#1a1a22] border border-[#d4af37]/25 text-[#d4af37] shrink-0 mt-0.5 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#7a7870] font-semibold">Primary Contact (Call & WhatsApp)</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phone1Raw}`}
                      className="font-medium text-[#f3f0e8] hover:text-[#d4af37] transition-colors text-sm"
                    >
                      {BUSINESS_INFO.phone1}
                    </a>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2 rounded-lg bg-[#1a1a22] border border-[#d4af37]/25 text-[#d4af37] shrink-0 mt-0.5 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#7a7870] font-semibold">Secondary Line</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phone2Raw}`}
                      className="font-medium text-[#f3f0e8] hover:text-[#d4af37] transition-colors text-sm"
                    >
                      {BUSINESS_INFO.phone2}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2 rounded-lg bg-[#1a1a22] border border-[#d4af37]/25 text-[#d4af37] shrink-0 mt-0.5 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#7a7870] font-semibold">Official Email</p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="font-medium text-[#f3f0e8] hover:text-[#d4af37] transition-colors text-sm"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5 group">
                  <div className="p-2 rounded-lg bg-[#1a1a22] border border-[#d4af37]/25 text-[#d4af37] shrink-0 mt-0.5 group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#7a7870] font-semibold">Official Instagram</p>
                    <a
                      href={BUSINESS_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#f3f0e8] hover:text-[#E1306C] transition-colors text-sm"
                    >
                      {BUSINESS_INFO.instagramHandle}
                    </a>
                  </div>
                </div>

                {/* Location & Travel */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#1a1a22] border border-[#d4af37]/25 text-[#d4af37] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#7a7870] font-semibold">Studio Base & Travel</p>
                    <p className="font-medium text-[#f3f0e8] text-sm">{BUSINESS_INFO.location}</p>
                    <p className="text-xs text-[#8f8c82] mt-0.5">{BUSINESS_INFO.travelScope}</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="mt-8 pt-6 border-t border-[#202028]">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${encodeURIComponent('Hello Dhanasekar, I would like to inquire about wedding photography.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#25D366] bg-[#142318] border border-[#25D366]/40 hover:bg-[#1c3222] rounded flex items-center justify-center gap-2 transition-all shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat With Dhanasekar</span>
                </a>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-5 rounded-xl bg-[#141418] border border-[#25252d] text-xs text-[#a09d94] space-y-2">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold">
                <Clock className="w-4 h-4" />
                <span>Muhurtham Dates Advisory</span>
              </div>
              <p className="font-light leading-relaxed">
                Popular wedding dates in South India get reserved quickly. To avoid disappointment, reach out to Dhanasekar as soon as your date is finalized by family astrologers or elders.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};
