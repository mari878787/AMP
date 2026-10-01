import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AmenitiesHeroSlider({
  amenities = [],
  title = "World Class Amenities",
  subtitle = "Step into a world of grace where peacefulness and elegance unite, offering exceptional features that enrich each moment and bring endless joy to everyday living."
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = amenities.length;

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlay || total <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(timer);
  }, [total, isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setActiveIndex(prev => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setActiveIndex(prev => (prev + 1) % total);
  };

  const handleCardClick = (idx) => {
    setIsAutoPlay(false);
    setActiveIndex(idx);
  };

  // Touch swipe handling for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  if (!amenities || amenities.length === 0) return null;

  const currentItem = amenities[activeIndex] || amenities[0];

  return (
    <div
      className="amp-amenities-slider"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* ── DESKTOP VIEW ── */}
      <div className="amp-amenities-desktop">
        {/* Full-width Background Images with Crossfade */}
        <div className="amp-amenities-bg-track">
          {amenities.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`amp-amenities-bg-slide ${isActive ? 'active' : ''}`}
                style={{
                  backgroundImage: `url('${encodeURI(item.image)}')`
                }}
              />
            );
          })}
          {/* Elegant Top & Bottom Gradient Overlays */}
          <div className="amp-amenities-overlay-top" />
          <div className="amp-amenities-overlay-bottom" />
        </div>

        {/* Top-Left Editorial Header */}
        <div className="amp-amenities-header">
          <h2 className="amp-amenities-title">{title}</h2>
          <p className="amp-amenities-subtitle">{subtitle}</p>
        </div>

        {/* Bottom Floating Cards Carousel */}
        <div className="amp-amenities-carousel-track-wrapper">
          <div
            className="amp-amenities-carousel-track"
            style={{
              transform: `translateX(-${activeIndex * 360}px)`
            }}
          >
            {amenities.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => handleCardClick(idx)}
                  className={`amp-amenity-card ${isActive ? 'card-active' : 'card-inactive'}`}
                >
                  <h3 className="amp-card-title">{item.title}</h3>
                  <p className="amp-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation Controls Bar */}
        <div className="amp-amenities-controls">
          <div className="amp-amenities-nav-btns">
            <button
              onClick={handlePrev}
              className="amp-nav-btn btn-prev"
              aria-label="Previous Amenity"
            >
              <ChevronLeft size={22} strokeWidth={2} />
            </button>
            <button
              onClick={handleNext}
              className="amp-nav-btn btn-next"
              aria-label="Next Amenity"
            >
              <ChevronRight size={22} strokeWidth={2} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="amp-amenities-dots">
            {amenities.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={`amp-dot ${activeIndex === idx ? 'active' : ''}`}
                aria-label={`Go to amenity ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE VIEW ── */}
      <div
        className="amp-amenities-mobile"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Photo Frame */}
        <div className="amp-mobile-photo-container">
          {amenities.map((item, idx) => (
            <img
              key={idx}
              src={encodeURI(item.image)}
              alt={item.title}
              className={`amp-mobile-photo ${activeIndex === idx ? 'active' : ''}`}
            />
          ))}

          {/* Corner Navigation Arrows docked at bottom-right */}
          <div className="amp-mobile-corner-btns">
            <button
              onClick={handlePrev}
              className="amp-mobile-btn btn-prev"
              aria-label="Previous Amenity"
            >
              <ChevronLeft size={20} strokeWidth={2.2} />
            </button>
            <button
              onClick={handleNext}
              className="amp-mobile-btn btn-next"
              aria-label="Next Amenity"
            >
              <ChevronRight size={20} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* Bottom Info Panel */}
        <div className="amp-mobile-info-card">
          <h3 className="amp-mobile-card-title">{currentItem.title}</h3>
          <p className="amp-mobile-card-desc">{currentItem.desc}</p>

          {/* Mobile Dots */}
          <div className="amp-mobile-dots">
            {amenities.map((_, idx) => (
              <span
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={`amp-mobile-dot ${activeIndex === idx ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── AMP AMENITIES SLIDER ── */
        .amp-amenities-slider {
          position: relative;
          width: 100%;
          background: var(--color-bg-navy, #000000);
          overflow: hidden;
          user-select: none;
        }

        /* ── DESKTOP VIEW ── */
        .amp-amenities-desktop {
          display: block;
          position: relative;
          width: 100%;
          height: clamp(620px, 82vh, 760px);
          overflow: hidden;
        }

        .amp-amenities-bg-track {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .amp-amenities-bg-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.04);
          transition: opacity 0.75s cubic-bezier(0.25, 1, 0.5, 1), transform 0.95s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .amp-amenities-bg-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .amp-amenities-overlay-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 55%;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 55%, transparent 100%);
          pointer-events: none;
        }

        .amp-amenities-overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 65%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 55%, transparent 100%);
          pointer-events: none;
        }

        /* Editorial Header */
        .amp-amenities-header {
          position: absolute;
          top: clamp(36px, 6vh, 64px);
          left: clamp(28px, 5.5vw, 80px);
          z-index: 10;
          max-width: 660px;
          text-align: left;
        }

        .amp-amenities-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 400;
          color: var(--color-white, #ffffff);
          letter-spacing: 0.02em;
          margin: 0 0 14px 0;
          line-height: 1.15;
          text-shadow: 0 2px 16px rgba(0, 0, 0, 0.45);
        }

        .amp-amenities-subtitle {
          font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
          font-size: clamp(14px, 1.15vw, 15.5px);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.68;
          margin: 0;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
        }

        /* Bottom Floating Cards Row */
        .amp-amenities-carousel-track-wrapper {
          position: absolute;
          bottom: 96px;
          left: clamp(28px, 5.5vw, 80px);
          right: 0;
          z-index: 10;
          overflow: visible;
        }

        .amp-amenities-carousel-track {
          display: flex;
          gap: 20px;
          transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1);
          width: max-content;
        }

        .amp-amenity-card {
          width: 340px;
          min-height: 145px;
          padding: 24px 26px;
          border-radius: 4px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Active Card: Clean Luxury White */
        .amp-amenity-card.card-active {
          background: var(--color-white, #ffffff);
          box-shadow: 0 16px 38px rgba(0, 0, 0, 0.35);
          cursor: default;
          transform: translateY(0);
        }

        .amp-amenity-card.card-active .amp-card-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          color: var(--color-text-dark, #000000);
          font-size: 24px;
          font-weight: 500;
          margin: 0 0 8px 0;
          line-height: 1.2;
          letter-spacing: 0.02em;
        }

        .amp-amenity-card.card-active .amp-card-desc {
          font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
          color: var(--color-text-muted, #333333);
          font-size: 13.5px;
          line-height: 1.55;
          margin: 0;
          font-weight: 400;
        }

        /* Inactive Cards: Refined Dark Glassmorphism */
        .amp-amenity-card.card-inactive {
          background: rgba(18, 18, 18, 0.78);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          cursor: pointer;
        }

        .amp-amenity-card.card-inactive:hover {
          background: rgba(28, 28, 28, 0.88);
          border-color: var(--color-highlight, #b48564);
          transform: translateY(-4px);
        }

        .amp-amenity-card.card-inactive .amp-card-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          color: var(--color-white, #ffffff);
          font-size: 22px;
          font-weight: 500;
          margin: 0 0 8px 0;
          line-height: 1.2;
          letter-spacing: 0.02em;
        }

        .amp-amenity-card.card-inactive .amp-card-desc {
          font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
          color: rgba(255, 255, 255, 0.75);
          font-size: 13.5px;
          line-height: 1.55;
          margin: 0;
          font-weight: 300;
        }

        /* Bottom Controls Bar */
        .amp-amenities-controls {
          position: absolute;
          bottom: 28px;
          left: clamp(28px, 5.5vw, 80px);
          z-index: 15;
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .amp-amenities-nav-btns {
          display: flex;
          align-items: center;
        }

        .amp-nav-btn {
          width: 48px;
          height: 48px;
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          outline: none;
        }

        .amp-nav-btn.btn-prev {
          background: var(--color-highlight, #b48564);
        }

        .amp-nav-btn.btn-prev:hover {
          background: #9d7253;
          transform: scale(1.04);
        }

        .amp-nav-btn.btn-next {
          background: var(--color-primary, #000000);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .amp-nav-btn.btn-next:hover {
          background: #222222;
          transform: scale(1.04);
        }

        /* Dots Container */
        .amp-amenities-dots {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .amp-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .amp-dot:hover:not(.active) {
          background: rgba(255, 255, 255, 0.65);
        }

        .amp-dot.active {
          width: 13px;
          height: 13px;
          background: var(--color-highlight, #b48564);
          box-shadow: 0 0 0 3px rgba(180, 133, 100, 0.35);
          transform: scale(1.1);
        }

        /* ── MOBILE VIEW ── */
        .amp-amenities-mobile {
          display: none;
          width: 100%;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .amp-amenities-desktop {
            display: none !important;
          }

          .amp-amenities-mobile {
            display: flex !important;
          }

          .amp-mobile-photo-container {
            position: relative;
            width: 100%;
            height: clamp(280px, 46vh, 360px);
            overflow: hidden;
            background: #000000;
          }

          .amp-mobile-photo {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            opacity: 0;
            transition: opacity 0.5s ease;
          }

          .amp-mobile-photo.active {
            opacity: 1;
          }

          .amp-mobile-corner-btns {
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 10;
            display: flex;
          }

          .amp-mobile-btn {
            width: 48px;
            height: 48px;
            border: none;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            outline: none;
          }

          .amp-mobile-btn.btn-prev {
            background: var(--color-highlight, #b48564);
          }

          .amp-mobile-btn.btn-next {
            background: var(--color-primary, #000000);
            border-left: 1px solid rgba(255, 255, 255, 0.12);
          }

          /* Bottom Solid Luxury Dark Panel */
          .amp-mobile-info-card {
            background: #111111;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding: 24px 20px 28px;
            color: #ffffff;
            text-align: left;
          }

          .amp-mobile-card-title {
            font-family: var(--font-heading, 'Playfair Display', serif);
            font-size: 23px;
            font-weight: 500;
            color: var(--color-white, #ffffff);
            margin: 0 0 8px 0;
            letter-spacing: 0.02em;
          }

          .amp-mobile-card-desc {
            font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
            font-size: 13.5px;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.8);
            margin: 0;
            font-weight: 300;
          }

          .amp-mobile-dots {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            margin-top: 20px;
          }

          .amp-mobile-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .amp-mobile-dot.active {
            width: 10px;
            height: 10px;
            background: var(--color-highlight, #b48564);
            box-shadow: 0 0 0 2px rgba(180, 133, 100, 0.35);
          }
        }
      `}</style>
    </div>
  );
}
