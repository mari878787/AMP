import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* 4-Split Curtain Panels */}
      <div className="hero-split-mask" aria-hidden="true">
        <div className="split-panel panel-1"></div>
        <div className="split-panel panel-2"></div>
        <div className="split-panel panel-3"></div>
        <div className="split-panel panel-4"></div>
      </div>

      {/* Background Image Container */}
      <div className="hero-background">
        <img
          src="/images/home/hero.png"
          alt="Minimalist Luxury Villa"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Overlaid Content */}
      <div className="container hero-content">
        <h1 className="hero-title">
          Your Dream <span className="highlight-text">Home</span>,<br />
          Your Needs Met
        </h1>
        <p className="hero-subtitle">
          A Style Defined By Minimalism, Open Spaces, And Natural Light.
        </p>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          height: 125vh;
          min-height: 850px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          overflow: hidden;
          padding-top: 180px; /* Space below capsule header */
          background-color: #060b1d;
        }
        
        /* ── 4-Split Reveal Mask ── */
        .hero-split-mask {
          position: absolute;
          inset: 0;
          display: flex;
          z-index: 40;
          pointer-events: none;
        }
        
        .split-panel {
          flex: 1;
          height: 100%;
          background-color: #060b1d; /* Matches hero navy background */
          animation: slideAway 1.2s cubic-bezier(0.85, 0, 0.15, 1) forwards;
        }
        
        .panel-1 {
          transform-origin: top;
          animation-delay: 2.4s;
        }
        .panel-2 {
          transform-origin: bottom;
          animation-delay: 2.52s;
        }
        .panel-3 {
          transform-origin: top;
          animation-delay: 2.64s;
        }
        .panel-4 {
          transform-origin: bottom;
          animation-delay: 2.76s;
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
          object-position: center bottom; /* Anchor house at bottom, sky at top */
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom, 
            rgba(6, 11, 29, 0.45) 0%, 
            rgba(6, 11, 29, 0.15) 50%, 
            rgba(6, 11, 29, 0.45) 100%
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
          font-family: 'Helvetica World', 'HelveticaWorld', Helvetica, Arial, sans-serif;
          font-size: 44px;
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: 0.01em;
          color: #ffffff;
          margin-bottom: 24px;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          opacity: 0;
          animation: fadeUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 3.4s;
        }
        
        .hero-title .highlight-text {
          color: #e2b865; /* Elegant warm gold highlight from mockup */
        }
        
        .hero-subtitle {
          font-family: 'Helvetica Now', 'HelveticaNow', Helvetica, Arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.80);
          letter-spacing: 0.06em;
          line-height: 1.6;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          opacity: 0;
          animation: fadeUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 3.7s;
        }

        /* ── Opening Animations ── */
        @keyframes slideAway {
          to {
            transform: scaleY(0);
          }
        }


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
            font-size: 52px;
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
            font-size: 40px;
            line-height: 1.2;
          }
          .hero-subtitle {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
