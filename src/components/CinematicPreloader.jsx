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
    // 0.0s - 4.2s: Emblem reveal -> white-logo.png & slogan -> top-left to bottom-right shine sweep
    // 4.2s: Entire preloader lifts slowly from bottom to top (translateY -100%)
    // 5.6s: Transition complete or loop reset
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4200);

    const doneTimer = setTimeout(() => {
      if (loop) {
        setIsExiting(false);
        setCycle(c => c + 1);
      } else {
        setIsDone(true);
        if (onComplete) onComplete();
      }
    }, 5600);

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
      aria-label="Welcome to Aadhithya Mohan Properties"
      role="status"
    >
      {/* ── 1. CINEMATIC ARCHITECTURAL CANYON ── */}
      <div className="preloader-backdrop">
        <img 
          src="/images/preloader_corridor-2.jpg" 
          alt=""
          aria-hidden="true" 
          className="preloader-bg-image"
        />
        {/* Background Dark Tint Overlay */}
        <div className="preloader-dark-tint-overlay" />
        <div className="preloader-vignette-overlay" />
        <div className="preloader-warm-light-pass" />
      </div>

      {/* ── 2. CENTER STAGE ── */}
      <div className="preloader-stage-wrap">
        
        {/* Unique Reveal Emblem (logo.png) */}
        <div className="preloader-emblem-wrap">
          <div className="preloader-emblem-light-bloom" />
          <img 
            src="/images/logo.png" 
            alt="Aadhithya Mohan Emblem" 
            className="preloader-emblem-image"
          />
        </div>

        {/* Brand Logotype Image (white-logo.png) */}
        <div className="preloader-wordmark-wrap">
          <img 
            src="/images/white-logo.png" 
            alt="Aadhithya Mohan Properties" 
            className="preloader-wordmark-image"
          />
        </div>

        {/* Bottom Luxury Slogan */}
        <div className="preloader-slogan-wrap">
          <span>CURATING TIMELESS LANDMARKS</span>
        </div>

      </div>

      {/* ── 3. FULL-SCREEN DIAGONAL SHINE SWEEP (TOP-LEFT TO BOTTOM-RIGHT) ── */}
      <div className="preloader-fullscreen-shine" />
    </aside>
  );
}
