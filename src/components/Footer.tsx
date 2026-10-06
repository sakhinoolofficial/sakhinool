import React from 'react';
import SakhinoolLogo from './SakhinoolLogo';
import { MessageCircle, Phone, MapPin, Mail, Sparkles, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { KERALA_DISTRICTS } from '../data/sarees';

export default function Footer() {
  return (
    <footer className="footer-root">
      {/* Kasavu Gold Border Stripe */}
      <div className="kasavu-stripe" />

      {/* VIP Club Signup Strip */}
      <div className="newsletter-strip">
        <div className="container-custom strip-inner">
          <div className="strip-text">
            <span className="badge-gold">
              <Sparkles size={12} />
              <span>THE SAKHI CIRCLE</span>
            </span>
            <h3 className="font-royal">Receive First Access to Festive Drops &amp; Handloom Stories</h3>
            <p className="font-editorial">Be the first to know when new Balaramapuram Kasavu and Kanchipuram weaves arrive.</p>
          </div>
          <form className="strip-form" onSubmit={(e) => { e.preventDefault(); alert("Welcome to the Sakhi Circle! We have saved your email."); }}>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="strip-input font-royal"
            />
            <button type="submit" className="btn-gold">
              <span>Join Circle</span>
            </button>
          </form>
        </div>
      </div>

      <div className="container-custom footer-main">
        <div className="footer-grid">
          {/* Column 1: Brand Emblem & Identity */}
          <div className="footer-col brand-col">
            <SakhinoolLogo variant="full" size="md" forceTheme="dark" />
            <p className="footer-bio font-editorial">
              Rooted in Kerala's living heritage, Sakhinool brings the sacred friendship of thread, handloom artisans, and timeless feminine grace together into each handpicked drape.
            </p>
            <div className="social-pills-row">
              <a
                href="https://www.instagram.com/sakhinool?stkn=MTRwMjUxZDF1eGUzYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn ig"
                title="Follow Sakhinool on Instagram"
              >
                <InstagramIcon size={18} />
                <span>@sakhinool</span>
              </a>

              <a
                href="https://wa.me/917306045546"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn wa"
                title="Chat with Sakhinool on WhatsApp"
              >
                <MessageCircle size={18} />
                <span>+91 7306045546</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title font-royal">Curated Weaves</h4>
            <ul className="footer-links">
              <li><a href="#collections">Signature Forest Emerald</a></li>
              <li><a href="#collections">Traditional Balaramapuram Kasavu</a></li>
              <li><a href="#collections">Vishu Golden Tissue Sarees</a></li>
              <li><a href="#collections">Bridal Kanchipuram Silks</a></li>
              <li><a href="#collections">Crimson Banarasi Katans</a></li>
              <li><a href="#collections">Romantic Organza Scallops</a></li>
            </ul>
          </div>

          {/* Column 3: The Sakhinool Promise */}
          <div className="footer-col">
            <h4 className="footer-col-title font-royal">Concierge &amp; Care</h4>
            <ul className="footer-links">
              <li><a href="#saree-matcher">Interactive Saree Matcher</a></li>
              <li><a href="#our-story">Artisan Looms &amp; Heritage</a></li>
              <li><a href="#unboxing">Signature Keepsake Packaging</a></li>
              <li><a href="#faq">Kerala Delivery Timelines</a></li>
              <li><a href="#faq">Saree Preservation Guide</a></li>
              <li><a href="https://wa.me/917306045546">Video Drape Consultation</a></li>
            </ul>
          </div>

          {/* Column 4: Kerala Hub & Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title font-royal">Kerala Service Hub</h4>
            <div className="contact-item">
              <MapPin size={17} className="contact-icon text-gold" />
              <span>Delivering across Kochi, Trivandrum, Kozhikode &amp; all 14 Kerala districts</span>
            </div>
            <div className="contact-item">
              <Phone size={17} className="contact-icon text-gold" />
              <a href="tel:+917306045546">+91 7306045546</a>
            </div>
            <div className="contact-item">
              <Mail size={17} className="contact-icon text-gold" />
              <span>orders@sakhinool.com</span>
            </div>
            <div className="contact-item">
              <InstagramIcon size={17} className="contact-icon text-gold" />
              <a href="https://www.instagram.com/sakhinool?stkn=MTRwMjUxZDF1eGUzYQ==" target="_blank" rel="noopener noreferrer">
                instagram.com/sakhinool
              </a>
            </div>
          </div>
        </div>

        {/* Kerala Districts Coverage Footer */}
        <div className="districts-coverage-box">
          <span className="districts-title font-royal">Direct Doorstep Delivery to All 14 Districts:</span>
          <div className="districts-tags">
            {KERALA_DISTRICTS.map((d) => (
              <span key={d} className="dist-chip">{d}</span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom-bar">
          <div className="footer-copy">
            © {new Date().getFullYear()} Sakhinool. Woven in Tradition, Styled for You. All rights reserved.
          </div>
          <div className="footer-love font-editorial">
            Crafted with <Heart size={13} fill="#d4af37" color="#d4af37" className="inline-heart" /> for the women of Kerala.
          </div>
        </div>
      </div>
    </footer>
  );
}
