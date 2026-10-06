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

          <div className="hero-logo-showcase desktop-only">
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
    </section>
  );
}
