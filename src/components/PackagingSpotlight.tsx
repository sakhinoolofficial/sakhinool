import React from 'react';
import Image from 'next/image';
import { Gift, ShieldCheck, Sparkles, Heart, Check, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function PackagingSpotlight() {
  return (
    <section id="unboxing" className="packaging-section">
      <div className="container-custom">
        <div className="packaging-container">
          {/* Left Column: Visual Showcase */}
          <div className="packaging-media">
            <div className="packaging-card">
              <Image
                src="/images/unboxing.jpg"
                alt="Sakhinool Signature Emerald Green and Gold Keepsake Gift Bag and Box with Kasavu Saree"
                width={640}
                height={480}
                className="packaging-img"
              />
              <div className="packaging-vignette" />
              
              <div className="packaging-badge-tag">
                <Gift size={15} className="text-gold" />
                <span>Complimentary Keepsake Packaging on Every Order</span>
              </div>
            </div>
          </div>

          {/* Right Column: Packaging Details */}
          <div className="packaging-text">
            <span className="badge-gold">
              <Sparkles size={13} />
              <span>THE UNBOXING EXPERIENCE</span>
            </span>

            <h2 className="packaging-title font-royal">
              Delivered in Our Signature <span className="text-gold-gradient">Emerald &amp; Gold Keepsake</span>
            </h2>

            <p className="packaging-desc font-editorial">
              Whether you are treating yourself or gifting a daughter, sister, or friend, opening a Sakhinool parcel is a celebratory ritual. Each saree is folded in acid-free butter tissue, scented with natural herbal extracts, and protected inside our heavy-gauge forest green and gold carrier.
            </p>

            <div className="packaging-features-grid">
              <div className="pkg-feature-item">
                <div className="pkg-icon"><Check size={16} /></div>
                <div>
                  <strong>Zari Preservation Seal</strong>
                  <span>Prevents atmospheric oxidation of genuine metallic threads.</span>
                </div>
              </div>

              <div className="pkg-feature-item">
                <div className="pkg-icon"><Check size={16} /></div>
                <div>
                  <strong>Personalized Gift Card</strong>
                  <span>Custom handwritten note in Malayalam or English upon request.</span>
                </div>
              </div>

              <div className="pkg-feature-item">
                <div className="pkg-icon"><Check size={16} /></div>
                <div>
                  <strong>Authenticity Certificate</strong>
                  <span>Guarantee of pure handloom origin &amp; Silk Mark verification.</span>
                </div>
              </div>
            </div>

            {/* Social Proof & Direct Connect */}
            <div className="packaging-connect-strip">
              <a
                href="https://www.instagram.com/sakhinool?stkn=MTRwMjUxZDF1eGUzYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="connect-pill ig-pill"
              >
                <InstagramIcon size={17} />
                <span>Tag @sakhinool in your unboxing</span>
              </a>

              <a
                href="https://wa.me/917306045546?text=Namaskaram%20Sakhinool!%20I%20would%20like%20to%20order%20a%20saree%20with%20custom%20gift%20packaging."
                target="_blank"
                rel="noopener noreferrer"
                className="connect-pill wa-pill"
              >
                <MessageCircle size={17} />
                <span>Gift Request: +91 7306045546</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .packaging-section {
          padding: 80px 0;
          position: relative;
          background: #05160e;
        }
        .packaging-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .packaging-media {
          position: relative;
        }
        .packaging-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #020b07;
          border: 1px solid rgba(212, 175, 55, 0.4);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.15);
        }
        .packaging-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .packaging-card:hover .packaging-img {
          transform: scale(1.03);
        }
        .packaging-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(4, 20, 13, 0.85) 100%);
        }
        .packaging-badge-tag {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: rgba(10, 38, 26, 0.88);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.35);
          padding: 10px 16px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--gold-light);
          font-weight: 600;
        }
        .packaging-text {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .packaging-title {
          font-size: 2.2rem;
          color: var(--cream-soft);
          line-height: 1.25;
        }
        .packaging-desc {
          font-size: 1.08rem;
          color: var(--cream-muted);
          line-height: 1.7;
        }
        .packaging-features-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 6px;
        }
        .pkg-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .pkg-icon {
          color: var(--bg-deep-forest);
          background: var(--gold-primary);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .pkg-feature-item strong {
          display: block;
          color: var(--cream-soft);
          font-size: 0.95rem;
        }
        .pkg-feature-item span {
          color: var(--text-dim);
          font-size: 0.84rem;
        }
        .packaging-connect-strip {
          display: flex;
          gap: 12px;
          margin-top: 14px;
          flex-wrap: wrap;
        }
        .connect-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 9999px;
          font-size: 0.84rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .ig-pill {
          background: rgba(225, 48, 108, 0.12);
          border: 1px solid rgba(225, 48, 108, 0.4);
          color: #f472b6;
        }
        .ig-pill:hover {
          background: rgba(225, 48, 108, 0.22);
          color: #fbcfe8;
          transform: translateY(-1px);
        }
        .wa-pill {
          background: rgba(37, 211, 102, 0.12);
          border: 1px solid rgba(37, 211, 102, 0.4);
          color: #4ade80;
        }
        .wa-pill:hover {
          background: rgba(37, 211, 102, 0.22);
          color: #86efac;
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .packaging-container {
            grid-template-columns: 1fr;
          }
          .packaging-title {
            font-size: 1.85rem;
          }
        }
      `}</style>
    </section>
  );
}
