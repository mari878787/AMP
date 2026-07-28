import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutLegacyExpand({
  legacyYears = "25",
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

    // Refresh ScrollTrigger to calculate exact initial bounds post-mount
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%', // Scroll distance equal to 100vh for smooth expansion
        scrub: 1,      // 1-second lag smooth scrubbing
        pin: true,     // Pin section in place while scrubbing
        anticipatePin: 1
      }
    });

    // 1. Expand image to full screen width & height
    tl.to(imageWrapRef.current, {
      width: '100vw',
      height: '100vh',
      borderRadius: '0px',
      ease: 'none'
    }, 0);

    // 2. Simultaneously fade out side texts
    tl.to([leftTextRef.current, rightTextRef.current], {
      opacity: 0,
      scale: 0.92,
      filter: 'blur(4px)',
      ease: 'none'
    }, 0);

    return () => clearTimeout(timer);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="about-legacy-expand-section">
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

        {/* Center Column: Growing Image Container */}
        <div ref={imageWrapRef} className="about-legacy-img-wrap">
          <img
            src={image}
            alt="About Legacy Showcase"
            className="about-legacy-img"
          />
        </div>

        {/* Right Column: Editorial Description */}
        <div ref={rightTextRef} className="about-legacy-right">
          <p className="about-legacy-desc">
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

        .about-legacy-expand-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/images/logo-curser-v3.png');
          background-repeat: space;
          background-size: 30px auto;
          opacity: 0.03;
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
          will-change: opacity, transform;
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
          width: 25vw;
          height: 72vh;
          overflow: hidden;
          z-index: 5;
          will-change: width, height;
        }

        .about-legacy-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* ── RIGHT EDITORIAL ── */
        .about-legacy-right {
          position: absolute;
          right: 6%;
          z-index: 10;
          max-width: 340px;
          pointer-events: none;
          transform-origin: center right;
          will-change: opacity, transform;
        }

        .about-legacy-desc {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.7;
          color: #444444;
          margin: 0;
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
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
