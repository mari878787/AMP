import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const JOURNEY_STEPS = [
  {
    id: '2016',
    year: '2016',
    title: 'Where It Began',
    desc: 'Aadhithya Mohan Properties began with a simple belief—that quality homeownership should be within reach. Starting with residential plotted developments, we laid the foundations of a business guided by trust, responsible development, and the creation of lasting value.',
    image: '/images/about/journey_2016.png'
  },
  {
    id: '2018',
    year: '2018',
    title: 'Beyond Land. Into Living.',
    desc: 'As our ambitions grew, so did the scope of our developments. We expanded into villas and apartments, marking our evolution from creating residential layouts to building communities designed around the aspirations of the families who call them home.',
    image: '/images/about/journey_2018.png'
  },
  {
    id: '2021',
    year: '2021',
    title: 'A Milestone of Recognition',
    desc: 'Our commitment to execution and value creation earned us the “Short Time Achiever” Award—an important milestone that recognised our progress and strengthened our pursuit of higher standards with every development.',
    image: '/images/about/journey_2021.png'
  },
  {
    id: '2024',
    year: '2024',
    title: 'A Reputation Built on Trust',
    desc: "Years of consistent execution had established Aadhithya Mohan Properties as a growing presence in Chennai's real estate landscape. With a diverse portfolio of CMDA, DTCP and RERA-approved developments, this chapter reflected something more meaningful than growth—the confidence earned from customers, investors, and partners along the way.",
    image: '/images/about/journey_2024.png'
  },
  {
    id: '2026',
    year: '2026',
    title: 'A New Standard of Ambition',
    desc: 'With a strong foundation in place, Aadhithya Mohan Properties entered a defining new phase—expanding its vision towards more distinctive residences and thoughtfully conceived communities. It marked an evolution in our approach to real estate, with greater emphasis on design, craftsmanship, and considered execution at every stage, while remaining anchored to the principles that have guided us from the beginning.',
    image: '/images/about/journey_2026.png'
  }
];

export default function AboutJourneyAccordion() {
  const [activeIdx, setActiveIdx] = useState(0); // Default to first card (2016)

  return (
    <section className="about-journey-section" id="journey">
      <div className="journey-header-container">
        {/* Section Header */}
        <ScrollReveal className="section-header" animation="fadeUp" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag" style={{ marginBottom: '14px' }}>OUR STORY</span>
          <h2 className="section-title" style={{ margin: '0 0 14px 0' }}>
            Our Journey
          </h2>
          <p className="body-text">
            A decade of architectural ambition, transformative growth, and creating enduring homes across Chennai.
          </p>
        </ScrollReveal>
      </div>

      {/* Horizontal Expanding Slice Accordion (Full Width) */}
      <div className="journey-accordion-strip">
        {JOURNEY_STEPS.map((step, idx) => {
          const isActive = idx === activeIdx;

          return (
            <div
              key={step.id}
              className={`journey-slice-card ${isActive ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(idx)}
              onMouseEnter={() => setActiveIdx(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Milestone year ${step.year} - ${step.title}`}
            >
              {/* Background Image */}
              <img 
                src={step.image} 
                alt={`${step.year} - ${step.title}`}
                className="journey-slice-img" 
              />

              {/* Dark Gradient Overlay */}
              <div className="journey-slice-overlay" />

              {/* ACTIVE CARD: Bottom Content Overlay */}
              <div className="journey-active-content">
                <div className="journey-year-pill">{step.year}</div>
                <h3 className="journey-active-title">{step.title}</h3>
                <p className="journey-active-desc">{step.desc}</p>
              </div>

              {/* INACTIVE CARD: Vertical Text Column */}
              <div className="journey-vertical-label">
                <span className="journey-vertical-year">{step.year}</span>
                <span className="journey-vertical-dot">·</span>
                <span className="journey-vertical-title">{step.title}</span>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .about-journey-section {
          background-color: var(--color-white);
          padding: 60px 0 0px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .journey-header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ── HORIZONTAL EXPANDING SLICE ACCORDION ── */
        .journey-accordion-strip {
          display: flex;
          align-items: stretch;
          width: 100%;
          height: 560px;
          gap: 4px;
          overflow: hidden;
        }

        .journey-slice-card {
          position: relative;
          height: 100%;
          flex: 1;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.65s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          background: #111111;
        }

        .journey-slice-card.is-active {
          flex: 4.2;
          cursor: default;
        }

        /* ── BACKGROUND IMAGE (COLOR VS BLACK & WHITE) ── */
        .journey-slice-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: filter 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          filter: grayscale(100%) brightness(0.65) contrast(105%);
          display: block;
        }

        .journey-slice-card.is-active .journey-slice-img {
          filter: grayscale(0%) brightness(0.95) contrast(100%);
          transform: scale(1.04);
        }

        .journey-slice-card:hover .journey-slice-img,
        .journey-slice-card.is-active:hover .journey-slice-img {
          transform: scale(1.2);
        }

        /* ── GRADIENT OVERLAY ── */
        .journey-slice-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.15) 100%);
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        /* ── ACTIVE CARD CONTENT ── */
        .journey-active-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 36px 36px 36px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          z-index: 5;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s;
          pointer-events: none;
        }

        .journey-slice-card.is-active .journey-active-content {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .journey-year-pill {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          background: rgba(180, 133, 100, 0.85);
          padding: 4px 14px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .journey-active-title {
          font-family: var(--font-heading);
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 400;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .journey-active-desc {
          font-family: var(--font-sans);
          font-size: 14.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          max-width: 600px;
        }

        /* ── INACTIVE CARD VERTICAL TEXT ── */
        .journey-vertical-label {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          gap: 12px;
          z-index: 4;
          opacity: 1;
          transition: opacity 0.3s ease;
          color: #ffffff;
          padding: 24px 0;
          pointer-events: none;
        }

        .journey-slice-card.is-active .journey-vertical-label {
          opacity: 0;
        }

        .journey-vertical-year {
          font-family: var(--font-sans);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #ffffff;
        }

        .journey-vertical-dot {
          color: #b48564;
          font-size: 16px;
        }

        .journey-vertical-title {
          font-family: var(--font-sans);
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.75);
          white-space: nowrap;
        }

        /* ── RESPONSIVE MEDIA CONTROLS ── */
        @media (max-width: 900px) {
          .journey-accordion-strip {
            flex-direction: column;
            height: auto;
            gap: 16px;
          }
          .journey-slice-card {
            height: 140px;
            width: 100%;
            flex: none !important;
          }
          .journey-slice-card.is-active {
            height: 380px;
          }
          .journey-vertical-label {
            writing-mode: horizontal-tb;
            transform: none;
            flex-direction: row;
            justify-content: flex-start;
            padding: 24px;
            align-items: center;
          }
          .journey-slice-img {
            filter: grayscale(0%) brightness(0.85);
          }
          .journey-active-content {
            padding: 24px;
          }
        }

        @media (max-width: 600px) {
          .journey-header-container {
            padding: 0 20px;
          }
          .journey-slice-card.is-active {
            height: 420px;
          }
          .journey-active-title {
            font-size: 22px;
          }
          .journey-active-desc {
            font-size: 13.5px;
            line-height: 1.6;
          }
        }
      `}</style>
    </section>
  );
}
