import React, { useState, useEffect, useRef } from 'react';

export default function LuxuryStatGrid({
  titleLine1 = "CRYSTAL",
  titleLine2 = "MOONLIGHT",
  projectSub = "MEDAVAKKAM, CHENNAI",
  stat1 = { tag: "PROPERTY TYPE", val: "PREMIUM", desc: "VILLAS" },
  stat2 = { tag: "CONFIGURATIONS", val: "3 & 4", desc: "BHK" },
  stat3 = { tag: "COMMUNITY", val: 47, desc: "VILLAS" },
  stat4 = { tag: "STATUS", val: "ONGOING", desc: "PROJECT" }
}) {
  const [visible, setVisible] = useState(false);
  const [communityCount, setCommunityCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Count up animation for stat3.val
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const end = parseInt(stat3.val, 10);
    if (isNaN(end)) {
      setCommunityCount(stat3.val);
      return;
    }
    const duration = 1600; // ms
    const incrementTime = Math.max(Math.floor(duration / end), 10); // Minimum 10ms step

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCommunityCount(end);
        clearInterval(timer);
      } else {
        setCommunityCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [visible, stat3.val]);

  // Helper to split text for staggered scroll reveals
  const renderStaggeredText = (text, isVisible, baseDelay = 0.2) => {
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return <span key={index} style={{ display: 'inline-block', width: '0.25em' }}>&nbsp;</span>;
      }
      return (
        <span 
          key={index} 
          style={{
            display: 'inline-block',
            transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
            opacity: isVisible ? 1 : 0,
            transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * 0.03}s, opacity 0.8s ease ${baseDelay + index * 0.03}s`
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div 
      ref={containerRef} 
      className={`luxury-stat-container ${visible ? 'is-visible' : ''}`}
    >
      <div className="luxury-stat-inner">
        {/* Stat Column 1 */}
        <div className="stat-column-wrapper">
          <span className="info-grid-tag transition-reveal delay-1">
            {stat1.tag}
          </span>
          <span className="info-grid-val transition-reveal delay-2">
            {stat1.val}
          </span>
          <span className="info-grid-desc transition-reveal delay-3">
            {stat1.desc}
          </span>
        </div>

        {/* Stat Column 2 */}
        <div className="stat-column-wrapper">
          <span className="info-grid-tag transition-reveal delay-2">
            {stat2.tag}
          </span>
          <span className="info-grid-val transition-reveal delay-3 font-numbers">
            {stat2.val}
          </span>
          <span className="info-grid-desc transition-reveal delay-4">
            {stat2.desc}
          </span>
        </div>

        {/* Animated Divider Left */}
        <div className="luxury-stat-divider"></div>

        {/* Stat Column 3: Project Title (Centerpiece) */}
        <div className="stat-column-wrapper centerpiece-wrapper">
          <span className="info-grid-tag transition-reveal delay-3">
            PROJECT
          </span>
          <span className="info-grid-val-large">
            <span className="stat-title-line">
              {renderStaggeredText(titleLine1, visible, 0.4)}
            </span>
            <span className="stat-title-line">
              {renderStaggeredText(titleLine2, visible, 0.65)}
            </span>
          </span>
          <span className="info-grid-desc transition-reveal delay-5">
            {projectSub}
          </span>
        </div>

        {/* Animated Divider Right */}
        <div className="luxury-stat-divider"></div>

        {/* Stat Column 4 */}
        <div className="stat-column-wrapper">
          <span className="info-grid-tag transition-reveal delay-2">
            {stat3.tag}
          </span>
          <span className="info-grid-val count-up-val font-numbers">
            {visible ? communityCount : 0}
          </span>
          <span className="info-grid-desc transition-reveal delay-4">
            {stat3.desc}
          </span>
        </div>

        {/* Stat Column 5 */}
        <div className="stat-column-wrapper">
          <span className="info-grid-tag transition-reveal delay-1">
            {stat4.tag}
          </span>
          <span className="info-grid-val status-val transition-reveal delay-2">
            {stat4.val}
          </span>
          <span className="info-grid-desc transition-reveal delay-3">
            {stat4.desc}
          </span>
        </div>
      </div>

      <style>{`
        .luxury-stat-container {
          width: 100%;
          padding: 40px 0;
          opacity: 0;
          transform: translateY(20px);
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease;
        }

        .luxury-stat-container.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .luxury-stat-inner {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: nowrap; /* Prevent wrapping into 2 rows on desktop */
          gap: 15px; /* Slightly tighter gap for fluid desktop rendering */
          margin: 0 auto;
          width: 100%;
        }

        .stat-column-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          min-width: 110px; /* Reduced to fit in 1 row on medium displays */
          padding: 10px 0;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .stat-column-wrapper:hover {
          transform: translateY(-5px);
        }

        .centerpiece-wrapper {
          flex: 1.5; /* Allow centerpiece to take proportional space without rigid min-width */
          min-width: 240px; /* Reduced centerpiece min-width */
          padding: 10px 15px;
        }

        /* Divider lines grow dynamically when in view */
        .luxury-stat-divider {
          width: 1px;
          height: 0;
          align-self: stretch;
          background: rgba(0, 0, 0, 0.08);
          transition: height 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }

        .is-visible .luxury-stat-divider {
          height: 90px;
        }

        /* Value styles */
        .info-grid-tag {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: #999999;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .info-grid-val {
          font-family: 'ChronicleDisplay', serif;
          font-size: 26px;
          color: #1a1a1a;
          margin-bottom: 8px;
          transition: color 0.4s ease, transform 0.4s ease;
        }

        .stat-column-wrapper:hover .info-grid-val {
          color: #000000;
          transform: scale(1.04);
        }

        .font-numbers {
          font-family: 'ChronicleDisplay', serif;
          font-size: 30px;
          font-weight: 300;
        }

        .info-grid-val-large {
          font-family: 'ChronicleDisplay', serif;
          font-size: 26px; /* Slightly smaller for multi-line elegant fit */
          color: #000000;
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1.25;
        }

        .stat-title-line {
          display: inline-flex;
          overflow: hidden;
        }

        .info-grid-desc {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #000000;
          text-transform: uppercase;
        }

        .status-val {
          position: relative;
          color: #b48564; /* Sophisticated bronze/gold status color */
        }

        .stat-column-wrapper:hover .status-val {
          color: #dfc3ae;
        }

        /* Generic slide up animations for text labels */
        .transition-reveal {
          opacity: 0;
          transform: translateY(15px);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
        }

        .is-visible .transition-reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }

        @media (max-width: 900px) {
          .luxury-stat-inner {
            flex-direction: column;
            gap: 20px;
          }
          .luxury-stat-divider {
            display: none; /* Hide vertical dividers on mobile stack */
          }
          .stat-column-wrapper {
            width: 100%;
            min-width: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            padding-bottom: 20px;
          }
          .stat-column-wrapper:last-child {
            border-bottom: none;
          }
          .centerpiece-wrapper {
            min-width: 0;
          }
        }
      `}</style>
    </div>
  );
}
