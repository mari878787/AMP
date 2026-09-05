import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, X, ChevronRight } from 'lucide-react';
import './LaunchCountdownWidget.css';

export default function LaunchCountdownWidget() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Target Launch Date: Next Monday (September 7, 2026 at 09:00:00 AM local time)
    // If today is Saturday Sep 5, Monday is Sep 7.
    const now = new Date();
    const mondayLaunch = new Date();
    
    // Calculate target Monday:
    const dayOfWeek = now.getDay(); // 0 is Sunday, 6 is Saturday
    let daysUntilMonday = (1 - dayOfWeek + 7) % 7;
    if (daysUntilMonday === 0 && now.getHours() >= 9) {
      daysUntilMonday = 7; // Target next Monday if today is Monday past launch time
    }
    
    mondayLaunch.setDate(now.getDate() + daysUntilMonday);
    mondayLaunch.setHours(9, 0, 0, 0);

    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const difference = mondayLaunch.getTime() - currentTime;

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

  if (isDismissed) return null;

  const handleEnquireClick = () => {
    const contactSec = document.getElementById('contact') || document.getElementById('pricing');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div className={`launch-countdown-widget ${isMinimized ? 'is-minimized' : ''}`}>
      {isMinimized ? (
        <button 
          className="countdown-badge-toggle" 
          onClick={() => setIsMinimized(false)}
          title="Expand Launch Timer"
        >
          <Clock size={16} className="badge-icon-spin" />
          <span className="badge-text">LAUNCH IN {timeLeft.days}d {timeLeft.hours}h</span>
        </button>
      ) : (
        <div className="countdown-card-body">
          <div className="countdown-card-header">
            <div className="countdown-header-tag">
              <Sparkles size={13} className="gold-sparkle" />
              <span>GRAND LAUNCH THIS MONDAY</span>
            </div>
            <div className="countdown-header-actions">
              <button 
                className="countdown-close-btn" 
                onClick={() => setIsMinimized(true)}
                title="Minimize"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          <h4 className="countdown-card-title">Crystal Moonlight Villas</h4>
          <p className="countdown-card-subtitle">Exclusive Launch Pricing Unlocks In</p>

          <div className="countdown-timer-grid">
            <div className="timer-box">
              <span className="timer-val">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="timer-unit">DAYS</span>
            </div>
            <span className="timer-colon">:</span>
            <div className="timer-box">
              <span className="timer-val">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="timer-unit">HRS</span>
            </div>
            <span className="timer-colon">:</span>
            <div className="timer-box">
              <span className="timer-val">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="timer-unit">MIN</span>
            </div>
            <span className="timer-colon">:</span>
            <div className="timer-box">
              <span className="timer-val">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="timer-unit">SEC</span>
            </div>
          </div>

          <button className="countdown-cta-btn" onClick={handleEnquireClick}>
            <span>PRE-BOOK PRIORITY ACCESS</span>
            <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
