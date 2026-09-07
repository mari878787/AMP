import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import ScrollReveal from './ScrollReveal';
import 'swiper/css';
import 'swiper/css/effect-fade';

const HERO_SLIDES = [
  {
    image: '/images/project/CML/Elevation.png',
    mobileImage: '/images/project/CML/hero-mobile.png',
    title: 'Crystal Moonlight',
    subtitle: 'Where Contemporary Design Meets Serene Community Living',
    link: '/crystal-moonlight-villa'
  },
  {
    image: '/images/project/pasha-pinnacle/hero.png',
    mobileImage: '/images/project/pasha-pinnacle/mobile-hero.png',
    title: 'Pasha Pinnacle',
    subtitle: 'Where Contemporary Design Meets Urban Elegance',
    link: '/pasha-pinnacle'
  },
  {
    image: '/images/project/CMR/hero.png',
    mobileImage: '/images/project/CMR/mobile-hero.png',
    title: 'CMR Global City',
    subtitle: 'Where Opportunity Meets Enduring Value',
    link: '/cmr-global-city'
  },
  {
    video: '/images/project/ashok-nagar/Ashok Nagar Teaser.mp4',
    mobileVideo: '/images/project/ashok-nagar/Ashok Nagar Mobile View-1.mp4',
    image: '/images/project/ashok-nagar/hero-image.png',
    mobileImage: '/images/project/ashok-nagar/mobile-hero.png',
    title: 'Ashok Nagar',
    subtitle: 'Where Every Plot Holds the Promise of Tomorrow',
    link: '/ashok-nagar-villa-plots-in-maduranthakam'
  }
];

export default function HeroSection({ startZoom }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const currentSlide = HERO_SLIDES[activeIndex] || HERO_SLIDES[0];

  const handleVideoEnded = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      if (swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start();
      }
    }
  };

  const handleSlideTransition = (swiper) => {
    const realIdx = swiper.realIndex;
    setActiveIndex(realIdx);
    const isVideoSlide = Boolean(HERO_SLIDES[realIdx]?.video);

    const activeSlideEl = swiper.slides[swiper.activeIndex];
    const allVideos = document.querySelectorAll('.hero-bg-video');
    
    allVideos.forEach(v => {
      v.pause();
    });

    if (isVideoSlide) {
      if (swiper.autoplay) {
        swiper.autoplay.stop();
      }
      if (activeSlideEl) {
        const activeVideos = activeSlideEl.querySelectorAll('video');
        activeVideos.forEach(v => {
          v.currentTime = 0;
          const playPromise = v.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        });
      }
    } else {
      if (swiper.autoplay && !swiper.autoplay.running) {
        swiper.autoplay.start();
      }
    }
  };

  useEffect(() => {
    const isVideoSlide = Boolean(HERO_SLIDES[activeIndex]?.video);
    const activeSlideEl = document.querySelector('.hero-swiper .swiper-slide-active');
    const allVideos = document.querySelectorAll('.hero-bg-video');

    allVideos.forEach(v => {
      v.pause();
    });

    if (isVideoSlide) {
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.stop();
      }
      if (activeSlideEl) {
        const activeVideos = activeSlideEl.querySelectorAll('video');
        activeVideos.forEach(v => {
          v.currentTime = 0;
          const playPromise = v.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        });
      }
    } else {
      if (swiperRef.current && swiperRef.current.autoplay && !swiperRef.current.autoplay.running) {
        swiperRef.current.autoplay.start();
      }
    }
  }, [activeIndex]);

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
            delay: 10000,
            disableOnInteraction: false
          }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSlideChangeTransitionStart={handleSlideTransition}
          className="hero-swiper"
        >
          {HERO_SLIDES.map((slide, idx) => (
            <SwiperSlide key={idx}>
              {slide.video ? (
                <div className="hero-video-wrapper">
                  <video
                    className="hero-bg-video desktop-only-video"
                    src={slide.video}
                    poster={slide.image}
                    preload="auto"
                    muted
                    playsInline
                    onEnded={handleVideoEnded}
                  />
                  <video
                    className="hero-bg-video mobile-only-video"
                    src={slide.mobileVideo || slide.video}
                    poster={slide.mobileImage || slide.image}
                    preload="auto"
                    muted
                    playsInline
                    onEnded={handleVideoEnded}
                  />
                </div>
              ) : (
                <picture className="hero-picture">
                  <source media="(max-width: 768px)" srcSet={slide.mobileImage || slide.image} />
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`hero-bg-image ${startZoom ? 'animate-zoom' : ''}`}
                  />
                </picture>
              )}
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
          height: 100dvh;
          min-height: -webkit-fill-available;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          overflow: hidden;
          padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 20px);
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

        .hero-picture {
          display: block;
          width: 100%;
          height: 100%;
        }

        .hero-video-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .hero-bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          display: block;
        }

        .desktop-only-video {
          display: block;
        }

        .mobile-only-video {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-only-video {
            display: none;
          }
          .mobile-only-video {
            display: block;
          }
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
            rgba(0, 0, 0, 0) 60%, 
            rgba(0, 0, 0, 0.85) 100%
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
          padding: 0 40px;
          margin-bottom: clamp(40px, 3vh, 110px);
        }
        
        .hero-text-block {
          text-align: center; 
          margin-bottom: 18px;
        }

        .hero-title {
          line-height: 1.25;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 12px;
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
          border-color: rgba(255, 255, 255, 0.8);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 0 20px;
            margin-bottom: clamp(75px, 14vh, 100px);
          }
          .hero-text-block {
            margin-bottom: 22px;
          }
          .btn-discover {
            padding: 12px 32px;
            font-size: 14px;
          }
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
