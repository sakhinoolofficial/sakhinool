'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, MessageCircle, CreditCard, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { Saree, KERALA_DISTRICTS } from '../data/sarees';

export interface CartItem {
  saree: Saree;
  quantity: number;
}

interface InquiryBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (sareeId: string, quantity: number) => void;
  onRemoveItem: (sareeId: string) => void;
  onClearBag: () => void;
}

export default function InquiryBagDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag
}: InquiryBagDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('Ernakulam (Kochi)');
  const [customerNotes, setCustomerNotes] = useState('');
  const [checkoutMode, setCheckoutMode] = useState<'whatsapp' | 'online'>('whatsapp');
  const [orderPlacedNotice, setOrderPlacedNotice] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.saree.price * item.quantity, 0);
  const originalSubtotal = items.reduce((acc, item) => acc + item.saree.originalPrice * item.quantity, 0);
  const savings = originalSubtotal - subtotal;
  const shipping = subtotal > 3000 ? 0 : 150;
  const grandTotal = subtotal + shipping;

  const formattedSubtotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(subtotal);

  const formattedGrandTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(grandTotal);

  // Generate WhatsApp Order Message
  const generateWhatsAppMessage = () => {
    let msg = `🌸 *SAKHINOOL ORDER INQUIRY*\n`;
    if (customerName.trim()) {
      msg += `*Customer:* ${customerName.trim()}\n`;
    }
    msg += `*Delivery Destination:* ${selectedDistrict}, Kerala\n\n`;
    msg += `*Selected Sarees:*\n`;

    items.forEach((item, idx) => {
      const itemPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(item.saree.price * item.quantity);
      msg += `${idx + 1}. *${item.saree.name}* (Qty: ${item.quantity}) - ${itemPrice} [SKU: ${item.saree.id}]\n`;
    });

    msg += `\n*Estimated Total:* ${formattedGrandTotal} (Shipping: ${shipping === 0 ? 'FREE across Kerala' : '₹150'})\n`;
    if (customerNotes.trim()) {
      msg += `*Special Request:* ${customerNotes.trim()}\n`;
    }
    msg += `\nPlease confirm availability and dispatch schedule. Thank you!`;

    return encodeURIComponent(msg);
  };

  const handleSimulatedOnlinePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlacedNotice(true);
    setTimeout(() => {
      setOrderPlacedNotice(false);
      onClearBag();
      onClose();
    }, 2800);
  };

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <aside className="drawer-panel">
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-title-wrap">
            <h3 className="drawer-title font-royal">Your Sakhinool Bag</h3>
            <span className="drawer-count-badge">{items.reduce((a, b) => a + b.quantity, 0)} Items</span>
          </div>
          <button type="button" className="drawer-close-btn" onClick={onClose} aria-label="Close bag">
            <X size={20} />
          </button>
        </div>

        {/* Mode Selector */}
        <div className="mode-toggle-bar">
          <button
            type="button"
            className={`mode-btn ${checkoutMode === 'whatsapp' ? 'active' : ''}`}
            onClick={() => setCheckoutMode('whatsapp')}
          >
            <MessageCircle size={15} />
            <span>Instant WhatsApp Order</span>
          </button>
          <button
            type="button"
            className={`mode-btn ${checkoutMode === 'online' ? 'active' : ''}`}
            onClick={() => setCheckoutMode('online')}
          >
            <CreditCard size={15} />
            <span>Card / UPI (Beta)</span>
          </button>
        </div>

        {/* Content */}
        <div className="drawer-content">
          {items.length === 0 ? (
            <div className="empty-cart-state">
              <div className="empty-icon-wrap">
                <Sparkles size={34} className="text-gold" />
              </div>
              <h4 className="empty-title font-royal">Your Bag is Empty</h4>
              <p className="empty-desc font-editorial">
                Explore our handpicked collection of Kasavu, Kanchipuram, and golden tissue sarees.
              </p>
              <button
                type="button"
                className="btn-forest"
                onClick={onClose}
              >
                <span>Browse Collections</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {items.map(({ saree, quantity }) => (
                <div key={saree.id} className="cart-item-row">
                  <div className="cart-item-img-wrap">
                    <Image
                      src={saree.image}
                      alt={saree.name}
                      width={80}
                      height={106}
                      className="cart-thumb"
                    />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-top">
                      <span className="cart-item-cat">{saree.category}</span>
                      <button
                        type="button"
                        className="btn-remove-item"
                        onClick={() => onRemoveItem(saree.id)}
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <h4 className="cart-item-name font-royal">{saree.name}</h4>

                    <div className="cart-item-bottom">
                      <div className="quantity-controls">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(saree.id, quantity - 1)}
                          disabled={quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-val">{quantity}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(saree.id, quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="cart-item-price font-royal">
                        {new Intl.NumberFormat('en-IN', {
                          style: 'currency',
                          currency: 'INR',
                          maximumFractionDigits: 0
                        }).format(saree.price * quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Order Summary & WhatsApp Action */}
        {items.length > 0 && (
          <div className="drawer-footer">
            {/* Delivery Destination Selector */}
            <div className="drawer-dest-group">
              <label className="dest-label">
                <MapPin size={13} className="text-forest" />
                <span>Kerala Shipping District:</span>
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="drawer-dest-select"
              >
                {KERALA_DISTRICTS.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            {/* Optional Customer Name */}
            <div className="drawer-input-row">
              <input
                type="text"
                placeholder="Your Name (Optional)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="drawer-text-input"
              />
            </div>

            {/* Price Calculations */}
            <div className="summary-breakdown">
              <div className="summary-line">
                <span>Subtotal ({items.reduce((a, b) => a + b.quantity, 0)} items)</span>
                <span>{formattedSubtotal}</span>
              </div>
              {savings > 0 && (
                <div className="summary-line text-savings">
                  <span>Festive Discount Savings</span>
                  <span>-₹{savings.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="summary-line">
                <span>Kerala Express Delivery</span>
                <span>{shipping === 0 ? <strong className="text-emerald">FREE</strong> : '₹150'}</span>
              </div>
              <div className="summary-line total-line font-royal">
                <span>Estimated Total:</span>
                <span className="total-val">{formattedGrandTotal}</span>
              </div>
            </div>

            {/* Actions based on Mode */}
            {checkoutMode === 'whatsapp' ? (
              <div className="order-cta-box">
                <a
                  href={`https://wa.me/917306045546?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <MessageCircle size={18} />
                  <span>Send Order to WhatsApp (+91 7306045546)</span>
                </a>
                <p className="order-note font-editorial">
                  💬 Sakhinool Concierge will confirm your drape &amp; dispatch to {selectedDistrict}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSimulatedOnlinePayment} className="order-cta-box">
                {orderPlacedNotice ? (
                  <div className="order-success-banner">
                    <Sparkles size={18} className="text-gold" />
                    <span>Demo Order Recorded! Online gateway integration in progress.</span>
                  </div>
                ) : (
                  <>
                    <button type="submit" className="btn-forest w-full">
                      <CreditCard size={18} />
                      <span>Proceed with Online Checkout ({formattedGrandTotal})</span>
                    </button>
                    <p className="order-note font-editorial">
                      🔒 Secure Checkout (UPI, GPay, PhonePe, Cards) transitioning to full gateway.
                    </p>
                  </>
                )}
              </form>
            )}
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
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }
        .mode-toggle-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 8px 16px;
          background: var(--bg-secondary);
          gap: 8px;
          border-bottom: 1px solid var(--border-light);
        }
        .mode-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-muted);
          padding: 7px 10px;
          border-radius: 8px;
          font-size: 0.76rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mode-btn.active {
          background: var(--bg-surface);
          border-color: var(--border-light);
          color: var(--color-forest);
          box-shadow: var(--shadow-sm);
        }
        [data-theme='dark'] .mode-btn.active {
          color: var(--color-gold-bright);
        }
        .drawer-content {
          flex: 1;
          overflow-y: auto;
          padding: 18px 20px;
        }
        .empty-cart-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          gap: 12px;
          padding: 30px 16px;
        }
        .empty-icon-wrap {
          background: var(--color-gold-surface);
          border: 1px solid var(--border-gold);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .empty-title {
          font-size: 1.25rem;
          color: var(--color-forest);
        }
        [data-theme='dark'] .empty-title {
          color: var(--text-primary);
        }
        .empty-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 260px;
        }
        .cart-items-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cart-item-row {
          display: flex;
          gap: 12px;
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          padding: 10px;
          border-radius: 12px;
        }
        .cart-item-img-wrap {
          width: 66px;
          height: 88px;
          border-radius: 8px;
          overflow: hidden;
          background: #f7f4ed;
          flex-shrink: 0;
        }
        .cart-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cart-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .cart-item-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cart-item-cat {
          font-size: 0.68rem;
          text-transform: uppercase;
          color: var(--color-gold);
          font-weight: 700;
        }
        .btn-remove-item {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }
        .btn-remove-item:hover {
          color: #dc2626;
        }
        .cart-item-name {
          font-size: 0.92rem;
          color: var(--text-primary);
          margin: 2px 0 4px 0;
          line-height: 1.3;
        }
        .cart-item-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 6px;
          padding: 2px 5px;
        }
        .qty-btn {
          background: transparent;
          border: none;
          color: var(--color-forest);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qty-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .qty-val {
          font-size: 0.78rem;
          font-weight: 700;
          min-width: 16px;
          text-align: center;
        }
        .cart-item-price {
          font-size: 0.96rem;
          font-weight: 700;
          color: var(--color-forest);
        }
        [data-theme='dark'] .cart-item-price {
          color: var(--color-gold-bright);
        }
        .drawer-footer {
          padding: 16px 20px;
          border-top: 1px solid var(--border-light);
          background: var(--bg-surface);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .drawer-dest-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .dest-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--color-forest);
        }
        .drawer-dest-select {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          padding: 7px 10px;
          border-radius: 7px;
          font-size: 0.82rem;
          outline: none;
        }
        .drawer-text-input {
          width: 100%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          padding: 7px 10px;
          border-radius: 7px;
          font-size: 0.82rem;
          outline: none;
        }
        .summary-breakdown {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 8px 0;
          border-top: 1px dashed var(--border-light);
          border-bottom: 1px dashed var(--border-light);
          font-size: 0.82rem;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          color: var(--text-secondary);
        }
        .text-savings {
          color: #dc2626;
        }
        .text-emerald {
          color: #16a34a;
        }
        .total-line {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          padding-top: 3px;
        }
        .total-val {
          color: var(--color-forest);
        }
        [data-theme='dark'] .total-val {
          color: var(--color-gold-bright);
        }
        .order-cta-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .order-note {
          font-size: 0.74rem;
          color: var(--text-muted);
          text-align: center;
        }
        .order-success-banner {
          background: var(--color-gold-surface);
          border: 1px solid var(--border-gold);
          color: var(--color-forest);
          padding: 10px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
        }
      `}</style>
    </>
  );
}
