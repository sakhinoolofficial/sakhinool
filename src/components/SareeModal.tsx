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

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(8, 25, 17, 0.6);
          backdrop-filter: blur(8px);
          z-index: 1200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }
        .modal-dialog {
          max-width: 940px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-surface);
          border: 1px solid var(--border-gold);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          position: relative;
          border-radius: 20px;
        }
        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
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
          background: var(--color-forest);
          color: #ffffff;
        }
        .modal-content-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 28px;
          padding: 28px;
        }
        .modal-image-frame {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 3/4;
          background: #f7f4ed;
          border: 1px solid var(--border-light);
        }
        .modal-saree-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-badge-pos {
          position: absolute;
          top: 12px;
          left: 12px;
        }
        .modal-trust-strip {
          display: flex;
          gap: 8px;
          margin-top: 12px;
          flex-wrap: wrap;
        }
        .trust-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--color-forest-surface);
          border: 1px solid var(--border-light);
          color: var(--color-forest);
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 9999px;
          font-weight: 600;
        }
        [data-theme='dark'] .trust-pill {
          color: var(--color-gold-bright);
        }
        .modal-details-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .details-category-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.74rem;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
        }
        .details-title {
          font-size: 1.55rem;
          color: var(--color-forest);
          line-height: 1.25;
          margin-top: 2px;
        }
        [data-theme='dark'] .details-title {
          color: var(--text-primary);
        }
        .details-tagline {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }
        .details-price-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }
        .price-main {
          font-size: 1.65rem;
          font-weight: 700;
          color: var(--color-forest);
        }
        [data-theme='dark'] .price-main {
          color: var(--color-gold-bright);
        }
        .price-strike {
          font-size: 1rem;
          color: var(--text-dim);
          text-decoration: line-through;
        }
        .discount-tag {
          font-size: 0.72rem;
          background: rgba(220, 38, 38, 0.1);
          color: #dc2626;
          border: 1px solid rgba(220, 38, 38, 0.25);
          padding: 2px 7px;
          border-radius: 4px;
          font-weight: 700;
        }
        .kerala-delivery-box {
          background: var(--bg-subtle-green);
          border: 1px solid var(--border-light);
          padding: 12px 14px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .delivery-box-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-forest);
        }
        .district-select {
          width: 100%;
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          padding: 7px 10px;
          border-radius: 7px;
          font-size: 0.84rem;
          outline: none;
        }
        .delivery-time-note {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: #15803d;
        }
        .specs-section {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .specs-heading {
          font-size: 0.92rem;
          color: var(--color-forest);
          letter-spacing: 0.04em;
        }
        [data-theme='dark'] .specs-heading {
          color: var(--color-gold-bright);
        }
        .specs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 5px;
          font-size: 0.8rem;
          background: var(--bg-secondary);
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid var(--border-light);
        }
        .spec-item {
          display: flex;
          gap: 8px;
        }
        .spec-label {
          color: var(--color-forest);
          font-weight: 700;
          min-width: 90px;
        }
        [data-theme='dark'] .spec-label {
          color: var(--color-gold);
        }
        .spec-val {
          color: var(--text-secondary);
        }
        .desc-text {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .care-box {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          background: var(--color-gold-surface);
          border: 1px solid var(--border-gold);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.76rem;
          color: var(--text-secondary);
        }
        .modal-cta-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .flex-1 {
          flex: 1;
        }
        .modal-wishlist-btn {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .modal-wishlist-btn:hover {
          border-color: var(--color-gold);
        }

        @media (max-width: 800px) {
          .modal-backdrop {
            padding: 0;
            align-items: flex-end;
          }
          .modal-dialog {
            max-height: 92vh;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .modal-content-grid {
            grid-template-columns: 1fr;
            padding: 20px 16px 80px 16px;
            gap: 18px;
          }
          .modal-image-frame {
            max-height: 280px;
          }
        }
      `}</style>
    </div>
  );
}
