import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
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
  const [isAtelierOpen, setIsAtelierOpen] = useState(false);
  
  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  const tagsRef = useRef(null);
  const atelierNavRef = useRef(null);

  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  // Lock body scroll when Atelier is open on mobile
  useEffect(() => {
    if (isAtelierOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAtelierOpen]);

  // Auto-scroll active atelier tab into view
  useEffect(() => {
    if (isAtelierOpen && atelierNavRef.current) {
      const activeEl = atelierNavRef.current.querySelector('.sp2-atelier-nav-pill.active');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeIdx, isAtelierOpen]);

  // Auto-scroll active tag pill into view on mobile
  useEffect(() => {
    if (window.innerWidth < 960 && tagsRef.current) {
      const activeEl = tagsRef.current.querySelector('.sp2-tag.active');
      if (activeEl) {
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
    }, 320);
  }, [activeIdx, fading]);

  // Auto-rotate specifications
  useEffect(() => {
    if (isAtelierOpen || isHovering || specs.length === 0) return;
    
    const interval = setInterval(() => {
      if (!fading) {
        switchSpec((activeIdx + 1) % specs.length);
      }
    }, 4500);
    
    return () => clearInterval(interval);
  }, [activeIdx, fading, isAtelierOpen, isHovering, specs.length, switchSpec]);

  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const diff = touchStartRef.current - touchEndRef.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      switchSpec((activeIdx + 1) % specs.length);
    } else if (diff < -minSwipeDistance) {
      switchSpec((activeIdx - 1 + specs.length) % specs.length);
    }

    touchStartRef.current = 0;
    touchEndRef.current = 0;
  }, [activeIdx, switchSpec, specs.length]);

  // Mouse parallax for card
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  if (!specs || specs.length === 0) return null;

  const spec = specs[activeIdx];
  const progress = ((activeIdx + 1) / specs.length) * 100;

  // Group specs into rows for the tag cloud
  const tagRows = [
    specs.slice(0, 5),
    specs.slice(5, 9),
    specs.slice(9, 13),
    specs.slice(13),
  ];

  const cardTransform = isHovering
    ? `perspective(1200px) rotateY(${mousePos.x * 1.2}deg) rotateX(${-mousePos.y * 1.2}deg) translateY(-4px)`
    : 'perspective(1200px) rotateY(0deg) rotateX(0deg) translateY(0px)';

  return (
    <section className={`sp2-section ${hasRevealed ? 'revealed' : ''}`} id="specifications" style={{ background: 'url("/images/bg/BL-1.png") left bottom / contain no-repeat' }} ref={sectionRef}>

      {/* Ambient Background Effects */}
      <div className="sp2-bg-noise" aria-hidden="true"></div>
      <div className="sp2-bg-glow" aria-hidden="true"></div>
      <div className="sp2-bg-grid" aria-hidden="true"></div>

      {/* ── MOBILE PREVIEW CARD (Hidden on Desktop) ── */}
      <div className="sp2-mobile-preview-card">
        <div className="section-header">
          <span className="section-tag">Specifications</span>
          <h2 className="section-title" style={{ color: 'var(--color-text-dark)' }}>Technical Specifications</h2>
          <p className="section-subtitle" style={{ color: 'var(--color-text-dark)', marginTop: '8px' }}>Bespoke construction details and premium material selections</p>
        </div>
        
        <div className="sp2-preview-frame">
          <div className="sp2-preview-icon">
            <Sparkles size={26} color="#b48564" style={{ margin: '0 auto 12px auto', display: 'block' }} />
          </div>
          <h3 className="sp2-preview-frame-title">Technical Specifications</h3>
          <p className="sp2-preview-frame-text">
            Immerse yourself in the technical engineering, structural layout, premium materials, and bespoke utility details of Crystal Moonlight Villa.
          </p>
          <div className="sp2-preview-peek-grid">
            <span className="peek-tag">✦ Structure</span>
            <span className="peek-tag">✦ Flooring</span>
            <span className="peek-tag">✦ Electrical</span>
            <span className="peek-tag">✦ +12 More</span>
          </div>
          <button className="sp2-preview-cta" onClick={() => setIsAtelierOpen(true)}>
            EXPLORE TECHNICAL ATELIER
          </button>
        </div>
      </div>

      {/* ── MOBILE FULL-SCREEN ATELIER OVERLAY ── */}
      {isAtelierOpen && (
        <div className="sp2-atelier-overlay">
          <div className="sp2-atelier-container">
            
            {/* Header */}
            <div className="sp2-atelier-header">
              <div className="sp2-atelier-title-area">
                <span className="sp2-atelier-subtitle">TECHNICAL SPECIFICATIONS</span>
                <h2 className="sp2-atelier-main-title">TECHNICAL ATELIER</h2>
              </div>
              <button className="sp2-atelier-close" onClick={() => setIsAtelierOpen(false)} aria-label="Close specifications">
                <X size={22} color="#111111" />
              </button>
            </div>

            {/* Horizontal Scrollable Categories */}
            <div className="sp2-atelier-tabs-nav" ref={atelierNavRef}>
              {specs.map((s, i) => (
                <button
                  key={s.id || i}
                  className={`sp2-atelier-nav-pill ${i === activeIdx ? 'active' : ''}`}
                  onClick={() => switchSpec(i)}
                >
                  <span className="pill-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="pill-label">{s.label}</span>
                </button>
              ))}
            </div>

            {/* Immersive Swipeable Content Pane */}
            <div 
              className={`sp2-atelier-content-pane ${fading ? 'fade' : 'show'}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {spec.image && (
                <div className="sp2-atelier-visual-col">
                  <div className="sp2-atelier-visual-bg"></div>
                  <img src={spec.image} alt={spec.title} className="sp2-atelier-img" />
                </div>
              )}

              <div className="sp2-atelier-details-col">
                <div className="sp2-atelier-num-marker">
                  SPECIFICATION {String(activeIdx + 1).padStart(2, '0')} / {String(specs.length).padStart(2, '0')}
                </div>
                <h3 className="sp2-atelier-spec-title">{spec.title}</h3>
                <div className="sp2-atelier-bullets">
                  {spec.details && spec.details.map((d, dIdx) => (
                    <p key={dIdx} className="sp2-atelier-bullet-text">
                      {d}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Navigation */}
            <div className="sp2-atelier-footer">
              <button 
                className="sp2-atelier-footer-btn"
                onClick={() => switchSpec((activeIdx - 1 + specs.length) % specs.length)}
                aria-label="Previous specification"
              >
                <ChevronLeft size={18} />
                <span>PREV</span>
              </button>
              
              <div className="sp2-atelier-dots">
                {specs.map((_, i) => (
                  <button 
                    key={i} 
                    className={`sp2-atelier-dot ${i === activeIdx ? 'active' : ''}`}
                    onClick={() => switchSpec(i)}
                    aria-label={`Go to specification ${i + 1}`}
                  />
                ))}
              </div>

              <button 
                className="sp2-atelier-footer-btn"
                onClick={() => switchSpec((activeIdx + 1) % specs.length)}
                aria-label="Next specification"
              >
                <span>NEXT</span>
                <ChevronRight size={18} />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── DESKTOP LAYOUT (Hidden on Mobile) ── */}
      <div className="sp2-layout">

        {/* ── LEFT: Title + Tag Cloud ── */}
        <ScrollReveal className="sp2-left" animation="fadeUp">

          <div className="section-header">
            <h2 className="section-title">
              {title} <br /><span style={{ color: '#b48564' }}>{highlightTitle}</span>
            </h2>
          </div>

          {/* Tag Cloud */}
          <div className="sp2-tags" ref={tagsRef}>
            <div className="sp2-tag-flow">
              {specs.map((s, idx) => (
                <React.Fragment key={s.id || idx}>
                  {idx > 0 && <span className="sp2-tag-separator">|</span>}
                  <button
                    className={`sp2-tag ${idx === activeIdx ? 'active' : ''}`}
                    onClick={() => switchSpec(idx)}
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
        <ScrollReveal className="sp2-right" animation="fadeUp" delay={0.2} as="div">
          <div className="sp2-card">
            <div className={`sp2-card-inner ${fading ? 'hide' : 'show'}`}>

              {/* Info half */}
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
                    <p key={i} className="sp2-card-detail-text">
                      {d}
                    </p>
                  ))}
                </div>

                {/* Bottom Pagination Dashes Row */}
                <div className="sp2-card-bottom-nav">
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
                </div>
              </div>

              {/* Image half with blueprint overlay */}
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
        .section-header {
          margin-bottom: 40px;
          text-align: left;
        }

        .sp2-section {
          position: relative;
          z-index: 10;
          padding: 80px 0;
          overflow: hidden;
          background: #ffffff;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── DESKTOP MAIN LAYOUT ── */
        .sp2-layout {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 5.2fr 6.8fr;
          gap: 64px;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
        }

        /* ── LEFT SIDE: SPECIFICATION TABS ── */
        .sp2-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .sp2-tags {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-top: 16px;
        }

        .sp2-tag-flow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0;
          padding: 0;
          background-image: linear-gradient(to bottom, transparent 63px, rgba(0, 0, 0, 0.08) 63px, rgba(0, 0, 0, 0.08) 64px);
          background-size: 100% 64px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .sp2-tag-separator {
          color: rgba(0, 0, 0, 0.25);
          margin: 0 16px;
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
          font-size: 18px;
          color: #666666;
          transition: all 0.3s ease;
          outline: none;
          box-shadow: none !important;
          height: 64px;
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
          animation: sp2-line-reveal 0.3s ease forwards;
        }

        @keyframes sp2-line-reveal {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        /* ── RIGHT SIDE: SPEC DETAILS PANEL ── */
        .sp2-right {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .sp2-card {
          width: 100%;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(180, 133, 100, 0.12);
          overflow: hidden;
          padding: 44px;
          box-sizing: border-box;
          min-height: 440px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .sp2-card-inner {
          display: grid;
          grid-template-columns: 6fr 4fr;
          gap: 40px;
          width: 100%;
          align-items: center;
        }

        .sp2-card-inner.hide {
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.25s ease;
        }
        .sp2-card-inner.show {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
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
          margin-bottom: 20px;
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
          font-size: 24px;
          font-weight: 500;
          color: #000000;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 16px 0;
        }

        .sp2-card-sep {
          width: 40px;
          height: 1px;
          background: rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
        }

        .sp2-card-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .sp2-card-detail-text {
          font-family: var(--font-sans);
          font-size: 18px;
          color: #4f4f4f;
          line-height: 1.5;
          margin: 0;
        }

        .sp2-card-bottom-nav {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: auto;
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
          gap: 6px;
        }

        .sp2-bottom-dash {
          width: 24px;
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
          max-height: 280px;
          object-fit: contain;
          opacity: 0.25;
          mix-blend-mode: multiply;
          filter: grayscale(1);
          pointer-events: none;
        }

        /* ── MOBILE PREVIEW & OVERLAYS ── */
        .sp2-mobile-preview-card {
          display: none;
          padding: 0 24px;
          box-sizing: border-box;
          width: 100%;
        }

        .sp2-preview-frame {
          background: #ffffff;
          border: 1px solid rgba(180, 133, 100, 0.2);
          border-radius: 12px;
          padding: 32px 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          text-align: center;
        }

        .sp2-preview-frame-title {
          font-size: 18px;
          color: #000;
          margin-bottom: 12px;
        }

        .sp2-preview-frame-text {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .sp2-preview-peek-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .peek-tag {
          font-size: 12px;
          color: #b48564;
          background: rgba(180, 133, 100, 0.08);
          padding: 4px 10px;
          border-radius: 20px;
        }

        .sp2-preview-cta {
          width: 100%;
          background: #b48564;
          color: #fff;
          border: none;
          padding: 14px 20px;
          border-radius: 8px;
          font-weight: 500;
          letter-spacing: 0.05em;
          cursor: pointer;
        }

        /* Mobile Atelier overlay modal */
        .sp2-atelier-overlay {
          position: fixed;
          inset: 0;
          background: #ffffff;
          z-index: 10000;
          display: flex;
          flex-direction: column;
        }

        .sp2-atelier-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 24px;
          box-sizing: border-box;
          justify-content: space-between;
        }

        .sp2-atelier-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding-bottom: 16px;
        }

        .sp2-atelier-main-title {
          font-size: 20px;
          margin: 4px 0 0 0;
          color: #000;
        }

        .sp2-atelier-subtitle {
          font-size: 10px;
          color: #888;
          letter-spacing: 0.1em;
        }

        .sp2-atelier-close {
          background: transparent;
          border: none;
          font-size: 22px;
          cursor: pointer;
        }

        .sp2-atelier-tabs-nav {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          scrollbar-width: none;
        }
        .sp2-atelier-tabs-nav::-webkit-scrollbar {
          display: none;
        }

        .sp2-atelier-nav-pill {
          background: transparent;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          white-space: nowrap;
          opacity: 0.5;
        }
        .sp2-atelier-nav-pill.active {
          opacity: 1;
          color: #b48564;
          font-weight: 500;
        }
        .pill-num {
          font-size: 11px;
        }
        .pill-label {
          font-size: 13px;
        }

        .sp2-atelier-content-pane {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 24px 0;
          box-sizing: border-box;
          transition: opacity 0.25s ease;
        }
        .sp2-atelier-content-pane.fade {
          opacity: 0;
        }
        .sp2-atelier-content-pane.show {
          opacity: 1;
        }

        .sp2-atelier-num-marker {
          font-size: 12px;
          color: #b48564;
          margin-bottom: 12px;
        }

        .sp2-atelier-spec-title {
          font-size: 22px;
          color: #000;
          margin-bottom: 16px;
        }

        .sp2-atelier-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sp2-atelier-bullet-text {
          font-size: 14.5px;
          color: #555;
          line-height: 1.5;
          margin: 0;
        }

        .sp2-atelier-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(0,0,0,0.06);
          padding-top: 16px;
        }

        .sp2-atelier-footer-btn {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #b48564;
          font-weight: 500;
        }

        .sp2-atelier-dots {
          display: flex;
          gap: 6px;
        }

        .sp2-atelier-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e0e0e0;
          border: none;
          padding: 0;
        }
        .sp2-atelier-dot.active {
          background: #b48564;
        }

        /* ── RESPONSIVE DESIGN ── */
        @media (max-width: 960px) {
          .sp2-layout {
            display: none;
          }
          .sp2-mobile-preview-card {
            display: block;
          }
          .sp2-section {
            padding: 40px 0;
          }
        }
`}</style>
    </section>
  );
}
