import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar({ projectTitle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-new ${scrolled ? 'is-scrolled' : ''}`}>
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
              <div className="mega-menu-dropdown">
                <div className="mega-menu-grid">
                  
                  {/* Column 1: Residential */}
                  <div className="mega-menu-col col-signature">
                    <h5 className="mega-col-title">RESIDENTIAL</h5>
                    <div className="signature-grid">
                      <div className="signature-item">
                        <a href="#projects" className="sig-proj-title">Modern Luxury Villa</a>
                        <span className="sig-proj-loc">ADYAR, CHENNAI</span>
                      </div>
                      <div className="signature-item">
                        <a href="#projects" className="sig-proj-title">Family House</a>
                        <span className="sig-proj-loc">ECR, CHENNAI</span>
                      </div>
                      <div className="signature-item">
                        <a href="/crystal-moonlight-villa" className="sig-proj-title">Crystal Moonlight Villa</a>
                        <span className="sig-proj-loc">MEDAVAKKAM, CHENNAI</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 2: Plotted Developments */}
                  <div className="mega-menu-col col-plotted">
                    <h5 className="mega-col-title">PLOTTED DEVELOPMENTS</h5>
                    <div className="plotted-list">
                      <div className="signature-item">
                        <a href="#projects" className="sig-proj-title">Eco-Tech Style</a>
                        <span className="sig-proj-loc">OMR, CHENNAI</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Column 3: Categories */}
                  <div className="mega-menu-col col-all">
                    <h5 className="mega-col-title">CATEGORIES</h5>
                    <ul className="all-proj-list">
                      <li><a href="#projects">Residential</a></li>
                      <li><a href="#projects">Plotted</a></li>
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
          <div className="nav-search-icon">
            <Search size={17} strokeWidth={2} />
          </div>
          
        </div>

        {/* Mobile Toggle Button */}
        <button className="mobile-toggle show-mobile" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
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
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          transition: background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .navbar-new.is-scrolled {
          background-color: rgba(6, 11, 29, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
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
          transition: color 0.25s ease;
          padding: 25px 0;
          cursor: pointer;
        }
        
        .nav-link-new:hover, .nav-item-mega-dropdown:hover .nav-link-new {
          color: #ba944c;
        }
        
        .nav-search-icon {
          color: #ffffff;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: color 0.25s ease;
        }
        .nav-search-icon:hover {
          color: #ba944c;
        }



        .mega-menu-dropdown {
          position: absolute;
          top: 60px;
          right: 24px;
          width: 580px;
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 0 0 8px 8px;
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.12);
          padding: 24px 28px;
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: top center;
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
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
          transition: color 0.2s ease;
        }
        .sig-proj-title:hover {
          color: #ba944c;
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
          transition: color 0.2s;
        }
        .all-proj-list a:hover {
          color: #ba944c;
        }
        
        /* Mobile Toggle */
        .mobile-toggle {
          display: none;
          background: transparent;
          color: #ffffff;
          cursor: pointer;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #060b1d;
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
        }
        
        .mobile-search {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          color: #94a3b8;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px 24px;
          border-radius: 30px;
          margin-top: 10px;
        }

        .nav-project-title-wrapper {
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateX(-15px);
          transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
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
          color: #ba944c;
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
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
