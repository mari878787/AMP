import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import Button from './Button';

function ParallaxImage({ src, alt }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="parallax-img-container">
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        className="parallax-img"
      />
    </div>
  );
}

export default function PhilosophySection() {
  return (
    <section className="section about-section" id="about">
      <div className="art-of-detail-grid">

        {/* Left Column: Content */}
        <div className="content-column">
          <div className="detail-content">
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h2 className="detail-title section-title">
                The Pinnacle <br className='desktop-only-br' />
                of Luxury
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.25}>
              <p className="detail-desc">
                At Adhithya Mohan, we understand that true excellence lies in the meticulous attention to detail and the artistry of craftsmanship. Guided by a commitment to perfection, we believe in crafting not just homes but immersive experiences where every nuance is thoughtfully considered.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.4}>
              <div style={{ marginTop: '40px' }}>
                <Button href="#contact" theme="dark">
                  DISCOVER MORE
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Column: Parallax Image */}
        <div className="image-column">
          <ScrollReveal className="detail-image" animation="fadeUp" delay={0.55} duration={0.9}>
            {/* Soft fade mask on the left side of the image container to blend into white */}
            <div className="image-fade-wrapper">
              <ParallaxImage src="/images/hero_placeholders/ap-1.jpg" alt="The Art of Detail" />
            </div>
          </ScrollReveal>
        </div>

      </div>

      <style>{`
        .about-section {
          background-color: #fff;
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100vh; /* Screen fit section on desktop */
          overflow: hidden;
        }

        .art-of-detail-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          align-items: stretch;
          height: 100%;
        }

        .content-column {
          /* Compute left padding so it perfectly aligns with standard container (max-width container-width minus container padding) */
          padding-left: max(40px, calc((100vw - var(--container-width) + 48px) / 2));
          padding-right: 80px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }



        .image-column {
          width: 100%;
          display: flex;
        }
        
        .detail-image {
          width: 100%;
          height: 100%;
        }

        .image-fade-wrapper {
          width: 100%;
          height: 100%;
          /* Fades out the left 20% to transparent, blending seamlessly into the white background */
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 20%);
          mask-image: linear-gradient(to right, transparent 0%, black 60%);
        }

        .parallax-img-container {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .parallax-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120%; /* Extra height for parallax */
          object-fit: cover;
        }

        @media (max-width: 1024px) {
          .art-of-detail-grid {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .content-column {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 80px;
            padding-bottom: 40px;
          }
          .image-column {
             height: 500px;
          }
          .image-fade-wrapper {
            /* Fade top instead of left on mobile */
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%);
            mask-image: linear-gradient(to bottom, transparent 0%, black 20%);
          }
        }

        @media (max-width: 900px) {
          .about-section {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
