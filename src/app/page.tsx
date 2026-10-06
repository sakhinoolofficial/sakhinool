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
