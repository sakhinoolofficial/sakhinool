'use client';

import React, { useState } from 'react';
import { Sparkles, Check, ArrowDown, HelpCircle, HeartHandshake } from 'lucide-react';
import { Saree } from '../data/sarees';

interface SareeMatcherProps {
  onMatchFilter: (occasion: string, fabric: string, maxPrice: number) => void;
  sarees: Saree[];
}

export default function SareeMatcher({ onMatchFilter, sarees }: SareeMatcherProps) {
  const [selectedOccasion, setSelectedOccasion] = useState('All');
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState(25000);

  const occasions = [
    { id: 'All', label: 'All Celebrations' },
    { id: 'Temple & Onam/Vishu', label: '🪔 Temple & Onam / Vishu' },
    { id: 'Wedding & Bridal', label: '💍 Wedding & Muhurtham' },
    { id: 'Reception', label: '✨ Evening Reception & Party' },
  ];

  const fabrics = [
    { id: 'All', label: 'All Handlooms' },
    { id: 'Pure Silk', label: '👑 Pure Mulberry Silk' },
    { id: 'Kasavu', label: '🌿 Authentic Kerala Kasavu' },
    { id: 'Tissue', label: '✨ Golden Metallic Tissue' },
    { id: 'Organza', label: '🌸 Featherlight Organza' },
  ];

  const budgetOptions = [
    { max: 7000, label: 'Under ₹7,000 (Kasavu & Organza)' },
    { max: 12000, label: 'Under ₹12,000 (Tissue & Festive Silk)' },
    { max: 25000, label: 'All Budgets (Up to Luxury Heirlooms)' },
  ];

  // Calculate live matching saree count
  const matchingCount = sarees.filter(s => {
    const matchOccasion = selectedOccasion === 'All' || s.suitableOccasions.some(o => o.includes(selectedOccasion));
    const matchFabric = selectedFabric === 'All' || s.fabric.toLowerCase().includes(selectedFabric.toLowerCase()) || s.category.toLowerCase().includes(selectedFabric.toLowerCase());
    const matchPrice = s.price <= selectedBudget;
    return matchOccasion && matchFabric && matchPrice;
  }).length;

  const handleApply = () => {
    onMatchFilter(selectedOccasion, selectedFabric, selectedBudget);
    const catalogElem = document.getElementById('collections');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="saree-matcher" className="saree-matcher-section">
      <div className="container-custom">
        <div className="matcher-card">
          <div className="matcher-header">
            <span className="badge-gold">
              <Sparkles size={14} />
              <span>INTERACTIVE STYLIST ASSISTANT</span>
            </span>
            <h2 className="matcher-title font-royal">
              Find Your <span className="text-gold-gradient">Soul Saree</span> in 3 Clicks
            </h2>
            <p className="matcher-subtitle font-editorial">
              Whether you are preparing for a Guruvayur wedding, a family Onam sadhya, or a modern cocktail in Kochi, our Sakhinool Drape Guide matches you with the ideal weave.
            </p>
          </div>

          <div className="matcher-grid">
            {/* 1. Occasion */}
            <div className="step-column">
              <div className="step-label">
                <span className="step-number">1</span>
                <span>Select Occasion</span>
              </div>
              <div className="pill-options">
                {occasions.map(occ => (
                  <button
                    key={occ.id}
                    type="button"
                    className={`pill-btn ${selectedOccasion === occ.id ? 'active' : ''}`}
                    onClick={() => setSelectedOccasion(occ.id)}
                  >
                    <span>{occ.label}</span>
                    {selectedOccasion === occ.id && <Check size={14} className="check-icon" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Fabric Preference */}
            <div className="step-column">
              <div className="step-label">
                <span className="step-number">2</span>
                <span>Preferred Weave</span>
              </div>
              <div className="pill-options">
                {fabrics.map(fab => (
                  <button
                    key={fab.id}
                    type="button"
                    className={`pill-btn ${selectedFabric === fab.id ? 'active' : ''}`}
                    onClick={() => setSelectedFabric(fab.id)}
                  >
                    <span>{fab.label}</span>
                    {selectedFabric === fab.id && <Check size={14} className="check-icon" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Budget */}
            <div className="step-column">
              <div className="step-label">
                <span className="step-number">3</span>
                <span>Budget Range</span>
              </div>
              <div className="pill-options">
                {budgetOptions.map(bud => (
                  <button
                    key={bud.max}
                    type="button"
                    className={`pill-btn ${selectedBudget === bud.max ? 'active' : ''}`}
                    onClick={() => setSelectedBudget(bud.max)}
                  >
                    <span>{bud.label}</span>
                    {selectedBudget === bud.max && <Check size={14} className="check-icon" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="matcher-footer">
            <div className="matches-preview">
              <span className="match-num">{matchingCount}</span>
              <span className="match-text">Handcrafted Sarees Match Your Preference</span>
            </div>

            <button
              type="button"
              className="btn-gold"
              onClick={handleApply}
            >
              <span>View Matching Sarees</span>
              <ArrowDown size={17} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .saree-matcher-section {
          padding: 30px 0;
          position: relative;
        }
        .matcher-card {
          background: linear-gradient(180deg, #09261a 0%, #051910 100%);
          border: 1px solid rgba(212, 175, 55, 0.35);
          border-radius: 24px;
          padding: 36px 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.2);
          position: relative;
          overflow: hidden;
        }
        .matcher-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-gold);
        }
        .matcher-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 32px auto;
        }
        .matcher-title {
          font-size: 2rem;
          color: var(--cream-soft);
          margin-top: 10px;
          margin-bottom: 8px;
        }
        .matcher-subtitle {
          font-size: 1.05rem;
          color: var(--cream-muted);
        }
        .matcher-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 32px;
        }
        .step-column {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .step-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-serif-royal);
          font-size: 0.92rem;
          color: var(--gold-light);
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .step-number {
          background: var(--gold-primary);
          color: var(--bg-deep-forest);
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 800;
        }
        .pill-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .pill-btn {
          background: rgba(10, 38, 26, 0.7);
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: var(--cream-soft);
          padding: 10px 14px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 0.84rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s ease;
          text-align: left;
        }
        .pill-btn:hover {
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.4);
          transform: translateX(2px);
        }
        .pill-btn.active {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(10, 38, 26, 0.9) 100%);
          border-color: var(--gold-primary);
          color: #fff;
          font-weight: 600;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
        }
        .check-icon {
          color: var(--gold-primary);
        }
        .matcher-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          flex-wrap: wrap;
          gap: 16px;
        }
        .matches-preview {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .match-num {
          font-family: var(--font-serif-royal);
          font-size: 1.8rem;
          color: var(--gold-primary);
          font-weight: 800;
        }
        .match-text {
          color: var(--cream-muted);
          font-size: 0.92rem;
        }

        @media (max-width: 900px) {
          .matcher-grid {
            grid-template-columns: 1fr;
          }
          .matcher-card {
            padding: 24px 20px;
          }
          .matcher-footer {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
