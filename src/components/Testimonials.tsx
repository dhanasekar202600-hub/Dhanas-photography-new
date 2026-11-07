import React from 'react';
import { Star, Quote, Heart, MapPin } from 'lucide-react';
import { TESTIMONIALS_LIST, FAQS } from '../data/photographyData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0c] text-[#dedbd2] relative border-t border-[#1e1e24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
            Real Words From Couples
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f5f1] font-normal tracking-tight">
            Client Stories & Gratitude
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37]/60 mx-auto mt-4" />
          <p className="text-sm text-[#a8a59c] mt-4 font-light">
            We measure our success not by numbers, but by the smiles and tears of joy our couples experience when they relive their wedding day.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS_LIST.map((t) => (
            <div
              key={t.id}
              className="bg-[#121216] border border-[#23232c] hover:border-[#d4af37]/40 rounded-xl p-8 flex flex-col justify-between shadow-lg relative group transition-all"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#d4af37] mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#d4af37]" />
                  ))}
                </div>

                {/* Concrete Highlight */}
                <p className="font-serif text-lg text-[#f4f2ec] font-medium mb-4 italic leading-snug">
                  "{t.highlight}"
                </p>

                {/* Full Quote */}
                <p className="text-xs sm:text-sm text-[#a8a59d] leading-relaxed font-light mb-6">
                  {t.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-5 border-t border-[#202028] flex items-center justify-between">
                <div>
                  <p className="font-serif text-base font-semibold text-[#f6f5f1]">{t.couple}</p>
                  <p className="text-[11px] text-[#d4af37] flex items-center gap-1 mt-0.5 font-light">
                    <MapPin className="w-3 h-3" />
                    <span>{t.city} · {t.date}</span>
                  </p>
                </div>
                <div className="p-2 rounded-full bg-[#1b1b22] text-[#d4af37]">
                  <Heart className="w-4 h-4 fill-current text-[#d4af37]/40" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions Accordion / Grid */}
        <div className="max-w-4xl mx-auto pt-12 border-t border-[#1e1e24]">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f6f5f1] font-normal">
              Common Questions About Booking
            </h3>
            <p className="text-xs text-[#9c9991] mt-1">
              Everything you need to know about our workflow, delivery, and travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#121216] border border-[#23232b] flex flex-col justify-start"
              >
                <h4 className="font-serif text-base text-[#f5f3ed] font-semibold mb-2">
                  {faq.question}
                </h4>
                <p className="text-xs text-[#a4a197] leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
