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
    <section className={`sp2-section ${hasRevealed ? 'revealed' : ''}`} id="specifications" ref={sectionRef}>

      {/* Ambient Background Effects */}
      <div className="sp2-bg-noise" aria-hidden="true"></div>
      <div className="sp2-bg-glow" aria-hidden="true"></div>
      <div className="sp2-bg-grid" aria-hidden="true"></div>

      {/* ── MOBILE PREVIEW CARD (Hidden on Desktop) ── */}
      <div className="sp2-mobile-preview-card">
        <div className="section-header" style={{ marginBottom: '24px' }}>
          <span className="section-tag">Specifications</span>
          <h2 className="section-title" style={{ color: '#133825' }}>Technical Specifications</h2>
          <p className="section-subtitle" style={{ color: '#2c543e', marginTop: '8px' }}>Bespoke construction details and premium material selections</p>
        </div>
        
        <div className="sp2-preview-frame">
          <div className="sp2-preview-blueprint-mesh"></div>
          <div className="sp2-preview-icon">✦</div>
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
                ✕
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

          <div className="section-header" style={{ marginBottom: '32px' }}>
            {/* <span className="section-tag">Specifications</span> */}
            <h2 className="section-title" style={{ color: '#133825', marginBottom: '0px' }}>
              Technical <span className="highlight-italic" style={{ color: '#8c6a51' }}>Specifications</span>
            </h2>
          </div>

          {/* Elegant divider */}
          <div className="sp2-divider">
            <div className="sp2-divider-line"></div>
            <span className="sp2-divider-diamond">◇</span>
            <div className="sp2-divider-line"></div>
          </div>

          {/* Tag Cloud */}
          <div className="sp2-tags" ref={tagsRef}>
            {tagRows.map((row, rowIdx) => (
              <div className="sp2-tag-row" key={rowIdx}>
                {row.map((s, i) => {
                  const globalIdx = (rowIdx === 0 ? 0 : rowIdx === 1 ? 5 : rowIdx === 2 ? 9 : 13) + i;
                  return (
                    <button
                      key={s.id || globalIdx}
                      className={`sp2-tag ${globalIdx === activeIdx ? 'active' : ''}`}
                      onClick={() => switchSpec(globalIdx)}
                    >
                      <span className="sp2-tag-text">{s.label}</span>
                      <span className="sp2-tag-underline"></span>
                      {globalIdx === activeIdx && <span className="sp2-tag-shimmer"></span>}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

        </ScrollReveal>

        {/* ── RIGHT: Premium Detail Card ── */}
        <ScrollReveal className="sp2-right" animation="fadeUp" delay={0.2} as="div">
          <div
            className={`sp2-card ${isHovering ? 'hovering' : ''}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => { setIsHovering(false); setMousePos({ x: 0, y: 0 }); }}
            style={{ transform: cardTransform }}
          >
            {/* Ambient glow behind card */}
            <div className="sp2-card-glow" aria-hidden="true"></div>

            <div className={`sp2-card-inner ${fading ? 'hide' : 'show'}`}>

              {/* Info half */}
              <div className="sp2-card-info">
                <div className="sp2-card-num-wrapper">
                  <span className="sp2-card-num" key={displayIdx}>
                    {String(displayIdx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="sp2-card-title">{spec.title}</h3>
                <div className="sp2-card-sep">
                  <div className="sp2-card-sep-line"></div>
                </div>
                <div className="sp2-card-details">
                  {spec.details && spec.details.slice(0, 2).map((d, i) => (
                    <p key={i} className="sp2-card-detail-text" style={{ animationDelay: `${i * 0.08}s` }}>
                      {d}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image half with architectural overlay */}
              <div className="sp2-card-visual">
                <div className="sp2-card-visual-blueprint" aria-hidden="true"></div>
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="sp2-card-img"
                />
                <div className="sp2-card-visual-overlay" aria-hidden="true"></div>
              </div>

            </div>

            {/* Step Progress Indicator */}
            <div className="sp2-card-progress">
              <span className="sp2-progress-current">
                {String(activeIdx + 1).padStart(2, '0')}
              </span>
              <div className="sp2-progress-track">
                <div className="sp2-progress-fill" style={{ width: `${progress}%` }}></div>
                <div className="sp2-progress-steps">
                  {specs.map((_, i) => (
                    <button
                      key={i}
                      className={`sp2-step ${i === activeIdx ? 'active' : ''} ${i < activeIdx ? 'past' : ''}`}
                      onClick={() => switchSpec(i)}
                      aria-label={`Specification ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <span className="sp2-progress-total">
                {String(specs.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </ScrollReveal>

      </div>

      <style>{`
        /* ══════════════════════════════════════════════
           SPECS v2 — LUXURY ATELIER EXPERIENCE
           Inspired by Armani / Bentley Residences
           ══════════════════════════════════════════════ */

        .section-header {
          margin-bottom: 40px;
          text-align: left;
        }

        .section-tag {
          display: block;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-gold-accent);
          margin-bottom: 12px;
        }

        .section-subtitle {
          font-family: var(--font-sans);
          font-size: 14.5px;
          color: var(--color-text-muted);
          line-height: 1.6;
          max-width: 680px;
          margin-top: 8px;
          margin-bottom: 0;
          text-align: left;
        }

        .sp2-section {
          background: radial-gradient(circle at top right, #b48564 0%, #dfc3ae 40%, #f4e9de 100%);
          position: relative;
          z-index: 10;
          padding: 50px 0 50px;
          overflow: hidden;
          border-top: 1px solid rgba(19, 56, 37, 0.06);
        }

        /* ── AMBIENT BACKGROUND EFFECTS ── */
        .sp2-bg-noise {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px;
          pointer-events: none;
          z-index: 0;
        }

        .sp2-bg-glow {
          position: absolute;
          top: 30%;
          right: 10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
          animation: sp2-breathe 8s ease-in-out infinite;
        }

        .sp2-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(19, 56, 37, 0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(19, 56, 37, 0.018) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
          z-index: 0;
          mask-image: radial-gradient(ellipse 70% 60% at 60% 50%, black 0%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 60% 50%, black 0%, transparent 100%);
        }

        @keyframes sp2-breathe {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }

        /* ── REVEAL ANIMATION ── */
        .sp2-section:not(.revealed) .sp2-layout {
          opacity: 0;
          transform: translateY(30px);
        }
        .sp2-section.revealed .sp2-layout {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* ── MAIN LAYOUT ── */
        .sp2-layout {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 56px;
          display: grid;
          grid-template-columns: 0.48fr 0.52fr;
          gap: 72px;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        /* ── LEFT SIDE ── */
        .sp2-left {
          padding-top: 16px;
        }

        .sp2-topbar {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .sp2-topbar-diamond {
          font-size: 7px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sp2-topbar-label {
          font-family: var(--font-sans);
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.32em;
          background: linear-gradient(135deg, var(--color-primary), #2c543e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .sp2-topbar-line {
          flex: 1;
          max-width: 80px;
          height: 1px;
          background: linear-gradient(90deg, rgba(19, 56, 37, 0.25), rgba(19, 56, 37, 0.02));
          position: relative;
          overflow: hidden;
        }

        .sp2-topbar-line-glow {
          position: absolute;
          top: -1px;
          left: -100%;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(19, 56, 37, 0.6), transparent);
          animation: sp2-line-sweep 4s ease-in-out infinite;
        }

        @keyframes sp2-line-sweep {
          0% { left: -40px; }
          50% { left: 100%; }
          100% { left: -40px; }
        }

        /* ── LUXURY TITLE ── */
        .sp2-title {
          font-family: var(--font-heading);
          font-size: 46px;
          font-weight: 300;
          letter-spacing: 0.08em;
          color: #1a1d24;
          margin: 0 0 32px 0;
          text-transform: uppercase;
          line-height: 1.12;
        }

        .sp2-title-gold {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-weight: 500;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 40%, var(--color-primary) 80%, #2c543e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
          letter-spacing: 0.02em;
          background-size: 200% 100%;
          animation: sp2-gold-shimmer 6s ease-in-out infinite;
        }

        @keyframes sp2-gold-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* ── ELEGANT DIVIDER ── */
        .sp2-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 40px;
        }

        .sp2-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(19, 56, 37, 0.2), rgba(19, 56, 37, 0.04));
        }

        .sp2-divider-line:last-child {
          background: linear-gradient(90deg, rgba(19, 56, 37, 0.04), rgba(19, 56, 37, 0.2));
        }

        .sp2-divider-diamond {
          font-size: 8px;
          color: var(--color-primary);
          opacity: 0.4;
          animation: sp2-diamond-pulse 3s ease-in-out infinite;
        }

        @keyframes sp2-diamond-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }

        /* ── TAG CLOUD ── */
        .sp2-tags {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sp2-tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(6, 11, 29, 0.04);
          position: relative;
        }

        .sp2-tag-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .sp2-tag {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.01em;
          color: #8c6a51;
          background: none;
          border: none;
          padding: 6px 0;
          margin-right: 28px;
          margin-bottom: 2px;
          cursor: pointer;
          transition: color 0.3s ease;
          position: relative;
          white-space: nowrap;
        }

        .sp2-tag-text {
          position: relative;
          z-index: 1;
        }

        .sp2-tag-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-primary);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sp2-tag-shimmer {
          display: none;
        }

        .sp2-tag:hover {
          color: #133825;
        }

        .sp2-tag:hover .sp2-tag-underline {
          width: 100%;
          background: rgba(19, 56, 37, 0.35);
        }

        .sp2-tag.active {
          color: #133825;
          font-weight: 600;
        }

        .sp2-tag.active .sp2-tag-underline {
          width: 100%;
          background: var(--color-primary);
        }

        /* ── RIGHT DETAIL CARD ── */
        .sp2-right {
          position: sticky;
          top: 80px;
        }

        .sp2-card {
          position: relative;
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.65);
          border-top: 1.5px solid rgba(255, 255, 255, 0.85);
          border-left: 1.5px solid rgba(255, 255, 255, 0.85);
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 30px 80px rgba(19, 56, 37, 0.06),
            0 8px 24px rgba(0, 0, 0, 0.03),
            inset 0 1px 2px rgba(255, 255, 255, 0.8);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .sp2-card.hovering {
          box-shadow:
            0 40px 100px rgba(19, 56, 37, 0.08),
            0 12px 36px rgba(0, 0, 0, 0.04),
            inset 0 1px 2px rgba(255, 255, 255, 0.9);
        }

        .sp2-card-glow {
          position: absolute;
          top: 50%;
          left: 30%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(19, 56, 37, 0.06) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
          animation: sp2-card-glow-pulse 5s ease-in-out infinite;
        }

        @keyframes sp2-card-glow-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .sp2-card-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 400px;
          position: relative;
          z-index: 1;
          transition: opacity 0.32s cubic-bezier(0.16, 1, 0.3, 1), transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sp2-card-inner.hide {
          opacity: 0;
          transform: translateY(12px) scale(0.98);
        }
        .sp2-card-inner.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* ── Info half ── */
        .sp2-card-info {
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .sp2-card-num-wrapper {
          overflow: hidden;
          margin-bottom: 18px;
        }

        .sp2-card-num {
          display: block;
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.2em;
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: sp2-num-slide 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes sp2-num-slide {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .sp2-card-title {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: 0.1em;
          color: #133825;
          margin: 0 0 20px 0;
          text-transform: uppercase;
        }

        .sp2-card-sep {
          margin-bottom: 24px;
          overflow: hidden;
        }

        .sp2-card-sep-line {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, var(--color-primary), rgba(19, 56, 37, 0.15));
          border-radius: 1px;
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sp2-card-inner.show .sp2-card-sep-line {
          width: 40px;
        }

        .sp2-card-inner.hide .sp2-card-sep-line {
          width: 0;
        }

        .sp2-card-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sp2-card-detail-text {
          font-family: var(--font-sans);
          font-size: 14.5px;
          line-height: 1.8;
          color: #2c543e;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .sp2-card-inner.show .sp2-card-detail-text {
          animation: sp2-detail-reveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes sp2-detail-reveal {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Image half ── */
        .sp2-card-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 36px 28px;
          position: relative;
          background: rgba(245, 242, 236, 0.25);
          border-left: 1px solid rgba(19, 56, 37, 0.06);
          overflow: hidden;
        }

        .sp2-card-visual-blueprint {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(19, 56, 37, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(19, 56, 37, 0.025) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .sp2-card-inner.show .sp2-card-visual-blueprint {
          opacity: 1;
        }

        .sp2-card-visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(253, 252, 249, 0.15) 0%, transparent 50%, rgba(19, 56, 37, 0.03) 100%);
          pointer-events: none;
        }

        .sp2-card-img {
          max-width: 100%;
          max-height: 340px;
          height: auto;
          display: block;
          object-fit: contain;
          position: relative;
          z-index: 1;
          opacity: 0.82;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
        }

        .sp2-card-inner.show .sp2-card-img {
          animation: sp2-img-reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }

        @keyframes sp2-img-reveal {
          from { opacity: 0; transform: scale(0.92) translateX(20px); }
          to { opacity: 0.82; transform: scale(1) translateX(0); }
        }

        .sp2-card-inner:hover .sp2-card-img {
          transform: scale(1.04);
          opacity: 0.9;
        }

        /* ── STEP PROGRESS INDICATOR ── */
        .sp2-card-progress {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 40px;
          border-top: 1px solid rgba(19, 56, 37, 0.06);
          background: rgba(255, 255, 255, 0.35);
          position: relative;
          z-index: 1;
        }

        .sp2-progress-current {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 500;
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.1em;
          min-width: 22px;
        }

        .sp2-progress-total {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          color: #b0b8c4;
          letter-spacing: 0.1em;
          min-width: 22px;
          text-align: right;
        }

        .sp2-progress-track {
          flex: 1;
          position: relative;
          height: 3px;
          background: rgba(6, 11, 29, 0.04);
          border-radius: 2px;
          overflow: hidden;
        }

        .sp2-progress-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary), var(--color-primary-hover));
          border-radius: 2px;
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 8px rgba(19, 56, 37, 0.3);
        }

        .sp2-progress-steps {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
        }

        .sp2-step {
          flex: 1;
          height: 100%;
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 8px 0;
          position: relative;
        }

        .sp2-step:hover::after {
          content: '';
          position: absolute;
          inset: -4px 1px;
          background: rgba(19, 56, 37, 0.12);
          border-radius: 2px;
        }

        /* ── MOBILE HIDDEN BY DEFAULT ── */
        .sp2-mobile-preview-card,
        .sp2-atelier-overlay {
          display: none;
        }

        /* ══════ RESPONSIVE ══════ */

        @media (max-width: 1200px) {
          .sp2-layout {
            gap: 48px;
            padding: 0 36px;
          }
          .sp2-title {
            font-size: 38px;
          }
          .sp2-card-info {
            padding: 36px 32px;
          }
          .sp2-card-title {
            font-size: 24px;
          }
        }

        @media (max-width: 960px) {
          .sp2-layout {
            display: none !important;
          }

          .sp2-section {
            padding: 60px 0 65px;
          }

          /* Mobile Preview Section */
          .sp2-mobile-preview-card {
            display: flex !important;
            flex-direction: column;
            padding: 0 24px;
            box-sizing: border-box;
          }

          .sp2-preview-topbar {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 16px;
          }

          .sp2-preview-frame {
            position: relative;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(19, 56, 37, 0.2);
            border-radius: 18px;
            padding: 36px 24px;
            text-align: center;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(19, 56, 37, 0.04);
          }

          .sp2-preview-blueprint-mesh {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(19, 56, 37, 0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(19, 56, 37, 0.015) 1px, transparent 1px);
            background-size: 30px 30px;
            pointer-events: none;
            opacity: 0.85;
          }

          .sp2-preview-icon {
            font-size: 20px;
            color: var(--color-primary);
            margin-bottom: 16px;
            animation: sp2-diamond-pulse 3s infinite ease-in-out;
          }

          .sp2-preview-frame-title {
            font-family: var(--font-heading);
            font-size: 22px;
            font-weight: 500;
            color: #1a1d24;
            margin: 0 0 12px 0;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }

          .sp2-preview-frame-text {
            font-family: var(--font-sans);
            font-size: 13.5px;
            line-height: 1.65;
            color: #64748b;
            margin: 0 auto 24px;
            max-width: 380px;
          }

          .sp2-preview-peek-grid {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 8px 12px;
            margin-bottom: 32px;
            position: relative;
            z-index: 1;
          }

          .peek-tag {
            font-family: var(--font-sans);
            font-size: 11px;
            font-weight: 500;
            color: var(--color-primary);
            background: rgba(19, 56, 37, 0.06);
            border: 1px solid rgba(19, 56, 37, 0.12);
            padding: 4px 10px;
            border-radius: 100px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
          }

          .sp2-preview-cta {
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 280px;
            background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
            border: none;
            color: #ffffff;
            font-family: var(--font-sans);
            font-size: 11.5px;
            font-weight: 600;
            letter-spacing: 0.15em;
            padding: 16px 24px;
            border-radius: 100px;
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(19, 56, 37, 0.25);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .sp2-preview-cta:active {
            transform: scale(0.97);
            box-shadow: 0 4px 12px rgba(19, 56, 37, 0.15);
          }

          /* ── FULL SCREEN ATELIER OVERLAY (LIGHT THEME) ── */
          .sp2-atelier-overlay {
            display: flex !important;
            position: fixed;
            inset: 0;
            background: #fdfcf9;
            z-index: 99999;
            flex-direction: column;
            overflow: hidden;
            animation: sp2-overlay-fadein 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          @keyframes sp2-overlay-fadein {
            from { opacity: 0; transform: scale(1.03); }
            to { opacity: 1; transform: scale(1); }
          }

          .sp2-atelier-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at top right, #faf8f5, #fdfcf9);
            position: relative;
            box-sizing: border-box;
          }

          /* Header */
          .sp2-atelier-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px 20px 16px;
            border-bottom: 1px solid rgba(19, 56, 37, 0.15);
          }

          .sp2-atelier-title-area {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .sp2-atelier-subtitle {
            font-family: var(--font-sans);
            font-size: 8.5px;
            font-weight: 600;
            color: var(--color-primary);
            letter-spacing: 0.25em;
          }

          .sp2-atelier-main-title {
            font-family: var(--font-heading);
            font-size: 17px;
            font-weight: 400;
            color: #1a1d24;
            margin: 0;
            letter-spacing: 0.1em;
          }

          .sp2-atelier-close {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1px solid rgba(19, 56, 37, 0.3);
            background: rgba(19, 56, 37, 0.03);
            color: var(--color-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 13px;
            transition: all 0.25s ease;
          }

          .sp2-atelier-close:active {
            background: var(--color-primary);
            color: #ffffff;
          }

          /* Horizontal Category Bar */
          .sp2-atelier-tabs-nav {
            display: flex;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding: 14px 20px;
            gap: 8px;
            border-bottom: 1px solid rgba(19, 56, 37, 0.1);
            background: rgba(19, 56, 37, 0.02);
          }

          .sp2-atelier-tabs-nav::-webkit-scrollbar {
            display: none;
          }

          .sp2-atelier-nav-pill {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            border-radius: 100px;
            border: 1px solid rgba(19, 56, 37, 0.15);
            background: rgba(255, 255, 255, 0.9);
            color: #5a6373;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .sp2-atelier-nav-pill.active {
            background: var(--color-primary);
            border-color: var(--color-primary);
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(19, 56, 37, 0.18);
          }

          .sp2-atelier-nav-pill.active .pill-num {
            color: #ffffff;
          }

          .pill-num {
            font-family: var(--font-heading);
            font-size: 9.5px;
            font-weight: 500;
            color: var(--color-primary);
          }

          .pill-label {
            font-family: var(--font-sans);
            font-size: 11px;
            font-weight: 500;
            white-space: nowrap;
          }

          /* Content Pane */
          .sp2-atelier-content-pane {
            flex: 1;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            padding: 24px 20px;
            gap: 24px;
            transition: opacity 0.3s ease, transform 0.3s ease;
          }

          .sp2-atelier-content-pane.fade {
            opacity: 0;
            transform: translateY(8px);
          }

          .sp2-atelier-content-pane.show {
            opacity: 1;
            transform: translateY(0);
          }

          .sp2-atelier-visual-col {
            position: relative;
            width: 100%;
            height: 180px;
            border-radius: 14px;
            border: 1px solid rgba(19, 56, 37, 0.12);
            background: rgba(255, 255, 255, 0.9);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
            box-sizing: border-box;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.02);
          }

          .sp2-atelier-visual-bg {
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(19, 56, 37, 0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(19, 56, 37, 0.015) 1px, transparent 1px);
            background-size: 20px 20px;
            opacity: 0.8;
          }

          .sp2-atelier-img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            opacity: 0.95;
          }

          .sp2-atelier-details-col {
            display: flex;
            flex-direction: column;
          }

          .sp2-atelier-num-marker {
            font-family: var(--font-sans);
            font-size: 9px;
            font-weight: 600;
            color: var(--color-primary);
            letter-spacing: 0.15em;
            margin-bottom: 8px;
            text-transform: uppercase;
          }

          .sp2-atelier-spec-title {
            font-family: var(--font-heading);
            font-size: 20px;
            font-weight: 500;
            color: #1a1d24;
            margin: 0 0 16px 0;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            border-left: 2px solid var(--color-primary);
            padding-left: 10px;
          }

          .sp2-atelier-bullets {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .sp2-atelier-bullet-text {
            font-family: var(--font-sans);
            font-size: 13.5px;
            line-height: 1.7;
            color: #5a6373;
            margin: 0;
          }

          /* Footer Controls */
          .sp2-atelier-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px 24px;
            border-top: 1px solid rgba(19, 56, 37, 0.12);
            background: rgba(19, 56, 37, 0.02);
          }

          .sp2-atelier-footer-btn {
            background: none;
            border: none;
            display: flex;
            align-items: center;
            gap: 6px;
            color: var(--color-primary);
            font-family: var(--font-sans);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.1em;
            cursor: pointer;
            padding: 8px 12px;
            border-radius: 6px;
            transition: all 0.2s ease;
          }

          .sp2-atelier-footer-btn:active {
            background: rgba(19, 56, 37, 0.08);
          }

          .sp2-atelier-dots {
            display: flex;
            gap: 4px;
            max-width: 140px;
            overflow: hidden;
            justify-content: center;
            align-items: center;
          }

          .sp2-atelier-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: rgba(19, 56, 37, 0.2);
            border: none;
            padding: 0;
            cursor: pointer;
            transition: all 0.25s ease;
          }

          .sp2-atelier-dot.active {
            background: var(--color-primary);
            transform: scale(1.4);
          }
        }

        @media (max-width: 600px) {
          .sp2-mobile-preview-card {
            padding: 0 16px;
          }
          
          .sp2-title {
            font-size: 28px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}
