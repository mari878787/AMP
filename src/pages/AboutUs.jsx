// About Us Page
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import AboutLegacyExpand from '../components/AboutLegacyExpand';
import AboutQuoteStatement from '../components/AboutQuoteStatement';
import AboutStatsBar from '../components/AboutStatsBar';
import AboutPurposeSection from '../components/AboutPurposeSection';
import AboutJourneyAccordion from '../components/AboutJourneyAccordion';
import AboutTeamSection from '../components/AboutTeamSection';
import AboutCareersCTA from '../components/AboutCareersCTA';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-page">
      <Navbar />
      {/* 1. Hero Section: GSAP Scroll-Driven Image Expansion */}
      <AboutLegacyExpand 
        legacyYears="10+"
        legacyTitle="years of"
        legacySubtitle="INCREDIBLE LEGACY"
        description="Aadhithya Mohan Properties was founded in 2016 by a first-generation entrepreneur Mr. PNC Menon, the founder of the Group. The entity is a multinational, multiproduct group with developments and investments in the UAE, India, and UK."
        image="/images/maia/5.png"
      />

      {/* 2. Editorial Quote Statement Section */}
      <AboutQuoteStatement />

      {/* 3. Luxury Icon Metrics Bar Section */}
      <AboutStatsBar />

      {/* 4. Core Purpose & 4-Pillar Values Section (White Background) */}
      <AboutPurposeSection />

      {/* 5. Interactive Expanding Timeline Accordion Section */}
      <AboutJourneyAccordion />

      {/* 6. Meet The Team & Founder Spotlight Section */}
      <AboutTeamSection />

      {/* 7. Careers CTA Section */}
      <AboutCareersCTA />

      <style dangerouslySetInnerHTML={{ __html: `
        /* Ultra-Luxury Theme-Aligned Styles */
        .about-us-page {
          background-color: var(--color-white);
        }

        /* 1. Hero Section (Reusing Global Crystal Moonlight Styles) */
        .project-hero-section {
          position: relative;
          height: 70vh; /* Taller for luxury feel */
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .project-hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .project-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(29, 53, 87, 0.4);
          z-index: 1;
        }

        .project-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .project-tag-reveal {

          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
          color: var(--color-gold);

          margin-bottom: 24px;
        }

        .project-hero-title {
          color: var(--color-white);
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .project-hero-subtitle {

          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);

          text-transform: uppercase;
        }

        /* 2. Magazine-Style Overlap Section */
        .luxury-overlap-section {
          position: relative;
          width: 100%;
          padding-top: 100px;
          padding-bottom: 150px;
        }

        .overlap-image-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          width: 75%;
          height: 100%;
          z-index: 0;
        }

        .overlap-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(10%);
        }

        .relative-container {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          min-height: 700px;
        }

        .overlap-content-box {
          background-color: var(--color-white);
          padding: 80px 100px;
          width: 55%;
          box-shadow: 0 30px 60px rgba(29, 53, 87, 0.08);
          margin-top: 100px;
        }

        .overlap-divider {
          width: 60px;
          height: 1px;
          background-color: var(--color-gold);
          margin: 40px 0;
        }

        .luxury-body-text {

          font-size: 16px;
          line-height: 2;
          color: var(--color-text-dark);
          margin-bottom: 24px;
        }

        .lead-text {
          font-size: 20px;
          color: var(--color-text);
          font-weight: 400;
          line-height: 1.8;
        }

        /* 3. Massive Scale Typography (Stats) */
        .massive-stats-section {
          padding: 120px 0;
          background-color: var(--color-bg-light);
        }

        .raw-stats-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: var(--container-width);
          margin: 0 auto;
        }

        .raw-stat-item {
          text-align: center;
          flex: 1;
        }

        .raw-stat-number {

          font-size: clamp(80px, 10vw, 140px);
          font-weight: 300;
          color: var(--color-primary);
          line-height: 0.9;
          margin-bottom: 24px;

        }

        .raw-stat-plus {
          color: var(--color-gold);
          font-size: 0.6em;
          vertical-align: top;
          margin-left: 8px;
        }

        .raw-stat-k {
          font-size: 0.7em;
          font-weight: 300;
        }

        .raw-stat-label {

          font-size: 12px;
          font-weight: 400;

          text-transform: uppercase;
          color: var(--color-text-muted);
        }

        .raw-stat-divider {
          width: 1px;
          height: 120px;
          background-color: rgba(29, 53, 87, 0.08);
        }

        /* 4. Elegant Timeline */
        .elegant-timeline-section {
          padding: 150px 0 200px;
        }

        .timeline-raw-list {
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-raw-item {
          display: flex;
          align-items: flex-start;
          gap: 80px;
          padding: 60px 0;
          border-bottom: 1px solid rgba(29, 53, 87, 0.08);
        }

        .timeline-raw-year {
          flex: 0 0 150px;

          font-size: 48px;
          color: var(--color-gold);
          line-height: 1;
        }

        .timeline-raw-content {
          flex: 1;
        }

        .timeline-raw-title {

          font-size: 32px;
          font-weight: 400;
          color: var(--color-text);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .timeline-raw-desc {

          font-size: 17px;
          line-height: 1.9;
          color: var(--color-text-muted);
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .overlap-content-box {
            width: 70%;
            padding: 60px;
          }
        }

        @media (max-width: 768px) {
          .luxury-overlap-section {
            padding-top: 0;
          }
          .overlap-image-wrapper {
            position: relative;
            width: 100%;
            height: 50vh;
          }
          .relative-container {
            min-height: auto;
          }
          .overlap-content-box {
            width: 90%;
            margin: -100px auto 0;
            padding: 40px 30px;
          }
          
          .raw-stats-flex {
            flex-direction: column;
            gap: 60px;
          }
          .raw-stat-divider {
            width: 100px;
            height: 1px;
          }

          .timeline-raw-item {
            flex-direction: column;
            gap: 20px;
            padding: 40px 0;
          }
        }
      `}} />
      <Footer />
    </div>
  );
};

export default AboutUs;
