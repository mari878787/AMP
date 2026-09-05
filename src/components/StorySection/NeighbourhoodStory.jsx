import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  GraduationCap, 
  HeartPulse, 
  ShoppingBag, 
  ChevronDown, 
  ChevronUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CATEGORIES } from './data/storyData';
import ProjectMap from './ProjectMap';
import ScrollReveal from '../ScrollReveal';
import './NeighbourhoodStory.css';

// Category icon mapper
const getCategoryIcon = (id, size = 15) => {
  switch (id) {
    case 'junctions':
      return <Compass size={size} />;
    case 'education':
      return <GraduationCap size={size} />;
    case 'hospitals':
      return <HeartPulse size={size} />;
    case 'shopping':
    default:
      return <ShoppingBag size={size} />;
  }
};

export default function NeighbourhoodStory({ onEnquire, projectCoords, projectName }) {
  const [activeCatIndex, setActiveCatIndex] = useState(0);
  const [selectedLocationName, setSelectedLocationName] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isPinHovered, setIsPinHovered] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100%

  // Coordinates for Medavakkam default
  const defaultCoords = projectCoords || [12.9175, 80.1915];

  const currentCategory = CATEGORIES[activeCatIndex] || CATEGORIES[0];
  const isTimerPaused = isCardHovered || isPinHovered;

  // Set default landmark on category change
  useEffect(() => {
    if (currentCategory && currentCategory.locations && currentCategory.locations.length > 0) {
      setSelectedLocationName(currentCategory.locations[0].name);
    }
  }, [activeCatIndex, currentCategory]);

  // 10-Second Auto-Rotation Timer with Progress Bar
  useEffect(() => {
    if (isTimerPaused) return; // Pause auto-rotation when user hovers the card or a map pin

    const stepMs = 100;
    const totalDurationMs = 10000; // 10 seconds per category
    const increment = (stepMs / totalDurationMs) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveCatIndex((catIdx) => (catIdx + 1) % CATEGORIES.length);
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(interval);
  }, [isTimerPaused]);

  const handlePrevCategory = (e) => {
    e.stopPropagation();
    setProgress(0);
    setActiveCatIndex((prev) => (prev - 1 + CATEGORIES.length) % CATEGORIES.length);
  };

  const handleNextCategory = (e) => {
    e.stopPropagation();
    setProgress(0);
    setActiveCatIndex((prev) => (prev + 1) % CATEGORIES.length);
  };

  const handleHoverLocation = (name) => {
    if (name) {
      setSelectedLocationName(name);
    }
  };

  return (
    <section className="loc-advantage-hero-section">
      
      {/* Clean Header */}
      <div className="loc-advantage-header-container">
        <ScrollReveal animation="fadeUp" delay={0.15} className="loc-advantage-header-block">
          <h2 className="section-title loc-advantage-main-title">
            Connectivity Meets <span>Exclusivity</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* ── 100% EDGE-TO-EDGE FULL-WIDTH HERO MAP CANVAS ── */}
      <div className="loc-advantage-fullwidth-map-shell">
        
        <div className="loc-advantage-map-viewport">
          
          {/* Full Width Map Component */}
          <ProjectMap 
            activeCategory={currentCategory} 
            projectCoords={defaultCoords} 
            projectName={projectName}
            activeLocationName={selectedLocationName}
            onHoverLocation={handleHoverLocation}
            onPinHoverChange={setIsPinHovered}
            mapStyle="streets-v12"
          />

          {/* ── CLEAN LIGHT FLOATING CARD (DEFAULT CLOSED ON MOBILE, OPEN ON DESKTOP) ── */}
          <div 
            className={`map-floating-drawer-card ${isMobileExpanded ? 'is-mobile-expanded' : 'is-mobile-collapsed'}`}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
          >
            {/* 10s Timer Animated Progress Bar */}
            <div className="drawer-progress-track">
              <div 
                className="drawer-progress-bar" 
                style={{ width: `${progress}%` }} 
              />
            </div>

            {/* Header Bar with Slide Arrows & Toggle */}
            <div 
              className="floating-drawer-header"
              onClick={() => setIsMobileExpanded(prev => !prev)}
            >
              <div className="drawer-header-left">
                <div className="drawer-cat-icon-badge">
                  {getCategoryIcon(currentCategory.id, 16)}
                </div>
                <div className="drawer-header-text">
                  <h3 className="drawer-title">{currentCategory.label}</h3>
                </div>
              </div>

              <div className="drawer-header-right">
                {/* Previous & Next Slide Arrows */}
                <div className="drawer-arrows-group">
                  <button 
                    className="drawer-arrow-btn" 
                    onClick={handlePrevCategory}
                    aria-label="Previous Category"
                    title="Previous Category"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button 
                    className="drawer-arrow-btn" 
                    onClick={handleNextCategory}
                    aria-label="Next Category"
                    title="Next Category"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                <span className="drawer-poi-count-badge">
                  {currentCategory.locations.length} Places
                </span>

                {/* Mobile Expand / Collapse Chevron */}
                <button 
                  className="drawer-mobile-toggle-btn"
                  aria-label={isMobileExpanded ? "Collapse List" : "Expand List"}
                >
                  {isMobileExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>

            {/* Expandable Content Body */}
            <div className="floating-drawer-body">
              
              {/* Timeline Landmarks List with Distances */}
              <div className="drawer-landmarks-list-scroll">
                <div className="drawer-timeline-container">
                  <div className="drawer-timeline-line" />
                  
                  {currentCategory.locations.map((loc, idx) => {
                    const isSelected = loc.name === selectedLocationName;
                    return (
                      <div
                        key={idx}
                        className={`drawer-landmark-item ${isSelected ? 'active-highlight' : ''}`}
                        onMouseEnter={() => handleHoverLocation(loc.name)}
                        onClick={() => handleHoverLocation(loc.name)}
                      >
                        <div className="landmark-node-box">
                          <span className="landmark-distance-tag">{loc.dist}</span>
                          <div className="landmark-dot-pulse">
                            <div className="landmark-dot-center" />
                          </div>
                        </div>

                        <div className="landmark-info-box">
                          <span className="landmark-name">{loc.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
