import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ProjectStoryCard({ project, onSelectTeaser }) {
  const images = (project.images && project.images.length > 0) 
    ? project.images 
    : [project.image || project.image];
    
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);
  const timerRef = useRef(null);
  const SLIDE_DURATION = 5000; // 5 seconds per slide

  // IntersectionObserver to check if card is on screen
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  // Auto-advance story slider ONLY when project card is on screen
  useEffect(() => {
    if (!isInView || images.length <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isInView, currentIndex, images.length]);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleSegmentClick = (e, idx) => {
    e.stopPropagation();
    setCurrentIndex(idx);
  };

  const handleCardClick = (e) => {
    if (project.teaserPoster && onSelectTeaser) {
      e.preventDefault();
      onSelectTeaser({ image: project.teaserPoster, title: project.title });
    }
  };

  const statusLabel = project.status ? project.status.toUpperCase() : 'ONGOING';

  return (
    <div 
      ref={cardRef}
      className="maia-story-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={project.link || '#'} 
        className="maia-story-card-link"
        onClick={handleCardClick}
      >
        {/* Background Image Container */}
        <div className="maia-story-img-wrapper">
          {images.map((imgSrc, idx) => (
            <picture
              key={idx}
              className={`maia-story-picture ${idx === currentIndex ? 'active' : ''}`}
            >
              {idx === 0 && project.mobileImage && (
                <source media="(max-width: 768px)" srcSet={encodeURI(project.mobileImage)} />
              )}
              <img
                src={imgSrc}
                alt={`${project.title} - Slide ${idx + 1}`}
                className="maia-story-img"
              />
            </picture>
          ))}

          {/* Top Gradient Overlay */}
          <div className="maia-story-top-overlay" />
          
          {/* Bottom Gradient Overlay */}
          <div className="maia-story-bottom-overlay" />

          {/* ── TOP SEGMENTED PROGRESS BARS (MAIA STYLE) ── */}
          <div className="maia-story-progress-bar-container">
            {images.map((_, idx) => {
              const isActive = idx === currentIndex;
              const isPassed = idx < currentIndex;
              const shouldAnimate = isActive && isInView;

              return (
                <div 
                  key={idx} 
                  className="maia-story-progress-segment"
                  onClick={(e) => handleSegmentClick(e, idx)}
                >
                  <div 
                    className={`maia-story-progress-fill ${shouldAnimate ? 'animating' : isPassed ? 'filled' : ''}`}
                    style={{
                      animationDuration: shouldAnimate ? `${SLIDE_DURATION}ms` : '0ms'
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Click Zones (Left / Right) */}
          {images.length > 1 && (
            <>
              <div className="maia-story-tap-zone left" onClick={handlePrev} title="Previous Photo">
                <button className="maia-story-nav-arrow" aria-label="Previous image">
                  <ChevronLeft size={20} />
                </button>
              </div>
              <div className="maia-story-tap-zone right" onClick={handleNext} title="Next Photo">
                <button className="maia-story-nav-arrow" aria-label="Next image">
                  <ChevronRight size={20} />
                </button>
              </div>
            </>
          )}

          {/* ── BOTTOM CONTENT OVERLAY (STATUS BADGE, TITLE, LOCATION, DESCRIPTION, SPECS) ── */}
          <div className="maia-story-content-box">
            
            {/* Status Pill Badge */}
            <ScrollReveal animation="fadeUp" delay={0.05} once={false}>
              <div className="maia-story-status-badge">
                {statusLabel}
              </div>
            </ScrollReveal>

            {/* Project Title */}
            <ScrollReveal animation="fadeUp" delay={0.15} once={false}>
              <h3 className="maia-story-title">
                {project.title}
              </h3>
            </ScrollReveal>

            {/* Location Subtitle */}
            <ScrollReveal animation="fadeUp" delay={0.25} once={false}>
              <div className="maia-story-location-row">
                <MapPin size={16} className="maia-story-pin-icon" />
                <span>{project.location}</span>
              </div>
            </ScrollReveal>

            {/* 2-Liner Project Description */}
            {project.description && (
              <ScrollReveal animation="fadeUp" delay={0.35} once={false}>
                <p className="maia-story-description">
                  {project.description}
                </p>
              </ScrollReveal>
            )}

            {/* Specifications Summary Line including Site Extent with Custom Icons */}
            <ScrollReveal animation="fadeUp" delay={0.45} once={false} style={{ width: '100%' }}>
              <div className="maia-story-specs-row">
                <div className="maia-story-specs-list">
                  {project.siteExtent && (
                    <span className="maia-story-spec-pill">
                      <img 
                        src="/images/allProject/site-extention.png" 
                        alt="Site Extent" 
                        className="maia-story-spec-icon"
                      />
                      <strong>Site Extent:</strong> {project.siteExtent}
                    </span>
                  )}
                  {project.bhkConfig && (
                    <span className="maia-story-spec-pill">
                      <img 
                        src={project.category === 'Plots' ? "/images/allProject/plot-Configuration.png" : "/images/allProject/Configuration.png"} 
                        alt="Config" 
                        className="maia-story-spec-icon"
                      />
                      <strong>Config:</strong> {project.bhkConfig}
                    </span>
                  )}
                  {project.totalUnits && (
                    <span className="maia-story-spec-pill">
                      <img 
                        src={project.category === 'Plots' ? "/images/allProject/plot-total-units.png" : "/images/allProject/total-units.png"} 
                        alt="Units" 
                        className="maia-story-spec-icon"
                      />
                      <strong>Units:</strong> {project.totalUnits}
                    </span>
                  )}
                  {project.unitSize && (
                    <span className="maia-story-spec-pill">
                      <img 
                        src="/images/allProject/unit-size.png" 
                        alt="Size" 
                        className="maia-story-spec-icon"
                      />
                      <strong>Size:</strong> {project.unitSize}
                    </span>
                  )}
                </div>
                <div className="maia-story-explore-btn">
                  <span>EXPLORE</span>
                  <ArrowRight size={14} className="maia-story-arrow" />
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </a>

      <style>{`
        .maia-story-card {
          position: relative;
          width: 100%;
          border-radius: 0px;
          overflow: hidden;
          background-color: #0b0b0b;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .maia-story-card-link {
          display: block;
          text-decoration: none;
          color: inherit;
          width: 100%;
          height: 100%;
        }

        .maia-story-img-wrapper {
          position: relative;
          width: 100%;
          height: clamp(550px, 82vh, 780px);
          overflow: hidden;
          background-color: #0b0b0b;
        }

        @media (max-width: 768px) {
          .maia-story-img-wrapper {
            height: clamp(480px, 75vh, 600px);
          }
        }

        .maia-story-picture {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          scale: 1.04;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), scale 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
          display: block;
        }

        .maia-story-picture.active {
          opacity: 1;
          scale: 1;
          z-index: 2;
        }

        .maia-story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Gradient Overlays */
        .maia-story-top-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 110px;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%);
          z-index: 3;
          pointer-events: none;
        }

        .maia-story-bottom-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 340px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.75) 55%, rgba(0, 0, 0, 0) 100%);
          z-index: 3;
          pointer-events: none;
        }

        /* ── TOP SEGMENTED PROGRESS BARS ── */
        .maia-story-progress-bar-container {
          position: absolute;
          top: 24px;
          left: clamp(20px, 4vw, 50px);
          right: clamp(20px, 4vw, 50px);
          z-index: 10;
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .maia-story-progress-segment {
          flex: 1;
          height: 3.5px;
          background: rgba(255, 255, 255, 0.35);
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          transition: height 0.2s ease, background 0.2s ease;
        }

        .maia-story-progress-segment:hover {
          height: 5px;
          background: rgba(255, 255, 255, 0.55);
        }

        .maia-story-progress-fill {
          height: 100%;
          width: 0%;
          background: #ffffff;
          border-radius: 4px;
        }

        .maia-story-progress-fill.filled {
          width: 100%;
        }

        .maia-story-progress-fill.animating {
          animation: maiaSegmentFill linear forwards;
        }

        @keyframes maiaSegmentFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        /* Navigation Click Zones */
        .maia-story-tap-zone {
          position: absolute;
          top: 50px;
          bottom: 220px;
          width: 25%;
          z-index: 8;
          display: flex;
          align-items: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .maia-story-tap-zone.left {
          left: 0;
          padding-left: 20px;
          justify-content: flex-start;
        }

        .maia-story-tap-zone.right {
          right: 0;
          padding-right: 20px;
          justify-content: flex-end;
        }

        .maia-story-card:hover .maia-story-tap-zone {
          opacity: 1;
        }

        .maia-story-nav-arrow {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .maia-story-nav-arrow:hover {
          background: rgba(180, 133, 100, 0.85);
          transform: scale(1.1);
        }

        /* ── BOTTOM OVERLAY CONTENT ── */
        .maia-story-content-box {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 5;
          padding: 30px clamp(20px, 4vw, 50px) 36px clamp(20px, 4vw, 50px);
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* Status Pill Badge (Glassmorphic Blur Effect) */
        .maia-story-status-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(14px) saturate(180%);
          -webkit-backdrop-filter: blur(14px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 4px;
          margin-bottom: 12px;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 4px 16px rgba(0, 0, 0, 0.25);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        /* Project Title (Matching Reference Screenshot) */
        .maia-story-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: clamp(30px, 3.5vw, 42px);
          font-weight: 400;
          color: #ffffff;
          margin: 0 0 6px 0;
          line-height: 1.12;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
        }

        /* Location Row */
        .maia-story-location-row {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.92);
          font-family: var(--font-sans);
          font-size: 14.5px;
          font-weight: 500;
          margin-bottom: 12px;
          letter-spacing: 0.01em;
        }

        .maia-story-pin-icon {
          color: #ffffff;
          flex-shrink: 0;
        }

        /* Description Paragraph (Matching Reference Screenshot) */
        .maia-story-description {
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.88);
          margin: 0 0 16px 0;
          max-width: 680px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Bottom Specs Row */
        .maia-story-specs-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          width: 100%;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .maia-story-specs-list {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .maia-story-spec-pill {
          font-family: var(--font-sans);
          font-size: 15px;
          color: rgba(255, 255, 255, 0.88);
          background: transparent;
          border: none;
          padding: 0;
          border-radius: 0;
          backdrop-filter: none;
          letter-spacing: 0.01em;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .maia-story-spec-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          flex-shrink: 0;
        }

        .maia-story-spec-pill strong {
          color: #ffffff;
          font-weight: 600;
          margin-right: 3px;
        }

        /* ── ULTRA-CLEAR OPTICAL GLASS BUTTON ── */
        .maia-story-explore-btn {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 9px;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: #ffffff;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
          background: linear-gradient(
            135deg, 
            rgba(255, 255, 255, 0.28) 0%, 
            rgba(255, 255, 255, 0.06) 45%,
            rgba(255, 255, 255, 0.18) 100%
          );
          backdrop-filter: blur(24px) saturate(210%) brightness(115%);
          -webkit-backdrop-filter: blur(24px) saturate(210%) brightness(115%);
          padding: 11px 24px;
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 
            inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.85),
            inset 0 -1.5px 1.5px 0 rgba(255, 255, 255, 0.25),
            inset 0 0 12px 0 rgba(255, 255, 255, 0.15),
            0 12px 32px rgba(0, 0, 0, 0.35);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          user-select: none;
        }

        .maia-story-explore-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.6) 50%, 
            transparent 100%
          );
          transition: left 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .maia-story-explore-btn:hover {
          background: linear-gradient(
            135deg, 
            rgba(255, 255, 255, 0.42) 0%, 
            rgba(255, 255, 255, 0.14) 50%,
            rgba(255, 255, 255, 0.32) 100%
          );
          border-color: rgba(255, 255, 255, 0.85);
          box-shadow: 
            inset 0 2px 2px 0 rgba(255, 255, 255, 0.95),
            inset 0 -1.5px 2px 0 rgba(255, 255, 255, 0.4),
            inset 0 0 20px 0 rgba(255, 255, 255, 0.25),
            0 14px 40px rgba(0, 0, 0, 0.45);
          transform: translateY(-2px) scale(1.05);
        }

        .maia-story-card:hover .maia-story-explore-btn::before {
          left: 120%;
        }

        .maia-story-arrow {
          transition: transform 0.3s ease;
        }

        .maia-story-card:hover .maia-story-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
