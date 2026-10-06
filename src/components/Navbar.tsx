'use client';

import React, { useState } from 'react';
import SakhinoolLogo from './SakhinoolLogo';
import { useTheme } from './ThemeContext';
import { ShoppingBag, Heart, Search, MessageCircle, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';

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
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full header-root">
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
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            {/* Theme Toggle (Light / Dark) */}
            <button
              type="button"
              className="nav-icon-btn theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Search */}
            <button 
              type="button" 
              className="nav-icon-btn"
              onClick={onOpenSearch}
              title="Search Sarees"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Wishlist */}
            <button 
              type="button" 
              className="nav-icon-btn desktop-only"
              onClick={onOpenWishlist}
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart size={18} />
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
              <ShoppingBag size={17} />
              <span className="cart-text">Order Bag</span>
              <span className="cart-count-pill">{cartCount}</span>
            </button>

            {/* Direct WhatsApp Callout (Desktop) */}
            <a 
              href="https://wa.me/917306045546?text=Hello%20Sakhinool!%20I%20am%20interested%20in%20exploring%20sarees%20for%20an%20upcoming%20occasion."
              target="_blank"
              rel="noopener noreferrer"
              className="nav-whatsapp-pill desktop-only"
              title="Chat with Sakhinool Stylist"
            >
              <MessageCircle size={16} />
              <span className="wa-text">Chat with Us</span>
            </a>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            <div className="mobile-menu-links">
              <a href="#collections" onClick={() => setMobileMenuOpen(false)}>Collections</a>
              <a href="#saree-matcher" onClick={() => setMobileMenuOpen(false)}>✨ Interactive Saree Matcher</a>
              <a href="#kasavu" onClick={() => setMobileMenuOpen(false)}>Authentic Kerala Kasavu</a>
              <a href="#our-story" onClick={() => setMobileMenuOpen(false)}>The Sakhinool Story</a>
              <a href="#unboxing" onClick={() => setMobileMenuOpen(false)}>Signature Green &amp; Gold Box</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Kerala Delivery &amp; FAQs</a>
              <div className="mobile-menu-theme-row">
                <span>Theme Preference:</span>
                <button type="button" className="theme-pill-btn" onClick={toggleTheme}>
                  {theme === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
                </button>
              </div>
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
        .header-root {
          box-shadow: 0 2px 14px rgba(12, 54, 36, 0.05);
        }
        .top-delivery-bar {
          background: var(--color-forest);
          color: #f7f9f7;
          font-size: 0.74rem;
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
        }
        .sparkle-icon {
          color: var(--color-gold-light);
          display: flex;
          align-items: center;
        }
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .top-bar-link {
          color: #f0f6f2;
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .top-bar-link:hover {
          color: var(--color-gold-light);
        }
        .online-indicator {
          width: 7px;
          height: 7px;
          background: #4ade80;
          border-radius: 50%;
          box-shadow: 0 0 6px #4ade80;
        }
        .divider-dot {
          color: var(--color-gold);
        }
        .main-navbar {
          background: var(--bg-surface-glass);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-light);
          transition: background 0.3s;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 8px;
          padding-bottom: 8px;
          position: relative;
        }
        .desktop-nav-links {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.86rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link:hover {
          color: var(--color-forest);
        }
        .highlight-link {
          color: var(--color-forest);
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
          gap: 8px;
        }
        .nav-icon-btn {
          background: var(--color-forest-surface);
          border: 1px solid var(--border-light);
          color: var(--color-forest);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: all 0.2s ease;
        }
        [data-theme='dark'] .nav-icon-btn {
          color: var(--color-gold);
        }
        .nav-icon-btn:hover {
          background: var(--color-gold-surface);
          border-color: var(--color-gold);
          transform: translateY(-1px);
        }
        .badge-counter {
          position: absolute;
          top: -2px;
          right: -2px;
          background: var(--color-forest);
          color: #ffffff;
          font-size: 0.62rem;
          font-weight: 800;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        [data-theme='dark'] .badge-counter {
          background: var(--color-gold);
          color: #051910;
        }
        .nav-cart-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--color-forest-surface);
          border: 1px solid var(--border-light);
          color: var(--color-forest);
          padding: 6px 12px;
          border-radius: 9999px;
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        [data-theme='dark'] .nav-cart-btn {
          color: var(--color-gold);
        }
        .nav-cart-btn:hover {
          border-color: var(--color-gold);
          background: var(--color-gold-surface);
          transform: translateY(-1px);
        }
        .cart-count-pill {
          background: var(--color-forest);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 1px 7px;
          border-radius: 9999px;
        }
        [data-theme='dark'] .cart-count-pill {
          background: var(--color-gold);
          color: #051910;
        }
        .nav-whatsapp-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(22, 163, 74, 0.1);
          border: 1px solid rgba(22, 163, 74, 0.35);
          color: #16a34a;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .nav-whatsapp-pill:hover {
          background: #16a34a;
          color: #ffffff;
          transform: translateY(-1px);
        }
        .mobile-toggle-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--color-forest);
          cursor: pointer;
          padding: 4px;
        }
        [data-theme='dark'] .mobile-toggle-btn {
          color: var(--color-gold);
        }
        .mobile-menu-dropdown {
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-light);
          padding: 18px 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .mobile-menu-links a {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 4px 0;
          border-bottom: 1px solid var(--border-light);
        }
        .mobile-menu-theme-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .theme-pill-btn {
          background: var(--color-forest-surface);
          border: 1px solid var(--border-light);
          color: var(--color-forest);
          padding: 5px 12px;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
        }
        .mobile-menu-footer {
          margin-top: 10px;
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
          .desktop-only {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
