'use client';

import React from 'react';
import { useTheme } from './ThemeContext';

interface SakhinoolLogoProps {
  variant?: 'full' | 'compact' | 'icon-only' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  forceTheme?: 'light' | 'dark';
}

export default function SakhinoolLogo({
  variant = 'full',
  size = 'md',
  className = '',
  forceTheme
}: SakhinoolLogoProps) {
  const { theme } = useTheme();
  const currentTheme = forceTheme || theme || 'light';
  const isDark = currentTheme === 'dark';

  // Brand Colors based on theme
  const goldPrimary = isDark ? '#d4af37' : '#c59b27';
  const goldLight = isDark ? '#fff2c6' : '#eec96d';
  const goldDark = isDark ? '#a8841a' : '#8d680d';

  const iconSizes = {
    sm: 26,
    md: 36,
    lg: 48,
    xl: 64
  };

  const iconSize = iconSizes[size];

  // Refined Minimalist Golden Monogram: Intertwined Silk Thread & Regal 'S'
  const MonogramSvg = (
    <svg
      width={iconSize}
      height={iconSize * 1.15}
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sakhinool-monogram-svg"
      aria-label="Sakhinool Monogram"
    >
      <defs>
        <linearGradient id={`goldGradLogo-${size}-${currentTheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={goldLight} />
          <stop offset="50%" stopColor={goldPrimary} />
          <stop offset="100%" stopColor={goldDark} />
        </linearGradient>
      </defs>

      {/* Top Thread Needle Eye */}
      <circle cx="20" cy="4" r="2.2" stroke={`url(#goldGradLogo-${size}-${currentTheme})`} strokeWidth="1.2" fill="none" />
      <circle cx="20" cy="4" r="0.8" fill={goldPrimary} />

      {/* Graceful S-Thread Contour */}
      <path
        d="M 20 6.2 C 20 10, 29 11, 29 17 C 29 23, 11 22, 11 29 C 11 36, 28 37, 26 43"
        stroke={`url(#goldGradLogo-${size}-${currentTheme})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Echo Harmony Thread (Kasavu Weft) */}
      <path
        d="M 15 13 C 18 10, 24 10, 26 13"
        stroke={`url(#goldGradLogo-${size}-${currentTheme})`}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M 14 34 C 17 37, 23 37, 25 34"
        stroke={`url(#goldGradLogo-${size}-${currentTheme})`}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />

      {/* Subtle Golden Thread Terminal Accent */}
      <circle cx="26" cy="43" r="1.3" fill={goldPrimary} />
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`sakhinool-logo-icon ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
        {MonogramSvg}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`sakhinool-compact-brand ${isDark ? 'theme-dark' : 'theme-light'} ${className}`}>
        <div className="sakhinool-compact-icon">
          {MonogramSvg}
        </div>
        <div className="sakhinool-compact-text">
          <span className="sakhinool-wordmark">SAKHINOOL</span>
          <span className="sakhinool-sub-brand">K E R A L A</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`sakhinool-brand-container ${isDark ? 'theme-dark' : 'theme-light'} ${className}`}>
      {/* Monogram Icon */}
      <div className="sakhinool-brand-icon-wrap">
        {MonogramSvg}
      </div>

      {/* Brand Typography */}
      <div className="sakhinool-brand-text-wrap">
        <span className="sakhinool-wordmark-full">SAKHINOOL</span>
        
        {/* Subtle Gold Hairline Divider */}
        <div className="sakhinool-gold-rule">
          <span className="rule-line" />
          <span className="rule-diamond">◆</span>
          <span className="rule-line" />
        </div>

        <span className="sakhinool-tagline">
          WOVEN IN TRADITION &bull; STYLED FOR YOU
        </span>

        {variant === 'full' && (
          <span className="sakhinool-sub-brand">
            BALARAMAPURAM &bull; KANCHIPURAM &bull; HANDLOOMS
          </span>
        )}
      </div>
    </div>
  );
}
