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
    </section>
  );
}
