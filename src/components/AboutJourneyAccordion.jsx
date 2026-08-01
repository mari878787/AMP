import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const JOURNEY_STEPS = [
  {
    id: '1976',
    year: '1976',
    subtitle: 'Great Things Start Small',
    desc: "With humble beginnings in India, the long-standing journey commenced with an unwavering commitment to architectural craftsmanship and integrity.",
    image: '/images/home/project-image-1.png'
  },
  {
    id: '1995',
    year: '1995',
    subtitle: 'Expansion into Luxury Real Estate',
    desc: "Expanded into prime residential developments, setting new benchmarks in quality, precision engineering, and customer trust.",
    image: '/images/home/project-image-2.png'
  },
  {
    id: '2003',
    year: '2003',
    subtitle: 'Pioneering Innovation',
    desc: "Introduced integrated master planning and sustainable architectural design across landmark urban communities.",
    image: '/images/maia/1.png'
  },
  {
    id: '2014',
    year: '2014',
    subtitle: 'Global Standards',
    desc: "Expanded vision and standards, bringing world-class spatial design and luxury finishes to modern homebuyers.",
    image: '/images/maia/3.png'
  },
  {
    id: '2016',
    year: '2016',
    subtitle: 'Aadhithya Mohan Properties',
    desc: "Established Aadhithya Mohan Properties in Medavakkam, Chennai — delivering ultra-luxury boutique villas and premium plots.",
    image: '/images/maia/5.png'
  },
  {
    id: '2024',
    year: '2024',
    subtitle: 'Future Horizons',
    desc: "Over 600,000 sq.ft. of prime land developed, continuing to redefine luxury living for generations to come.",
    image: '/images/hero_placeholders/chinese-city.jpg'
  }
];

export default function AboutJourneyAccordion() {
  const [activeId, setActiveId] = useState(JOURNEY_STEPS[0].id);

  return (
    <section className="about-journey-section">
      <div className="container journey-container">

        {/* Top Header Row */}
        <div className="journey-header">
          <ScrollReveal animation="fadeUp">
            <span className="journey-tag">OUR JOURNEY</span>
            <h2 className="journey-title">
              A Journey Through the Times<span className="journey-title-comma">,</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Interactive Expanding Accordion Grid */}
        <div className="journey-accordion-wrap">
          {JOURNEY_STEPS.map((step) => {
            const isActive = step.id === activeId;

            return (
              <div
                key={step.id}
                className={`journey-card ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveId(step.id)}
                onMouseEnter={() => setActiveId(step.id)}
              >
                {/* Background Image */}
                <div 
                  className="journey-card-bg"
                  style={{ backgroundImage: `url(${step.image})` }}
                />

                {/* Dark Gradient Overlay */}
                <div className="journey-card-overlay" />

                {/* Active Card Content (Left / Full Display) */}
                <div className="journey-card-content">
                  <div className="journey-card-year-row">
                    <span className="journey-card-year">{step.year}</span>
                    <span className="journey-card-dash">-</span>
                    <span className="journey-card-subtitle">{step.subtitle}</span>
                  </div>
                  <p className="journey-card-desc">{step.desc}</p>
                </div>

                {/* Inactive Card Vertical Year Label */}
                <div className="journey-card-inactive-label">
                  <span>{step.year}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .about-journey-section {
          background-color: var(--color-bg-light);
          padding: 60px 0;
          width: 100%;
          box-sizing: border-box;
        }

        .journey-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .journey-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 50px;
        }

        .journey-tag {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          color: #444444;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          display: block;
          margin-bottom: 12px;
        }

        .journey-title {
          font-family: var(--font-heading, serif);
          font-size: clamp(32px, 3.8vw, 48px);
          font-style: italic;
          font-weight: 400;
          color: #000000;
          margin: 0;
          line-height: 1.15;
        }

        .journey-title-comma {
          font-style: normal;
        }

        .journey-legacy-btn {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          background: transparent;
          border: 1px solid #000000;
          padding: 12px 28px;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .journey-legacy-btn:hover {
          background: #000000;
          color: #ffffff;
        }

        /* ── ACCORDION CONTAINER ── */
        .journey-accordion-wrap {
          display: flex;
          height: 480px;
          gap: 6px;
          border-radius: 12px;
          overflow: hidden;
        }

        .journey-card {
          position: relative;
          flex: 1;
          height: 100%;
          cursor: pointer;
          overflow: hidden;
          transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .journey-card.is-active {
          flex: 4.2;
        }

        .journey-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.8s ease, filter 0.6s ease;
          filter: grayscale(100%) brightness(0.65);
        }

        .journey-card.is-active .journey-card-bg {
          filter: grayscale(0%) brightness(0.85);
          transform: scale(1.03);
        }

        .journey-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%);
          transition: opacity 0.6s ease;
        }

        .journey-card.is-active .journey-card-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%);
        }

        /* ── ACTIVE CARD CONTENT ── */
        .journey-card-content {
          position: absolute;
          bottom: 40px;
          left: 40px;
          right: 40px;
          z-index: 5;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s;
          pointer-events: none;
        }

        .journey-card.is-active .journey-card-content {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .journey-card-year-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .journey-card-year {
          font-family: var(--font-heading, serif);
          font-size: 38px;
          font-weight: 400;
          color: #ffffff;
          line-height: 1;
        }

        .journey-card-dash {
          color: #ffffff;
          font-size: 24px;
        }

        .journey-card-subtitle {
          font-family: var(--font-heading, serif);
          font-size: 20px;
          font-style: italic;
          color: #ffffff;
        }

        .journey-card-desc {
          font-family: var(--font-sans);
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          max-width: 480px;
          margin: 0;
        }

        /* ── INACTIVE VERTICAL YEAR LABEL ── */
        .journey-card-inactive-label {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
          opacity: 1;
          transition: opacity 0.4s ease;
        }

        .journey-card.is-active .journey-card-inactive-label {
          opacity: 0;
          pointer-events: none;
        }

        .journey-card-inactive-label span {
          font-family: var(--font-heading, serif);
          font-size: 26px;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: 0.05em;
          text-shadow: 0 2px 8px rgba(0,0,0,0.6);
        }

        @media (max-width: 960px) {
          .about-journey-section {
            padding: 70px 0;
          }
          .journey-container {
            padding: 0 24px;
          }
          .journey-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .journey-accordion-wrap {
            flex-direction: column;
            height: auto;
          }
          .journey-card {
            height: 160px;
            flex: none !important;
          }
          .journey-card.is-active {
            height: 320px;
          }
          .journey-card-content {
            bottom: 24px;
            left: 24px;
            right: 24px;
          }
          .journey-card-year {
            font-size: 28px;
          }
          .journey-card-subtitle {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
