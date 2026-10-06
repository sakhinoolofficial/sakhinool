'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2, ShoppingBag, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { Saree } from '../data/sarees';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Saree[];
  onRemoveWishlist: (sareeId: string) => void;
  onAddToCart: (saree: Saree) => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlist,
  onRemoveWishlist,
  onAddToCart
}: WishlistDrawerProps) {
  if (!isOpen) return null;

  const generateWishlistWhatsApp = () => {
    let msg = `🌸 *SAKHINOOL SAVED WISHLIST*\n`;
    msg += `Hello Sakhinool, I have short-listed these sarees on your website and would love to check availability:\n\n`;
    wishlist.forEach((saree, idx) => {
      const priceStr = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(saree.price);
      msg += `${idx + 1}. *${saree.name}* (${priceStr}) [SKU: ${saree.id}]\n`;
    });
    msg += `\nPlease guide me on color variations and delivery.`;
    return encodeURIComponent(msg);
  };

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <aside className="drawer-panel">
        <div className="drawer-header">
          <div className="drawer-title-wrap">
            <Heart size={20} className="text-gold" fill="#d4af37" />
            <h3 className="drawer-title font-royal">Your Wishlist</h3>
            <span className="drawer-count-badge">{wishlist.length} Saved</span>
          </div>
          <button type="button" className="drawer-close-btn" onClick={onClose} aria-label="Close wishlist">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-content">
          {wishlist.length === 0 ? (
            <div className="empty-state">
              <Heart size={40} className="text-gold" />
              <h4 className="font-royal">No Saved Sarees Yet</h4>
              <p className="font-editorial">Tap the heart icon on any saree to save it for your celebration.</p>
              <button type="button" className="btn-gold" onClick={onClose}>
                <span>Discover Sarees</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="wishlist-list">
              {wishlist.map((saree) => (
                <div key={saree.id} className="wishlist-item-card">
                  <div className="wishlist-thumb-wrap">
                    <Image
                      src={saree.image}
                      alt={saree.name}
                      width={70}
                      height={94}
                      className="wishlist-thumb"
                    />
                  </div>
                  <div className="wishlist-info">
                    <div className="wishlist-cat">{saree.category}</div>
                    <h4 className="wishlist-name font-royal">{saree.name}</h4>
                    <div className="wishlist-price font-royal">
                      {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                        maximumFractionDigits: 0
                      }).format(saree.price)}
                    </div>

                    <div className="wishlist-actions">
                      <button
                        type="button"
                        className="btn-move-bag"
                        onClick={() => {
                          onAddToCart(saree);
                          onRemoveWishlist(saree.id);
                        }}
                      >
                        <ShoppingBag size={14} />
                        <span>Move to Bag</span>
                      </button>

                      <button
                        type="button"
                        className="btn-delete"
                        onClick={() => onRemoveWishlist(saree.id)}
                        title="Remove"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {wishlist.length > 0 && (
          <div className="drawer-footer">
            <a
              href={`https://wa.me/917306045546?text=${generateWishlistWhatsApp()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <MessageCircle size={18} />
              <span>Share Wishlist on WhatsApp</span>
            </a>
          </div>
        )}
      </aside>

      <style jsx>{`
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          background: #061e13;
        }
        .drawer-title-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .drawer-title {
          font-size: 1.25rem;
          color: var(--gold-light);
        }
        .drawer-count-badge {
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: var(--gold-primary);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 9999px;
        }
        .drawer-close-btn {
          background: transparent;
          border: none;
          color: var(--cream-soft);
          cursor: pointer;
        }
        .drawer-content {
          flex: 1;
          overflow-y: auto;
          padding: 20px 24px;
        }
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          gap: 14px;
          padding: 40px 20px;
        }
        .wishlist-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .wishlist-item-card {
          display: flex;
          gap: 14px;
          background: rgba(5, 25, 16, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.2);
          padding: 12px;
          border-radius: 12px;
        }
        .wishlist-thumb-wrap {
          width: 70px;
          height: 94px;
          border-radius: 8px;
          overflow: hidden;
          background: #020905;
          flex-shrink: 0;
        }
        .wishlist-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .wishlist-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .wishlist-cat {
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--gold-burnished);
          font-weight: 700;
        }
        .wishlist-name {
          font-size: 0.95rem;
          color: var(--cream-soft);
          margin: 2px 0;
        }
        .wishlist-price {
          font-size: 1rem;
          color: var(--gold-primary);
          font-weight: 700;
        }
        .wishlist-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 6px;
        }
        .btn-move-bag {
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--gold-primary);
          color: var(--gold-light);
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }
        .btn-move-bag:hover {
          background: var(--gold-primary);
          color: var(--bg-deep-forest);
        }
        .btn-delete {
          background: transparent;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
        }
        .btn-delete:hover {
          color: #ef4444;
        }
        .drawer-footer {
          padding: 20px 24px;
          border-top: 1px solid rgba(212, 175, 55, 0.25);
          background: #061e13;
        }
      `}</style>
    </>
  );
}
