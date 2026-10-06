'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Check, Truck, ShieldCheck, Heart, ShoppingBag, MessageCircle, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { Saree, KERALA_DISTRICTS } from '../data/sarees';

interface SareeModalProps {
  saree: Saree | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (saree: Saree) => void;
  isWishlisted: boolean;
  onToggleWishlist: (saree: Saree) => void;
}

export default function SareeModal({
  saree,
  isOpen,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}: SareeModalProps) {
  const [selectedDistrict, setSelectedDistrict] = useState('Ernakulam (Kochi)');
  const [addedNotice, setAddedNotice] = useState(false);

  if (!isOpen || !saree) return null;

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

  const discountPercent = Math.round(
    ((saree.originalPrice - saree.price) / saree.originalPrice) * 100
  );

  const handleAdd = () => {
    onAddToCart(saree);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2200);
  };

  const whatsappMessage = encodeURIComponent(
    `Namaskaram Sakhinool! I am looking to order "${saree.name}" (SKU: ${saree.id}, ${formattedPrice}) for delivery to ${selectedDistrict}, Kerala. Please confirm availability and payment/booking process.`
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog sakhinool-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-content-grid">
          {/* Left Column: Big Visual Display */}
          <div className="modal-image-col">
            <div className="modal-image-frame">
              <Image
                src={saree.image}
                alt={saree.name}
                width={600}
                height={800}
                className="modal-saree-img"
              />
              {saree.badge && (
                <div className="modal-badge-pos">
                  <span className="badge-gold">
                    <Sparkles size={12} />
                    <span>{saree.badge}</span>
                  </span>
                </div>
              )}
            </div>
            
            <div className="modal-trust-strip">
              <div className="trust-pill">
                <ShieldCheck size={14} className="text-gold" />
                <span>100% Genuine Handloom</span>
              </div>
              <div className="trust-pill">
                <Sparkles size={14} className="text-gold" />
                <span>Pure Tested Zari</span>
              </div>
            </div>
          </div>

          {/* Right Column: Saree Details & Order Actions */}
          <div className="modal-details-col">
            <div className="details-header">
              <div className="details-category-row">
                <span className="details-category">{saree.category}</span>
                <span className="details-sku">SKU: {saree.id}</span>
              </div>

              <h2 className="details-title font-royal">{saree.name}</h2>
              <p className="details-tagline font-editorial">{saree.tagline}</p>
            </div>

            {/* Price Row */}
            <div className="details-price-row">
              <span className="price-main font-royal">{formattedPrice}</span>
              <span className="price-strike">{formattedOriginalPrice}</span>
              <span className="discount-tag">{discountPercent}% OFF Festive Price</span>
            </div>

            {/* Kerala Delivery Estimator */}
            <div className="kerala-delivery-box">
              <div className="delivery-box-title">
                <MapPin size={15} className="text-forest" />
                <span>Kerala Delivery Destination:</span>
              </div>
              <div className="district-select-wrap">
                <select 
                  value={selectedDistrict} 
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="district-select"
                >
                  {KERALA_DISTRICTS.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
              <div className="delivery-time-note">
                <Truck size={14} color="#16a34a" />
                <span>Estimated dispatch to <strong>{selectedDistrict}</strong>: 24 - 48 Hours (Express Handloom Courier)</span>
              </div>
            </div>

            {/* Saree Specifications Table */}
            <div className="specs-section">
              <h4 className="specs-heading font-royal">Artisanal Specifications</h4>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Fabric:</span>
                  <span className="spec-val">{saree.fabric}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Weave:</span>
                  <span className="spec-val">{saree.weave}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Zari:</span>
                  <span className="spec-val">{saree.zariType}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Length:</span>
                  <span className="spec-val">{saree.length}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Blouse Piece:</span>
                  <span className="spec-val">{saree.blousePiece}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Origin:</span>
                  <span className="spec-val">{saree.origin}</span>
                </div>
              </div>
            </div>

            {/* Description Narrative */}
            <div className="desc-section">
              <h4 className="specs-heading font-royal">The Weaver's Note</h4>
              <p className="desc-text font-editorial">{saree.description}</p>
            </div>

            {/* Care Guidance */}
            <div className="care-box">
              <AlertCircle size={15} className="text-gold" />
              <span><strong>Care Guide:</strong> {saree.careInstructions}</span>
            </div>

            {/* Action Buttons */}
            <div className="modal-cta-row">
              <button
                type="button"
                className="btn-forest flex-1"
                onClick={handleAdd}
              >
                <ShoppingBag size={17} />
                <span>{addedNotice ? '✓ Added to Bag' : 'Add to Order Bag'}</span>
              </button>

              <button
                type="button"
                className={`modal-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                onClick={() => onToggleWishlist(saree)}
                title="Save to Wishlist"
                aria-label="Wishlist"
              >
                <Heart size={18} fill={isWishlisted ? '#c59b27' : 'none'} color={isWishlisted ? '#c59b27' : 'var(--color-forest)'} />
              </button>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/917306045546?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <MessageCircle size={18} />
              <span>Order Directly via WhatsApp (+91 7306045546)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
