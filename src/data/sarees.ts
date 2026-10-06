export interface Saree {
  id: string;
  name: string;
  category: 'Kanchipuram Silk' | 'Traditional Kasavu' | 'Golden Tissue' | 'Bridal Crimson' | 'Pastel Organza' | 'Festive Silk';
  price: number;
  originalPrice: number;
  image: string;
  badge?: string;
  tagline: string;
  description: string;
  fabric: string;
  weave: string;
  zariType: string;
  length: string;
  blousePiece: string;
  origin: string;
  colorTone: string;
  suitableOccasions: string[];
  careInstructions: string;
  inStock: boolean;
  readyToShip: boolean;
  keralaDeliveryTime: string;
}

export const SAREES_DATA: Saree[] = [
  {
    id: 'sn-01',
    name: 'The Royal Mayura Forest Silk',
    category: 'Kanchipuram Silk',
    price: 14800,
    originalPrice: 18500,
    image: '/images/forest-emerald.jpg',
    badge: 'Signature Sakhinool',
    tagline: 'Deep forest emerald pure mulberry silk with antique 24K gold zari brocade',
    description: 'Our signature brand masterpiece. Hand-loomed in pure double-warp Mulberry silk, this saree features majestic peacock and floral vine motifs along an expansive 8-inch traditional temple border. The pallu gleams with intricate antique zari, creating a breathtaking silhouette for grand celebrations.',
    fabric: '100% Pure Mulberry Silk (Silk Mark Certified)',
    weave: 'Traditional Korvai Handloom Technique',
    zariType: 'Pure Antique 24K Gold Zari with tested silver alloy core',
    length: '6.3 Meters (includes running blouse piece)',
    blousePiece: 'Included: 0.8m heavy brocade blouse fabric in matching forest emerald with zari sleeve borders',
    origin: 'Kanchipuram Master Weavers Guild',
    colorTone: 'Deep Forest Green & Antique Gold',
    suitableOccasions: ['Wedding & Bridal', 'Reception', 'Festive Celebrations'],
    careInstructions: 'Strictly dry clean only. Preserve in unbleached muslin cloth with natural neem leaves.',
    inStock: true,
    readyToShip: true,
    keralaDeliveryTime: '24-48 Hours (Kochi, Trivandrum, Calicut) / 2-3 Days (All Kerala districts)'
  },
  {
    id: 'sn-02',
    name: 'Aswathy Kasavu Handloom Heirloom',
    category: 'Traditional Kasavu',
    price: 4850,
    originalPrice: 6200,
    image: '/images/kasavu.jpg',
    badge: 'Kerala Bestseller',
    tagline: 'Authentic Kerala handloom cotton-silk with pure gold temple kara and peacock pallu',
    description: 'The quintessential soul of God’s Own Country. Woven by generational handloom weavers in Balaramapuram, this saree blends unbleached organic cotton with lustrous silk threads. Featuring a 4-inch royal temple border (Kara) and exquisite Mayura peacock art in the pallu.',
    fabric: 'Fine Count Organic Cotton-Silk Blend',
    weave: 'Authentic Kerala Wooden Pit Loom',
    zariType: 'Traditional Golden Kasavu Zari',
    length: '6.25 Meters (with blouse piece)',
    blousePiece: 'Included: 0.8m matching cream fabric with wide gold zari sleeve border',
    origin: 'Balaramapuram Heritage Weavers, Kerala',
    colorTone: 'Natural Off-White Ivory & Lustrous Gold',
    suitableOccasions: ['Temple & Onam/Vishu', 'Traditional Ceremonies', 'Family Functions'],
    careInstructions: 'Dry clean recommended for initial wash. Gentle cold water hand wash with mild shampoo thereafter.',
    inStock: true,
    readyToShip: true,
    keralaDeliveryTime: '1-2 Days across all Kerala districts'
  },
  {
    id: 'sn-03',
    name: 'Vishu Kani Shimmer Golden Tissue',
    category: 'Golden Tissue',
    price: 7990,
    originalPrice: 9900,
    image: '/images/vishu-tissue.jpg',
    badge: 'Festive Favorite',
    tagline: 'Ethereal metallic golden tissue silk with deep emerald green temple border',
    description: 'Capturing the auspicious golden glow of Vishu Kani. Handcrafted with fine metallic tissue warp and weft, giving the saree a radiant liquid-gold finish that catches candlelight beautifully. Contrasted by a deep emerald green temple karai border.',
    fabric: 'Pure Metallic Tissue Silk Blend',
    weave: 'Chendamangalam Artisanal Handloom',
    zariType: 'Liquid-Gold Micro Zari Weft',
    length: '6.3 Meters',
    blousePiece: 'Included: 0.8m contrast bottle green silk fabric with zari border',
    origin: 'Chendamangalam Heritage Clusters, Kerala',
    colorTone: 'Shimmering Warm Gold & Bottle Green',
    suitableOccasions: ['Temple & Onam/Vishu', 'Engagement', 'Cocktail & Reception'],
    careInstructions: 'Dry clean only. Roll fold to avoid creases in the delicate tissue fibers.',
    inStock: true,
    readyToShip: true,
    keralaDeliveryTime: '24-48 Hours across Kerala'
  },
  {
    id: 'sn-04',
    name: 'Nila Royal Peacock Bridal Kanchipuram',
    category: 'Kanchipuram Silk',
    price: 19500,
    originalPrice: 24000,
    image: '/images/kanchipuram.jpg',
    badge: 'Bridal Heirloom',
    tagline: 'Royal peacock teal-blue silk with dense gold brocade jaal & magenta contrast pallu',
    description: 'A bridal dream crafted for the modern Kerala bride who honors timeless tradition. Rich peacock teal body enveloped in intricate golden flora, transitioning into a grand contrast magenta-crimson pallu adorned with sovereign peacock motifs.',
    fabric: 'Heavy 3-Ply Mulberry Silk (Silk Mark Certified)',
    weave: 'Heavy Korvai Double-Shuttle Weave',
    zariType: 'Pure Silver Base Heavy Gold Electroplated Zari',
    length: '6.3 Meters',
    blousePiece: 'Included: 0.8m contrast rani pink brocade with gold bootis',
    origin: 'Kanchipuram Handloom Guild',
    colorTone: 'Peacock Blue, Magenta Pink & Rich Gold',
    suitableOccasions: ['Wedding & Bridal', 'Reception', 'Muhurtham'],
    careInstructions: 'Specialist bridal dry clean only. Wrap in breathable cotton or muslin cover.',
    inStock: true,
    readyToShip: true,
    keralaDeliveryTime: '24-48 Hours with Priority White-Glove Dispatch'
  },
  {
    id: 'sn-05',
    name: 'Kunkumam Crimson Banarasi Katan',
    category: 'Bridal Crimson',
    price: 16200,
    originalPrice: 21000,
    image: '/images/crimson-bridal.jpg',
    badge: 'Bridal Choice',
    tagline: 'Deep vermilion crimson bridal silk with hand-woven Kadwa floral jaal in antique gold',
    description: 'An auspicious crimson red heirloom steeped in royal heritage. Crafted over 24 days on traditional handlooms, each floral kadwa booti is individually hand-woven without floating threads at the back, giving unmatched luxury and softness against the skin.',
    fabric: 'Pure Katan Silk (Silk Mark Certified)',
    weave: 'Hand-loomed Kadwa Jaal Technique',
    zariType: 'Antique Gold Resham & Zari Blend',
    length: '6.3 Meters',
    blousePiece: 'Included: 0.85m pure katan silk unstitched blouse piece in matching crimson',
    origin: 'Banaras Artisanal Weavers Guild',
    colorTone: 'Royal Vermilion Red & Antique Gold',
    suitableOccasions: ['Wedding & Bridal', 'Reception', 'Grand Celebrations'],
    careInstructions: 'Dry clean only. Air out occasionally in gentle shade.',
    inStock: true,
    readyToShip: true,
    keralaDeliveryTime: '24-48 Hours across Kerala'
  },
  {
    id: 'sn-06',
    name: 'Gulabi Scalloped Organza Romance',
    category: 'Pastel Organza',
    price: 6450,
    originalPrice: 8500,
    image: '/images/pastel-organza.jpg',
    badge: 'New Arrival',
    tagline: 'Blush peach organza with hand-cut scalloped borders & delicate golden threadwork',
    description: 'Designed for effortless contemporary glamour. This gossamer blush peach organza saree drapes like a dream. Decorated with hand-cut scalloped borders embroidered with subtle gold zardozi threadwork and fine micro-sequins for a soft evening twinkle.',
    fabric: 'Premium Sheer Silk Organza',
    weave: 'Modern Handcrafted Cutwork Atelier',
    zariType: 'Fine Matte Gold Zardozi Embroidery',
    length: '6.2 Meters',
    blousePiece: 'Included: 0.8m raw silk unstitched fabric in matching blush peach with sleeve embroidery',
    origin: 'Sakhinool Contemporary Studio',
    colorTone: 'Blush Peach Pink & Champagne Gold',
    suitableOccasions: ['Reception', 'Engagement', 'Day Weddings & Parties'],
    careInstructions: 'Dry clean only. Steam iron on lowest delicate setting on reverse side.',
    inStock: true,
    readyToShip: true,
    keralaDeliveryTime: '24-48 Hours across Kerala'
  },
  {
    id: 'sn-07',
    name: 'Indraneelam Midnight Blue Soft Silk',
    category: 'Festive Silk',
    price: 8900,
    originalPrice: 11500,
    image: '/images/midnight-blue.jpg',
    badge: 'Evening Elegance',
    tagline: 'Lustrous midnight navy soft silk with champagne gold temple border & floral buttas',
    description: 'Imbued with the mysterious depths of Kerala starry nights. Woven in buttery soft pure silk that flows effortlessly. Adorned with delicate mango (manga) buttas and an ornate antique champagne gold pallu that exudes regal dignity.',
    fabric: 'Pure Soft Mulberry Silk',
    weave: 'Semi-Korvai Artisanal Handloom',
    zariType: 'Champagne Gold Soft Zari',
    length: '6.3 Meters',
    blousePiece: 'Included: 0.8m brocade silk blouse piece with sleeve border',
    origin: 'South Indian Artisanal Cluster',
    colorTone: 'Midnight Navy Blue & Champagne Gold',
    suitableOccasions: ['Reception', 'Festive Celebrations', 'Family Functions'],
    careInstructions: 'Dry clean only.',
    inStock: true,
    readyToShip: true,
    keralaDeliveryTime: '24-48 Hours across Kerala'
  },
  {
    id: 'sn-08',
    name: 'Manjal Haldi Auspicious Silk',
    category: 'Festive Silk',
    price: 11200,
    originalPrice: 14000,
    image: '/images/mustard-haldi.jpg',
    badge: 'Auspicious Glow',
    tagline: 'Turmeric mustard yellow silk with contrast deep maroon temple border & gold brocade',
    description: 'The embodiment of sacred Kerala traditions. Pure turmeric yellow silk embellished with auspicious temple chakram motifs, framed by a contrast deep maroon border woven with rich gold zari. Perfect for temple blessings, haldi, and wedding ceremonies.',
    fabric: 'Pure Mulberry Silk (Silk Mark Certified)',
    weave: 'Traditional Korvai Border Handloom',
    zariType: 'Rich 24K Tested Gold Zari',
    length: '6.3 Meters',
    blousePiece: 'Included: 0.8m contrast deep maroon silk unstitched blouse piece',
    origin: 'Kanchipuram Artisanal Guild',
    colorTone: 'Turmeric Mustard Yellow & Royal Maroon',
    suitableOccasions: ['Wedding & Bridal', 'Temple & Onam/Vishu', 'Haldi & Muhurtham'],
    careInstructions: 'Dry clean only. Store in pure cotton bag.',
    inStock: true,
    readyToShip: true,
    keralaDeliveryTime: '24-48 Hours across Kerala'
  }
];

export const KERALA_DISTRICTS = [
  'Ernakulam (Kochi)',
  'Thiruvananthapuram',
  'Kozhikode (Calicut)',
  'Thrissur',
  'Kottayam',
  'Kannur',
  'Palakkad',
  'Kollam',
  'Alappuzha',
  'Malappuram',
  'Wayanad',
  'Kasaragod',
  'Pathanamthitta',
  'Idukki'
];
