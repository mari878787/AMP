import React, { useRef, useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function PhilosophySection() {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      title: "Years Of Experience",
      value: "10 Yrs ⁺",
      desc: "Delivering consistent, high-quality work backed by expertise."
    },
    {
      title: "Licensed & Insured",
      value: "100%",
      desc: "Fully certified and compliant with all required standards."
    },
    {
      title: "Safety Commitment",
      value: "24/7",
      desc: "Safety is prioritized at every stage of every project."
    },
    {
      title: "Client Satisfaction",
      value: "5/5",
      desc: "Consistently rated for care, results, and experience."
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">

        {/* Top Grid: Headings and Intro Paragraph */}
        <div className="about-top-grid">
          <ScrollReveal className="about-left-col" animation="fadeUp">
            <span className="section-tag">About Us</span>
            <h2 className="about-title" style={{ maxWidth: '620px' }}>
              We turn land into opportunity, guided by <span className="highlight-italic">trust, clarity, and lasting value.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="about-right-col" animation="fadeUp" delay={0.15}>
            <p className="about-desc">
              Adhithya Mohan has been shaping Chennai landscape with excellence and dedication. With years of experience in residential, Plotted and commercial construction, where seamless architecture meets modern sophistication, crafted for those who seek more than a home. they seek a legacy.
            </p>
            <a href="#contact" className="btn-luxury-outline">
              <span>Know More</span>
              <span className="btn-circle-arrow">→</span>
            </a>
          </ScrollReveal>
        </div>

        {/* Bottom Grid: Statistics Columns */}
        <div
          ref={statsRef}
          className={`about-stats-grid ${isVisible ? 'is-visible' : ''}`}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-column"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <span className="stat-title">{stat.title}</span>
              <span className="stat-value">{stat.value}</span>
              <p className="stat-desc">{stat.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .about-section {
          background-color: var(--color-bg-light);
          padding: var(--space-8) 0;
          color: var(--color-text-dark);
        }
        
        .about-top-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: var(--space-8);
          margin-bottom: var(--space-6);
          align-items: flex-start;
        }
        

        
        .about-title {
          font-family: var(--font-heading);
          font-size: 42px;
          font-weight: 400;
          line-height: 1.25;
          color: var(--color-text-dark);
          letter-spacing: -0.01em;
          max-width: 500px;
        }
        
        .about-desc {
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }
        
        .btn-about {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-primary);
          background: rgba(19, 56, 37, 0.05);
          border: 1px solid rgba(19, 56, 37, 0.2);
          padding: 10px 30px;
          border-radius: 50px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          transition: all 0.35s var(--ease-luxury);
          text-align: center;
        }
        
        .btn-about:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #ffffff;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 24px rgba(19, 56, 37, 0.25);
        }
        
        /* Stats Grid Details */
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          padding-top: var(--space-5);
          border-top: 1px solid rgba(19, 56, 37, 0.15);
        }

        /* Staggered entrance animation */
        .about-stats-grid .stat-column {
          opacity: 0;
          transform: translateY(20px);
        }
        .about-stats-grid.is-visible .stat-column {
          animation: statFadeIn 0.6s var(--ease-luxury) forwards;
        }

        @keyframes statFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stat-column {
          display: flex;
          flex-direction: column;
          padding-right: var(--space-5);
        }
        
        .stat-column:not(:first-child) {
          border-left: 1px solid rgba(19, 56, 37, 0.15);
          padding-left: var(--space-5);
        }
        
        .stat-title {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 700;
          color: var(--color-text-muted-light);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
        }
        
        .stat-value {
          font-family: var(--font-heading);
          font-size: 48px;
          font-weight: 500;
          color: var(--color-primary);
          line-height: 1.1;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }
        
        .stat-desc {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        
        @media (max-width: 1024px) {
          .about-top-grid {
            grid-template-columns: 1fr;
            gap: var(--space-5);
          }
          .about-title {
            font-size: 26px;
            max-width: 100%;
          }
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 0;
          }
          .stat-column {
            padding-right: 20px;
          }
          .stat-column:nth-child(even) {
            padding-left: 40px;
          }
          .stat-column:nth-child(odd) {
            border-left: none;
            padding-left: 0;
          }
        }
        
        @media (max-width: 640px) {
          .about-stats-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .stat-column {
            padding: 0 !important;
            border-left: none !important;
          }
          .about-title {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
}
