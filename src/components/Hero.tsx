import React from 'react';
import Image from 'next/image';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Gift, Truck, Award } from 'lucide-react';
import SakhinoolLogo from './SakhinoolLogo';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="hero-section">
      <div className="container-custom hero-container">
        {/* Left Column: Brand Story & Call to Action */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="badge-kerala">
              <Sparkles size={13} className="text-gold" />
              <span>HANDLOOMS OF GOD’S OWN COUNTRY</span>
            </span>
          </div>

          <div className="hero-logo-showcase">
            <SakhinoolLogo variant="full" size="md" />
          </div>

          <h1 className="hero-headline font-royal">
            Every Saree is a Sacred Thread of <span className="text-gold-gradient">Tradition &amp; Grace</span>
          </h1>

          <p className="hero-description font-editorial">
            <em>Sakhi</em> (companion) meets <em>Nool</em> (thread). Handcrafted with pure love for the women of Kerala, our sarees bring the regal majesty of Balaramapuram kasavu, Kanchipuram mulberry silks, and shimmering festive tissues directly to your doorstep.
          </p>

          {/* Quick CTA Actions */}
          <div className="hero-cta-group">
            <button 
              type="button" 
              onClick={onExploreClick}
              className="btn-forest"
            >
              <span>Explore Curated Sarees</span>
              <ArrowRight size={16} />
            </button>

            <a 
              href="https://wa.me/917306045546?text=Namaskaram%20Sakhinool!%20I%20am%20looking%20for%20a%20saree%20for%20an%20upcoming%20function.%20Could%20you%20please%20assist%20me?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={17} />
              <span>WhatsApp Stylist</span>
            </a>
          </div>

          {/* 4 Trust Value Pillars */}
          <div className="hero-pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon"><Award size={17} /></div>
              <div className="pillar-info">
                <strong>Silk Mark Certified</strong>
                <span>Pure handlooms &amp; tested zari</span>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><Truck size={17} /></div>
              <div className="pillar-info">
                <strong>All 14 Districts</strong>
                <span>Express delivery across Kerala</span>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><Gift size={17} /></div>
              <div className="pillar-info">
                <strong>Signature Packaging</strong>
                <span>Emerald green &amp; gold keepsake</span>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><ShieldCheck size={17} /></div>
              <div className="pillar-info">
                <strong>Direct Artisan Sourcing</strong>
                <span>Fair trade with master weavers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Hero Saree Editorial Display */}
        <div className="hero-visual-card">
          <div className="visual-card-inner">
            <div className="image-frame">
              <Image 
                src="/images/hero.jpg" 
                alt="Sakhinool Signature Forest Green & Gold Silk Saree in Kerala Heritage Nalukettu" 
                width={650}
                height={780}
                priority
                className="hero-model-img"
              />
              <div className="image-overlay-vignette" />
              
              {/* Floating Highlight Tag */}
              <div className="floating-highlight-badge">
                <span className="live-sparkle text-gold">✦</span>
                <div>
                  <div className="fl-title font-royal">Signature Edition</div>
                  <div className="fl-desc">Deep Forest Silk • 24K Gold Zari</div>
                </div>
              </div>

              {/* Kerala Express Delivery Tag */}
              <div className="floating-kerala-tag">
                <span className="dot-pulse" />
                <span>Next-Day Delivery in Kochi &amp; Trivandrum</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          background: var(--gradient-hero-light);
          padding: 36px 0 54px 0;
          overflow: hidden;
          transition: background 0.3s ease;
        }
        .hero-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 40px;
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .hero-badge-wrap {
          display: flex;
        }
        .hero-logo-showcase {
          display: flex;
          justify-content: flex-start;
          margin-bottom: -5px;
        }
        .hero-headline {
          font-size: 2.5rem;
          line-height: 1.2;
          color: var(--color-forest);
          font-weight: 700;
        }
        [data-theme='dark'] .hero-headline {
          color: var(--text-primary);
        }
        .hero-description {
          font-size: 1.12rem;
          color: var(--text-secondary);
          line-height: 1.65;
          font-weight: 400;
          max-width: 580px;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 6px;
        }
        .hero-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 14px;
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
        }
        .pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .pillar-icon {
          color: var(--color-forest);
          background: var(--color-gold-surface);
          border: 1px solid var(--border-gold);
          width: 34px;
          height: 34px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        [data-theme='dark'] .pillar-icon {
          color: var(--color-gold);
        }
        .pillar-info {
          display: flex;
          flex-direction: column;
        }
        .pillar-info strong {
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .pillar-info span {
          color: var(--text-muted);
          font-size: 0.74rem;
        }
        .hero-visual-card {
          position: relative;
        }
        .visual-card-inner {
          position: relative;
          background: linear-gradient(135deg, var(--color-gold) 0%, rgba(12, 54, 36, 0.4) 100%);
          padding: 4px;
          border-radius: 20px;
          box-shadow: var(--shadow-card);
        }
        .image-frame {
          position: relative;
          border-radius: 17px;
          overflow: hidden;
          background: #f0f0f0;
          aspect-ratio: 4/5;
        }
        .hero-model-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .image-frame:hover .hero-model-img {
          transform: scale(1.03);
        }
        .image-overlay-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(7, 33, 21, 0.7) 0%, transparent 50%, rgba(7, 33, 21, 0.2) 100%);
          pointer-events: none;
        }
        .floating-highlight-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-gold);
          padding: 8px 14px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        }
        [data-theme='dark'] .floating-highlight-badge {
          background: rgba(10, 38, 26, 0.9);
        }
        .live-sparkle {
          font-size: 1.1rem;
        }
        .fl-title {
          font-size: 0.84rem;
          color: var(--color-forest);
          font-weight: 700;
        }
        [data-theme='dark'] .fl-title {
          color: var(--color-gold-bright);
        }
        .fl-desc {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }
        .floating-kerala-tag {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(22, 163, 74, 0.4);
          color: #15803d;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        [data-theme='dark'] .floating-kerala-tag {
          background: rgba(5, 25, 16, 0.85);
          color: #86efac;
        }
        .dot-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px #22c55e;
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 28px;
          }
          .hero-content {
            align-items: center;
          }
          .hero-logo-showcase {
            justify-content: center;
          }
          .hero-headline {
            font-size: 1.85rem;
          }
          .hero-description {
            font-size: 0.98rem;
          }
          .hero-cta-group {
            justify-content: center;
            width: 100%;
          }
          .hero-cta-group .btn-forest,
          .hero-cta-group .btn-whatsapp {
            flex: 1;
            min-width: 140px;
          }
          .hero-pillars-grid {
            text-align: left;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
