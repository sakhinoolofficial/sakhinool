'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import KeralaDeliveryTicker from '../components/KeralaDeliveryTicker';
import SareeMatcher from '../components/SareeMatcher';
import SareeCard from '../components/SareeCard';
import SareeModal from '../components/SareeModal';
import InquiryBagDrawer, { CartItem } from '../components/InquiryBagDrawer';
import WishlistDrawer from '../components/WishlistDrawer';
import SearchModal from '../components/SearchModal';
import MobileBottomBar from '../components/MobileBottomBar';
import BrandStory from '../components/BrandStory';
import PackagingSpotlight from '../components/PackagingSpotlight';
import CustomerReviews from '../components/CustomerReviews';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeContext';
import { SAREES_DATA, Saree } from '../data/sarees';
import { Sparkles, SlidersHorizontal, MessageCircle, RotateCcw, ArrowRight } from 'lucide-react';
import Image from 'next/image';

function MainAppContent() {
  // Catalog State
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [matcherFilter, setMatcherFilter] = useState<{ occasion: string; fabric: string; maxPrice: number } | null>(null);

  // Cart & Wishlist State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Saree[]>([]);

  // Modals & Drawers
  const [activeSaree, setActiveSaree] = useState<Saree | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Cart Handlers
  const handleAddToCart = (saree: Saree) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.saree.id === saree.id);
      if (existing) {
        return prev.map((item) =>
          item.saree.id === saree.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { saree, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (sareeId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(sareeId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.saree.id === sareeId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (sareeId: string) => {
    setCart((prev) => prev.filter((item) => item.saree.id !== sareeId));
  };

  const handleClearBag = () => {
    setCart([]);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (saree: Saree) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === saree.id);
      if (exists) {
        return prev.filter((item) => item.id !== saree.id);
      }
      return [...prev, saree];
    });
  };

  const handleRemoveWishlist = (sareeId: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== sareeId));
  };

  // Quick View Handler
  const handleQuickView = (saree: Saree) => {
    setActiveSaree(saree);
    setIsModalOpen(true);
  };

  // Matcher Handler
  const handleApplyMatcherFilter = (occasion: string, fabric: string, maxPrice: number) => {
    setMatcherFilter({ occasion, fabric, maxPrice });
    setSelectedCategory('All');
  };

  const handleResetMatcherFilter = () => {
    setMatcherFilter(null);
  };

  // Navigation Helpers
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToMatcher = () => {
    const el = document.getElementById('saree-matcher');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Filtering Sarees
  const categories = [
    'All',
    'Kanchipuram Silk',
    'Traditional Kasavu',
    'Golden Tissue',
    'Bridal Crimson',
    'Pastel Organza',
    'Festive Silk'
  ];

  let displaySarees = [...SAREES_DATA];

  if (matcherFilter) {
    displaySarees = displaySarees.filter((s) => {
      const matchOccasion =
        matcherFilter.occasion === 'All' ||
        s.suitableOccasions.some((o) => o.includes(matcherFilter.occasion));
      const matchFabric =
        matcherFilter.fabric === 'All' ||
        s.fabric.toLowerCase().includes(matcherFilter.fabric.toLowerCase()) ||
        s.category.toLowerCase().includes(matcherFilter.fabric.toLowerCase());
      const matchPrice = s.price <= matcherFilter.maxPrice;
      return matchOccasion && matchFabric && matchPrice;
    });
  } else if (selectedCategory !== 'All') {
    displaySarees = displaySarees.filter((s) => s.category === selectedCategory);
  }

  // Sorting
  if (sortBy === 'price-asc') {
    displaySarees.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    displaySarees.sort((a, b) => b.price - a.price);
  }

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Hero Showcase */}
      <Hero
        onExploreClick={() => {
          const catElem = document.getElementById('collections');
          if (catElem) catElem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Kerala Districts Live Ticker */}
      <KeralaDeliveryTicker />

      {/* Interactive Saree Matcher */}
      <SareeMatcher
        sarees={SAREES_DATA}
        onMatchFilter={handleApplyMatcherFilter}
      />

      {/* Saree Catalog Showcase */}
      <section id="collections" className="catalog-section">
        <div className="container-custom">
          {/* Section Header */}
          <div className="catalog-header">
            <span className="badge-kerala">
              <Sparkles size={13} className="text-gold" />
              <span>HANDPICKED WEAVES</span>
            </span>
            <h2 className="catalog-title font-royal">
              The Sakhinool <span className="text-gold-gradient">Curation</span>
            </h2>
            <p className="catalog-subtitle font-editorial">
              Each piece is personally curated for its pure yarn quality, authentic zari craft, and comfortable drape.
            </p>
          </div>

          {/* Filter Notice Banner if matcher is active */}
          {matcherFilter && (
            <div className="matcher-filter-banner">
              <div className="banner-left">
                <Sparkles size={15} className="text-gold" />
                <span>
                  Showing results for: <strong>{matcherFilter.occasion}</strong> • <strong>{matcherFilter.fabric}</strong> • <strong>Up to ₹{matcherFilter.maxPrice.toLocaleString('en-IN')}</strong> ({displaySarees.length} sarees found)
                </span>
              </div>
              <button
                type="button"
                className="btn-reset-filter"
                onClick={handleResetMatcherFilter}
              >
                <RotateCcw size={13} />
                <span>Clear Filter</span>
              </button>
            </div>
          )}

          {/* Filter Tabs & Sort Controls */}
          {!matcherFilter && (
            <div className="controls-row">
              <div className="category-tabs-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`cat-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="sort-wrap">
                <SlidersHorizontal size={13} className="text-forest" />
                <span className="sort-label">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          )}

          {/* Product Grid (Mobile-First 2-Column Grid) */}
          <div className="sarees-grid">
            {displaySarees.map((saree) => (
              <SareeCard
                key={saree.id}
                saree={saree}
                isWishlisted={wishlist.some((w) => w.id === saree.id)}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={handleQuickView}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {displaySarees.length === 0 && (
            <div className="empty-catalog-notice">
              <p>No sarees matched the current filter combination.</p>
              <button
                type="button"
                className="btn-forest"
                onClick={handleResetMatcherFilter}
              >
                Reset Filters &amp; View All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Kerala Kasavu Heritage Feature Banner */}
      <section id="kasavu" className="kasavu-spotlight-section">
        <div className="container-custom">
          <div className="kasavu-banner-card">
            <div className="kasavu-banner-content">
              <span className="badge-gold">BALARAMAPURAM &amp; CHENDAMANGALAM HANDLOOM</span>
              <h3 className="kasavu-banner-title font-royal">
                The Golden Kara of God’s Own Country
              </h3>
              <p className="kasavu-banner-desc font-editorial">
                Nothing embodies Kerala’s pristine elegance quite like the hand-loomed Kasavu. Sakhinool sources directly from traditional pit looms, guaranteeing breathable organic unbleached cotton-silk and tested golden zari that preserves its luster across generations.
              </p>
              <div className="kasavu-banner-actions">
                <button
                  type="button"
                  className="btn-forest"
                  onClick={() => {
                    setSelectedCategory('Traditional Kasavu');
                    setMatcherFilter(null);
                    const el = document.getElementById('collections');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Explore Kasavu Collection</span>
                  <ArrowRight size={15} />
                </button>
                <a
                  href="https://wa.me/917306045546?text=Namaskaram%20Sakhinool!%20I%20am%20looking%20for%20an%20authentic%20Kerala%20Kasavu%20saree%20for%20an%20occasion."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle size={17} />
                  <span>Ask Kasavu Stylist</span>
                </a>
              </div>
            </div>
            <div className="kasavu-banner-media">
              <Image
                src="/images/kasavu.jpg"
                alt="Traditional Kerala Kasavu Handloom with Peacock Golden Pallu"
                width={480}
                height={560}
                className="kasavu-feature-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sakhinool Brand Story */}
      <BrandStory />

      {/* Packaging Spotlight */}
      <PackagingSpotlight />

      {/* Customer Reviews Across Kerala */}
      <CustomerReviews />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Mobile-First Bottom Navigation Bar */}
      <MobileBottomBar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onNavigateHome={scrollToTop}
        onNavigateMatcher={scrollToMatcher}
      />

      {/* Floating Concierge WhatsApp Widget (Desktop) */}
      <aside className="floating-concierge desktop-only" aria-label="Sakhinool WhatsApp Concierge">
        <a
          href="https://wa.me/917306045546?text=Hello%20Sakhinool!%20I%20would%20like%20to%20know%20more%20about%20your%20sarees."
          target="_blank"
          rel="noopener noreferrer"
          className="concierge-bubble"
          title="Chat with Sakhinool on WhatsApp"
        >
          <span className="concierge-pulse" />
          <MessageCircle size={28} />
        </a>
        <div className="concierge-tooltip font-royal">
          Chat on WhatsApp
        </div>
      </aside>

      {/* Saree Modal */}
      <SareeModal
        saree={activeSaree}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
        isWishlisted={activeSaree ? wishlist.some((w) => w.id === activeSaree.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Inquiry Bag Drawer */}
      <InquiryBagDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearBag={handleClearBag}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveWishlist={handleRemoveWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSaree={(saree) => {
          setActiveSaree(saree);
          setIsModalOpen(true);
        }}
      />

      <style jsx>{`
        .catalog-section {
          padding: 50px 0;
          position: relative;
        }
        .catalog-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 30px auto;
        }
        .catalog-title {
          font-size: 2.1rem;
          color: var(--color-forest);
          margin-top: 8px;
          margin-bottom: 6px;
        }
        [data-theme='dark'] .catalog-title {
          color: var(--text-primary);
        }
        .catalog-subtitle {
          font-size: 1.02rem;
          color: var(--text-secondary);
        }
        .matcher-filter-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--color-gold-surface);
          border: 1px solid var(--border-gold);
          padding: 10px 18px;
          border-radius: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 10px;
        }
        .banner-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          color: var(--color-forest);
        }
        [data-theme='dark'] .banner-left {
          color: var(--color-gold-bright);
        }
        .btn-reset-filter {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 0.74rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: all 0.2s;
        }
        .btn-reset-filter:hover {
          background: var(--color-forest);
          color: #ffffff;
        }
        .controls-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .category-tabs-wrap {
          display: flex;
          gap: 7px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .category-tabs-wrap::-webkit-scrollbar {
          display: none;
        }
        .cat-tab-btn {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          padding: 7px 14px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cat-tab-btn:hover {
          border-color: var(--color-forest);
          color: var(--color-forest);
        }
        .cat-tab-btn.active {
          background: var(--color-forest);
          color: #ffffff;
          border-color: var(--color-forest);
          box-shadow: 0 4px 12px rgba(12, 54, 36, 0.2);
        }
        [data-theme='dark'] .cat-tab-btn.active {
          background: var(--color-gold);
          color: #051910;
          border-color: var(--color-gold);
        }
        .sort-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          padding: 5px 12px;
          border-radius: 9999px;
        }
        .sort-label {
          font-size: 0.74rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        .sort-select {
          background: transparent;
          border: none;
          color: var(--color-forest);
          font-size: 0.8rem;
          font-weight: 600;
          outline: none;
          cursor: pointer;
        }
        [data-theme='dark'] .sort-select {
          color: var(--text-primary);
        }
        .sort-select option {
          background: var(--bg-surface);
          color: var(--text-primary);
        }

        /* 4 columns on large desktop, 3 on tablet, 2 on mobile */
        .sarees-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .empty-catalog-notice {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding: 50px;
          text-align: center;
          color: var(--text-muted);
        }
        .kasavu-spotlight-section {
          padding: 30px 0 60px 0;
        }
        .kasavu-banner-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-gold);
          border-radius: 20px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          box-shadow: var(--shadow-card);
        }
        .kasavu-banner-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .kasavu-banner-title {
          font-size: 2rem;
          color: var(--color-forest);
          line-height: 1.25;
        }
        [data-theme='dark'] .kasavu-banner-title {
          color: var(--text-primary);
        }
        .kasavu-banner-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .kasavu-banner-actions {
          display: flex;
          gap: 12px;
          margin-top: 6px;
          flex-wrap: wrap;
        }
        .kasavu-banner-media {
          height: 100%;
          min-height: 360px;
          position: relative;
          background: #f7f4ed;
        }
        .kasavu-feature-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .floating-concierge {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 1050;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .concierge-bubble {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #16a34a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(22, 163, 74, 0.4);
          position: relative;
          transition: transform 0.25s ease;
          text-decoration: none;
        }
        .concierge-bubble:hover {
          transform: scale(1.08);
        }
        .concierge-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #22c55e;
          opacity: 0.6;
          animation: pulseGlow 2s infinite ease-out;
        }
        .concierge-tooltip {
          background: var(--bg-surface);
          border: 1px solid var(--border-gold);
          color: var(--color-forest);
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: var(--shadow-card);
          pointer-events: none;
          white-space: nowrap;
        }
        [data-theme='dark'] .concierge-tooltip {
          color: var(--color-gold-bright);
        }

        @media (max-width: 1100px) {
          .sarees-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 800px) {
          .kasavu-banner-card {
            grid-template-columns: 1fr;
          }
          .kasavu-banner-content {
            padding: 26px 20px;
          }
          .kasavu-banner-media {
            height: 260px;
            min-height: unset;
          }
          .desktop-only {
            display: none !important;
          }
        }

        /* Mobile-First 2-Column Grid on Mobile Phones */
        @media (max-width: 680px) {
          .sarees-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .catalog-title {
            font-size: 1.65rem;
          }
          .catalog-section {
            padding: 36px 0;
          }
          .controls-row {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  return (
    <ThemeProvider>
      <MainAppContent />
    </ThemeProvider>
  );
}
