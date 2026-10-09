import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        
        {/* Upper Footer Row */}
        <div className="footer-upper">
          
          {/* Logo & Brand Column */}
          <div className="footer-col-brand">
            <div className="footer-logo-wrap">
              <img src="/images/black-logo.png" alt="Aadhithya Mohan Properties" className="footer-logo" style={{ height: '54px', width: 'auto', objectFit: 'contain' }} />
            </div>
            
            <h3 className="footer-tagline">
              Building spaces.<br />
              Enriching lives.
            </h3>
            
            <p className="footer-desc">
              Thoughtfully designed spaces in prime locations,
              enriching lives and creating long term value
              for generations.
            </p>
          </div>
          
          {/* Offerings Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">PROJECTS</h4>
            <ul className="footer-links">
              <li><a href="/projects">Villas</a></li>
              <li><a href="/projects">Apartments</a></li>
              <li><a href="/projects">Plots</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">COMPANY</h4>
            <ul className="footer-links">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/projects">Our Projects</a></li>
              <li><a href="/career">Careers</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">SUPPORT</h4>
            <ul className="footer-links">
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/contact-us">Customer Support</a></li>
              <li><a href="/contact-us">Enquiries</a></li>
            </ul>
          </div>
          
          {/* Stay Updated Column */}
          <div className="footer-col-subscribe">
            <h4 className="footer-col-title">STAY UPDATED</h4>
            <p className="subscribe-desc">
              Subscribe to our newsletter and be the first to know about our latest projects and updates.
            </p>
            <div className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="subscribe-input"
                aria-label="Email address for newsletter"
              />
            </div>
            
            {/* Social Icons row */}
            <div className="footer-socials">
              <a href="https://www.instagram.com/aadhithyamohanproperties/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/AADHITHYAMOHANPROPERTIES/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.886C10.18 0 9 1.434 9 4.355V8z"/></svg>
              </a>
              
              <a href="https://in.linkedin.com/in/aadhithya-mohan-properties-0aa242391" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              <a href="https://youtube.com/@aadhithyamohanpropertiesllp?si=AsuEvq17-lxOs2Hr" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
            
            <div className="follow-us-label">FOLLOW US</div>
          </div>
        </div>
        
        {/* Lower Footer Row */}
        <div className="footer-lower">
          
          {/* Blueprint Image Container */}
          <div className="footer-blueprint-container">
            <img src="/images/footer-tran.png" alt="" className="footer-blueprint" aria-hidden="true" />
          </div>
          
          {/* Get In Touch */}
          <div className="footer-contact-info">
            <div className="contact-col-touch">
              <h4 className="footer-col-title">GET IN TOUCH</h4>
              <a href="tel:+919585044440" className="contact-value" style={{ textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="contact-icon"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/></svg>
                <span>+91 9585044440</span>
              </a>
              <a href="mailto:info@aadhithyamohanproperties.com" className="contact-value font-email" style={{ textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="contact-icon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <span>info@aadhithyamohanproperties.com</span>
              </a>
              <div className="address-value-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="contact-icon address-icon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                <p className="address-value">
                  2nd Floor, No: 48/52, Jawaharlal Nehru Salai, opposite to CMBT Flyover, Jai Nagar, Koyambedu, Chennai, Tamil Nadu 600107
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Aadhithya+Mohan+Properties+LLP/@13.0701342,80.205387,17z/data=!4m6!3m5!1s0x3cd4533a14d0a15:0x4c02f9b06a7bc8e1!8m2!3d13.0701342!4d80.205387!16s%2Fg%2F11wpzvr8tj"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-google-review"
                aria-label="Google Reviews"
              >
                <img
                  src="/images/google-review.png"
                  alt="Google Reviews"
                  className="google-review-img"
                />
              </a>
            </div>
          </div>
          
        </div>

        {/* Copyright Row */}
        <div className="footer-copyright-row">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Aadhithya Mohan Properties. All Rights Reserved.
          </p>
          <p className="copyright-design">
            Designed & Developed by <a href="https://markvtechdigital.com" target="_blank" rel="noopener noreferrer" className="credits-link">Markvtech</a>
          </p>
        </div>
        
      </div>
      
      <style>{`
        .footer-section {
          background-color: var(--color-bg-light);
          padding: var(--space-8) 0 0px;

          color: var(--color-text-muted);
          overflow: hidden;
          border-top: 1.5px solid var(--color-gold-accent);
        }

        .footer-upper {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1fr 2fr;
          gap: var(--space-6);
        }

        .footer-col-brand {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .footer-logo-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .footer-logo {
          height: 48px;
          width: auto;
          object-fit: contain;
        }

        .footer-brand-name {

          font-size: 13px;
          font-weight: 400;

          color: var(--color-text-dark);
          margin-top: 4px;
        }

        .footer-tagline {

          font-size: 28px;
          font-weight: 400;
          line-height: 1.25;
          color: var(--color-text-dark);

        }



        .footer-desc {
          font-size: 15px;
          font-weight: 350px;
          line-height: 1.6;
          color: var(--color-text-dark);
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .footer-col-title {
          font-size: 18px;
          font-weight: 400;
          color: var(--color-text-dark);
          margin-bottom: 8px;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          width: fit-content;
          display: inline-block;
          letter-spacing: 0.04em;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          font-size: 15px;
          font-weight: 350;
          color: var(--color-text-muted);
          transition: color 0.25s ease, padding-left 0.25s ease;
          letter-spacing: 0;
        }

        .footer-links a:hover {
          color: var(--color-gold-accent);
          padding-left: 4px;
        }

        .footer-col-subscribe {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .subscribe-desc {
          font-size: 15px;
          font-weight: 350px;
          line-height: 1.5;
          color: var(--color-text-muted);
        }

        .subscribe-form {
          width: 100%;
        }

        .subscribe-input {
          width: 100%;
          padding: 12px 16px;
          background: var(--color-bg-light);
          border: 0.8px solid var(--color-border-light);
          border-radius: 6px;
          font-family: inherit;
          font-size: 13px;
          color: var(--color-text-dark);
          outline: none;
          box-shadow: 0 2px 8px rgba(29, 53, 87, 0.03);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .subscribe-input:focus {
          border-color: var(--color-gold-accent);
          box-shadow: 0 2px 12px rgba(29, 53, 87, 0.12);
        }

        .subscribe-input::placeholder {
          color: var(--color-text-muted-light);
        }

        .footer-socials {
          display: flex;
          gap: 16px;
          margin-top: var(--space-2, 8px);
          align-items: center;
        }

        .social-icon-btn {
          width: auto;
          height: auto;
          border: none;
          background: transparent;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          padding: 2px;
          border-radius: 0;
          box-shadow: none;
          transition: color 0.25s ease, transform 0.25s ease;
          text-decoration: none;
        }

        

        .follow-us-label {

          font-size: 10px;
          font-weight: 400;

          color: var(--color-text-dark);
          margin-top: 4px;
        }

        /* â”€â”€ Lower Footer Row â”€â”€ */
        .footer-lower {
          position: relative;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: flex-end;
          margin-top: 48px;
        }

        .footer-blueprint-container {
          position: relative;
          margin-left: -24px;
          margin-bottom: -4px;
          align-self: flex-end;
        }

        .footer-blueprint {
          display: block;
          width: 100%;
          max-width: 540px;
          height: auto;
        }

        .footer-contact-info {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-4);
          padding-bottom: 60px;
        }

        .contact-col-touch {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-value {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 15px;
          font-weight: 350;
          color: var(--color-text-muted);
          line-height: 1.4;
          transition: color 0.25s ease;
        }

        .contact-value:hover {
          color: var(--color-gold-accent);
        }

        .contact-icon {
          flex-shrink: 0;
          color: var(--color-text-dark, #111111);
          opacity: 0.85;
          transition: color 0.25s ease, opacity 0.25s ease;
        }

        .contact-value:hover .contact-icon {
          color: var(--color-gold-accent, #b48564);
          opacity: 1;
        }

        .address-value-wrap {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin-top: 2px;
        }

        .address-icon {
          margin-top: 4px;
        }

        .address-value {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--color-text-muted);
          margin: 0;
        }

        .footer-google-review {
          display: inline-flex;
          align-items: center;
          margin-top: 8px;
          text-decoration: none;
          width: fit-content;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }


        .google-review-img {
          height: 84px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        /* â”€â”€ Responsive â”€â”€ */
        @media (max-width: 1024px) {
          .footer-upper {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-5);
          }
          .footer-col-brand {
            grid-column: span 2;
          }
          .footer-col-subscribe {
            grid-column: span 2;
            max-width: 450px;
          }
          .footer-lower {
            grid-template-columns: 1fr;
            gap: var(--space-5);
            align-items: flex-start;
          }
          .footer-blueprint-container {
            margin-left: 0;
            order: 2;
          }
          .footer-contact-info {
            order: 1;
            padding-bottom: 0;
          }
        }

        @media (max-width: 640px) {
          .footer-section {
            padding: var(--space-6) 0 0px;
          }
          .footer-upper {
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }
          .footer-col-brand, .footer-col-subscribe {
            grid-column: span 1;
          }
          .footer-tagline {
            font-size: 32px;
          }
          .footer-contact-info {
            grid-template-columns: 1fr;
            gap: var(--space-3);
          }
          .contact-col-address {
            align-items: flex-start;
          }
        }

        .footer-copyright-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(0, 0, 0, 0.12);
          padding: 20px 0;
          margin-top: 28px;
        }
        .copyright-text, .copyright-design {
          font-size: 12.5px;
          color: var(--color-text-muted-light);
        }
        .credits-link {
          color: var(--color-text-muted-light);
          text-decoration: underline;
          transition: color 0.25s ease;
        }
        .credits-link:hover {
          color: var(--color-gold-accent);
        }
        @media (max-width: 640px) {
          .footer-copyright-row {
            flex-direction: column;
            gap: 12px;
            text-align: center;
            padding: 20px 0;
            margin-top: var(--space-3);
          }
        }
      `}</style>
    </footer>
  );
}
