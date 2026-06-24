import React from 'react';

export default function HeroSection({ startZoom }) {
  return (
    <section className="hero-section" id="hero">
      {/* Background Image Container */}
      <div className="hero-background">
        <img
          src="/images/home/hero.png"
          alt="Minimalist luxury villa designed by Aadhithya Mohan"
          className={`hero-bg-image ${startZoom ? 'animate-zoom' : ''}`}
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Overlaid Content */}
      <div className="container hero-content">
        <h1 className="hero-title">
          Own the freedom <br />
          to build <span className="highlight-italic" style={{ color: 'var(--color-sage)' }}>your legacy</span>
        </h1>
        <p className="hero-subtitle">
          A Style Defined By Minimalism, Open Spaces, And Natural Light.
        </p>
        <a href="#projects" className="btn-luxury-pill" style={{ marginTop: '40px' }}>
          <span>Explore Projects</span>
          <span className="btn-circle-arrow">→</span>
        </a>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 850px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          overflow: hidden;
          padding-top: 180px;
          background-color: #060b1d;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          transform: scale(1);
          will-change: transform;
        }
        
        .hero-bg-image.animate-zoom {
          animation: slowZoom 25s ease-in-out infinite alternate;
        }

        /* Subtle parallax-like slow zoom on hero background */
        @keyframes slowZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom, 
            rgba(6, 11, 29, 0.40) 0%, 
            rgba(6, 11, 29, 0.10) 50%, 
            rgba(6, 11, 29, 0.40) 100%
          );
          z-index: 2;
          opacity: 0;
          animation: fadeIn 1.8s ease forwards;
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
          padding: 0 24px;
        }
        
        .hero-title {
          font-family: var(--font-heading);
          font-size: 52px;
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: 0.02em;
          color: #ffffff;
          margin-bottom: 24px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          opacity: 0;
          animation: fadeUp 1.4s var(--ease-luxury) forwards;
          animation-delay: 4.2s;
        }
        
        .hero-title .highlight-italic {
          font-family: var(--font-heading);
          font-style: italic;
          font-weight: 700;
        }
        
        .hero-subtitle {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.80);
          letter-spacing: 0.06em;
          line-height: 1.6;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          opacity: 0;
          animation: fadeUp 1.4s var(--ease-luxury) forwards;
          animation-delay: 4.5s;
        }

        /* ── Hero CTA Button ── */
        .hero-content .btn-luxury-pill {
          opacity: 0;
          animation: fadeUp 1.4s var(--ease-luxury) forwards;
          animation-delay: 4.8s;
          background: rgba(19, 56, 37, 0.25);
          border: 1px solid rgba(19, 56, 37, 0.5);
          backdrop-filter: blur(16px) saturate(160%);
          -webkit-backdrop-filter: blur(16px) saturate(160%);
        }
        .hero-content .btn-luxury-pill:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #ffffff;
        }

        /* ── Opening Animations ── */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .hero-section {
            padding-top: 150px;
          }
          .hero-title {
            font-size: 44px;
          }
          .hero-subtitle {
            font-size: 16px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 130px;
          }
          .hero-title {
            font-size: 36px;
            line-height: 1.2;
          }
          .hero-subtitle {
            font-size: 14px;
          }
          .hero-cta {
            padding: 12px 28px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
