import React from 'react';
import Image from 'next/image';
import { Sparkles, CheckCircle2 } from 'lucide-react';

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
                <span className="quote-mark font-royal text-gold">“</span>
                <p>Every thread we weave holds the warmth of a friend and the sacred heritage of Kerala.</p>
                <span className="quote-author font-royal">— The Master Weavers of Sakhinool</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="story-narrative">
            <div className="story-badge-wrap">
              <span className="badge-kerala">
                <Sparkles size={13} className="text-gold" />
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
              <span className="meaning-plus text-gold">+</span>
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
          padding: 60px 0;
          background: var(--bg-secondary);
          position: relative;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 40px;
          align-items: center;
        }
        .story-visual-wrap {
          position: relative;
        }
        .story-image-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: #f7f4ed;
          border: 1px solid var(--border-gold);
          box-shadow: var(--shadow-card);
        }
        .loom-photo {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .story-image-card:hover .loom-photo {
          transform: scale(1.02);
        }
        .image-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(7, 33, 21, 0.8) 100%);
        }
        .story-floating-quote {
          position: absolute;
          bottom: 18px;
          left: 18px;
          right: 18px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-gold);
          padding: 14px 18px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
        [data-theme='dark'] .story-floating-quote {
          background: rgba(10, 38, 26, 0.92);
        }
        .quote-mark {
          font-size: 1.8rem;
          line-height: 0.5;
          display: block;
          margin-bottom: 2px;
        }
        .story-floating-quote p {
          font-size: 0.98rem;
          color: var(--text-primary);
          line-height: 1.45;
          font-style: italic;
        }
        .quote-author {
          font-size: 0.72rem;
          color: var(--color-forest);
          display: block;
          margin-top: 5px;
          letter-spacing: 0.04em;
        }
        [data-theme='dark'] .quote-author {
          color: var(--color-gold-bright);
        }
        .story-narrative {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .story-title {
          font-size: 2.1rem;
          line-height: 1.25;
          color: var(--color-forest);
        }
        [data-theme='dark'] .story-title {
          color: var(--text-primary);
        }
        .story-meaning-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: var(--bg-surface);
          border: 1px solid var(--border-gold);
          padding: 12px 18px;
          border-radius: 12px;
          margin: 2px 0;
          box-shadow: var(--shadow-sm);
        }
        .meaning-block {
          display: flex;
          flex-direction: column;
        }
        .malayalam-word {
          font-family: var(--font-serif-royal);
          font-size: 1.18rem;
          color: var(--color-forest);
          font-weight: 700;
        }
        [data-theme='dark'] .malayalam-word {
          color: var(--color-gold-bright);
        }
        .meaning-def {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .meaning-plus {
          font-size: 1.3rem;
          font-weight: 700;
        }
        .story-text {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .commitments-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 8px;
          padding-top: 14px;
          border-top: 1px solid var(--border-light);
        }
        .commitment-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .commit-icon {
          color: var(--color-forest);
          margin-top: 2px;
        }
        [data-theme='dark'] .commit-icon {
          color: var(--color-gold);
        }
        .commitment-item strong {
          display: block;
          color: var(--text-primary);
          font-size: 0.9rem;
        }
        .commitment-item span {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        @media (max-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .story-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </section>
  );
}
