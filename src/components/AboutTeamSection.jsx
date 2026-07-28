import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function AboutTeamSection({
  founderQuote = "PERFECTION IS NOT A DREAM, BUT A REALITY THAT I STRIVE TOWARDS IN MY WORK",
  founderName = "V. SAI MOHAN",
  founderRole = "Founder, Chairman & MD",
  founderImage = "/images/team/sai-mohan.png",
  teamMembers = [
    
    {
      id: 2,
      name: "Murali Dharan",
      role: "Chief Executive Officer – CEO",
      image: "/images/team/murali.png"
    },
    {
      id: 3,
      name: "Rishad Khergamwala",
      role: "Director – Construction Strategy & Bespoke",
      image: "/images/hero_placeholders/ap-1.jpg"
    },
    {
      id: 4,
      name: "Rudresh K V",
      role: "Vice President – Commercial & Development",
      image: "/images/home/project-image-1.png"
    }
  ]
}) {
  return (
    <section className="about-team-unified-section">
      
      {/* ── TOP BANNER: FOUNDER SPOTLIGHT ── */}
      <div className="founder-banner-wrap">
        <div className="container founder-banner-container">
          
          {/* Left Column: Quote & Signature */}
          <ScrollReveal animation="fadeUp" className="founder-quote-column">
            <div className="quote-mark-top">“</div>
            <h2 className="founder-quote-heading">
              PERFECTION
              IS NOT A DREAM,
              BUT A REALITY
              THAT I STRIVE
              TOWARDS
              IN MY WORK
            </h2>
            <div className="quote-mark-bottom">”</div>

            {/* Signature & Name */}
            <div className="founder-signature-block">
              <svg className="founder-signature-svg" viewBox="0 0 160 40" fill="none" stroke="#222222" strokeWidth="1.5">
                <path d="M10 25 C 20 10, 35 35, 45 15 C 55 5, 60 30, 75 20 C 85 10, 95 35, 110 15 C 120 5, 135 25, 150 20" />
              </svg>
              <div className="founder-name-tag">
                <span className="founder-person-name">{founderName}</span>
                <span className="founder-person-role">{founderRole}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Founder Cutout Image & Skyscraper Watermark */}
          <div className="founder-cutout-column">
            <div className="skyscraper-watermark" />
            <div className="founder-cutout-wrap">
              <img 
                src={founderImage} 
                alt={founderName} 
                className="founder-cutout-img" 
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM GRID: 4 EXECUTIVE MEMBERS (OLD LUXURY DESIGN) ── */}
      <div className="container leadership-grid-container">
        
        

        <div className="leadership-grid-4col">
          {teamMembers.map((member, idx) => (
            <ScrollReveal animation="fadeUp" delay={idx * 0.1} key={member.id || idx} className="member-card">
              <div className="member-photo-wrap">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-photo" 
                />
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                
                <a href="#view-profile" className="member-view-link">
                  <span>VIEW MORE</span>
                  <span className="arrow">↗</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      <style>{`
        .about-team-unified-section {
          width: 100%;
          background-color: #ffffff;
          box-sizing: border-box;
          padding-bottom: 120px;
        }

        /* ── FOUNDER BANNER STYLES ── */
        .founder-banner-wrap {
          width: 100%;
          
          position: relative;
          overflow: hidden;
          padding: 80px 0 0;
          margin-bottom: 100px;
          border-bottom: 1px solid #F0E6E3;
        }

        .founder-banner-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          min-height: 520px;
          position: relative;
        }

        .founder-quote-column {
          padding-bottom: 80px;
          z-index: 5;
        }

        .quote-mark-top {
          font-family: var(--font-heading, serif);
          font-size: 48px;
          color: #b48564;
          line-height: 0.5;
          margin-bottom: 10px;
        }

        .quote-mark-bottom {
          font-family: var(--font-heading, serif);
          font-size: 48px;
          color: #b48564;
          line-height: 0.5;
          margin-top: 10px;
          margin-bottom: 30px;
          text-align: right;
          max-width: 440px;
        }

        .founder-quote-heading {
          font-family: var(--font-heading, serif);
          font-size: clamp(22px, 2.4vw, 32px);
          font-weight: 400;
          color: #b48564;
          line-height: 1.35;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin: 0;
          max-width: 460px;
        }

        .founder-signature-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          margin-top: 10px;
        }

        .founder-signature-svg {
          width: 140px;
          height: 36px;
          opacity: 0.9;
        }

        .founder-name-tag {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .founder-person-name {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 700;
          color: #111111;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .founder-person-role {
          font-family: var(--font-sans);
          font-size: 10.5px;
          font-weight: 400;
          color: #666666;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 2px;
        }

        .founder-cutout-column {
          position: relative;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }

        .skyscraper-watermark {
          position: absolute;
          right: -20px;
          bottom: 0;
          width: 340px;
          height: 100%;
          background-image: url('/images/hero_placeholders/p1.png');
          background-size: cover;
          background-position: top center;
          opacity: 0.18;
          filter: grayscale(100%);
          mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 100%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 100%);
          pointer-events: none;
        }

        .founder-cutout-wrap {
          position: relative;
          z-index: 4;
          height: 100%;
          max-height: 520px;
          display: flex;
          align-items: flex-end;
        }

        .founder-cutout-img {
          height: 500px;
          width: auto;
          object-fit: contain;
          object-position: bottom center;
          filter: drop-shadow(0 10px 25px rgba(0,0,0,0.08));
        }

        /* ── LEADERSHIP 4-COLUMN GRID STYLES ── */
        .leadership-grid-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .leadership-header {
          margin-bottom: 50px;
          text-align: left;
        }

        .section-tag {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          color: #b48564;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          display: block;
          margin-bottom: 12px;
        }

        .section-title {
          font-family: var(--font-heading, serif);
          font-size: clamp(28px, 3.2vw, 42px);
          font-weight: 400;
          color: #000000;
          margin: 0;
          line-height: 1.2;
        }

        .leadership-grid-4col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .member-card {
          display: flex;
          flex-direction: column;
        }

        .member-photo-wrap {
          width: 100%;
          aspect-ratio: 1 / 1.05;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
          background-color: #EAE6DE;
        }

        .member-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.6s ease;
        }

        .member-card:hover .member-photo {
          transform: scale(1.04);
        }

        .member-info {
          display: flex;
          flex-direction: column;
        }

        .member-name {
          font-family: var(--font-heading, serif);
          font-size: 22px;
          font-weight: 400;
          color: #111111;
          margin: 0 0 6px 0;
          line-height: 1.25;
        }

        .member-role {
          font-family: var(--font-sans);
          font-size: 12.5px;
          color: #666666;
          margin: 0 0 16px 0;
          line-height: 1.45;
        }

        .member-view-link {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .member-view-link:hover {
          color: #b48564;
        }

        .member-view-link .arrow {
          text-decoration: none;
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .member-view-link:hover .arrow {
          transform: translate(2px, -2px);
        }

        @media (max-width: 1024px) {
          .leadership-grid-4col {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .founder-banner-container {
            grid-template-columns: 1fr;
            padding: 0 24px;
            min-height: auto;
          }
          .founder-quote-column {
            padding-bottom: 40px;
          }
          .founder-cutout-img {
            height: 380px;
          }
          .leadership-grid-4col {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .leadership-grid-container {
            padding: 0 24px;
          }
        }
      `}</style>
    </section>
  );
}
