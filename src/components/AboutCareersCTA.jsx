import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function AboutCareersCTA({
  title = "Build your career in real estate excellence.",
  description = "Work on developments that redefine quality and design in modern India. At Aadhithya Mohan Properties, you'll refine your skills, take on meaningful challenges and grow with a team committed to raising industry standards.",
  btnText = "JOIN THE TEAM",
  btnLink = "#join-team"
}) {
  return (
    <section className="about-careers-cta-section">
      <div className="container careers-cta-container">
        <ScrollReveal animation="fadeUp">
          <h2 className="careers-cta-title">{title}</h2>
          <p className="careers-cta-desc">{description}</p>
          <a href={btnLink} className="careers-cta-btn">
            <span className="btn-dot">°</span>
            <span>{btnText}</span>
          </a>
        </ScrollReveal>
      </div>

      <style>{`
        .about-careers-cta-section {
          background-color: var(--color-bg-light, #FAF8F5);
          padding: 130px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          box-sizing: border-box;
          border-top: 1px solid #EBE7DF;
        }

        .careers-cta-container {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .careers-cta-title {
          font-family: var(--font-heading, serif);
          font-size: clamp(32px, 4vw, 54px);
          font-weight: 400;
          color: #111111;
          line-height: 1.18;
          letter-spacing: -0.015em;
          margin: 0 0 24px 0;
        }

        .careers-cta-desc {
          font-family: var(--font-sans);
          font-size: 14.5px;
          line-height: 1.7;
          color: #555555;
          max-width: 660px;
          margin: 0 auto 42px auto;
        }

        .careers-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          color: #ffffff;
          background-color: #111111;
          padding: 15px 36px;
          border-radius: 40px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          transition: all 0.35s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
        }

        .careers-cta-btn:hover {
          background-color: #b48564;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(180, 133, 100, 0.3);
        }

        .btn-dot {
          font-size: 14px;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .about-careers-cta-section {
            padding: 80px 20px;
          }
          .careers-cta-desc {
            font-size: 13.5px;
          }
        }
      `}</style>
    </section>
  );
}
