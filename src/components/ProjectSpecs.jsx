import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function ProjectSpecs({
  specs = [],
  title = "PROJECT",
  highlightTitle = "SPECIFICATIONS",
  subtitle = "PROJECT DETAILS"
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const listRef = useRef(null);

  // Only hide arrow when truly scrolled to absolute bottom
  const checkScroll = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const remaining = el.scrollHeight - el.scrollTop - el.clientHeight;
    setShowScrollHint(remaining > 2);
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const timer = setTimeout(checkScroll, 200);
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timer);
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scrollListDown = () => {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ top: 150, behavior: 'smooth' });
  };

  const switchSpec = (index) => {
    if (index === activeIdx) return;
    setFading(true);
    setTimeout(() => {
      setActiveIdx(index);
      setFading(false);
    }, 250);
  };

  const goNext = () => { if (activeIdx < specs.length - 1) switchSpec(activeIdx + 1); };
  const goPrev = () => { if (activeIdx > 0) switchSpec(activeIdx - 1); };

  if (!specs || specs.length === 0) return null;

  const spec = specs[activeIdx];
  const progress = ((activeIdx + 1) / specs.length) * 100;

  return (
    <section className="sp-section" id="specifications">

      {/* Compact inline header */}
      <div className="sp-topbar">
        <div className="sp-topbar-left">
          <span className="sp-topbar-diamond">◆</span>
          <span className="sp-topbar-label">{subtitle}</span>
          <div className="sp-topbar-line"></div>
        </div>
        <h2 className="sp-topbar-title">
          {title} <span className="sp-topbar-gold">{highlightTitle}</span>
        </h2>
      </div>

      {/* Main explorer layout */}
      <div className="sp-explorer">

        {/* LEFT: Vertical spec list */}
        <div className="sp-list">
          <div className="sp-list-scroll" ref={listRef}>
            {specs.map((s, i) => (
              <button
                key={s.id || i}
                className={`sp-list-item ${i === activeIdx ? 'active' : ''}`}
                onClick={() => switchSpec(i)}
              >
                <span className="sp-list-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="sp-list-name">{s.label}</span>
                <span className="sp-list-arrow">→</span>
              </button>
            ))}
          </div>
          {/* Scroll overlay + arrow */}
          <div className={`sp-list-fade ${showScrollHint ? 'visible' : 'hidden'}`}>
            <button className="sp-list-scroll-btn" onClick={scrollListDown} aria-label="Scroll for more specifications">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT: Detail panel */}
        <div className="sp-detail">
          {/* Top/Header bar: progress + arrows */}
          <div className="sp-detail-bottom">
            <div className="sp-prog">
              <div className="sp-prog-bar">
                <div className="sp-prog-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="sp-prog-label">
                <strong>{String(activeIdx + 1).padStart(2, '0')}</strong> / {String(specs.length).padStart(2, '0')}
              </span>
            </div>
            <div className="sp-arrows">
              <button className={`sp-arr ${activeIdx === 0 ? 'off' : ''}`} onClick={goPrev} disabled={activeIdx === 0} aria-label="Previous">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button className={`sp-arr ${activeIdx === specs.length - 1 ? 'off' : ''}`} onClick={goNext} disabled={activeIdx === specs.length - 1} aria-label="Next">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 6 15 12 9 18"/></svg>
              </button>
            </div>
          </div>

          <div className={`sp-detail-inner ${fading ? 'hide' : 'show'}`}>

            {/* Image area */}
            <div className="sp-detail-visual">
              <img
                src={spec.image}
                alt={spec.title}
                className="sp-detail-img"
              />
              <div className="sp-detail-visual-ring" aria-hidden="true"></div>
            </div>

            {/* Info area */}
            <div className="sp-detail-info">
              <div className="sp-detail-badge">
                {spec.index || String(activeIdx + 1).padStart(2, '0')}
              </div>
              <h3 className="sp-detail-title">{spec.title}</h3>
              <div className="sp-detail-sep"></div>
              <div className="sp-detail-points">
                {spec.details && spec.details.map((d, i) => (
                  <div key={i} className="sp-detail-point">
                    <span className="sp-point-mark">—</span>
                    <p className="sp-point-text">{d}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        /* ══════════════════════════════════════════════
           SPECS — FULL VIEWPORT ATELIER EXPLORER
           ══════════════════════════════════════════════ */

        .sp-section {
          background-color: #fdfcfa;
          background-image:
            radial-gradient(ellipse 50% 40% at 85% 70%, rgba(186, 148, 76, 0.045) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 10% 20%, rgba(186, 148, 76, 0.025) 0%, transparent 60%);
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(186, 148, 76, 0.08);
        }

        /* ── COMPACT TOP BAR ── */
        .sp-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 40px;
          border-bottom: 1px solid rgba(186, 148, 76, 0.1);
          flex-shrink: 0;
          background: linear-gradient(90deg, rgba(186, 148, 76, 0.02) 0%, transparent 50%, rgba(186, 148, 76, 0.02) 100%);
        }

        .sp-topbar-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sp-topbar-diamond {
          font-size: 6px;
          color: #ba944c;
          opacity: 0.6;
        }

        .sp-topbar-label {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.28em;
          color: #ba944c;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .sp-topbar-line {
          width: 40px;
          height: 1px;
          background: rgba(6, 11, 29, 0.08);
          flex-shrink: 0;
        }

        .sp-topbar-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: #1c222f;
          margin: 0;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .sp-topbar-gold {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-weight: 500;
          color: #ba944c;
          font-style: italic;
          letter-spacing: 0.02em;
        }

        /* ── EXPLORER LAYOUT ── */
        .sp-explorer {
          flex: 1;
          display: grid;
          grid-template-columns: 340px 1fr;
          min-height: 0; /* critical for flex child */
        }

        /* ── LEFT LIST ── */
        .sp-list {
          border-right: 1px solid rgba(186, 148, 76, 0.08);
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, rgba(186, 148, 76, 0.018) 0%, rgba(186, 148, 76, 0.035) 100%);
          position: relative;
        }

        /* ── SCROLL OVERLAY + ARROW ── */
        .sp-list-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(
            to bottom,
            rgba(251, 248, 240, 0) 0%,
            rgba(250, 246, 236, 0.6) 25%,
            rgba(248, 243, 230, 0.88) 50%,
            rgba(247, 241, 226, 0.96) 75%,
            #f6f0e2 100%
          );
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 14px;
          pointer-events: none;
          transition: opacity 0.35s ease;
          z-index: 5;
          border-top: 1px solid rgba(186, 148, 76, 0.06);
        }

        .sp-list-fade.visible {
          opacity: 1;
        }

        .sp-list-fade.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .sp-list-scroll-btn {
          pointer-events: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(186, 148, 76, 0.35);
          background: rgba(255, 255, 255, 0.65);
          color: #ba944c;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(186, 148, 76, 0.12), 0 1px 4px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          animation: sp-bounce 2s infinite ease-in-out;
        }

        .sp-list-scroll-btn:hover {
          border-color: #ba944c;
          background: rgba(186, 148, 76, 0.12);
          transform: scale(1.1);
          animation: none;
          box-shadow: 0 6px 25px rgba(186, 148, 76, 0.18);
        }

        @keyframes sp-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }

        .sp-list-scroll {
          flex: 1;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(186, 148, 76, 0.2) transparent;
          padding-bottom: 50px;
        }

        .sp-list-scroll::-webkit-scrollbar {
          width: 3px;
        }
        .sp-list-scroll::-webkit-scrollbar-thumb {
          background: rgba(186, 148, 76, 0.2);
          border-radius: 3px;
        }

        .sp-list-item {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 20px 10px 24px;
          border: none;
          border-bottom: 1px solid rgba(186, 148, 76, 0.05);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          text-align: left;
          position: relative;
        }

        .sp-list-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #ba944c;
          transform: scaleY(0);
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .sp-list-item:hover {
          background: rgba(186, 148, 76, 0.06);
        }

        .sp-list-item.active {
          background: rgba(186, 148, 76, 0.09);
        }

        .sp-list-item.active::before {
          transform: scaleY(1);
        }

        .sp-list-num {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(186, 148, 76, 0.35);
          flex-shrink: 0;
          min-width: 18px;
          transition: color 0.3s ease;
        }

        .sp-list-item.active .sp-list-num {
          color: #ba944c;
        }

        .sp-list-name {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: #64748b;
          flex: 1;
          transition: color 0.3s ease;
        }

        .sp-list-item:hover .sp-list-name {
          color: #334155;
        }

        .sp-list-item.active .sp-list-name {
          color: #1c222f;
          font-weight: 600;
        }

        .sp-list-arrow {
          font-size: 12px;
          color: transparent;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .sp-list-item.active .sp-list-arrow {
          color: #ba944c;
        }

        /* ── RIGHT DETAIL ── */
        .sp-detail {
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .sp-detail-inner {
          flex: 1;
          display: grid;
          grid-template-columns: 0.42fr 0.58fr;
          min-height: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .sp-detail-inner.hide {
          opacity: 0;
          transform: translateY(6px);
        }
        .sp-detail-inner.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* Visual */
        .sp-detail-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 24px;
          position: relative;
          border-right: 1px solid rgba(186, 148, 76, 0.06);
          background: linear-gradient(135deg, rgba(186, 148, 76, 0.02) 0%, rgba(252, 237, 211, 0.04) 50%, transparent 100%);
        }

        .sp-detail-visual-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 1px solid rgba(186, 148, 76, 0.08);
          pointer-events: none;
          box-shadow: 0 0 60px rgba(186, 148, 76, 0.04);
        }

        .sp-detail-visual::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 280px;
          height: 280px;
          border-radius: 50%;
          border: 1px dashed rgba(186, 148, 76, 0.05);
          pointer-events: none;
        }

        .sp-detail-img {
          max-width: 95%;
          max-height: 340px;
          height: auto;
          display: block;
          object-fit: contain;
          position: relative;
          z-index: 1;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .sp-detail-inner:hover .sp-detail-img {
          transform: scale(1.03);
        }

        /* Info */
        .sp-detail-info {
          padding: 28px 36px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow-y: auto;
        }

        .sp-detail-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border: 1px solid rgba(186, 148, 76, 0.25);
          border-radius: 50%;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          color: #ba944c;
          letter-spacing: 0.05em;
          margin-bottom: 14px;
        }

        .sp-detail-title {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: 0.06em;
          color: #1a1d24;
          margin: 0 0 12px 0;
          text-transform: uppercase;
        }

        .sp-detail-sep {
          width: 36px;
          height: 2px;
          background: linear-gradient(90deg, #ba944c, rgba(186, 148, 76, 0.2));
          margin-bottom: 16px;
        }

        .sp-detail-points {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sp-detail-point {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .sp-point-mark {
          font-size: 11px;
          color: rgba(186, 148, 76, 0.5);
          margin-top: 5px;
          flex-shrink: 0;
        }

        .sp-point-text {
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.7;
          color: #5a6373;
          margin: 0;
          letter-spacing: 0.01em;
        }

        /* ── BOTTOM BAR (NOW TOP) ── */
        .sp-detail-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 36px;
          border-bottom: 1px solid rgba(186, 148, 76, 0.08);
          flex-shrink: 0;
          background: linear-gradient(90deg, rgba(186, 148, 76, 0.015), rgba(186, 148, 76, 0.025), rgba(186, 148, 76, 0.015));
        }

        .sp-prog {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .sp-prog-bar {
          width: 200px;
          height: 2px;
          background: rgba(6, 11, 29, 0.06);
          border-radius: 2px;
          overflow: hidden;
        }

        .sp-prog-fill {
          height: 100%;
          background: linear-gradient(90deg, #ba944c, #d4b66a);
          border-radius: 2px;
          transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .sp-prog-label {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #94a3b8;
        }

        .sp-prog-label strong {
          color: #ba944c;
          font-weight: 600;
        }

        .sp-arrows {
          display: flex;
          gap: 6px;
        }

        .sp-arr {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(186, 148, 76, 0.25);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          color: #ba944c;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sp-arr:hover:not(.off) {
          border-color: #ba944c;
          background: rgba(186, 148, 76, 0.08);
          color: #ba944c;
          transform: translateY(-1px) scale(1.05);
          box-shadow: 0 4px 15px rgba(186, 148, 76, 0.12);
        }

        .sp-arr.off {
          opacity: 0.25;
          cursor: not-allowed;
        }

        /* ══════ RESPONSIVE ══════ */

        @media (max-width: 1100px) {
          .sp-explorer {
            grid-template-columns: 280px 1fr;
          }
          .sp-list-item {
            padding: 12px 20px 12px 24px;
          }
          .sp-detail-info {
            padding: 36px 32px 28px;
          }
          .sp-detail-visual {
            padding: 32px 24px;
          }
        }

        @media (max-width: 900px) {
          .sp-section {
            height: auto;
            min-height: auto;
            max-height: none;
          }

          .sp-topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding: 20px 24px;
          }

          .sp-explorer {
            grid-template-columns: 1fr;
          }

          /* List becomes horizontal scrollable chips */
          .sp-list {
            border-right: none;
            border-bottom: 1px solid rgba(6, 11, 29, 0.05);
          }

          .sp-list-scroll {
            display: flex;
            flex-wrap: wrap;
            overflow-y: visible;
            padding: 16px 24px;
            gap: 6px;
          }

          .sp-list-item {
            width: auto;
            padding: 8px 16px;
            border: 1px solid rgba(6, 11, 29, 0.06);
            border-radius: 100px;
            gap: 8px;
            border-bottom: 1px solid rgba(6, 11, 29, 0.06);
          }

          .sp-list-item::before {
            display: none;
          }

          .sp-list-item.active {
            background: rgba(186, 148, 76, 0.08);
            border-color: rgba(186, 148, 76, 0.2);
          }

          .sp-list-arrow {
            display: none;
          }

          .sp-list-name {
            font-size: 11px;
          }

          .sp-detail-inner {
            grid-template-columns: 1fr;
          }

          .sp-detail-visual {
            border-right: none;
            border-bottom: 1px solid rgba(6, 11, 29, 0.04);
            min-height: 220px;
          }

          .sp-detail-info {
            padding: 28px 24px 20px;
          }

          .sp-detail-bottom {
            padding: 14px 24px;
          }

          .sp-prog-bar {
            width: 140px;
          }
        }

        @media (max-width: 600px) {
          .sp-topbar {
            padding: 16px 16px;
          }
          .sp-topbar-title {
            font-size: 15px;
          }
          .sp-list-scroll {
            padding: 12px 16px;
          }
          .sp-list-item {
            padding: 6px 12px;
          }
          .sp-list-name {
            font-size: 10px;
          }
          .sp-list-num {
            font-size: 9px;
          }
          .sp-detail-visual {
            padding: 24px 16px;
            min-height: 180px;
          }
          .sp-detail-img {
            max-height: 160px;
          }
          .sp-detail-info {
            padding: 24px 16px 16px;
          }
          .sp-detail-title {
            font-size: 20px;
          }
          .sp-point-text {
            font-size: 13px;
          }
          .sp-detail-bottom {
            padding: 12px 16px;
            flex-wrap: wrap;
            gap: 10px;
          }
          .sp-prog-bar {
            width: 100px;
          }
        }
      `}</style>
    </section>
  );
}
