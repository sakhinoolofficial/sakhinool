import React from 'react';
import Image from 'next/image';
import { Sparkles, Heart, Feather, Compass, CheckCircle2 } from 'lucide-react';
import SakhinoolLogo from './SakhinoolLogo';

export default function BrandStory() {
  return (
    <section id="our-story" className="brand-story-section">
      <div className="container-custom">
        <div className="story-grid">
          {/* Left Column: Authentic Handloom Loom Photo */}
          <div className="story-visual-wrap">
            <div className="story-image-card">
              <Image
                src="/images/craft-loom.jpg"
                alt="Master Kerala Handloom Artisan Weaving Emerald Green and Gold Zari Threads on Traditional Loom"
                width={620}
                height={480}
                className="loom-photo"
              />
              <div className="image-vignette" />
              
              <div className="story-floating-quote font-editorial">
                <span className="quote-mark">“</span>
                <p>Every thread we weave holds the warmth of a friend and the sacred heritage of Kerala.</p>
                <span className="quote-author font-royal">— The Master Weavers of Sakhinool</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="story-narrative">
            <div className="story-badge-wrap">
              <span className="badge-kerala">
                <Sparkles size={13} />
                <span>THE SOUL BEHIND SAKHINOOL</span>
              </span>
            </div>

            <h2 className="story-title font-royal">
              Where Sisterhood is <span className="text-gold-gradient">Woven into Every Thread</span>
            </h2>

            <div className="story-meaning-card">
              <div className="meaning-block">
                <span className="malayalam-word">സഖി (Sakhi)</span>
                <span className="meaning-def">Beloved Friend, Confidante &amp; Companion</span>
              </div>
              <span className="meaning-plus">+</span>
              <div className="meaning-block">
                <span className="malayalam-word">നൂൽ (Nool)</span>
                <span className="meaning-def">Sacred Spun Thread &amp; Weaver’s Yarn</span>
              </div>
            </div>

            <p className="story-text font-editorial">
              In Malayalam and ancient Sanskrit, <strong>Sakhi</strong> is the loyal friend who shares your laughter, ties your saree pleats on your wedding morning, and rejoices in your milestones. <strong>Nool</strong> is the humble thread that, under the skilled hands of a master artisan, transforms into poetry draped over your shoulder.
            </p>

            <p className="story-text font-editorial">
              Sakhinool was born with a singular passion: to deliver heirloom sarees of unmatched authenticity to women in and around Kerala. From the sunlit looms of <em>Balaramapuram</em> and <em>Chendamangalam</em> to the royal silk guilds of <em>Kanchipuram</em> and <em>Banaras</em>, every saree in our curation is personally hand-inspected for zari purity, fall, and comfort.
            </p>

            {/* 3 Core Commitments */}
            <div className="commitments-list">
              <div className="commitment-item">
                <div className="commit-icon"><CheckCircle2 size={16} /></div>
                <div>
                  <strong>No Machine Imitations</strong>
                  <span>Every saree preserves authentic temple borders and tested zari.</span>
                </div>
              </div>

              <div className="commitment-item">
                <div className="commit-icon"><CheckCircle2 size={16} /></div>
                <div>
                  <strong>Direct Weaver Livelihoods</strong>
                  <span>Fair compensation for artisanal weaver families across South India.</span>
                </div>
              </div>

              <div className="commitment-item">
                <div className="commit-icon"><CheckCircle2 size={16} /></div>
                <div>
                  <strong>Personal Saree Concierge</strong>
                  <span>Direct video consultation and assistance in Malayalam &amp; English.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .brand-story-section {
          padding: 80px 0;
          background: linear-gradient(180deg, var(--bg-deep-forest) 0%, #072115 50%, var(--bg-deep-forest) 100%);
          position: relative;
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 50px;
          align-items: center;
        }
        .story-visual-wrap {
          position: relative;
        }
        .story-image-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #020905;
          border: 1px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
        }
        .loom-photo {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .story-image-card:hover .loom-photo {
          transform: scale(1.03);
        }
        .image-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(5, 25, 16, 0.9) 100%);
        }
        .story-floating-quote {
          position: absolute;
          bottom: 24px;
          left: 20px;
          right: 20px;
          background: rgba(10, 38, 26, 0.88);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 16px 20px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }
        .quote-mark {
          font-family: var(--font-serif-royal);
          font-size: 2rem;
          color: var(--gold-primary);
          line-height: 0.5;
          display: block;
          margin-bottom: 4px;
        }
        .story-floating-quote p {
          font-size: 1.05rem;
          color: var(--cream-soft);
          line-height: 1.45;
          font-style: italic;
        }
        .quote-author {
          font-size: 0.75rem;
          color: var(--gold-light);
          display: block;
          margin-top: 6px;
          letter-spacing: 0.05em;
        }
        .story-narrative {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .story-title {
          font-size: 2.3rem;
          line-height: 1.25;
          color: var(--cream-soft);
        }
        .story-meaning-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(10, 38, 26, 0.7);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 14px 20px;
          border-radius: 12px;
          margin: 4px 0;
        }
        .meaning-block {
          display: flex;
          flex-direction: column;
        }
        .malayalam-word {
          font-family: var(--font-serif-royal);
          font-size: 1.25rem;
          color: var(--gold-light);
          font-weight: 700;
        }
        .meaning-def {
          font-size: 0.82rem;
          color: var(--cream-muted);
        }
        .meaning-plus {
          font-size: 1.4rem;
          color: var(--gold-primary);
          font-weight: 700;
        }
        .story-text {
          font-size: 1.08rem;
          color: var(--cream-muted);
          line-height: 1.7;
        }
        .commitments-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
          padding-top: 16px;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
        }
        .commitment-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .commit-icon {
          color: var(--gold-primary);
          margin-top: 2px;
        }
        .commitment-item strong {
          display: block;
          color: var(--cream-soft);
          font-size: 0.92rem;
        }
        .commitment-item span {
          color: var(--text-dim);
          font-size: 0.82rem;
        }

        @media (max-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr;
          }
          .story-title {
            font-size: 1.85rem;
          }
        }
      `}</style>
    </section>
  );
}
