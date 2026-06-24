import React, { useState, useRef, useCallback, useEffect } from 'react';

const ALL_PROJECTS = [
  {
    id: 1,
    category: 'Residential',
    title: 'Modern Family Villa',
    location: 'ECR, Chennai',
    area: '4,200 Sq.Ft.',
    image: '/images/home/project-image-1.png',
    link: '#',
  },
  {
    id: 2,
    category: 'Plotted',
    title: 'Eco-tech Plotted Estate',
    location: 'OMR, Chennai',
    area: '3,800 Sq.Ft.',
    image: '/images/home/project-image-2.png',
    link: '#',
  },
  {
    id: 3,
    category: 'Residential',
    title: 'Luxury Panorama Villa',
    location: 'Adyar, Chennai',
    area: '5,500 Sq.Ft.',
    image: '/images/villa_exterior_1779810861723.png',
    link: '#',
  },
  {
    id: 4,
    category: 'Residential',
    title: 'Crystal Moonlight Villa',
    location: 'Medavakkam, Chennai',
    area: '2,400 - 4,100 Sq.Ft.',
    image: '/images/project_crystal_1779810838661.png',
    link: '/crystal-moonlight-villa',
  },
];

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const CARDS_VISIBLE = 2; // cards shown at once

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [current, setCurrent] = useState(0);
  // drag state
  const dragStart = useRef(null);
  const dragging = useRef(false);

  const filtered = activeTab === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeTab);

  const maxIndex = Math.max(0, filtered.length - CARDS_VISIBLE);

  const handleTab = (tab) => {
    setActiveTab(prev => (tab === prev ? 'All' : tab));
    setCurrent(0);
  };

  const prev = useCallback(() => {
    setCurrent(c => (c === 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrent(c => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrent(c => (c >= maxIndex ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex, current]);

  /* ── drag / swipe ── */
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

  const totalDots = maxIndex + 1;

  return (
    <section className="projects-section" id="projects">
      <div className="container">

        {/* ── Header ── */}
        <div className="projects-header">
          <div className="projects-title-row">
            <div className="projects-header-left">
              <span className="section-tag">Featured Projects</span>
              <h2 className="projects-main-title">
                Architecture <span className="highlight-italic">beyond time</span>
              </h2>
            </div>
            
            <div className="projects-header-right">
              <div className="projects-tabs">
                {['All', 'Residential', 'Plotted'].map(tab => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => handleTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Arrow controls – right-aligned */}
              <div className="slider-arrows">
                <button
                  className={`arrow-btn ${maxIndex === 0 ? 'disabled' : ''}`}
                  onClick={prev}
                  aria-label="Previous projects"
                  disabled={maxIndex === 0}
                >
                  <ArrowLeft />
                </button>
                <button
                  className={`arrow-btn ${maxIndex === 0 ? 'disabled' : ''}`}
                  onClick={next}
                  aria-label="Next projects"
                  disabled={maxIndex === 0}
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          <p className="projects-subtitle">
            Delivered with Excellence — With a focus on detail and reliability, we deliver residential and plotted projects built for lasting value.
          </p>
        </div>

        {/* ── Slider viewport ── */}
        <div
          className="slider-viewport"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="slider-track"
            style={{ transform: `translateX(calc(-${current} * (50% + 16px)))` }}
          >
            {filtered.map((project) => (
              <a
                key={project.id}
                href={project.link || "#contact"}
                className="project-card"
                onClick={e => dragging.current && e.preventDefault()}
              >
                <div className="project-img-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    draggable="false"
                  />
                  <div className="project-overlay">
                    <span className="project-category-badge">{project.category}</span>
                    <div className="project-overlay-details">
                      <span className="overlay-title">{project.title}</span>
                      <span className="overlay-location">{project.location}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Dots + CTA row ── */}
        <div className="slider-bottom-row">
          {/* Dot indicators */}
          <div className="slider-dots">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <a href="#all-projects" className="btn-luxury-outline">
            <span>View All Projects</span>
            <span className="btn-circle-arrow">→</span>
          </a>
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .projects-section {
          background-color: var(--color-bg-light);
          padding: 80px 0;
          overflow: hidden;
        }

        /* ── Header ── */
        .projects-header { 
          margin-bottom: 40px; 
        }

        .projects-title-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 24px;
        }

        .projects-header-left {
          display: flex;
          flex-direction: column;
        }

        .projects-main-title {
          font-family: var(--font-heading);
          font-size: 42px;
          font-weight: 400;
          line-height: 1.25;
          color: var(--color-text-dark);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .projects-header-right {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .projects-tabs {
          display: flex;
          gap: 12px;
        }

        .tab-btn {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-primary);
          background: rgba(19, 56, 37, 0.05);
          border: 1px solid rgba(19, 56, 37, 0.15);
          border-radius: 100px;
          padding: 8px 24px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .tab-btn:hover {
          background: rgba(19, 56, 37, 0.1);
        }
        .tab-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(19, 56, 37, 0.15);
        }

        /* ── Arrow buttons ── */
        .slider-arrows {
          display: flex;
          gap: 8px;
          margin-left: auto;
        }

        .arrow-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(19, 56, 37, 0.15);
          background: rgba(255, 255, 255, 0.6);
          color: var(--color-primary);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .arrow-btn:hover:not(.disabled) {
          background: rgba(19, 56, 37, 0.08);
          border-color: var(--color-primary);
          color: var(--color-primary);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(19, 56, 37, 0.12);
        }
        .arrow-btn.disabled {
          border-color: rgba(6, 11, 29, 0.08);
          background: rgba(255, 255, 255, 0.3);
          color: rgba(6, 11, 29, 0.2);
          cursor: not-allowed;
          backdrop-filter: blur(4px);
        }

        .projects-subtitle {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.6;
          max-width: 680px;
        }

        /* ── Viewport & Track ── */
        .slider-viewport {
          overflow: hidden;
          cursor: grab;
          user-select: none;
        }
        .slider-viewport:active { cursor: grabbing; }

        .slider-track {
          display: flex;
          gap: 32px;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        /* ── Card ── */
        .project-card {
          flex: 0 0 calc(50% - 16px);
          min-width: 0;
          display: block;
          text-decoration: none;
        }

        .project-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 4px;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
        }
        .project-card:hover .project-img { transform: scale(1.05); }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(6, 11, 29, 0) 45%, rgba(6, 11, 29, 0.9) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          z-index: 2;
          transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-category-badge {
          align-self: flex-start;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          color: #fff;
          padding: 4px 12px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.25);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-overlay-details {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .overlay-title {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: 0.02em;
          line-height: 1.2;
          max-width: 70%;
        }

        .overlay-location {
          font-family: var(--font-sans);
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          letter-spacing: 0.02em;
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
          .project-card:hover .project-overlay {
            opacity: 1;
          }
          .project-card:hover .project-category-badge {
            transform: translateY(0);
          }
          .project-card:hover .project-overlay-details {
            transform: translateY(0);
          }
        }

        /* ── Bottom row ── */
        .slider-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 36px;
          flex-wrap: wrap;
          gap: 16px;
        }

        /* ── Dots ── */
        .slider-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(19, 56, 37, 0.15);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .dot.active {
          background: var(--color-primary);
          width: 24px;
          border-radius: 4px;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .project-card { flex: 0 0 calc(85% - 16px); }
          .slider-track { gap: 20px; }
          .slider-arrows { display: none; }
          .overlay-title { font-size: 18px; }
          .overlay-location { font-size: 11px; }
        }
        @media (max-width: 480px) {
          .projects-section { padding: 60px 0; }
          .project-card { flex: 0 0 90%; }
        }
      `}</style>
    </section>
  );
}
