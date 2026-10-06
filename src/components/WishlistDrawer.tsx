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
    </>
  );
}
