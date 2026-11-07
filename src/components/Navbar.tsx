import React, { useState, useEffect } from 'react';
import { Phone, Mail, Instagram, Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Candid', href: '#candid' },
    { label: 'Films', href: '#films' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact & Social Bar */}
      <div className="bg-[#080809] border-b border-[#25252a] text-[#a9a7a0] text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={`tel:${BUSINESS_INFO.phone1Raw}`}
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>{BUSINESS_INFO.phone1}</span>
            </a>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <a
              href={`tel:${BUSINESS_INFO.phone2Raw}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#d4af37] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>{BUSINESS_INFO.phone2}</span>
            </a>
            <span className="hidden lg:inline text-neutral-600">·</span>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-[#d4af37] transition-colors whitespace-nowrap"
            >
              <Mail className="w-3 h-3 text-[#d4af37]" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <a
              href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${encodeURIComponent('Hello Dhanasekar, I would like to inquire about wedding photography bookings.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:text-[#32e074] transition-colors font-medium whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Quick Chat</span>
            </a>
            <span className="text-neutral-600">·</span>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#d4af37] transition-colors whitespace-nowrap"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span>{BUSINESS_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`px-4 sm:px-8 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#0c0c0e]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#25252c]'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex flex-col group whitespace-nowrap shrink-0">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#f5f3ef] group-hover:text-[#d4af37] transition-colors uppercase">
              Dhanas Photography
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#a59b84] uppercase -mt-1 font-sans">
              by Dhanasekar
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#d0cec7]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#d4af37] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#d4af37] whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0d0d0f] bg-gold-gradient rounded shadow-md hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
            >
              Book Your Date
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 text-[11px] font-semibold uppercase text-[#0d0d0f] bg-gold-gradient rounded"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#d4af37] hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0e12] border-b border-[#25252c] px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-4 text-sm font-medium tracking-wider uppercase text-[#d0cec7]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#d4af37] py-1 border-b border-neutral-800/40"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs font-semibold tracking-widest uppercase text-[#0d0d0f] bg-gold-gradient rounded text-center"
              >
                Book Your Wedding Date
              </button>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <a
                  href={`tel:${BUSINESS_INFO.phone1Raw}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-[#18181d] border border-neutral-800 rounded text-[#e0ded6]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Call Dhanasekar</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${encodeURIComponent('Hello Dhanasekar, I would like to inquire about wedding photography.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-[#18181d] border border-[#25D366]/40 text-[#25D366] rounded"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
