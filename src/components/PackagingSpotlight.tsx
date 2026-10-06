import React from 'react';
import Image from 'next/image';
import { Gift, Sparkles, Check, MessageCircle } from 'lucide-react';
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
                <div className="pkg-icon"><Check size={14} /></div>
                <div>
                  <strong>Zari Preservation Seal</strong>
                  <span>Prevents atmospheric oxidation of genuine metallic threads.</span>
                </div>
              </div>

              <div className="pkg-feature-item">
                <div className="pkg-icon"><Check size={14} /></div>
                <div>
                  <strong>Personalized Gift Card</strong>
                  <span>Custom handwritten note in Malayalam or English upon request.</span>
                </div>
              </div>

              <div className="pkg-feature-item">
                <div className="pkg-icon"><Check size={14} /></div>
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
                <InstagramIcon size={16} />
                <span>Tag @sakhinool in unboxing</span>
              </a>

              <a
                href="https://wa.me/917306045546?text=Namaskaram%20Sakhinool!%20I%20would%20like%20to%20order%20a%20saree%20with%20custom%20gift%20packaging."
                target="_blank"
                rel="noopener noreferrer"
                className="connect-pill wa-pill"
              >
                <MessageCircle size={16} />
                <span>Gift Request: +91 7306045546</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .packaging-section {
          padding: 60px 0;
          position: relative;
          background: var(--bg-primary);
        }
        .packaging-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .packaging-media {
          position: relative;
        }
        .packaging-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: #f7f4ed;
          border: 1px solid var(--border-gold);
          box-shadow: var(--shadow-card);
        }
        .packaging-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .packaging-card:hover .packaging-img {
          transform: scale(1.02);
        }
        .packaging-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(7, 33, 21, 0.75) 100%);
        }
        .packaging-badge-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-gold);
          padding: 8px 14px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: var(--color-forest);
          font-weight: 700;
        }
        [data-theme='dark'] .packaging-badge-tag {
          background: rgba(10, 38, 26, 0.9);
          color: var(--color-gold-bright);
        }
        .packaging-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .packaging-title {
          font-size: 2rem;
          color: var(--color-forest);
          line-height: 1.25;
        }
        [data-theme='dark'] .packaging-title {
          color: var(--text-primary);
        }
        .packaging-desc {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .packaging-features-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 4px;
        }
        .pkg-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .pkg-icon {
          color: #ffffff;
          background: var(--color-forest);
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        [data-theme='dark'] .pkg-icon {
          background: var(--color-gold);
          color: #051910;
        }
        .pkg-feature-item strong {
          display: block;
          color: var(--text-primary);
          font-size: 0.92rem;
        }
        .pkg-feature-item span {
          color: var(--text-muted);
          font-size: 0.8rem;
        }
        .packaging-connect-strip {
          display: flex;
          gap: 10px;
          margin-top: 10px;
          flex-wrap: wrap;
        }
        .connect-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .ig-pill {
          background: rgba(225, 48, 108, 0.08);
          border: 1px solid rgba(225, 48, 108, 0.3);
          color: #db2777;
        }
        .ig-pill:hover {
          background: rgba(225, 48, 108, 0.16);
          transform: translateY(-1px);
        }
        .wa-pill {
          background: rgba(22, 163, 74, 0.08);
          border: 1px solid rgba(22, 163, 74, 0.3);
          color: #15803d;
        }
        .wa-pill:hover {
          background: rgba(22, 163, 74, 0.16);
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .packaging-container {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .packaging-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </section>
  );
}
