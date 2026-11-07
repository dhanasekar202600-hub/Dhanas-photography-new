import React, { useState } from 'react';
import { Film, Play, Volume2, VolumeX, Sparkles, X, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData';
import { SafeImage } from './SafeImage';

interface FilmsSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const FilmsSection: React.FC<FilmsSectionProps> = ({ onOpenBooking }) => {
  const [selectedFilm, setSelectedFilm] = useState<{
    title: string;
    couple: string;
    location: string;
    duration: string;
    bgImage: string;
    description: string;
  } | null>(null);

  const films = [
    {
      title: 'Eternal Sacred Knots',
      couple: 'Karthik & Ananya',
      location: 'Chennai Grand Palace',
      duration: '4:15 Min Film',
      bgImage: BUSINESS_INFO.images.hero,
      description: 'A poetic cinematic journey celebrating traditional Carnatic wedding rituals, intimate father-daughter vows, and high-energy midnight reception.'
    },
    {
      title: 'Golden Sunset Symphony',
      couple: 'Ashwin & Priyadharshini',
      location: 'Madurai Heritage Hall',
      duration: '3:45 Min Teaser',
      bgImage: BUSINESS_INFO.images.preWedding,
      description: 'Golden hour drone sweeps across ancient temple towers, capturing unscripted laughter and timeless romantic glances.'
    },
    {
      title: 'Whispers of Saptapadi',
      couple: 'Arvind & Meera',
      location: 'Tiruchirappalli Mandapam',
      duration: '5:20 Min Highlight',
      bgImage: BUSINESS_INFO.images.candid,
      description: 'Emotional documentary cinematography focusing on the sacred fire vows, traditional instruments, and overflowing family happiness.'
    }
  ];

  return (
    <section id="films" className="py-24 bg-[#0d0d10] text-[#dedbd2] relative border-t border-[#1e1e24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
            Motion & Sound
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f5f1] font-normal tracking-tight">
            Cinematic Wedding Films
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37]/60 mx-auto mt-4" />
          <p className="text-sm text-[#a8a59c] mt-4 font-light">
            Moving pictures that capture the rhythm, heartbeat, and music of your sacred vows. Shot in glorious 4K with cinema prime lenses and crystal-clear sound recording.
          </p>
        </div>

        {/* 3 Films Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {films.map((film, index) => (
            <div
              key={index}
              onClick={() => setSelectedFilm(film)}
              className="group cursor-pointer bg-[#131317] border border-[#23232b] hover:border-[#d4af37]/60 rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Video Card Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <SafeImage
                    src={film.bgImage}
                    fallbackSrc={BUSINESS_INFO.images.hero}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-black/40 to-black/20" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gold-gradient text-[#0d0d0f] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 pl-0.5">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/75 text-[11px] font-mono text-[#d4af37] border border-white/10">
                    {film.duration}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">
                    {film.couple}
                  </span>
                  <h3 className="font-serif text-xl text-[#f6f4ee] font-semibold mt-1 mb-2">
                    {film.title}
                  </h3>
                  <p className="text-xs text-[#a9a69d] font-light leading-relaxed mb-4">
                    {film.description}
                  </p>
                  <p className="text-[11px] text-[#7d7a71]">
                    Location: {film.location}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0d0d0f] bg-gold-gradient rounded hover:brightness-110 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Film Preview</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Film Technical Specs */}
        <div className="mt-16 p-6 rounded-xl bg-[#121216] border border-[#23232c] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="font-mono text-base font-bold text-[#d4af37]">4K Ultra-HD</p>
            <p className="text-[11px] text-[#9c9991] uppercase mt-0.5">Cinema Sensor Recording</p>
          </div>
          <div>
            <p className="font-mono text-base font-bold text-[#d4af37]">Drone Aerials</p>
            <p className="text-[11px] text-[#9c9991] uppercase mt-0.5">Licensed Pilot Coverage</p>
          </div>
          <div>
            <p className="font-mono text-base font-bold text-[#d4af37]">Multi-Track Audio</p>
            <p className="text-[11px] text-[#9c9991] uppercase mt-0.5">Studio Quality Vows & Nadaswaram</p>
          </div>
          <div>
            <p className="font-mono text-base font-bold text-[#d4af37]">Color Graded</p>
            <p className="text-[11px] text-[#9c9991] uppercase mt-0.5">Custom Film LUTs & Warmth</p>
          </div>
        </div>
      </div>

      {/* Interactive Cinema Player Modal */}
      {selectedFilm && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-w-4xl w-full bg-[#111116] border border-[#2f2f3d] rounded-2xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#23232b] bg-[#14141a]">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#d4af37] font-medium">{selectedFilm.couple}</p>
                <h3 className="font-serif text-xl sm:text-2xl text-[#f6f4ee] font-semibold">{selectedFilm.title}</h3>
              </div>
              <button
                onClick={() => setSelectedFilm(null)}
                className="p-2 text-[#a8a59c] hover:text-white bg-[#1a1a22] rounded-full transition-colors"
                aria-label="Close Film Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Cinema Screen with Active Animated Ambiance */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <SafeImage
                src={selectedFilm.bgImage}
                fallbackSrc={BUSINESS_INFO.images.hero}
                alt={selectedFilm.title}
                className="w-full h-full object-cover opacity-60 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

              {/* Cinema Player Controls Simulation */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#d4af37] bg-black/70 px-2 py-1 rounded border border-[#d4af37]/30">
                    4K MASTER · 24 FPS
                  </span>
                  <span className="text-xs text-[#d0cec7] bg-black/70 px-2.5 py-1 rounded">
                    {selectedFilm.location}
                  </span>
                </div>

                <div className="text-center my-auto">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-gradient text-[#0d0d0f] shadow-2xl animate-pulse pl-1 cursor-pointer">
                    <Play className="w-9 h-9 fill-current" />
                  </div>
                  <p className="text-xs text-[#e8e6df] mt-3 font-serif italic">
                    Ready to create a cinema film for your wedding?
                  </p>
                </div>

                {/* Progress bar simulation */}
                <div className="space-y-2">
                  <div className="w-full bg-white/20 h-1 rounded overflow-hidden">
                    <div className="bg-[#d4af37] h-full w-2/5" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#9c9991] font-mono">
                    <span>01:42</span>
                    <span>{selectedFilm.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 bg-[#14141a] border-t border-[#23232b] flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#a9a69d] max-w-md font-light">
                {selectedFilm.description}
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedFilm(null);
                    onOpenBooking('Cinematic Wedding Films & Teasers');
                  }}
                  className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0d0d0f] bg-gold-gradient rounded shadow hover:brightness-110 transition-all whitespace-nowrap"
                >
                  Book Film Coverage
                </button>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phone1Raw.replace('+', '')}?text=${encodeURIComponent(`Hello Dhanasekar, I saw your wedding film "${selectedFilm.title}" and would like to know pricing for film coverage.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-medium tracking-wider uppercase text-[#25D366] bg-[#142318] border border-[#25D366]/40 rounded flex items-center gap-1.5 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
