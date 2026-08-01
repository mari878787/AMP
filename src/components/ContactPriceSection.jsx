import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function ContactPriceSection({
  projectName = "Crystal Moonlight Villa",
  pricingString = "AED 9.05 M* | INR 22.6 CR* | USD 2.48 M* | EUR 2.18 M* | GBP 1.89 M*",
  unitOptions = ["3 BHK Villa", "4 BHK Villa"],
  showGlobalDisclaimer = true
}) {
  const [activeTab, setActiveTab] = useState('buy'); // 'buy', 'partner'
  const [contactMode, setContactMode] = useState('callback'); // 'callback', 'video'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneCode: '+91',
    phoneNumber: '',
    email: '',
    unitType: unitOptions[0] || '',
    agreePrivacy: false,
    agreeOffers: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert("Please agree to the privacy policy to proceed.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        phoneCode: '+91',
        phoneNumber: '',
        email: '',
        unitType: unitOptions[0] || '',
        agreePrivacy: false,
        agreeOffers: false
      });
    }, 3000);
  };

  const handleInputChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  return (
    <div className="contact-price-section">
      <div className="contact-price-container">
        
        {/* Left Column: Heading and Starting Prices */}
        <div className="contact-price-left">
          <div className="heading-wrapper">
            <span className="section-small-tag">WE'D LOVE TO</span>
            <h2 className="section-main-heading">Hear From You</h2>
          </div>

          <div className="price-block">
            <span className="price-tag">STARTING PRICES</span>
            <div className="price-details-wrapper">
              {typeof pricingString === 'string' ? (
                <p className="price-details-str">{pricingString}</p>
              ) : (
                pricingString
              )}
            </div>
            <span className="price-disclaimer">*Subject to inventory availability</span>
            {showGlobalDisclaimer && (
              <span className="price-disclaimer">*The global prices may vary as per the exchange rate</span>
            )}
          </div>
        </div>

        {/* Right Column: Interaction Form */}
        <div className="contact-price-right">
          
          {/* Tabs Navigation (Buy Property & Channel Partner only) */}
          <div className="contact-tabs-nav">
            <button 
              className={`contact-tab-btn ${activeTab === 'buy' ? 'active' : ''}`}
              onClick={() => setActiveTab('buy')}
            >
              BUY PROPERTY
            </button>
            <button 
              className={`contact-tab-btn ${activeTab === 'partner' ? 'active' : ''}`}
              onClick={() => setActiveTab('partner')}
            >
              CHANNEL PARTNER
            </button>
          </div>

          {submitted ? (
            <div className="contact-success-card">
              <CheckCircle2 size={48} className="success-icon-bronze" />
              <h3>Thank You!</h3>
              <p>Your request has been successfully submitted. Our team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="contact-inquiry-form">
              
              {/* Preferred Mode of Contact */}
              <div className="form-section-label">Preferred Mode of Contact *</div>
              <div className="contact-mode-group">
                <label className={`contact-mode-card ${contactMode === 'callback' ? 'active' : ''}`}>
                  <span className="mode-label">Request a call back</span>
                  <div className="radio-circle">
                    <input 
                      type="radio" 
                      name="contactMode" 
                      checked={contactMode === 'callback'} 
                      onChange={() => setContactMode('callback')} 
                    />
                    <div className="radio-dot"></div>
                  </div>
                </label>

                <label className={`contact-mode-card ${contactMode === 'video' ? 'active' : ''}`}>
                  <span className="mode-label">Schedule a video call</span>
                  <div className="radio-circle">
                    <input 
                      type="radio" 
                      name="contactMode" 
                      checked={contactMode === 'video'} 
                      onChange={() => setContactMode('video')} 
                    />
                    <div className="radio-dot"></div>
                  </div>
                </label>
              </div>

              {/* Name Fields Grid */}
              <div className="form-row-grid-2">
                <div className="form-input-field">
                  <input 
                    type="text" 
                    placeholder="First Name *" 
                    required 
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                </div>
                <div className="form-input-field">
                  <input 
                    type="text" 
                    placeholder="Last Name *" 
                    required 
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                </div>
              </div>

              {/* Phone Field Grid */}
              <div className="form-row-grid-phone">
                <div className="phone-code-select-wrapper">
                  <select 
                    value={formData.phoneCode} 
                    onChange={(e) => handleInputChange('phoneCode', e.target.value)}
                    className="phone-code-select"
                  >
                    <option value="+91">🇮🇳 +91 (IN)</option>
                    <option value="+971">🇦🇪 +971 (AE)</option>
                    <option value="+1">🇺🇸 +1 (US)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+966">🇸🇦 +966 (KSA)</option>
                  </select>
                </div>
                <div className="form-input-field">
                  <input 
                    type="tel" 
                    placeholder="XX XXX XXXX" 
                    required 
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="form-input-field">
                <input 
                  type="email" 
                  placeholder="Email *" 
                  required 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              {/* Project and Unit Type Row */}
              <div className="form-row-grid-2">
                <div className="form-input-field read-only-input">
                  <input 
                    type="text" 
                    value={projectName} 
                    readOnly 
                    title="Selected Project"
                  />
                </div>
                <div className="form-input-field select-input-wrapper">
                  <select 
                    value={formData.unitType} 
                    onChange={(e) => handleInputChange('unitType', e.target.value)}
                    className="unit-type-select"
                  >
                    {unitOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Checkboxes Group */}
              <div className="checkboxes-group-block">
                <label className="checkbox-label-item">
                  <input 
                    type="checkbox" 
                    checked={formData.agreePrivacy}
                    onChange={(e) => handleInputChange('agreePrivacy', e.target.checked)}
                  />
                  <span className="checkbox-text">
                    I've read and agree to the <a href="#privacy" onClick={(e) => e.preventDefault()} className="gold-link">privacy policy</a>. *
                  </span>
                </label>

                <label className="checkbox-label-item">
                  <input 
                    type="checkbox" 
                    checked={formData.agreeOffers}
                    onChange={(e) => handleInputChange('agreeOffers', e.target.checked)}
                  />
                  <span className="checkbox-text">
                    I'd like to hear about news and offers.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="submit-btn-row">
                <button type="submit" className="luxury-submit-btn">
                  SUBMIT
                </button>
              </div>

              {/* ReCAPTCHA Note */}
              <p className="recaptcha-notice-text">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>

            </form>
          )}

        </div>

      </div>

      <style>{`
        .contact-price-section {
          background-color: #ffffff;
          padding: 80px 40px;
          width: 100%;
          box-sizing: border-box;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .contact-price-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
        }

        .contact-price-left {
          flex: 4;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          text-align: left;
        }

        .section-small-tag {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: #999999;
          text-transform: uppercase;
        }

        .section-main-heading {
          font-family: 'ChronicleDisplay', serif;
          font-size: 42px;
          font-weight: 400;
          color: #000000;
          margin: 8px 0 0 0;
          line-height: 1.1;
        }

        .price-block {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .price-tag {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #b48564; /* Elegant gold/bronze status color */
        }

        .price-details-str {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #000000;
          margin: 4px 0 12px 0;
          line-height: 1.6;
          letter-spacing: 0.02em;
        }

        .price-disclaimer {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 11px;
          color: #999999;
          line-height: 1.4;
        }

        .contact-price-right {
          flex: 6;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        /* Tabs Nav */
        .contact-tabs-nav {
          display: flex;
          border-bottom: 1.5px solid rgba(0, 0, 0, 0.06);
          margin-bottom: 24px;
          gap: 30px;
        }

        .contact-tab-btn {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #999999;
          background: none;
          border: none;
          padding: 0 0 12px 0;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }

        .contact-tab-btn:hover {
          color: #000000;
        }

        .contact-tab-btn.active {
          color: #000000;
          border-bottom: 2px solid #b48564;
          margin-bottom: -1.5px;
        }

        .contact-inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-section-label {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 4px;
        }

        /* Mode cards radio group */
        .contact-mode-group {
          display: flex;
          gap: 16px;
          width: 100%;
          margin-bottom: 8px;
        }

        .contact-mode-card {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 8px;
          cursor: pointer;
          background: #fdfcf9;
          transition: all 0.3s ease;
        }

        .contact-mode-card.active {
          border-color: #b48564;
          background: #fcfaf6;
        }

        .mode-label {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #b48564;
        }

        /* Radio circle styling */
        .radio-circle {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid #cccccc;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-mode-card.active .radio-circle {
          border-color: #b48564;
        }

        .radio-circle input {
          position: absolute;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
          margin: 0;
        }

        .radio-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: transparent;
          transition: background-color 0.2s ease;
        }

        .contact-mode-card.active .radio-dot {
          background-color: #b48564;
        }

        /* Input fields layout */
        .form-row-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          width: 100%;
        }

        .form-row-grid-phone {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 16px;
          width: 100%;
        }

        .form-input-field input,
        .phone-code-select,
        .unit-type-select {
          width: 100%;
          padding: 14px 18px;
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          border-radius: 6px;
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 13.5px;
          color: #000000;
          background: #ffffff;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .form-input-field input:focus,
        .phone-code-select:focus,
        .unit-type-select:focus {
          border-color: #b48564;
          box-shadow: 0 0 0 3px rgba(180, 133, 100, 0.08);
        }

        .read-only-input input {
          background: #fafaf7;
          color: #777777;
          border-color: rgba(0, 0, 0, 0.05);
          cursor: not-allowed;
        }

        .phone-code-select-wrapper,
        .select-input-wrapper {
          position: relative;
          width: 100%;
        }

        .phone-code-select,
        .unit-type-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
        }

        /* Dropdown custom arrows */
        .phone-code-select-wrapper::after,
        .select-input-wrapper::after {
          content: '▼';
          font-size: 9px;
          color: #999999;
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        /* Checkboxes styling */
        .checkboxes-group-block {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 6px 0;
        }

        .checkbox-label-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
        }

        .checkbox-label-item input {
          margin-top: 3px;
          cursor: pointer;
        }

        .checkbox-text {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 12.5px;
          color: #333333;
          line-height: 1.4;
        }

        .gold-link {
          color: #b48564;
          text-decoration: underline;
        }

        .luxury-submit-btn {
          padding: 14px 44px;
          border: 1.5px solid #000000;
          background: #ffffff;
          color: #000000;
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .luxury-submit-btn:hover {
          background: #000000;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .recaptcha-notice-text {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 11px;
          color: #999999;
          margin: 8px 0 0 0;
          line-height: 1.4;
        }

        .contact-success-card {
          padding: 40px;
          text-align: center;
          background: #fdfcf9;
          border: 1.5px dashed rgba(180, 133, 100, 0.3);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .success-icon-bronze {
          color: #b48564;
        }

        .contact-success-card h3 {
          font-family: 'ChronicleDisplay', serif;
          font-size: 24px;
          margin: 0;
          color: #000000;
        }

        .contact-success-card p {
          font-family: 'ProximaNovaRegular', sans-serif;
          font-size: 14px;
          color: #666666;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .contact-price-section {
            padding: 40px 20px;
          }
          .contact-price-container {
            flex-direction: column;
            gap: 40px;
          }
          .contact-mode-group {
            flex-direction: column;
            gap: 12px;
          }
          .form-row-grid-2,
          .form-row-grid-phone {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>

    </div>
  );
}
