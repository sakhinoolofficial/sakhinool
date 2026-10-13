'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Heart, Users, Sparkle, ShieldCheck, Gem, Crown, Compass } from 'lucide-react';
import SakhinoolLogo, { IntertwinedOO, BrandLotusFlourish } from './SakhinoolLogo';

interface DecodedElement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

const DECODED_ELEMENTS: DecodedElement[] = [
  {
    id: 's-monogram',
    title: "THE 'S' MONOGRAM",
    subtitle: 'Grace & Timeless Elegance',
    description: "Represents the brand initial Sakhinool. Its flowing form reflects grace, femininity, and timeless elegance."
  },
  {
    id: 'needle-thread',
    title: 'NEEDLE & THREAD',
    subtitle: "Art of Weaving Stories ('Nool')",
    description: "The needle with flowing thread represents 'Nool' (thread) — symbolizing craftsmanship, quality, and the art of weaving beautiful stories."
  },
  {
    id: 'flowing-thread',
    title: 'FLOWING THREAD',
    subtitle: "Bond of Friendship ('Sakhi')",
    description: "The thread connects and brings everything together, just like the bond of friendship (Sakhi) — continuous, caring, and lasting."
  },
  {
    id: 'woman-profile',
    title: "WOMAN'S PROFILE",
    subtitle: 'Strength, Beauty & Companion',
    description: "Represents every woman — her strength, beauty, and the many roles she embraces. We are her style companion, her 'Sakhi' in every moment."
  },
  {
    id: 'saree-border',
    title: 'SAREE BORDER MOTIF',
    subtitle: 'Richness of Indian Heritage',
    description: "Inspired by traditional weaves, it reflects our roots in Indian textiles and the richness of our heritage."
  },
  {
    id: 'intertwined-oo',
    title: "INTERTWINED 'OO'",
    subtitle: 'Togetherness & Endless Trust',
    description: "The two 'O's are interlinked like threads — symbolizing togetherness, trust, and endless relationships."
  }
];

const BRAND_PILLARS = [
  {
    title: 'SAKHI (FRIEND)',
    subtitle: 'Your Style Confidante',
    desc: 'We are more than a brand, we are a friend who understands you and celebrates with you.',
    icon: Users
  },
  {
    title: 'NOOL (THREAD)',
    subtitle: 'Authentic Craftsmanship',
    desc: 'Every thread weaves a story of tradition, quality, and care.',
    icon: Sparkle
  },
  {
    title: "WOMEN'S CLOTHING",
    subtitle: 'Confidence & Grace',
    desc: 'From sarees to modern wear, crafted to make every woman feel confident and beautiful.',
    icon: Crown
  },
  {
    title: 'CONNECTION',
    subtitle: 'True Friendship',
    desc: 'Threads connect fabrics, relationships, and emotions — just like true friendship.',
    icon: Heart
  },
  {
    title: 'GROWTH & JOURNEY',
    subtitle: 'Every Season of Life',
    desc: 'Growing together with every woman, for every season of her life.',
    icon: Compass
  }
];

export default function BrandStory() {
  const [activeElementId, setActiveElementId] = useState<string>('s-monogram');

  return (
    <section id="our-story" className="brand-story-section">
      <div className="container-custom">
        {/* ====================================================
            1. SECTION HERO: THE SAKHINOOL ORIGIN STORY
            ==================================================== */}
        <div className="story-grid">
          {/* Left Column: Authentic Craft Image with Quote */}
          <div className="story-visual-wrap">
            <div className="story-image-card">
              <Image
                src="/images/craft-loom.jpg"
                alt="Master Kerala Handloom Artisan Weaving Emerald Green and Gold Zari on Traditional Loom"
                width={620}
                height={520}
                className="loom-photo"
              />
              <div className="image-vignette" />
              
              <div className="story-floating-quote font-editorial">
                <span className="quote-mark font-royal text-gold">“</span>
                <p>Sakhinool — Your style. Your friend. Always.</p>
                <span className="quote-author font-royal">— The Soul of Sakhinool</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="story-narrative">
            <div className="story-badge-wrap">
              <span className="badge-kerala">
                <Sparkles size={13} className="text-gold" />
                <span>THE BRAND STORY</span>
              </span>
            </div>

            <h2 className="story-title font-royal">
              Where Sisterhood is <span className="text-gold-gradient">Woven into Every Thread</span>
            </h2>

            {/* Etymology Breakdown Card */}
            <div className="story-meaning-card">
              <div className="meaning-block">
                <span className="malayalam-word">Sakhi (സഖി)</span>
                <span className="meaning-def">Beloved Friend, Confidante &amp; Companion</span>
              </div>
              <span className="meaning-plus text-gold">+</span>
              <div className="meaning-block">
                <span className="malayalam-word">Nool (നൂൽ)</span>
                <span className="meaning-def">Sacred Spun Thread &amp; Weaver’s Yarn</span>
              </div>
            </div>

            {/* Official Brand Narrative */}
            <div className="story-paragraphs font-editorial text-secondary">
              <p className="story-text">
                <strong>Sakhinool</strong> is born from the beautiful meaning of two words — <em>Sakhi</em> (friend) and <em>Nool</em> (thread).
              </p>
              <p className="story-text">
                We believe every woman deserves a friend who understands her style, her comfort, and her journey. Like a thread, we are here to connect with you, celebrate your moments, and weave elegance into your everyday and special occasions.
              </p>
              <p className="story-text">
                From timeless sarees to contemporary women’s wear, every piece is crafted with love, inspired by tradition, and designed for today.
              </p>
            </div>

            {/* Equation / Formula Banner */}
            <div className="brand-formula-strip">
              <div className="formula-item">
                <span className="formula-title">SAKHI</span>
                <span className="formula-desc">Friend</span>
              </div>
              <span className="formula-op">+</span>
              <div className="formula-item">
                <span className="formula-title">NOOL</span>
                <span className="formula-desc">Thread</span>
              </div>
              <span className="formula-op">+</span>
              <div className="formula-item">
                <span className="formula-title">HERITAGE</span>
                <span className="formula-desc">Craftsmanship</span>
              </div>
              <span className="formula-op">=</span>
              <div className="formula-item highlight-formula">
                <span className="formula-title text-gold font-royal">SAKHINOOL</span>
                <span className="formula-desc">The Living Logo</span>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            2. LOGO DECODED: INTERACTIVE BREAKDOWN
            ==================================================== */}
        <div className="logo-decoded-container">
          <div className="decoded-header">
            <span className="badge-kerala">
              <Sparkles size={12} className="text-gold" />
              <span>THE EMBLEM UNVEILED</span>
            </span>
            <h3 className="font-royal">
              Sakhinool <span className="text-gold-gradient">Logo Decoded</span>
            </h3>
            <div className="my-2">
              <BrandLotusFlourish size={20} color="#c59b27" />
            </div>
            <p className="font-editorial">
              Every curve, thread, and motif carries profound meaning — honoring the artisan, the craft, and the woman who wears it.
            </p>
          </div>

          <div className="decoded-main-grid">
            {/* Center-Left: The Monogram Showcase Card */}
            <div className="decoded-showcase-box">
              <div className="decoded-showcase-inner">
                <SakhinoolLogo variant="icon-only" size="xl" />
              </div>

              {/* Wordmark with Intertwined OO */}
              <div className="sakhinool-wordmark-styled-full font-royal">
                <span>Sakhin</span>
                <IntertwinedOO size={22} color="#002e23" accentColor="#c59b27" />
                <span>l</span>
              </div>

              <p className="sakhinool-official-tagline">
                WOVEN IN TRADITION, STYLED FOR YOU
              </p>

              <div className="sakhinool-lotus-divider my-2">
                <BrandLotusFlourish size={18} color="#c59b27" />
              </div>

              <p className="sakhinool-category-tag">
                SAREES &amp; WOMEN’S WEAR
              </p>
            </div>

            {/* Right: 6 Decoded Elements Grid */}
            <div className="decoded-cards-grid">
              {DECODED_ELEMENTS.map((elem) => {
                const isActive = activeElementId === elem.id;
                return (
                  <div
                    key={elem.id}
                    onClick={() => setActiveElementId(elem.id)}
                    className={`decoded-card-item ${isActive ? 'active-element' : ''}`}
                  >
                    <div className="decoded-card-top">
                      <span className="decoded-card-title">
                        {elem.title}
                      </span>
                      {elem.id === 'intertwined-oo' ? (
                        <IntertwinedOO size={15} color="#002e23" accentColor="#c59b27" />
                      ) : (
                        <Sparkle size={14} className="text-gold" />
                      )}
                    </div>
                    <div className="decoded-card-subtitle">
                      {elem.subtitle}
                    </div>
                    <p className="decoded-card-desc">
                      {elem.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ====================================================
            3. HOW IT REPRESENTS THE BRAND (5 PILLARS)
            ==================================================== */}
        <div className="pillars-section">
          <div className="pillars-header">
            <span className="badge-kerala">
              <Sparkles size={12} className="text-gold" />
              <span>LIVING OUR PURPOSE</span>
            </span>
            <h3 className="font-royal">
              How It Represents the Brand
            </h3>
          </div>

          <div className="pillars-grid">
            {BRAND_PILLARS.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="pillar-card-box">
                  <div className="pillar-icon-circle">
                    <IconComp size={20} />
                  </div>
                  <h4 className="pillar-box-title">
                    {pillar.title}
                  </h4>
                  <span className="pillar-box-subtitle">
                    {pillar.subtitle}
                  </span>
                  <p className="pillar-box-desc">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            4. BRAND ESSENCE & SIGNATURE BANNER
            ==================================================== */}
        <div className="brand-essence-banner">
          {/* 4 Essence Values */}
          <div className="essence-values-row">
            <div className="essence-badge">
              <ShieldCheck size={16} />
              <span>TRUST</span>
            </div>
            <span className="essence-separator">•</span>
            <div className="essence-badge">
              <Gem size={16} />
              <span>QUALITY</span>
            </div>
            <span className="essence-separator">•</span>
            <div className="essence-badge">
              <Sparkles size={16} />
              <span>ELEGANCE</span>
            </div>
            <span className="essence-separator">•</span>
            <div className="essence-badge">
              <Crown size={16} />
              <span>EMPOWERMENT</span>
            </div>
          </div>

          <div className="essence-divider-line" />

          {/* Official Brand Motto */}
          <p className="brand-motto-text">
            WOVEN WITH TRADITION. STYLED WITH CARE. CONNECTED LIKE FRIENDS.
          </p>
        </div>
      </div>
    </section>
  );
}
