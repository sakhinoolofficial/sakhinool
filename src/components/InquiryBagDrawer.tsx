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
    </>
  );
}
