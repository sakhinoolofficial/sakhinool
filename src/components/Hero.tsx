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
      {/* Background Subtle Gradient & Glow */}
      <div className="hero-ambient-glow glow-1" />
      <div className="hero-ambient-glow glow-2" />

      <div className="container-custom hero-container">
        {/* Left Column: Brand Story & Call to Action */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="badge-kerala">
              <Sparkles size={13} />
              <span>HANDLOOMS OF GOD’S OWN COUNTRY</span>
            </span>
          </div>

          <div className="hero-logo-showcase">
            <SakhinoolLogo variant="full" size="md" light />
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
              className="btn-gold"
            >
              <span>Explore Curated Sarees</span>
              <ArrowRight size={17} />
            </button>

            <a 
              href="https://wa.me/917306045546?text=Namaskaram%20Sakhinool!%20I%20am%20looking%20for%20a%20saree%20for%20an%20upcoming%20function.%20Could%20you%20please%20assist%20me?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Stylist</span>
            </a>
          </div>

          {/* 4 Trust Value Pillars */}
          <div className="hero-pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon"><Award size={18} /></div>
              <div className="pillar-info">
                <strong>Silk Mark Certified</strong>
                <span>Pure handlooms &amp; tested zari</span>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><Truck size={18} /></div>
              <div className="pillar-info">
                <strong>All 14 Districts</strong>
                <span>Express delivery across Kerala</span>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><Gift size={18} /></div>
              <div className="pillar-info">
                <strong>Signature Packaging</strong>
                <span>Emerald green &amp; gold keepsake</span>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon"><ShieldCheck size={18} /></div>
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
                <span className="live-sparkle">✦</span>
                <div>
                  <div className="fl-title">Signature Edition</div>
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
          background: radial-gradient(circle at 50% 10%, #0d3424 0%, var(--bg-deep-forest) 75%);
          padding: 40px 0 60px 0;
          overflow: hidden;
        }
        .hero-ambient-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 0;
        }
        .glow-1 {
          background: rgba(212, 175, 55, 0.12);
          top: -100px;
          left: 10%;
        }
        .glow-2 {
          background: rgba(16, 185, 129, 0.1);
          bottom: 0;
          right: 5%;
        }
        .hero-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 48px;
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
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
          font-size: 2.75rem;
          line-height: 1.18;
          color: var(--cream-soft);
          font-weight: 700;
        }
        .hero-description {
          font-size: 1.15rem;
          color: var(--cream-muted);
          line-height: 1.65;
          font-weight: 400;
          max-width: 600px;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 10px;
        }
        .hero-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 18px;
          padding-top: 24px;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
        }
        .pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .pillar-icon {
          color: var(--gold-primary);
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.3);
          width: 34px;
          height: 34px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .pillar-info {
          display: flex;
          flex-direction: column;
        }
        .pillar-info strong {
          color: var(--cream-soft);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .pillar-info span {
          color: var(--text-dim);
          font-size: 0.74rem;
        }
        .hero-visual-card {
          position: relative;
        }
        .visual-card-inner {
          position: relative;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.35) 0%, rgba(10, 38, 26, 0.5) 100%);
          padding: 6px;
          border-radius: 24px;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.2);
        }
        .image-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #000;
          aspect-ratio: 4/5;
        }
        .hero-model-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .image-frame:hover .hero-model-img {
          transform: scale(1.03);
        }
        .image-overlay-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5, 25, 16, 0.8) 0%, rgba(5, 25, 16, 0) 50%, rgba(5, 25, 16, 0.4) 100%);
          pointer-events: none;
        }
        .floating-highlight-badge {
          position: absolute;
          bottom: 24px;
          left: 20px;
          background: rgba(10, 38, 26, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.4);
          padding: 10px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }
        .live-sparkle {
          color: var(--gold-primary);
          font-size: 1.2rem;
        }
        .fl-title {
          font-family: var(--font-serif-royal);
          font-size: 0.86rem;
          color: var(--gold-light);
          font-weight: 700;
        }
        .fl-desc {
          font-size: 0.72rem;
          color: var(--cream-soft);
          opacity: 0.9;
        }
        .floating-kerala-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(5, 25, 16, 0.82);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(16, 185, 129, 0.5);
          color: #a7f3d0;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .dot-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            align-items: center;
          }
          .hero-logo-showcase {
            justify-content: center;
          }
          .hero-headline {
            font-size: 2.1rem;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .hero-pillars-grid {
            text-align: left;
          }
        }

        @media (max-width: 640px) {
          .hero-headline {
            font-size: 1.75rem;
          }
          .hero-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
