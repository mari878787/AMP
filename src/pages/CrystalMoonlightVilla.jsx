import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyProject from '../components/WhyProject';
import ProjectSpecs from '../components/ProjectSpecs';

const SPECIFICATIONS = [
  {
    id: 'structure',
    label: 'Structure',
    index: '01',
    title: 'STRUCTURE',
    details: [
      'Seismic Zone III compliant RCC framed structure.',
      'Walls will be of Aerocon blocks and plastered on both sides.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'flooring',
    label: 'Flooring',
    index: '02',
    title: 'FLOORING',
    details: [
      'Premium double charged vitrified tiles (800mm x 800mm) in Living, Dining, and Bedrooms.',
      'Anti-skid ceramic tiles in bathrooms, utility, and balcony areas.',
      'Granite flooring for staircase and main entrance lobby.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'wall-tiles',
    label: 'Wall Tiles',
    index: '03',
    title: 'WALL TILES',
    details: [
      'Glazed ceramic wall tiles up to 7 feet height in all bathrooms.',
      'Glazed ceramic tiles up to 2 feet height above the kitchen counter.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'doors',
    label: 'Doors',
    index: '04',
    title: 'DOORS',
    details: [
      'Main Door: Premium teak wood frame with designer flush shutter, equipped with smart digital lock.',
      'Internal Doors: Seasoned wood frames with laminated flush shutters and high-quality hardware.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'windows',
    label: 'Windows & Ventilators',
    index: '05',
    title: 'WINDOWS & VENTILATORS',
    details: [
      'UPVC windows with sliding/casement shutters, safety MS grills, and bug screens.',
      'UPVC ventilators with exhaust fan provision and louvers in bathrooms.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'plumbing',
    label: 'Plumbing & Sanitary Installations',
    index: '06',
    title: 'PLUMBING & SANITARY',
    details: [
      'Wall-mounted EWC with concealed flush tank of Jaguar/Kohler or equivalent make.',
      'Premium chrome-plated fittings, single-lever diverter in all bathrooms.',
      'CPVC piping for internal water supply and PVC piping for sewage lines.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    index: '07',
    title: 'KITCHEN',
    details: [
      'Highly polished granite counter-top with double-bowl stainless steel sink.',
      'Provision for water purifier, chimney, exhaust, and microwave power points.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'elevator',
    label: 'Elevator',
    index: '08',
    title: 'ELEVATOR',
    details: [
      'Premium 6-passenger automatic lift with automatic rescue device (ARD) and backup power.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'driveway',
    label: 'Driveway',
    index: '09',
    title: 'DRIVEWAY',
    details: [
      'Interlocking concrete paver blocks for driveways and common pathways.',
      'VDF (Vacuum Dewatered Flooring) for basement parking areas.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'security',
    label: 'Security System',
    index: '10',
    title: 'SECURITY SYSTEM',
    details: [
      '24/7 CCTV surveillance across all common areas and peripheral boundaries.',
      'Video door phone system installed for each individual villa.',
      'Security cabin at the entrance gate with intercom facilities.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'power-backup',
    label: 'Power Backup',
    index: '11',
    title: 'POWER BACKUP',
    details: [
      '100% DG power backup for all common area lighting, elevators, and water pumps.',
      '1KV power backup for each individual villa for lighting and fans.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'electrical',
    label: 'Electrical',
    index: '12',
    title: 'ELECTRICAL',
    details: [
      'Three-phase power supply with independent meters and phase-selectors.',
      'Concealed copper wiring with modular switches of Legrand/Schneider or equivalent make.',
      'AC points in living room and all bedrooms.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'painting',
    label: 'Painting',
    index: '13',
    title: 'PAINTING',
    details: [
      'Internal Walls: Finished with two coats of putty, primer, and premium acrylic emulsion paint.',
      'External Walls: Finished with textured paint and weather-proof exterior emulsion.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'facilities',
    label: 'Other Facilities & Amenities',
    index: '14',
    title: 'FACILITIES & AMENITIES',
    details: [
      'Rainwater harvesting system and underground sump with water treatment plant.',
      'Solar panel provision on terrace for water heating and lighting.',
      'Individual water meter for each villa.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'home-automation',
    label: 'Home Automation',
    index: '15',
    title: 'HOME AUTOMATION',
    details: [
      'Smart home hubs with voice/mobile app control for lighting and fan speed.',
      'Motion-sensor lighting for entrance lobby and restrooms.'
    ],
    image: '/images/project/spec-structure.png'
  }
];

export default function CrystalMoonlightVilla() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-detail-page">
      <Navbar projectTitle="Crystal Moonlight Villa" />

      <main>
        <section className="project-hero-section">
          {/* 4-Split Curtain Panels */}
          <div className="project-split-mask" aria-hidden="true">
            <div className="split-panel panel-1"></div>
            <div className="split-panel panel-2"></div>
            <div className="split-panel panel-3"></div>
            <div className="split-panel panel-4"></div>
          </div>

          {/* Background Image Container */}
          <div className="project-hero-background">
            <img
              src="/images/home/hero.png"
              alt="Crystal Moonlight Villa"
              className="project-hero-bg-image"
            />
            <div className="project-hero-light-leak" aria-hidden="true"></div>
            <div className="project-hero-overlay"></div>
          </div>

          {/* Overlaid Title Content */}
          <div className="project-hero-content">
            <span className="project-tag-reveal">Luxury Villa</span>
            <h1 className="project-hero-title">
              Crystal Moonlight <span className="highlight-text">Villa</span>
            </h1>
            <p className="project-hero-subtitle">MEDAVAKKAM, CHENNAI</p>
          </div>
        </section>

        {/* Project Sub-navigation Bar */}
        <nav className="project-sub-nav">
          <div className="container sub-nav-container">
            <a href="#overview" className="sub-nav-link">OVERVIEW</a>
            <a href="#why-cmv" className="sub-nav-link active">WHY CRYSTAL MOONLIGHT</a>
            <a href="#location" className="sub-nav-link">LOCATION HIGHLIGHTS</a>
            <a href="#floorplans" className="sub-nav-link">FLOOR PLANS</a>
            <a href="#pricing" className="sub-nav-link">SIZE & PRICE</a>
          </div>
        </nav>

        {/* Reusable Why Project Narrative Section */}
        <WhyProject
          projectName="Crystal Moonlight"
          description="Moonlight Villa is an exclusive gated community of 47 thoughtfully designed villas, offering a perfect blend of luxury, privacy, and modern living in the heart of Medavakkam, Chennai."
          imageSrc="/images/project/why-cmv.png"
        />

        {/* Reusable Project Specifications Section */}
        <ProjectSpecs
          specs={SPECIFICATIONS}
          title="PROJECT"
          highlightTitle="SPECIFICATIONS"
          subtitle="PROJECT DETAILS"
        />
      </main>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        .project-detail-page {
          background-color: #060b1d;
          min-height: 100vh;
        }

        .project-sub-nav {
          background-color: #ffffff;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          position: sticky;
          top: 60px; /* Right under the sticky main navbar */
          z-index: 90;
          padding: 18px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .sub-nav-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .sub-nav-link {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.25s ease, border-color 0.25s ease;
          padding-bottom: 4px;
          border-bottom: 2px solid transparent;
        }

        .sub-nav-link:hover,
        .sub-nav-link.active {
          color: #1e293b;
        }

        .sub-nav-link.active {
          border-bottom-color: #8c764d;
        }




        .project-hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 700px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background-color: #060b1d;
        }

        /* ── 4-Split Reveal Mask ── */
        .project-split-mask {
          position: absolute;
          inset: 0;
          display: flex;
          z-index: 40;
          pointer-events: none;
        }
        
        .split-panel {
          flex: 1;
          height: 100%;
          background-color: #060b1d;
          animation: slideAwayProject 1.2s cubic-bezier(0.85, 0, 0.15, 1) forwards;
        }
        
        .panel-1 {
          transform-origin: top;
          animation-delay: 0.1s;
        }
        .panel-2 {
          transform-origin: bottom;
          animation-delay: 0.22s;
        }
        .panel-3 {
          transform-origin: top;
          animation-delay: 0.34s;
        }
        .panel-4 {
          transform-origin: bottom;
          animation-delay: 0.46s;
        }

        @keyframes slideAwayProject {
          to {
            transform: scaleY(0);
          }
        }

        /* ── Background Image ── */
        .project-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .project-hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        .project-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom, 
            rgba(6, 11, 29, 0.7) 0%, 
            rgba(6, 11, 29, 0.4) 50%, 
            rgba(6, 11, 29, 0.75) 100%
          );
          z-index: 2;
        }

        /* ── Light Leak ── */
        .project-hero-light-leak {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          overflow: hidden;
          mix-blend-mode: screen;
        }

        .project-hero-light-leak::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -20%;
          width: 80%;
          height: 80%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(186, 148, 76, 0.15) 0%, rgba(186, 148, 76, 0.03) 50%, transparent 80%);
          filter: blur(80px);
          animation: floatGoldProject 25s infinite alternate ease-in-out;
          will-change: transform;
        }

        .project-hero-light-leak::after {
          content: '';
          position: absolute;
          bottom: -20%;
          right: -20%;
          width: 80%;
          height: 80%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, rgba(2, 132, 199, 0.03) 50%, transparent 80%);
          filter: blur(80px);
          animation: floatTealProject 30s infinite alternate ease-in-out;
          will-change: transform;
        }

        @keyframes floatGoldProject {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          100% { transform: translate3d(80px, 60px, 0) rotate(120deg); }
        }

        @keyframes floatTealProject {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          100% { transform: translate3d(-80px, -60px, 0) rotate(-120deg); }
        }

        /* ── Overlaid Content ── */
        .project-hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
          padding: 0 24px;
          margin-top: 60px; /* Offset for floating header */
        }

        .project-tag-reveal {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          color: #ba944c;
          letter-spacing: 0.25em;
          margin-bottom: 24px;
          opacity: 0;
          animation: fadeUpProject 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.8s;
          background: rgba(186, 148, 76, 0.12);
          border: 1px solid rgba(186, 148, 76, 0.3);
          padding: 6px 18px;
          border-radius: 50px;
          display: inline-block;
          backdrop-filter: blur(4px);
        }

        .project-hero-title {
          font-family: 'Helvetica World', 'HelveticaWorld', Helvetica, Arial, sans-serif;
          font-size: 54px;
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: 0.02em;
          color: #ffffff;
          margin-bottom: 24px;
          text-transform: uppercase;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.65), 0 2px 10px rgba(0, 0, 0, 0.4);
          opacity: 0;
          animation: fadeUpProject 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1s;
        }

        .project-hero-title .highlight-text {
          color: #e2b865;
        }

        .project-hero-subtitle {
          font-family: 'Helvetica Now', 'HelveticaNow', Helvetica, Arial, sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.95);
          letter-spacing: 0.25em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          opacity: 0;
          animation: fadeUpProject 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.2s;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 12px;
          margin-top: 4px;
          display: inline-block;
        }

        @keyframes fadeUpProject {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .project-hero-title {
            font-size: 38px;
          }
          }
        }


      `}</style>
    </div>
  );
}
