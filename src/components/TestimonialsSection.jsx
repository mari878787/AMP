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
                {/* Left: portrait photo */}
                <div className="tcs-photo-col">
                  <img
                    src={t.photo}
                    alt={isActive ? `${t.name} — client testimonial` : ''}
                    className="tcs-photo"
                    draggable="false"
                  />
                </div>

                {/* Right: quote content */}
                <div className="tcs-body">
                  <div className="tcs-quote-mark" aria-hidden="true">"</div>
                  <blockquote className="tcs-quote">{t.quote}</blockquote>
                  <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-text-muted)', margin: '24px 0 16px' }} />
                  <p className="tcs-name">{t.name}</p>
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
          --card-w:      820px;
          --gap:          32px;
          /* left offset so the active card is centred */
          --card-offset: calc(50% - var(--card-w) / 2);

          background: var(--color-white);
          padding: var(--space-8) 0;
          overflow: hidden;
        }

        /* â”€â”€ Header â”€â”€ */
        .tcs-header {
          text-align: center;
          margin-bottom: var(--space-4);
          padding: 0 24px;
        }

        .tcs-subtitle {
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        /* â”€â”€ Viewport â”€â”€ */
        .tcs-viewport {
          width: 100%;
          overflow: hidden;
          cursor: grab;
          user-select: none;
          padding: 20px 0 32px;
        }
        .tcs-viewport:active { cursor: grabbing; }

        /* â”€â”€ Track â”€â”€ */
        .tcs-track {
          display: flex;
          gap: var(--gap);
          will-change: transform;
        }

        /* â”€â”€ Card â”€â”€ */
        .tcs-card {
          flex: 0 0 var(--card-w);
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.8);
          min-height: 400px;
          opacity: 0.5;
          transform: scale(0.92);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .tcs-card.active {
          opacity: 1;
          transform: scale(1);
          background: rgba(255, 255, 255, 0.7);
          cursor: default;
          border: 1px solid #eaebecff;
        }

        /* â”€â”€ Photo column â”€â”€ */
        .tcs-photo-col {
          flex: 0 0 360px;
          overflow: hidden;
          background: var(--color-border-light);
        }
        .tcs-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          pointer-events: none;
        }

        /* â”€â”€ Body â”€â”€ */
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
          color: #3b71b8;
          opacity: 0.7;
          height: 30px;
          overflow: hidden;
        }
        .tcs-quote {
          font-style: normal;
          line-height: 1.75;
          margin: 0;
          max-width: 520px;
        }
        .tcs-name {

          font-size: 13px;
          font-weight: 400;
          color: var(--color-text-dark);

          margin-top: 4px;
        }

        /* â”€â”€ Dots â”€â”€ */
        .tcs-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }


        /* â”€â”€ Responsive â”€â”€ */
        @media (max-width: 1024px) {
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
