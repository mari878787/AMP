import React, { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-page">
      {/* 1. Theme-Aligned Hero Section */}
      <section className="project-hero-section">
        <div className="project-hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Architecture" 
          className="project-hero-image"
          style={{ transform: 'scale(1.05)' }}
        />
        <div className="project-hero-content">
          <span className="project-tag-reveal">ESTABLISHED 2016</span>
          <h1 className="project-hero-title">
            About <span className="highlight-text">Us</span>
          </h1>
          <p className="project-hero-subtitle">CURATING LIFESTYLES, BUILDING LEGACIES</p>
        </div>
      </section>

      {/* 2. Magazine-Style Overlap Section */}
      <section className="luxury-overlap-section">
        <div className="overlap-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80" 
            alt="Architectural Masterpiece" 
            className="overlap-bg-image"
          />
        </div>
        
        <div className="container relative-container">
          <div className="overlap-content-box">
            <ScrollReveal animation="fadeUp">
              <span className="section-tag">OUR STORY</span>
              <h2 className="section-title">9+ Years of a Remarkable <span className="highlight-italic">Journey</span></h2>
              <div className="overlap-divider"></div>
              
              <p className="luxury-body-text lead-text">
                At Aadhithya Mohan Properties LLP, we believe every family deserves a place they can proudly call home. 
              </p>
              <p className="luxury-body-text">
                With over 9+ years of a remarkable journey, we have maintained a strong focus on premium housing, land development, and residential projects. We create communities that are not only architecturally stunning but also built to appreciate in value and enrich lives. Whether you’re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Massive Scale Typography (Stats) - No Cards */}
      <section className="massive-stats-section">
        <div className="container">
          <div className="raw-stats-flex">
            <ScrollReveal animation="fadeUp" delay={0.1} className="raw-stat-item">
              <div className="raw-stat-number">50<span className="raw-stat-plus">+</span></div>
              <div className="raw-stat-label">PROJECTS IN DEVELOPMENT</div>
            </ScrollReveal>
            
            <div className="raw-stat-divider"></div>

            <ScrollReveal animation="fadeUp" delay={0.2} className="raw-stat-item">
              <div className="raw-stat-number">600<span className="raw-stat-k">K</span><span className="raw-stat-plus">+</span></div>
              <div className="raw-stat-label">PRIME LAND DEVELOPED (SQ.FT)</div>
            </ScrollReveal>

            <div className="raw-stat-divider"></div>

            <ScrollReveal animation="fadeUp" delay={0.3} className="raw-stat-item">
              <div className="raw-stat-number">1.5<span className="raw-stat-k">B</span><span className="raw-stat-plus">+</span></div>
              <div className="raw-stat-label">TOTAL PROJECTS VALUE</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Elegant Timeline - No Cards, just Typography and Lines */}
      <section className="elegant-timeline-section">
        <div className="container">
          <ScrollReveal animation="fadeUp" style={{ textAlign: 'center', marginBottom: '120px' }}>
            <span className="section-tag">OUR MILESTONES</span>
            <h2 className="section-title">The Golden <span className="highlight-italic">Thread</span></h2>
          </ScrollReveal>

          <div className="timeline-raw-list">
            
            <ScrollReveal animation="fadeUp" delay={0.1} className="timeline-raw-item">
              <div className="timeline-raw-year">2016</div>
              <div className="timeline-raw-content">
                <h3 className="timeline-raw-title">The Beginning</h3>
                <p className="timeline-raw-desc">Founded with a mission to make homeownership accessible for all, Aadhithya Mohan Properties LLP started its journey with small-scale residential layouts.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.2} className="timeline-raw-item">
              <div className="timeline-raw-year">2018</div>
              <div className="timeline-raw-content">
                <h3 className="timeline-raw-title">Building Communities</h3>
                <p className="timeline-raw-desc">Expanded into affordable villa and apartment projects, providing both lifestyle and investment opportunities for countless families.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.3} className="timeline-raw-item">
              <div className="timeline-raw-year">2021</div>
              <div className="timeline-raw-content">
                <h3 className="timeline-raw-title">Recognition & Growth</h3>
                <p className="timeline-raw-desc">Awarded "The Short Time Achiever" award for delivering projects faster and with unmatched value, solidifying our reputation in the industry.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.4} className="timeline-raw-item" style={{ borderBottom: 'none' }}>
              <div className="timeline-raw-year">2024</div>
              <div className="timeline-raw-content">
                <h3 className="timeline-raw-title">Modern Luxury</h3>
                <p className="timeline-raw-desc">Today, we pioneer the development of premium gated communities, blending contemporary aesthetics with highly functional luxury layouts.</p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Ultra-Luxury Theme-Aligned Styles */
        .about-us-page {
          background-color: #ffffff;
        }

        /* 1. Hero Section (Reusing Global Crystal Moonlight Styles) */
        .project-hero-section {
          position: relative;
          height: 70vh; /* Taller for luxury feel */
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .project-hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .project-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .project-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .project-tag-reveal {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: #e2b865;
          letter-spacing: 0.15em;
          margin-bottom: 24px;
        }

        .project-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(60px, 8vw, 100px);
          font-weight: 300;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .project-hero-subtitle {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.4em;
          text-transform: uppercase;
        }

        /* 2. Magazine-Style Overlap Section */
        .luxury-overlap-section {
          position: relative;
          width: 100%;
          padding-top: 100px;
          padding-bottom: 150px;
        }

        .overlap-image-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          width: 75%;
          height: 100%;
          z-index: 0;
        }

        .overlap-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(10%);
        }

        .relative-container {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          min-height: 700px;
        }

        .overlap-content-box {
          background-color: #ffffff;
          padding: 80px 100px;
          width: 55%;
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
          margin-top: 100px;
        }

        .overlap-divider {
          width: 60px;
          height: 1px;
          background-color: #e2b865;
          margin: 40px 0;
        }

        .luxury-body-text {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 2;
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }

        .lead-text {
          font-size: 20px;
          color: var(--color-text);
          font-weight: 400;
          line-height: 1.8;
        }

        /* 3. Massive Scale Typography (Stats) */
        .massive-stats-section {
          padding: 120px 0;
          background-color: #fafafa;
        }

        .raw-stats-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .raw-stat-item {
          text-align: center;
          flex: 1;
        }

        .raw-stat-number {
          font-family: var(--font-heading);
          font-size: clamp(80px, 10vw, 140px);
          font-weight: 300;
          color: var(--color-primary);
          line-height: 0.9;
          margin-bottom: 24px;
          letter-spacing: -0.04em;
        }

        .raw-stat-plus {
          color: #e2b865;
          font-size: 0.6em;
          vertical-align: top;
          margin-left: 8px;
        }

        .raw-stat-k {
          font-size: 0.7em;
          font-weight: 300;
        }

        .raw-stat-label {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-text-muted);
        }

        .raw-stat-divider {
          width: 1px;
          height: 120px;
          background-color: rgba(0,0,0,0.08);
        }

        /* 4. Elegant Timeline */
        .elegant-timeline-section {
          padding: 150px 0 200px;
        }

        .timeline-raw-list {
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-raw-item {
          display: flex;
          align-items: flex-start;
          gap: 80px;
          padding: 60px 0;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .timeline-raw-year {
          flex: 0 0 150px;
          font-family: var(--font-heading);
          font-size: 48px;
          color: #e2b865;
          line-height: 1;
        }

        .timeline-raw-content {
          flex: 1;
        }

        .timeline-raw-title {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 400;
          color: var(--color-text);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .timeline-raw-desc {
          font-family: var(--font-sans);
          font-size: 17px;
          line-height: 1.9;
          color: var(--color-text-muted);
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .overlap-content-box {
            width: 70%;
            padding: 60px;
          }
        }

        @media (max-width: 768px) {
          .luxury-overlap-section {
            padding-top: 0;
          }
          .overlap-image-wrapper {
            position: relative;
            width: 100%;
            height: 50vh;
          }
          .relative-container {
            min-height: auto;
          }
          .overlap-content-box {
            width: 90%;
            margin: -100px auto 0;
            padding: 40px 30px;
          }
          
          .raw-stats-flex {
            flex-direction: column;
            gap: 60px;
          }
          .raw-stat-divider {
            width: 100px;
            height: 1px;
          }

          .timeline-raw-item {
            flex-direction: column;
            gap: 20px;
            padding: 40px 0;
          }
        }
      `}} />
    </div>
  );
};

export default AboutUs;
