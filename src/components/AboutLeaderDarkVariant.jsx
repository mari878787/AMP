import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowUpRight, X } from 'lucide-react';

const DARK_LEADERS = [
  {
    id: 1,
    name: "Mr. Sai Mohan",
    role: "MANAGING DIRECTOR",
    signatureTitle: "Sai Mohan",
    quote: "His journey is not just about building properties—it is about building people, relationships, and opportunities.",
    desc: "Mr. Sai Mohan is a real estate entrepreneur with 15+ years of experience built through passion, persistence, and real-world experience. As a Builder, Promoter, Marketer, and Entrepreneur, he understands the industry from the ground level to the leadership level.",
    bio: [
      "Mr. Sai Mohan is a real estate entrepreneur with 15+ years of experience built through passion, persistence, and real-world experience. His journey is not just about building properties—it is about building people, relationships, and opportunities.",
      "As a Builder, Promoter, Marketer, and Entrepreneur, he understands the industry from the ground level to the leadership level. What makes his journey special is his belief that success becomes meaningful when the people around you grow along with you.",
      "He welcomes talented professionals, marketers, builders, entrepreneurs, and business minds who dream of creating something bigger. For him, joining a company is not simply accepting a job—it is becoming part of a vision and a journey.",
      "He believes in giving people the freedom to think, the opportunity to perform, and the platform to build their own success. His vision is to create a strong real estate ecosystem where customers, employees, investors, and business partners all grow together.",
      "With experience behind him and a bigger vision ahead, he continues to build not just projects, but a team and a legacy that people can proudly be part of. If you have the ambition to grow, the courage to dream, and the passion to build—Mr. Sai Mohan believes there is always a place for you in the journey."
    ],
    image: "/images/about/team/Mohan_MD1.jpeg"
  },
  {
    id: 2,
    name: "Muralidharan",
    role: "CHIEF EXECUTIVE OFFICER",
    signatureTitle: "Muralidharan",
    quote: "The function of leadership is to produce more leaders, not more followers.",
    desc: "At Aadhithya Mohan Properties, our mission is clear: bridge the gap between aspirational living and enduring real estate value. We're dedicated to maximizing long-term appreciation by providing tailored guidance, exceptional craftsmanship, and in-depth market insights.",
    bio: [
      "Muralidharan brings over 11 years of professional experience, including more than six years in the real estate industry. His journey began in investor relations, where he worked closely with investors as an independent consultant, gaining valuable insight into market dynamics, customer expectations, and long-term value creation. His strategic vision and leadership ultimately led him to assume the role of Chief Executive Officer at Aadhithya Mohan Properties.",
      "Prior to his leadership in real estate, he served as a Marketing Consultant for digital campaigns at Condé Nast India Pvt. Ltd., where he worked on performance-driven marketing initiatives for leading brands. This experience cultivated a strategic approach to brand building, customer engagement, and business growth, which continues to influence his leadership today.",
      "As Chief Executive Officer of Aadhithya Mohan Properties, Muralidharan leads the company's overall operations, strategic planning, business growth, and expansion. His perspective on real estate is founded on two enduring principles: trust and lasting value. He believes every development should inspire confidence through uncompromising integrity while creating enduring value for homeowners and investors alike."
    ],
    image: "/images/about/team/murali.png"
  }
];

export default function AboutLeaderDarkVariant() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedLeader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedLeader]);

  return (
    <div className="dark-leadership-stack" id="executive-leadership">
      {/* Centered Top Section Header */}
      <div className="dark-leader-section-header">
        <ScrollReveal animation="fadeUp">
          <span className="dark-leader-eyebrow">OUR LEADERS</span>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" delay={0.08}>
          <h2 className="section-title dark-leader-title">
            The People Behind Our Vision
          </h2>
        </ScrollReveal>
      </div>

      {DARK_LEADERS.map((leader, idx) => (
        <React.Fragment key={leader.id}>
          {idx > 0 && (
            <div className="dark-leader-divider-wrap">
              <div className="dark-leader-divider-line" />
            </div>
          )}
          <section 
            className={`dark-leader-variant-section ${idx % 2 !== 0 ? 'dark-leader-alt-row' : ''}`}
          >
          <div className="dark-leader-container">
            
            {/* Left Side: Leader Portrait with Seamless Gradient Blend */}
            <div className="dark-leader-image-col">
              <ScrollReveal animation="fadeRight" delay={0.1}>
                <div 
                  className="dark-leader-img-wrapper" 
                  onClick={() => setSelectedLeader(leader)}
                  title={`Click to read full bio of ${leader.name}`}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="dark-leader-img" 
                  />
                  {/* Multi-directional gradient blend mask */}
                  <div className="dark-leader-blend-overlay" />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side: Editorial Quote & Interactive Arrow Button */}
            <div className="dark-leader-content-col">
              <ScrollReveal animation="fadeLeft" delay={0.2}>
                <div className="dark-leader-content-inner">
                  
                  {/* Gold Quote Mark */}
                  <div className="dark-leader-quote-icon">
                    <svg width="44" height="34" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 38V22.8C0 15.2 2.02667 9.24667 6.08 4.94C10.24 0.633333 16.2133 -0.633333 24 0.000001V8.36C19.7333 8.36 16.5333 9.42667 14.4 11.56C12.3733 13.6933 11.36 16.6667 11.36 20.48H24V38H0ZM24 38V22.8C24 15.2 26.0267 9.24667 30.08 4.94C34.24 0.633333 40.2133 -0.633333 48 0.000001V8.36C43.7333 8.36 40.5333 9.42667 38.4 11.56C36.3733 13.6933 35.36 16.6667 35.36 20.48H48V38H24Z" fill="#b48564"/>
                    </svg>
                  </div>

                  {/* Big Quote Headline */}
                  <h2 className="dark-leader-quote-headline">
                    {leader.quote}
                  </h2>

                  {/* Description Paragraph */}
                  <p className="dark-leader-paragraph">
                    {leader.desc}
                  </p>

                  {/* Signature & Interactive Arrow Button for Full Bio */}
                  <button 
                    type="button" 
                    className="dark-leader-interactive-row" 
                    onClick={() => setSelectedLeader(leader)}
                    aria-label={`Read full details for ${leader.name}`}
                    title="Click to view full biography"
                  >
                    <div className="dark-leader-signature-block">
                      <div className="dark-leader-sig-script">
                        {leader.signatureTitle}
                      </div>
                      <div className="dark-leader-role-tag">
                        {leader.role}
                      </div>
                    </div>

                    <div className="dark-leader-arrow-badge">
                      <span>Read Bio</span>
                      <ArrowUpRight size={18} strokeWidth={1.6} />
                    </div>
                  </button>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>
        </React.Fragment>
      ))}

      {/* ── LIGHT ARCHITECTURAL FULL BIOGRAPHY MODAL (MATCHING SCREENSHOT) ── */}
      {selectedLeader && (
        <div className="sobha-bio-modal-backdrop" data-lenis-prevent onClick={() => setSelectedLeader(null)}>
          <div className="sobha-bio-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="sobha-bio-modal-close"
              onClick={() => setSelectedLeader(null)}
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={1.6} />
            </button>

            <div className="sobha-bio-modal-grid">
              {/* Left: Full portrait */}
              <div className="sobha-bio-modal-img-col">
                <img src={selectedLeader.image} alt={selectedLeader.name} />
              </div>

              {/* Right: Scrollable bio */}
              <div className="sobha-bio-modal-info-col" data-lenis-prevent>
                <div className="sobha-bio-modal-inner">
                  <span className="sobha-bio-modal-tag">LEADERSHIP</span>
                  <h3 className="sobha-bio-modal-title">{selectedLeader.name}</h3>
                  <p className="sobha-bio-modal-sub">{selectedLeader.role}</p>
                  <div className="sobha-bio-modal-divider"></div>
                  <div className="sobha-bio-modal-paragraphs">
                    {selectedLeader.bio.map((paragraph, idx) => (
                      <p key={idx} className="sobha-bio-p">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .dark-leadership-stack {
          width: 100%;
          background-color: #050505;
        }

        .dark-leader-section-header {
          text-align: center;
          padding: 100px 20px 20px;
          position: relative;
          z-index: 5;
        }

        .dark-leader-eyebrow {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 8px;
        }

        .dark-leader-title {
          font-family: var(--font-heading);
          color: #ffffff !important;
          margin: 0;
        }

        .dark-leader-divider-wrap {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          box-sizing: border-box;
          position: relative;
          z-index: 5;
        }

        .dark-leader-divider-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(180, 133, 100, 0.45) 15%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(180, 133, 100, 0.45) 85%,
            transparent 100%
          );
        }

        .dark-leader-variant-section {
          background-color: #050505;
          color: #ffffff;
          width: 100%;
          min-height: 85vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 60px 0;
          box-sizing: border-box;
        }

        .dark-leader-container {
          display: grid;
          grid-template-columns: 5.5fr 6.5fr;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Left Column: Image with Smooth Blend Overlay */
        .dark-leader-image-col {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dark-leader-img-wrapper {
          position: relative;
          width: 100%;
          max-width: 580px;
          height: 620px;
          overflow: hidden;
          transition: transform 0.4s ease;
        }

        .dark-leader-img-wrapper:hover .dark-leader-img {
          transform: scale(1.03);
        }

        .dark-leader-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: brightness(0.94) contrast(1.04);
          transition: transform 0.8s ease;
        }

        /* Seamless Blend Overlay */
        .dark-leader-blend-overlay {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(to right, transparent 50%, #050505 98%),
            linear-gradient(to left, transparent 80%, #050505 100%),
            linear-gradient(to bottom, transparent 65%, #050505 100%),
            linear-gradient(to top, transparent 85%, #050505 100%);
          pointer-events: none;
        }

        /* Right Column: Content */
        .dark-leader-content-col {
          padding: 40px 80px 40px 40px;
          box-sizing: border-box;
        }

        .dark-leader-content-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
        }

        .dark-leader-quote-icon {
          margin-bottom: 2px;
          opacity: 0.9;
        }

        .dark-leader-quote-headline {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 400;
          line-height: 1.28;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .dark-leader-paragraph {
          font-family: var(--font-sans);
          font-size: clamp(14px, 1.05vw, 15.5px);
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.72);
          margin: 0;
          max-width: 580px;
        }

        /* Interactive Arrow Button Row */
        .dark-leader-interactive-row {
          background: transparent;
          border: none;
          padding: 0;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          width: 100%;
          max-width: 580px;
          cursor: pointer;
          text-align: left;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 18px;
          transition: all 0.3s ease;
        }

        .dark-leader-interactive-row:hover .dark-leader-arrow-badge {
          background: #b48564;
          color: #ffffff;
          border-color: #b48564;
          transform: translateY(-2px);
        }

        .dark-leader-interactive-row:hover .dark-leader-sig-script {
          color: #ffffff;
        }

        .dark-leader-signature-block {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .dark-leader-sig-script {
          font-family: 'Playfair Display', var(--font-serif), serif;
          font-style: italic;
          font-size: 30px;
          color: #b48564;
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
        }

        .dark-leader-role-tag {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: rgba(255, 255, 255, 0.55);
        }

        .dark-leader-arrow-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 30px;
          border: 1px solid rgba(180, 133, 100, 0.4);
          color: #b48564;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        /* Light Architectural Modal (Matching Screenshot) */
        .sobha-bio-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sobha-bio-modal-box {
          position: relative;
          width: 100%;
          max-width: 900px;
          max-height: 85vh;
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
          animation: modalScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sobha-bio-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
          background: #f0f0f0;
          border: none;
          color: #333333;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .sobha-bio-modal-close:hover {
          background: #b48564;
          color: #ffffff;
          transform: rotate(90deg);
        }

        .sobha-bio-modal-grid {
          display: grid;
          grid-template-columns: 4.5fr 7.5fr;
          height: 100%;
          max-height: 85vh;
        }

        .sobha-bio-modal-img-col {
          height: 100%;
          min-height: 450px;
          background: #f8f8f8;
        }

        .sobha-bio-modal-img-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .sobha-bio-modal-info-col {
          padding: 50px 44px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          background: #ffffff;
        }

        .sobha-bio-modal-tag {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 14px;
          padding: 5px 14px;
          background: rgba(180, 133, 100, 0.08);
          border-radius: 4px;
          align-self: flex-start;
        }

        .sobha-bio-modal-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 34px;
          color: #111111;
          margin: 0 0 6px 0;
          line-height: 1.12;
          letter-spacing: -0.02em;
        }

        .sobha-bio-modal-sub {
          font-family: var(--font-sans);
          font-size: 15px;
          color: #888888;
          margin: 0 0 24px 0;
          font-weight: 400;
        }

        .sobha-bio-modal-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #b48564, #d4a574);
          margin-bottom: 28px;
          border-radius: 2px;
        }

        .sobha-bio-modal-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .sobha-bio-p {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.8;
          color: #444444;
          margin: 0;
        }

        .sobha-bio-p:first-child::first-letter {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 32px;
          font-weight: 400;
          color: #b48564;
          float: left;
          line-height: 1;
          margin-right: 6px;
          margin-top: 4px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .dark-leader-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .dark-leader-content-col {
            padding: 0 30px 40px;
          }
          .dark-leader-img-wrapper {
            height: 480px;
          }
          .sobha-bio-modal-grid {
            grid-template-columns: 1fr;
          }
          .sobha-bio-modal-img-col {
            height: 260px;
            min-height: auto;
            max-height: 260px;
          }
          .sobha-bio-modal-info-col {
            padding: 30px 24px;
          }
        }

        @media (max-width: 600px) {
          .dark-leader-variant-section {
            padding: 50px 0;
          }
          .dark-leader-img-wrapper {
            height: 380px;
          }
          .dark-leader-content-col {
            padding: 0 20px 20px;
          }
        }
      `}} />
    </div>
  );
}
