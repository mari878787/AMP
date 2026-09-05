import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import './ComingSoonPage.css';

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target Launch Date: Monday evening (September 7, 2026 at 06:00:00 PM local time)
    const targetLaunch = new Date('2026-09-07T18:00:00+05:30');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetLaunch.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
  }, []);

  return (
    <div className="coming-soon-container">
      <div className="cs-content-wrapper">
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

        {/* Launching Monday Evening Tag */}
        <div className="cs-launching-tag-wrap">
          <span className="cs-launching-tag">GRAND LAUNCH THIS MONDAY EVENING</span>
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
      </div>
    </div>
  );
}
