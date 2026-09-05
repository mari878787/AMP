import React from 'react';
import ScrollReveal from './ScrollReveal';

const PURPOSE_PILLARS = [
  {
    id: 'purposeful-design',
    title: "Purposeful Design",
    paragraphs: [
      "Design goes beyond architecture and aesthetics. It begins with understanding the potential of a location, the character of the land, and the people who will ultimately experience the spaces we create.",
      "From master planning and spatial relationships to functionality, privacy, natural light, and landscape, every element is considered as part of a larger vision. The most enduring spaces are those where thoughtful decisions are experienced effortlessly in everyday life.",
      "Nothing exists without reason. Every detail has a purpose, contributing to developments that are considered, relevant, and distinctive in character."
    ],
    image: "/images/about/thoughtful_design.jpg",
    offset: false
  },
  {
    id: 'uncompromising-standards',
    title: "Uncompromising Standards",
    paragraphs: [
      "Quality extends far beyond what is immediately visible. It is reflected in the materials we select, the methods we adopt, the expertise we bring together, and the attention given to every stage of development.",
      "From planning and construction to finishes and final delivery, every detail is approached with precision, consistency, and accountability. It is a discipline that leaves no room for compromise where quality matters.",
      "Because lasting quality is never the result of a single decision. It is the outcome of countless decisions, made with care and held to the same exacting standard from beginning to completion."
    ],
    image: "/images/about/signature_quality.jpg",
    offset: true // Offset downward for editorial masonry rhythm
  },
  {
    id: 'enduring-value',
    title: "Enduring Value",
    paragraphs: [
      "The true measure of a development is revealed over time—not simply by how it is received at completion, but by how well it continues to serve, remain relevant, and hold its value in the years that follow.",
      "That perspective shapes every decision, from identifying locations with long-term potential and planning responsibly to creating spaces that continue to meet the evolving needs of the people and communities they serve.",
      "What we create should offer more than value for the present. It should become a source of pride, a meaningful asset, and something of lasting significance for generations to come."
    ],
    image: "/images/about/craftsmanship.jpg",
    offset: false
  }
];

export default function AboutPurposeSection({
  tag = "OUR PURPOSE",
  title = "We represent the values of real estate development in modern India and intend to build and serve our customers with the utmost integrity and transparency.",
  pillars = PURPOSE_PILLARS
}) {
  return (
    <section className="about-purpose-section" id="purpose">
      <div className="container purpose-container">
        
        {/* Editorial Header */}
        <ScrollReveal animation="fadeUp" className="purpose-header">
          <span className="section-tag" style={{ marginBottom: '16px' }}>{tag}</span>
          <h2 className="section-title" style={{ maxWidth: '980px', margin: '0 0 70px 0', fontWeight: '400', lineHeight: '1.3' }}>
            {title}
          </h2>
        </ScrollReveal>

        {/* 3-Column Editorial Grid with Staggered Visual Rhythm */}
        <div className="purpose-editorial-grid">
          {pillars.map((pillar, idx) => (
            <ScrollReveal 
              key={pillar.id} 
              animation="fadeUp" 
              delay={0.15 * (idx + 1)} 
              className={`purpose-editorial-col ${pillar.offset ? 'is-offset' : ''}`}
            >
              {/* Floating Black and White Image Card with Hover Zoom */}
              <div className="purpose-img-box">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="purpose-img" 
                />
              </div>

              {/* Editorial Title & Body Text */}
              <div className="purpose-content-box">
                <h3 className="purpose-col-heading">{pillar.title}</h3>
                {pillar.paragraphs ? (
                  pillar.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="body-text" style={{ marginBottom: '14px', lineHeight: '1.68', color: '#333' }}>
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="body-text">{pillar.desc}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      <style>{`
        .about-purpose-section {
          background-color: var(--color-bg-light);
          padding: 110px 0 130px;
          width: 100%;
          box-sizing: border-box;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .purpose-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .purpose-header {
          margin-bottom: 20px;
        }

        /* ── 3-COLUMN EDITORIAL GRID ── */
        .purpose-editorial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          width: 100%;
          position: relative;
        }

        .purpose-editorial-col {
          display: flex;
          flex-direction: column;
          position: relative;
          padding-right: 24px;
          border-right: 1px solid rgba(0, 0, 0, 0.08);
        }

        .purpose-editorial-col:last-child {
          padding-right: 0;
          border-right: none;
        }

        /* Middle Column Staggered Offset */
        .purpose-editorial-col.is-offset {
          padding-top: 100px;
        }

        /* ── BLACK & WHITE IMAGE WITH HOVER ZOOM ── */
        .purpose-img-box {
          width: 100%;
          aspect-ratio: 1 / 1.18;
          border-radius: 8px;
          overflow: hidden;
          background: #111111;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          margin-bottom: 32px;
          cursor: pointer;
        }

        .purpose-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: grayscale(100%) contrast(108%);
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
          display: block;
        }

        .purpose-editorial-col:hover .purpose-img {
          transform: scale(1.06);
          filter: grayscale(100%) contrast(115%) brightness(1.05);
        }

        /* ── EDITORIAL CONTENT ── */
        .purpose-content-box {
          display: flex;
          flex-direction: column;
        }

        .purpose-col-heading {
          font-family: var(--font-heading, serif);
          font-size: clamp(24px, 2.2vw, 30px);
          font-weight: 500;
          color: #111111;
          margin: 0 0 20px 0;
          line-height: 1.25;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }

        .purpose-content-box .body-text {
          font-size: 15px;
          line-height: 1.72;
          color: #444444;
          font-weight: 300;
          margin-bottom: 14px;
        }

        .purpose-content-box .body-text:last-child {
          margin-bottom: 0;
        }

        .purpose-editorial-col:hover .purpose-col-heading {
          color: #b48564;
        }

        /* ── RESPONSIVE MEDIA CONTROLS ── */
        @media (max-width: 1024px) {
          .purpose-editorial-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .purpose-editorial-col {
            padding-right: 0;
            border-right: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            padding-bottom: 50px;
          }
          .purpose-editorial-col:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .purpose-editorial-col.is-offset {
            padding-top: 0;
          }
          .purpose-img-box {
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-width: 600px) {
          .purpose-container {
            padding: 0 20px;
          }
          .about-purpose-section {
            padding: 70px 0 90px;
          }
        }
      `}</style>
    </section>
  );
}
