import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectsSection from '../components/ProjectsSection';
import VisionSection from '../components/VisionSection';
import HeritageSection from '../components/HeritageSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import ScrollMorphWrapper from '../components/ScrollMorphWrapper';
import CenterMorphReveal from '../components/CenterMorphReveal';

export default function Home() {
  const [useParallax, setUseParallax] = useState(true);

  const RevealWrapper = useParallax ? ScrollMorphWrapper : CenterMorphReveal;

  return (
    <div className="home-page">
      <Navbar />
      <main style={{ backgroundColor: 'var(--color-bg-navy)' }}>
        <HeroSection startZoom={true} />
        <RevealWrapper key={useParallax ? 'parallax' : 'morph'}>
          <PhilosophySection />
        </RevealWrapper>
        <div style={{ backgroundColor: 'var(--color-bg-light)', position: 'relative', zIndex: 10 }}>
          <ProjectsSection />
          <VisionSection />
          {/* <HeritageSection /> */}
          <TestimonialsSection />
          <BlogSection />
          <Footer />
        </div>
      </main>

      {/* Secret Toggle for Client Review (Hidden in bottom right corner) */}
      <button
        onClick={() => setUseParallax(!useParallax)}
        style={{
          position: 'fixed',
          bottom: '0',
          right: '0',
          width: '60px',
          height: '60px',
          zIndex: 9999,
          opacity: 0,
          background: 'transparent',
          border: 'none',
          cursor: 'default',
        }}
        title="Secret Animation Toggle"
      />
    </div>
  );
}
