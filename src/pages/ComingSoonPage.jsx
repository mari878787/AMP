import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import Home from './Home';
import './ComingSoonPage.css';

export default function ComingSoonPage() {
  // Test Launch Target: 2:50 PM IST today (September 7, 2026)
  const targetLaunch = new Date('2026-09-07T14:50:00+05:30');
  
  const [isLive, setIsLive] = useState(() => new Date().getTime() >= targetLaunch.getTime());
  const [showLiveCelebration, setShowLiveCelebration] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetLaunch.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (!isLive) {
          // Trigger the celebration transition if user was actively watching
          setShowLiveCelebration(true);
          setTimeout(() => {
            setIsLive(true);
            setShowLiveCelebration(false);
          }, 3500);
        } else {
          setIsLive(true);
        }
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timerId = setInterval(updateCountdown, 1000);
    return () => clearInterval(timerId);
  }, [isLive]);

  // If already live and not in transition celebration mode, render Home directly
  if (isLive && !showLiveCelebration) {
    return <Home />;
  }

  const handleEnterNow = () => {
    setShowLiveCelebration(false);
    setIsLive(true);
  };

  return (
    <div className={`coming-soon-container ${showLiveCelebration ? 'live-celebration-bg' : ''}`}>
      <div className="cs-content-wrapper">
        {showLiveCelebration ? (
          /* "WE ARE LIVE" Celebration State */
          <div className="cs-live-celebration-card">
            <div className="cs-badge live-badge-active">
              <Sparkles size={16} className="cs-sparkle-icon-live" />
              <span>OFFICIALLY UNVEILED</span>
            </div>

            <h1 className="cs-title cs-title-live">
              WE ARE <span className="cs-title-gold-glow">LIVE</span>
            </h1>

            <p className="cs-live-subtitle">
              Welcome to the new digital destination of Aadhithya Mohan Properties.
            </p>

            <div className="cs-live-progress-container">
              <div className="cs-live-progress-bar"></div>
            </div>

            <button className="cs-enter-home-btn" onClick={handleEnterNow}>
              <span>ENTER WEBSITE</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          /* Countdown Timer State (Active until 6:00 PM) */
          <>
            {/* Badge Header */}
            <div className="cs-badge">
              <Sparkles size={14} className="cs-sparkle-icon" />
              <span>LAUNCHING SOON</span>
            </div>

            {/* Main Quote / Tagline */}
            <h1 className="cs-title">
              Crafting Benchmarks In <br />
              <span className="cs-title-gold">Luxury Living</span>
            </h1>

            <p className="cs-quote">
              "Architecture should speak of its time and place, but yearn for timelessness."
            </p>

            {/* Launching Today 6:00 PM Tag */}
            <div className="cs-launching-tag-wrap">
              <span className="cs-launching-tag">GRAND LAUNCH TODAY AT 6:00 PM</span>
            </div>

            {/* Live Countdown Timer */}
            <div className="cs-timer-card">
              <div className="cs-timer-grid">
                <div className="cs-timer-box">
                  <span className="cs-timer-num">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="cs-timer-lbl">DAYS</span>
                </div>
                <span className="cs-timer-sep">:</span>
                <div className="cs-timer-box">
                  <span className="cs-timer-num">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="cs-timer-lbl">HOURS</span>
                </div>
                <span className="cs-timer-sep">:</span>
                <div className="cs-timer-box">
                  <span className="cs-timer-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="cs-timer-lbl">MINUTES</span>
                </div>
                <span className="cs-timer-sep">:</span>
                <div className="cs-timer-box">
                  <span className="cs-timer-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="cs-timer-lbl">SECONDS</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
