import { useState, useEffect } from 'react';
import './CinematicPreloader.css';

export default function CinematicPreloader({ onComplete, loop = false }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setIsExiting(false);
    setIsDone(false);

    // Sequence timing (Calm, unhurried luxury pacing):
    // 0.45s - 2.05s: Icon entrance (gentle fade-in + majestic scale-up with silky damping)
    // 1.95s - 3.25s: Diagonal white glossy shimmer sweeps smoothly across emblem
    // 2.50s - 3.55s: Primary brand name glides upward into position with soft opacity
    // 3.10s - 4.05s: Subtitle ("PROPERTIES") locks into crisp alignment
    // 3.70s - 4.80s: Luxury slogan slides upward in gold with graceful letter-spacing
    // 4.80s - 5.80s: Grand appreciation pause (complete lockup resting majestically)
    // 5.80s - 7.05s: Smooth curtain lift (translateY -100%)
    // 7.10s: Complete
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 5800);

    const doneTimer = setTimeout(() => {
      if (loop) {
        setIsExiting(false);
        setCycle(c => c + 1);
      } else {
        setIsDone(true);
        if (onComplete) onComplete();
      }
    }, 7100);

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
