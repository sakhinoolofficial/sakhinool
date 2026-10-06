'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, MessageCircle, CreditCard, Sparkles, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
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
    msg += `\nPlease confirm availability and payment/delivery schedule. Thank you!`;

    return encodeURIComponent(msg);
  };

  const handleSimulatedOnlinePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlacedNotice(true);
    setTimeout(() => {
      setOrderPlacedNotice(false);
      onClearBag();
      onClose();
    }, 3000);
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
                <Sparkles size={36} className="text-gold" />
              </div>
              <h4 className="empty-title font-royal">Your Bag is Empty</h4>
              <p className="empty-desc font-editorial">
                Explore our handpicked collection of Kasavu, Kanchipuram, and golden tissue sarees.
              </p>
              <button
                type="button"
                className="btn-gold"
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
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-val">{quantity}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(saree.id, quantity + 1)}
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
                <MapPin size={14} className="text-gold" />
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
                  <MessageCircle size={20} />
                  <span>Send Order to WhatsApp (+91 7306045546)</span>
                </a>
                <p className="order-note font-editorial">
                  💬 Sakhinool Concierge will confirm your drape, color tone &amp; dispatch to {selectedDistrict}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSimulatedOnlinePayment} className="order-cta-box">
                {orderPlacedNotice ? (
                  <div className="order-success-banner">
                    <Sparkles size={18} className="text-gold" />
                    <span>Demo Order Recorded! Our team is preparing full gateway integration.</span>
                  </div>
                ) : (
                  <>
                    <button type="submit" className="btn-gold w-full">
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
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 50%;
        }
        .drawer-close-btn:hover {
          color: var(--gold-primary);
        }
        .mode-toggle-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 8px 16px;
          background: #04140d;
          gap: 8px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.15);
        }
        .mode-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-dim);
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mode-btn.active {
          background: rgba(212, 175, 55, 0.15);
          border-color: var(--gold-primary);
          color: var(--gold-light);
        }
        .drawer-content {
          flex: 1;
          overflow-y: auto;
          padding: 20px 24px;
        }
        .empty-cart-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          gap: 14px;
          padding: 40px 20px;
        }
        .empty-icon-wrap {
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .empty-title {
          font-size: 1.3rem;
          color: var(--cream-soft);
        }
        .empty-desc {
          font-size: 0.95rem;
          color: var(--cream-muted);
          max-width: 280px;
        }
        .cart-items-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cart-item-row {
          display: flex;
          gap: 14px;
          background: rgba(5, 25, 16, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.2);
          padding: 12px;
          border-radius: 12px;
        }
        .cart-item-img-wrap {
          width: 70px;
          height: 94px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
          background: #020905;
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
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--gold-burnished);
          font-weight: 700;
        }
        .btn-remove-item {
          background: transparent;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
        }
        .btn-remove-item:hover {
          color: #ef4444;
        }
        .cart-item-name {
          font-size: 0.96rem;
          color: var(--cream-soft);
          margin: 2px 0 6px 0;
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
          gap: 8px;
          background: #071f15;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 6px;
          padding: 2px 6px;
        }
        .qty-btn {
          background: transparent;
          border: none;
          color: var(--gold-light);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
        }
        .qty-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .qty-val {
          font-size: 0.8rem;
          font-weight: 700;
          min-width: 16px;
          text-align: center;
        }
        .cart-item-price {
          font-size: 1rem;
          font-weight: 700;
          color: var(--gold-primary);
        }
        .drawer-footer {
          padding: 20px 24px;
          border-top: 1px solid rgba(212, 175, 55, 0.25);
          background: #061e13;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .drawer-dest-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .dest-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--gold-light);
        }
        .drawer-dest-select {
          background: #04140d;
          border: 1px solid rgba(212, 175, 55, 0.35);
          color: var(--cream-soft);
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 0.84rem;
          outline: none;
        }
        .drawer-text-input {
          width: 100%;
          background: #04140d;
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: var(--cream-soft);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.84rem;
          outline: none;
        }
        .summary-breakdown {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 10px 0;
          border-top: 1px dashed rgba(212, 175, 55, 0.2);
          border-bottom: 1px dashed rgba(212, 175, 55, 0.2);
          font-size: 0.84rem;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          color: var(--cream-muted);
        }
        .text-savings {
          color: #fca5a5;
        }
        .text-emerald {
          color: #34d399;
        }
        .total-line {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--cream-soft);
          padding-top: 4px;
        }
        .total-val {
          color: var(--gold-primary);
        }
        .order-cta-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .order-note {
          font-size: 0.78rem;
          color: var(--text-dim);
          text-align: center;
        }
        .order-success-banner {
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--gold-primary);
          color: var(--gold-light);
          padding: 12px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.84rem;
        }
      `}</style>
    </>
  );
}
