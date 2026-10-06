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
          <Search size={22} className="text-gold" />
          <input
            type="text"
            placeholder="Search Kasavu, Kanchipuram, Vishu tissue, green, bridal..."
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
          <span className="sugg-label">Popular Searches:</span>
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
                    width={60}
                    height={80}
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

      <style jsx>{`
        .search-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(3, 15, 10, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1200;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 80px 20px 20px 20px;
          animation: fadeIn 0.2s ease-out;
        }
        .search-dialog {
          max-width: 680px;
          width: 100%;
          background: #082418;
          border: 1px solid rgba(212, 175, 55, 0.4);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9);
          border-radius: 18px;
          overflow: hidden;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
        }
        .search-input-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 24px;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          background: #051a11;
        }
        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--cream-soft);
          font-size: 1.15rem;
          outline: none;
        }
        .search-input::placeholder {
          color: var(--text-dim);
          font-size: 0.95rem;
          font-family: var(--font-sans);
        }
        .search-close-btn {
          background: transparent;
          border: none;
          color: var(--cream-soft);
          cursor: pointer;
        }
        .search-close-btn:hover {
          color: var(--gold-primary);
        }
        .quick-suggestions-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: rgba(10, 38, 26, 0.6);
          border-bottom: 1px solid rgba(212, 175, 55, 0.15);
          flex-wrap: wrap;
        }
        .sugg-label {
          font-size: 0.75rem;
          color: var(--gold-burnished);
          font-weight: 600;
        }
        .sugg-chip {
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.25);
          color: var(--cream-soft);
          font-size: 0.72rem;
          padding: 3px 8px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .sugg-chip:hover {
          background: var(--gold-primary);
          color: var(--bg-deep-forest);
        }
        .search-results-list {
          flex: 1;
          overflow-y: auto;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .search-result-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px;
          border-radius: 10px;
          background: rgba(5, 25, 16, 0.5);
          border: 1px solid rgba(212, 175, 55, 0.15);
          cursor: pointer;
          transition: all 0.2s;
        }
        .search-result-item:hover {
          background: rgba(212, 175, 55, 0.12);
          border-color: var(--gold-primary);
          transform: translateX(3px);
        }
        .result-thumb-wrap {
          width: 50px;
          height: 66px;
          border-radius: 6px;
          overflow: hidden;
          background: #020905;
          flex-shrink: 0;
        }
        .result-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .result-info {
          flex: 1;
        }
        .result-cat {
          font-size: 0.7rem;
          color: var(--gold-burnished);
          text-transform: uppercase;
          font-weight: 600;
        }
        .result-title {
          font-size: 0.95rem;
          color: var(--cream-soft);
          margin: 2px 0;
        }
        .result-price {
          font-size: 0.9rem;
          color: var(--gold-primary);
          font-weight: 700;
        }
        .result-arrow {
          color: var(--text-dim);
          padding-right: 6px;
        }
        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px;
          gap: 12px;
          color: var(--cream-muted);
        }
      `}</style>
    </div>
  );
}
