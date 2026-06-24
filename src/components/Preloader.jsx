import React, { useEffect, useState, useRef } from 'react';

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [spaceCreated, setSpaceCreated] = useState(false);
  const [coords, setCoords] = useState(null);
  const [stripScaledIn, setStripScaledIn] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [exiting, setExiting] = useState(false);
  
  const spacerRef = useRef(null);

  useEffect(() => {
    // Add scroll lock class to body
    document.body.classList.add('preloader-active');

    // 1. After text wave completes (1.2s), split text by expanding the spacer
    const spaceTimer = setTimeout(() => {
      setSpaceCreated(true);
    }, 1200);

    // 2. Once spacer is fully expanded (1.8s), measure spacer position & render the image strip
    const measureTimer = setTimeout(() => {
      if (spacerRef.current) {
        const rect = spacerRef.current.getBoundingClientRect();
        setCoords({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: 96, // 16:9 width
          height: 54, // 16:9 height
        });
      }
    }, 1800);

    // 3. Scale in the image strip quickly (0.4s duration) starting at 1.85s
    const scaleTimer = setTimeout(() => {
      setStripScaledIn(true);
    }, 1850);

    // 4. Wait for it to be viewed at full size in the gap, then start full screen expansion (2.8s)
    const expandTimer = setTimeout(() => {
      setExpanded(true);
    }, 2800);

    // 5. Start fading out the preloader background panel and text (4.0s)
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 4000);

    // 6. Completely unmount the preloader overlay (4.8s)
    const removeTimer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 4800);

    return () => {
      document.body.classList.remove('preloader-active');
      clearTimeout(spaceTimer);
      clearTimeout(measureTimer);
      clearTimeout(scaleTimer);
      clearTimeout(expandTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  // Split strings into individual characters to drive the text wave animation
  const getStripStyle = () => {
    if (!coords) return { display: 'none' };
    
    // Smooth transition configuration for full screen expansion
    // Matching hero dimensions (height: 100%, min-height: 850px)
    if (expanded) {
      return {
        position: 'fixed',
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        minHeight: '850px',
        transform: 'translate(0px, 0px)',
        borderRadius: '0px',
        boxShadow: 'none',
        transition: 'left 2.0s cubic-bezier(0.85, 0, 0.15, 1), top 2.0s cubic-bezier(0.85, 0, 0.15, 1), transform 2.0s cubic-bezier(0.85, 0, 0.15, 1), width 2.0s cubic-bezier(0.85, 0, 0.15, 1), height 2.0s cubic-bezier(0.85, 0, 0.15, 1), min-height 2.0s cubic-bezier(0.85, 0, 0.15, 1), border-radius 2.0s cubic-bezier(0.85, 0, 0.15, 1), box-shadow 2.0s cubic-bezier(0.85, 0, 0.15, 1)',
      };
    }
    
    // Snappy transition configuration for initial scale-in inside the gap
    return {
      position: 'fixed',
      left: `${coords.x}px`,
      top: `${coords.y}px`,
      width: `${coords.width}px`,
      height: `${coords.height}px`,
      minHeight: '0px',
      transform: `translate(-50%, -50%) scale(${stripScaledIn ? 1 : 0})`,
      opacity: stripScaledIn ? 1 : 0,
      borderRadius: '6px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
      transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
    };
  };

  return (
    <div className="preloader-overlay">
      {/* Cream Background Panel that fades out on exit */}
      <div className={`preloader-bg-panel ${exiting ? 'exiting' : ''}`}></div>

      {/* Expanding Widescreen Image Strip */}
      <div 
        className="preloader-image-strip-container"
        style={getStripStyle()}
      >
        <img 
          src="/images/home/hero.png" 
          alt="Aadhithya Mohan Villa" 
          className="preloader-strip-img" 
        />
        
        {/* Dark gradient overlay that matches the Hero section image overlay */}
        <div className={`preloader-image-overlay ${expanded ? 'visible' : ''}`}></div>
      </div>

      {/* Centered Text Container */}
      <div className={`preloader-text-container ${expanded ? 'expanded-out' : ''} ${exiting ? 'exiting' : ''}`}>
        {/* Word 1: Aadhithya Wrapper */}
        <div className="word-left">
          <span 
            className="preloader-word preloader-word-animate"
            style={{ animationDelay: '0s' }}
          >
            Aadhithya
          </span>
        </div>
        
        {/* Spacer that holds the gap and serves as coordinates reference */}
        <div 
          ref={spacerRef} 
          className={`preloader-strip-spacer ${spaceCreated ? 'expanded' : ''}`} 
          aria-hidden="true"
        ></div>
        
        {/* Right Words: Mohan and Properties (Word-wise Staggered Wave) */}
        <div className="word-right">
          <span 
            className="preloader-word preloader-word-animate"
            style={{ animationDelay: '0.25s' }}
          >
            Mohan
          </span>
          <span 
            className="preloader-word preloader-word-animate"
            style={{ animationDelay: '0.5s' }}
          >
            Properties
          </span>
        </div>
      </div>

      <style>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          pointer-events: none;
        }

        .preloader-bg-panel {
          position: absolute;
          inset: 0;
          background-color: var(--color-bg-cream); /* Premium luxury cream background */
          z-index: 1;
          transition: opacity 0.8s cubic-bezier(0.85, 0, 0.15, 1);
          pointer-events: auto;
        }

        .preloader-bg-panel.exiting {
          opacity: 0;
          pointer-events: none;
        }

        /* ── Text Layout ── */
        .preloader-text-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          pointer-events: none;
          transition: opacity 0.8s cubic-bezier(0.85, 0, 0.15, 1);
        }

        .preloader-text-container.exiting {
          opacity: 0;
        }

        .preloader-word {
          font-family: var(--font-heading); /* Helvetica World */
          font-size: clamp(20px, 4vw, 42px);
          font-weight: 500;
          color: var(--color-text-dark);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .word-left {
          display: inline-block;
          transition: transform 1.8s cubic-bezier(0.85, 0, 0.15, 1), opacity 1.5s cubic-bezier(0.85, 0, 0.15, 1);
        }

        .word-right {
          display: flex;
          gap: 16px; /* Space between Mohan and Properties */
          transition: transform 1.8s cubic-bezier(0.85, 0, 0.15, 1), opacity 1.5s cubic-bezier(0.85, 0, 0.15, 1);
        }

        /* ── Word-Wise Wave Entrance ── */
        .preloader-word-animate {
          opacity: 0;
          transform: translateY(20px);
          animation: wordEntrance 0.6s var(--ease-luxury) forwards;
        }

        @keyframes wordEntrance {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Text Split / Space Creation ── */
        .preloader-strip-spacer {
          width: 0px;
          height: 54px;
          flex-shrink: 0;
          transition: width 0.6s cubic-bezier(0.85, 0, 0.15, 1);
        }

        .preloader-strip-spacer.expanded {
          width: 110px; /* Spacer gap width */
        }

        /* ── Outward Text Slide on Expansion ── */
        .preloader-text-container.expanded-out .word-left {
          transform: translateX(-18vw);
          opacity: 0;
        }

        .preloader-text-container.expanded-out .word-right {
          transform: translateX(18vw);
          opacity: 0;
        }

        /* ── Image Strip ── */
        .preloader-image-strip-container {
          position: relative;
          overflow: hidden;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: left, top, transform, width, height, opacity, border-radius;
        }

        /* The image inside scales/transitions seamlessly with the container size */
        .preloader-strip-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom; /* Matches the hero background alignment exactly */
          display: block;
          pointer-events: none;
        }

        /* Gradient overlay for brightness match on exit */
        .preloader-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom, 
            rgba(6, 11, 29, 0.40) 0%, 
            rgba(6, 11, 29, 0.10) 50%, 
            rgba(6, 11, 29, 0.40) 100%
          );
          z-index: 2;
          opacity: 0;
          transition: opacity 1.5s cubic-bezier(0.85, 0, 0.15, 1);
          pointer-events: none;
        }

        .preloader-image-overlay.visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
