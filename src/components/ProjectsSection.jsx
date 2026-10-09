import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TeaserPosterModal from './TeaserPosterModal';
import ScrollReveal from './ScrollReveal';

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
    image: '/images/project/CML/Look_1.5.png',
    mobileImage: '/images/project/CML/Look_1.5.png',
    link: '/projects/villas/crystal-moonlight-villa-in-medavakkam',
    centerInfo: '3 BHK & 4 BHK Luxury Villas',
    badge: 'Ready to Move',
    bhkConfig: '3 & 4 BHK Luxury Villas'
  },
  {
    id: 2,
    category: 'Apartment',
    title: 'Pasha Pinnacle',
    location: 'Royapettah - Chennai',
    area: '1,335 - 1,358 Sq.Ft.',
    image: '/images/project/pasha-pinnacle/10.jpeg',
    mobileImage: '/images/project/pasha-pinnacle/10.jpeg',
    link: '/projects/apartments/pasha-pinnacle-luxury-apartment-in-royapettah',
    centerInfo: '3 BHK Apartments',
    badge: 'Ongoing',
    bhkConfig: '3 BHK Luxury Apartments'
  },
  {
    id: 3,
    category: 'Plots',
    title: 'CMR Global City',
    location: 'Maduranthakam - Chennai',
    area: '610 - 2,694 Sq.Ft.',
    image: '/images/project/CMR/hero.png',
    mobileImage: '/images/project/CMR/mobile-hero.png',
    link: '/projects/plots/cmr-global-city-villa-plots-in-maduranthakam',
    centerInfo: 'Gated Villa Plots',
    badge: 'Township',
    bhkConfig: 'Gated Villa Plots'
  },
  {
    id: 5,
    category: 'Villa',
    title: 'Bay Vista',
    location: 'ECR - Chennai',
    area: 'Luxury Beachfront',
    image: '/images/project/Bayvista/Luxury Infinity Pool at Sunset.png',
    mobileImage: '/images/project/Bayvista/Luxury Infinity Pool at Sunset.png',
    teaserPoster: '/images/project/Bayvista/Luxury Infinity Pool at Sunset.png',
    link: '#bay-vista',
    centerInfo: 'Upcoming Project',
    badge: 'Coming Soon',
    bhkConfig: 'Beachfront Villas'
  },
  {
    id: 6,
    category: 'Villa',
    title: 'Lakeshore',
    location: 'ECR - Chennai',
    area: 'Waterfront Estate',
    image: '/images/project/lakeshore/Lakeside Pavilion Under the Stars.png',
    mobileImage: '/images/project/lakeshore/Lakeside Pavilion Under the Stars.png',
    teaserPoster: '/images/project/lakeshore/Lakeside Pavilion Under the Stars.png',
    link: '#lakeshore',
    centerInfo: 'Upcoming Project',
    badge: 'Coming Soon',
    bhkConfig: 'Coming Soon'
  }
];

export default function ProjectsSection() {
  const [selectedTeaser, setSelectedTeaser] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray('.maia-section-slide');
      slides.forEach((slide, i) => {
        const img = slide.querySelector('.maia-bg-img');
        const nextSlide = slides[i + 1];

        if (img) {
          // Dynamic hardware-accelerated translate3d on Y-axis with lockstep 1:1 sync
          gsap.fromTo(
            img,
            { 
              yPercent: 50,
              scale: 1.05,
              force3D: true
            },
            {
              yPercent: -50,
              scale: 1.0,
              ease: 'none',
              force3D: true,
              scrollTrigger: {
                trigger: i === 0 ? '.projects-headline-intro' : slide,
                start: i === 0 ? 'bottom bottom' : 'top bottom',
                endTrigger: nextSlide || slide,
                end: nextSlide ? 'top top' : 'bottom top',
                scrub: true,
                invalidateOnRefresh: true,
              },
            }
          );
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
          <ScrollReveal className="projects-headline-title" animation="fadeUp" delay={0.1}>
            <h2 className="section-title">Stories built on trust</h2>
          </ScrollReveal>

          <ScrollReveal className="projects-headline-subtitle" animation="fadeUp" delay={0.3}>
            <p className="body-text" style={{ textAlign: "center" }}>
              Discover homes and investment opportunities tailored to you. With our trusted expertise and local knowledge.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Maia Full-Screen Project Sections (Fixed-Image Curtain Reveal) ── */}
      <div className="maia-sections-list">
        {ALL_PROJECTS.map((project) => {
          const isTeaser = !!project.teaserPoster;
          return (
            <section
              key={project.id}
              className="maia-section-slide"
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
                    {/* Fixed Viewport Background Frame (Clipped by Slide Container) */}
                    <div className="maia-fixed-frame">
                      <picture className="maia-picture">
                        <source media="(max-width: 768px)" srcSet={encodeURI(project.mobileImage || project.image)} />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="maia-bg-img"
                          draggable="false"
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                    </div>

                    {/* Header Content Block that scrolls with the section */}
                    <div className="maia-header-content">
                      <h4 className="maia-title">{project.title}</h4>
                      
                      <div className="maia-meta-row">
                        <p className="maia-location-p">
                          <svg className="maia-map-icon" width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0625 10.1562C20.0625 14.5746 12.0625 22.1562 12.0625 22.1562C12.0625 22.1562 4.0625 14.5746 4.0625 10.1562C4.0625 5.73797 7.64422 2.15625 12.0625 2.15625C16.4808 2.15625 20.0625 5.73797 20.0625 10.1562Z" stroke="white" strokeWidth="1.5"></path>
                            <path d="M12.0625 11.1562C12.6148 11.1562 13.0625 10.7085 13.0625 9.15625C13.0625 9.60397 12.6148 9.15625 12.0625 9.15625C11.5102 9.15625 11.0625 9.60397 11.0625 10.1562C11.0625 10.7085 11.5102 11.1562 12.0625 11.1562Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                          <span className="maia-location-span">{project.location}</span>
                        </p>
                        {(project.bhkConfig || project.centerInfo) && (
                          <>
                            <span className="maia-meta-separator">•</span>
                            <p className="maia-config-p">
                              <span className="maia-config-span">{project.bhkConfig || project.centerInfo}</span>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
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
          background-color: #fff;
          overflow: hidden;
        }

        /* ── Centered Headline Intro (Matching Reference Screenshot) ── */
        .projects-headline-intro {
          color: #111111;
          padding: 60px 24px 30px 24px;
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
          height: calc(100vh - 50px);
          color: #ffffff;
          position: relative;
          width: 100%;
          clip-path: inset(0 0 0 0);
          -webkit-clip-path: inset(0 0 0 0);
          overflow: hidden;
          margin: 0;
          padding: 0;
          background-color: #030406;
        }

        .maia-outer,
        .maia-inner {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .maia-bg-link {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: inherit;
        }

        /* Fixed Viewport Background Frame (Locked to screen, masked by parent slide) */
        .maia-fixed-frame {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          pointer-events: none;
          z-index: 1;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .maia-picture {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        .maia-bg-img {
          position: absolute;
          left: 0;
          top: -15%;
          width: 100%;
          height: 130%;
          object-fit: cover;
          object-position: center center;
          display: block;
          user-select: none;
          pointer-events: none;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Maia Header Content Block positioned at Top */
        .maia-header-content {
          position: absolute;
          top: 60px;
          bottom: auto;
          left: 80px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 650px;
          will-change: transform, opacity;
        }

        @media (max-width: 1024px) {
          .maia-header-content {
            top: 36px;
            bottom: auto;
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
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
        }

        .maia-meta-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .maia-location-p,
        .maia-config-p {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .maia-map-icon {
          flex-shrink: 0;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6));
        }

        .maia-location-span,
        .maia-config-span {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .maia-meta-separator {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }
      `}</style>
    </section>
  );
}
