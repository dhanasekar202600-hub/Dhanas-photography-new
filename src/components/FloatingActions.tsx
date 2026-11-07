import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <aside aria-label="Quick contact" className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${encodeURIComponent('Hello Dhanasekar, I would like to inquire about wedding photography availability and packages.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold text-xs tracking-wider uppercase rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="Chat with Dhanasekar on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden md:inline">Chat with Dhanasekar</span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Action Strip (Strictly under 15% viewport height cap) */}
      <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0d10]/95 backdrop-blur-md border-t border-[#26262e] px-4 py-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          {/* Quick Call */}
          <a
            href={`tel:${BUSINESS_INFO.phone1Raw}`}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#181820] border border-[#2b2b36] text-[#e5e2d9] text-[10px] uppercase font-semibold active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-[#d4af37] mb-0.5" />
            <span>Call</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${encodeURIComponent('Hello Dhanasekar, I would like to inquire about wedding photography.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#14261b] border border-[#25D366]/40 text-[#25D366] text-[10px] uppercase font-semibold active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* Quick Book */}
          <button
            onClick={onOpenBooking}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-gold-gradient text-[#0d0d0f] text-[10px] uppercase font-bold active:scale-95 transition-transform shadow"
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span>Book Date</span>
          </button>
        </div>
      </aside>
    </>
  );
};
