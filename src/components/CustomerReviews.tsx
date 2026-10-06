import React from 'react';
import { Star, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: 'Dr. Revathy M. Nair',
      location: 'Thiruvananthapuram, Kerala',
      occasion: 'Guruvayur Temple Wedding',
      rating: 5,
      review: 'I ordered the Aswathy Kasavu saree for my brother’s Guruvayur wedding. The purity of the handloom weave and the genuine gold kara took my breath away. It draped so effortlessly without ballooning, and the packaging bag itself was so regal. Sakhinool is now our family’s go-to!',
      date: 'Ordered September 2026'
    },
    {
      id: 2,
      name: 'Ananya & Ashwin Menon',
      location: 'Panampilly Nagar, Kochi',
      occasion: 'Bridal Muhurtham',
      rating: 5,
      review: 'We were nervous about buying bridal silk without physically seeing it, but the Sakhinool team did a full live video call on WhatsApp showing the pallu detail in sunlight! Received it in Kochi within 24 hours. The forest green & gold tone is truly celestial.',
      date: 'Ordered August 2026'
    },
    {
      id: 3,
      name: 'Fathima Zehra',
      location: 'Beach Road, Kozhikode',
      occasion: 'Eid & Family Reception',
      rating: 5,
      review: 'The Vishu Kani Golden Tissue saree is pure magic under evening lights. Extremely lightweight, soft against the skin, and the emerald green temple border gave it such a traditional yet contemporary edge. Everyone at the reception asked where I got it!',
      date: 'Ordered September 2026'
    },
    {
      id: 4,
      name: 'Deepthi Sreejith',
      location: 'Round North, Thrissur',
      occasion: 'Navaratri Celebrations',
      rating: 5,
      review: 'Opening the dark green package made me smile — you can immediately sense the care, love, and respect for Kerala’s handloom weavers. Prompt WhatsApp customer service, honest advice on blouse design, and fast delivery to Thrissur.',
      date: 'Ordered October 2026'
    }
  ];

  return (
    <section className="reviews-section">
      <div className="container-custom">
        <div className="reviews-header">
          <span className="badge-kerala">
            <Sparkles size={13} className="text-gold" />
            <span>VOICES OF OUR SAKHIS</span>
          </span>
          <h2 className="reviews-title font-royal">
            Adorned by Women <span className="text-gold-gradient">Across Kerala</span>
          </h2>
          <p className="reviews-subtitle font-editorial">
            Read authentic words from brides, professionals, and homemakers who chose Sakhinool for their most treasured moments.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="sakhinool-card review-card">
              <div className="review-top">
                <div className="stars-row">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#c59b27" color="#c59b27" />
                  ))}
                </div>
                <span className="verified-pill">
                  <CheckCircle2 size={12} className="text-forest" />
                  <span>Verified Purchase</span>
                </span>
              </div>

              <p className="review-text font-editorial">
                "{rev.review}"
              </p>

              <div className="review-footer">
                <div className="customer-meta">
                  <strong className="customer-name font-royal">{rev.name}</strong>
                  <div className="customer-loc">
                    <MapPin size={12} className="text-forest" />
                    <span>{rev.location}</span>
                  </div>
                </div>
                <div className="occasion-pill">
                  {rev.occasion}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
