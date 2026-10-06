import React from 'react';

interface SakhinoolLogoProps {
  variant?: 'full' | 'compact' | 'icon-only' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  light?: boolean;
}

export default function SakhinoolLogo({
  variant = 'full',
  size = 'md',
  className = '',
  light = false
}: SakhinoolLogoProps) {
  // Brand Colors
  const goldPrimary = light ? '#e8c86d' : '#d4af37';
  const goldLight = '#f8ecc2';
  const goldDark = '#a8841a';

  const iconSizes = {
    sm: 36,
    md: 48,
    lg: 72,
    xl: 96
  };

  const iconSize = iconSizes[size];

  // Stylized SVG Woman & Thread Monogram matching user's packaging
  const MonogramSvg = (
    <svg
      width={iconSize}
      height={iconSize * 1.3}
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sakhinool-monogram-svg"
      aria-label="Sakhinool Monogram"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcedc7" />
          <stop offset="45%" stopColor={goldPrimary} />
          <stop offset="100%" stopColor={goldDark} />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#d4af37" floodOpacity="0.4" />
        </filter>
      </defs>

      <g filter="url(#goldGlow)">
        {/* Needle Top Eye Flourish */}
        <path
          d="M 68 8 C 70 5, 73 5, 75 7 C 77 9, 75 14, 71 18 L 60 28"
          stroke="url(#goldGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="73" cy="8" r="1.5" fill={goldLight} />
        
        {/* The Thread looping through needle */}
        <path
          d="M 72 9 C 62 14, 52 10, 44 18 C 34 27, 36 38, 48 37 C 62 36, 76 46, 68 64 C 61 78, 44 82, 38 88"
          stroke="url(#goldGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="120"
          strokeDashoffset="0"
        />

        {/* Graceful Profile: Head & Forehead & Nose */}
        <path
          d="M 45 35 C 44 32, 43 27, 47 23 C 51 19, 56 22, 56 25 C 56 28, 54 30, 52 32 C 49 34, 46 36, 45 40 C 44 43, 44 45, 41 47 C 39 48, 38 50, 39 52 C 41 54, 44 55, 46 56 C 45 59, 43 61, 41 63 C 39 65, 36 67, 34 71"
          stroke="url(#goldGrad)"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Traditional Earring (Jhumka) */}
        <path
          d="M 46 38 L 47 43 M 44 43 Q 47 46 50 43 Z"
          fill="url(#goldGrad)"
          stroke="url(#goldGrad)"
          strokeWidth="1"
        />

        {/* Ornate Traditional Kerala Kasavu Necklace Collar Detail */}
        <path
          d="M 33 72 C 37 68, 43 64, 49 63 C 53 62, 57 65, 59 69"
          stroke="url(#goldGrad)"
          strokeWidth="2.4"
          fill="none"
        />
        {/* Necklace Beads / Kasu dots */}
        <g fill="url(#goldGrad)">
          <circle cx="34" cy="74" r="1.5" />
          <circle cx="38" cy="71" r="1.5" />
          <circle cx="43" cy="69" r="1.5" />
          <circle cx="48" cy="68" r="1.5" />
          <circle cx="53" cy="69" r="1.5" />
          <circle cx="58" cy="72" r="1.5" />
        </g>
        {/* Second layer necklace */}
        <path
          d="M 30 79 C 36 74, 44 71, 52 71 C 58 71, 62 76, 64 80"
          stroke="url(#goldGrad)"
          strokeWidth="1.6"
          strokeDasharray="2 3"
          fill="none"
        />

        {/* Sweeping Majestic Calligraphic "S" Contour flowing downward */}
        <path
          d="M 58 26 C 68 28, 76 38, 72 50 C 68 62, 50 67, 44 75 C 38 84, 40 96, 52 101 C 63 105, 75 99, 78 88 C 79 84, 82 85, 80 89 C 75 106, 56 112, 42 106 C 28 99, 28 82, 38 71 C 45 64, 60 58, 62 48 C 64 39, 58 32, 48 31"
          fill="url(#goldGrad)"
        />

        {/* Decorative flourish at the base */}
        <path
          d="M 74 94 C 82 92, 88 97, 85 103 C 82 108, 76 106, 73 102"
          stroke="url(#goldGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`sakhinool-logo-icon ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
        {MonogramSvg}
      </div>
    );
  }

  return (
    <div className={`sakhinool-brand-container ${className}`}>
      {/* Monogram Icon */}
      <div className="sakhinool-brand-icon-wrap">
        {MonogramSvg}
      </div>

      {/* Brand Typography */}
      <div className="sakhinool-brand-text-wrap">
        <div className="sakhinool-title-row">
          <span className="sakhinool-title-serif">Sakhi</span>
          <span className="sakhinool-title-serif">n</span>
          <span className="sakhinool-infinity-oo" title="intertwined thread loops">
            <span className="oo-loop-1">o</span>
            <span className="oo-loop-2">o</span>
          </span>
          <span className="sakhinool-title-serif">l</span>
        </div>

        {/* Golden Lotus Ornament & Rule Line */}
        <div className="sakhinool-lotus-divider">
          <span className="divider-line" />
          <svg width="18" height="12" viewBox="0 0 24 16" fill="url(#goldGrad)" className="lotus-icon">
            <path d="M 12 0 C 13 5, 17 8, 22 10 C 16 11, 13 14, 12 16 C 11 14, 8 11, 2 10 C 7 8, 11 5, 12 0 Z" />
            <circle cx="12" cy="7" r="1.5" fill="#fff5d1" />
          </svg>
          <span className="divider-line" />
        </div>

        {/* Tagline */}
        <div className="sakhinool-tagline">
          WOVEN IN TRADITION, STYLED FOR YOU
        </div>

        {/* Subtitle category */}
        {variant === 'full' && (
          <div className="sakhinool-category-dots">
            • SAREES &amp; WOMEN’S WEAR •
          </div>
        )}
      </div>
    </div>
  );
}
