import React, { useState, useEffect } from 'react';
import Button from '../Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CATEGORIES } from './data/storyData';
import ProjectMap from './ProjectMap';
import ScrollReveal from '../ScrollReveal';
import './NeighbourhoodStory.css';

export default function NeighbourhoodStory({ onEnquire, projectCoords, projectName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [selectedLocationName, setSelectedLocationName] = useState(null);

  const activeCategory = CATEGORIES[activeIndex];

  // Set 1st location of active category as default on mount & when category changes
  useEffect(() => {
    if (activeCategory && activeCategory.locations && activeCategory.locations.length > 0) {
      setSelectedLocationName(activeCategory.locations[0].name);
    } else {
      setSelectedLocationName(null);
    }
  }, [activeIndex]);

  const handleHoverLocation = (name) => {
    if (name) {
      setSelectedLocationName(name);
    }
  };

  // Autoplay loop: cycle through all 4 categories (Main Junctions + 3 others) every 5 seconds
  useEffect(() => {
    if (isHovered || userInteracted) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CATEGORIES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, userInteracted]);

  const scrollLeft = () => {
    setUserInteracted(true);
    setActiveIndex((prev) => (prev - 1 + CATEGORIES.length) % CATEGORIES.length);
  };

  const scrollRight = () => {
    setUserInteracted(true);
    setActiveIndex((prev) => (prev + 1) % CATEGORIES.length);
  };

  return (
    <section className="loc-advantage">
      {/* Corner Bird Decor */}


      <div className="loc-advantage__container">
        {/* Section Center Headline */}
        <ScrollReveal animation="fadeUp" delay={0.05} className="loc-advantage__header-center">
          <h2 className="section-title loc-advantage__center-title">
            Connectivity meets exclusivity.
          </h2>
        </ScrollReveal>

        <div className="loc-advantage__grid">

          {/* Column 1: Static Intro & Timeline Card */}
          <div className="loc-advantage__intro">
            {/* Viewport for timeline carousel cards */}
            <ScrollReveal className="loc-advantage__viewport" animation="fadeUp" delay={0.15}>
              <div
                className="loc-advantage__slideable-track"
                style={{ transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 80}px))` }}
              >
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="loc-advantage__slide-card">
                    <h4 className="loc-advantage__slide-card-title loc-advantage__slideable-title">{cat.label}</h4>

                    <div className="loc-advantage__timeline">
                      <div className="loc-advantage__line-track" />
                      {cat.locations.map((item, idx) => {
                        const isActiveLocation = item.name === selectedLocationName;
                        return (
                          <div 
                            key={idx} 
                            className={`loc-advantage__item ${isActiveLocation ? 'active' : ''}`}
                            onMouseEnter={() => handleHoverLocation(item.name)}
                          >
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
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Carousel progress dots indicators */}
            <div className="loc-advantage__carousel-dots">
              {CATEGORIES.map((_, idx) => (
                <button
                  key={idx}
                  className={`slider-dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => {
                    setUserInteracted(true);
                    setActiveIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Column 2: Location Header and Visual Swapping Image */}
          <ScrollReveal
            animation="fadeUp"
            delay={0.35}
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

            {/* Project Map Container */}
            <div className="loc-advantage__map-wrapper">
              <ProjectMap 
                activeCategory={activeCategory} 
                projectCoords={projectCoords} 
                projectName={projectName}
                activeLocationName={selectedLocationName}
                onHoverLocation={(name) => handleHoverLocation(name)}
                onInteraction={() => setUserInteracted(true)}
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
