import React from 'react';
import { Star, MapPin, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

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
            <Sparkles size={13} />
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
                    <Star key={i} size={15} fill="#d4af37" color="#d4af37" />
                  ))}
                </div>
                <span className="verified-pill">
                  <CheckCircle2 size={12} className="text-emerald" />
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
                    <MapPin size={12} className="text-gold" />
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

      <style jsx>{`
        .reviews-section {
          padding: 80px 0;
          background: #04140d;
          position: relative;
        }
        .reviews-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 48px auto;
        }
        .reviews-title {
          font-size: 2.2rem;
          color: var(--cream-soft);
          margin-top: 10px;
          margin-bottom: 8px;
        }
        .reviews-subtitle {
          font-size: 1.08rem;
          color: var(--cream-muted);
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .review-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: #082317;
        }
        .review-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .stars-row {
          display: flex;
          gap: 4px;
        }
        .verified-pill {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          color: #a7f3d0;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 3px 8px;
          border-radius: 9999px;
        }
        .review-text {
          font-size: 1.02rem;
          color: var(--cream-soft);
          line-height: 1.65;
          font-style: italic;
        }
        .review-footer {
          margin-top: auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid rgba(212, 175, 55, 0.15);
        }
        .customer-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .customer-name {
          font-size: 0.95rem;
          color: var(--gold-light);
        }
        .customer-loc {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--text-dim);
        }
        .occasion-pill {
          font-size: 0.72rem;
          color: var(--gold-primary);
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.25);
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 600;
        }

        @media (max-width: 800px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
          .reviews-title {
            font-size: 1.85rem;
          }
        }
      `}</style>
    </section>
  );
}
