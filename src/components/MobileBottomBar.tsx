'use client';

import React from 'react';
import { Home, Sparkles, Heart, ShoppingBag, MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

interface MobileBottomBarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onNavigateHome: () => void;
  onNavigateMatcher: () => void;
}

export default function MobileBottomBar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onNavigateHome,
  onNavigateMatcher
}: MobileBottomBarProps) {
  return (
    <aside className="mobile-bottom-bar" aria-label="Mobile Navigation">
      <div className="bottom-bar-inner">
        <button
          type="button"
          className="bottom-nav-item"
          onClick={onNavigateHome}
        >
          <Home size={20} />
          <span className="bottom-label">Home</span>
        </button>

        <button
          type="button"
          className="bottom-nav-item"
          onClick={onNavigateMatcher}
        >
          <Sparkles size={20} className="text-gold" />
          <span className="bottom-label highlight-label">Matcher</span>
        </button>

        <button
          type="button"
          className="bottom-nav-item relative"
          onClick={onOpenWishlist}
        >
          <Heart size={20} />
          {wishlistCount > 0 && (
            <span className="mobile-badge-pill">{wishlistCount}</span>
          )}
          <span className="bottom-label">Wishlist</span>
        </button>

        <button
          type="button"
          className="bottom-nav-item relative"
          onClick={onOpenCart}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="mobile-badge-pill">{cartCount}</span>
          )}
          <span className="bottom-label">Bag</span>
        </button>

        <a
          href="https://wa.me/917306045546?text=Namaskaram%20Sakhinool!%20I%20am%20browsing%20your%20saree%20collection%20on%20mobile%20and%20need%20assistance."
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-nav-item whatsapp-nav-item"
        >
          <MessageCircle size={20} />
          <span className="bottom-label">Stylist</span>
        </a>
      </div>
    </aside>
  );
}
