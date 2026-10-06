'use client';

import React, { useState } from 'react';
import { Sparkles, Check, ArrowDown } from 'lucide-react';
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
    { max: 12000, label: 'Under ₹12,000 (Tissue & Festive)' },
    { max: 25000, label: 'All Budgets (Up to Heirlooms)' },
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
              <Sparkles size={13} />
              <span>INTERACTIVE STYLIST ASSISTANT</span>
            </span>
            <h2 className="matcher-title font-royal">
              Find Your <span className="text-gold-gradient">Soul Saree</span> in 3 Clicks
            </h2>
            <p className="matcher-subtitle font-editorial">
              Whether you are preparing for a Guruvayur wedding, an Onam sadhya, or an evening party in Kochi, our guide matches your ideal weave.
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
              <span className="match-num font-royal">{matchingCount}</span>
              <span className="match-text">Handcrafted Sarees Match Your Preference</span>
            </div>

            <button
              type="button"
              className="btn-forest"
              onClick={handleApply}
            >
              <span>View Matching Sarees</span>
              <ArrowDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .saree-matcher-section {
          padding: 24px 0;
          position: relative;
        }
        .matcher-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-gold);
          border-radius: 20px;
          padding: 32px 36px;
          box-shadow: var(--shadow-card);
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
          max-width: 620px;
          margin: 0 auto 28px auto;
        }
        .matcher-title {
          font-size: 1.85rem;
          color: var(--color-forest);
          margin-top: 8px;
          margin-bottom: 6px;
        }
        [data-theme='dark'] .matcher-title {
          color: var(--text-primary);
        }
        .matcher-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
        }
        .matcher-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 28px;
        }
        .step-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .step-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-serif-royal);
          font-size: 0.88rem;
          color: var(--color-forest);
          font-weight: 700;
          letter-spacing: 0.04em;
        }
        [data-theme='dark'] .step-label {
          color: var(--color-gold-bright);
        }
        .step-number {
          background: var(--color-forest);
          color: #ffffff;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 800;
        }
        [data-theme='dark'] .step-number {
          background: var(--color-gold);
          color: #051910;
        }
        .pill-options {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .pill-btn {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          padding: 9px 12px;
          border-radius: 9px;
          cursor: pointer;
          font-size: 0.82rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s ease;
          text-align: left;
        }
        .pill-btn:hover {
          background: var(--color-forest-surface);
          border-color: var(--color-forest);
          color: var(--color-forest);
        }
        .pill-btn.active {
          background: var(--color-forest);
          border-color: var(--color-forest);
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 4px 14px rgba(12, 54, 36, 0.2);
        }
        [data-theme='dark'] .pill-btn.active {
          background: var(--color-forest);
          border-color: var(--color-gold);
          color: #ffffff;
        }
        .check-icon {
          color: var(--color-gold);
        }
        .matcher-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
          flex-wrap: wrap;
          gap: 14px;
        }
        .matches-preview {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .match-num {
          font-size: 1.7rem;
          color: var(--color-forest);
          font-weight: 800;
        }
        [data-theme='dark'] .match-num {
          color: var(--color-gold-bright);
        }
        .match-text {
          color: var(--text-muted);
          font-size: 0.88rem;
        }

        @media (max-width: 900px) {
          .matcher-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .matcher-card {
            padding: 22px 18px;
          }
          .matcher-footer {
            flex-direction: column;
            text-align: center;
            width: 100%;
          }
          .matches-preview {
            justify-content: center;
          }
          .matcher-footer .btn-forest {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
