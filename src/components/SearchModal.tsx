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

      <style jsx>{`
        .search-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(8, 25, 17, 0.6);
          backdrop-filter: blur(8px);
          z-index: 1250;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 60px 16px 20px 16px;
          animation: fadeIn 0.2s ease-out;
        }
        .search-dialog {
          max-width: 640px;
          width: 100%;
          background: var(--bg-surface);
          border: 1px solid var(--border-gold);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          border-radius: 18px;
          overflow: hidden;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
        }
        .search-input-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-light);
          background: var(--bg-surface);
        }
        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 1.05rem;
          outline: none;
        }
        .search-input::placeholder {
          color: var(--text-muted);
          font-size: 0.92rem;
          font-family: var(--font-sans);
        }
        .search-close-btn {
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .quick-suggestions-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
          flex-wrap: wrap;
        }
        .sugg-label {
          font-size: 0.72rem;
          color: var(--color-forest);
          font-weight: 700;
        }
        [data-theme='dark'] .sugg-label {
          color: var(--color-gold);
        }
        .sugg-chip {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .sugg-chip:hover {
          background: var(--color-forest);
          color: #ffffff;
          border-color: var(--color-forest);
        }
        .search-results-list {
          flex: 1;
          overflow-y: auto;
          padding: 14px 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .search-result-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 10px;
          border-radius: 10px;
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: all 0.2s;
        }
        .search-result-item:hover {
          border-color: var(--color-gold);
          background: var(--color-forest-surface);
          transform: translateX(2px);
        }
        .result-thumb-wrap {
          width: 48px;
          height: 64px;
          border-radius: 6px;
          overflow: hidden;
          background: #f7f4ed;
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
          font-size: 0.68rem;
          color: var(--color-gold);
          text-transform: uppercase;
          font-weight: 700;
        }
        .result-title {
          font-size: 0.92rem;
          color: var(--text-primary);
          margin: 1px 0;
        }
        .result-price {
          font-size: 0.88rem;
          color: var(--color-forest);
          font-weight: 700;
        }
        [data-theme='dark'] .result-price {
          color: var(--color-gold-bright);
        }
        .result-arrow {
          color: var(--text-muted);
        }
        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
          gap: 10px;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
