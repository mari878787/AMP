import React, { useEffect, useRef, useState } from 'react';

export default function CursorTracker() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    // Check if it's a touch device or mobile screen
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 
                    ('ontouchstart' in window) || 
                    (navigator.maxTouchPoints > 0);
    
    if (isTouch) {
      setDisabled(true);
      return;
    }
    setDisabled(false);

    let targetX = -100;
    let targetY = -100;
    let currentDotX = -100;
    let currentDotY = -100;
    let currentRingX = -100;
    let currentRingY = -100;
    let isVisible = false;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      if (!isVisible && cursorRef.current) {
        isVisible = true;
        cursorRef.current.classList.add('is-visible');
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (cursorRef.current) {
        cursorRef.current.classList.remove('is-visible');
      }
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (cursorRef.current) {
        cursorRef.current.classList.add('is-visible');
      }
    };

    const handleMouseOver = (e) => {
      if (!cursorRef.current) return;
      const target = e.target;
      if (target && target.closest('a, button, [role="button"], input, select, textarea, .clickable, .projects-menu-trigger, .nav-capsule a')) {
        cursorRef.current.classList.add('is-hovered');
      }
    };

    const handleMouseOut = (e) => {
      if (!cursorRef.current) return;
      const target = e.target;
      if (target && target.closest('a, button, [role="button"], input, select, textarea, .clickable, .projects-menu-trigger, .nav-capsule a')) {
        cursorRef.current.classList.remove('is-hovered');
      }
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('is-active');
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('is-active');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    let rAF;
    const update = () => {
      // Lerp for dot (fast trail)
      currentDotX = currentDotX + (targetX - currentDotX) * 0.25;
      currentDotY = currentDotY + (targetY - currentDotY) * 0.25;

      // Lerp for ring (slower springy trail)
      currentRingX = currentRingX + (targetX - currentRingX) * 0.12;
      currentRingY = currentRingY + (targetY - currentRingY) * 0.12;

      if (dotRef.current) {
        // Shift transform relative to center (dot is 6px, so -3px offset)
        dotRef.current.style.transform = `translate3d(${currentDotX - 3}px, ${currentDotY - 3}px, 0)`;
      }

      if (ringRef.current) {
        // Shift transform relative to center (ring is 30px, so -15px offset)
        ringRef.current.style.transform = `translate3d(${currentRingX - 15}px, ${currentRingY - 15}px, 0)`;
      }

      rAF = requestAnimationFrame(update);
    };

    rAF = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(rAF);
    };
  }, []);

  if (disabled) return null;

  return (
    <div ref={cursorRef} className="custom-cursor-container">
      <div ref={dotRef} className="custom-cursor-dot"></div>
      <div ref={ringRef} className="custom-cursor-ring"></div>

      <style>{`
        .custom-cursor-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 10000;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .custom-cursor-container.is-visible {
          opacity: 1;
        }

        .custom-cursor-dot {
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          background-color: #ba944c; /* Brand Gold */
          border-radius: 50%;
          will-change: transform;
          z-index: 10002;
          transition: background-color 0.2s ease, transform 0.1s ease;
        }

        .custom-cursor-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 30px;
          height: 30px;
          border: 1px solid rgba(186, 148, 76, 0.45); /* Muted Gold Ring */
          border-radius: 50%;
          will-change: transform;
          z-index: 10001;
          transition: 
            width 0.3s cubic-bezier(0.25, 1, 0.5, 1), 
            height 0.3s cubic-bezier(0.25, 1, 0.5, 1), 
            background-color 0.3s cubic-bezier(0.25, 1, 0.5, 1), 
            border-color 0.3s cubic-bezier(0.25, 1, 0.5, 1), 
            margin 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* ── Hover State ── */
        .custom-cursor-container.is-hovered .custom-cursor-ring {
          width: 48px;
          height: 48px;
          /* Recenter 48px ring: offset becomes -24px, so we adjust margin */
          margin-top: -9px;
          margin-left: -9px;
          background-color: rgba(186, 148, 76, 0.08);
          border-color: #ba944c;
          backdrop-filter: blur(1px);
        }

        .custom-cursor-container.is-hovered .custom-cursor-dot {
          background-color: #ffffff;
        }

        /* ── Click / Active State ── */
        .custom-cursor-container.is-active .custom-cursor-ring {
          transform: scale(0.8);
          background-color: rgba(186, 148, 76, 0.18);
          border-color: #ba944c;
        }
      `}</style>
    </div>
  );
}
