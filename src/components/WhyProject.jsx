import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function WhyProject({
  projectName = "Crystal Moonlight",
  description = "An exclusive gated community offering a perfect blend of luxury, privacy, and modern living.",
  imageSrc = "/images/project/why-cmv.png",
  brochureUrl = "#download-brochure",
  backgroundTexture = "/images/home/background.png"
}) {
  // Split project name to show properly in header
  const nameParts = projectName.split(' ');
  const firstWord = nameParts[0] || 'WHY';
  const remainingWords = nameParts.slice(1).join(' ') || 'PROJECT';

  return (
    <section 
      className="why-project-section" 
      id="why-cmv"
      style={{
        backgroundImage: `linear-gradient(rgba(252, 237, 211, 0.88), rgba(252, 237, 211, 0.88)), url(${backgroundTexture})`
      }}
    >
      <div className="why-project-grid">
        
        {/* Left Column: Collage Image */}
        <ScrollReveal className="why-project-media" animation="fadeLeft" as="div">
          <img
            src={imageSrc}
            alt={`${projectName} Gated Entrance`}
            className="why-project-img"
          />
        </ScrollReveal>

        {/* Right Column: Content */}
        <ScrollReveal className="why-project-content" animation="fadeUp" delay={0.15} as="div">
          <div className="why-project-content-wrapper">
            <h2 className="why-project-title">
              WHY {firstWord}<br />{remainingWords}
            </h2>
            <p className="why-project-description">
              {description}
            </p>
            <a href={brochureUrl} className="btn-download-brochure">
              DOWNLOAD BROCHURE
            </a>
          </div>
        </ScrollReveal>


      </div>

      <style>{`
        .why-project-section {
          background-color: #fcedd3;
          background-size: cover;
          background-position: right top;
          padding: 0;
          color: #060b1d;
          position: relative;
          z-index: 5;
          overflow: hidden;
        }

        .why-project-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          width: 100%;
          padding-top: 0;
          padding-bottom: 0;
          position: relative;
        }

        .why-project-media {
          position: relative;
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 0;
          margin-bottom: 0;
        }

        .why-project-img {
          width: 100%;
          // max-width: 300px;
          height: auto;
          display: block;
          mix-blend-mode: multiply;
          margin-bottom: -1px;
        }

        .why-project-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-left: 60px;
          padding-right: 32px;
          padding-top: 60px;
          padding-bottom: 60px;
          box-sizing: border-box;
        }

        .why-project-content-wrapper {
          width: 100%;
          max-width: 480px;
        }

        .why-project-title {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-size: 48px;
          line-height: 1.15;
          font-weight: 500;
          color: #1c222f;
          letter-spacing: 0.01em;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .why-project-description {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.8;
          color: #4b5563;
          margin-bottom: 38px;
          letter-spacing: 0.015em;
        }

        .btn-download-brochure {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #22252a;
          color: #ffffff;
          padding: 15px 36px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 6px;
          outline: 1.5px solid #22252a;
          outline-offset: 4px;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
          margin: 8px;
          text-decoration: none;
        }

        .btn-download-brochure:hover {
          background-color: #8c764d;
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.4);
          outline-color: #8c764d;
        }

        @media (max-width: 1024px) {
          .why-project-grid {
            grid-template-columns: 1fr 1fr;
            padding-top: 70px;
          }
          .why-project-title {
            font-size: 40px;
          }
        }

        @media (max-width: 768px) {
          .why-project-grid {
            grid-template-columns: 1fr;
            padding-top: 60px;
            padding-bottom: 60px;
            gap: 40px;
          }
          .why-project-media {
            justify-content: center;
            align-items: center;
            padding: 0 24px;
          }
          .why-project-img {
            max-width: 100%;
            margin-bottom: 0;
          }
          .why-project-content {
            align-items: center;
            text-align: center;
            padding: 0 24px;
            padding-bottom: 20px;
          }
          .why-project-content-wrapper {
            max-width: 100%;
          }
          .why-project-title {
            font-size: 36px;
          }
          .why-project-description {
            font-size: 15px;
            margin-bottom: 28px;
          }
          .btn-download-brochure {
            margin: 8px auto;
          }
        }

      `}</style>
    </section>
  );
}
