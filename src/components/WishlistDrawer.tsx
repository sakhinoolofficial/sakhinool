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
            <Heart size={18} className="text-gold" fill="#c59b27" />
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
              <Heart size={38} className="text-gold" />
              <h4 className="font-royal">No Saved Sarees Yet</h4>
              <p className="font-editorial">Tap the heart icon on any saree to save it for your celebration.</p>
              <button type="button" className="btn-forest" onClick={onClose}>
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
                        <ShoppingBag size={13} />
                        <span>Move to Bag</span>
                      </button>

                      <button
                        type="button"
                        className="btn-delete"
                        onClick={() => onRemoveWishlist(saree.id)}
                        title="Remove"
                        aria-label="Remove item"
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
          padding: 18px 22px;
          border-bottom: 1px solid var(--border-light);
          background: var(--bg-surface);
        }
        .drawer-title-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .drawer-title {
          font-size: 1.2rem;
          color: var(--color-forest);
        }
        [data-theme='dark'] .drawer-title {
          color: var(--text-primary);
        }
        .drawer-count-badge {
          background: var(--color-forest-surface);
          border: 1px solid var(--border-light);
          color: var(--color-forest);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 9999px;
        }
        [data-theme='dark'] .drawer-count-badge {
          color: var(--color-gold);
        }
        .drawer-close-btn {
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .drawer-content {
          flex: 1;
          overflow-y: auto;
          padding: 18px 20px;
        }
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          gap: 12px;
          padding: 30px 16px;
        }
        .empty-state h4 {
          font-size: 1.25rem;
          color: var(--color-forest);
        }
        [data-theme='dark'] .empty-state h4 {
          color: var(--text-primary);
        }
        .empty-state p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 260px;
        }
        .wishlist-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .wishlist-item-card {
          display: flex;
          gap: 12px;
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          padding: 10px;
          border-radius: 12px;
        }
        .wishlist-thumb-wrap {
          width: 66px;
          height: 88px;
          border-radius: 8px;
          overflow: hidden;
          background: #f7f4ed;
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
          font-size: 0.68rem;
          text-transform: uppercase;
          color: var(--color-gold);
          font-weight: 700;
        }
        .wishlist-name {
          font-size: 0.92rem;
          color: var(--text-primary);
          margin: 2px 0;
        }
        .wishlist-price {
          font-size: 0.96rem;
          color: var(--color-forest);
          font-weight: 700;
        }
        [data-theme='dark'] .wishlist-price {
          color: var(--color-gold-bright);
        }
        .wishlist-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }
        .btn-move-bag {
          background: var(--color-forest-surface);
          border: 1px solid var(--border-light);
          color: var(--color-forest);
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 0.76rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: all 0.2s;
        }
        [data-theme='dark'] .btn-move-bag {
          color: var(--color-gold-bright);
        }
        .btn-move-bag:hover {
          background: var(--color-forest);
          color: #ffffff;
        }
        .btn-delete {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }
        .btn-delete:hover {
          color: #dc2626;
        }
        .drawer-footer {
          padding: 16px 20px;
          border-top: 1px solid var(--border-light);
          background: var(--bg-surface);
        }
      `}</style>
    </>
  );
}
