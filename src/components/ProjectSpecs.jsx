import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ProjectSpecs({
  specs = [],
  title = "PROJECT",
  highlightTitle = "SPECIFICATIONS",
  subtitle = "PROJECT DETAILS"
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [displayIdx, setDisplayIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);

  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  const tagsRef = useRef(null);

  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  // Auto-scroll active tag pill into view on mobile if scrollable
  useEffect(() => {
    if (tagsRef.current) {
      const activeEl = tagsRef.current.querySelector('.sp2-tag.active');
      if (activeEl && typeof activeEl.scrollIntoView === 'function') {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeIdx]);

  // Smooth number counter animation
  useEffect(() => {
    if (displayIdx === activeIdx) return;
    const timer = setTimeout(() => setDisplayIdx(activeIdx), 50);
    return () => clearTimeout(timer);
  }, [activeIdx, displayIdx]);

  // Intersection observer for reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasRevealed(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const switchSpec = useCallback((index) => {
    if (index === activeIdx || fading) return;
    setFading(true);
    setTimeout(() => {
      setActiveIdx(index);
      setFading(false);
    }, 280);
  }, [activeIdx, fading]);

  // Auto-rotate specifications
  useEffect(() => {
    if (isHovering || specs.length === 0) return;

    const interval = setInterval(() => {
      if (!fading) {
        switchSpec((activeIdx + 1) % specs.length);
      }
    }, 5500);

    return () => clearInterval(interval);
  }, [activeIdx, fading, isHovering, specs.length, switchSpec]);

  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const diff = touchStartRef.current - touchEndRef.current;
    const minSwipeDistance = 45;

    if (diff > minSwipeDistance) {
      switchSpec((activeIdx + 1) % specs.length);
    } else if (diff < -minSwipeDistance) {
      switchSpec((activeIdx - 1 + specs.length) % specs.length);
    }

    touchStartRef.current = 0;
    touchEndRef.current = 0;
  }, [activeIdx, switchSpec, specs.length]);

  if (!specs || specs.length === 0) return null;

  const spec = specs[activeIdx];

  return (
    <section className={`sp2-section ${hasRevealed ? 'revealed' : ''}`} id="specifications" style={{ background: 'url("/images/bg/BL-1.png") left bottom / contain no-repeat' }} ref={sectionRef}>

      {/* Main Unified Layout for Desktop, Tablet, and Mobile */}
      <div className="sp2-layout">

        {/* ── LEFT: Title + Tag Cloud ── */}
        <ScrollReveal className="sp2-left" animation="fadeUp" delay={0.1}>
          <div className="section-header">
            <h2 className="section-title">
              {title} <br /><span style={{ color: '#b48564' }}>{highlightTitle}</span>
            </h2>
          </div>

          {/* Tag Flow */}
          <div className="sp2-tags" ref={tagsRef}>
            <div className="sp2-tag-flow">
              {specs.map((s, idx) => (
                <React.Fragment key={s.id || idx}>
                  {idx > 0 && <span className="sp2-tag-separator">|</span>}
                  <button
                    className={`sp2-tag ${idx === activeIdx ? 'active' : ''}`}
                    onClick={() => switchSpec(idx)}
                    type="button"
                  >
                    <span className="sp2-tag-text">{s.label}</span>
                    {idx === activeIdx && <span className="sp2-tag-gold-underline"></span>}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── RIGHT: Premium Detail Card ── */}
        <ScrollReveal className="sp2-right" animation="fadeUp" delay={0.25} as="div">
          <div
            className="sp2-card"
            ref={cardRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className={`sp2-card-inner ${fading ? 'hide' : 'show'}`}>

              {/* Info content */}
              <div className="sp2-card-info">
                <div className="sp2-card-num-wrapper">
                  <span className="sp2-card-num" key={displayIdx}>
                    {String(displayIdx + 1).padStart(2, '0')}
                  </span>
                  <div className="sp2-card-num-gold-line"></div>
                </div>

                <h3 className="sp2-card-title">{spec.title}</h3>
                <div className="sp2-card-sep"></div>

                <div className="sp2-card-details">
                  {spec.details && spec.details.map((d, i) => (
                    <p key={i} className={`sp2-card-detail-text ${i === 0 ? 'sp2-card-detail-lead' : ''}`}>
                      {d}
                    </p>
                  ))}
                </div>

                {/* Bottom Pagination Dashes Row */}
                <div className="sp2-card-bottom-nav">
                  <button
                    className="sp2-nav-arrow-btn prev"
                    onClick={() => switchSpec((activeIdx - 1 + specs.length) % specs.length)}
                    aria-label="Previous specification"
                    type="button"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <span className="sp2-bottom-nav-num">
                    {String(activeIdx + 1).padStart(2, '0')}
                  </span>

                  <div className="sp2-bottom-nav-dashes">
                    {specs.map((_, i) => (
                      <div
                        key={i}
                        className={`sp2-bottom-dash ${i === activeIdx ? 'active' : ''}`}
                        onClick={() => switchSpec(i)}
                      />
                    ))}
                  </div>

                  <span className="sp2-bottom-nav-total">
                    {String(specs.length).padStart(2, '0')}
                  </span>

                  <button
                    className="sp2-nav-arrow-btn next"
                    onClick={() => switchSpec((activeIdx + 1) % specs.length)}
                    aria-label="Next specification"
                    type="button"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Visual blueprint / illustration half */}
              <div className="sp2-card-visual">
                {spec.image && (
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="sp2-card-img"
                  />
                )}
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>

      <style>{`
        .sp2-section {
          position: relative;
          z-index: 10;
          padding: 80px 0;
          overflow: hidden;
          background: #ffffff;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── MAIN UNIFIED LAYOUT ── */
        .sp2-layout {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 56px;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
          align-items: flex-start;
        }

        /* ── LEFT SIDE: SPECIFICATION TABS ── */
        .sp2-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .sp2-left .section-header {
          margin-bottom: 24px;
          text-align: left;
        }

        .sp2-tags {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-top: 8px;
        }

        .sp2-tag-flow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0;
          padding: 0;
          background-image: linear-gradient(to bottom, transparent 55px, rgba(0, 0, 0, 0.08) 55px, rgba(0, 0, 0, 0.08) 56px);
          background-size: 100% 56px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .sp2-tag-separator {
          color: rgba(0, 0, 0, 0.22);
          margin: 0 14px;
          font-size: 13px;
          font-weight: 400;
          pointer-events: none;
          user-select: none;
        }

        .sp2-tag {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          cursor: pointer;
          position: relative;
          font-family: var(--font-sans);
          font-size: 17px;
          color: #666666;
          transition: all 0.25s ease;
          outline: none;
          box-shadow: none !important;
          height: 56px;
          display: inline-flex;
          align-items: center;
          font-weight: 400;
        }

        .sp2-tag:hover, .sp2-tag.active {
          color: #000000;
          font-weight: 600 !important;
        }

        .sp2-tag-gold-underline {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 3px;
          background: #b48564;
          z-index: 2;
          border-radius: 1.5px;
          animation: sp2-line-reveal 0.25s ease forwards;
        }

        @keyframes sp2-line-reveal {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        /* ── RIGHT SIDE: SPEC DETAILS PANEL ── */
        .sp2-right {
          display: flex;
          align-items: stretch;
          width: 100%;
        }

        .sp2-card {
          width: 100%;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(180, 133, 100, 0.15);
          overflow: hidden;
          padding: 40px;
          box-sizing: border-box;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .sp2-card-inner {
          display: grid;
          grid-template-columns: 6.5fr 3.5fr;
          gap: 32px;
          width: 100%;
          align-items: center;
          min-height: 100%;
        }

        .sp2-card-inner.hide {
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.2s ease;
        }
        .sp2-card-inner.show {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sp2-card-info {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: 100%;
        }

        .sp2-card-num-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .sp2-card-num {
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 500;
          color: #b48564;
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .sp2-card-num-gold-line {
          width: 24px;
          height: 2px;
          background: #b48564;
          margin-top: 6px;
        }

        .sp2-card-title {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 500;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 14px 0;
        }

        .sp2-card-sep {
          width: 36px;
          height: 1px;
          background: rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }

        .sp2-card-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .sp2-card-detail-text {
          font-family: var(--font-sans);
          font-size: 16px;
          color: #4f4f4f;
          line-height: 1.55;
          margin: 0;
        }

        .sp2-card-detail-text.sp2-card-detail-lead {
          font-size: 17px;
          font-weight: 600;
          color: #111111;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }

        .sp2-card-bottom-nav {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          padding-top: 16px;
        }

        .sp2-nav-arrow-btn {
          background: transparent;
          border: 1px solid rgba(0, 0, 0, 0.1);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b48564;
          cursor: pointer;
          padding: 0;
          transition: all 0.2s ease;
        }
        .sp2-nav-arrow-btn:hover {
          background: #b48564;
          color: #ffffff;
          border-color: #b48564;
        }

        .sp2-bottom-nav-num, .sp2-bottom-nav-total {
          font-family: var(--font-sans);
          font-size: 12px;
          color: #888888;
          font-weight: 500;
        }

        .sp2-bottom-nav-dashes {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
          max-width: 220px;
        }

        .sp2-bottom-dash {
          width: 14px;
          height: 2px;
          background: #e0e0e0;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .sp2-bottom-dash.active {
          background: #b48564;
        }

        .sp2-card-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .sp2-card-img {
          max-width: 100%;
          max-height: 240px;
          object-fit: contain;
          opacity: 0.22;
          mix-blend-mode: multiply;
          filter: grayscale(1);
          pointer-events: none;
        }

        /* ── RESPONSIVE MOBILE ADAPTATION ── */
        @media (max-width: 960px) {
          .sp2-section {
            padding: 36px 0;
          }

          .sp2-layout {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 0 20px;
          }

          .sp2-left .section-header {
            margin-bottom: 16px;
            text-align: center;
          }

          .sp2-tag-flow {
            justify-content: center;
            background-size: 100% 46px;
            background-image: linear-gradient(to bottom, transparent 45px, rgba(0, 0, 0, 0.08) 45px, rgba(0, 0, 0, 0.08) 46px);
          }

          .sp2-tag-separator {
            margin: 0 10px;
            font-size: 12px;
          }

          .sp2-tag {
            font-size: 14px;
            height: 46px;
          }

          .sp2-card {
            padding: 24px 20px;
            min-height: auto;
          }

          .sp2-card-inner {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .sp2-card-visual {
            display: none;
          }

          .sp2-card-title {
            font-size: 19px;
            margin-bottom: 10px;
          }

          .sp2-card-sep {
            margin-bottom: 14px;
          }

          .sp2-card-details {
            gap: 10px;
            margin-bottom: 20px;
          }

          .sp2-card-detail-text {
            font-size: 14.5px;
          }

          .sp2-bottom-nav-dashes {
            max-width: 160px;
          }

          .sp2-bottom-dash {
            width: 10px;
          }
        }
      `}</style>
    </section>
  );
}
