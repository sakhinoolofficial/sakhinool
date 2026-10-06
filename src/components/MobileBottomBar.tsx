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

      <style jsx>{`
        .mobile-bottom-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: var(--bg-surface-glass);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-top: 1px solid var(--border-light);
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);
          padding-bottom: env(safe-area-inset-bottom, 8px);
        }
        .bottom-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 60px;
          padding: 0 8px;
        }
        .bottom-nav-item {
          background: transparent;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          color: var(--text-secondary);
          cursor: pointer;
          position: relative;
          padding: 6px 12px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
          flex: 1;
        }
        .bottom-nav-item:active {
          transform: scale(0.94);
        }
        .bottom-label {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .highlight-label {
          color: var(--color-gold);
        }
        .whatsapp-nav-item {
          color: #16a34a;
        }
        .mobile-badge-pill {
          position: absolute;
          top: 3px;
          right: 18px;
          background: var(--color-gold);
          color: #ffffff;
          font-size: 0.62rem;
          font-weight: 800;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .mobile-bottom-bar {
            display: block;
          }
        }
      `}</style>
    </aside>
  );
}
