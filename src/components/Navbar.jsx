import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, Globe } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'villas',
    name: 'Villa',
    img: '/images/hero_placeholders/chinese-city.jpg',
    projects: [
      { id: 'r1', name: 'Modern Luxury Villa', img: '/images/hero_placeholders/chinese-city.jpg' },
      { id: 'r2', name: 'Crystal Moonlight Villa', img: '/images/hero_placeholders/bird-view-shanghai-china.jpg' },
      { id: 'v1', name: 'Sunset Villas', img: '/images/hero_placeholders/bird-view-shanghai-china.jpg' },
      { id: 'v2', name: 'Ocean View Villas', img: '/images/hero_placeholders/chinese-city.jpg' },
      { id: 'v3', name: 'Palm Grove Estate', img: '/images/hero_placeholders/bird-view-shanghai-china.jpg' }
    ]
  },
  {
    id: 'apartments',
    name: 'Apartments',
    img: '/images/hero_placeholders/chinese-city.jpg',
    projects: [
      { id: 'a1', name: 'Skyline Heights', img: '/images/hero_placeholders/bird-view-shanghai-china.jpg' },
      { id: 'a2', name: 'Urban Nexus', img: '/images/hero_placeholders/chinese-city.jpg' },
      { id: 'a3', name: 'The Pinnacle', img: '/images/hero_placeholders/bird-view-shanghai-china.jpg' }
    ]
  },
  {
    id: 'plotted',
    name: 'Plots',
    img: '/images/home/project-image-2.png',
    projects: [
      { id: 'p1', name: 'Ashok Nagar \u2013 Villa Plots', img: '/images/home/project-image-2.png', url: '/ashok-nagar-villa-plots-in-maduranthakam' }
    ]
  }
];

export default function Navbar({ darkText = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!megaMenuOpen) {
      setActiveCategory(null);
      setActiveProject(null);
    }
  }, [megaMenuOpen]);

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
            <div className="text-logo-wrapper">
              <div className="text-logo-monogram-img"></div>
              <div className="text-logo-divider"></div>
              <div className="text-logo-text">
                <span className="text-logo-primary">AADHITHYA MOHAN</span>
                <span className="text-logo-secondary">PROPERTIES</span>
              </div>
            </div>
          </a>

          {/* Right Navigation (Desktop) */}
          <nav className="nav-right desktop-only">
            <a href="/careers" className="nav-link">CAREERS</a>
            <a href="/contact" className="nav-link">CONTACT US</a>
            <button className="icon-button">
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
                    <a href={proj.url || `/projects/${proj.id}`}>{proj.name}</a>
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
                        {proj.name}
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
          font-size: 12px;
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
          letter-spacing: 0.15em;
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
          font-weight: 400;
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
          color: #444444;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          display: block;
          padding: 6px 0;
          letter-spacing: 0.05em;
        }

        .mega-project-item.active a, .mega-project-item:hover a {
          color: #b48564;
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
          transition: color 0.3s ease;
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
      `}</style>
    </>
  );
}
