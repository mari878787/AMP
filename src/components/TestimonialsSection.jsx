import React, { useState, useEffect, useRef, useCallback } from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    photo: '/images/testimonial_woman.png',
    quote: "Buying a home felt like a big step, but Aadhithiya Mohan made it easy and enjoyable. They understood exactly what I was looking for and found the perfect home within my budget.",
    name: "Kaviya Maaran",
  },
  {
    id: 2,
    photo: '/images/testimonial_man.png',
    quote: "The professionalism and quality of work delivered by the AMP team was exceptional. Every milestone was met on time and the craftsmanship is truly outstanding. Highly recommend.",
    name: "Suresh Raghavan",
  },
  {
    id: 3,
    photo: '/images/testimonial_woman.png',
    quote: "From the first consultation to the final handover, the entire team was transparent, reliable and deeply committed. Our new home is everything we dreamed of and more.",
    name: "Anitha Krishnan",
  },
];

const TOTAL = TESTIMONIALS.length;
// Clone track: [last, ...all, first]
const extended = [TESTIMONIALS[TOTAL - 1], ...TESTIMONIALS, TESTIMONIALS[0]];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(1);   // 1 = first real card
  const [anim, setAnim] = useState(true);
  const timer = useRef(null);
  const dragRef = useRef(null);
  const trackRef = useRef(null);

  // Real dot index (0-based)
  const dotIdx = idx <= 0 ? TOTAL - 1 : idx >= TOTAL + 1 ? 0 : idx - 1;

  /* After landing on a clone, snap silently to the real position */
  useEffect(() => {
    clearTimeout(timer.current);
    if (idx === TOTAL + 1) {
      timer.current = setTimeout(() => { setAnim(false); setIdx(1); }, 500);
    } else if (idx === 0) {
      timer.current = setTimeout(() => { setAnim(false); setIdx(TOTAL); }, 500);
    }
    return () => clearTimeout(timer.current);
  }, [idx]);

  /* Re-enable animation one frame after silent snap */
  useEffect(() => {
    if (!anim) {
      const t = requestAnimationFrame(() => setAnim(true));
      return () => cancelAnimationFrame(t);
    }
  }, [anim]);

  const goNext = useCallback(() => { setAnim(true); setIdx(i => i + 1); }, []);
  const goPrev = useCallback(() => { setAnim(true); setIdx(i => i - 1); }, []);
  const goTo = useCallback((d) => { setAnim(true); setIdx(d + 1); }, []);

  /* Drag / swipe */
  const onMouseDown = (e) => { dragRef.current = e.clientX; };
  const onMouseUp = (e) => {
    if (!dragRef.current) return;
    const d = dragRef.current - e.clientX;
    if (Math.abs(d) > 50) d > 0 ? goNext() : goPrev();
    dragRef.current = null;
  };
  const onTouchStart = (e) => { dragRef.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (!dragRef.current) return;
    const d = dragRef.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 40) d > 0 ? goNext() : goPrev();
    dragRef.current = null;
  };

  return (
    <section className="tcs-section" id="testimonials">

      {/* ── Header ── */}
      <div className="tcs-header">
        <h2 className="tcs-title">Client Testimonials</h2>
        <p className="tcs-subtitle">
          Discover homes and investment opportunities tailored to you.<br />
          With our trusted expertise and local knowledge.
        </p>
      </div>

      {/* ── Viewport ── */}
      <div
        className="tcs-viewport"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={() => { dragRef.current = null; }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="tcs-track"
          style={{
            transform: `translateX(calc(var(--card-offset) - ${idx} * (var(--card-w) + var(--gap))))`,
            transition: anim ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
          }}
        >
          {extended.map((t, i) => {
            const isActive = i === idx;
            return (
              <article
                key={`${t.id}-${i}`}
                className={`tcs-card ${isActive ? 'active' : ''}`}
                onClick={() => !isActive && (i < idx ? goPrev() : goNext())}
                aria-hidden={!isActive}
              >
                {/* Left: portrait photo */}
                <div className="tcs-photo-col">
                  <img
                    src={t.photo}
                    alt={isActive ? t.name : ''}
                    className="tcs-photo"
                    draggable="false"
                  />
                </div>

                {/* Right: quote content */}
                <div className="tcs-body">
                  <div className="tcs-quote-mark" aria-hidden="true">"</div>
                  <blockquote className="tcs-quote">{t.quote}</blockquote>
                  <p className="tcs-name">{t.name}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ── Dots ── */}
      <div className="tcs-dots" role="tablist">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === dotIdx}
            className={`tcs-dot ${i === dotIdx ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        /* CSS vars for card size – easy to tweak */
        .tcs-section {
          --card-w:      820px;
          --gap:          32px;
          /* left offset so the active card is centred */
          --card-offset: calc(50% - var(--card-w) / 2);

          background: #ffffff;
          padding: 60px 0;
          overflow: hidden;
        }

        /* ── Header ── */
        .tcs-header {
          text-align: center;
          margin-bottom: 32px;
          padding: 0 24px;
        }
        .tcs-title {
          font-family: 'Helvetica World', 'HelveticaWorld', Helvetica, Arial, sans-serif;
          font-size: 32px;
          font-weight: 400;
          color: #0f172a;
          margin-bottom: 14px;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .tcs-subtitle {
          font-family: 'Helvetica Now', 'HelveticaNow', Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #94a3b8;
          line-height: 1.7;
        }

        /* ── Viewport ── */
        .tcs-viewport {
          width: 100%;
          overflow: hidden;
          cursor: grab;
          user-select: none;
          padding: 20px 0 32px;
        }
        .tcs-viewport:active { cursor: grabbing; }

        /* ── Track ── */
        .tcs-track {
          display: flex;
          gap: var(--gap);
          will-change: transform;
        }

        /* ── Card ── */
        .tcs-card {
          flex: 0 0 var(--card-w);
          background: #f8fafc;
          border-radius: 12px;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          min-height: 300px;
          opacity: 0.35;
          transform: scale(0.97);
          transition: opacity 0.45s ease, transform 0.45s ease, box-shadow 0.45s ease;
          cursor: pointer;
        }
        .tcs-card.active {
          opacity: 1;
          transform: scale(1);
          box-shadow: 0 8px 48px rgba(0,0,0,0.10);
          cursor: default;
        }

        /* ── Photo column ── */
        .tcs-photo-col {
          flex: 0 0 260px;
          overflow: hidden;
          background: #dde1e7;
        }
        .tcs-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          pointer-events: none;
        }

        /* ── Body ── */
        .tcs-body {
          flex: 1;
          padding: 40px 44px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }
        .tcs-quote-mark {
          font-family: Georgia, serif;
          font-size: 56px;
          line-height: 0.85;
          color: #94a3b8;
          opacity: 0.6;
          height: 30px;
          overflow: hidden;
        }
        .tcs-quote {
          font-family: 'Helvetica Now', 'HelveticaNow', Helvetica, Arial, sans-serif;
          font-size: 15.5px;
          font-weight: 400;
          font-style: normal;
          color: #334155;
          line-height: 1.75;
          margin: 0;
          max-width: 520px;
        }
        .tcs-name {
          font-family: 'Helvetica Now', 'HelveticaNow', Helvetica, Arial, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: 0.01em;
          margin-top: 4px;
        }

        /* ── Dots ── */
        .tcs-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .tcs-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.25s, width 0.25s, border-radius 0.25s;
        }
        .tcs-dot.active {
          background: #ba944c;
          width: 28px;
          border-radius: 4px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .tcs-title { font-size: 26px; }
          .tcs-section {
            --card-w: 720px;
          }
        }
        @media (max-width: 820px) {
          .tcs-section {
            --card-w: calc(100vw - 120px);
          }
          .tcs-photo-col { flex: 0 0 200px; }
        }
        @media (max-width: 600px) {
          .tcs-title { font-size: 22px; }
          .tcs-section {
            --card-w: calc(100vw - 60px);
            padding: 60px 0 48px;
          }
          .tcs-card { flex-direction: column; min-height: unset; }
          .tcs-photo-col { flex: 0 0 220px; width: 100%; }
          .tcs-body { padding: 28px 24px; }
        }
      `}</style>
    </section>
  );
}
