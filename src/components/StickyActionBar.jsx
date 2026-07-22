import React, { useState, useEffect } from 'react';
import { FileText, Phone } from 'lucide-react';

export default function StickyActionBar({ onEnquire }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar only after scrolling past 300px (i.e. out of the main hero fold)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnquireClick = (e) => {
    if (onEnquire) {
      onEnquire(e);
      return;
    }

    // Dispatch global event so pages with modals can open them
    const event = new CustomEvent('open-inquiry-modal', { cancelable: true });
    window.dispatchEvent(event);

    // If not prevented (i.e. no page intercepted to show a modal), fallback to scrolling
    if (event.defaultPrevented === false) {
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div className={`mobile-sticky-bar ${isVisible ? 'visible' : ''}`}>
        <button className="mobile-sticky-item" onClick={handleEnquireClick}>
          <FileText size={18} className="mobile-sticky-icon" />
          <span className="mobile-sticky-label">Brochure</span>
        </button>
        <a 
          href="https://wa.me/919000000000" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mobile-sticky-item"
        >
          <svg fill="currentColor" width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="mobile-sticky-icon">
            <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"/>
            <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"/>
          </svg>
          <span className="mobile-sticky-label">WhatsApp</span>
        </a>
        <button className="mobile-sticky-item" onClick={handleEnquireClick}>
          <Phone size={18} className="mobile-sticky-icon" />
          <span className="mobile-sticky-label">Contact Us</span>
        </button>
      </div>

      <style>{`
        /* â”€â”€ Mobile Sticky Bottom Action Bar â”€â”€ */
        .mobile-sticky-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 64px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.04);
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          z-index: 999;
          transform: translateY(100%);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        }

        .mobile-sticky-bar.visible {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-sticky-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: none;
          border: none;
          color: var(--color-primary);
          text-decoration: none;
          padding: 8px 0;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .mobile-sticky-item:not(:last-child) {
          border-right: 1px solid rgba(0, 0, 0, 0.06);
        }

        .mobile-sticky-icon {
          color: var(--color-primary);
          opacity: 0.85;
        }

        .mobile-sticky-label {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-primary);
        }
      `}</style>
    </>
  );
}
