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

      <style jsx>{`
        .footer-root {
          background: #031109;
          color: var(--cream-soft);
          border-top: 1px solid rgba(212, 175, 55, 0.25);
          position: relative;
        }
        .newsletter-strip {
          background: linear-gradient(180deg, #072216 0%, #051910 100%);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          padding: 40px 0;
        }
        .strip-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .strip-text {
          max-width: 550px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .strip-text h3 {
          font-size: 1.45rem;
          color: var(--gold-light);
        }
        .strip-text p {
          color: var(--cream-muted);
          font-size: 0.98rem;
        }
        .strip-form {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          max-width: 480px;
        }
        .strip-input {
          flex: 1;
          background: #031109;
          border: 1px solid rgba(212, 175, 55, 0.35);
          padding: 12px 18px;
          border-radius: 9999px;
          color: var(--cream-soft);
          font-size: 0.88rem;
          outline: none;
        }
        .strip-input:focus {
          border-color: var(--gold-primary);
        }
        .footer-main {
          padding-top: 60px;
          padding-bottom: 30px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 40px;
          margin-bottom: 50px;
        }
        .brand-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .footer-bio {
          font-size: 0.95rem;
          color: var(--cream-muted);
          line-height: 1.6;
        }
        .social-pills-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .social-btn.ig {
          background: rgba(225, 48, 108, 0.12);
          border: 1px solid rgba(225, 48, 108, 0.4);
          color: #f472b6;
        }
        .social-btn.ig:hover {
          background: rgba(225, 48, 108, 0.25);
          color: #fbcfe8;
        }
        .social-btn.wa {
          background: rgba(37, 211, 102, 0.12);
          border: 1px solid rgba(37, 211, 102, 0.4);
          color: #4ade80;
        }
        .social-btn.wa:hover {
          background: rgba(37, 211, 102, 0.25);
          color: #86efac;
        }
        .footer-col-title {
          font-size: 1.05rem;
          color: var(--gold-light);
          margin-bottom: 18px;
          letter-spacing: 0.05em;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links a {
          color: var(--cream-muted);
          text-decoration: none;
          font-size: 0.88rem;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: var(--gold-primary);
        }
        .contact-col {
          display: flex;
          flex-direction: column;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.86rem;
          color: var(--cream-muted);
          margin-bottom: 12px;
        }
        .contact-item a {
          color: var(--cream-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-item a:hover {
          color: var(--gold-primary);
        }
        .districts-coverage-box {
          background: rgba(10, 38, 26, 0.5);
          border: 1px solid rgba(212, 175, 55, 0.2);
          padding: 16px 20px;
          border-radius: 12px;
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .districts-title {
          font-size: 0.84rem;
          color: var(--gold-light);
          letter-spacing: 0.04em;
        }
        .districts-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .dist-chip {
          background: rgba(5, 25, 16, 0.7);
          border: 1px solid rgba(212, 175, 55, 0.25);
          color: var(--cream-muted);
          font-size: 0.74rem;
          padding: 3px 8px;
          border-radius: 6px;
        }
        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(212, 175, 55, 0.15);
          font-size: 0.8rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 12px;
        }
        .inline-heart {
          vertical-align: middle;
          margin: 0 3px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .strip-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          .strip-form {
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
