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
              <div className="modal-img-vignette" />
              {saree.badge && (
                <div className="modal-badge-pos">
                  <span className="badge-gold">
                    <Sparkles size={13} />
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
                <span>Pure Zari &amp; Tested Core</span>
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
                <MapPin size={16} className="text-gold" />
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
                <Truck size={14} color="#34d399" />
                <span>Estimated dispatch to <strong>{selectedDistrict}</strong>: 24 - 48 Hours (Express Courier)</span>
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
                className="btn-gold flex-1"
                onClick={handleAdd}
              >
                <ShoppingBag size={18} />
                <span>{addedNotice ? '✓ Added to Bag' : 'Add to Order Bag'}</span>
              </button>

              <button
                type="button"
                className={`modal-wishlist-btn ${isWishlisted ? 'active' : ''}`}
                onClick={() => onToggleWishlist(saree)}
                title="Save to Wishlist"
              >
                <Heart size={20} fill={isWishlisted ? '#d4af37' : 'none'} color={isWishlisted ? '#d4af37' : '#fff'} />
              </button>
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/917306045546?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <MessageCircle size={19} />
              <span>Order Directly via WhatsApp (+91 7306045546)</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(3, 15, 10, 0.85);
          backdrop-filter: blur(10px);
          z-index: 1100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.25s ease-out;
        }
        .modal-dialog {
          max-width: 980px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          background: #072115;
          border: 1px solid rgba(212, 175, 55, 0.4);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(212, 175, 55, 0.2);
          position: relative;
        }
        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          background: rgba(10, 38, 26, 0.8);
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: var(--gold-light);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
        }
        .modal-close-btn:hover {
          background: var(--gold-primary);
          color: var(--bg-deep-forest);
        }
        .modal-content-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
          padding: 32px;
        }
        .modal-image-frame {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 3/4;
          background: #020a06;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }
        .modal-saree-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-img-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(5, 25, 16, 0.6) 100%);
          pointer-events: none;
        }
        .modal-badge-pos {
          position: absolute;
          top: 14px;
          left: 14px;
        }
        .modal-trust-strip {
          display: flex;
          gap: 10px;
          margin-top: 14px;
          flex-wrap: wrap;
        }
        .trust-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.25);
          color: var(--gold-light);
          font-size: 0.72rem;
          padding: 5px 10px;
          border-radius: 9999px;
        }
        .modal-details-col {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .details-category-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          color: var(--gold-burnished);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
        }
        .details-title {
          font-size: 1.7rem;
          color: var(--cream-soft);
          line-height: 1.25;
          margin-top: 4px;
        }
        .details-tagline {
          font-size: 0.98rem;
          color: var(--cream-muted);
          margin-top: 4px;
        }
        .details-price-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.15);
        }
        .price-main {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--gold-primary);
        }
        .price-strike {
          font-size: 1.05rem;
          color: var(--text-dim);
          text-decoration: line-through;
        }
        .discount-tag {
          font-size: 0.76rem;
          background: rgba(220, 38, 38, 0.2);
          color: #fca5a5;
          border: 1px solid rgba(220, 38, 38, 0.4);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 700;
        }
        .kerala-delivery-box {
          background: rgba(10, 38, 26, 0.75);
          border: 1px solid rgba(212, 175, 55, 0.25);
          padding: 14px 16px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .delivery-box-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--gold-light);
        }
        .district-select {
          width: 100%;
          background: #051910;
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: var(--cream-soft);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.88rem;
          outline: none;
        }
        .delivery-time-note {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #a7f3d0;
        }
        .specs-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .specs-heading {
          font-size: 0.95rem;
          color: var(--gold-light);
          letter-spacing: 0.05em;
        }
        .specs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
          font-size: 0.82rem;
          background: rgba(5, 25, 16, 0.5);
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgba(212, 175, 55, 0.15);
        }
        .spec-item {
          display: flex;
          gap: 8px;
        }
        .spec-label {
          color: var(--gold-burnished);
          font-weight: 600;
          min-width: 90px;
        }
        .spec-val {
          color: var(--cream-soft);
        }
        .desc-text {
          font-size: 0.94rem;
          color: var(--cream-muted);
          line-height: 1.55;
        }
        .care-box {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.2);
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 0.78rem;
          color: var(--cream-muted);
        }
        .modal-cta-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .flex-1 {
          flex: 1;
        }
        .modal-wishlist-btn {
          background: rgba(10, 38, 26, 0.8);
          border: 1px solid rgba(212, 175, 55, 0.35);
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .modal-wishlist-btn:hover {
          background: rgba(212, 175, 55, 0.2);
          border-color: var(--gold-primary);
        }
        .modal-wishlist-btn.active {
          border-color: var(--gold-primary);
        }

        @media (max-width: 840px) {
          .modal-content-grid {
            grid-template-columns: 1fr;
            padding: 20px;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
