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
              <img src="/images/logo.png" alt="Aadhithya Mohan Logo" className="footer-logo" />
              {/* <div className="footer-brand-name">AADHITHYA MOHAN</div> */}
            </div>
            
            <h3 className="footer-tagline">
              Building spaces.<br />
              Enriching <span className="highlight-italic">lives.</span>
            </h3>
            
            <p className="footer-desc">
              Thoughtfully designed spaces in prime locations,<br />
              enriching lives and creating long term value<br />
              for generations.
            </p>
          </div>
          
          {/* Offerings Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">OUR OFFERINGS</h4>
            <ul className="footer-links">
              <li><a href="#projects">Residential</a></li>
              <li><a href="#projects">Commercial</a></li>
              <li><a href="#projects">Plotted Developments</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">COMPANY</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Our Projects</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#news">News & Media</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">SUPPORT</h4>
            <ul className="footer-links">
              <li><a href="#faqs">FAQS</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
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
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="X (formerly Twitter)">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
              <p className="contact-value">+91 xxxxxxxxxx</p>
              <p className="contact-value font-email">info@aadithya.com</p>
            </div>
            <div className="contact-col-address">
              <p className="address-value">
                No. 123, Anna Salai, Chennai,<br />
                Tamil Nadu - 600006
              </p>
            </div>
          </div>
          
        </div>

        {/* Copyright Row */}
        <div className="footer-copyright-row">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Aadhithya Mohan. All Rights Reserved.
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
          font-family: var(--font-sans);
          color: #475569;
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
          gap: var(--space-3);
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
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.28em;
          color: var(--color-text-dark);
          margin-top: 4px;
        }

        .footer-tagline {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 400;
          line-height: 1.25;
          color: var(--color-text-dark);
          letter-spacing: -0.01em;
        }



        .footer-desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--color-text-muted);
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-text-dark);
          margin-bottom: 4px;
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
          font-size: 13px;
          color: #475569;
          transition: color 0.25s ease, padding-left 0.25s ease;
        }

        .footer-links a:hover {
          color: var(--color-gold-accent);
          padding-left: 4px;
        }

        .footer-col-subscribe {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .subscribe-desc {
          font-size: 13px;
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
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .subscribe-input:focus {
          border-color: var(--color-gold-accent);
          box-shadow: 0 2px 12px rgba(19, 56, 37, 0.12);
        }

        .subscribe-input::placeholder {
          color: var(--color-text-muted-light);
        }

        .footer-socials {
          display: flex;
          gap: 10px;
          margin-top: var(--space-1);
          align-items: center;
        }

        .social-icon-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 0.8px solid var(--color-border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          background: var(--color-bg-light);
          transition: all 0.3s var(--ease-luxury);
        }

        .social-icon-btn:hover {
          color: #ffffff;
          background: var(--color-gold-accent);
          border-color: var(--color-gold-accent);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 12px rgba(19, 56, 37, 0.2);
        }

        .follow-us-label {
          font-family: var(--font-heading);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-text-dark);
          margin-top: 4px;
        }

        /* ── Lower Footer Row ── */
        .footer-lower {
          position: relative;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: flex-end;
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
          grid-template-columns: 1.1fr 1fr;
          gap: var(--space-4);
          padding-bottom: 60px;
        }

        .contact-col-touch {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .contact-value {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 400;
          color: #475569;
          line-height: 1.2;
          transition: color 0.25s ease;
        }
        .contact-value:hover {
          color: var(--color-gold-accent);
        }

        .font-email {
          color: #475569;
        }

        .contact-col-address {
          display: flex;
          align-items: flex-end;
          padding-bottom: 4px;
        }

        .address-value {
          font-size: 15px;
          line-height: 1.7;
          color: #475569;
        }

        /* ── Responsive ── */
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
            font-size: 24px;
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
          border-top: 0.8px solid #f1f5f9;
          padding: var(--space-3) 0;
          margin-top: var(--space-5);
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
