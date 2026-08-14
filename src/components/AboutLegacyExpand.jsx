import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutLegacyExpand({
  legacyYears = "10+",
  legacyTitle = "years of",
  legacySubtitle = "INCREDIBLE LEGACY",
  description = "Aadhithya Mohan Properties represents the pinnacle of premium residential developments in Medavakkam, Chennai. The brand is built around the idea that homes are not just structures, but powerful statements that define presence and elevate living for generations to come.",
  image = "/images/maia/5.png"
}) {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const imageWrapRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useGSAP(() => {
    // Only run full GSAP pinning & expansion on viewports >= 640px
    if (typeof window !== 'undefined' && window.innerWidth < 640) return;
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

    // 1. Shrink image from full screen (100vw, 100vh, 0px radius) down to small container (25vw, 72vh, 8px radius)
    tl.fromTo(imageWrapRef.current,
      {
        width: '100vw',
        height: '100vh',
        borderRadius: '0px'
      },
      {
        width: '25vw',
        height: '72vh',
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
          <p className="body-text">
            {description}
          </p>
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
          left: 6%;
          z-index: 10;
          max-width: 320px;
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
          font-size: clamp(80px, 9vw, 130px);
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
          font-size: 20px;
          font-style: italic;
          color: #666666;
          display: block;
        }

        .legacy-subtitle {
          font-family: var(--font-heading, serif);
          font-size: clamp(20px, 2.2vw, 32px);
          font-weight: 400;
          color: #b48564;
          text-transform: uppercase;
          letter-spacing: 0.1em;
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
          will-change: width, height, border-radius;
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
          background: linear-gradient(
            to bottom, 
            rgba(0, 0, 0, 0.75) 0%, 
            rgba(0, 0, 0, 0.0) 25%, 
            rgba(0, 0, 0, 0.3) 70%, 
            rgba(0, 0, 0, 0.75) 100%
          );
          pointer-events: none;
          z-index: 6;
        }

        /* ── RIGHT EDITORIAL ── */
        .about-legacy-right {
          position: absolute;
          right: 6%;
          z-index: 10;
          max-width: 340px;
          pointer-events: none;
          transform-origin: center right;
          will-change: opacity, transform, filter;
          opacity: 0;
        }

        /* ── RESPONSIVE MOBILE OVERRIDES ── */
        @media (max-width: 640px) {
          .about-legacy-expand-section {
            min-height: auto;
            padding: 60px 0;
          }
          .about-legacy-wrapper {
            height: auto;
            flex-direction: column;
            padding: 0 24px;
            gap: 32px;
          }
          .about-legacy-left, .about-legacy-right {
            position: relative;
            left: auto;
            right: auto;
            max-width: 100%;
            pointer-events: auto;
            text-align: center;
            align-items: center;
          }
          .legacy-emblem {
            align-items: center;
          }
          .about-legacy-img-wrap {
            width: 100% !important;
            height: 380px !important;
            border-radius: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
