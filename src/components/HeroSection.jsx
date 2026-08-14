import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import ScrollReveal from './ScrollReveal';
import 'swiper/css';
import 'swiper/css/effect-fade';

const HERO_SLIDES = [
  {
    image: '/images/home/hero.png',
    title: 'Crystal Moonlight Villas',
    subtitle: 'Ultra Luxury Gated Community in Medavakkam',
    link: '/crystal-moonlight-villa'
  },
  {
    image: '/images/hero_placeholders/aerial-view-small-village-country-roadside.jpg',
    title: 'Ashok Nagar',
    subtitle: 'Exclusive Gated Villa Plots in Maduranthakam',
    link: '/ashok-nagar-villa-plots-in-maduranthakam'
  },
  {
    image: '/images/home/project-image-1.png',
    title: 'Bay Vista',
    subtitle: 'Bespoke Luxury Villas on ECR',
    link: '/crystal-moonlight-villa'
  }
];

export default function HeroSection({ startZoom }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = HERO_SLIDES[activeIndex] || HERO_SLIDES[0];

  return (
    <section className="hero-section" id="hero">
      {/* Background Image Slider Container */}
      <div className="hero-background">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          speed={2000}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="hero-swiper"
        >
          {HERO_SLIDES.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={slide.image}
                alt={slide.title}
                className={`hero-bg-image ${startZoom ? 'animate-zoom' : ''}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-overlay"></div>
      </div>

      {/* Overlaid Content */}
      <div className="container hero-content">
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="hero-text-block" key={activeIndex} style={{ animation: 'fadeUp 0.8s ease forwards' }}>
            <h1 className="display-title hero-title">
              {currentSlide.title}
            </h1>
            <p className="hero-subtitle">
              {currentSlide.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.25}>
          <div className="hero-cta-block" key={`cta-${activeIndex}`} style={{ animation: 'fadeUp 0.8s ease forwards' }}>
            <a href={currentSlide.link} className="btn-discover">
              DISCOVER
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .hero-section {
          position: sticky;
          top: 0;
          z-index: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start; /* Moved to left */
          overflow: hidden;
          padding-bottom: 30px; /* Adjusted padding */
          background-color: var(--color-bg-navy);
          will-change: transform, opacity;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-swiper {
          width: 100%;
          height: 100%;
        }
        
        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          transform: scale(1);
          transition: filter 0.8s ease-in-out;
        }
        
        .hero-bg-image.animate-zoom {
          animation: slowZoom 15s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom, 
            rgba(0, 0, 0, 0.75) 0%, 
            rgba(0, 0, 0, 0.0) 25%, 
            rgba(0, 0, 0, 0.3) 70%, 
            rgba(0, 0, 0, 0.75) 100%
          );
          z-index: 2;
          opacity: 0;
          animation: fadeIn 1.8s ease forwards;
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center; 
          width: 100%;
          padding: 0 40px; /* Padding from edge */
          margin-bottom: 20px;
        }
        
        .hero-text-block {
          text-align: center; 
          margin-bottom: 18px;
        }

        
        .hero-title {
          line-height: 1.25;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 8px;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          opacity: 0;
          animation: fadeUp 1.4s var(--ease-luxury) forwards;
          animation-delay: 2.2s;
        }
        
        .hero-subtitle {
          font-size: 16px;
          font-weight: 400;
          text-align: center;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.8;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          opacity: 0;
          animation: fadeUp 1.4s var(--ease-luxury) forwards;
          animation-delay: 2.5s;
          margin-bottom: 8px;
        }

        .btn-discover {
          display: inline-block;

          font-size: 11px;
          font-weight: 400;

          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.47);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 14px 40px;
          border-radius: 100px;
          text-decoration: none;
          backdrop-filter: blur(38px);
          -webkit-backdrop-filter: blur(38px);
          transition: all 0.4s ease;
          opacity: 0;
          animation: fadeUp 1.4s var(--ease-luxury) forwards;
          animation-delay: 2.8s;
        }
        
        .btn-discover:hover {
          background: rgba(255, 255, 255, 0.3);
          color: #fff;
          border-color: rgba(255, 255, 255, 0.6);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
