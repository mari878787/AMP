import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Navbar({ projectTitle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navTheme, setNavTheme] = useState('dark');

  useEffect(() => {
    let active = true;
    const handleScroll = () => {
      if (!active) return;

      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 20);

      if (scrollPos < 50) {
        setNavTheme('dark');
        return;
      }

      requestAnimationFrame(() => {
        if (!active) return;

        // Find elements under the navbar level (e.g. y = 30px)
        const elements = document.elementsFromPoint(window.innerWidth / 2, 30);
        if (!elements || elements.length === 0) return;

        // Find the element behind/under the navbar
        const el = elements.find(item => !item.closest('.navbar-new') && !item.closest('.mobile-menu'));
        if (!el) return;

        const section = el.closest('section, footer, main, .project-sub-nav, .project-hero-section');
        if (!section) return;

        const className = section.className || '';
        const id = section.id || '';

        // Explicit checks for known dark/light sections
        if (
          className.includes('hero') ||
          className.includes('footer') ||
          id.includes('hero') ||
          id.includes('footer') ||
          className.includes('project-hero-section')
        ) {
          setNavTheme('dark');
          return;
        }

        const style = window.getComputedStyle(section);
        const bgColor = style.backgroundColor;

        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (match) {
            const r = parseInt(match[1]);
            const g = parseInt(match[2]);
            const b = parseInt(match[3]);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            setNavTheme(brightness < 140 ? 'dark' : 'light');
          } else {
            setNavTheme('light');
          }
        } else {
          setNavTheme('light');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      active = false;
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar-new ${scrolled ? 'is-scrolled' : ''} theme-${navTheme}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container nav-container-new">

        {/* Brand Logo on the Left */}
        <a href="/" className="logo-container-new">
          <img src="/images/logo.png" alt="Aadhithya Logo" className="nav-logo-new" />
          {projectTitle && (
            <div className={`nav-project-title-wrapper ${scrolled ? 'visible' : ''}`}>
              <span className="nav-title-divider">|</span>
              <span className="nav-project-title-text">{projectTitle}</span>
            </div>
          )}
        </a>

        {/* Navigation Menus on the Right */}
        <div className="nav-links-group hidden-mobile">

          {/* Projects Link with Mega Menu trigger */}
          <div
            className="nav-item-mega-dropdown"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <span className="nav-link-new uppercase">
              PROJECTS <ChevronDown />
            </span>

            {/* Mega Menu Dropdown */}
            {megaMenuOpen && (
              <div className="mega-menu-dropdown" role="menu">
                <div className="mega-menu-grid">

                  {/* Column 1: Residential */}
                  <div className="mega-menu-col col-signature">
                    <h5 className="mega-col-title">RESIDENTIAL</h5>
                    <div className="signature-grid">
                      <div className="signature-item">
                        <a href="#projects" className="sig-proj-title" role="menuitem">Modern Luxury Villa</a>
                        <span className="sig-proj-loc">ADYAR, CHENNAI</span>
                      </div>
                      <div className="signature-item">
                        <a href="#projects" className="sig-proj-title" role="menuitem">Family House</a>
                        <span className="sig-proj-loc">ECR, CHENNAI</span>
                      </div>
                      <div className="signature-item">
                        <a href="/crystal-moonlight-villa" className="sig-proj-title" role="menuitem">Crystal Moonlight Villa</a>
                        <span className="sig-proj-loc">MEDAVAKKAM, CHENNAI</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Plotted Developments */}
                  <div className="mega-menu-col col-plotted">
                    <h5 className="mega-col-title">PLOTTED DEVELOPMENTS</h5>
                    <div className="plotted-list">
                      <div className="signature-item">
                        <a href="#projects" className="sig-proj-title" role="menuitem">Eco-Tech Style</a>
                        <span className="sig-proj-loc">OMR, CHENNAI</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Categories */}
                  <div className="mega-menu-col col-all">
                    <h5 className="mega-col-title">CATEGORIES</h5>
                    <ul className="all-proj-list">
                      <li><a href="#projects" role="menuitem">Residential</a></li>
                      <li><a href="#projects" role="menuitem">Plotted</a></li>
                    </ul>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* About Link */}
          <a href="#about" className="nav-link-new uppercase">ABOUT</a>

          {/* Blog Link */}
          <a href="#blog" className="nav-link-new uppercase">BLOG</a>

          {/* Search Icon */}
          <div className="nav-search-icon" role="button" aria-label="Search" tabIndex={0}>
            <Search size={17} strokeWidth={2} />
          </div>

        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle show-mobile"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <div className="mobile-search">
            <Search size={16} />
            <span>Search</span>
          </div>
        </div>
      )}

      <style>{`
        .navbar-new {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: transparent;
          border-bottom: 0.8px solid rgba(255, 255, 255, 0.08);
          transition: background-color 0.4s var(--ease-luxury), 
                      backdrop-filter 0.4s var(--ease-luxury), 
                      border-color 0.4s var(--ease-luxury), 
                      box-shadow 0.4s var(--ease-luxury);
        }
        
        /* Default theme colors (transparent state) */
        .navbar-new.theme-dark {
          border-bottom: 0.8px solid rgba(255, 255, 255, 0.08);
        }
        .navbar-new.theme-dark .nav-link-new {
          color: #ffffff;
        }
        .navbar-new.theme-dark .nav-search-icon,
        .navbar-new.theme-dark .mobile-toggle {
          color: #ffffff;
        }
        .navbar-new.theme-dark .nav-title-divider {
          color: rgba(255, 255, 255, 0.25);
        }
        
        .navbar-new.theme-light {
          border-bottom: 0.8px solid rgba(0, 0, 0, 0.06);
        }
        .navbar-new.theme-light .nav-link-new {
          color: #1e293b;
        }
        .navbar-new.theme-light .nav-search-icon,
        .navbar-new.theme-light .mobile-toggle {
          color: #1e293b;
        }
        .navbar-new.theme-light .nav-title-divider {
          color: rgba(0, 0, 0, 0.15);
        }

        /* Apple Glass - Scrolled Dark Theme */
        .navbar-new.is-scrolled.theme-dark {
          background-color: rgba(6, 11, 29, 0.65);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border-bottom: 0.8px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
        }
        
        /* Apple Glass - Scrolled Light Theme */
        .navbar-new.is-scrolled.theme-light {
          background-color: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border-bottom: 0.8px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.04);
        }
        
        .nav-container-new {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
          position: relative;
        }
        
        .logo-container-new {
          display: flex;
          align-items: center;
        }
        
        .nav-logo-new {
          height: 44px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .nav-logo-new:hover {
          transform: scale(1.03);
        }
        
        .nav-links-group {
          display: flex;
          align-items: center;
          gap: 36px;
          height: 100%;
        }

        .nav-item-mega-dropdown {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .nav-item-dropdown {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
        }
        
        .nav-link-new {
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          display: inline-flex;
          align-items: center;
          transition: color 0.3s ease;
          padding: 25px 0;
          cursor: pointer;
          position: relative;
        }

        /* Underline micro-animation on hover */
        .navbar-new .nav-link-new::after {
          content: '';
          position: absolute;
          bottom: 18px;
          left: 0;
          width: 0;
          height: 1.5px;
          transition: width 0.35s var(--ease-luxury);
        }
        .theme-dark .nav-link-new::after {
          background: var(--color-sage);
        }
        .theme-light .nav-link-new::after {
          background: var(--color-primary);
        }
        .nav-link-new:hover::after,
        .nav-item-mega-dropdown:hover .nav-link-new::after {
          width: 100%;
        }
        
        .theme-dark .nav-link-new:hover, 
        .theme-dark .nav-item-mega-dropdown:hover .nav-link-new {
          color: var(--color-sage);
        }
        .theme-light .nav-link-new:hover, 
        .theme-light .nav-item-mega-dropdown:hover .nav-link-new {
          color: var(--color-primary);
        }
        
        .nav-search-icon {
          color: #ffffff;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .nav-search-icon:hover {
          color: var(--color-gold-accent);
          transform: scale(1.08);
        }



        .mega-menu-dropdown {
          position: absolute;
          top: 60px;
          right: 24px;
          width: 580px;
          border-radius: 0 0 12px 12px;
          padding: 24px 28px;
          animation: slideDown 0.35s var(--ease-luxury);
          transform-origin: top center;
          transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
        }

        .theme-dark .mega-menu-dropdown {
          background: rgba(6, 11, 29, 0.82);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 0.8px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.35);
        }

        .theme-light .mega-menu-dropdown {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          border: 0.8px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.08);
        }

        .theme-dark .mega-col-title {
          color: rgba(255, 255, 255, 0.55);
          border-bottom: 0.8px solid rgba(255, 255, 255, 0.1);
        }
        .theme-dark .sig-proj-title,
        .theme-dark .all-proj-list a {
          color: #ffffff;
        }
        .theme-dark .sig-proj-loc {
          color: #cbd5e1;
        }

        .theme-light .mega-col-title {
          color: rgba(0, 0, 0, 0.4);
          border-bottom: 0.8px solid rgba(0, 0, 0, 0.06);
        }
        .theme-light .sig-proj-title,
        .theme-light .all-proj-list a {
          color: #1e293b;
        }
        .theme-light .sig-proj-loc {
          color: #64748b;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mega-menu-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.2fr 0.8fr;
          gap: 28px;
        }

        .mega-menu-col {
          display: flex;
          flex-direction: column;
        }

        .mega-col-title {
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #ffffff;
          border-bottom: 0.8px solid rgba(255, 255, 255, 0.15);
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .signature-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .signature-item {
          display: flex;
          flex-direction: column;
        }

        .sig-proj-title {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 400;
          color: #ffffff;
          transition: color 0.25s ease, padding-left 0.25s ease;
        }
        .theme-dark .sig-proj-title:hover {
          color: var(--color-sage);
          padding-left: 4px;
        }
        .theme-light .sig-proj-title:hover {
          color: var(--color-primary);
          padding-left: 4px;
        }

        .sig-proj-loc {
          font-size: 9px;
          font-weight: 600;
          color: #cbd5e1;
          letter-spacing: 0.06em;
          margin-top: 3px;
        }

        .plotted-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .all-proj-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .all-proj-list a {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 400;
          color: #ffffff;
          transition: color 0.25s ease, padding-left 0.25s ease;
        }
        .theme-dark .all-proj-list a:hover {
          color: var(--color-sage);
          padding-left: 4px;
        }
        .theme-light .all-proj-list a:hover {
          color: var(--color-primary);
          padding-left: 4px;
        }
        
        /* Mobile Toggle */
        .mobile-toggle {
          display: none;
          background: transparent;
          color: #ffffff;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: var(--color-bg-navy);
          z-index: 99;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
        }
        
        .mobile-menu a {
          font-size: 24px;
          font-weight: 600;
          color: #f8fafc;
          font-family: var(--font-heading);
          transition: color 0.3s ease;
        }
        .mobile-menu a:hover {
          color: var(--color-gold-accent);
        }
        
        .mobile-search {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          color: #94a3b8;
          border: 0.8px solid rgba(255, 255, 255, 0.1);
          padding: 10px 24px;
          border-radius: 30px;
          margin-top: 10px;
          transition: border-color 0.3s ease;
        }
        .mobile-search:hover {
          border-color: rgba(19, 56, 37, 0.4);
        }

        .nav-project-title-wrapper {
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateX(-15px);
          transition: opacity 0.4s var(--ease-luxury), transform 0.4s var(--ease-luxury);
          pointer-events: none;
        }

        .nav-project-title-wrapper.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .nav-title-divider {
          color: rgba(255, 255, 255, 0.25);
          margin: 0 14px;
          font-size: 16px;
          font-weight: 200;
        }

        .nav-project-title-text {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 500;
          color: var(--color-gold-accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .show-mobile { display: none; }
        .hidden-mobile { display: flex; }

        @media (max-width: 768px) {
          .nav-project-title-wrapper {
            display: none;
          }
        }

        @media (max-width: 900px) {
          .hidden-mobile { display: none; }
          .show-mobile { display: flex; }
          .navbar-new {
            border-bottom: 0.8px solid rgba(255, 255, 255, 0.1);
          }
          .nav-container-new {
            height: 72px;
          }
          .nav-logo-new {
            height: 38px;
          }
        }
      `}</style>
    </header>
  );
}
