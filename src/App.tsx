import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { CandidSection } from './components/CandidSection';
import { PreWeddingSection } from './components/PreWeddingSection';
import { FilmsSection } from './components/FilmsSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName || '');
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-[#0c0c0d] text-[#e8e6e3] font-sans selection:bg-[#d4af37]/30 selection:text-[#f3e5ab]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Portfolio Gallery */}
        <Portfolio onOpenBooking={() => handleOpenBooking()} />

        {/* 3. About Dhanasekar */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Photography & Film Services */}
        <Services onSelectService={(service) => handleOpenBooking(service)} />

        {/* 5. Candid Photography Spotlight */}
        <CandidSection onOpenBooking={() => handleOpenBooking('Candid Wedding Photography')} />

        {/* 6. Pre-Wedding Stories */}
        <PreWeddingSection onOpenBooking={(service) => handleOpenBooking(service || 'Pre-Wedding & Post-Wedding Shoots')} />

        {/* 7. Cinematic Wedding Films */}
        <FilmsSection onOpenBooking={(service) => handleOpenBooking(service || 'Cinematic Wedding Films & Teasers')} />

        {/* 8. Customer Testimonials & FAQs */}
        <Testimonials />

        {/* 9. Contact & Booking Inquiry Hub */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Buttons */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Dialog Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />
    </div>
  );
}
