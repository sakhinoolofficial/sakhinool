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
    <div className="sakhinool-card saree-product-card" onClick={() => onQuickView(saree)}>
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
              <Sparkles size={10} />
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
            aria-label="Wishlist"
          >
            <Heart size={16} fill={isWishlisted ? '#c59b27' : 'none'} color={isWishlisted ? '#c59b27' : '#ffffff'} />
          </button>
        </div>

        {/* Hover Quick View Trigger */}
        <button
          type="button"
          className="quick-view-overlay-btn"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(saree);
          }}
        >
          <Eye size={15} />
          <span>Quick View</span>
        </button>
      </div>

      {/* Card Content */}
      <div className="card-body">
        {/* Category & Origin */}
        <div className="card-meta-row">
          <span className="category-tag">{saree.category}</span>
          <span className="origin-tag font-editorial">{saree.origin.split(',')[0]}</span>
        </div>

        {/* Title */}
        <h3 className="saree-title font-royal">
          {saree.name}
        </h3>

        {/* Kerala Express Dispatch Badge */}
        <div className="kerala-dispatch-pill">
          <Truck size={12} className="text-forest" />
          <span>Kerala Express 24-48h</span>
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
        <div className="card-btn-group" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="btn-add-bag"
            onClick={() => onAddToCart(saree)}
          >
            <ShoppingBag size={14} />
            <span>Add to Bag</span>
          </button>

          <a
            href={`https://wa.me/917306045546?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-inquire"
            title="Inquire directly on WhatsApp"
            aria-label="Inquire on WhatsApp"
          >
            <MessageCircle size={15} />
            <span className="inquire-text">Inquire</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .saree-product-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
          border-radius: 14px;
        }
        .card-media-wrapper {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
          background: #f7f4ed;
        }
        .saree-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .saree-product-card:hover .saree-card-img {
          transform: scale(1.04);
        }
        .card-image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, transparent 40%, rgba(0, 0, 0, 0.5) 100%);
          pointer-events: none;
        }
        .card-top-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
        }
        .card-actions-top {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 2;
        }
        .wishlist-btn {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .wishlist-btn:hover {
          transform: scale(1.1);
        }
        .wishlist-btn.active {
          background: rgba(255, 255, 255, 0.9);
        }
        .quick-view-overlay-btn {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          opacity: 0;
          background: var(--bg-surface-glass);
          border: 1px solid var(--border-gold);
          color: var(--color-forest);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.76rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.25s ease;
          z-index: 2;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }
        .saree-product-card:hover .quick-view-overlay-btn {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
        .quick-view-overlay-btn:hover {
          background: var(--color-forest);
          color: #ffffff;
        }
        .card-body {
          padding: 14px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 7px;
        }
        .card-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.72rem;
        }
        .category-tag {
          color: var(--color-gold);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .origin-tag {
          color: var(--text-muted);
          font-style: italic;
        }
        .saree-title {
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.3;
          font-weight: 600;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .kerala-dispatch-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.7rem;
          color: #15803d;
          background: var(--color-forest-surface);
          border: 1px solid rgba(22, 163, 74, 0.2);
          padding: 2px 7px;
          border-radius: 5px;
          width: fit-content;
        }
        .card-price-row {
          margin-top: auto;
          padding-top: 4px;
        }
        .price-group {
          display: flex;
          align-items: baseline;
          gap: 6px;
          flex-wrap: wrap;
        }
        .current-price {
          font-size: 1.18rem;
          font-weight: 700;
          color: var(--color-forest);
        }
        [data-theme='dark'] .current-price {
          color: var(--color-gold-bright);
        }
        .original-price {
          font-size: 0.8rem;
          color: var(--text-dim);
          text-decoration: line-through;
        }
        .discount-pill {
          font-size: 0.65rem;
          background: rgba(220, 38, 38, 0.1);
          color: #dc2626;
          border: 1px solid rgba(220, 38, 38, 0.2);
          padding: 1px 5px;
          border-radius: 4px;
          font-weight: 700;
        }
        .card-btn-group {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 6px;
          margin-top: 6px;
        }
        .btn-add-bag {
          background: var(--color-forest-surface);
          border: 1px solid var(--border-light);
          color: var(--color-forest);
          font-weight: 700;
          font-size: 0.8rem;
          padding: 8px 10px;
          border-radius: 7px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          transition: all 0.2s ease;
        }
        [data-theme='dark'] .btn-add-bag {
          color: var(--color-gold-bright);
        }
        .btn-add-bag:hover {
          background: var(--color-forest);
          color: #ffffff;
        }
        .btn-whatsapp-inquire {
          background: rgba(22, 163, 74, 0.12);
          border: 1px solid rgba(22, 163, 74, 0.35);
          color: #16a34a;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 8px 12px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .btn-whatsapp-inquire:hover {
          background: #16a34a;
          color: #ffffff;
        }

        @media (max-width: 600px) {
          .card-body {
            padding: 10px;
            gap: 5px;
          }
          .saree-title {
            font-size: 0.92rem;
          }
          .current-price {
            font-size: 1rem;
          }
          .btn-add-bag span {
            font-size: 0.74rem;
          }
          .inquire-text {
            display: none;
          }
          .btn-whatsapp-inquire {
            padding: 8px 10px;
          }
        }
      `}</style>
    </div>
  );
}
