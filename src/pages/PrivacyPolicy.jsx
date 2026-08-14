import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar darkText={true} />
      <main style={{ minHeight: '80vh', backgroundColor: '#ffffff' }}>
        {/* Page Header */}
        <section style={{
          backgroundColor: 'var(--color-bg-light)',
          padding: '180px 20px 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: '0', right: '0', bottom: '0', left: '0', background: 'url("/images/bg/TR-1.png") center / cover', opacity: 0.05, pointerEvents: 'none' }}></div>
          <h1 style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--font-heading)', fontSize: '48px', fontWeight: '400', color: '#111111', margin: 0 }}>
            Privacy <span style={{ color: 'var(--color-highlight)' }}>Policy</span>
          </h1>
          <p style={{ position: 'relative', zIndex: 1, color: '#666666', marginTop: '16px', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Last Updated: August 2026
          </p>
        </section>

        <div className="container" style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#444444', lineHeight: '1.8', fontSize: '15px', fontFamily: 'var(--font-sans)' }}>
            <p style={{ marginBottom: '24px' }}>
              Welcome to Aadhithya Mohan Properties. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '400', marginTop: '40px', marginBottom: '16px', color: '#111111' }}>1. Information We Collect</h2>
            <p style={{ marginBottom: '24px' }}>
              We may collect personal information such as your name, email address, phone number, and other details when you voluntarily provide them to us through forms on our website, such as when you inquire about a project or subscribe to our newsletter.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '400', marginTop: '40px', marginBottom: '16px', color: '#111111' }}>2. How We Use Your Information</h2>
            <p style={{ marginBottom: '24px' }}>
              We use the collected information to respond to your inquiries, provide information about our projects, send promotional materials, improve our website, and ensure compliance with legal obligations.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '400', marginTop: '40px', marginBottom: '16px', color: '#111111' }}>3. Data Sharing</h2>
            <p style={{ marginBottom: '24px' }}>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '400', marginTop: '40px', marginBottom: '16px', color: '#111111' }}>4. Security</h2>
            <p style={{ marginBottom: '24px' }}>
              We implement a variety of security measures to maintain the safety of your personal information. However, no transmission of data over the internet is guaranteed to be completely secure.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '400', marginTop: '40px', marginBottom: '16px', color: '#111111' }}>5. Changes to This Policy</h2>
            <p style={{ marginBottom: '24px' }}>
              We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '400', marginTop: '40px', marginBottom: '16px', color: '#111111' }}>6. Contact Us</h2>
            <p style={{ marginBottom: '24px' }}>
              If you have any questions regarding this Privacy Policy, please contact us at info@aadithya.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
