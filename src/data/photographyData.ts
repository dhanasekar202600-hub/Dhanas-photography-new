import heroImg from '../assets/images/hero_indian_wedding_1794033464050.jpg';
import bridalImg from '../assets/images/bridal_portrait_indian_1794033463717.jpg';
import candidImg from '../assets/images/candid_wedding_ritual_1794033464746.jpg';
import preWeddingImg from '../assets/images/pre_wedding_sunset_1794033465199.jpg';
import dhanasekarImg from '../assets/images/photographer_dhanasekar_1794033465170.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ceremony' | 'bridal' | 'candid' | 'pre-wedding' | 'couple';
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  fallbackImage: string;
  aspect: 'square' | 'portrait' | 'landscape';
  description: string;
  cameraInfo?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  couple: string;
  city: string;
  date: string;
  quote: string;
  rating: number;
  highlight: string;
}

export const BUSINESS_INFO = {
  photographerName: 'Dhanasekar',
  brandName: 'Dhanas Photography',
  tagline: 'Preserving Sacred Vows & Candid Emotions in Timeless Fine Art',
  phone1: '+91 9944504303',
  phone1Raw: '+919944504303',
  phone2: '+91 9585268973',
  phone2Raw: '+919585268973',
  email: 'dhanasekarthar@gmail.com',
  instagramUrl: 'https://www.instagram.com/dhanas_photography_?srtk=bW1hMThrM3Z3MGRw&utm_source=qr',
  instagramHandle: '@dhanas_photography_',
  location: 'Tamil Nadu, India',
  travelScope: 'Available across Tamil Nadu, Bangalore, Kerala & Destination Weddings Worldwide',
  experienceYears: '10+',
  weddingsCovered: '450+',
  images: {
    hero: heroImg,
    bridal: bridalImg,
    candid: candidImg,
    preWedding: preWeddingImg,
    dhanasekar: dhanasekarImg,
  }
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'The Royal Mandap Vows',
    category: 'ceremony',
    categoryLabel: 'Wedding Ceremony',
    location: 'Chettinad Heritage Palace',
    year: '2024',
    image: heroImg,
    fallbackImage: heroImg,
    aspect: 'landscape',
    description: 'A breathtaking moment under the floral mandap as sacred mantras fill the ambient evening air.',
    cameraInfo: 'Sony A7R V · 24-70mm GM II · f/2.8 · 1/250s'
  },
  {
    id: 'g-2',
    title: 'Temple Zari Bridal Grace',
    category: 'bridal',
    categoryLabel: 'Bridal Portrait',
    location: 'Madurai Heritage Hall',
    year: '2024',
    image: bridalImg,
    fallbackImage: bridalImg,
    aspect: 'portrait',
    description: 'Adorned in heirloom gold and fragrant fresh jasmine, radiating calm elegance before the muhurtham.',
    cameraInfo: 'Sony A1 · 85mm f/1.4 GM · f/1.8 · 1/400s'
  },
  {
    id: 'g-3',
    title: 'Akshata & Sacred Laughter',
    category: 'candid',
    categoryLabel: 'Candid Moments',
    location: 'Coimbatore Grand Mandapam',
    year: '2024',
    image: candidImg,
    fallbackImage: candidImg,
    aspect: 'landscape',
    description: 'Unfiltered joy as elders and loved ones shower blessing petals over the beaming bride and groom.',
    cameraInfo: 'Sony A7 IV · 35mm f/1.4 GM · f/2.0 · 1/500s'
  },
  {
    id: 'g-4',
    title: 'Sunset Gazebo Promise',
    category: 'pre-wedding',
    categoryLabel: 'Pre-Wedding Story',
    location: 'Lakeside Heritage Pavilion',
    year: '2024',
    image: preWeddingImg,
    fallbackImage: preWeddingImg,
    aspect: 'landscape',
    description: 'Intimate golden-hour silhouette embracing amid hand-carved pillars and tranquil waters.',
    cameraInfo: 'Sony A7R V · 50mm f/1.2 GM · f/1.6 · 1/800s'
  },
  {
    id: 'g-5',
    title: 'The Sacred Kanyadaanam Emotion',
    category: 'ceremony',
    categoryLabel: 'Wedding Ceremony',
    location: 'Chennai Sri Hall',
    year: '2024',
    image: candidImg,
    fallbackImage: heroImg,
    aspect: 'portrait',
    description: 'Priceless tears and tender father-daughter farewell as the sacred vows are solemnized.',
    cameraInfo: 'Sony A1 · 70-200mm f/2.8 GM II · f/2.8 · 1/320s'
  },
  {
    id: 'g-6',
    title: 'Jeweled Henna & Solah Shringar',
    category: 'bridal',
    categoryLabel: 'Bridal Portrait',
    location: 'Tiruchirappalli',
    year: '2024',
    image: bridalImg,
    fallbackImage: bridalImg,
    aspect: 'square',
    description: 'Intricate bridal mehndi details interwoven with heirloom temple ornaments and subtle glances.',
    cameraInfo: 'Sony A7R V · 90mm Macro f/2.8 · f/3.2 · 1/200s'
  },
  {
    id: 'g-7',
    title: 'The Groom Sangeet Grandeur',
    category: 'couple',
    categoryLabel: 'Couple Portraits',
    location: 'Bengaluru Palace Grounds',
    year: '2024',
    image: heroImg,
    fallbackImage: heroImg,
    aspect: 'landscape',
    description: 'Regal portraits capturing the celebratory splendor and synchronized joy of the wedding evening.',
    cameraInfo: 'Sony A1 · 35mm f/1.4 GM · f/2.2 · 1/400s'
  },
  {
    id: 'g-8',
    title: 'Ethereal Dawn Pre-Wedding',
    category: 'pre-wedding',
    categoryLabel: 'Pre-Wedding Story',
    location: 'Mahabalipuram Shore',
    year: '2024',
    image: preWeddingImg,
    fallbackImage: preWeddingImg,
    aspect: 'portrait',
    description: 'The gentle whisper of morning sea breeze and raw affection captured in soft pastel sunlight.',
    cameraInfo: 'Sony A7 IV · 85mm f/1.4 GM · f/1.8 · 1/1000s'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 's-1',
    title: 'Candid Wedding Photography',
    tagline: 'Unscripted, raw emotional storytelling',
    description: 'We blend quietly into your celebrations to capture unposed tears of joy, spontaneous laughter, and subtle stolen glances between the couple and their loved ones without any artificial stage directing.',
    deliverables: ['Lead candid photographer', 'Full-day non-intrusive coverage', 'Unlimited high-res color graded shots', 'Private digital online gallery'],
    idealFor: 'Couples wanting authentic, timeless memories of how their wedding truly felt.',
    image: candidImg
  },
  {
    id: 's-2',
    title: 'Traditional Wedding Photography & Rituals',
    tagline: 'Comprehensive coverage of all customs and family portraits',
    description: 'Complete documentation of every sacred ritual from Viratham, Nichayathartham, and Muhurtham to family stage portraits, ensuring no cherished elder or auspicious moment is missed.',
    deliverables: ['Dual camera ritual setups', 'Full family formal session', 'High-key studio lighting for stage', 'Archival preservation ready files'],
    idealFor: 'Large families who treasure complete ritual documentation and formal portraits.',
    image: heroImg
  },
  {
    id: 's-3',
    title: 'Pre-Wedding & Post-Wedding Shoots',
    tagline: 'Cinematic romantic frames in stunning locations',
    description: 'A relaxed, artistic concept shoot designed to help you get comfortable in front of the lens before your wedding day, set against picturesque architecture, sun-kissed beaches, or heritage estates.',
    deliverables: ['Half-day or full-day shoot', 'Moodboard & outfit guidance', 'Drone cinematic aerials', '25 Signature retouched fine art prints'],
    idealFor: 'Couples seeking creative, magazine-style romantic frames before the big day.',
    image: preWeddingImg
  },
  {
    id: 's-4',
    title: 'Bridal & Groom Editorial Portraits',
    tagline: 'High-fashion editorial elegance for the bride and groom',
    description: 'Dedicated solo sessions capturing your wedding attire, jewelry craftsmanship, subtle makeup details, and confident regal silhouettes in magazine-cover quality lighting.',
    deliverables: ['Solo bridal & groom dedicated time', 'Macro jewelry & styling captures', 'Skin-tone master retouching', 'High-res portfolio frames'],
    idealFor: 'Brides and grooms who want their wedding look immortalized in exquisite detail.',
    image: bridalImg
  },
  {
    id: 's-5',
    title: 'Cinematic Wedding Films & Teasers',
    tagline: '4K cinema storytelling with soulful musical scores',
    description: 'Motion cinematography capturing heartfelt speeches, emotional rituals, and the high-energy pulse of your celebrations, edited into breathtaking 4K teasers and full-length wedding films.',
    deliverables: ['4K Cinema cameras & prime lenses', '1-minute Instagram teaser reel', '3-5 minute Cinematic highlight film', 'Full documentary wedding movie'],
    idealFor: 'Those who want to relive their vows through moving pictures and authentic audio.',
    image: heroImg
  },
  {
    id: 's-6',
    title: 'Handcrafted Luxury Albums & Keepsakes',
    tagline: 'Archival flush-mount heirloom albums made to last generations',
    description: 'Custom-designed photobooks printed on premium archival photographic paper, bound in genuine leather, raw silk, or velvet with embossed gold foiling.',
    deliverables: ['Bespoke layout storytelling design', 'Anti-glare museum archival paper', 'Custom wooden heirloom preservation box', 'Mini pocket albums for parents'],
    idealFor: 'Couples who desire a tangible, luxurious heirloom to pass down to future generations.',
    image: bridalImg
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 't-1',
    couple: 'Ananya & Karthik',
    city: 'Chennai',
    date: 'February 2024',
    highlight: 'Dhanasekar captured emotions we didn’t even realize occurred during our Muhurtham.',
    quote: 'Booking Dhanas Photography was hands down the single best choice we made for our wedding. Dhanasekar and his team were polite, completely unobtrusive, and made both our families feel so relaxed. When we opened the gallery, we were in tears—every candid moment was pure magic!',
    rating: 5
  },
  {
    id: 't-2',
    couple: 'Priyadharshini & Ashwin',
    city: 'Madurai & Coimbatore',
    date: 'November 2023',
    highlight: 'Remarkable patience with our big family and unmatched eye for traditional lighting.',
    quote: 'From our pre-wedding shoot at sunrise to our midnight reception, Dhanasekar brought incredible passion and energy. The bridal portraits made my wife look like royalty. His communication via WhatsApp and phone was instant and reassuring.',
    rating: 5
  },
  {
    id: 't-3',
    couple: 'Meera & Arvind',
    city: 'Tiruchirappalli',
    date: 'January 2024',
    highlight: 'The candid moments and the heirloom album quality are absolutely world-class.',
    quote: 'Dhanasekar doesn’t just click photos; he captures feelings. He knew every traditional ritual so well that he was always at the right place at the right second. The photos were delivered ahead of schedule and the album cover feels like a royal heirloom.',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'How far in advance should we book Dhanas Photography?',
    answer: 'Wedding dates in South India are heavily clustered around auspicious Muhurtham dates. We recommend securing your date 3 to 8 months in advance by confirming with Dhanasekar.'
  },
  {
    question: 'Does Dhanasekar travel for destination weddings outside Tamil Nadu?',
    answer: 'Yes! Dhanasekar travels extensively across India (Chennai, Bangalore, Coimbatore, Kerala, Hyderabad, Goa) and international destination weddings. Travel and accommodation details are transparently coordinated.'
  },
  {
    question: 'How soon do we receive our wedding photos and films?',
    answer: 'We provide a curated teaser preview of 25-30 highlights within 5-7 days so you can share them with family and on social media. The complete color-corrected high-resolution gallery is delivered within 3-4 weeks.'
  },
  {
    question: 'Can we customize a package according to our event requirements?',
    answer: 'Absolutely. We offer tailored packages whether you need coverage for a single intimate ceremony, a multi-day South Indian wedding with Haldi, Sangeet & Reception, or just Candid & Pre-Wedding shoots.'
  }
];
