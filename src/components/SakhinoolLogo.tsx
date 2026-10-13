'use client';

import React from 'react';
import { useTheme } from './ThemeContext';

interface SakhinoolLogoProps {
  variant?: 'full' | 'compact' | 'icon-only' | 'badge' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  forceTheme?: 'light' | 'dark';
}

/**
 * Intertwined 'oo' vector icon symbolizing togetherness, trust, and endless relationships.
 * Directly matches the official Sakhinool Brand Identity.
 */
export function IntertwinedOO({
  size = 18,
  color = 'currentColor',
  accentColor = '#c59b27',
  className = ''
}: {
  size?: number;
  color?: string;
  accentColor?: string;
  className?: string;
}) {
  const width = size * 1.9;
  const height = size;

  return (
    <span
      className={`inline-flex items-center align-middle mx-[0.05em] select-none ${className}`}
      style={{
        display: 'inline-flex',
        verticalAlign: '-0.08em',
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative'
      }}
      aria-label="oo"
    >
      <svg
        viewBox="0 0 38 20"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="intertwinedGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5df9e" />
            <stop offset="50%" stopColor={accentColor} />
            <stop offset="100%" stopColor="#8d680d" />
          </linearGradient>
        </defs>

        {/* Left 'O' loop */}
        <ellipse
          cx="12"
          cy="10"
          rx="8.5"
          ry="7.5"
          stroke={color}
          strokeWidth="2.4"
          fill="none"
        />

        {/* Right 'O' loop */}
        <ellipse
          cx="26"
          cy="10"
          rx="8.5"
          ry="7.5"
          stroke={color}
          strokeWidth="2.4"
          fill="none"
        />

        {/* Intertwining Thread Overlay to create seamless thread weave */}
        <path
          d="M 17.5 5.5 C 19 8, 20 11, 20.5 14.5"
          stroke="url(#intertwinedGold)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M 17.5 14.5 C 19 12, 20 9, 20.5 5.5"
          stroke="url(#intertwinedGold)"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </span>
  );
}

/**
 * Traditional Golden Lotus Motif used in official branding
 */
export function BrandLotusFlourish({ size = 16, color = '#c59b27' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
      aria-hidden="true"
    >
      {/* Central petal */}
      <path
        d="M 12 2 C 10 7, 10 11, 12 15 C 14 11, 14 7, 12 2 Z"
        fill={color}
      />
      {/* Left petal */}
      <path
        d="M 11 5 C 6 8, 5 12, 10 14 C 9 11, 10 8, 11 5 Z"
        fill={color}
        opacity="0.85"
      />
      {/* Right petal */}
      <path
        d="M 13 5 C 18 8, 19 12, 14 14 C 15 11, 14 8, 13 5 Z"
        fill={color}
        opacity="0.85"
      />
      {/* Bottom base curve */}
      <path
        d="M 6 15 C 10 17, 14 17, 18 15"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.5" r="1" fill={color} />
    </svg>
  );
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

  // Exact Brand Colors from brand identity: Primary #002E23, Secondary Gold #C59B27 / #D4AF37
  const brandEmerald = '#002E23';
  const spineColor = isDark ? '#eac56a' : brandEmerald;
  const goldPrimary = isDark ? '#d4af37' : '#c59b27';
  const goldLight = isDark ? '#fff2c6' : '#f5df9e';
  const goldDark = isDark ? '#a8841a' : '#8d680d';

  const iconSizes = {
    sm: 32,
    md: 44,
    lg: 64,
    xl: 96
  };

  const iconSize = iconSizes[size];

  // Official Sakhinool Monogram:
  // 1. 'S' Monogram (Brand initial, flowing grace)
  // 2. Woman's Profile facing left (Strength, beauty, style companion)
  // 3. Saree Border Motif (Traditional Kasavu / zari weave on shoulder)
  // 4. Needle & Flowing Thread (Nool / craftsmanship & unbroken bond)
  const MonogramSvg = (
    <svg
      width={iconSize}
      height={iconSize * 1.3}
      viewBox="0 0 120 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sakhinool-monogram-svg"
      aria-label="Sakhinool Monogram"
    >
      <defs>
        <linearGradient id={`goldGradLogo-${size}-${currentTheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={goldLight} />
          <stop offset="45%" stopColor={goldPrimary} />
          <stop offset="100%" stopColor={goldDark} />
        </linearGradient>

        <linearGradient id={`sSpineGrad-${size}-${currentTheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? '#f7e2a8' : '#034a39'} />
          <stop offset="60%" stopColor={spineColor} />
          <stop offset="100%" stopColor={isDark ? '#c59b27' : '#001a14'} />
        </linearGradient>

        <filter id={`softGlow-${size}-${currentTheme}`} x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor={goldPrimary} floodOpacity={isDark ? "0.45" : "0.25"} />
        </filter>
      </defs>

      <g>
        {/* ====================================================
            1. THE 'S' MONOGRAM SPINE (Outer Graceful Curves)
            ==================================================== */}
        <path
          d="M 94 28 C 90 14, 66 10, 48 18 C 30 26, 32 46, 50 56 C 70 66, 88 78, 86 102 C 84 126, 56 142, 38 136 C 24 131, 22 118, 25 110"
          stroke={`url(#sSpineGrad-${size}-${currentTheme})`}
          strokeWidth="4.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Accent inner spine sweep */}
        <path
          d="M 52 20 C 68 14, 86 18, 92 28 C 96 36, 88 48, 76 56 C 62 66, 52 74, 52 86 C 52 102, 68 116, 78 126"
          stroke={goldPrimary}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity="0.65"
          fill="none"
        />

        {/* ====================================================
            2. WOMAN'S PROFILE (Serene Face Facing Left)
            ==================================================== */}
        {/* Forehead, delicate nose, lips, chin, and slender neck */}
        <path
          d="M 47 38 C 45 42, 42 46, 38 52 C 37 54, 33 58, 33 60 C 37 60, 38 62, 36 64 C 34 66, 36 67, 38 68 C 36 71, 38 74, 42 76 C 45 77, 49 76, 53 79 C 55 83, 56 90, 58 98"
          stroke={isDark ? '#ffffff' : brandEmerald}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Serene Eyelash Curve */}
        <path
          d="M 40 49 C 42 51, 45 51, 47 49"
          stroke={goldPrimary}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Sacred Bindi (Gold Accent) */}
        <circle cx="43" cy="44" r="1.3" fill={`url(#goldGradLogo-${size}-${currentTheme})`} />

        {/* Gentle Hair Sweep Contour */}
        <path
          d="M 47 38 C 54 32, 65 33, 72 38 C 76 41, 78 48, 76 56"
          stroke={goldPrimary}
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />

        {/* ====================================================
            3. SAREE BORDER MOTIF (Kasavu / Zari Pallu on Shoulder)
            ==================================================== */}
        {/* Double-lined border curve with decorative diamond & dot weave */}
        <path
          d="M 58 96 C 54 104, 46 114, 36 122 C 30 127, 24 130, 20 128"
          stroke={`url(#goldGradLogo-${size}-${currentTheme})`}
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 62 100 C 58 108, 50 118, 40 126 C 34 131, 27 134, 23 132"
          stroke={`url(#goldGradLogo-${size}-${currentTheme})`}
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />

        {/* Kasavu Zari Golden Dots & Embellishments */}
        <circle cx="56" cy="103" r="1" fill={goldPrimary} />
        <circle cx="50" cy="110" r="1" fill={goldPrimary} />
        <circle cx="43" cy="117" r="1" fill={goldPrimary} />
        <circle cx="36" cy="123" r="1" fill={goldPrimary} />
        <circle cx="29" cy="128" r="1" fill={goldPrimary} />

        {/* ====================================================
            4. NEEDLE & FLOWING THREAD (Nool / Craftsmanship)
            ==================================================== */}
        {/* Slender Golden Needle at Top Right */}
        <g filter={`url(#softGlow-${size}-${currentTheme})`}>
          {/* Needle Shaft */}
          <line
            x1="98"
            y1="16"
            x2="88"
            y2="38"
            stroke={`url(#goldGradLogo-${size}-${currentTheme})`}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Needle Eye Hole */}
          <ellipse
            cx="96.5"
            cy="19"
            rx="1.2"
            ry="2.2"
            transform="rotate(-25 96.5 19)"
            stroke={goldLight}
            strokeWidth="0.8"
            fill="none"
          />
        </g>

        {/* Continuous Flowing Thread Swirling Around the S */}
        {/* Thread originating from needle eye */}
        <path
          d="M 96.5 19 C 104 22, 110 32, 108 42 C 106 52, 94 62, 85 70 C 74 80, 72 90, 76 98 C 80 106, 92 110, 96 118 C 100 126, 96 136, 86 142 C 76 148, 64 146, 58 142"
          stroke={`url(#goldGradLogo-${size}-${currentTheme})`}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Playful terminal loop flourish at bottom right */}
        <path
          d="M 88 116 C 96 114, 104 116, 108 122 C 112 128, 108 136, 100 138 C 94 140, 88 136, 88 130 C 88 124, 94 120, 100 122"
          stroke={`url(#goldGradLogo-${size}-${currentTheme})`}
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        <circle cx="100" cy="122" r="1.2" fill={goldPrimary} />
      </g>
    </svg>
  );

  // Variant: Icon Only
  if (variant === 'icon-only') {
    return (
      <div className={`sakhinool-logo-icon ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
        {MonogramSvg}
      </div>
    );
  }

  // Variant: Compact for Main Navbar & Sticky Mobile Header
  if (variant === 'compact') {
    return (
      <div className={`sakhinool-compact-brand ${isDark ? 'theme-dark' : 'theme-light'} ${className}`}>
        <div className="sakhinool-compact-icon">
          {MonogramSvg}
        </div>
        <div className="sakhinool-compact-text">
          <span className="sakhinool-wordmark-styled font-royal">
            Sakhin<IntertwinedOO size={13} color={isDark ? '#ffffff' : brandEmerald} accentColor={goldPrimary} />l
          </span>
          <span className="sakhinool-sub-brand">
            K E R A L A
          </span>
        </div>
      </div>
    );
  }

  // Variant: Full Official Brand Presentation (Header / Story / Modal / Footer)
  return (
    <div className={`sakhinool-brand-container ${isDark ? 'theme-dark' : 'theme-light'} ${className}`}>
      {/* Monogram Icon */}
      <div className="sakhinool-brand-icon-wrap">
        {MonogramSvg}
      </div>

      {/* Brand Typography matching official brand board */}
      <div className="sakhinool-brand-text-wrap text-center">
        {/* Wordmark with Intertwined OO */}
        <div className="sakhinool-wordmark-styled-full font-royal">
          <span>Sakhin</span>
          <IntertwinedOO
            size={size === 'lg' ? 24 : size === 'xl' ? 32 : 18}
            color={isDark ? '#fbfdfc' : brandEmerald}
            accentColor={goldPrimary}
          />
          <span>l</span>
        </div>

        {/* Primary Tagline */}
        <p className="sakhinool-official-tagline">
          WOVEN IN TRADITION, STYLED FOR YOU
        </p>

        {/* Lotus Flourish */}
        <div className="sakhinool-lotus-divider my-1">
          <BrandLotusFlourish size={16} color={goldPrimary} />
        </div>

        {/* Sub-Category */}
        <p className="sakhinool-category-tag">
          SAREES &amp; WOMEN’S WEAR
        </p>
      </div>
    </div>
  );
}
