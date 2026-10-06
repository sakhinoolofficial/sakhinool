'use client';

import React, { useState } from 'react';
import { ChevronDown, Sparkles, MessageCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I place an order through WhatsApp?',
      answer: 'Simply browse our sarees, click "Add to Bag" or "Inquire on WhatsApp". Your selected sarees with SKU details, price, and delivery district will be pre-filled into an automatic message. You will connect directly with our Sakhinool personal stylist on WhatsApp (+91 7306045546), who will share live videos/photos, confirm availability, and assist with dispatch details.'
    },
    {
      question: 'How long does delivery take across Kerala?',
      answer: 'We provide expedited delivery across all 14 districts of Kerala. Major cities (Kochi / Ernakulam, Thiruvananthapuram, Kozhikode, and Thrissur) receive orders within 24 to 48 hours. Other districts and semi-urban locations typically arrive within 2 to 3 business days via our verified courier partners.'
    },
    {
      question: 'Can I view the saree over a video call before making a decision?',
      answer: 'Yes, absolutely! We understand that choosing a saree is a personal, emotional experience. You can request a 5-minute WhatsApp video consultation where our stylist will showcase the true color under natural light, the pallu motifs, the texture of the zari, and how it drapes.'
    },
    {
      question: 'Are Sakhinool sarees authentic handlooms with Silk Mark certification?',
      answer: 'Yes. Our pure silk collections carry the official Silk Mark certification, guaranteeing 100% genuine natural silk. Our Kerala Kasavu sarees are woven by master generational weavers in Balaramapuram and Chendamangalam using traditional wooden pit looms with pure zari borders.'
    },
    {
      question: 'Does each saree include a matching blouse piece?',
      answer: 'Every Sakhinool saree comes with an unstitched 0.8m to 0.85m running or contrast designer blouse fabric with zari sleeve borders included in the total 6.3m length. If you require custom blouse stitching or embroidery recommendations in Kerala, our stylist can guide you.'
    },
    {
      question: 'What is your return or exchange policy?',
      answer: 'We offer an easy 7-day exchange policy for unused sarees with original tags and packaging intact. In the unlikely event of transit damage or weaving defects, we provide an immediate replacement or full refund.'
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container-custom">
        <div className="faq-header">
          <span className="badge-gold">
            <Sparkles size={13} />
            <span>CLARITY &amp; TRUST</span>
          </span>
          <h2 className="faq-title font-royal">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="faq-subtitle font-editorial">
            Everything you need to know about ordering, delivery timelines, and handloom care across Kerala.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <button type="button" className="faq-question-btn">
                  <span className="faq-q-text font-royal">{faq.question}</span>
                  <span className={`faq-icon ${isOpen ? 'rotate' : ''}`}>
                    <ChevronDown size={17} />
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer font-editorial">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="faq-help-box">
          <div className="help-text-group">
            <h4 className="font-royal">Have a custom inquiry or bulk wedding order?</h4>
            <p className="font-editorial">Speak directly to our founders and saree curators in Kerala.</p>
          </div>
          <a
            href="https://wa.me/917306045546?text=Namaskaram%20Sakhinool!%20I%20have%20a%20specific%20question%20regarding%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={17} />
            <span>Chat on WhatsApp: +91 7306045546</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          padding: 60px 0;
          background: var(--bg-primary);
          position: relative;
        }
        .faq-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 36px auto;
        }
        .faq-title {
          font-size: 2rem;
          color: var(--color-forest);
          margin-top: 8px;
          margin-bottom: 6px;
        }
        [data-theme='dark'] .faq-title {
          color: var(--text-primary);
        }
        .faq-subtitle {
          font-size: 1.02rem;
          color: var(--text-secondary);
        }
        .faq-accordion-wrap {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .faq-item {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .faq-item:hover {
          border-color: var(--color-gold);
        }
        .faq-item.active {
          border-color: var(--color-forest);
          background: var(--bg-surface);
          box-shadow: var(--shadow-sm);
        }
        [data-theme='dark'] .faq-item.active {
          border-color: var(--color-gold);
        }
        .faq-question-btn {
          width: 100%;
          background: transparent;
          border: none;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
        }
        .faq-q-text {
          font-size: 0.98rem;
          color: var(--color-forest);
          font-weight: 600;
        }
        [data-theme='dark'] .faq-q-text {
          color: var(--text-primary);
        }
        .faq-icon {
          color: var(--color-gold);
          transition: transform 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .faq-icon.rotate {
          transform: rotate(180deg);
        }
        .faq-answer {
          padding: 0 20px 18px 20px;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .faq-help-box {
          max-width: 820px;
          margin: 40px auto 0 auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-gold);
          padding: 22px 28px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .help-text-group h4 {
          font-size: 1.1rem;
          color: var(--color-forest);
          margin-bottom: 2px;
        }
        [data-theme='dark'] .help-text-group h4 {
          color: var(--color-gold-bright);
        }
        .help-text-group p {
          font-size: 0.92rem;
          color: var(--text-muted);
        }

        @media (max-width: 700px) {
          .faq-title {
            font-size: 1.65rem;
          }
          .faq-q-text {
            font-size: 0.92rem;
          }
          .faq-help-box {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
