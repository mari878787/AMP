import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutLegacyExpand({
  legacyYears = "10+",
  legacyTitle = "years of",
  legacySubtitle = "INCREDIBLE LEGACY",
  heading = "Where Trust Creates Lasting Value",
  paragraphs = [
    "Founded in 2016, Aadhithya Mohan Properties has spent the past decade guided by a simple belief—that the true measure of real estate lies not merely in what is built, but in the trust it earns and the value it creates over time.",
    "What began with residential apartments and thoughtfully planned land communities has evolved into a portfolio of luxury residences, premium land developments, and distinctive residential communities. While the scale and character of our projects have grown, the principles behind them have remained constant: meticulous planning, uncompromising standards, integrity, and a deep respect for craftsmanship.",
    "As we enter our next decade, our ambition remains deliberately focused: to create developments that inspire confidence today and become a source of pride and enduring value for generations to come."
  ],
  description,
  image = "/images/about/CML ABOUT US.png"
}) {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const imageWrapRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useGSAP(() => {
    // Only run full GSAP pinning & expansion on viewports >= 768px
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    if (!sectionRef.current || !imageWrapRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%', // Scroll distance equal to 100vh for smooth shrinking
        scrub: 0.5,     // Smooth scrubbing
        pin: true,     // Pin section in place while scrubbing
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // 1. Shrink image from full screen (100vw, 100vh, 0px radius, left 50%) down to small container (23vw, 72vh, left 41.5%, 8px radius)
    tl.fromTo(imageWrapRef.current,
      {
        width: '100vw',
        height: '100vh',
        left: '50%',
        borderRadius: '0px'
      },
      {
        width: '25vw',
        height: '72vh',
        left: '40%',
        borderRadius: '8px',
        ease: 'none'
      },
      0
    );

    // 2. Simultaneously fade in side texts
    tl.fromTo([leftTextRef.current, rightTextRef.current],
      {
        opacity: 0,
        scale: 0.92,
        filter: 'blur(4px)'
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        ease: 'none'
      },
      0
    );

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section ref={sectionRef} className="about-legacy-expand-section">
      {/* Background Watermark Pattern with small 28px logo and 42px gaps */}
      <svg className="legacy-bg-pattern" width="100%" height="100%">
        <defs>
          <pattern id="legacyLogoPattern" width="70" height="70" patternUnits="userSpaceOnUse">
            <image href="/images/logo-curser-v3.png" x="21" y="21" width="28" height="28" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#legacyLogoPattern)" />
      </svg>

      <div ref={wrapperRef} className="about-legacy-wrapper">

        {/* Left Column: Legacy Emblem */}
        <div ref={leftTextRef} className="about-legacy-left">
          <div className="legacy-emblem">
            <span className="legacy-years">{legacyYears}</span>
            <div className="legacy-text-block">
              <span className="legacy-label">{legacyTitle}</span>
              <h2 className="legacy-subtitle">{legacySubtitle}</h2>
            </div>
          </div>
        </div>

        {/* Center Column: Shrinking Image Container */}
        <div ref={imageWrapRef} className="about-legacy-img-wrap">
          <img
            src={image}
            alt="About Legacy Showcase"
            className="about-legacy-img"
          />
          <div className="legacy-overlay"></div>
        </div>

        {/* Right Column: Editorial Description */}
        <div ref={rightTextRef} className="about-legacy-right">
          {heading && <h3 className="legacy-heading">{heading}</h3>}
          {paragraphs && Array.isArray(paragraphs) ? (
            paragraphs.map((p, idx) => (
              <p key={idx} className="body-text">
                {p}
              </p>
            ))
          ) : (
            <p className="body-text">{description}</p>
          )}
        </div>

      </div>

      <style>{`
        .about-legacy-expand-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #000000;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .legacy-bg-pattern {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.035;
          filter: brightness(0);
          pointer-events: none;
          z-index: 1;
        }

        .about-legacy-wrapper {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-sizing: border-box;
        }

        /* ── LEFT EMBLEM ── */
        .about-legacy-left {
          position: absolute;
          left: 4.5%;
          z-index: 10;
          max-width: clamp(200px, 20vw, 270px);
          pointer-events: none;
          transform-origin: center left;
          will-change: opacity, transform, filter;
          opacity: 0;
        }

        .legacy-emblem {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .legacy-years {
          font-family: var(--font-sans);
          font-size: clamp(70px, 7.5vw, 115px);
          font-weight: 300;
          line-height: 0.9;
          color: #000000;
          letter-spacing: -0.04em;
        }

        .legacy-text-block {
          margin-top: 8px;
        }

        .legacy-label {
          font-family: var(--font-heading, serif);
          font-size: clamp(16px, 1.4vw, 20px);
          font-style: italic;
          color: #666666;
          display: block;
        }

        .legacy-subtitle {
          font-family: var(--font-heading, serif);
          font-size: clamp(18px, 1.8vw, 28px);
          font-weight: 400;
          color: #b48564;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 4px 0 0 0;
          line-height: 1.1;
        }

        /* ── CENTER SCALING IMAGE WRAPPER ── */
        .about-legacy-img-wrap {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 100vh;
          border-radius: 0px;
          overflow: hidden;
          z-index: 5;
          will-change: width, height, border-radius, left;
        }

        .about-legacy-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 0px !important;
        }

        .legacy-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgb(0 0 0 / 27%) 0%, rgba(0, 0, 0, 0.0) 25%, rgb(0 0 0 / 0%) 70%, rgb(255 255 255 / 0%) 100%);
          pointer-events: none;
          z-index: 6;
        }

        /* ── RIGHT EDITORIAL ── */
        .about-legacy-right {
          position: absolute;
          left: 56.5%;
          right: 3.5%;
          z-index: 10;
          max-width: clamp(400px, 39vw, 560px);
          pointer-events: none;
          transform-origin: center right;
          will-change: opacity, transform, filter;
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .legacy-heading {
          font-family: var(--font-heading, serif);
          font-size: clamp(25px, 2vw, 35px);
          font-weight: 500;
          color: #111111;
          margin: 0 0 16px 0;
          line-height: 1.25;
          letter-spacing: 0.02em;
        }

        .about-legacy-right .body-text {
          font-family: var(--font-sans);
          font-size: clamp(16px, 0.95vw, 16px);
          line-height: 1.66;
          color: #2b2b2b;
          margin: 0 0 18px 0;
          text-align: justify;
          letter-spacing: 0.01em;
        }

        .about-legacy-right .body-text:last-child {
          margin-bottom: 0;
        }

        /* ── RESPONSIVE MOBILE OVERRIDES ── */
        @media (max-width: 768px) {
          .about-legacy-expand-section {
            min-height: auto;
            padding: 30px 0 50px 0;
            overflow: visible;
          }
          .about-legacy-wrapper {
            height: auto;
            flex-direction: column;
            gap: 24px;
            position: relative;
          }
          .about-legacy-img-wrap {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            width: 100% !important;
            height: clamp(280px, 45vh, 400px) !important;
            border-radius: 8px !important;
            order: 1;
          }
          .about-legacy-left {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            max-width: 100% !important;
            pointer-events: auto !important;
            text-align: center;
            align-items: center;
            padding: 30px 0 0;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            order: 2;
          }
          .legacy-emblem {
            align-items: center;
          }
          .legacy-years {
            font-size: clamp(64px, 16vw, 84px);
            line-height: 1;
          }
          .legacy-label {
            font-size: 17px;
          }
          .legacy-subtitle {
            font-size: 22px;
          }
          .about-legacy-right {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            max-width: 540px !important;
            margin: 0 auto;
            pointer-events: auto !important;
            text-align: center;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            order: 3;
            padding: 0 16px;
          }
          .legacy-heading {
            font-size: 22px;
            text-align: center;
            margin-bottom: 14px;
          }
          .about-legacy-right .body-text {
            font-size: 15px;
            line-height: 1.65;
            text-align: center;
            margin-bottom: 12px;
          }
        }
      `}</style>
    </section>
  );
}
