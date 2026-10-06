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
    </header>
  );
}
