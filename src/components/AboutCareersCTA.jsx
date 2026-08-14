import React from 'react';
import ScrollReveal from './ScrollReveal';
import Button from './Button';

export default function AboutCareersCTA({
  title = "Build your career in real estate excellence.",
  description = "Work on developments that redefine quality and design in modern India. At Aadhithya Mohan Properties, you'll refine your skills, take on meaningful challenges and grow with a team committed to raising industry standards.",
  btnText = "JOIN THE TEAM",
  btnLink = "/careers"
}) {
  return (
    <section className="about-careers-cta-section">
      <div className="container careers-cta-container">
        <ScrollReveal animation="fadeUp">
          <h2 className="section-title">{title}</h2>
          <p className="body-text" style={{ margin: '0 auto 32px auto', maxWidth: '720px' }}>{description}</p>
          <div className="careers-btn-wrapper">
            <Button href={btnLink} theme="dark">
              {btnText}
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .about-careers-cta-section {
          background-color: var(--color-bg-light, #FAF8F5);
          padding: 110px 24px;
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



        .careers-btn-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        @media (max-width: 640px) {
          .about-careers-cta-section {
            padding: 70px 20px;
          }
        }
      `}</style>
    </section>
  );
}
