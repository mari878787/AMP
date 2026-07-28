import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function AboutQuoteStatement({
  tag = "OUR VISION",
  quote = "At Aadhithya Mohan Properties, our vision is to create living ecosystems that redefine modern residential luxury, built on the core belief that developments must go beyond physical structures to craft meaningful, nature-integrated environments where generations can thrive."
}) {
  return (
    <section className="about-quote-statement-section">
      <div className="quote-statement-container">
        <ScrollReveal animation="fadeUp">
          {tag && <span className="quote-tag">{tag}</span>}
          <p className="quote-statement-text">
            {quote}
          </p>
        </ScrollReveal>

        {/* Elegant Star Divider */}
        <div className="quote-star-divider">
          <div className="divider-line"></div>
          <svg 
            className="divider-star" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <div className="divider-line"></div>
        </div>
      </div>

      <style>{`
        .about-quote-statement-section {
          background-color: var(--color-bg-light);
          padding: 60px 24px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          box-sizing: border-box;
        }

        .quote-statement-container {
          max-width: 920px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .quote-tag {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          color: #b48564;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          margin-bottom: 24px;
          display: block;
        }

        .quote-statement-text {
          font-family: var(--font-heading, serif);
          font-size: clamp(26px, 3.4vw, 42px);
          line-height: 1.45;
          color: #000;
          font-weight: 400;
          letter-spacing: -0.015em;
          margin: 0;
        }

        .quote-star-divider {
          width: 100%;
          max-width: 520px;
          margin-top: 85px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background-color: #DDD9CD;
        }

        .divider-star {
          width: 40px;
          height: 40px;
          color: #9C9283;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .about-quote-statement-section {
            padding: 80px 20px 60px;
          }
          .quote-statement-text {
            font-size: 22px;
            line-height: 1.5;
          }
          .quote-star-divider {
            margin-top: 50px;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}
