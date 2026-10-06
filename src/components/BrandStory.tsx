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
    </section>
  );
}
