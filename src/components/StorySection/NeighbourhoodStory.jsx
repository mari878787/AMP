import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CATEGORIES } from './data/storyData';
import './NeighbourhoodStory.css';

export default function NeighbourhoodStory({ onEnquire }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay loop: cycle through all 4 categories (Main Junctions + 3 others) every 5 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CATEGORIES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollLeft = () => {
    setActiveIndex((prev) => (prev - 1 + CATEGORIES.length) % CATEGORIES.length);
  };

  const scrollRight = () => {
    setActiveIndex((prev) => (prev + 1) % CATEGORIES.length);
  };

  return (
    <section className="loc-advantage">
      {/* Corner Bird Decor */}


      <div className="loc-advantage__container">
        <div className="loc-advantage__grid">

          {/* Column 1: Static Intro & Timeline Card */}
          <div className="loc-advantage__intro">
            <h2 className="section-title">
              Connectivity meets exclusivity.
            </h2>
            <p className="loc-advantage__desc">
              Crystal Moon Light places Chennai's major junctions, premium schools, healthcare, and retail hubs at your doorstep.
            </p>
            
            {/* Viewport for timeline carousel cards */}
            <div className="loc-advantage__viewport">
              <div
                className="loc-advantage__slideable-track"
                style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 80}px))` }}
              >
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="loc-advantage__slide-card">
                    <h4 className="loc-advantage__slide-card-title">{cat.label}</h4>

                    <div className="loc-advantage__timeline">
                      <div className="loc-advantage__line-track" />
                      {cat.locations.map((item, idx) => (
                        <div key={idx} className="loc-advantage__item">
                          <div className="loc-advantage__node-box">
                            <span className="loc-advantage__dist">{item.dist}</span>
                            <div className="loc-advantage__dot">
                              <div className="loc-advantage__dot-pulse" />
                            </div>
                          </div>
                          <div className="loc-advantage__details">
                            <span className="loc-advantage__name">{item.name}</span>
                            <span className="loc-advantage__subname">
                              {cat.id === 'junctions' ? 'Direct Connectivity' : 'Access Point'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel progress dots indicators */}
            <div className="loc-advantage__carousel-dots">
              {CATEGORIES.map((_, idx) => (
                <button
                  key={idx}
                  className={`slider-dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Column 2: Location Header and Visual Swapping Image */}
          <div
            className="loc-advantage__carousel-section"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="loc-advantage__slideable-header">
              <h3 className="loc-advantage__slideable-title">Location Advantages</h3>
              <div className="loc-advantage__arrows" style={{ display: 'flex', gap: '12px' }}>
                <button
                  className="slider-arrow"
                  onClick={scrollLeft}
                  aria-label="Slide Left"
                >
                  <ArrowLeft size={18} strokeWidth={1.5} />
                </button>
                <button
                  className="slider-arrow"
                  onClick={scrollRight}
                  aria-label="Slide Right"
                >
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Image Visual container */}
            <div className="loc-advantage__image-wrapper">
              <img
                key={activeIndex}
                src={CATEGORIES[activeIndex].image || "/images/project/why-cmv.png"}
                alt="Location Advantage Visual"
                className="loc-advantage__image"
                style={{ animation: 'imageReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
