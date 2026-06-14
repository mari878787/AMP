import React, { useState, useRef, useCallback } from 'react';

const ALL_PROJECTS = [
  {
    id: 1,
    category: 'Residential',
    title: 'House for a family with two children',
    location: 'ECR, Chennai',
    area: '4,200 sq.ft',
    image: '/images/home/project-image-1.png',
  },
  {
    id: 2,
    category: 'Plotted',
    title: 'Eco-tech style with natural finishing material',
    location: 'OMR, Chennai',
    area: '3,800 sq.ft',
    image: '/images/home/project-image-2.png',
  },
  {
    id: 3,
    category: 'Residential',
    title: 'Modern luxury villa with panoramic views',
    location: 'Adyar, Chennai',
    area: '5,500 sq.ft',
    image: '/images/villa_exterior_1779810861723.png',
  },
  {
    id: 4,
    category: 'Residential',
    title: 'Crystal Moonlight Villa',
    location: 'Medavakkam, Chennai',
    area: '5,500 sq.ft',
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

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(maxIndex, c + 1)), [maxIndex]);

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
            <h2 className="projects-title">Our Projects</h2>
            <div className="projects-tabs">
              {['Residential', 'Plotted'].map(tab => (
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
                className={`arrow-btn ${current === 0 ? 'disabled' : ''}`}
                onClick={prev}
                aria-label="Previous projects"
                disabled={current === 0}
              >
                <ArrowLeft />
              </button>
              <button
                className={`arrow-btn ${current >= maxIndex ? 'disabled' : ''}`}
                onClick={next}
                aria-label="Next projects"
                disabled={current >= maxIndex}
              >
                <ArrowRight />
              </button>
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
              <div key={project.id} className="project-card">
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
                      <span className="overlay-location">{project.location}</span>
                      <span className="overlay-area">{project.area}</span>
                    </div>
                  </div>
                </div>
                <div className="project-card-footer">
                  <p className="project-card-title">{project.title}</p>
                  <a
                    href={project.link || "#contact"}
                    className="project-card-link"
                    aria-label={`View ${project.title}`}
                    onClick={e => dragging.current && e.preventDefault()}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
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

          <a href="#all-projects" className="btn-view-all">
            View All Projects
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .projects-section {
          background-color: #ffffff;
          padding: 60px 0;
          overflow: hidden;
        }

        /* ── Header ── */
        .projects-header { margin-bottom: 32px; }

        .projects-title-row {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .projects-title {
          font-family: 'Helvetica World', 'HelveticaWorld', Helvetica, Arial, sans-serif;
          font-size: 32px;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: #0f172a;
          line-height: 1.25;
          margin-right: 4px;
        }

        .projects-tabs {
          display: flex;
          gap: 10px;
          flex: 1;
        }

        .tab-btn {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #ba944c;
          background: rgba(186, 148, 76, 0.04);
          border: 1px solid rgba(186, 148, 76, 0.25);
          border-radius: 50px;
          padding: 6px 22px;
          cursor: pointer;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .tab-btn:hover {
          background: rgba(186, 148, 76, 0.08);
          border-color: rgba(186, 148, 76, 0.5);
          transform: translateY(-1px);
        }
        .tab-btn.active {
          background: rgba(186, 148, 76, 0.9);
          border-color: #ba944c;
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(186, 148, 76, 0.2);
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
          border: 1px solid rgba(186, 148, 76, 0.25);
          background: rgba(255, 255, 255, 0.6);
          color: #ba944c;
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
          background: rgba(186, 148, 76, 0.08);
          border-color: #ba944c;
          color: #ba944c;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(186, 148, 76, 0.12);
        }
        .arrow-btn.disabled {
          border-color: rgba(6, 11, 29, 0.08);
          background: rgba(255, 255, 255, 0.3);
          color: rgba(6, 11, 29, 0.2);
          cursor: not-allowed;
          backdrop-filter: blur(4px);
        }

        .projects-subtitle {
          font-family: 'Helvetica Now', 'HelveticaNow', Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #64748b;
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
          display: flex;
          flex-direction: column;
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
          background: linear-gradient(to bottom, rgba(6,11,29,0) 25%, rgba(6,11,29,0.65) 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 18px 20px;
        }
        .project-card:hover .project-overlay { opacity: 1; }

        .project-category-badge {
          align-self: flex-start;
          font-family: 'Helvetica Now', 'HelveticaNow', Helvetica, Arial, sans-serif;
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
        }

        .project-overlay-details {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .overlay-location, .overlay-area {
          font-family: 'Helvetica Now', 'HelveticaNow', Helvetica, Arial, sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.02em;
        }

        /* ── Card Footer ── */
        .project-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0 4px;
          border-bottom: 1px solid #f0f0f0;
          margin-top: 4px;
        }
        .project-card-title {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          line-height: 1.4;
          max-width: 85%;
          letter-spacing: 0.02em;
        }
        .project-card-link {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ba944c;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .project-card-link:hover { color: #ba944c; transform: translateX(3px) scale(1.1); }

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
          background: #d1d5db;
          border: none;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease, width 0.25s ease;
          padding: 0;
        }
        .dot.active {
          background: #ba944c;
          width: 24px;
          border-radius: 4px;
        }

        /* ── View All CTA ── */
        .btn-view-all {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ba944c;
          background: rgba(186, 148, 76, 0.05);
          border: 1px solid rgba(186, 148, 76, 0.25);
          border-radius: 50px;
          padding: 10px 30px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-view-all:hover {
          background: rgba(186, 148, 76, 0.9);
          border-color: #ba944c;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(186, 148, 76, 0.25);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .projects-title { font-size: 26px; }
          .project-card { flex: 0 0 calc(85% - 16px); }
          .slider-track { gap: 20px; }
          .slider-arrows { display: none; }
        }
        @media (max-width: 480px) {
          .projects-title { font-size: 22px; }
          .projects-section { padding: 60px 0; }
          .project-card { flex: 0 0 90%; }
        }
      `}</style>
    </section>
  );
}
