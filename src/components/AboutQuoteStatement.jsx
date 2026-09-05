import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import Button from './Button';

const STATEMENTS = {
  vision: {
    tag: "OUR VISION",
    quote: "Among the Very Few",
    subDesc: "Our vision is to earn our place among Chennai's most respected real estate developers, recognised not by the number of projects we undertake, but by the confidence our name inspires. We do not aspire to be the largest. We aspire to be among the very few whose name on a development is reason enough to look no further.",
    buttonText: "EXPLORE PROJECTS",
    buttonLink: "/projects"
  },
  mission: {
    tag: "OUR MISSION",
    quote: "To Make Every Investment a Source of Lasting Pride.",
    subDesc: "Our mission is to create places people are proud to own, families are proud to call home, and future generations are proud to inherit. Every decision we make reflects our commitment to integrity, thoughtful planning, exceptional quality, and responsible execution—creating developments that stand the test of time and become enduring assets for the people who invest in them.",
    buttonText: "EXPLORE PROJECTS",
    buttonLink: "/projects"
  }
};

export default function AboutQuoteStatement() {
  const [activeTab, setActiveTab] = useState('vision');
  const currentData = STATEMENTS[activeTab];

  return (
    <section className="about-quote-statement-section">
      <div className="container quote-statement-container">
        
        {/* Top Row: Pipe Tab Switcher */}
        <ScrollReveal animation="fadeUp" className="quote-header-row">
          <div className="quote-pipe-switcher">
            <button 
              className={`quote-pipe-btn ${activeTab === 'vision' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              OUR VISION
            </button>
            <span className="quote-pipe-divider">|</span>
            <button 
              className={`quote-pipe-btn ${activeTab === 'mission' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              OUR MISSION
            </button>
          </div>
        </ScrollReveal>

        {/* 2-Column Split Content Grid */}
        <div className="quote-split-grid">
          
          {/* Left Column: Big Headline */}
          <ScrollReveal animation="fadeUp" delay={0.1} className="quote-left-col">
            <h2 className="quote-headline" key={activeTab}>
              {currentData.quote}
            </h2>
          </ScrollReveal>

          {/* Right Column: Sub-Description & Dark Pill CTA Button */}
          <ScrollReveal animation="fadeUp" delay={0.2} className="quote-right-col">
            <div className="quote-right-content" key={`desc-${activeTab}`}>
              <p className="body-text" style={{ margin: '0 0 28px 0' }}>
                {currentData.subDesc}
              </p>
              <Button href={currentData.buttonLink} theme="dark">
                {currentData.buttonText}
              </Button>
            </div>
          </ScrollReveal>

        </div>

      </div>

      <style>{`
        .about-quote-statement-section {
          background-color: var(--color-white);
          padding: 0px 0 30px;
          width: 100%;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .quote-statement-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
        }

        .quote-header-row {
          margin-bottom: 36px;
        }

        /* ── MINIMAL PIPE-DIVIDED TAB SWITCHER ── */
        .quote-pipe-switcher {
          display: inline-flex;
          align-items: center;
          gap: 18px;
        }

        .quote-pipe-btn {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          color: #999999;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          background: transparent;
          border: none;
          padding: 4px 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quote-pipe-btn:hover {
          color: #111111;
        }

        .quote-pipe-btn.is-active {
          color: #B58767;
        }

        .quote-pipe-divider {
          color: rgba(0, 0, 0, 0.25);
          font-size: 14px;
          font-weight: 300;
          user-select: none;
        }

        /* ── 2-COLUMN SPLIT GRID ── */
        .quote-split-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
          width: 100%;
        }

        .quote-left-col {
          display: flex;
          flex-direction: column;
        }

        .quote-headline {
          font-family: var(--font-heading, serif);
          font-size: clamp(32px, 3.5vw, 46px);
          font-weight: 400;
          color: #111111;
          line-height: 1.25;
          letter-spacing: -0.015em;
          margin: 0;
          animation: fadeInTitle 0.45s ease forwards;
        }

        @keyframes fadeInTitle {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── RIGHT COLUMN ── */
        .quote-right-col {
          display: flex;
        }

        .quote-right-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          animation: fadeInDesc 0.45s ease forwards;
        }

        @keyframes fadeInDesc {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }



        .quote-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          background: #111111;
          border: 1px solid #111111;
          padding: 14px 32px;
          border-radius: 40px !important;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          transition: all 0.35s ease;
        }

        .quote-cta-btn:hover {
          background: #b48564;
          color: #ffffff;
          border-color: #b48564;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(180, 133, 100, 0.25);
        }

        .btn-arrow {
          font-size: 14px;
          transition: transform 0.3s ease;
        }

        .quote-cta-btn:hover .btn-arrow {
          transform: translate(2px, -2px);
        }

        @media (max-width: 960px) {
          .about-quote-statement-section {
            padding: 70px 0;
          }
          .quote-statement-container {
            padding: 0 24px;
          }
          .quote-split-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: flex-start;
          }
          .quote-right-col {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
