'use client';

import React, { useState } from 'react';
import SakhinoolLogo from './SakhinoolLogo';
import { useTheme } from './ThemeContext';
import { ShoppingBag, Heart, Search, MessageCircle, Menu, X, Sun, Moon } from 'lucide-react';

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
      {/* Main Luxury Navigation Bar (Pure Canvas, 1px Hairline Border) */}
      <nav className="main-navbar">
        <div className="container-custom nav-container">
          {/* Mobile Menu Button (Mobile Only) */}
          <button 
            type="button" 
            className="mobile-toggle-btn mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Left Navigation Links (Desktop) */}
          <div className="desktop-nav-links left-links desktop-only">
            <a href="#collections" className="nav-link">Collections</a>
            <a href="#saree-matcher" className="nav-link">Saree Matcher</a>
            <a href="#kasavu" className="nav-link">Kerala Kasavu</a>
          </div>

          {/* Central Brand Logo */}
          <a href="#" className="nav-center-brand" aria-label="Sakhinool Home">
            <SakhinoolLogo variant="compact" size="sm" />
          </a>

          {/* Right Navigation Links (Desktop) */}
          <div className="desktop-nav-links right-links desktop-only">
            <a href="#our-story" className="nav-link">Our Story</a>
            <a href="#unboxing" className="nav-link">Signature Box</a>
            <a href="#faq" className="nav-link">Delivery</a>
          </div>

          {/* Standardized Right Action Icons */}
          <div className="nav-actions">
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
              className="nav-icon-btn"
              onClick={onOpenWishlist}
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart size={18} />
              {wishlistCount > 0 && (
                <span className="badge-counter">{wishlistCount}</span>
              )}
            </button>

            {/* Shopping Bag */}
            <button 
              type="button" 
              className="nav-icon-btn"
              onClick={onOpenCart}
              title="Inquiry & Order Bag"
              aria-label="Shopping Bag"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="badge-counter">{cartCount}</span>
              )}
            </button>

            {/* Theme Toggle (Light / Dark) */}
            <button
              type="button"
              className="nav-icon-btn desktop-only"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            <div className="mobile-menu-links">
              <a href="#collections" onClick={() => setMobileMenuOpen(false)}>Collections</a>
              <a href="#saree-matcher" onClick={() => setMobileMenuOpen(false)}>Saree Matcher</a>
              <a href="#kasavu" onClick={() => setMobileMenuOpen(false)}>Authentic Kerala Kasavu</a>
              <a href="#our-story" onClick={() => setMobileMenuOpen(false)}>The Sakhinool Story</a>
              <a href="#unboxing" onClick={() => setMobileMenuOpen(false)}>Signature Green &amp; Gold Box</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Kerala Delivery &amp; FAQs</a>
              
              <div className="mobile-menu-theme-row">
                <span>Appearance</span>
                <button type="button" className="theme-pill-btn" onClick={toggleTheme}>
                  {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
              </div>

              <div className="mobile-menu-footer">
                <a 
                  href="https://wa.me/917306045546?text=Namaskaram%20Sakhinool!%20I%20would%20like%20to%20connect%20with%20a%20saree%20stylist." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <MessageCircle size={17} />
                  <span>WhatsApp Concierge: +91 7306045546</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
