import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, Phone, Calendar, MapPin, User, Mail, CheckCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';

interface BookingFormProps {
  initialService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = '',
  isModal = false,
  onClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    eventLocation: '',
    eventType: initialService || 'Full Wedding Package (Traditional + Candid + Film)',
    eventDuration: '2 Days (Muhurtham & Reception)',
    guestCount: '300 - 600 Guests',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, eventType: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const message = `*Wedding Photography Inquiry for Dhanas Photography*
----------------------------------------
*Name:* ${formData.name || 'Not specified'}
*Phone:* ${formData.phone || 'Not specified'}
*Email:* ${formData.email || 'Not specified'}
*Wedding Date:* ${formData.weddingDate || 'To be decided'}
*Location/Venue:* ${formData.eventLocation || 'Tamil Nadu'}
*Requirements:* ${formData.eventType}
*Event Duration:* ${formData.eventDuration}
*Estimated Guests:* ${formData.guestCount}
*Notes:* ${formData.notes || 'None'}
----------------------------------------
Hello Dhanasekar, please share availability and pricing for these dates. Thank you!`;
    return encodeURIComponent(message);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className={`w-full ${isModal ? 'p-2' : ''}`}>
      {submitted ? (
        <div className="bg-[#141419] border border-[#d4af37]/40 rounded-2xl p-8 sm:p-10 text-center shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 text-[#d4af37] flex items-center justify-center mx-auto mb-5 border border-[#d4af37]/30">
            <CheckCircle className="w-8 h-8" />
          </div>
          <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-2">Inquiry Received</p>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#f6f5f1] font-semibold mb-4">
            Thank You, {formData.name || 'Friend'}!
          </h3>
          <p className="text-sm text-[#bbb8ae] leading-relaxed max-w-lg mx-auto mb-8 font-light">
            Dhanasekar has received your wedding photography inquiry for <strong>{formData.weddingDate || 'your upcoming date'}</strong>. He will personally review your itinerary and get back to you within 24 hours.
          </p>

          <div className="p-4 bg-[#1b1b22] border border-[#2b2b36] rounded-xl max-w-md mx-auto text-left text-xs space-y-1.5 mb-8">
            <p className="text-[#a5a297]"><strong className="text-white">Requirements:</strong> {formData.eventType}</p>
            <p className="text-[#a5a297]"><strong className="text-white">Location:</strong> {formData.eventLocation || 'South India'}</p>
            <p className="text-[#a5a297]"><strong className="text-white">Your Contact:</strong> {formData.phone || formData.email}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0d0d0f] bg-gold-gradient rounded shadow hover:brightness-110 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Continue on WhatsApp with Dhanasekar</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone1Raw}`}
              className="px-5 py-3 text-xs font-medium uppercase tracking-wider text-[#e8e6df] bg-[#202028] border border-neutral-700 hover:border-[#d4af37] rounded flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call +91 9944504303</span>
            </a>
          </div>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="mt-6 text-xs text-[#8c8980] hover:text-[#d4af37] underline"
            >
              Close Window
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-[#121217] border border-[#262630] rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Booking Desk</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f6f5f1] font-normal">
              Check Date Availability & Pricing
            </h3>
            <p className="text-xs sm:text-sm text-[#9f9c93] mt-1 font-light">
              Tell us about your wedding ceremonies. Dhanasekar will curate a bespoke quote for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#bbb7ad] font-medium mb-1.5">
                Your Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Karthik & Ananya"
                  className="w-full bg-[#181820] border border-[#2d2d38] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f0ede6] placeholder-[#5c5b56] transition-colors"
                />
                <User className="w-4 h-4 text-[#75726a] absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#bbb7ad] font-medium mb-1.5">
                Phone Number (WhatsApp) *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 9876543210"
                  className="w-full bg-[#181820] border border-[#2d2d38] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f0ede6] placeholder-[#5c5b56] transition-colors"
                />
                <Phone className="w-4 h-4 text-[#75726a] absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#bbb7ad] font-medium mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. yourname@example.com"
                  className="w-full bg-[#181820] border border-[#2d2d38] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f0ede6] placeholder-[#5c5b56] transition-colors"
                />
                <Mail className="w-4 h-4 text-[#75726a] absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Wedding Date */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#bbb7ad] font-medium mb-1.5">
                Wedding / Event Date *
              </label>
              <div className="relative">
                <input
                  type="date"
                  required
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  className="w-full bg-[#181820] border border-[#2d2d38] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f0ede6] transition-colors"
                />
              </div>
            </div>

            {/* Event Location */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#bbb7ad] font-medium mb-1.5">
                Event Location (City / Mandapam) *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  placeholder="e.g. Chennai, Madurai, Coimbatore"
                  className="w-full bg-[#181820] border border-[#2d2d38] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f0ede6] placeholder-[#5c5b56] transition-colors"
                />
                <MapPin className="w-4 h-4 text-[#75726a] absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Photography Requirements */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#bbb7ad] font-medium mb-1.5">
                Photography Requirements *
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full bg-[#181820] border border-[#2d2d38] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f0ede6] transition-colors"
              >
                <option value="Full Wedding Package (Traditional + Candid + Film)">Full Wedding Package (Traditional + Candid + Film)</option>
                <option value="Candid Wedding Photography">Candid Wedding Photography Only</option>
                <option value="Traditional Wedding Photography & Rituals">Traditional Wedding & Rituals Only</option>
                <option value="Pre-Wedding & Post-Wedding Shoots">Pre-Wedding / Post-Wedding Shoot</option>
                <option value="Bridal & Groom Editorial Portraits">Bridal & Groom Editorial Portraits</option>
                <option value="Cinematic Wedding Films & Teasers">Cinematic Wedding Films & Teasers</option>
                <option value="Custom Multi-Day Wedding Package">Custom Multi-Day Wedding Package</option>
              </select>
            </div>
          </div>

          {/* Duration & Guest Count Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#bbb7ad] font-medium mb-1.5">
                Estimated Duration / Days
              </label>
              <select
                name="eventDuration"
                value={formData.eventDuration}
                onChange={handleChange}
                className="w-full bg-[#181820] border border-[#2d2d38] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f0ede6] transition-colors"
              >
                <option value="1 Day (Single Day Ceremony)">1 Day (Single Day Ceremony)</option>
                <option value="2 Days (Muhurtham & Reception)">2 Days (Muhurtham & Reception)</option>
                <option value="3+ Days (Haldi, Sangeet, Muhurtham & Reception)">3+ Days (Haldi, Sangeet, Muhurtham & Reception)</option>
                <option value="Destination Wedding (Multi-Day)">Destination Wedding (Multi-Day)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#bbb7ad] font-medium mb-1.5">
                Approximate Guest Count
              </label>
              <select
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className="w-full bg-[#181820] border border-[#2d2d38] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#f0ede6] transition-colors"
              >
                <option value="Intimate Wedding (Under 200 Guests)">Intimate Wedding (Under 200 Guests)</option>
                <option value="Medium Celebration (200 - 500 Guests)">Medium Celebration (200 - 500 Guests)</option>
                <option value="Grand Celebration (500 - 1000+ Guests)">Grand Celebration (500 - 1000+ Guests)</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-8">
            <label className="block text-xs uppercase tracking-wider text-[#bbb7ad] font-medium mb-1.5">
              Additional Details or Vision
            </label>
            <textarea
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us about specific rituals, muhurtham timing, special requirements, or questions..."
              className="w-full bg-[#181820] border border-[#2d2d38] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-lg p-3 text-xs sm:text-sm text-[#f0ede6] placeholder-[#5c5b56] transition-colors"
            />
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3.5 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0d0d0f] bg-gold-gradient rounded shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting Details...' : 'Submit Booking Inquiry'}</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="py-3.5 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#25D366] bg-[#142318] border border-[#25D366]/40 hover:bg-[#1b3322] rounded transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
          </div>

          <p className="text-[11px] text-center text-[#7a7870] mt-4 font-light">
            No spam. Your contact information is kept strictly private for wedding consultation with Dhanasekar.
          </p>
        </form>
      )}
    </div>
  );
};
