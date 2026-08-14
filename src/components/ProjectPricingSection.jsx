import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const COUNTRY_CODES = [
  { code: '+91', flag: '🇮🇳', label: 'India' },
  { code: '+971', flag: '🇦🇪', label: 'UAE' },
  { code: '+1', flag: '🇺🇸', label: 'USA' },
  { code: '+44', flag: '🇬🇧', label: 'UK' },
  { code: '+966', flag: '🇸🇦', label: 'Saudi Arabia' },
  { code: '+65', flag: '🇸🇬', label: 'Singapore' },
];

export default function ProjectPricingSection({
  projectName = "Crystal Moonlight Villa",
  startingPrice = "INR 2.26 CR*",
  prices = [
    { label: '3 BHK Villa', val: 'INR 2.26 CR*' },
    { label: '4 BHK Villa', val: 'INR 2.87 CR*' }
  ],
  unitTypes = ['3 BHK Villa', '4 BHK Villa']
}) {
  const [activeFormType, setActiveFormType] = useState('buy'); // 'buy', 'partner'
  const [contactMode, setContactMode] = useState('callback'); // 'callback', 'videocall'
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    reraNumber: '',
    city: '',
    phoneCode: '+91',
    phoneNumber: '',
    email: '',
    unitType: unitTypes[0] || 'Unit Type',
    agreeTerms: false,
    agreeOffers: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const displayStartingPrice = startingPrice || (prices.length > 0 ? prices[0].val : 'INR 2.26 CR*');

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
    <section className="pricing-section-container" id="pricing" style={{ minHeight: 'calc(100vh - 140px)' }}>
      <div className="pricing-wrapper">

        {/* Left Column: Title, Starting From Price & Channel Partner Details */}
        <ScrollReveal className="pricing-info-col" animation="fadeUp" delay={0.05}>
          <span className="starting-prices-tag">
            {activeFormType === 'partner' ? 'PARTNERSHIP PROGRAM' : 'INVESTMENT & PRICING'}
          </span>

          <h2 className="section-title">
            {activeFormType === 'partner' ? (
              <>
                Grow With Our <br />
                <span>Partner Network</span>
              </>
            ) : (
              <>
                We'd Love To <br />
                <span>Hear From You</span>
              </>
            )}
          </h2>

          {activeFormType === 'partner' ? (
            /* Channel Partner Details Box */
            <div className="partner-details-box">
              <h4 className="partner-box-title">CHANNEL PARTNER PROGRAM</h4>
              <p className="partner-box-desc">
                Partner with Aadhithya Mohan Properties to present benchmark luxury developments to your discerning clientele.
              </p>
              <ul className="partner-perks-list">
                <li>
                  <span className="perk-bullet">✦</span>
                  <span>Attractive commission tiers & timely payout schedules</span>
                </li>
                <li>
                  <span className="perk-bullet">✦</span>
                  <span>Dedicated relationship manager & real-time CRM portal</span>
                </li>
                <li>
                  <span className="perk-bullet">✦</span>
                  <span>Priority inventory access & marketing collateral support</span>
                </li>
              </ul>
              <div className="partner-contact-info">
                <span className="partner-contact-label">Partner Desk Helpline:</span>
                <span className="partner-contact-email">partners@aadhithyamohan.com</span>
              </div>
            </div>
          ) : (
            /* Starting From Price Banner & Breakdown */
            <div className="pricing-display-group">
              

              {/* Unit Configuration Prices Grid */}
              <div className="prices-grid">
                {prices.map((item, idx) => (
                  <div key={idx} className="price-item">
                    <span className="price-label">{item.label}</span>
                    <span className="price-dot">·</span>
                    <span className="price-starting-tag">Starting from</span>
                    <span className="price-val">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="pricing-disclaimer">
            *Prices mentioned are indicative starting prices, subject to applicable taxes, government charges, and inventory availability.
          </p>
        </ScrollReveal>

        {/* Right Column: Interactive Form */}
        <ScrollReveal className="pricing-form-col" animation="fadeLeft" delay={0.25}>
          {success ? (
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Thank You!</h3>
              <p className="success-text">
                {activeFormType === 'partner'
                  ? "Your Channel Partner application has been received. Our partner onboarding team will contact you shortly."
                  : "Your inquiry has been successfully submitted. Our luxury property advisor will get in touch with you shortly."}
              </p>
              <button className="reset-btn" onClick={() => {
                setSuccess(false);
                setForm({
                  firstName: '',
                  lastName: '',
                  companyName: '',
                  reraNumber: '',
                  city: '',
                  phoneCode: '+91',
                  phoneNumber: '',
                  email: '',
                  unitType: unitTypes[0] || 'Unit Type',
                  agreeTerms: false,
                  agreeOffers: false
                });
              }}>
                Submit Another Request
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

              {/* Channel Partner Specific Fields */}
              {activeFormType === 'partner' && (
                <div className="form-row-2">
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      placeholder="Agency / Company Name *"
                      className="form-input"
                      value={form.companyName}
                      onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      placeholder="RERA Registration No. *"
                      className="form-input"
                      value={form.reraNumber}
                      onChange={(e) => setForm({ ...form, reraNumber: e.target.value })}
                    />
                  </div>
                </div>
              )}

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
                  placeholder="Phone Number *"
                  className="form-input phone-input"
                  value={form.phoneNumber}
                  onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                />
              </div>

              {/* Email & City Row */}
              <div className="form-row-2">
                <div className="form-group">
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="form-input"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                {activeFormType === 'partner' ? (
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      placeholder="Operating City *"
                      className="form-input"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    />
                  </div>
                ) : (
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
                )}
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
                  I'd like to receive priority project updates and offers.
                </label>
              </div>

              {/* Submit Button */}
              <div className="form-submit-container">
                <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting
                    ? 'SUBMITTING...'
                    : activeFormType === 'partner'
                    ? 'REGISTER AS PARTNER'
                    : 'REQUEST PRICING DETAILS'}
                </button>
              </div>
            </form>
          )}
        </ScrollReveal>

      </div>

      <style>{`
        .pricing-section-container {
          padding: 80px 5%;
          background: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sans);
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .pricing-wrapper {
          display: flex;
          gap: 60px;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
        }

        .pricing-info-col {
          flex: 1 1 420px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .starting-prices-tag {
          font-size: 11px;
          font-weight: 500;
          color: #888888;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        /* ── Starting From Hero Banner ── */
        .pricing-display-group {
          width: 100%;
          margin: 24px 0 28px 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .starting-from-hero-card {
          background: var(--color-bg-light, #f8f6f2);
          border-left: 3px solid #b48564;
          padding: 18px 24px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .starting-from-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: #777777;
          text-transform: uppercase;
        }

        .starting-from-amount {
          font-family: var(--font-heading, serif);
          font-size: clamp(28px, 3.5vw, 38px);
          font-weight: 400;
          color: #111111;
          line-height: 1.1;
        }

        .starting-from-subtext {
          font-size: 12px;
          color: #666666;
          letter-spacing: 0.04em;
        }

        .prices-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .price-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          font-size: 15px;
        }

        .price-label {
          color: #555555;
          font-weight: 400;
        }

        .price-dot {
          color: #b48564;
        }

        .price-starting-tag {
          font-size: 11px;
          color: #777777;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 400;
        }

        .price-val {
          color: #111111;
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        /* ── Channel Partner Box ── */
        .partner-details-box {
          background: var(--color-bg-light, #f8f6f2);
          border: 1px solid rgba(180, 133, 100, 0.25);
          border-radius: 6px;
          padding: 24px;
          margin: 20px 0 24px 0;
          width: 100%;
          box-sizing: border-box;
        }

        .partner-box-title {
          font-size: 13px;
          font-weight: 600;
          color: #b48564;
          letter-spacing: 0.12em;
          margin: 0 0 10px 0;
        }

        .partner-box-desc {
          font-size: 14px;
          color: #444444;
          line-height: 1.5;
          margin: 0 0 16px 0;
        }

        .partner-perks-list {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .partner-perks-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #333333;
          line-height: 1.4;
        }

        .perk-bullet {
          color: #b48564;
          font-size: 11px;
          margin-top: 2px;
        }

        .partner-contact-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-top: 14px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .partner-contact-label {
          font-size: 11px;
          color: #888888;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .partner-contact-email {
          font-size: 14px;
          font-weight: 600;
          color: #111111;
        }

        .pricing-disclaimer {
          font-size: 11px;
          color: #888888;
          line-height: 1.5;
          margin-top: auto;
        }

        /* ── Right Column Form ── */
        .pricing-form-col {
          flex: 1 1 480px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 36px 32px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.04);
        }

        .pricing-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-type-tabs {
          display: flex;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          margin-bottom: 10px;
        }

        .form-type-btn {
          flex: 1;
          padding: 12px 16px;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #888888;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: -1px;
        }

        .form-type-btn.active {
          color: #111111;
          border-bottom-color: #b48564;
        }

        .contact-mode-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .input-field-label {
          font-size: 12px;
          font-weight: 500;
          color: #555555;
          letter-spacing: 0.04em;
        }

        .radio-options {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #333333;
          cursor: pointer;
        }

        .radio-label input {
          display: none;
        }

        .custom-radio {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid #b48564;
          display: inline-block;
          position: relative;
        }

        .radio-label input:checked + .custom-radio::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: #b48564;
          border-radius: 50%;
          top: 3px;
          left: 3px;
        }

        .form-row-2 {
          display: flex;
          gap: 16px;
        }

        .form-group {
          flex: 1;
        }

        .form-input, .form-select {
          width: 100%;
          padding: 13px 16px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          font-size: 14px;
          color: #111111;
          font-family: var(--font-sans);
          outline: none;
          background: #ffffff;
          box-sizing: border-box;
          transition: border-color 0.25s ease;
        }

        .form-input:focus, .form-select:focus {
          border-color: #b48564;
        }

        .form-input.disabled {
          background: #f5f5f5;
          color: #777777;
        }

        .form-row-phone {
          display: flex;
          gap: 12px;
        }

        .phone-code-select-wrapper {
          width: 100px;
          flex-shrink: 0;
        }

        .phone-code-select {
          width: 100%;
          padding: 13px 8px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          font-size: 14px;
          background: #ffffff;
          box-sizing: border-box;
          outline: none;
        }

        .phone-input {
          flex: 1;
        }

        .checkboxes-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 4px;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12.5px;
          color: #555555;
          line-height: 1.4;
          cursor: pointer;
        }

        .checkbox-label input {
          display: none;
        }

        .custom-checkbox {
          width: 15px;
          height: 15px;
          border: 1px solid rgba(0, 0, 0, 0.25);
          border-radius: 3px;
          flex-shrink: 0;
          margin-top: 1px;
          position: relative;
        }

        .checkbox-label input:checked + .custom-checkbox {
          background: #b48564;
          border-color: #b48564;
        }

        .checkbox-label input:checked + .custom-checkbox::after {
          content: '✓';
          color: #ffffff;
          position: absolute;
          font-size: 11px;
          top: -1px;
          left: 2px;
        }

        .form-link {
          color: #b48564;
          text-decoration: underline;
        }

        .form-submit-container {
          margin-top: 8px;
        }

        .form-submit-btn {
          width: 100%;
          padding: 15px;
          background: #111111;
          color: #ffffff;
          border: 1px solid #111111;
          border-radius: 40px !important;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .form-submit-btn:hover {
          background: #b48564;
          border-color: #b48564;
          transform: translateY(-1px);
        }

        /* Success Card */
        .success-card {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .success-icon {
          width: 54px;
          height: 54px;
          background: #b48564;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
        }

        .success-title {
          font-family: var(--font-heading);
          font-size: 26px;
          color: #111111;
          margin: 0;
        }

        .success-text {
          font-size: 14px;
          color: #555555;
          line-height: 1.6;
          max-width: 380px;
          margin: 0;
        }

        .reset-btn {
          margin-top: 10px;
          padding: 10px 24px;
          background: transparent;
          border: 1px solid #b48564;
          color: #b48564;
          border-radius: 30px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .pricing-wrapper {
            flex-direction: column;
            gap: 40px;
          }
          .form-row-2 {
            flex-direction: column;
          }
          .pricing-form-col {
            padding: 28px 20px;
          }
        }
      `}</style>
    </section>
  );
}
