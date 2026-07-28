import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function AboutPurposeSection({
  tag = "OUR PURPOSE",
  title = "We represent the values of real estate development in modern India and intend to build and serve our customers with the utmost integrity and transparency.",
  pillars = [
    {
      id: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      ),
      title: "Customer Driven",
      desc: "Our commitment to service drives research, planning and execution, shaping every touchpoint, so each interaction feels attentive, responsive and thoughtfully orchestrated."
    },
    {
      id: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6l-2 4 4 4-4 4 2 4 6-6-6-6z"/>
        </svg>
      ),
      title: "Meticulous Planning",
      desc: "We plan with precision and foresight, aligning timelines, budgets and resources through rigorous collaboration to deliver predictable outcomes and exceptional consistency."
    },
    {
      id: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
        </svg>
      ),
      title: "Intelligent Design",
      desc: "Intelligent, innovative design guides every feature and material, prioritising function and beauty to create enduring spaces beyond trends and seasons."
    },
    {
      id: 4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L4.5 7 12 3.25 19.5 7 12 10.5zm0 3L4.5 10 12 6.25 19.5 10 12 13.5zm0 3L4.5 13 12 9.25 19.5 13 12 16.5z"/>
        </svg>
      ),
      title: "Highest Quality, Best Value",
      desc: "From material selection to craft, we uphold uncompromising standards to ensure lasting value comes together across developments."
    }
  ]
}) {
  return (
    <section className="about-purpose-section">
      <div className="container purpose-container">
        
        {/* Header Block */}
        <ScrollReveal animation="fadeUp" className="purpose-header">
          <span className="purpose-tag">{tag}</span>
          <h2 className="purpose-title">{title}</h2>
        </ScrollReveal>

        {/* 4 Pillars Grid */}
        <div className="purpose-grid">
          {pillars.map((item, idx) => (
            <React.Fragment key={item.id}>
              <ScrollReveal animation="fadeUp" delay={0.1 * (idx + 1)} className="purpose-card">
                <div className="purpose-icon-wrap">
                  {item.icon}
                </div>
                <h3 className="purpose-card-title">{item.title}</h3>
                <p className="purpose-card-desc">{item.desc}</p>
              </ScrollReveal>
              {idx < pillars.length - 1 && (
                <div className="purpose-col-line"></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>

      <style>{`
        .about-purpose-section {
          background-color: #ffffff;
          padding: 60px 0;
          width: 100%;
          box-sizing: border-box;
          border-bottom: 1px solid #EBE7DF;
        }

        .purpose-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .purpose-header {
          max-width: 980px;
          margin-bottom: 90px;
        }

        .purpose-tag {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          color: #b48564;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          display: block;
          margin-bottom: 24px;
        }

        .purpose-title {
          font-family: var(--font-heading, serif);
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 400;
          color: #000000;
          line-height: 1.3;
          letter-spacing: -0.015em;
          text-transform: capitalize;
          margin: 0;
        }

        .purpose-grid {
          display: flex;
          align-items: stretch;
          gap: 0;
          width: 100%;
        }

        .purpose-card {
          flex: 1;
          padding: 0 32px;
          display: flex;
          flex-direction: column;
        }

        .purpose-card:first-child {
          padding-left: 0;
        }

        .purpose-card:last-child {
          padding-right: 0;
        }

        .purpose-icon-wrap {
          color: #000000;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
        }

        .purpose-card-title {
          font-family: var(--font-heading, serif);
          font-size: 22px;
          font-weight: 400;
          color: #000000;
          line-height: 1.25;
          margin: 0 0 16px 0;
        }

        .purpose-card-desc {
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 400;
          color: #555555;
          line-height: 1.65;
          margin: 0;
        }

        .purpose-col-line {
          width: 1px;
          background-color: #E2DDD5;
          flex-shrink: 0;
          align-self: stretch;
        }

        @media (max-width: 960px) {
          .about-purpose-section {
            padding: 40px 0;
          }
          .purpose-container {
            padding: 0 24px;
          }
          .purpose-header {
            margin-bottom: 50px;
          }
          .purpose-grid {
            flex-direction: column;
            gap: 40px;
          }
          .purpose-card {
            padding: 0;
          }
          .purpose-col-line {
            width: 100%;
            height: 1px;
          }
        }
      `}</style>
    </section>
  );
}
