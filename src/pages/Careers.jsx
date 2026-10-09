import React, { useState, useEffect } from 'react';
import { Send, Check, Mail, Phone, MapPin, Briefcase, Sparkles, UploadCloud, FileText, X } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { submitLead } from '../services/api';

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '1-3 Years',
    portfolioUrl: '',
    message: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setSubmitError('File size exceeds 10MB limit. Please select a smaller file.');
        return;
      }
      setSubmitError('');
      setResumeFile(file);
    }
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const resumeAttachmentInfo = resumeFile 
        ? `${resumeFile.name} (${(resumeFile.size / (1024 * 1024)).toFixed(2)} MB)`
        : 'Not provided';

      const payload = {
        category: 'Job Application',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project: formData.position || 'General Career Application',
        unitType: `Experience: ${formData.experience}`,
        message: `Position Applied: ${formData.position}\nExperience: ${formData.experience}\nAttached Resume File: ${resumeAttachmentInfo}\nPortfolio/LinkedIn: ${formData.portfolioUrl || 'N/A'}\n\nCover Note:\n${formData.message}`
      };

      const result = await submitLead(payload);
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '1-3 Years',
          portfolioUrl: '',
          message: ''
        });
        setResumeFile(null);
      } else {
        setSubmitError('Failed to send application. Please try again.');
      }
    } catch (err) {
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page careers-page-wrapper">
      <SEO
        title="Shape Your Future With Aadhithya Mohan Properties"
        description="Discover trusted real estate opportunities with Aadhithya Mohan Properties. Explore premium plots, villas, and apartments in prime locations across Chennai."
        canonicalUrl="https://aadhithyamohanproperties.com/career"
      />
      <Navbar />

      {/* Hero Section matching Contact Us exactly */}
      <section className="contact-hero careers-hero">
        <div className="contact-hero-background">
          <img 
            src="/images/careers.png" 
            alt="Careers at Aadhithya Mohan Properties" 
            className="contact-hero-bg-image" 
          />
          <div className="contact-hero-overlay" />
        </div>
        <div className="contact-hero-content">
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <span className="contact-hero-tag">CAREERS</span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.25}>
            <h1 className="contact-hero-title">Build With Us</h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <p className="contact-hero-desc">
              Explore career opportunities and join a passionate team crafting luxury villas, residences, and plotted developments across Chennai.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content & Form Section */}
      <section className="careers-body-section">
        <div className="container">
          <div className="careers-grid">
            
            {/* Left Content Column */}
            <ScrollReveal animation="fadeRight" delay={0.1}>
              <div className="careers-content-col">
                <span className="sub-title">WORK WITH US</span>
                <h2 className="section-title">Shape Your Career With Industry Leaders</h2>
                
                <p className="careers-desc-lead">
                  At Aadhithya Mohan Properties, we build more than landmark structures—we build rewarding careers, empower bold ideas, and champion professional growth.
                </p>
                
                <p className="careers-desc-body">
                  Whether you are a seasoned real estate professional, a meticulous civil engineer, a creative architect, or a growth-minded sales specialist, we provide an inspiring environment where your expertise creates tangible value for families and communities.
                </p>

                <div className="careers-highlights-list">
                  <div className="highlight-item">
                    <div className="highlight-icon"><Briefcase size={20} /></div>
                    <div>
                      <h4>Inspiring Work Environment</h4>
                      <p>Collaborate with visionary leaders on high-end villa and plot developments.</p>
                    </div>
                  </div>

                  <div className="highlight-item">
                    <div className="highlight-icon"><Sparkles size={20} /></div>
                    <div>
                      <h4>Growth & Leadership Opportunities</h4>
                      <p>Meritocratic career advancement, skill building, and direct ownership.</p>
                    </div>
                  </div>
                </div>

                <div className="careers-direct-contact-card">
                  <h4>Direct HR Contacts</h4>
                  <div className="contact-line">
                    <Mail size={16} />
                    <a href="mailto:hr@aadhithyamohanproperties.com">hr@aadhithyamohanproperties.com</a>
                  </div>
                  <div className="contact-line">
                    <Phone size={16} />
                    <a href="tel:+919585291746">+91 95852 91746</a>
                  </div>
                  <div className="contact-line">
                    <MapPin size={16} />
                    <span>Nungambakkam, Chennai, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Form Column */}
            <ScrollReveal animation="fadeLeft" delay={0.2}>
              <div className="careers-form-card">
                <div className="form-card-header">
                  <h3 className="form-card-title">Apply For a Position</h3>
                  <p className="form-card-subtitle">Fill out the details below and attach your CV to apply.</p>
                </div>

                {submitSuccess ? (
                  <div className="form-success-box">
                    <div className="success-icon"><Check size={32} /></div>
                    <h3>Application Submitted!</h3>
                    <p>Thank you for reaching out. We have received your application and resume details. Our HR team will get in touch with you shortly.</p>
                    <button onClick={() => setSubmitSuccess(false)} className="cta-submit-btn">
                      <span>Submit Another Application</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitApplication} className="simple-career-form">
                    {submitError && <div className="form-error-msg">{submitError}</div>}

                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="position">Position / Role Interested In *</label>
                        <input
                          id="position"
                          type="text"
                          name="position"
                          required
                          placeholder="e.g. Sales Manager, Site Engineer"
                          value={formData.position}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="experience">Experience Level *</label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                        >
                          <option value="Fresher / Entry Level">Fresher / Entry Level</option>
                          <option value="1-3 Years">1 - 3 Years</option>
                          <option value="3-5 Years">3 - 5 Years</option>
                          <option value="5-8 Years">5 - 8 Years</option>
                          <option value="8+ Years">8+ Years</option>
                        </select>
                      </div>
                    </div>

                    {/* CV / Resume Upload Field */}
                    <div className="form-group">
                      <label htmlFor="cv-upload">Upload CV / Resume (Optional)</label>
                      <div className="custom-file-upload-box">
                        {resumeFile ? (
                          <div className="selected-file-badge">
                            <FileText size={20} className="file-icon" />
                            <div className="file-info">
                              <span className="file-name">{resumeFile.name}</span>
                              <span className="file-size">({(resumeFile.size / (1024 * 1024)).toFixed(2)} MB)</span>
                            </div>
                            <button 
                              type="button" 
                              onClick={handleRemoveFile} 
                              className="remove-file-btn"
                              title="Remove file"
                              aria-label="Remove file"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <label htmlFor="cv-upload" className="file-drop-label">
                            <UploadCloud size={24} className="upload-icon" />
                            <div className="upload-text">
                              <span className="upload-title">Click to upload CV / Resume</span>
                              <span className="upload-subtitle">PDF, DOC, or DOCX (Max 10MB)</span>
                            </div>
                            <input
                              id="cv-upload"
                              type="file"
                              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                              onChange={handleFileChange}
                              className="hidden-file-input"
                            />
                          </label>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="portfolioUrl">Portfolio / LinkedIn Link (Optional)</label>
                      <input
                        id="portfolioUrl"
                        type="url"
                        name="portfolioUrl"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message / Cover Note</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        placeholder="Brief summary of your skills, current role, or background..."
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="cta-submit-btn" disabled={submitting}>
                      {submitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .careers-page-wrapper {
          background-color: var(--color-bg-light);
          min-height: 100vh;
        }

        /* Hero Section - Aligned Bottom Left with Dark Overlay */
        .careers-hero {
          position: relative;
          height: 50vh;
          min-height: 420px;
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

        /* Ensure navbar in careers page has white text when not scrolled */
        .contact-page .sobha-navbar:not(.is-scrolled):not(.mega-open) .nav-link,
        .contact-page .sobha-navbar:not(.is-scrolled):not(.mega-open) .text-logo-wrapper,
        .contact-page .sobha-navbar:not(.is-scrolled):not(.mega-open) .icon-button {
          color: #ffffff !important;
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.55) 0%,
            rgba(0, 0, 0, 0.1) 25%,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0.65) 100%
          );
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
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #ffffff;
          display: inline-block;
          margin-bottom: 12px;
          opacity: 0.92;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .contact-hero-title {
          font-family: var(--font-serif, 'Playfair Display', serif);
          font-size: clamp(38px, 5.5vw, 48px);
          font-weight: 400;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
          line-height: 1.08;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.45);
        }

        .contact-hero-desc {
          font-family: var(--font-sans);
          font-size: clamp(15px, 1.2vw, 17px);
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.65;
          margin: 0;
          max-width: 680px;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
        }

        /* Body Section */
        .careers-body-section {
          padding: 90px 0;
        }

        .careers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .sub-title {
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 600;
          color: var(--color-gold-accent);
          display: block;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: 34px;
          font-weight: 400;
          color: var(--color-text-dark);
          line-height: 1.25;
          margin-bottom: 20px;
        }

        .careers-desc-lead {
          font-size: 17px;
          line-height: 1.6;
          color: var(--color-text-dark);
          font-weight: 500;
          margin-bottom: 16px;
        }

        .careers-desc-body {
          font-size: 15px;
          line-height: 1.65;
          color: var(--color-text-muted);
          margin-bottom: 30px;
        }

        .careers-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }

        .highlight-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .highlight-icon {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(180, 133, 100, 0.1);
          color: var(--color-gold-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .highlight-item h4 {
          font-size: 16px;
          font-weight: 600;
          color: var(--color-text-dark);
          margin-bottom: 4px;
        }

        .highlight-item p {
          font-size: 13.5px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .careers-direct-contact-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 24px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
        }

        .careers-direct-contact-card h4 {
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text-dark);
          margin-bottom: 14px;
        }

        .contact-line {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: var(--color-text-muted);
          margin-bottom: 10px;
        }

        .contact-line:last-child {
          margin-bottom: 0;
        }

        .contact-line svg {
          color: var(--color-gold-accent);
        }

        .contact-line a {
          color: var(--color-text-dark);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-line a:hover {
          color: var(--color-gold-accent);
        }

        /* Form Card */
        .careers-form-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 36px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .form-card-title {
          font-size: 24px;
          font-weight: 500;
          color: var(--color-text-dark);
          margin-bottom: 6px;
        }

        .form-card-subtitle {
          font-size: 13.5px;
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }

        .simple-career-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--color-text-dark);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 11px 14px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 6px;
          font-family: inherit;
          font-size: 13.5px;
          color: var(--color-text-dark);
          background: #fafafa;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--color-gold-accent);
          background: #ffffff;
        }

        /* Custom File Upload Box */
        .custom-file-upload-box {
          position: relative;
          width: 100%;
        }

        .file-drop-label {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border: 1.5px dashed rgba(180, 133, 100, 0.4);
          background: #fafafa;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .file-drop-label:hover {
          border-color: var(--color-gold-accent);
          background: rgba(180, 133, 100, 0.05);
        }

        .upload-icon {
          color: var(--color-gold-accent);
          flex-shrink: 0;
        }

        .upload-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .upload-title {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--color-text-dark);
        }

        .upload-subtitle {
          font-size: 11.5px;
          color: var(--color-text-muted);
        }

        .hidden-file-input {
          display: none;
        }

        .selected-file-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(180, 133, 100, 0.08);
          border: 1px solid rgba(180, 133, 100, 0.3);
          border-radius: 8px;
        }

        .file-icon {
          color: var(--color-gold-accent);
          flex-shrink: 0;
        }

        .file-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          overflow: hidden;
        }

        .file-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-dark);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .file-size {
          font-size: 11px;
          color: var(--color-text-muted);
        }

        .remove-file-btn {
          background: transparent;
          border: none;
          color: #dc3545;
          padding: 4px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .remove-file-btn:hover {
          background: rgba(220, 53, 69, 0.1);
        }

        .cta-submit-btn {
          margin-top: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px;
          background: var(--color-gold-accent);
          color: #ffffff;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(180, 133, 100, 0.25);
        }

        .cta-submit-btn:hover {
          background: #9d7153;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(180, 133, 100, 0.35);
        }

        .form-success-box {
          text-align: center;
          padding: 30px 10px;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(180, 133, 100, 0.12);
          color: var(--color-gold-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .form-success-box h3 {
          font-size: 22px;
          margin-bottom: 10px;
          color: var(--color-text-dark);
        }

        .form-success-box p {
          font-size: 14px;
          color: var(--color-text-muted);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .form-error-msg {
          background: rgba(220, 53, 69, 0.1);
          color: #dc3545;
          padding: 10px;
          border-radius: 6px;
          font-size: 13px;
          margin-bottom: 10px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .careers-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-hero {
            padding-left: 24px;
            padding-bottom: 50px;
            height: 42vh;
            min-height: 360px;
          }
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .careers-form-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
