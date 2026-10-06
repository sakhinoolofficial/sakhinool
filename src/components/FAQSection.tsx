'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

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
                    <ChevronDown size={18} />
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
            <MessageCircle size={18} />
            <span>Chat on WhatsApp: +91 7306045546</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          padding: 80px 0;
          background: #051910;
          position: relative;
        }
        .faq-header {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 48px auto;
        }
        .faq-title {
          font-size: 2.2rem;
          color: var(--cream-soft);
          margin-top: 10px;
          margin-bottom: 8px;
        }
        .faq-subtitle {
          font-size: 1.08rem;
          color: var(--cream-muted);
        }
        .faq-accordion-wrap {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          background: #09261a;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .faq-item:hover {
          border-color: rgba(212, 175, 55, 0.4);
        }
        .faq-item.active {
          border-color: var(--gold-primary);
          background: #0c3022;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }
        .faq-question-btn {
          width: 100%;
          background: transparent;
          border: none;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
        }
        .faq-q-text {
          font-size: 1.05rem;
          color: var(--cream-soft);
          font-weight: 600;
        }
        .faq-icon {
          color: var(--gold-primary);
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .faq-icon.rotate {
          transform: rotate(180deg);
        }
        .faq-answer {
          padding: 0 24px 20px 24px;
          font-size: 1.02rem;
          color: var(--cream-muted);
          line-height: 1.65;
          animation: fadeIn 0.2s ease-out;
        }
        .faq-help-box {
          max-width: 860px;
          margin: 48px auto 0 auto;
          background: linear-gradient(135deg, rgba(10, 38, 26, 0.9) 0%, rgba(5, 25, 16, 0.95) 100%);
          border: 1px solid rgba(212, 175, 55, 0.35);
          padding: 24px 32px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .help-text-group h4 {
          font-size: 1.15rem;
          color: var(--gold-light);
          margin-bottom: 4px;
        }
        .help-text-group p {
          font-size: 0.95rem;
          color: var(--cream-muted);
        }

        @media (max-width: 700px) {
          .faq-title {
            font-size: 1.85rem;
          }
          .faq-q-text {
            font-size: 0.95rem;
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
