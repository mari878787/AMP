import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

// Dynamic Counter-Up (Runner) Component
function StatRunner({ target, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.15 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) {
      return;
    }

    const duration = 1800; // 1.8 seconds duration
    const stepTime = Math.max(Math.floor(duration / end), 8);
    
    // Calculate increment step to be smooth
    const increment = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <span ref={elementRef}>
      {prefix}{hasStarted ? count.toLocaleString() : "0"}{suffix}
    </span>
  );
}

const STATS_DATA = [
  {
    id: 1,
    icon: (
      <img 
        src="/images/about/stat_land_icon.png" 
        alt="Land Area Developed" 
        className="stat-image-icon"
      />
    ),
    targetValue: "600",
    prefix: "~",
    suffix: "K+",
    label: "Square Feet of Land Area Developed"
  },
  {
    id: 2,
    icon: (
      <img 
        src="/images/about/stat_family_icon.png" 
        alt="Happy Families" 
        className="stat-image-icon"
      />
    ),
    targetValue: "500",
    prefix: "~",
    suffix: "+",
    label: "Happy Families & Homeowners"
  },
  {
    id: 3,
    icon: (
      <img 
        src="/images/about/stat_completed_icon.png" 
        alt="Boutique Luxury Projects Completed" 
        className="stat-image-icon"
      />
    ),
    targetValue: "15",
    prefix: "",
    suffix: "+",
    label: "Boutique Luxury Projects Completed"
  }
];

export default function AboutStatsBar({
  stats = STATS_DATA
}) {
  return (
    <section className="about-stats-bar-section">
      <div className="container stats-bar-container">
        {stats.map((item, idx) => (
          <ScrollReveal 
            key={item.id || idx} 
            animation="fadeUp" 
            delay={idx * 0.1} 
            className="stat-col"
          >
            <div className="stat-item-inner">
              {/* Custom Icon Wrapper */}
              <div className="stat-icon-wrap">
                {item.icon}
              </div>

              {/* Thin Vertical Line Separator */}
              <div className="stat-inner-line" />

              {/* Right Stat Text Group */}
              <div className="stat-text-wrap">
                <h3 className="stat-value">
                  <StatRunner 
                    target={item.targetValue} 
                    prefix={item.prefix} 
                    suffix={item.suffix} 
                  />
                </h3>
                <p className="stat-label">{item.label}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        .about-stats-bar-section {
          width: 100%;
          background-color: var(--color-white);
          padding: 60px 0;
          box-sizing: border-box;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .stats-bar-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .stat-col {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 32px;
          border-right: 1px solid #E2DDD5;
        }

        .stat-col:first-child {
          padding-left: 0;
        }

        .stat-col:last-child {
          padding-right: 0;
          border-right: none;
        }

        .stat-item-inner {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .stat-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 64px;
          height: 48px;
        }

        .stat-image-icon {
          width: 44px;
          height: 44px;
          object-fit: contain;
          filter: invert(61%) sepia(18%) saturate(1064%) hue-rotate(338deg) brightness(88%) contrast(85%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stat-col:hover .stat-image-icon {
          transform: scale(1.12) translateY(-2px);
        }

        .stat-inner-line {
          width: 1px;
          height: 48px;
          background-color: #E2DDD5;
          flex-shrink: 0;
        }

        .stat-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-family: var(--font-heading, serif);
          font-size: clamp(34px, 3.8vw, 48px);
          font-weight: 400;
          color: #111111;
          line-height: 1;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .stat-label {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: #444444;
          margin: 0;
          line-height: 1.35;
        }

        @media (max-width: 960px) {
          .stats-bar-container {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 0 24px;
          }
          .stat-col {
            padding: 0 0 36px 0 !important;
            border-right: none !important;
            border-bottom: 1px solid #E2DDD5;
            justify-content: flex-start;
          }
          .stat-col:last-child {
            border-bottom: none;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
