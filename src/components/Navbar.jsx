import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, Globe, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'villas',
    name: 'Villas',
    img: '/images/project/CML/master-banner.png',
    projects: [
      { id: 'crystal-moonlight', name: 'Crystal Moonlight Villas', location: 'Medavakkam, Chennai', img: '/images/project/CML/master-banner.png', url: '/crystal-moonlight-villa' },
      { id: 'bay-vista', name: 'Bay Vista', location: 'ECR, Chennai', img: '/images/home/project-image-2.png', url: '/crystal-moonlight-villa' }
    ]
  },
  {
    id: 'apartments',
    name: 'Apartments',
    img: '/images/project_crystal_1779810838661.png',
    projects: [
      { id: 'pasha-pinnacle', name: 'Pasha Pinnacle', location: 'Royapettah, Chennai', img: '/images/project_crystal_1779810838661.png', url: '/crystal-moonlight-villa' }
    ]
  },
  {
    id: 'plotted',
    name: 'Plots',
    img: '/images/home/project-image-1.png',
    projects: [
      { id: 'ashok-nagar', name: 'Ashok Nagar', location: 'Maduranthakam, Chennai', img: '/images/home/project-image-2.png', url: '/ashok-nagar-villa-plots-in-maduranthakam' },
      { id: 'cmr-global', name: 'CMR Global City', location: 'Maduranthakam, Chennai', img: '/images/home/project-image-1.png', url: '/ashok-nagar-villa-plots-in-maduranthakam' },
      { id: 'guberalakshmi', name: 'Guberalakshmi Nagar', location: 'Chennai', img: '/images/home/project-image-1.png', url: '/ashok-nagar-villa-plots-in-maduranthakam' }
    ]
  }
];

export default function Navbar({ darkText = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all projects for searching
  const allProjectsFlat = CATEGORIES.flatMap(cat => cat.projects);
  const searchResults = searchQuery.trim() === '' ? [] : allProjectsFlat.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (p.location && p.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    if (!megaMenuOpen) {
      setActiveCategory(null);
      setActiveProject(null);
    }
  }, [megaMenuOpen]);

  // Handle Search Overlay Body Lock & Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    if (isSearchOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      setTimeout(() => setSearchQuery(''), 300); // Clear after fade out
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSubMenu, setExpandedSubMenu] = useState(null); // 'about' or 'projects' or 'properties'
  const [expandedCategory, setExpandedCategory] = useState(null); // 'villas' or 'apartments' or 'plotted'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest('.mega-trigger') && !e.target.closest('.mega-menu')) {
        setMegaMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSubMenu = (menuName) => {
    setExpandedSubMenu(prev => (prev === menuName ? null : menuName));
  };

  return (
    <>
      <header className={`sobha-navbar ${scrolled ? 'is-scrolled' : ''} ${megaMenuOpen ? 'mega-open' : ''} ${mobileMenuOpen ? 'mobile-open' : ''} ${darkText ? 'dark-text' : ''}`}>
        <div className="navbar-container">

          {/* Left Navigation (Desktop) */}
          <nav className="nav-left desktop-only">
            <a href="/about" className="nav-link">ABOUT US</a>
            <div
              className="nav-link mega-trigger"
              onClick={(e) => {
                e.stopPropagation();
                setMegaMenuOpen(!megaMenuOpen);
              }}
            >
              PROJECTS
              <ChevronDown
                size={14}
                style={{
                  marginLeft: '6px',
                  marginTop: '1px',
                  transition: 'transform 0.3s ease',
                  transform: megaMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </div>
          </nav>

          {/* Center Logo */}
          <a href="/" className="nav-logo-container" style={{ textDecoration: 'none' }}>
            <img 
              src={(isSearchOpen || (darkText && !scrolled && !megaMenuOpen)) ? "/images/black-logo.png" : "/images/white-logo.png"} 
              alt="Aadhithya Mohan Properties" 
              className="nav-logo-img" 
              style={{ height: '34px', width: 'auto', objectFit: 'contain', transition: 'all 0.3s ease' }} 
            />
          </a>

          {/* Right Navigation (Desktop) */}
          <nav className="nav-right desktop-only">
            <a href="/careers" className="nav-link">CAREERS</a>
            <a href="/contact" className="nav-link">CONTACT US</a>
            <button className="icon-button" onClick={() => setIsSearchOpen(true)} aria-label="Open Search">
              <Search size={18} strokeWidth={2} />
            </button>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <div className="mobile-menu-trigger-container">
            <button
              className="icon-button mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mega Menu Dropdown (Rendered outside header to prevent backdrop-filter nesting issues) */}
      <div
        className={`mega-menu ${megaMenuOpen ? 'visible' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mega-menu-content">

          {/* Column 1: Categories */}
          <div
            className="mega-categories"
            style={{ borderRight: activeCategory ? '1px solid rgba(0,0,0,0.08)' : 'none' }}
          >
            <div className="mega-column-title">CATEGORIES</div>
            {CATEGORIES.map(cat => (
              <div
                key={cat.id}
                className={`mega-category-item ${activeCategory && activeCategory.id === cat.id ? 'active' : ''}`}
                onMouseEnter={() => {
                  setActiveCategory(cat);
                  setActiveProject(cat.projects[0]);
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <a href={`/projects?category=${cat.id}`}>{cat.name}</a>
              </div>
            ))}
          </div>

          {/* Column 2: Projects */}
          <div
            className="mega-projects"
            style={{
              opacity: activeCategory ? 1 : 0,
              visibility: activeCategory ? 'visible' : 'hidden',
              transform: activeCategory ? 'translateX(0)' : 'translateX(-10px)',
              transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s'
            }}
          >
            {activeCategory && (
              <>
                <div className="mega-column-title">{activeCategory.name}</div>
                {activeCategory.projects.map(proj => (
                  <div
                    key={proj.id}
                    className={`mega-project-item ${activeProject?.id === proj.id ? 'active' : ''}`}
                    onMouseEnter={() => setActiveProject(proj)}
                  >
                    <a href={proj.url || (proj.id === 'r2' ? '/crystal-moonlight-villa' : `/projects?category=${activeCategory.id}`)}>
                      <div className="mega-project-name">{proj.name}</div>
                      {proj.location && <div className="mega-project-location">{proj.location}</div>}
                    </a>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Column 3: Image Display */}
          <div className="mega-image-container">
            <img
              src={activeProject ? activeProject.img : (activeCategory ? activeCategory.img : CATEGORIES[0].img)}
              alt="Category Preview"
              className="mega-image fade-in-image"
              key={activeProject ? activeProject.id : (activeCategory ? activeCategory.id : 'default')}
            />
          </div>

        </div>
      </div>

      {/* â”€â”€ Mobile Navigation Drawer Overlay â”€â”€ */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-drawer-header">
          {/* Brand Logo inside mobile drawer */}
          <img
            src="/images/logo.png"
            alt="Brand Logo"
            className="mobile-drawer-logo"
          />
          {/* Header containing X close button */}
          <button
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="mobile-nav-menu">

          {/* Link: ABOUT US */}
          <div className="mobile-nav-item-wrapper">
            <a href="/about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-main-link simple-link">ABOUT US</a>
          </div>

          {/* Accordion Item: PROJECTS */}
          <div className="mobile-nav-item-wrapper">
            <div className="mobile-nav-header-row" onClick={() => toggleSubMenu('projects')}>
              <span className="mobile-nav-main-link">PROJECTS</span>
              <ChevronDown
                size={18}
                className={`mobile-chevron ${expandedSubMenu === 'projects' ? 'is-rotated' : ''}`}
              />
            </div>
            <div className={`mobile-sub-menu ${expandedSubMenu === 'projects' ? 'is-expanded' : ''}`}>
              {CATEGORIES.map(cat => (
                <div key={cat.id} className="mobile-category-group">
                  <div
                    className="mobile-category-header"
                    onClick={() => setExpandedCategory(prev => (prev === cat.id ? null : cat.id))}
                  >
                    <span className={`mobile-category-title ${expandedCategory === cat.id ? 'active' : ''}`}>
                      {cat.name}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`mobile-category-arrow ${expandedCategory === cat.id ? 'is-rotated' : ''}`}
                    />
                  </div>

                  <div className={`mobile-project-list ${expandedCategory === cat.id ? 'is-expanded' : ''}`}>
                    {cat.projects.map(proj => (
                      <a
                        key={proj.id}
                        href={proj.url || (proj.id === 'r2' ? '/crystal-moonlight-villa' : `/projects?category=${cat.id}`)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mobile-project-link"
                      >
                        <div className="mobile-project-name">{proj.name}</div>
                        {proj.location && <div className="mobile-project-location">{proj.location}</div>}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-sub-link mobile-all-projects-link"
              >
                All Projects
              </a>
            </div>
          </div>

          {/* Link: CAREERS */}
          <div className="mobile-nav-item-wrapper">
            <a href="/careers" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-main-link simple-link">CAREERS</a>
          </div>

          {/* Link: CONTACT US */}
          <div className="mobile-nav-item-wrapper">
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-main-link simple-link">CONTACT US</a>
          </div>

          {/* Social links with underlines (Text only, no icons) */}
          <div className="mobile-social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mobile-social-link">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mobile-social-link">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mobile-social-link">YouTube</a>
          </div>

        </nav>
      </div>

      {/* Full Screen Search Overlay */}
      <div className={`search-overlay ${isSearchOpen ? 'visible' : ''}`}>
        <button className="search-overlay-close" onClick={() => setIsSearchOpen(false)} aria-label="Close Search">
          <X size={36} strokeWidth={1.5} />
        </button>
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search size={32} className="search-input-icon" />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search projects, locations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus={isSearchOpen}
            />
          </div>
          
          <div className="search-results">
            {searchQuery.trim() !== '' && searchResults.length === 0 && (
              <div className="search-no-results">No projects found for "{searchQuery}"</div>
            )}
            {searchResults.map((proj, idx) => (
              <a 
                href={proj.url || '/crystal-moonlight-villa'} 
                className="search-result-item" 
                key={proj.id} 
                onClick={() => setIsSearchOpen(false)}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="search-result-img">
                  <img src={proj.img} alt={proj.name} />
                </div>
                <div className="search-result-info">
                  <h4 className="search-result-title">{proj.name}</h4>
                  {proj.location && <p className="search-result-loc">{proj.location}</p>}
                </div>
                <div className="search-result-action">
                  <ArrowRight size={22} className="search-result-arrow" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .sobha-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          z-index: 99999;
          // background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
          transition: all 0.4s ease;
        }

        .sobha-navbar.mobile-open{
          background: transparent !important;
        }

        .sobha-navbar.is-scrolled, .sobha-navbar.mega-open {
          background: rgba(30, 30, 30, 0.54) !important;
          backdrop-filter: blur(30px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(30px) saturate(180%) !important;
        }

        .sobha-navbar.dark-text:not(.is-scrolled):not(.mega-open) .nav-link,
        .sobha-navbar.dark-text:not(.is-scrolled):not(.mega-open) .text-logo-wrapper,
        .sobha-navbar.dark-text:not(.is-scrolled):not(.mega-open) .icon-button {
          color: #000000 !important;
        }

        .navbar-container {
          max-width: calc(var(--container-width) + 32px);
          margin: 0 auto;
          padding: 0 40px;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }

        .nav-logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nav-logo {
          height: 40px;
          transition: all 0.4s ease;
        }

        .nav-left {
          display: flex;
          gap: 40px;
          align-items: center;
          justify-content: center;
        }

        .nav-right {
          display: flex;
          gap: 40px;
          align-items: center;
          justify-content: center; 
        }

        .nav-link {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: #ffffffff;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s ease;
          position: relative;
          cursor: pointer;
          height: 60px; /* Match header height for perfect y-axis centering */
          display: flex;
          align-items: center;
          letter-spacing: 0.1em;
        }

        .text-logo-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #ffffffff;
          transition: color 0.3s ease;
        }

        .text-logo-monogram-img {
          width: 38px;
          height: 38px;
          background-color: currentColor;
          -webkit-mask-image: url('/images/logo-curser-v2.png');
          -webkit-mask-size: contain;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-image: url('/images/logo-curser-v2.png');
          mask-size: contain;
          mask-repeat: no-repeat;
          mask-position: center;
        }

        .text-logo-divider {
          width: 1px;
          height: 34px;
          background-color: currentColor;
          opacity: 0.3;
        }

        .text-logo-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: var(--font-sans);
          text-transform: uppercase;
        }

        .text-logo-primary {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.25em;
          line-height: 1.2;
        }

        .text-logo-secondary {
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.35em;
          opacity: 0.7;
          line-height: 1.2;
          margin-top: 2px;
        }

        .is-scrolled .text-logo-wrapper, .sobha-navbar.mega-open .text-logo-wrapper {
          color: #ffffffff;
        }

        .nav-link:hover {
          color: #b48564 !important;
        }

        .is-scrolled .nav-link, .sobha-navbar.mega-open .nav-link {
          color: #ffffffff;
        }
          

        .icon-button {
          background: none;
          border: none;
          color: #ffffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          height: 60px;
          transition: color 0.3s ease;
        }

        .is-scrolled .icon-button, .sobha-navbar.mega-open .icon-button{
          color: #ffffffff;
        }

        .mobile-menu-trigger-container {
          display: none;
          justify-content: flex-end;
          align-items: center;
        }

        .mobile-menu-btn {
          height: 40px;
          width: 40px;
        }

        .mega-menu {
          position: fixed;
          top: 60px;
          left: 50%;
          width: calc(100% - 80px);
          max-width: 1320px;
          background: url("/images/hero_placeholders/chinese-city.jpg") left center / cover no-repeat;
          opacity: 0;
          visibility: hidden;
          transform: translate(-50%, -10px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-top: none;
          cursor: default;
          z-index: 9999;
          overflow: hidden;
        }

        .mega-menu::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          z-index: 1;
        }

        .mega-menu.visible {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, 0);
        }

        .mega-menu-content {
          width: 100%;
          padding: 24px 40px;
          display: grid;
          grid-template-columns: 250px 300px 1fr; /* Categories, Projects, Image */
          gap: 30px;
          min-height: 280px;
          box-sizing: border-box;
          position: relative;
          z-index: 2;
        }

        .mega-categories, .mega-projects {
          display: flex;
          flex-direction: column;
          padding-top: 10px;
          padding-right: 30px;
          border-right: 1px solid rgba(0,0,0,0.08);
        }

        .mega-column-title {
          font-size: 13px;
          font-weight: 600;
          color: #000000ff;
          text-transform: uppercase;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          letter-spacing: 0.08em;
        }

        .mega-projects .mega-column-title {
          padding-left: 0;
        }

        .mega-category-item a {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: #000000ff;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          display: block;
          padding: 6px 0px;
          border-radius: 8px;
          letter-spacing: 0.05em;
        }

        .mega-category-item.active a, .mega-category-item:hover a {
          color: #b48564; /* Brand accent color */
          transform: none;
        }

        .mega-project-item a {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: var(--color-text-dark);
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          padding: 6px 0;
          letter-spacing: 0.05em;
        }

        .mega-project-name {
          font-size: 13px;
          font-weight: 400;
          color: inherit;
          text-transform: uppercase;
        }

        .mega-project-location {
          font-size: 10px;
          font-weight: 400;
          color: #888888;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 2px;
          transition: color 0.3s ease;
        }

        .mega-project-item.active a, .mega-project-item:hover a {
          color: #b48564;
        }

        .mega-project-item.active .mega-project-location, .mega-project-item:hover .mega-project-location {
          // color: #b48564;
          opacity: 0.85;
        }

        .mega-image-container {
          width: 100%;
          height: 450px;
          overflow: hidden;
          background: #f5f5f5;
        }

        .mega-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .fade-in-image {
          animation: megaImgFade 0.6s ease forwards;
        }

        @keyframes megaImgFade {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }

        /* â”€â”€ Mobile Drawer Panel (White Transparent/Glass Style) â”€â”€ */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 480px;
          height: 100vh;
          z-index: 99999;
          background: rgba(255, 255, 255, 0.85); /* White transparent */
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          border-left: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-nav-drawer.is-open {
          transform: translateX(0);
        }

        .mobile-nav-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          height: 60px;
        }

        .mobile-drawer-logo {
          height: 32px;
          width: auto;
          object-fit: contain;
        }

        .mobile-drawer-close {
          background: none;
          border: none;
          color: #000000;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease;
        }

        .mobile-drawer-close:hover {
          opacity: 0.6;
        }

        .mobile-nav-menu {
          flex: 1;
          overflow-y: auto;
          padding: 20px 40px 60px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .mobile-nav-item-wrapper {
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding-bottom: 16px;
        }

        .mobile-nav-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .mobile-nav-main-link {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 400;
          color: #000000;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.05em;
          display: block;
        }

        .mobile-nav-main-link.simple-link {
          padding-bottom: 0;
        }

        .mobile-chevron {
          color: #000000;
          transition: transform 0.3s ease;
        }

        .mobile-chevron.is-rotated {
          transform: rotate(180deg);
        }

        .mobile-sub-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), margin-top 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-sub-menu.is-expanded {
          max-height: 250px;
          margin-top: 16px;
        }

        .mobile-sub-link {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: #444444;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.04em;
          padding: 4px 0;
          transition: color 0.3s ease;
        }

        .mobile-sub-link:hover {
          color: #b48564;
        }

        /* â”€â”€ Nested Mobile Menu Category List styles â”€â”€ */
        .mobile-category-group {
          margin-bottom: 8px;
        }

        .mobile-category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          padding: 6px 0;
          border-bottom: 1px solid rgba(0,0,0,0.03);
        }

        .mobile-category-title {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: #333333;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 0.04em;
          padding: 4px 0;
          transition: color 0.3s ease;
        }

        .mobile-category-title.active {
          color: var(--color-gold, #b48564);
        }

        .mobile-category-arrow {
          transition: transform 0.3s ease;
          color: #666;
        }

        .mobile-category-arrow.is-rotated {
          transform: rotate(180deg);
        }

        .mobile-project-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 16px;
          margin-top: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), margin-top 0.3s ease;
        }

        .mobile-project-list.is-expanded {
          max-height: 300px;
          margin-top: 8px;
        }

        .mobile-project-link {
          font-family: var(--font-sans);
          font-size: 12px;
          color: #555555;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 4px 0;
          display: flex;
          flex-direction: column;
          transition: color 0.3s ease;
        }

        .mobile-project-name {
          font-size: 12px;
          color: inherit;
        }

        .mobile-project-location {
          font-size: 9px;
          font-weight: 400;
          color: #888888;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 1px;
        }

        .mobile-project-link:hover {
          color: var(--color-gold, #b48564);
        }

        .mobile-all-projects-link {
          font-weight: 400;
          margin-top: 12px;
          display: block;
          border-top: 1px solid rgba(0,0,0,0.06);
          padding-top: 12px;
        }

        /* â”€â”€ Mobile Social Links â”€â”€ */
        .mobile-social-links {
          margin-top: auto;
          display: flex;
          gap: 0;
          padding-top: 40px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .mobile-social-link {
          font-size: 11px;
          font-weight: 400;
          color: #000000;
          text-decoration: none;
          text-transform: uppercase;
          font-family: var(--font-sans);
          letter-spacing: 0.12em;
          border-right: 1px solid rgba(0, 0, 0, 0.15);
          padding: 0 16px;
          line-height: 1;
          transition: color 0.3s ease;
        }

        .mobile-social-link:first-child {
          padding-left: 0;
        }

        .mobile-social-link:last-child {
          border-right: none;
          padding-right: 0;
        }

        .mobile-social-link:hover {
          color: var(--color-gold, #b48564);
        }

        /* â”€â”€ Responsive Queries â”€â”€ */
        @media (max-width: 900px) {
          .desktop-only {
            display: none !important;
          }

          .mobile-menu-trigger-container {
            display: flex;
          }

          .navbar-container {
            grid-template-columns: auto 1fr;
            padding: 0 24px;
          }

          .nav-logo-container {
            justify-content: flex-start;
          }
          
          .sobha-navbar {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
        }

        /* ── Search Overlay ── */
        .search-overlay {
          position: fixed;
          inset: 0;
          background: rgba(255, 255, 255, 0.98);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
          overflow-y: auto;
        }

        .search-overlay.visible {
          opacity: 1;
          pointer-events: auto;
        }

        .search-overlay-close {
          position: absolute;
          top: 40px;
          right: 60px;
          background: transparent;
          border: none;
          color: #111111;
          cursor: pointer;
          transition: transform 0.3s ease;
          z-index: 2;
        }

        .search-overlay-close:hover {
          transform: rotate(90deg);
        }

        .search-container {
          width: 100%;
          max-width: 900px;
          margin: 120px auto 60px;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          border-bottom: 2px solid #111111;
          padding-bottom: 16px;
          margin-bottom: 60px;
        }

        .search-input-icon {
          color: #b48564;
          margin-right: 24px;
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: var(--font-heading);
          font-size: clamp(32px, 5vw, 48px);
          color: #111111;
        }

        .search-input::placeholder {
          color: rgba(0, 0, 0, 0.15);
        }

        .search-results {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .search-no-results {
          font-family: var(--font-sans);
          font-size: 18px;
          color: #888888;
          text-align: center;
          padding: 40px 0;
        }

        .search-result-item {
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          padding: 16px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(10px);
        }

        .search-overlay.visible .search-result-item {
          animation: fadeUpSearch 0.5s ease forwards;
        }

        .search-result-item:hover {
          border-color: rgba(180, 133, 100, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px) !important;
        }

        .search-result-img {
          width: 100px;
          height: 70px;
          border-radius: 4px;
          overflow: hidden;
          margin-right: 24px;
          flex-shrink: 0;
        }

        .search-result-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .search-result-info {
          flex: 1;
        }

        .search-result-title {
          font-family: var(--font-heading);
          font-size: 24px;
          color: #111111;
          margin: 0 0 4px 0;
          transition: color 0.3s ease;
        }

        .search-result-item:hover .search-result-title {
          color: #b48564;
        }

        .search-result-loc {
          font-family: var(--font-sans);
          font-size: 13px;
          color: #888888;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .search-result-action {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111111;
          transition: all 0.3s ease;
        }

        .search-result-item:hover .search-result-action {
          background: #111111;
          color: #ffffff;
          border-color: #111111;
        }

        @keyframes fadeUpSearch {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .search-overlay-close {
            top: 20px;
            right: 20px;
          }
          .search-container {
            margin-top: 80px;
            padding: 0 20px;
          }
          .search-input-icon {
            margin-right: 16px;
          }
          .search-result-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .search-result-img {
            width: 100%;
            height: 160px;
            margin-right: 0;
            margin-bottom: 16px;
          }
          .search-result-action {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
