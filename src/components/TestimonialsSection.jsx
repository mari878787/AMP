import React, { useState, useEffect, useRef, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

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
  const [isHovered, setIsHovered] = useState(false);
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

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [goNext, isHovered]);

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
    <section 
      className="tcs-section" 
      id="testimonials"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* â”€â”€ Header â”€â”€ */}
      <div className="tcs-header">
        <ScrollReveal animation="fadeUp" delay={0.05}>
          <h2 className="section-title">Stories built on trust</h2>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <p className="tcs-subtitle">
            Discover homes and investment opportunities tailored to you.<br className="desktop-only-br" />
            With our trusted expertise and local knowledge.
          </p>
        </ScrollReveal>
      </div>

      {/* â”€â”€ Viewport â”€â”€ */}
      <ScrollReveal
        className="tcs-viewport"
        animation="fadeUp"
        delay={0.35}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={() => { dragRef.current = null; }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        as="div"
      >
        <div
          ref={trackRef}
          className="tcs-track"
          style={{
            transform: `translateX(calc(var(--card-offset) - ${idx} * (var(--card-w) + var(--gap))))`,
            transition: anim ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none' }}
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
                {/* Quote content */}
                <div className="tcs-body">
                  <div className="tcs-quote-mark" aria-hidden="true">“</div>
                  <blockquote className="tcs-quote">{t.quote}</blockquote>
                  <div className="tcs-divider" />
                  <p className="tcs-name">{t.name}</p>
                  <span className="tcs-verified">Verified Homeowner</span>
                </div>
              </article>
            );
          })}
        </div>
      </ScrollReveal>

      <div className="tcs-dots" role="tablist" aria-label="Testimonial navigation">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === dotIdx}
            className={`slider-dot ${i === dotIdx ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        /* CSS vars for card size – easy to tweak */
        .tcs-section {
          --card-w:      680px;
          --gap:          28px;
          /* left offset so the active card is centred */
          --card-offset: calc(50% - var(--card-w) / 2);

          background: var(--color-bg-light, #FAF8F5);
          padding: 90px 0;
          overflow: hidden;
        }

        /* ── Header ── */
        .tcs-header {
          text-align: center;
          padding: 0 24px;
          margin-bottom: 20px;
        }

        .tcs-subtitle {
          text-align: center;
          color: #666666;
          font-family: var(--font-sans);
          font-size: 15px;
          margin-top: 10px;
        }

        /* ── Viewport ── */
        .tcs-viewport {
          width: 100%;
          overflow: hidden;
          cursor: grab;
          user-select: none;
          padding: 24px 0 36px;
        }
        .tcs-viewport:active { cursor: grabbing; }

        /* ── Track ── */
        .tcs-track {
          display: flex;
          gap: var(--gap);
          will-change: transform;
        }

        /* ── Card (Text-Only Luxury Card) ── */
        .tcs-card {
          flex: 0 0 var(--card-w);
          background: #ffffff;
          border: 1px solid rgba(180, 133, 100, 0.15);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          opacity: 0.45;
          transform: scale(0.94);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .tcs-card.active {
          opacity: 1;
          transform: scale(1);
          background: #ffffff;
          cursor: default;
          border: 1px solid rgba(180, 133, 100, 0.35);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        /* ── Body (Clean Centered Typography) ── */
        .tcs-body {
          width: 100%;
          padding: 56px 60px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          background: #ffffff;
        }

        .tcs-quote-mark {
          font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
          font-size: 64px;
          line-height: 0.6;
          color: #b48564;
          opacity: 0.9;
          margin-bottom: 20px;
          user-select: none;
        }

        .tcs-quote {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-style: italic;
          font-weight: 400;
          line-height: 1.7;
          margin: 0;
          max-width: 560px;
          color: #222222;
          font-size: clamp(16px, 1.3vw, 19px);
          text-align: center;
        }

        .tcs-divider {
          width: 44px;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, #b48564, transparent);
          margin: 28px 0 16px;
        }

        .tcs-name {
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 600;
          color: #111111;
          margin: 0 0 4px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .tcs-verified {
          font-family: var(--font-sans);
          font-size: 11.5px;
          color: #888888;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* ── Dots ── */
        .tcs-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        /* ── Responsive ── */
        @media (max-width: 820px) {
          .tcs-section {
            --card-w: calc(100vw - 80px);
            padding: 70px 0;
          }
          .tcs-body {
            padding: 44px 32px 36px;
          }
        }
        @media (max-width: 600px) {
          .tcs-section {
            --card-w: calc(100vw - 40px);
            padding: 55px 0 40px;
          }
          .tcs-body {
            padding: 36px 20px 28px;
          }
          .tcs-quote {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
