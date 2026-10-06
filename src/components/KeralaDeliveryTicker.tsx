import React from 'react';
import { Truck, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { KERALA_DISTRICTS } from '../data/sarees';

export default function KeralaDeliveryTicker() {
  return (
    <section className="delivery-ticker-section">
      <div className="ticker-wrapper">
        <div className="ticker-inner animate-marquee">
          {/* Loop twice for smooth continuous marquee */}
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="ticker-content-group">
              <span className="ticker-badge">
                <Truck size={14} className="text-gold" />
                <span>EXPRESS KERALA SHIPPING</span>
              </span>
              {KERALA_DISTRICTS.map((district, dIdx) => (
                <React.Fragment key={`${loopIdx}-${dIdx}`}>
                  <span className="district-item">{district}</span>
                  <span className="ticker-star">✦</span>
                </React.Fragment>
              ))}
              <span className="ticker-badge">
                <ShieldCheck size={14} className="text-gold" />
                <span>SILK MARK &amp; HANDLOOM CERTIFIED</span>
              </span>
              <span className="ticker-star">✦</span>
              <span className="ticker-badge">
                <HeartHandshake size={14} className="text-gold" />
                <span>WHATSAPP CONCIERGE: +91 7306045546</span>
              </span>
              <span className="ticker-star">✦</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .delivery-ticker-section {
          background: #04130c;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          overflow: hidden;
          padding: 10px 0;
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
          gap: 16px;
          padding-right: 16px;
        }
        .ticker-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.35);
          color: var(--gold-light);
          padding: 3px 10px;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
        }
        .district-item {
          color: var(--cream-soft);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.04em;
        }
        .ticker-star {
          color: var(--gold-primary);
          font-size: 0.7rem;
          opacity: 0.6;
        }
      `}</style>
    </section>
  );
}
