import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function VisionSection() {
  return (
    <section className="vision-section">
      <div className="container vision-container">
        
        {/* Curved Four-Point Star Icon */}
        <ScrollReveal animation="fadeUp" delay={0.05}>
          <div className="vision-icon-wrap">
            <svg 
              width="38" 
              height="38" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="vision-star"
            >
              <path d="M12 2c0 5.523 4.477 10 10 10-5.523 0-10 4.477-10 10 0-5.523-4.477-10-10-10 5.523 0 10-4.477 10-10z" />
            </svg>
          </div>
        </ScrollReveal>

        {/* Brand Statement */}
        <ScrollReveal animation="fadeUp" delay={0.15}>
          <h2 className="vision-text">
            Embracing the highest standards of design, execution, sustainability and professionalism, we create spaces that enhance our ecosystem.
          </h2>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal animation="fadeUp" delay={0.25}>
          <div className="vision-cta-wrap">
            <a href="/projects" className="btn-luxury-outline ">
               VIEW OUR PROJECTS
            </a>
          </div>
        </ScrollReveal>

      </div>

      <style>{`
        .vision-section {
          background-color: var(--color-bg-light);
          padding: 0px 0 80px 0;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .vision-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 960px; /* Bounded reading width */
          margin: 0 auto;
        }

        .vision-icon-wrap {
          margin-bottom: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .vision-star {
          color: #C49F85; /* Elegant warm bronze color */
        }

        .vision-text {
          font-family: var(--font-heading);
          font-size: clamp(22px, 3.2vw, 34px);
          font-weight: 300;
          line-height: 1.45;
          text-transform: none; /* Sentence case matching screenshot */
          letter-spacing: 0.02em;
          margin-bottom: 40px;
          max-width: 820px;
        }

       

        @media (max-width: 768px) {
          .vision-section {
            padding: 70px 0 60px 0;
          }
          .vision-text {
            font-size: 20px;
            margin-bottom: 30px;
          }
      `}</style>
    </section>
  );
}
