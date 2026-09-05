import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

const ALL_PROJECTS = [
  {
    id: 1,
    category: 'Villa',
    title: 'Crystal Moonlight',
    location: 'Medavakkam, Chennai',
    area: '2,233 - 2,287 Sq.Ft.',
    image: '/images/project_crystal_1779810838661.png',
    link: '/crystal-moonlight-villa',
    centerInfo: '3 BHK & 4 BHK'
  },
  {
    id: 2,
    category: 'Villa',
    title: 'Bay Vista',
    location: 'ECR, Chennai',
    area: '3,000 - 4,500 Sq.Ft.',
    image: '/images/home/project-image-2.png',
    link: '/crystal-moonlight-villa',
    centerInfo: 'Bespoke Villas'
  },
  {
    id: 3,
    category: 'Apartment',
    title: 'Pasha Pinnacle',
    location: 'Royapettah, Chennai',
    area: '1,500 - 2,400 Sq.Ft.',
    image: '/images/project_crystal_1779810838661.png',
    link: '/pasha-pinnacle',
    centerInfo: 'Boutique Apartments'
  },
  {
    id: 4,
    category: 'Plots',
    title: 'Ashok Nagar',
    location: 'Maduranthakam, Chennai',
    area: '1,200 - 2,400 Sq.Ft.',
    image: '/images/home/project-image-2.png',
    link: '/ashok-nagar-villa-plots-in-maduranthakam',
    centerInfo: 'Villa Plots'
  },
  {
    id: 5,
    category: 'Plots',
    title: 'CMR Global City',
    location: 'Maduranthakam, Chennai',
    area: '800 - 2,000 Sq.Ft.',
    image: '/images/home/project-image-1.png',
    link: '/ashok-nagar-villa-plots-in-maduranthakam',
    centerInfo: 'Gated Plots'
  },
  {
    id: 6,
    category: 'Plots',
    title: 'Guberalakshmi Nagar',
    location: 'Chennai',
    area: '600 - 1,800 Sq.Ft.',
    image: '/images/home/project-image-1.png',
    link: '/ashok-nagar-villa-plots-in-maduranthakam',
    centerInfo: 'Residential Plots'
  }
];

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('All');
  
  const filtered = activeTab === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeTab);

  const total = filtered.length;
  // Clone last slide at beginning, and first slide at end for seamless looping preview
  const extended = total > 1
    ? [filtered[total - 1], ...filtered, filtered[0]]
    : filtered;

  const [idx, setIdx] = useState(1);
  const [anim, setAnim] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timer = useRef(null);
  
  // drag state
  const dragStart = useRef(null);
  const dragging = useRef(false);

  // Reset index when active category tab changes
  useEffect(() => {
    setIdx(total > 1 ? 1 : 0);
    setAnim(true);
  }, [activeTab, total]);

  // Real index in the original list
  const realActiveIdx = total > 1
    ? (idx <= 0 ? total - 1 : idx >= total + 1 ? 0 : idx - 1)
    : 0;

  // Silent snap-back logic
  useEffect(() => {
    if (total <= 1) return;
    clearTimeout(timer.current);
    if (idx === total + 1) {
      timer.current = setTimeout(() => {
        setAnim(false);
        setIdx(1);
      }, 500);
    } else if (idx === 0) {
      timer.current = setTimeout(() => {
        setAnim(false);
        setIdx(total);
      }, 500);
    }
    return () => clearTimeout(timer.current);
  }, [idx, total]);

  // Restore animation after silent snap
  useEffect(() => {
    if (!anim) {
      const t = requestAnimationFrame(() => setAnim(true));
      return () => cancelAnimationFrame(t);
    }
  }, [anim]);

  const prev = useCallback(() => {
    if (total <= 1) return;
    setAnim(true);
    setIdx(i => i - 1);
  }, [total]);

  const next = useCallback(() => {
    if (total <= 1) return;
    setAnim(true);
    setIdx(i => i + 1);
  }, [total]);

  const goTo = useCallback((targetRealIdx) => {
    if (total <= 1) return;
    setAnim(true);
    setIdx(targetRealIdx + 1);
  }, [total]);

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  // Autoplay
  useEffect(() => {
    if (total <= 1 || isHovered) return;
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [next, total, isHovered]);

  /* â”€â”€ drag / swipe â”€â”€ */
  const onMouseDown = (e) => { dragStart.current = e.clientX; dragging.current = false; };
  const onMouseMove = (e) => {
    if (dragStart.current !== null && Math.abs(e.clientX - dragStart.current) > 5) dragging.current = true;
  };
  const onMouseUp = (e) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStart.current = null;
  };
  const onTouchStart = (e) => { dragStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    dragStart.current = null;
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        {/* â”€â”€ Header â”€â”€ */}
        <div className="projects-header">
          <ScrollReveal className="projects-header-left" animation="fadeUp" delay={0.05}>
            <h2 className="section-title">
              Architecture beyond time
            </h2>
          </ScrollReveal>

          <ScrollReveal className="projects-header-right" animation="fadeUp" delay={0.35}>
            <div className="filter-tabs">
              {['All', 'Villa', 'Apartment', 'Plots'].map(tab => (
                <button
                  key={tab}
                  className={`filter-tab-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => handleTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* â”€â”€ Slider viewport wrapper (Full Bleed) â”€â”€ */}
      <div className="slider-viewport-wrapper">
        
        {/* Absolute Left/Right Arrow Buttons */}
        <button
          className="projects-slide-arrow prev"
          onClick={prev}
          disabled={total <= 1}
          aria-label="Previous projects"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="projects-slide-arrow next"
          onClick={next}
          disabled={total <= 1}
          aria-label="Next projects"
        >
          <ChevronRight size={24} />
        </button>

        <ScrollReveal animation="fadeUp" delay={0.5} duration={0.9}>
          <div
            className="slider-viewport"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={(e) => {
              onMouseUp(e);
              setIsHovered(false);
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="slider-track"
              style={{ 
                transform: total > 1
                  ? `translateX(calc(var(--card-offset) - ${idx} * (var(--card-w) + var(--gap))))` 
                  : `translateX(var(--card-offset))`,
                transition: anim ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
              }}
            >
              {extended.map((project, i) => {
                const isActive = total > 1 ? (i === idx) : true;
                return (
                  <a
                    key={`${project.id}-${i}`}
                    href={project.link || "#contact"}
                    className={`project-card ${isActive ? 'active' : ''}`}
                    onClick={e => dragging.current && e.preventDefault()}
                  >
                    <div className="project-img-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                        draggable="false"
                      />
                      <span className="project-category-badge">{project.category}</span>
                      <div className="project-overlay">
                        <div className="project-overlay-details">
                          <span className="overlay-title">{project.title}</span>
                          <span className="overlay-center-info">{project.centerInfo}</span>
                          <span className="overlay-location">{project.location}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="container">
        {/* â”€â”€ Dots + CTA row â”€â”€ */}
        <div className="slider-bottom-row">
          {/* Dot indicators */}
          <div className="slider-dots">
            {filtered.map((_, i) => (
              <button
                key={i}
                className={`slider-dot ${i === realActiveIdx ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .projects-section {
          --card-active-w: 85vw;
          --card-w: 65vw;
          --gap: 3vw;
          --card-offset: calc(50vw - var(--card-active-w) / 2);

          background-color: var(--color-white);
          padding: 42px 0 18px 0;
          overflow: hidden;
          box-sizing: border-box;
          gap: 10px;
          min-height: calc(100vh - 60px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .slider-viewport-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 6px 0 8px;
          flex-grow: 1;
          display: flex;
          align-items: center;
        }

        .slider-viewport {
          width: 100%;
          overflow: visible;
        }

        .slider-track {
          display: flex;
          align-items: center;
          gap: var(--gap);
          will-change: transform;
        }

        /* ── Card ── */
        .project-card {
          flex: 0 0 var(--card-w);
          min-width: 0;
          display: block;
          text-decoration: none;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card.active {
          flex: 0 0 var(--card-active-w);
        }

        .project-img-wrap {
          position: relative;
          width: 100%;
          height: calc(100vh - 165px);
          max-height: 720px;
          min-height: 360px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
        }
        .project-card.active:hover .project-img { transform: scale(1.2); }

        .project-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 30px 24px 24px;
          z-index: 2;
          transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-category-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 3;
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          color: var(--color-white);
          padding: 4px 12px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.25);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-overlay-details {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          width: 100%;
          gap: 16px;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .overlay-title {
          font-family: var(--font-heading);
          font-weight: 300;
          font-size: 32px;
          color: var(--color-white);
          line-height: 1.2;
          // text-transform: uppercase;
          letter-spacing: -0.01em;
          text-align: left;
        }

        .overlay-center-info {
          color: #fff;
          font-family: var(--font-sans);
          font-size: 20px;
          letter-spacing: 0m;
          text-transform: uppercase;
          text-align: center;
        }

        .overlay-location {
          color: rgba(255, 255, 255, 0.85);
          font-family: var(--font-sans);
          font-size: 20px;
          letter-spacing: 0em;
          text-align: right;
        }

        /* â”€â”€ Header â”€â”€ */
        .projects-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 5px;
        }

        .projects-header-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .projects-header-right {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .projects-subtitle {
          color: var(--color-text-muted);
          line-height: 1.6;
          max-width: 680px;
          margin: 16px auto 0;
          text-align: center;
        }

        /* â”€â”€ Absolute Slider Arrow buttons â”€â”€ */
        .projects-slide-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-white);
          border: 1px solid rgba(0,0,0,0.06);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .projects-slide-arrow:hover:not(:disabled) {
          background: var(--color-primary);
          color: var(--color-white);
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
        }

        .projects-slide-arrow:disabled {
          border-color: rgba(6, 11, 29, 0.04);
          background: rgba(255, 255, 255, 0.3);
          color: rgba(6, 11, 29, 0.2);
          cursor: not-allowed;
        }

        .projects-slide-arrow.prev {
          left: 4vw;
        }

        .projects-slide-arrow.next {
          right: 4vw;
        }

        @media (max-width: 768px) {
          .projects-slide-arrow {
            width: 40px;
            height: 40px;
          }
          .projects-slide-arrow.prev {
            left: 12px;
          }
          .projects-slide-arrow.next {
            right: 12px;
          }
        }

        /* Hover transitions on devices that support hover */
        @media (hover: hover) {
          .project-overlay {
            opacity: 0;
          }
          .project-category-badge {
            transform: translateY(-10px);
          }
          .project-overlay-details {
            transform: translateY(10px);
          }
          .project-card.active:hover .project-overlay {
            opacity: 1;
          }
          .project-card.active:hover .project-category-badge {
            transform: translateY(0);
          }
          .project-card.active:hover .project-overlay-details {
            transform: translateY(0);
          }
        }

        /* ── Bottom row ── */
        .slider-bottom-row {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 6px;
          margin-bottom: 4px;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* ── Dots ── */
        .slider-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .projects-section {
            --card-active-w: 82vw;
            --card-w: 64vw;
            --gap: 3vw;
          }
          .project-img-wrap {
            height: calc(100dvh - 150px) !important;
            max-height: 640px !important;
            min-height: 300px !important;
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            --card-active-w: 88vw;
            --card-w: 70vw;
            --gap: 4vw;
            padding: 38px 0 4px 0;
          }

          .projects-header {
            display: flex;
            flex-direction: column;
          }
          .projects-header-left {
            order: 1;
          }
          .projects-subtitle {
            order: 2;
            margin-bottom: 8px;
          }
          .projects-header-right {
            order: 3;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .projects-tabs {
            flex-wrap: wrap;
            width: 100%;
          }
          
          .slider-bottom-row {
            flex-direction: column;
            gap: 24px;
            align-items: stretch;
          }
          .slider-dots {
            justify-content: center;
          }

          .project-overlay-details {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          .overlay-title {
            max-width: 100%;
            font-size: 16px !important;
          }
          .overlay-location {
            font-size: 11px !important;
          }
        }
      `}</style>
    </section>
  );
}
