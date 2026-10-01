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
              const isPast = idx < activeIndex;
              return (
                <div
                  key={idx}
                  onClick={() => handleCardClick(idx)}
                  className={`amp-amenity-card ${
                    isActive ? 'card-active' : isPast ? 'card-past' : 'card-inactive'
                  }`}
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
          background: var(--color-bg-light, #f7f7f7);
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
          height: 50%;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%);
          pointer-events: none;
        }

        .amp-amenities-overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.12) 50%, transparent 100%);
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
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);
        }

        .amp-amenities-subtitle {
          font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
          font-size: clamp(14px, 1.15vw, 15.5px);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.68;
          margin: 0;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
        }

        /* Bottom Floating Cards Row — Centered Active Card (Left Cards Hidden) */
        .amp-amenities-carousel-track-wrapper {
          position: absolute;
          bottom: 96px;
          left: calc(50% - 170px);
          right: 0;
          z-index: 10;
          overflow: visible;
          clip-path: inset(-60px 0px -60px 0px);
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

        /* Active Card: Clean Luxury White with Gold Accent */
        .amp-amenity-card.card-active {
          background: #ffffff;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
          cursor: default;
          transform: scale(0.92);
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
          color: #333333;
          font-size: 13.5px;
          line-height: 1.55;
          margin: 0;
          font-weight: 400;
        }

        /* Inactive Cards: Light Luxury Frosted Glass */
        .amp-amenity-card.card-inactive {
          background: rgba(255, 255, 255, 0.86);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }

        .amp-amenity-card.card-inactive:hover {
          background: #ffffff;
          border-color: var(--color-highlight, #b48564);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }

        .amp-amenity-card.card-inactive .amp-card-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          color: var(--color-text-dark, #000000);
          font-size: 22px;
          font-weight: 500;
          margin: 0 0 8px 0;
          line-height: 1.2;
          letter-spacing: 0.02em;
        }

        .amp-amenity-card.card-inactive .amp-card-desc {
          font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
          color: #555555;
          font-size: 13.5px;
          line-height: 1.55;
          margin: 0;
          font-weight: 300;
        }

        /* Past Cards (to the left of active card) — Hidden */
        .amp-amenity-card.card-past {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: scale(0.92);
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Bottom Controls Bar — Centered below active card */
        .amp-amenities-controls {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 15;
          display: flex;
          align-items: center;
          gap: 22px;
        }

        /* Signature Website Arrow Style: Circular & Light */
        .amp-amenities-nav-btns {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .amp-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: var(--color-primary, #000000);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
        }

        .amp-nav-btn:hover {
          background: #ffffff;
          color: var(--color-highlight, #b48564);
          border-color: var(--color-highlight, #b48564);
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
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
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 0;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
        }

        .amp-dot:hover:not(.active) {
          background: #ffffff;
          transform: scale(1.15);
        }

        .amp-dot.active {
          width: 12px;
          height: 12px;
          background: var(--color-highlight, #b48564);
          border-color: var(--color-highlight, #b48564);
          box-shadow: 0 0 0 3px rgba(180, 133, 100, 0.35);
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
            background: #f7f7f7;
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
            bottom: 14px;
            right: 14px;
            z-index: 10;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .amp-mobile-btn {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(0, 0, 0, 0.08);
            color: var(--color-primary, #000000);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
            outline: none;
            transition: all 0.25s ease;
          }

          .amp-mobile-btn:active {
            transform: scale(0.94);
            color: var(--color-highlight, #b48564);
          }

          /* Light Luxury Info Card for Mobile */
          .amp-mobile-info-card {
            background: #ffffff;
            border-top: 1px solid rgba(0, 0, 0, 0.06);
            box-shadow: 0 -4px 18px rgba(0, 0, 0, 0.04);
            padding: 24px 20px 28px;
            color: var(--color-text-dark, #000000);
            text-align: left;
          }

          .amp-mobile-card-title {
            font-family: var(--font-heading, 'Playfair Display', serif);
            font-size: 23px;
            font-weight: 500;
            color: var(--color-text-dark, #000000);
            margin: 0 0 8px 0;
            letter-spacing: 0.02em;
          }

          .amp-mobile-card-desc {
            font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
            font-size: 14px;
            line-height: 1.6;
            color: #444444;
            margin: 0;
            font-weight: 400;
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
            background: rgba(0, 0, 0, 0.2);
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .amp-mobile-dot.active {
            width: 10px;
            height: 10px;
            background: var(--color-highlight, #b48564);
            box-shadow: 0 0 0 2px rgba(180, 133, 100, 0.25);
          }
        }
      `}</style>
    </div>
  );
}
