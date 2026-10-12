import { useState, useEffect } from 'react';
import './CinematicPreloader.css';

export default function CinematicPreloader({ onComplete, loop = false }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setIsExiting(false);
    setIsDone(false);

    // Sequence timing:
    // 0.2s - 1.2s: Icon entrance (fade in + scale up with fluid ease-out damping)
    // 1.2s - 2.0s: Diagonal white glossy shimmer sweeps left-to-right across emblem
    // 1.85s: Primary brand name slides upward into position
    // 2.2s: Subtitle locks into crisp alignment
    // 2.45s: Luxury slogan slides upward in gold
    // 4.1s: Entire preloader lifts smoothly (translateY -100%)
    // 5.2s: Complete
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4100);

    const doneTimer = setTimeout(() => {
      if (loop) {
        setIsExiting(false);
        setCycle(c => c + 1);
      } else {
        setIsDone(true);
        if (onComplete) onComplete();
      }
    }, 5200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete, loop, cycle]);

  if (isDone) return null;

  return (
    <aside 
      key={cycle}
      className={`cinematic-preloader ${isExiting ? 'preloader-exit-curtain-up' : ''}`}
      aria-label="Aadhithya Mohan Properties"
      role="status"
    >
      {/* ── 1. ARCHITECTURAL CORRIDOR BACKGROUND ── */}
      <div className="preloader-backdrop">
        <img 
          src="/images/preloader_corridor-2.jpg" 
          alt="" 
          aria-hidden="true" 
          className="preloader-bg-image"
        />
        <div className="preloader-dark-tint-overlay" />
        <div className="preloader-vignette-overlay" />
      </div>

      {/* ── 2. CENTER STAGE ── */}
      <div className="preloader-stage-wrap">
        
        {/* Central Emblem with Masked Light Sweep */}
        <div className="preloader-emblem-container">
          <img 
            src="/images/logo.png" 
            alt="Aadhithya Mohan Emblem" 
            className="preloader-emblem-base"
          />
          {/* Subtle diagonal white glossy light shimmer sweep */}
          <div className="preloader-emblem-shimmer-sweep" />
        </div>

        {/* Primary Brand Name */}
        <div className="preloader-primary-name-wrap">
          <img 
            src="/images/brand-title-white.png" 
            alt="Aadhithya Mohan" 
            className="preloader-primary-name-img"
          />
        </div>

        {/* Subtitle */}
        <div className="preloader-subtitle-wrap">
          <img 
            src="/images/brand-subtitle-white.png" 
            alt="Properties" 
            className="preloader-subtitle-img"
          />
        </div>

        {/* Luxury Brand Slogan */}
        <div className="preloader-slogan-wrap">
          <span className="preloader-slogan-text">Curating Timeless Spaces</span>
        </div>

      </div>

    </aside>
  );
}
