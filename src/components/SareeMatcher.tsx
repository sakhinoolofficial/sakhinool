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
    </section>
  );
}
