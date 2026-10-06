import React from 'react';
import { Truck, ShieldCheck, HeartHandshake } from 'lucide-react';
import { KERALA_DISTRICTS } from '../data/sarees';

export default function KeralaDeliveryTicker() {
  return (
    <section className="delivery-ticker-section">
      <div className="ticker-wrapper">
        <div className="ticker-inner animate-marquee">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="ticker-content-group">
              <span className="ticker-badge">
                <Truck size={13} className="text-gold" />
                <span>EXPRESS KERALA SHIPPING</span>
              </span>
              {KERALA_DISTRICTS.map((district, dIdx) => (
                <React.Fragment key={`${loopIdx}-${dIdx}`}>
                  <span className="district-item">{district}</span>
                  <span className="ticker-star text-gold">✦</span>
                </React.Fragment>
              ))}
              <span className="ticker-badge">
                <ShieldCheck size={13} className="text-gold" />
                <span>SILK MARK &amp; HANDLOOM CERTIFIED</span>
              </span>
              <span className="ticker-star text-gold">✦</span>
              <span className="ticker-badge">
                <HeartHandshake size={13} className="text-gold" />
                <span>WHATSAPP CONCIERGE: +91 7306045546</span>
              </span>
              <span className="ticker-star text-gold">✦</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .delivery-ticker-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          overflow: hidden;
          padding: 8px 0;
          position: relative;
        }
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker-inner {
          display: flex;
          align-items: center;
        }
        .ticker-content-group {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-right: 14px;
        }
        .ticker-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: var(--color-forest-surface);
          border: 1px solid var(--border-light);
          color: var(--color-forest);
          padding: 3px 9px;
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        [data-theme='dark'] .ticker-badge {
          color: var(--color-gold-bright);
        }
        .district-item {
          color: var(--text-primary);
          font-size: 0.76rem;
          font-weight: 500;
          letter-spacing: 0.03em;
        }
        .ticker-star {
          font-size: 0.65rem;
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
}
