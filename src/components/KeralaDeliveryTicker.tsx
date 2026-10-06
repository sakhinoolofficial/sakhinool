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
    </section>
  );
}
