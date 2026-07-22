import React from 'react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    id: 1,
    title: 'Licenses & Insurance',
    desc: 'Fully licensed, insured, and RERA certified, we comply with all standards to ensure peace of mind on every project.',
  },
  {
    id: 2,
    title: 'Safety & Compliance',
    desc: 'Safety is our top priority. Our team follows strict protocols and city regulations to deliver projects without compromise.',
  },
];

export default function HeritageSection() {
  return (
    <section className="standards-section" id="standards">

      {/* Full-bleed background texture */}
      <img
        src="/images/home/background.png"
        alt=""
        className="standards-bg-img"
        aria-hidden="true"
      />

      {/* Building – absolutely positioned to the true right edge of the section */}
      <ScrollReveal
        as="img"
        src="/images/home/build-stand.png"
        alt="Premium building construction"
        className="standards-building"
        animation="fadeRight"
        duration={0.9}
      />

      {/* Content inside container – left half only */}
      <div className="container standards-inner">
        <div className="standards-content">
          <ScrollReveal animation="fadeUp" delay={0.05}>
            <span className="section-tag">Our Standards</span>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <h2 className="section-title">
              Committed To Quality,<br></br>Safety, And Reliability
            </h2>
          </ScrollReveal>

          <div className="standards-features">
            {features.map((f, idx) => (
              <ScrollReveal
                key={f.id}
                animation="fadeUp"
                delay={0.35 + idx * 0.12}
                className="feature-item"
              >
                <h4 className="feature-title" style={{ color: 'var(--color-primary)', marginBottom: '4px' }}>{f.title}</h4>
                <p className="feature-desc">{f.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* â”€â”€ Section â”€â”€ */
        .standards-section {
          position: relative;
          overflow: hidden;
          min-height: 480px;
        }

        /* â”€â”€ Background texture – full bleed â”€â”€ */
        .standards-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
        }

        /* â”€â”€ Building: absolute, flush to section right edge â”€â”€ */
        .standards-building {
          position: absolute;
          right: 0;          /* true right edge of the section */
          bottom: 0;
          top: -60px;        /* bleeds out the top */
          width: 42%;        /* ~42% of section width */
          max-width: 480px;
          height: auto;
          object-fit: contain;
          object-position: bottom right;
          z-index: 2;
          filter: drop-shadow(-10px 0 28px rgba(29, 53, 87, 0.20));
        }

        /* â”€â”€ Container only positions the text â”€â”€ */
        .standards-inner {
          position: relative;
          z-index: 3;
          min-height: 480px;
          display: flex;
          align-items: stretch;
        }

        /* â”€â”€ Left content: spans ~55% so it doesn't overlap building â”€â”€ */
        .standards-content {
          width: 55%;
          padding: 48px 0;
          display: flex;
          flex-direction: column;
        }

        /* â”€â”€ Feature items – no bullets â”€â”€ */
        .standards-features {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 20px;
        }



        .feature-desc {

          font-size: 13.5px;
          font-weight: 400;
          color: var(--color-text-muted);
          line-height: 1.65;
          max-width: 340px;
        }

        /* â”€â”€ Responsive â”€â”€ */
        @media (max-width: 960px) {
          .standards-content {
            width: 100%;
            padding: 40px 0 260px; /* give room for building below on mobile */
          }
          .standards-building {
            width: 70%;
            top: auto;
            right: 0;
            bottom: 0;
          }
          .standards-heading {
            font-size: 26px;
          }
        }

        @media (max-width: 640px) {
          .standards-heading {
            font-size: 22px;
            margin-bottom: 32px;
          }
          .standards-building {
            width: 85%;
          }
          .feature-desc { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
