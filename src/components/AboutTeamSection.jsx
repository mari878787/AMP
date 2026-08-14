import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import { X, ArrowUpRight } from 'lucide-react';

const LEADERSHIP_MEMBERS = [
  {
    id: 1,
    name: "V. Sai Mohan",
    role: "Founder, Chairman & MD",
    bio: [
      "V. Sai Mohan is the Founder, Chairman & MD of Aadhithya Mohan Properties. A visionary first-generation entrepreneur, he has spearheaded landmark residential developments across Chennai with an unyielding commitment to architectural perfection, enduring quality, and customer trust."
    ],
    image: "/images/team/sai-mohan.png"
  },
  {
    id: 2,
    name: "Muralidharan",
    role: "Chief Executive Officer",
    bio: [
      "Muralidharan brings over 11 years of professional experience, including more than six years in the real estate industry. His journey began in investor relations, where he worked closely with investors as an independent consultant, gaining valuable insight into market dynamics, customer expectations, and long-term value creation. His strategic vision and leadership ultimately led him to assume the role of Chief Executive Officer at Aadhithya Mohan Properties.",
      "Prior to his leadership in real estate, he served as a Marketing Consultant for digital campaigns at Condé Nast India Pvt. Ltd., where he worked on performance-driven marketing initiatives for leading brands. This experience cultivated a strategic approach to brand building, customer engagement, and business growth, which continues to influence his leadership today.",
      "As Chief Executive Officer of Aadhithya Mohan Properties, Muralidharan leads the company's overall operations, strategic planning, business growth, and expansion. His perspective on real estate is founded on two enduring principles: trust and lasting value. He believes every development should inspire confidence through uncompromising integrity while creating enduring value for homeowners and investors alike. Guided by this philosophy, he is committed to delivering thoughtfully planned communities that reflect exceptional quality, timeless design, and a legacy that extends well beyond the homes themselves."
    ],
    image: "/images/team/murali.png"
  },
  {
    id: 3,
    name: "Afroz",
    role: "Vice-President, Sales & Marketing",
    bio: [
      "Afroz manages end-to-end customer engagement, sales strategy, and brand outreach. With deep market insight and a customer-first approach, he ensures every client experiences seamless service and absolute transparency throughout their luxury home-buying journey."
    ],
    image: "/images/team/bala.png"
  },
  {
    id: 4,
    name: "Bala",
    role: "Vice-President, Planning & Development",
    bio: [
      "Bala oversees project planning, architectural coordination, and operational development. With an eye for structural excellence and regulatory compliance, he ensures every development meets the highest standards of safety and sustainability."
    ],
    image: "/images/team/afroz.jpg"
  }
];

export default function AboutTeamSection({
  teamMembers = LEADERSHIP_MEMBERS
}) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const sectionRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedMember]);

  return (
    <section className="about-team-section" id="team" ref={sectionRef}>

      {/* Section Header */}
      <div className="team-header-container">
        <ScrollReveal animation="fadeUp">
          <span className="team-eyebrow">Leadership</span>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" delay={0.08}>
          <h2 className="section-title">
            The Architects of Our Vision
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" delay={0.15}>
          <p className="text-body">
            Visionary leaders driving architectural craftsmanship and strategic excellence across every development.
          </p>
        </ScrollReveal>
      </div>

      {/* Executive Cards — Full-width 2×2 Cinematic Grid */}
      <div className="team-grid-wrap">
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div 
              className="team-grid-col" 
              key={member.id || idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <ScrollReveal animation="fadeUp" delay={idx * 0.12} style={{ height: '100%', width: '100%' }}>
                <div
                  className={`team-card ${hoveredIdx !== null && hoveredIdx !== idx ? 'is-dimmed' : ''}`}
                  onClick={() => setSelectedMember(member)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View bio for ${member.name}`}
                >
                {/* Portrait */}
                <div className="team-card-portrait">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-card-photo"
                  />
                  {/* Cinematic gradient overlay */}
                  <div className="team-card-gradient" />
                </div>

                {/* Info strip at bottom */}
                <div className="team-card-meta">
                  <div className="team-card-meta-left">
                    {/* <span className="team-card-index">0{idx + 1}</span> */}
                    <div className="team-card-meta-text">
                      <h3 className="team-card-name">{member.name}</h3>
                      <p className="team-card-role">{member.role}</p>
                    </div>
                  </div>
                  <div className="team-card-arrow">
                    <ArrowUpRight size={20} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Gold accent bar */}
                <div className="team-card-accent" />
              </div>
            </ScrollReveal>
          </div>
          ))}
        </div>
      </div>

      {/* Bio Modal — Cinematic Full-Screen */}
      {selectedMember && (
        <div className="team-modal-backdrop" data-lenis-prevent onClick={() => setSelectedMember(null)}>
          <div className="team-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="team-modal-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Close modal"
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            <div className="team-modal-grid">
              {/* Left: Full-height portrait */}
              <div className="team-modal-img-wrap">
                <img src={selectedMember.image} alt={selectedMember.name} />
              </div>

              {/* Right: Scrollable bio content */}
              <div className="team-modal-info" data-lenis-prevent>
                <div className="team-modal-info-inner">
                  <span className="team-modal-tag">Leadership</span>
                  <h3 className="team-modal-name">{selectedMember.name}</h3>
                  <p className="team-modal-role">{selectedMember.role}</p>
                  <div className="team-modal-divider"></div>
                  <div className="team-modal-bio">
                    {Array.isArray(selectedMember.bio)
                      ? selectedMember.bio.map((para, i) => (
                          <p key={i} className="team-modal-bio-para">{para}</p>
                        ))
                      : <p className="team-modal-bio-para">{selectedMember.bio}</p>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .about-team-section {
          width: 100%;
          background-color: #faf9f7;
          box-sizing: border-box;
          padding: 100px 0 110px;
          position: relative;
          overflow: hidden;
        }

        /* ── HEADER ── */
        .team-header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 60px;
          margin-bottom: 64px;
          text-align: center;
        }

        .team-eyebrow {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 16px;
        }

        .team-headline {
          font-family: var(--font-heading);
          font-size: clamp(36px, 4.5vw, 58px);
          font-weight: 400;
          color: #111111;
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin: 0 0 20px 0;
        }

        .team-subline {
          font-family: var(--font-sans);
          font-size: 17px;
          font-weight: 400;
          color: #666666;
          line-height: 1.6;
          margin: 0 auto;
          max-width: 560px;
        }

        /* ── CINEMATIC 2×2 GRID ── */
        .team-grid-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 60px;
        }

        .team-grid {
          display: flex;
          gap: 16px;
          width: 100%;
        }

        .team-grid-col {
          flex: 1;
          height: 520px;
          transition: flex 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-grid:hover .team-grid-col {
          flex: 1;
        }

        .team-grid .team-grid-col:hover {
          flex: 1.8;
        }

        /* ── CARD ── */
        .team-card {
          position: relative;
          height: 100%;
          width: 100%;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          transition: opacity 0.5s ease;
        }

        .team-card.is-dimmed {
          opacity: 0.6;
        }


        /* Portrait container */
        .team-card-portrait {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .team-card-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        /* Gradient overlay */
        .team-card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 8, 6, 0.95) 0%,
            rgba(10, 8, 6, 0.6) 30%,
            rgba(10, 8, 6, 0.15) 55%,
            transparent 80%
          );
          transition: opacity 0.5s ease;
        }

        .team-card:hover .team-card-gradient {
          background: linear-gradient(
            to top,
            rgba(10, 8, 6, 0.98) 0%,
            rgba(10, 8, 6, 0.7) 35%,
            rgba(10, 8, 6, 0.2) 60%,
            transparent 80%
          );
        }

        /* Meta info at bottom */
        .team-card-meta {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 28px 24px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          z-index: 3;
        }

        .team-card-meta-left {
          display: flex;
          align-items: flex-end;
          gap: 16px;
        }

        .team-card-index {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.35);
          line-height: 1;
          margin-bottom: 3px;
          transition: color 0.4s ease;
        }

        .team-card-meta-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .team-card-name {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 400;
          color: #ffffff;
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.01em;
          transition: color 0.4s ease;
        }

        .team-card:hover .team-card-name {
          color: #ffffff;
        }

        .team-card-role {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.55);
          margin: 0;
          line-height: 1.3;
          transition: color 0.4s ease;
        }

        .team-card:hover .team-card-role {
          color: rgba(255, 255, 255, 0.8);
        }

        /* Arrow icon */
        .team-card-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.5);
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateY(6px);
        }

        .team-card:hover .team-card-arrow {
          opacity: 1;
          transform: translateY(0);
          border-color: #b48564;
          color: #b48564;
          background: rgba(180, 133, 100, 0.08);
        }

        /* Gold accent bar (bottom edge) */
        .team-card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #b48564 0%, #d4a574 50%, #b48564 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 5;
        }

        /* ── BIO MODAL — CINEMATIC FULL-SCREEN ── */
        .team-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 36px;
          animation: teamFadeIn 0.3s ease forwards;
        }

        .team-modal-content {
          background: #ffffff;
          border-radius: 8px;
          max-width: 1060px;
          width: 100%;
          max-height: 88vh;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
          animation: teamScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .team-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #333333;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .team-modal-close:hover {
          background: #111111;
          border-color: #111111;
          color: #ffffff;
          transform: rotate(90deg);
        }

        .team-modal-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          height: 100%;
          max-height: 88vh;
        }

        .team-modal-img-wrap {
          height: 100%;
          min-height: 520px;
          max-height: 88vh;
          background: #0a0806;
          position: relative;
          overflow: hidden;
        }

        .team-modal-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .team-modal-info {
          overflow-y: auto;
          max-height: 88vh;
          scrollbar-width: thin;
          scrollbar-color: rgba(180, 133, 100, 0.3) transparent;
        }

        .team-modal-info::-webkit-scrollbar {
          width: 4px;
        }

        .team-modal-info::-webkit-scrollbar-track {
          background: transparent;
        }

        .team-modal-info::-webkit-scrollbar-thumb {
          background: rgba(180, 133, 100, 0.3);
          border-radius: 4px;
        }

        .team-modal-info-inner {
          padding: 56px 48px 48px;
        }

        .team-modal-tag {
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
        }

        .team-modal-name {
          font-family: var(--font-heading);
          font-size: 34px;
          color: #111111;
          margin: 0 0 6px 0;
          line-height: 1.12;
          letter-spacing: -0.02em;
        }

        .team-modal-role {
          font-family: var(--font-sans);
          font-size: 15px;
          color: #888888;
          margin: 0 0 24px 0;
          font-weight: 400;
        }

        .team-modal-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #b48564, #d4a574);
          margin-bottom: 28px;
          border-radius: 2px;
        }

        .team-modal-bio {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .team-modal-bio-para {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.8;
          color: #444444;
          margin: 0;
        }

        .team-modal-bio-para:first-child::first-letter {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 400;
          color: #b48564;
          float: left;
          line-height: 1;
          margin-right: 6px;
          margin-top: 4px;
        }

        @keyframes teamFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes teamScaleUp {
          from { opacity: 0; transform: scale(0.96) translateY(16px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1200px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .team-card {
            height: 480px;
          }
        }

        @media (max-width: 768px) {
          .about-team-section {
            padding: 70px 0 80px;
          }
          .team-header-container,
          .team-grid-wrap {
            padding: 0 24px;
          }
          .team-header-container {
            margin-bottom: 40px;
          }
          .team-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .team-card {
            height: 440px;
          }
          .team-modal-backdrop {
            padding: 16px;
          }
          .team-modal-content {
            max-height: 92vh;
          }
          .team-modal-grid {
            grid-template-columns: 1fr;
            max-height: 92vh;
          }
          .team-modal-img-wrap {
            height: 280px;
            min-height: auto;
            max-height: 280px;
          }
          .team-modal-info {
            max-height: calc(92vh - 280px);
          }
          .team-modal-info-inner {
            padding: 32px 24px;
          }
          .team-modal-name {
            font-size: 26px;
          }
          .team-headline br {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .team-card {
            height: 400px;
          }
          .team-card-name {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}