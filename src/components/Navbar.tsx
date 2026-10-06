'use client';

import React, { useState } from 'react';
import SakhinoolLogo from './SakhinoolLogo';
import { ShoppingBag, Heart, Search, MessageCircle, Menu, X, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
}

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Heritage Delivery Banner */}
      <div className="top-delivery-bar">
        <div className="container-custom top-bar-inner">
          <div className="top-bar-left">
            <span className="sparkle-icon"><Sparkles size={13} /></span>
            <span>Handpicked Sarees Delivered Across <strong>All 14 Districts of Kerala</strong></span>
          </div>
          <div className="top-bar-right">
            <a 
              href="https://www.instagram.com/sakhinool?stkn=MTRwMjUxZDF1eGUzYQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="top-bar-link"
            >
              <span>Follow @sakhinool</span>
            </a>
            <span className="divider-dot">•</span>
            <a 
              href="https://wa.me/917306045546?text=Hello%20Sakhinool!%20I%20would%20like%20to%20know%20more%20about%20your%20saree%20collections." 
              target="_blank" 
              rel="noopener noreferrer"
              className="top-bar-link"
            >
              <span className="online-indicator" />
              <span>WhatsApp: +91 7306045546</span>
            </a>
          </div>
        </div>
      </div>

      {/* Kasavu Gold Accent Stripe */}
      <div className="kasavu-stripe" />

      {/* Main Luxury Navigation Bar */}
      <nav className="main-navbar">
        <div className="container-custom nav-container">
          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Left Navigation Links (Desktop) */}
          <div className="desktop-nav-links left-links">
            <a href="#collections" className="nav-link">Collections</a>
            <a href="#saree-matcher" className="nav-link highlight-link">
              <Sparkles size={14} className="text-gold" />
              <span>Saree Matcher</span>
            </a>
            <a href="#kasavu" className="nav-link">Kerala Kasavu</a>
          </div>

          {/* Central Brand Logo */}
          <a href="#" className="nav-center-brand">
            <SakhinoolLogo variant="compact" size="sm" />
          </a>

          {/* Right Navigation Links (Desktop) */}
          <div className="desktop-nav-links right-links">
            <a href="#our-story" className="nav-link">Our Story</a>
            <a href="#unboxing" className="nav-link">Signature Box</a>
            <a href="#faq" className="nav-link">Kerala Delivery</a>
          </div>

          {/* Right Utility Actions */}
          <div className="nav-actions">
            {/* Search */}
            <button 
              type="button" 
              className="nav-icon-btn"
              onClick={onOpenSearch}
              title="Search Sarees"
            >
              <Search size={20} />
            </button>

            {/* Wishlist */}
            <button 
              type="button" 
              className="nav-icon-btn"
              onClick={onOpenWishlist}
              title="Saved Wishlist"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="badge-counter">{wishlistCount}</span>
              )}
            </button>

            {/* Bag / WhatsApp Order */}
            <button 
              type="button" 
              className="nav-cart-btn"
              onClick={onOpenCart}
              title="Inquiry & Order Bag"
            >
              <ShoppingBag size={18} />
              <span className="cart-text">Order Bag</span>
              <span className="cart-count-pill">{cartCount}</span>
            </button>

            {/* Direct WhatsApp Callout */}
            <a 
              href="https://wa.me/917306045546?text=Hello%20Sakhinool!%20I%20am%20interested%20in%20exploring%20sarees%20for%20an%20upcoming%20occasion."
              target="_blank"
              rel="noopener noreferrer"
              className="nav-whatsapp-pill"
              title="Chat with Sakhinool Stylist"
            >
              <MessageCircle size={17} />
              <span className="wa-text">Chat with Us</span>
            </a>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            <div className="mobile-menu-links">
              <a href="#collections" onClick={() => setMobileMenuOpen(false)}>Collections</a>
              <a href="#saree-matcher" onClick={() => setMobileMenuOpen(false)}>✨ Interactive Saree Matcher</a>
              <a href="#kasavu" onClick={() => setMobileMenuOpen(false)}>Authentic Kerala Kasavu</a>
              <a href="#our-story" onClick={() => setMobileMenuOpen(false)}>The Sakhinool Story</a>
              <a href="#unboxing" onClick={() => setMobileMenuOpen(false)}>Signature Green &amp; Gold Box</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Kerala Delivery &amp; FAQs</a>
              <div className="mobile-menu-footer">
                <a 
                  href="https://wa.me/917306045546" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp: +91 7306045546</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .top-delivery-bar {
          background: #04140d;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          font-size: 0.76rem;
          color: var(--text-muted);
          padding: 6px 0;
        }
        .top-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--gold-light);
        }
        .sparkle-icon {
          color: var(--gold-primary);
          display: flex;
          align-items: center;
        }
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .top-bar-link {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .top-bar-link:hover {
          color: var(--gold-primary);
        }
        .online-indicator {
          width: 7px;
          height: 7px;
          background: #25d366;
          border-radius: 50%;
          box-shadow: 0 0 6px #25d366;
        }
        .divider-dot {
          color: var(--gold-deep);
        }
        .main-navbar {
          background: rgba(6, 25, 17, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.25);
          transition: background 0.3s;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          padding-bottom: 10px;
          position: relative;
        }
        .desktop-nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .nav-link {
          color: var(--cream-soft);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          transition: color 0.2s;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .nav-link:hover {
          color: var(--gold-light);
        }
        .highlight-link {
          color: var(--gold-light);
        }
        .nav-center-brand {
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-icon-btn {
          background: rgba(10, 38, 26, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.25);
          color: var(--gold-light);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: all 0.25s ease;
        }
        .nav-icon-btn:hover {
          background: rgba(212, 175, 55, 0.15);
          border-color: var(--gold-primary);
          color: #fff;
          transform: translateY(-1px);
        }
        .badge-counter {
          position: absolute;
          top: -3px;
          right: -3px;
          background: var(--gold-primary);
          color: var(--bg-deep-forest);
          font-size: 0.65rem;
          font-weight: 800;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--bg-deep-forest);
        }
        .nav-cart-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.18) 0%, rgba(10, 38, 26, 0.8) 100%);
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: var(--gold-light);
          padding: 7px 14px;
          border-radius: 9999px;
          cursor: pointer;
          font-size: 0.84rem;
          font-weight: 600;
          transition: all 0.25s ease;
        }
        .nav-cart-btn:hover {
          border-color: var(--gold-primary);
          background: rgba(212, 175, 55, 0.25);
          transform: translateY(-1px);
        }
        .cart-count-pill {
          background: var(--gold-primary);
          color: var(--bg-deep-forest);
          font-size: 0.72rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 9999px;
        }
        .nav-whatsapp-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(37, 211, 102, 0.14);
          border: 1px solid rgba(37, 211, 102, 0.45);
          color: #4ade80;
          padding: 7px 14px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .nav-whatsapp-pill:hover {
          background: rgba(37, 211, 102, 0.25);
          color: #86efac;
          transform: translateY(-1px);
        }
        .mobile-toggle-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--gold-light);
          cursor: pointer;
        }
        .mobile-menu-dropdown {
          background: var(--bg-deep-forest);
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
          padding: 20px 24px;
        }
        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mobile-menu-links a {
          color: var(--cream-soft);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 4px 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }
        .mobile-menu-links a:hover {
          color: var(--gold-primary);
        }
        .mobile-menu-footer {
          margin-top: 14px;
        }

        @media (max-width: 1024px) {
          .desktop-nav-links {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
          .cart-text, .wa-text {
            display: none;
          }
          .top-bar-right {
            display: none;
          }
          .top-delivery-bar {
            text-align: center;
          }
          .top-bar-inner {
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}
