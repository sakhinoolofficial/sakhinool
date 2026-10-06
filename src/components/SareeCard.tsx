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
    </div>
  );
}
