'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { Saree, SAREES_DATA } from '../data/sarees';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSaree: (saree: Saree) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectSaree }: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredSarees = SAREES_DATA.filter((saree) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      saree.name.toLowerCase().includes(q) ||
      saree.category.toLowerCase().includes(q) ||
      saree.colorTone.toLowerCase().includes(q) ||
      saree.fabric.toLowerCase().includes(q) ||
      saree.origin.toLowerCase().includes(q) ||
      saree.suitableOccasions.some((occ) => occ.toLowerCase().includes(q))
    );
  });

  return (
    <div className="search-backdrop" onClick={onClose}>
      <div className="search-dialog sakhinool-card" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-header">
          <Search size={20} className="text-forest" />
          <input
            type="text"
            placeholder="Search Kasavu, Kanchipuram, green, Vishu tissue..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="search-input font-royal"
          />
          <button type="button" className="search-close-btn" onClick={onClose} aria-label="Close search">
            <X size={20} />
          </button>
        </div>

        {/* Popular Quick Suggestions */}
        <div className="quick-suggestions-bar">
          <span className="sugg-label">Popular:</span>
          {['Kasavu', 'Forest Green', 'Bridal Silk', 'Tissue', 'Onam', 'Under ₹8000'].map((tag) => (
            <button
              key={tag}
              type="button"
              className="sugg-chip"
              onClick={() => setQuery(tag === 'Under ₹8000' ? '' : tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="search-results-list">
          {filteredSarees.length === 0 ? (
            <div className="no-results">
              <Sparkles size={28} className="text-gold" />
              <p>No sarees found matching "{query}". Try searching "Kasavu", "Silk", or "Tissue".</p>
            </div>
          ) : (
            filteredSarees.map((saree) => (
              <div
                key={saree.id}
                className="search-result-item"
                onClick={() => {
                  onSelectSaree(saree);
                  onClose();
                }}
              >
                <div className="result-thumb-wrap">
                  <Image
                    src={saree.image}
                    alt={saree.name}
                    width={56}
                    height={74}
                    className="result-thumb"
                  />
                </div>
                <div className="result-info">
                  <div className="result-cat">{saree.category} • {saree.origin}</div>
                  <h4 className="result-title font-royal">{saree.name}</h4>
                  <div className="result-price font-royal">
                    {new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                      maximumFractionDigits: 0
                    }).format(saree.price)}
                  </div>
                </div>
                <div className="result-arrow">
                  <ArrowRight size={16} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
