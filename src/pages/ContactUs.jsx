// Contact Us Page
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Mail, Phone, Clock, Send, Check, ArrowRight, Video, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

// Fix Leaflet marker icon asset paths in React builds
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom map marker icon (Gold home icon)
const createOfficeMarker = () => {
  return L.divIcon({
    className: 'custom-map-marker office-marker',
    html: `
      <div class="marker-pin-wrapper">
        <div class="marker-pin-pulse"></div>
        <div class="marker-pin-core">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
      </div>
    `,
    iconSize: [46, 46],
    iconAnchor: [23, 23],
    popupAnchor: [0, -23]
  });
};

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const officeCoords = [13.0601, 80.2520]; // Anna Salai, Chennai

  // Tabs for the main inquiry form
  const [activeFormTab, setActiveFormTab] = useState('buy'); // 'buy', 'job', 'partner'

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    contactMode: 'callback', // 'callback', 'video'
    propertyType: '',
    project: '',
    unitType: '',
    position: '',
    companyName: '',
    message: '',
    agreedPrivacy: false,
    agreedOffers: false
  });

  const [formState, setFormState] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreedPrivacy) {
      alert("Please agree to the privacy policy before submitting.");
      return;
    }
    setFormState({ submitting: true, success: false, error: null });

    // Mock form submission
    setTimeout(() => {
      setFormState({
        submitting: false,
        success: true,
        error: null
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        contactMode: 'callback',
        propertyType: '',
        project: '',
        unitType: '',
        position: '',
        companyName: '',
        message: '',
        agreedPrivacy: false,
        agreedOffers: false
      });
    }, 1500);
  };

  // Department enquiries data (Screenshot 1)
  const departmentEnquiries = [
    {
      title: "Sales Enquiry",
      phone: "+91 90807 06050",
      email: "sales@aadhithyamohan.com",
    },
    {
      title: "Customer Enquiry",
      phone: "1800 425 9999",
      email: "customercare@aadhithyamohan.com",
    },
    {
      title: "Investor Relations",
      email: "investors@aadhithyamohan.com",
    },
    {
      title: "Channel Partner Enquiry",
      phone: "1800 425 9999",
      email: "partners@aadhithyamohan.com",
      link: "#register",
      linkText: "Register as Channel Partner"
    },
    {
      title: "Job Enquiry",
      phone: "+91 90807 06055",
      link: "/about#careers",
      linkText: "Visit our Careers page"
    }
  ];

  return (
    <div className="contact-page">
      <Navbar />

      {/* Hero Header - aligned bottom left with black overlay */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <img
            src="/images/home/hero.png"
            alt="Hero Background"
            className="contact-hero-bg-image"
          />
          <div className="contact-hero-overlay" />
        </div>
        <div className="contact-hero-content">
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <span className="contact-hero-tag">Reach Out</span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.25}>
            <h1 className="contact-hero-title">CONNECT WITH US</h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <p className="contact-hero-desc">
              Have a question or looking to explore one of our properties? Get in touch with our team today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 1: Department Enquiry Cards (Screenshot 1 Layout) */}
      <section className="dept-enquiry-section">
        <div className="container">
          <div className="dept-cards-grid">
            {departmentEnquiries.map((dept, idx) => (
              <ScrollReveal key={idx} animation="fadeUp" delay={0.05 * idx} className="dept-card">
                <h3 className="dept-card-title">{dept.title}</h3>
                <div className="dept-card-details">
                  {dept.phone && (
                    <div className="dept-detail-item">
                      <Phone size={16} className="gold-icon" />
                      <a href={`tel:${dept.phone.replace(/\s+/g, '')}`}>{dept.phone}</a>
                    </div>
                  )}
                  {dept.email && (
                    <div className="dept-detail-item">
                      <Mail size={16} className="gold-icon" />
                      <a href={`mailto:${dept.email}`}>{dept.email}</a>
                    </div>
                  )}
                  {dept.link && (
                    <div className="dept-detail-link-wrap">
                      <a href={dept.link} className="dept-cta-link">
                        <span>{dept.linkText}</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Tabbed Interactive Form Section (Screenshot 2 Layout) */}
      <section className="form-tab-section">
        <div className="container">
          <div className="form-split-grid">
            
            {/* Left Column: Heading Block */}
            <ScrollReveal animation="fadeRight" delay={0.1}>
              <div className="form-intro-block">
                <span className="form-intro-subtitle">WE'D LOVE TO</span>
                <h2 className="form-intro-title">Hear From You</h2>
              </div>
            </ScrollReveal>

            {/* Right Column: Tabbed Form Container */}
            <ScrollReveal animation="fadeLeft" delay={0.2}>
              <div className="form-tabs-container">
                
                {/* Form Tabs Headers */}
                <div className="form-tabs-headers">
                  <button 
                    className={`form-tab-header-btn ${activeFormTab === 'buy' ? 'active' : ''}`}
                    onClick={() => { setActiveFormTab('buy'); setFormState(prev => ({ ...prev, success: false })); }}
                  >
                    BUY PROPERTY
                  </button>
                  <button 
                    className={`form-tab-header-btn ${activeFormTab === 'job' ? 'active' : ''}`}
                    onClick={() => { setActiveFormTab('job'); setFormState(prev => ({ ...prev, success: false })); }}
                  >
                    SEEK JOB
                  </button>
                  <button 
                    className={`form-tab-header-btn ${activeFormTab === 'partner' ? 'active' : ''}`}
                    onClick={() => { setActiveFormTab('partner'); setFormState(prev => ({ ...prev, success: false })); }}
                  >
                    CHANNEL PARTNER
                  </button>
                </div>

                {/* Form Window */}
                <div className="form-tabs-window">
                  {formState.success ? (
                    <div className="form-success-box">
                      <div className="success-icon-badge">
                        <Check size={28} />
                      </div>
                      <h3>Request Staged Successfully</h3>
                      <p>Thank you for reaching out. One of our representatives will contact you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="tabbed-contact-form">
                      
                      {/* Preferred Contact Mode (Only for 'buy' tab) */}
                      {activeFormTab === 'buy' && (
                        <div className="form-contact-mode-group">
                          <label className="mode-selection-label">Preferred Mode of Contact *</label>
                          <div className="mode-options-grid">
                            <label className={`mode-option-card ${formData.contactMode === 'callback' ? 'selected' : ''}`}>
                              <input 
                                type="radio" 
                                name="contactMode" 
                                value="callback"
                                checked={formData.contactMode === 'callback'}
                                onChange={handleChange}
                              />
                              <div className="mode-option-content">
                                <span className="mode-bullet"></span>
                                <span className="mode-text">Request a call back</span>
                              </div>
                            </label>
                            <label className={`mode-option-card ${formData.contactMode === 'video' ? 'selected' : ''}`}>
                              <input 
                                type="radio" 
                                name="contactMode" 
                                value="video"
                                checked={formData.contactMode === 'video'}
                                onChange={handleChange}
                              />
                              <div className="mode-option-content">
                                <span className="mode-bullet"></span>
                                <span className="mode-text">Schedule a video call</span>
                              </div>
                            </label>
                          </div>
                        </div>
                      )}

                      {/* Common Name Fields */}
                      <div className="form-row-two">
                        <div className="form-group-item">
                          <input 
                            type="text" 
                            name="firstName" 
                            value={formData.firstName}
                            onChange={handleChange}
                            required 
                            placeholder="First Name *"
                          />
                        </div>
                        <div className="form-group-item">
                          <input 
                            type="text" 
                            name="lastName" 
                            value={formData.lastName}
                            onChange={handleChange}
                            required 
                            placeholder="Last Name *"
                          />
                        </div>
                      </div>

                      {/* Phone with static visual prefix & Email */}
                      <div className="form-row-two">
                        <div className="form-group-item phone-input-wrapper">
                          <div className="phone-prefix-badge">
                            <span className="prefix-flag">🇮🇳</span>
                            <span className="prefix-code">+91</span>
                          </div>
                          <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            required 
                            placeholder="Mobile Number *"
                            className="phone-prefixed-input"
                          />
                        </div>
                        <div className="form-group-item">
                          <input 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                            placeholder="Email *"
                          />
                        </div>
                      </div>

                      {/* Conditionally rendered form fields based on active tabs */}
                      {activeFormTab === 'buy' && (
                        <>
                          {/* Property Type Dropdown */}
                          <div className="form-group-item select-wrapper">
                            <select 
                              name="propertyType" 
                              value={formData.propertyType}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Property Type *</option>
                              <option value="Villa">Luxury Villa</option>
                              <option value="Plot">Villa Plot</option>
                              <option value="Apartment">Luxury Apartment</option>
                            </select>
                          </div>

                          {/* Project + Unit Type Dropdowns */}
                          <div className="form-row-two">
                            <div className="form-group-item select-wrapper">
                              <select 
                                name="project" 
                                value={formData.project}
                                onChange={handleChange}
                                required
                              >
                                <option value="">Project *</option>
                                <option value="Crystal Moonlight">Crystal Moonlight Villas</option>
                                <option value="Ashok Nagar">Ashok Nagar Plots</option>
                                <option value="Bay Vista">Bay Vista ECR</option>
                              </select>
                            </div>
                            <div className="form-group-item select-wrapper">
                              <select 
                                name="unitType" 
                                value={formData.unitType}
                                onChange={handleChange}
                                required
                              >
                                <option value="">Unit Type *</option>
                                <option value="3BHK">3 BHK</option>
                                <option value="4BHK">4 BHK</option>
                                <option value="Plot Range A">Range A (1200-1500 sq.ft)</option>
                                <option value="Plot Range B">Range B (1800-2400 sq.ft)</option>
                              </select>
                            </div>
                          </div>
                        </>
                      )}

                      {activeFormTab === 'job' && (
                        <div className="form-row-two">
                          <div className="form-group-item select-wrapper">
                            <select 
                              name="position" 
                              value={formData.position}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Position Interested In *</option>
                              <option value="Sales Consultant">Sales Consultant</option>
                              <option value="Site Engineer">Site Engineer</option>
                              <option value="Marketing Specialist">Marketing Manager</option>
                              <option value="Customer Relations">Customer Relations Associate</option>
                            </select>
                          </div>
                          <div className="form-group-item">
                            <input 
                              type="text" 
                              name="message" 
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="LinkedIn Profile URL"
                            />
                          </div>
                        </div>
                      )}

                      {activeFormTab === 'partner' && (
                        <div className="form-row-two">
                          <div className="form-group-item">
                            <input 
                              type="text" 
                              name="companyName" 
                              value={formData.companyName}
                              onChange={handleChange}
                              required
                              placeholder="Agency / Company Name *"
                            />
                          </div>
                          <div className="form-group-item">
                            <input 
                              type="text" 
                              name="message" 
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="RERA Registration Number (Optional)"
                            />
                          </div>
                        </div>
                      )}

                      {/* Agreement Checkboxes */}
                      <div className="form-agreements">
                        <label className="checkbox-agreement-label">
                          <input 
                            type="checkbox" 
                            name="agreedPrivacy"
                            checked={formData.agreedPrivacy}
                            onChange={handleChange}
                            required
                          />
                          <span className="checkbox-box"></span>
                          <span className="agreement-text">
                            I've read and agree to the <a href="/privacy-policy" target="_blank">privacy policy</a>. *
                          </span>
                        </label>
                        <label className="checkbox-agreement-label">
                          <input 
                            type="checkbox" 
                            name="agreedOffers"
                            checked={formData.agreedOffers}
                            onChange={handleChange}
                          />
                          <span className="checkbox-box"></span>
                          <span className="agreement-text">
                            I'd like to hear about news and offers.
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button 
                        type="submit" 
                        className="form-submit-outline-btn"
                        disabled={formState.submitting}
                      >
                        {formState.submitting ? 'SUBMITTING...' : 'SUBMIT'}
                      </button>

                    </form>
                  )}
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Section 3: Interactive Location Map (Chennai Anna Salai Office) */}
      <section className="contact-map-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="map-section-tag">Find Us</span>
            <h2 className="map-section-title">Office Location</h2>
          </div>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <div className="contact-map-container">
              <MapContainer
                center={officeCoords}
                zoom={15}
                scrollWheelZoom={false}
                style={{ width: '100%', height: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`}
                  tileSize={256}
                  zoomOffset={0}
                  maxZoom={19}
                />
                <Marker position={officeCoords} icon={createOfficeMarker()}>
                  <Popup>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', textAlign: 'center' }}>
                      <strong style={{ display: 'block', marginBottom: '4px' }}>Aadhithya Mohan Properties</strong>
                      No. 123, Anna Salai, Chennai
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      {/* Styled Embed block - Luxury Design Overrides */}
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-page {
          background-color: var(--color-bg-light);
        }

        /* Hero Section - Aligned Bottom Left with Dark Overlay */
        .contact-hero {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          overflow: hidden;
          padding-bottom: 80px;
          padding-left: 8vw;
          box-sizing: border-box;
        }

        .contact-hero-background {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .contact-hero-swiper {
          width: 100%;
          height: 100%;
        }

        .contact-hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1);
          animation: contactZoom 20s infinite alternate ease-in-out;
        }

        @keyframes contactZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.72); /* Solid premium black overlay */
          z-index: 1;
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          text-align: left;
          padding-right: 24px;
        }

        .contact-hero-tag {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #b48564;
          display: inline-block;
          margin-bottom: 12px;
        }

        .contact-hero-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 400;
          color: #ffffff;
          letter-spacing: 0.05em;
          margin: 0 0 16px;
          line-height: 1.1;
        }

        .contact-hero-desc {
          font-family: var(--font-sans);
          font-size: clamp(14px, 2vw, 17px);
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          margin: 0;
        }

        /* Section 1: Department Cards (Screenshot 1 Styles) */
        .dept-enquiry-section {
          padding: 100px 0 60px;
        }

        .dept-cards-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }

        .dept-card {
          grid-column: span 4;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px; /* 8px border-radius! */
          padding: 40px;
          box-shadow: none;
          transition: all 0.3s ease;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-sizing: border-box;
        }

        .dept-card:nth-child(4),
        .dept-card:nth-child(5) {
          grid-column: span 6;
        }

        .dept-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
          border-color: rgba(180, 133, 100, 0.25);
        }

        .dept-card-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 26px;
          font-weight: 400;
          color: #000000;
          margin: 0 0 18px;
          letter-spacing: -0.01em;
        }

        .dept-card-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dept-detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dept-detail-item a {
          font-family: var(--font-sans);
          font-size: 14.5px;
          font-weight: 400;
          color: #555555;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .dept-detail-item a:hover {
          color: #b48564;
        }

        .gold-icon {
          color: #b48564;
        }

        .dept-detail-link-wrap {
          margin-top: 16px;
        }

        .dept-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 500;
          color: #b48564;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.2s ease;
        }

        .dept-cta-link:hover {
          gap: 12px;
        }

        /* Section 2: Tabbed Form (Screenshot 2 Styles) */
        .form-tab-section {
          padding: 80px 0 100px;
          background-color: #ffffff;
        }

        .form-split-grid {
          display: grid;
          grid-template-columns: 4fr 8fr;
          gap: 80px;
          align-items: start;
        }

        .form-intro-block {
          position: sticky;
          top: 100px;
        }

        .form-intro-subtitle {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--color-text-dark);
          opacity: 0.9;
          display: block;
          margin-bottom: 8px;
        }

        .form-intro-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: clamp(36px, 5vw, 48px);
          font-weight: 400;
          color: var(--color-text-dark);
          line-height: 1.1;
          margin: 0;
        }

        /* Tabs Sizing & Transitions */
        .form-tabs-container {
          background: transparent;
        }

        .form-tabs-headers {
          display: flex;
          gap: 30px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          margin-bottom: 40px;
        }

        .form-tab-header-btn {
          background: transparent;
          border: none;
          padding: 12px 0;
          font-family: var(--font-sans);
          font-size: 12.5px;
          font-weight: 600;
          color: #666;
          opacity: 0.8;
          cursor: pointer;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: all 0.3s ease;
        }

        .form-tab-header-btn:hover {
          opacity: 1;
          color: #000;
        }

        .form-tab-header-btn.active {
          color: #000;
          opacity: 1;
        }

        .form-tab-header-btn::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #b48564;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .form-tab-header-btn.active::after {
          transform: scaleX(1);
        }

        /* Forms Layout & Details */
        .tabbed-contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Radio Options */
        .form-contact-mode-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mode-selection-label {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-dark);
        }

        .mode-options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .mode-option-card {
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px; /* 8px border-radius! */
          background: #ffffff;
          padding: 20px 24px;
          display: block;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mode-option-card input {
          display: none;
        }

        .mode-option-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mode-bullet {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.2);
          display: inline-block;
          position: relative;
        }

        .mode-option-card.selected {
          border-color: #b48564;
          background: rgba(180, 133, 100, 0.02);
          box-shadow: 0 4px 15px rgba(180, 133, 100, 0.04);
        }

        .mode-option-card.selected .mode-bullet {
          border-color: #b48564;
        }

        .mode-option-card.selected .mode-bullet::after {
          content: '';
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: #b48564;
        }

        .mode-text {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-dark);
        }

        /* Basic form row & inputs */
        .form-row-two {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-group-item {
          position: relative;
          width: 100%;
        }

        .form-group-item input,
        .form-group-item select {
          width: 100%;
          box-sizing: border-box;
          padding: 18px 20px;
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--color-text-dark);
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px; /* 8px border-radius! */
          outline: none;
          transition: all 0.3s ease;
        }

        .form-group-item input:focus,
        .form-group-item select:focus {
          border-color: #b48564;
          box-shadow: 0 6px 20px rgba(180, 133, 100, 0.06);
        }

        /* Custom dropdown arrows */
        .select-wrapper::after {
          content: '▼';
          font-size: 9px;
          color: #999;
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }
        .form-group-item select {
          appearance: none;
          -webkit-appearance: none;
          padding-right: 40px;
        }

        /* Phone Input flag details */
        .phone-input-wrapper {
          display: flex;
          align-items: stretch;
        }

        .phone-prefix-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 16px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-right: none;
          border-radius: 8px 0 0 8px;
          color: var(--color-text-dark);
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 500;
          pointer-events: none;
          box-sizing: border-box;
        }

        .phone-prefixed-input {
          border-radius: 0 8px 8px 0 !important;
          flex: 1;
        }

        /* Checkboxes agreements */
        .form-agreements {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 8px;
        }

        .checkbox-agreement-label {
          display: flex;
          align-items: start;
          gap: 12px;
          cursor: pointer;
        }

        .checkbox-agreement-label input {
          display: none;
        }

        .checkbox-box {
          width: 18px;
          height: 18px;
          border: 1px solid rgba(0,0,0,0.18);
          border-radius: 4px;
          display: inline-block;
          flex-shrink: 0;
          position: relative;
          background: #ffffff;
          transition: all 0.2s ease;
        }

        .checkbox-agreement-label input:checked + .checkbox-box {
          background: #b48564;
          border-color: #b48564;
        }

        .checkbox-agreement-label input:checked + .checkbox-box::after {
          content: '✓';
          color: #ffffff;
          font-size: 12px;
          font-weight: bold;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          line-height: 1;
        }

        .agreement-text {
          font-family: var(--font-sans);
          font-size: 13px;
          color: #666;
          line-height: 1.4;
        }

        .agreement-text a {
          color: var(--color-text-dark);
          text-decoration: underline;
        }

        /* Outline Submit Button */
        .form-submit-outline-btn {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #000000;
          background: transparent;
          border: 1px solid #000000;
          border-radius: 100px;
          padding: 18px 45px;
          cursor: pointer;
          align-self: flex-start;
          transition: all 0.3s ease;
        }

        .form-submit-outline-btn:hover {
          color: #ffffff;
          background: #000000;
        }

        .form-submit-outline-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .form-success-box {
          text-align: center;
          padding: 40px 24px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 8px; /* 8px border-radius! */
          box-shadow: 0 15px 40px rgba(0,0,0,0.02);
        }

        .success-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(180, 133, 100, 0.1);
          color: #b48564;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .form-success-box h3 {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 24px;
          color: var(--color-text-dark);
          margin: 0 0 10px;
        }

        .form-success-box p {
          font-family: var(--font-sans);
          font-size: 14.5px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /* Map Section Details */
        .contact-map-section {
          padding: 40px 0 100px;
        }

        .section-title-wrap {
          margin-bottom: 35px;
        }

        .map-section-tag {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #b48564;
          display: block;
          margin-bottom: 8px;
        }

        .map-section-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: 32px;
          font-weight: 400;
          color: var(--color-text-dark);
          margin: 0;
        }

        .contact-map-container {
          height: 480px;
          width: 100%;
          border-radius: 8px; /* 8px border-radius! */
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.03);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        /* Leaflet custom styling */
        .custom-map-marker {
          position: relative;
        }
        .marker-pin-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .marker-pin-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: rgba(180, 133, 100, 0.25);
          animation: pinPulse 2s infinite ease-in-out;
        }
        .marker-pin-core {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #b48564;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          border: 2px solid #ffffff;
          position: relative;
          z-index: 2;
        }
        @keyframes pinPulse {
          0% { transform: scale(0.9); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 0.2; }
          100% { transform: scale(0.9); opacity: 0.8; }
        }

        /* Responsive styling */
        @media (max-width: 1024px) {
          .form-split-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .form-intro-block {
            position: relative;
            top: 0;
          }
          .dept-card {
            grid-column: span 6 !important;
          }
          .dept-card:nth-child(5) {
            grid-column: span 12 !important;
          }
        }

        @media (max-width: 900px) {
          .contact-hero {
            padding-bottom: 60px;
            padding-left: 5vw;
          }
          .contact-hero-content {
            padding-right: 12px;
          }
          .dept-enquiry-section {
            padding: 60px 0 40px;
          }
          .form-tab-section {
            padding: 40px 0 60px;
          }
          .contact-map-section {
            padding: 20px 0 60px;
          }
          .contact-map-container {
            height: 380px;
          }
        }

        @media (max-width: 600px) {
          .form-row-two,
          .mode-options-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .form-tabs-headers {
            gap: 15px;
            flex-wrap: wrap;
          }
          .form-tab-header-btn {
            font-size: 11px;
            padding: 8px 0;
          }
          .dept-card {
            grid-column: span 12 !important;
            padding: 28px 24px;
          }
        }
      `}} />
    </div>
  );
};

export default ContactUs;
