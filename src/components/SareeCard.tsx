'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Eye, ShoppingBag, MessageCircle, Truck, Sparkles } from 'lucide-react';
import { Saree } from '../data/sarees';

interface SareeCardProps {
  saree: Saree;
  isWishlisted: boolean;
  onToggleWishlist: (saree: Saree) => void;
  onQuickView: (saree: Saree) => void;
  onAddToCart: (saree: Saree) => void;
}

export default function SareeCard({
  saree,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart
}: SareeCardProps) {
  const discountPercent = Math.round(
    ((saree.originalPrice - saree.price) / saree.originalPrice) * 100
  );

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(saree.price);

  const formattedOriginalPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(saree.originalPrice);

  const whatsappMessage = encodeURIComponent(
    `Namaskaram Sakhinool! I am interested in inquiring about "${saree.name}" (SKU: ${saree.id}, ${formattedPrice}). Could you please share more pictures, video drape, and delivery details for my district in Kerala?`
  );

  return (
    <div className="sakhinool-card saree-product-card">
      {/* Top Media Showcase */}
      <div className="card-media-wrapper">
        <Image
          src={saree.image}
          alt={saree.name}
          width={400}
          height={533}
          className="saree-card-img"
        />

        {/* Gradient Overlay */}
        <div className="card-image-gradient" />

        {/* Badge */}
        {saree.badge && (
          <div className="card-top-badge">
            <span className="badge-gold">
              <Sparkles size={11} />
              <span>{saree.badge}</span>
            </span>
          </div>
        )}

        {/* Top Right Quick Actions: Wishlist */}
        <div className="card-actions-top">
          <button
            type="button"
            className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(saree);
            }}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart size={18} fill={isWishlisted ? '#d4af37' : 'none'} color={isWishlisted ? '#d4af37' : '#fff'} />
          </button>
        </div>

        {/* Hover Quick View Trigger */}
        <button
          type="button"
          className="quick-view-overlay-btn"
          onClick={() => onQuickView(saree)}
        >
          <Eye size={16} />
          <span>Quick Drape View</span>
        </button>
      </div>

      {/* Card Content */}
      <div className="card-body">
        {/* Category & Origin */}
        <div className="card-meta-row">
          <span className="category-tag">{saree.category}</span>
          <span className="origin-tag font-editorial">{saree.origin}</span>
        </div>

        {/* Title */}
        <h3 
          className="saree-title font-royal" 
          onClick={() => onQuickView(saree)}
        >
          {saree.name}
        </h3>

        {/* Fabric & Zari snippet */}
        <p className="saree-tagline font-editorial">
          {saree.tagline}
        </p>

        {/* Kerala Express Dispatch Badge */}
        <div className="kerala-dispatch-pill">
          <Truck size={13} className="text-gold" />
          <span>Ready to Dispatch • All Kerala Districts</span>
        </div>

        {/* Pricing Row */}
        <div className="card-price-row">
          <div className="price-group">
            <span className="current-price font-royal">{formattedPrice}</span>
            <span className="original-price">{formattedOriginalPrice}</span>
            <span className="discount-pill">{discountPercent}% OFF</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-btn-group">
          <button
            type="button"
            className="btn-add-bag"
            onClick={() => onAddToCart(saree)}
          >
            <ShoppingBag size={16} />
            <span>Add to Bag</span>
          </button>

          <a
            href={`https://wa.me/917306045546?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-inquire"
            title="Inquire directly on WhatsApp"
          >
            <MessageCircle size={16} />
            <span>Inquire</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .saree-product-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
        }
        .card-media-wrapper {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
          background: #020b07;
        }
        .saree-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .saree-product-card:hover .saree-card-img {
          transform: scale(1.05);
        }
        .card-image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(5, 25, 16, 0.4) 0%, transparent 40%, rgba(5, 25, 16, 0.8) 100%);
          pointer-events: none;
        }
        .card-top-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
        }
        .card-actions-top {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
        }
        .wishlist-btn {
          background: rgba(10, 38, 26, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(212, 175, 55, 0.3);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .wishlist-btn:hover {
          background: rgba(212, 175, 55, 0.25);
          transform: scale(1.1);
        }
        .wishlist-btn.active {
          background: rgba(212, 175, 55, 0.2);
          border-color: var(--gold-primary);
        }
        .quick-view-overlay-btn {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          opacity: 0;
          background: rgba(10, 38, 26, 0.9);
          border: 1px solid var(--gold-primary);
          color: var(--gold-light);
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
          white-space: nowrap;
        }
        .saree-product-card:hover .quick-view-overlay-btn {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
        .quick-view-overlay-btn:hover {
          background: var(--gold-primary);
          color: var(--bg-deep-forest);
        }
        .card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 10px;
        }
        .card-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.76rem;
        }
        .category-tag {
          color: var(--gold-light);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.08em;
        }
        .origin-tag {
          color: var(--text-dim);
          font-style: italic;
        }
        .saree-title {
          font-size: 1.15rem;
          color: var(--cream-soft);
          line-height: 1.35;
          font-weight: 600;
          transition: color 0.2s;
        }
        .saree-title:hover {
          color: var(--gold-light);
        }
        .saree-tagline {
          font-size: 0.88rem;
          color: var(--cream-muted);
          line-height: 1.45;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .kerala-dispatch-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          color: #86efac;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 4px 8px;
          border-radius: 6px;
          width: fit-content;
        }
        .card-price-row {
          margin-top: auto;
          padding-top: 6px;
        }
        .price-group {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .current-price {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--gold-primary);
        }
        .original-price {
          font-size: 0.88rem;
          color: var(--text-dim);
          text-decoration: line-through;
        }
        .discount-pill {
          font-size: 0.7rem;
          background: rgba(220, 38, 38, 0.2);
          color: #fca5a5;
          border: 1px solid rgba(220, 38, 38, 0.35);
          padding: 1px 6px;
          border-radius: 4px;
          font-weight: 700;
        }
        .card-btn-group {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px;
          margin-top: 8px;
        }
        .btn-add-bag {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(10, 38, 26, 0.9) 100%);
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: var(--gold-light);
          font-weight: 600;
          font-size: 0.85rem;
          padding: 9px 12px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.25s ease;
        }
        .btn-add-bag:hover {
          background: var(--gold-primary);
          color: var(--bg-deep-forest);
          border-color: var(--gold-primary);
          transform: translateY(-1px);
        }
        .btn-whatsapp-inquire {
          background: rgba(37, 211, 102, 0.15);
          border: 1px solid rgba(37, 211, 102, 0.45);
          color: #4ade80;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 9px 14px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .btn-whatsapp-inquire:hover {
          background: #25d366;
          color: #04250f;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
