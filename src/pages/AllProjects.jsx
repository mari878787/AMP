import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import { ArrowRight, MapPin, Home, Layers, Tag, ChevronDown, Map, Building2, Maximize, FileText } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Crystal Moonlight',
    location: 'Medavakkam, Chennai',
    category: 'Villas',
    status: 'Ongoing',
    siteExtent: '15 Acres',
    totalUnits: '120 Units',
    bhkConfig: '3 & 4 BHK',
    unitSize: '2,233 - 2,287 Sq.Ft.',
    reraNo: 'TN/29/Building/001/2024',
    price: '₹1 Cr - ₹3 Cr',
    priceRange: '₹1 Cr - ₹3 Cr',
    bedrooms: ['3 BHK', '4 BHK'],
    image: '/images/project_crystal_1779810838661.png',
    link: '/crystal-moonlight-villa'
  },
  {
    id: 2,
    title: 'Bay Vista',
    location: 'ECR, Chennai',
    category: 'Villas',
    status: 'Ongoing',
    siteExtent: '5 Acres',
    totalUnits: '42 Units',
    bhkConfig: 'Bespoke',
    unitSize: '3,000 - 4,500 Sq.Ft.',
    reraNo: 'TN/01/Building/042/2023',
    price: 'Above ₹3 Cr',
    priceRange: 'Above ₹3 Cr',
    bedrooms: ['Bespoke'],
    image: '/images/home/project-image-2.png',
    link: '/crystal-moonlight-villa'
  },
  {
    id: 3,
    title: 'Pasha Pinnacle',
    location: 'Royapettah, Chennai',
    category: 'Apartments',
    status: 'Ongoing',
    siteExtent: '2.5 Acres',
    totalUnits: '220 Units',
    bhkConfig: '2 & 3 BHK',
    unitSize: '1,500 - 2,400 Sq.Ft.',
    reraNo: 'TN/29/Building/029/2024',
    price: 'Under ₹1 Cr',
    priceRange: 'Under ₹1 Cr',
    bedrooms: ['2 BHK', '3 BHK'],
    image: '/images/project_crystal_1779810838661.png',
    link: '/pasha-pinnacle'
  },
  {
    id: 4,
    title: 'Ashok Nagar',
    location: 'Maduranthakam, Chennai',
    category: 'Plots',
    status: 'Ongoing',
    siteExtent: '20 Acres',
    totalUnits: '450 Plots',
    bhkConfig: 'Villa Plots',
    unitSize: '1,200 - 2,400 Sq.Ft.',
    reraNo: 'TN/01/Layout/105/2022',
    price: 'Under ₹1 Cr',
    priceRange: 'Under ₹1 Cr',
    image: '/images/home/project-image-2.png',
    link: '/ashok-nagar-villa-plots-in-maduranthakam'
  },
  {
    id: 5,
    title: 'CMR Global City',
    location: 'Maduranthakam, Chennai',
    category: 'Plots',
    status: 'Ongoing',
    siteExtent: '45 Acres',
    totalUnits: '800 Plots',
    bhkConfig: 'Plots',
    unitSize: '800 - 2,000 Sq.Ft.',
    reraNo: 'TN/01/Layout/023/2023',
    price: '₹1 Cr - ₹3 Cr',
    priceRange: '₹1 Cr - ₹3 Cr',
    image: '/images/home/project-image-1.png',
    link: '/ashok-nagar-villa-plots-in-maduranthakam'
  },
  {
    id: 6,
    title: 'Guberalakshmi Nagar',
    location: 'Chennai',
    category: 'Plots',
    status: 'Ongoing',
    siteExtent: '15 Acres',
    totalUnits: '320 Plots',
    bhkConfig: 'Residential Plots',
    unitSize: '600 - 1,800 Sq.Ft.',
    reraNo: 'TN/01/Layout/044/2024',
    price: 'Under ₹1 Cr',
    priceRange: 'Under ₹1 Cr',
    image: '/images/home/project-image-1.png',
    link: '/ashok-nagar-villa-plots-in-maduranthakam'
  }
];

/* ── Dropdown Filter Sub-Component ── */
function FilterDropdown({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`filter-dropdown ${isOpen ? 'is-open' : ''}`} ref={ref}>
      <button
        className="filter-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="filter-dropdown-left">
          <span className="filter-dropdown-label">{label}</span>
          <span className="filter-dropdown-value">{value}</span>
        </div>
        <ChevronDown size={18} className="filter-dropdown-chevron" />
      </button>

      <div className="filter-dropdown-options">
        {options.map((opt) => (
          <button
            key={opt}
            className={`filter-dropdown-option ${value === opt ? 'is-active' : ''}`}
            onClick={() => {
              onChange(opt);
              setIsOpen(false);
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function AllProjects() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');
  const [activeLocation, setActiveLocation] = useState('All');
  const [activePrice, setActivePrice] = useState('All');
  const [activeBedrooms, setActiveBedrooms] = useState('All');

  // Derive unique locations from project data (only for plots)
  const locationOptions = ['All', ...Array.from(new Set(PROJECTS_DATA.filter(p => p.category === 'Plots').map(p => p.location)))];
  const priceOptions = ['All', 'Under ₹1 Cr', '₹1 Cr - ₹3 Cr', 'Above ₹3 Cr', 'Price on Request'];
  const bedroomOptions = ['All', '2 BHK', '3 BHK', '4 BHK', 'Bespoke'];

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      const paramLower = categoryParam.toLowerCase();
      if (paramLower === 'villas') setActiveCategory('Villas');
      else if (paramLower === 'apartments') setActiveCategory('Apartments');
      else if (paramLower === 'plotted' || paramLower === 'plots') setActiveCategory('Plots');
    }
  }, [location]);

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const matchCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchStatus = activeStatus === 'All' || project.status === activeStatus;
    const matchPrice = activePrice === 'All' || project.priceRange === activePrice;

    let matchDynamic = true;
    if (activeCategory === 'Plots') {
      matchDynamic = activeLocation === 'All' || project.location === activeLocation;
    } else {
      matchDynamic = activeBedrooms === 'All' || (project.bedrooms && project.bedrooms.includes(activeBedrooms));
    }

    return matchCategory && matchStatus && matchPrice && matchDynamic;
  });

  return (
    <div className="all-projects-page" style={{ backgroundColor: 'var(--color-white)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme="dark" />

      <main style={{ flexGrow: 1, paddingBottom: '100px' }}>
        {/* Hero Banner */}
        <div className="all-projects-hero">
          <div className="all-projects-hero-overlay"></div>

          <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <ScrollReveal animation="fadeUp">
              <span className="hero-tag-light">PORTFOLIO</span>
              <h1 className="hero-page-title display-title">Our Projects</h1>
              <p className="hero-page-sub">
                Explore our curated collection of bespoke luxury villas, residences, and plotted developments across Chennai.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="container">

          {/* Section Headline */}
          <div style={{ marginBottom: '40px', marginTop: '20px', textAlign: 'center' }}>
            <ScrollReveal animation="fadeUp">
              <h2 className='section-title'>
                A Legacy of Landmarks
              </h2>
            </ScrollReveal>
          </div>

          {/* Dropdown Filter Bar */}
          <ScrollReveal animation="fadeUp" className="projects-filter-wrapper">
            <div className="filter-dropdowns-bar">

              {/* Category Dropdown */}
              <FilterDropdown
                label="Property Type"
                options={['All', 'Villas', 'Apartments', 'Plots']}
                value={activeCategory}
                onChange={setActiveCategory}
              />

              {/* Dynamic Dropdown: Bedrooms or Location */}
              {activeCategory === 'Plots' ? (
                <FilterDropdown
                  label="Location"
                  options={locationOptions}
                  value={activeLocation}
                  onChange={setActiveLocation}
                />
              ) : (
                <FilterDropdown
                  label="Bedrooms"
                  options={bedroomOptions}
                  value={activeBedrooms}
                  onChange={setActiveBedrooms}
                />
              )}

              {/* Status Dropdown */}
              <FilterDropdown
                label="Project Status"
                options={['All', 'Ongoing', 'Completed']}
                value={activeStatus}
                onChange={setActiveStatus}
              />

              {/* Price Dropdown */}
              <FilterDropdown
                label="Price"
                options={priceOptions}
                value={activePrice}
                onChange={setActivePrice}
              />

            </div>
          </ScrollReveal>

          {/* Results Count */}
          <div className="projects-count-bar">
            <span>Showing <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'Project' : 'Projects'}</span>
            {(activeCategory !== 'All' || activeStatus !== 'All' || activeLocation !== 'All' || activePrice !== 'All' || activeBedrooms !== 'All') && (
              <button
                className="clear-filter-text-btn"
                onClick={() => { setActiveCategory('All'); setActiveStatus('All'); setActiveLocation('All'); setActivePrice('All'); setActiveBedrooms('All'); }}
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="all-projects-grid">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} animation="fadeUp" delay={index * 0.08}>
                  <a href={project.link} className="ap-card-link">
                    <div className="ap-card">
                      {/* Image Container */}
                      <div className="ap-img-wrapper">
                        <img src={project.image} alt={project.title} className="ap-img" />

                        {/* Top Badges */}
                        <div className="ap-top-badges">
                          <span className="ap-badge-category">{project.category}</span>
                          <span className={`ap-badge-status ${project.status.toLowerCase()}`}>
                            <span className="status-dot"></span>
                            {project.status}
                          </span>
                        </div>

                        {/* Bottom Structured Information Overlay */}
                        <div className="ap-overlay-box">
                          {/* Title, Sub-Location & Price with RERA */}
                          <div className="ap-header-row">
                            <div className="ap-title-location-group">
                              <h3 className="ap-project-title">{project.title}</h3>
                              <div className="ap-location-subtext">
                                <MapPin size={13} className="ap-pin-icon" />
                                <span>{project.location}</span>
                              </div>
                            </div>
                            <div className="ap-price-rera-group">
                              <span className="ap-price-value">{project.priceRange || project.price}</span>
                            </div>
                          </div>

                          {/* Horizontal Thin Line */}
                          <div style={{ width: '100%', height: '.5px', backgroundColor: 'rgba(255, 255, 255, 0.15)', marginTop: '-4px', marginBottom: '2px' }}></div>

                          {/* Structured Information Grid - Icon Format (3-col + 2-col) */}
                          {/* Structured Information Grid - Icon Format (3-col + 2-col) */}
                          <div className="ap-icon-specs-container" style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginTop: '12px' }}>
                            {/* First Row: 3 Columns (Configuration / Units / Size for Villas/Apts; Units / Extent / Size for Plots) */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                              {project.category === 'Plots' ? (
                                <>
                                  <div className="ap-icon-spec">
                                    <img 
                                      src="/images/allProject/plot-total-units.png" 
                                      alt="Total Units" 
                                      className="spec-icon-img" 
                                    />
                                    <div className="spec-text-group">
                                      <span className="spec-label">Total Units</span>
                                      <span className="spec-value">{project.totalUnits}</span>
                                    </div>
                                  </div>
                                  <div className="ap-spec-divider"></div>
                                  <div className="ap-icon-spec">
                                    <img 
                                      src="/images/allProject/site-extention.png" 
                                      alt="Site Extent" 
                                      className="spec-icon-img" 
                                    />
                                    <div className="spec-text-group">
                                      <span className="spec-label">Site Extent</span>
                                      <span className="spec-value">{project.siteExtent}</span>
                                    </div>
                                  </div>
                                  <div className="ap-spec-divider"></div>
                                  <div className="ap-icon-spec">
                                    <img 
                                      src="/images/allProject/unit-size.png" 
                                      alt="Unit Size" 
                                      className="spec-icon-img" 
                                    />
                                    <div className="spec-text-group">
                                      <span className="spec-label">Unit Size</span>
                                      <span className="spec-value">{project.unitSize}</span>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="ap-icon-spec">
                                    <img 
                                      src="/images/allProject/Configuration.png" 
                                      alt="Configuration" 
                                      className="spec-icon-img" 
                                    />
                                    <div className="spec-text-group">
                                      <span className="spec-label">Configuration</span>
                                      <span className="spec-value">{project.bhkConfig}</span>
                                    </div>
                                  </div>
                                  <div className="ap-spec-divider"></div>
                                  <div className="ap-icon-spec">
                                    <img 
                                      src="/images/allProject/total-units.png" 
                                      alt="Total Units" 
                                      className="spec-icon-img" 
                                    />
                                    <div className="spec-text-group">
                                      <span className="spec-label">Total Units</span>
                                      <span className="spec-value">{project.totalUnits}</span>
                                    </div>
                                  </div>
                                  <div className="ap-spec-divider"></div>
                                  <div className="ap-icon-spec">
                                    <img 
                                      src="/images/allProject/unit-size.png" 
                                      alt="Unit Size" 
                                      className="spec-icon-img" 
                                    />
                                    <div className="spec-text-group">
                                      <span className="spec-label">Unit Size</span>
                                      <span className="spec-value">{project.unitSize}</span>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>

                            {/* Second Row: RERA Number & Explore Project Outline Button */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                              <div className="ap-icon-spec">
                                <img 
                                  src="/images/allProject/rera.png" 
                                  alt="RERA Number" 
                                  className="spec-icon-img" 
                                />
                                <div className="spec-text-group">
                                  <span className="spec-label">RERA Number</span>
                                  <span className="spec-value">{project.reraNo}</span>
                                </div>
                              </div>
                              <div className="ap-explore-outline-cell">
                                <span className="ap-explore-outline-btn ">
                                  EXPLORE PROJECT
                                  <ArrowRight size={13} className="ap-arrow" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="no-projects-box">
              <h3>No projects found</h3>
              <p>We don't have any {activeStatus.toLowerCase()} {activeCategory !== 'All' ? activeCategory.toLowerCase() : ''} projects matching your current filters.</p>
              <Button theme="outline" onClick={() => { setActiveCategory('All'); setActiveStatus('All'); }} style={{ marginTop: '20px' }}>
                Reset All Filters
              </Button>
            </div>
          )}

        </div>
      </main>

      <Footer />

      <style>{`
        /* ── Hero Banner ── */
        .all-projects-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          padding: 0 0 50px 0;
          margin-bottom: 60px;
          background: url("/images/about/CML ABOUT US.png") center/cover no-repeat;
        }

        .all-projects-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.23) 100%);
        }

        .hero-tag-light {
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 8px;
        }

        .hero-page-title {
          font-family: var(--font-heading);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          color: #31302fd2;
          margin: 0 0 12px 0;
          line-height: 1.15;
        }

        .hero-page-sub {
          font-family: var(--font-sans);
          font-size: clamp(15px, 2vw, 17px);
          color: rgba(112, 91, 91, 0.77);
          max-width: 620px;
          margin: 0;
          line-height: 1.6;
        }

        /* ── Dropdown Filter Bar ── */
        .projects-filter-wrapper {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 0 0 36px 0;
          width: 100%;
          position: relative;
          z-index: 50;
        }

        .filter-dropdowns-bar {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          width: 100%;
        }

        /* Individual dropdown */
        .filter-dropdown {
          position: relative;
          min-width: 180px;
          flex: 1;
        }

        .filter-dropdown-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 0;
          border: none;
          border-bottom: 1.5px solid #d0d0d0;
          background: transparent;
          cursor: pointer;
          width: 100%;
          transition: border-color 0.3s ease;
        }

        .filter-dropdown-trigger:hover,
        .filter-dropdown.is-open .filter-dropdown-trigger {
          border-bottom-color: #b48564;
        }

        .filter-dropdown-label {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #999999;
          line-height: 1;
        }

        .filter-dropdown-value {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 500;
          color: #111111;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .filter-dropdown-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 12px;
        }

        .filter-dropdown-chevron {
          color: #888888;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
          flex-shrink: 0;
          margin-top: 20px;
        }

        .filter-dropdown.is-open .filter-dropdown-chevron {
          transform: rotate(180deg);
          color: #b48564;
        }

        /* Dropdown options panel */
        .filter-dropdown-options {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
          z-index: 100;
          overflow: hidden;
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filter-dropdown.is-open .filter-dropdown-options {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .filter-dropdown-option {
          display: block;
          width: 100%;
          padding: 11px 18px;
          border: none;
          background: transparent;
          text-align: left;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 400;
          color: #555555;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          letter-spacing: 0.03em;
        }

        .filter-dropdown-option:hover {
          background: #faf8f6;
          color: #111111;
        }

        .filter-dropdown-option.is-active {
          color: #b48564;
          font-weight: 600;
          background: rgba(180, 133, 100, 0.06);
        }

        /* ── Count & Reset Bar ── */
        .projects-count-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          padding: 0 4px;
          font-size: 14px;
          color: #666666;
        }

        .clear-filter-text-btn {
          background: none;
          border: none;
          color: #b48564;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
        }

        /* ── Projects Grid & Structured Cards ── */
        .all-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 540px), 1fr));
          gap: 36px;
        }

        .ap-card-link {
          display: block;
          text-decoration: none;
          height: 100%;
          color: inherit;
        }

        .ap-card {
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }


        .ap-img-wrapper {
          position: relative;
          height: 520px;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ap-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ap-card:hover .ap-img {
          transform: scale(1.2);
        }

        /* Top Badges */
        .ap-top-badges {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
        }

        .ap-badge-category {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          color: #111111;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 6px 14px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .ap-badge-status {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 6px 14px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
        }

        .ap-badge-status.completed .status-dot {
          background: #60a5fa;
        }

        /* Bottom Glass Box Overlay */
        .ap-overlay-box {
          position: relative;
          z-index: 3;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.8) 65%, transparent 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 20px 30px 30px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ap-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          width: 100%;
        }

        .ap-title-location-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ap-project-title {
          font-family: var(--font-heading);
          font-size: 26px;
          font-weight: 400;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
        }

        .ap-location-subtext {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          font-weight: 400;
          font-family: var(--font-sans);
          letter-spacing: 0.01em;
        }

        .ap-price-rera-group {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          text-align: right;
          flex-shrink: 0;
          gap: 3px;
        }

        .ap-price-value {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .ap-price-rera {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.65);
          letter-spacing: 0.03em;
        }

        .ap-pin-icon {
          color: #b48564;
          flex-shrink: 0;
        }

        /* Specs Icon Grid */
        .ap-icon-specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 16px;
          margin-top: 4px;
        }

        .ap-icon-spec {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .spec-icon-img {
          width: 28px;
          height: 28px;
          object-fit: contain;
          filter: brightness(0) invert(1) opacity(0.85);
          flex-shrink: 0;
          border-radius: 0px !important;
        }

        .spec-icon {
          color: rgba(255, 255, 255, 0.6);
          flex-shrink: 0;
          stroke-width: 1.2;
        }

        .spec-text-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .spec-label {
          font-size: 10px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
        }

        .spec-value {
          font-size: 14px;
          font-weight: 400;
          color: #ffffff;
        }

        .spec-price {
          color: #d8b28f;
          font-weight: 600;
        }

        .ap-spec-divider {
          width: 0.5px;
          height: 24px;
          background: rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
          margin: 0 auto;
        }

        /* Outline Explore Project Button (in 2nd row) */
        .ap-explore-outline-cell {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        .ap-explore-outline-btn {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.47);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 10px 20px;
          border-radius: 100px;
          text-decoration: none;
          backdrop-filter: blur(38px);
          -webkit-backdrop-filter: blur(38px);
          transition: all 0.4s ease;
          white-space: nowrap;
        }

        .ap-card:hover .ap-explore-outline-btn {
          background: rgba(180, 133, 100, 0.18);
          border-color: #b48564;
          color: #d8b28f;
          gap: 12px;
        }

        .ap-arrow {
          transition: transform 0.3s ease;
        }

        .ap-card:hover .ap-arrow {
          transform: translateX(3px);
        }

        .ap-arrow {
          transition: transform 0.3s ease;
        }

        .ap-card:hover .ap-arrow {
          transform: translateX(3px);
        }

        /* No Projects Message */
        .no-projects-box {
          text-align: center;
          padding: 80px 20px;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          max-width: 600px;
          margin: 40px auto;
        }

        .no-projects-box h3 {
          font-family: var(--font-heading);
          font-size: 24px;
          color: #111111;
          margin: 0 0 10px 0;
        }

        .no-projects-box p {
          color: #666666;
          font-size: 15px;
          margin: 0;
        }

        @media (max-width: 768px) {
          .all-projects-hero {
            min-height: 45vh;
            padding-bottom: 40px;
          }
          .filter-group-container {
            flex-direction: column;
            border-radius: 16px;
            padding: 16px;
            gap: 16px;
          }
          .filter-separator-vertical {
            display: none;
          }
          .filter-tabs-custom {
            flex-wrap: wrap;
            justify-content: center;
          }
          .all-projects-grid {
            grid-template-columns: 1fr;
          }
          .ap-img-wrapper {
            height: 460px;
          }
          .ap-info-specs-grid {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .ap-spec-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
