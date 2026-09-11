import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TeaserPosterModal from './TeaserPosterModal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ALL_PROJECTS = [
  {
    id: 1,
    category: 'Villa',
    title: 'Crystal Moonlight',
    location: 'Medavakkam - Chennai',
    area: '2,200 - 3,300 Sq.Ft.',
    image: '/images/project/CML/Elevation-card.png',
    link: '/crystal-moonlight-villa',
    centerInfo: '3 BHK & 4 BHK Luxury Villas',
    badge: 'Ready to Move'
  },
  {
    id: 2,
    category: 'Apartment',
    title: 'Pasha Pinnacle',
    location: 'Royapettah - Chennai',
    area: '1,335 - 1,358 Sq.Ft.',
    image: '/images/project/pasha-pinnacle/hero.png',
    link: '/pasha-pinnacle',
    centerInfo: '3 BHK Apartments',
    badge: 'Ongoing'
  },
  {
    id: 3,
    category: 'Plots',
    title: 'CMR Global City',
    location: 'Maduranthakam - Chennai',
    area: '610 - 2,694 Sq.Ft.',
    image: '/images/project/CMR/hero.png',
    link: '/cmr-global-city',
    centerInfo: 'Gated Villa Plots',
    badge: 'Township'
  },
  {
    id: 4,
    category: 'Plots',
    title: 'Ashok Nagar',
    location: 'Maduranthakam - Chennai',
    area: '657 - 1,947 Sq.Ft.',
    image: '/images/project/ashok-nagar/cards.webp',
    link: '/ashok-nagar-villa-plots-in-maduranthakam',
    centerInfo: 'Villa Plots',
    badge: 'Plotted'
  },
  {
    id: 5,
    category: 'Villa',
    title: 'Bay Vista',
    location: 'ECR - Chennai',
    area: 'Luxury Beachfront',
    image: '/images/project/Bayvista/Bay Vista Teaser.jpeg',
    teaserPoster: '/images/project/Bayvista/Bay Vista Teaser.jpeg',
    link: '#bay-vista',
    centerInfo: 'Upcoming Project',
    badge: 'Coming Soon'
  },
  {
    id: 6,
    category: 'Villa',
    title: 'Lakeshore',
    location: 'ECR - Chennai',
    area: 'Waterfront Estate',
    image: '/images/project/lakeshore/Lakeshore Hero Banner-01.jpg.jpeg',
    teaserPoster: '/images/project/lakeshore/Lakeshore Hero Banner-01.jpg.jpeg',
    link: '#lakeshore',
    centerInfo: 'Upcoming Project',
    badge: 'Coming Soon'
  }
];

export default function ProjectsSection() {
  const [selectedTeaser, setSelectedTeaser] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray('.maia-section-slide');
      slides.forEach((slide, i) => {
        const img = slide.querySelector('.maia-bg-img');
        const headerContent = slide.querySelector('.maia-header-content');
        const nextSlide = slides[i + 1];

        if (img) {
          // Continuous smooth parallax scroll scrub for every slide
          gsap.fromTo(
            img,
            { yPercent: -12, scale: 1.15 },
            {
              yPercent: 12,
              scale: 1.0,
              ease: 'none',
              scrollTrigger: {
                trigger: i === 0 ? '.projects-headline-intro' : slide,
                start: i === 0 ? 'bottom bottom' : 'top bottom',
                endTrigger: nextSlide || slide,
                end: nextSlide ? 'top top' : 'bottom top',
                scrub: 1.0,
                invalidateOnRefresh: true,
              },
            }
          );
        }

        // Subtly float title text up & fade as next curtain slide covers it
        if (headerContent && nextSlide) {
          gsap.to(headerContent, {
            y: -50,
            opacity: 0.3,
            ease: 'none',
            scrollTrigger: {
              trigger: nextSlide,
              start: 'top bottom',
              end: 'top top',
              scrub: 1.0,
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="maia-portfolio-wrapper" id="projects">
      
      {/* ── Headline Intro Section (Matching Reference Screenshot) ── */}
      <div className="projects-headline-intro">
        <div className="container text-center">
          <h2 className="projects-headline-title">Stories built on trust</h2>
          <p className="projects-headline-subtitle">
            Discover homes and investment opportunities tailored to you.<br />
            With our trusted expertise and local knowledge.
          </p>
        </div>
      </div>

      {/* ── Maia Full-Screen Project Sections ── */}
      <div className="maia-sections-list">
        {ALL_PROJECTS.map((project, index) => {
          const isTeaser = !!project.teaserPoster;
          return (
            <section
              key={project.id}
              className="maia-section-slide"
              style={{
                position: 'sticky',
                top: 0,
                zIndex: index + 1,
              }}
            >
              <div className="maia-outer">
                <div className="maia-inner">
                  <a
                    href={project.link || '#contact'}
                    className="maia-bg-link"
                    onClick={(e) => {
                      if (isTeaser) {
                        e.preventDefault();
                        setSelectedTeaser({ image: project.teaserPoster, title: project.title });
                      }
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div className="maia-bg-overlay" />

                    {/* Exact Maia Header Content Block (Top Left: top: 60px/80px, left: 80px) */}
                    <div className="maia-header-content">
                      <h4 className="maia-title">{project.title}</h4>
                      
                      <p className="maia-location-p">
                        <svg className="maia-map-icon" width="22" height="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.0625 10.1562C20.0625 14.5746 12.0625 22.1562 12.0625 22.1562C12.0625 22.1562 4.0625 14.5746 4.0625 10.1562C4.0625 5.73797 7.64422 2.15625 12.0625 2.15625C16.4808 2.15625 20.0625 5.73797 20.0625 10.1562Z" stroke="white" strokeWidth="1.5"></path>
                          <path d="M12.0625 11.1562C12.6148 11.1562 13.0625 10.7085 13.0625 10.1562C13.0625 9.60397 12.6148 9.15625 12.0625 9.15625C11.5102 9.15625 11.0625 9.60397 11.0625 10.1562C11.0625 10.7085 11.5102 11.1562 12.0625 11.1562Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <span className="maia-location-span">{project.location}</span>
                      </p>
                    </div>

                    {/* Background Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="maia-bg-img"
                      draggable="false"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Teaser Poster Modal */}
      <TeaserPosterModal 
        isOpen={!!selectedTeaser} 
        onClose={() => setSelectedTeaser(null)} 
        posterImage={selectedTeaser?.image} 
        projectTitle={selectedTeaser?.title} 
      />

      <style>{`
        .maia-portfolio-wrapper {
          position: relative;
          width: 100%;
          background-color: #0b0b0b;
          overflow: hidden;
        }

        /* ── Centered Headline Intro (Matching Reference Screenshot) ── */
        .projects-headline-intro {
          background-color: #f2f2f2;
          color: #111111;
          padding: 100px 24px 70px 24px;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .projects-headline-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: clamp(40px, 5.8vw, 68px);
          font-weight: 400;
          color: #0a0a0a;
          line-height: 1.12;
          margin: 0 0 22px 0;
          letter-spacing: -0.015em;
        }

        .projects-headline-subtitle {
          font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
          font-size: clamp(15px, 1.6vw, 18px);
          font-weight: 400;
          color: #555555;
          line-height: 1.65;
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }

        /* ── Maia Sections List ── */
        .maia-sections-list {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .maia-section-slide {
          height: 100vh;
          height: 100dvh;
          color: #ffffff;
          position: relative;
          width: 100%;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        .maia-outer,
        .maia-inner {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }

        .maia-bg-link {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          text-decoration: none;
          overflow: hidden;
        }

        .maia-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.35) 0%,
            rgba(0, 0, 0, 0.05) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
          z-index: 1;
          pointer-events: none;
        }

        /* Exact Maia Header Content Block (Top Left: top: 60px, left: 80px) */
        .maia-header-content {
          position: absolute;
          top: 60px;
          left: 80px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 600px;
          will-change: transform, opacity;
        }

        @media (max-width: 1024px) {
          .maia-header-content {
            top: 30px;
            left: 24px;
          }
        }

        .maia-title {
          font-family: var(--font-heading);
          font-size: clamp(34px, 4.2vw, 56px);
          font-weight: 400;
          color: #ffffff;
          margin: 0 0 10px 0;
          line-height: 1.1;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .maia-location-p {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .maia-map-icon {
          flex-shrink: 0;
        }

        .maia-location-span {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }

        /* Background Image - Extended height & offset prevents gaps during parallax scrub */
        .maia-bg-img {
          position: absolute;
          left: 0;
          top: -15%;
          width: 100%;
          height: 130%;
          object-fit: cover;
          display: block;
          user-select: none;
          pointer-events: none;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
