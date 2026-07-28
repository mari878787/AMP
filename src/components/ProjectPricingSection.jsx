import React, { useState } from 'react';

const COUNTRY_CODES = [
  { code: '+91', flag: '🇮🇳', label: 'India' },
  { code: '+971', flag: '🇦🇪', label: 'UAE' },
  { code: '+1', flag: '🇺🇸', label: 'USA' },
  { code: '+44', flag: '🇬🇧', label: 'UK' },
  { code: '+966', flag: '🇸🇦', label: 'Saudi Arabia' },
  { code: '+65', flag: '🇸🇬', label: 'Singapore' },
];

export default function ProjectPricingSection({
  projectName,
  prices = [],
  unitTypes = []
}) {
  const [activeFormType, setActiveFormType] = useState('buy'); // 'buy', 'partner'
  const [contactMode, setContactMode] = useState('callback'); // 'callback', 'videocall'
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneCode: '+91',
    phoneNumber: '',
    email: '',
    unitType: unitTypes[0] || 'Unit Type',
    agreeTerms: false,
    agreeOffers: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agreeTerms) {
      alert("Please agree to the privacy policy.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section className="pricing-section-container" style={{ minHeight: 'calc(100vh - 140px)' }}>
      <div className="pricing-wrapper">

        {/* Left Column: Title & Prices */}
        <div className="pricing-info-col">
          <span className="starting-prices-tag">STARTING PRICES</span>

          <h2 className="section-title">
            WE'D LOVE TO <br />
            <span>Hear From You</span>
          </h2>

          <div className="prices-grid" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', marginBottom: '32px', marginTop: '16px' }}>
            {prices.map((item, idx) => (
              <div key={idx} className="price-item" style={{ fontSize: '16px', fontWeight: '400', display: 'flex', gap: '8px', letterSpacing: '0.05em' }}>
                <span className="price-label" style={{ color: '#888' }}>{item.label}:</span>
                <span className="price-val" style={{ color: '#b48564', fontWeight: '600' }}>{item.val}</span>
              </div>
            ))}
          </div>

          <p className="pricing-disclaimer">
            Subject to inventory availability*
          </p>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="pricing-form-col">
          {success ? (
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Thank You!</h3>
              <p className="success-text">
                Your inquiry has been successfully submitted. Our luxury property advisor will get in touch with you shortly.
              </p>
              <button className="reset-btn" onClick={() => {
                setSuccess(false);
                setForm({
                  firstName: '',
                  lastName: '',
                  phoneCode: '+91',
                  phoneNumber: '',
                  email: '',
                  unitType: unitTypes[0] || 'Unit Type',
                  agreeTerms: false,
                  agreeOffers: false
                });
              }}>
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pricing-form">
              {/* Form Type Tabs */}
              <div className="form-type-tabs">
                <button
                  type="button"
                  className={`form-type-btn ${activeFormType === 'buy' ? 'active' : ''}`}
                  onClick={() => setActiveFormType('buy')}
                >
                  BUY PROPERTY
                </button>
                <button
                  type="button"
                  className={`form-type-btn ${activeFormType === 'partner' ? 'active' : ''}`}
                  onClick={() => setActiveFormType('partner')}
                >
                  CHANNEL PARTNER
                </button>
              </div>

              {/* Preferred Mode of Contact */}
              <div className="contact-mode-group">
                <span className="input-field-label">Preferred Mode of Contact *</span>
                <div className="radio-options">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="contactMode"
                      value="callback"
                      checked={contactMode === 'callback'}
                      onChange={() => setContactMode('callback')}
                    />
                    <span className="custom-radio"></span>
                    Request a call back
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="contactMode"
                      value="videocall"
                      checked={contactMode === 'videocall'}
                      onChange={() => setContactMode('videocall')}
                    />
                    <span className="custom-radio"></span>
                    Schedule a video call
                  </label>
                </div>
              </div>

              {/* Name Row */}
              <div className="form-row-2">
                <div className="form-group">
                  <input
                    type="text"
                    required
                    placeholder="First Name *"
                    className="form-input"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    required
                    placeholder="Last Name *"
                    className="form-input"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  />
                </div>
              </div>

              {/* Phone Row */}
              <div className="form-row-phone">
                <div className="phone-code-select-wrapper">
                  <select
                    className="phone-code-select"
                    value={form.phoneCode}
                    onChange={(e) => setForm({ ...form, phoneCode: e.target.value })}
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="tel"
                  required
                  placeholder="XX XXX XXXX *"
                  className="form-input phone-input"
                  value={form.phoneNumber}
                  onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                />
              </div>

              {/* Email Row */}
              <div className="form-group">
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  className="form-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* Project & Unit Row */}
              <div className="form-row-2">
                <div className="form-group">
                  <input
                    type="text"
                    disabled
                    className="form-input disabled"
                    value={projectName}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-select"
                    value={form.unitType}
                    onChange={(e) => setForm({ ...form, unitType: e.target.value })}
                  >
                    {unitTypes.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="checkboxes-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={form.agreeTerms}
                    onChange={(e) => setForm({ ...form, agreeTerms: e.target.checked })}
                  />
                  <span className="custom-checkbox"></span>
                  I've read and agree to the <a href="/privacy" className="form-link">privacy policy. *</a>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={form.agreeOffers}
                    onChange={(e) => setForm({ ...form, agreeOffers: e.target.checked })}
                  />
                  <span className="custom-checkbox"></span>
                  I'd like to hear about news and offers.
                </label>
              </div>

              {/* Submit Button */}
              <div className="form-submit-container">
                <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

      <style>{`
        .pricing-section-container {
          padding: 80px 5%;
          background: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans);
        }

        .pricing-wrapper {
          display: flex;
          gap: 60px;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
        }

        .pricing-info-col {
          flex: 1 1 400px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .starting-prices-tag {
          font-size: 11px;
          font-weight: 500;
          color: #999;
          letter-spacing: 0.15em;
          margin-bottom: 24px;
        }

        .prices-grid {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          color: #b48564;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .price-item {
          display: flex;
          gap: 6px;
        }

        .price-label {
          color: #888;
        }

        .price-divider {
          color: #ddd;
        }

        .pricing-disclaimer {
          font-size: 11px;
          color: #999;
          line-height: 1.6;
          letter-spacing: 0.02em;
        }

        .pricing-form-col {
          flex: 1 1 500px;
          background: #ffffff;
        }

        .pricing-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-type-tabs {
          display: flex;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 12px;
          gap: 24px;
        }

        .form-type-btn {
          font-size: 12px;
          font-weight: 600;
          color: #999;
          letter-spacing: 0.08em;
          border: none;
          background: none;
          padding: 0 0 6px 0;
          position: relative;
          cursor: pointer;
          transition: color 0.3s;
        }

        .form-type-btn.active {
          color: #b48564;
        }

        .form-type-btn.active::after {
          content: '';
          position: absolute;
          bottom: -13px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #b48564;
        }

        .contact-mode-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .input-field-label {
          font-size: 11px;
          font-weight: 600;
          color: #444;
          letter-spacing: 0.02em;
        }

        .radio-options {
          display: flex;
          gap: 24px;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #555;
          cursor: pointer;
          user-select: none;
        }

        .radio-label input {
          display: none;
        }

        .custom-radio {
          width: 14px;
          height: 14px;
          border: 1px solid #ccc;
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }

        .radio-label input:checked + .custom-radio {
          border-color: #b48564;
        }

        .radio-label input:checked + .custom-radio::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: #b48564;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .form-row-2 {
          display: flex;
          gap: 20px;
        }

        .form-group {
          flex: 1;
        }

        .form-input, .form-select {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 13px;
          color: #333;
          outline: none;
          background: #ffffff;
          box-sizing: border-box;
          transition: border-color 0.3s;
        }

        .form-input::placeholder {
          color: #999;
        }

        .form-input:focus, .form-select:focus {
          border-color: #b48564;
        }

        .form-input.disabled {
          background: #f9f9f9;
          color: #777;
          border-color: #eee;
        }

        .form-row-phone {
          display: flex;
          border: 1px solid #ddd;
          border-radius: 4px;
          overflow: hidden;
        }

        .phone-code-select-wrapper {
          border-right: 1px solid #ddd;
          background: #f9f9f9;
          display: flex;
          align-items: center;
        }

        .phone-code-select {
          border: none;
          background: transparent;
          padding: 14px 12px;
          font-size: 13px;
          color: #333;
          cursor: pointer;
          outline: none;
        }

        .form-input.phone-input {
          border: none;
          border-radius: 0;
          flex: 1;
        }

        .checkboxes-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: #555;
          cursor: pointer;
          user-select: none;
        }

        .checkbox-label input {
          display: none;
        }

        .custom-checkbox {
          width: 14px;
          height: 14px;
          border: 1px solid #ccc;
          border-radius: 2px;
          display: inline-block;
          position: relative;
        }

        .checkbox-label input:checked + .custom-checkbox {
          border-color: #b48564;
          background: #b48564;
        }

        .checkbox-label input:checked + .custom-checkbox::after {
          content: '✓';
          position: absolute;
          color: #fff;
          font-size: 10px;
          font-weight: bold;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .form-link {
          color: #b48564;
          text-decoration: underline;
        }

        .form-submit-container {
          display: flex;
          margin-top: 10px;
        }

        .form-submit-btn {
          padding: 14px 40px;
          background: #000000;
          color: #ffffff;
          border: 2px solid #000000;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          cursor: pointer;
          transition: all 0.3s;
        }

        .form-submit-btn:hover {
          background: transparent;
          color: #000000;
        }

        .success-card {
          text-align: center;
          padding: 40px 20px;
          border: 1px dashed #b48564;
          border-radius: 8px;
          background: #fbf9f6;
        }

        .success-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #b48564;
          color: #fff;
          font-size: 24px;
          line-height: 48px;
          margin: 0 auto 20px;
        }

        .success-title {
          font-size: 20px;
          color: #000;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .success-text {
          font-size: 13px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .reset-btn {
          padding: 10px 24px;
          background: #b48564;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 12px;
          cursor: pointer;
          font-weight: 600;
          transition: opacity 0.3s;
        }

        .reset-btn:hover {
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .pricing-section-container {
            padding: 40px 24px;
          }
          .pricing-wrapper {
            gap: 40px;
          }
          .form-row-2 {
            flex-direction: column;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
