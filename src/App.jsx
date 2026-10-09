import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const NewProject = lazy(() => import('./pages/NewProject'));
const PashaPinnacle = lazy(() => import('./pages/PashaPinnacle'));
const AshokNagar = lazy(() => import('./pages/AshokNagar'));
const CMRGlobalCity = lazy(() => import('./pages/CMRGlobalCity'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const AllProjects = lazy(() => import('./pages/AllProjects'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Careers = lazy(() => import('./pages/Careers'));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage'));

import StickyActionBar from './components/StickyActionBar';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ScrollToTop from './components/ScrollToTop';
import CinematicPreloader from './components/CinematicPreloader';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  const location = useLocation();
  // Preloader only runs on the Home page (/ or /home)
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const [showPreloader, setShowPreloader] = useState(isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setShowPreloader(false);
    }
  }, [isHomePage]);

  return (
    <>
      <ScrollToTop />
      {showPreloader && isHomePage && (
        <CinematicPreloader 
          loop={false}
          onComplete={() => setShowPreloader(false)} 
        />
      )}
      <Suspense fallback={<div style={{ minHeight: '100vh', background: '#081226' }} />}>
        <Routes>
          <Route path="/" element={<ComingSoonPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<BlogDetails />} />
          <Route path="/blogs" element={<BlogDetails />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/villas/crystal-moonlight-villa-in-medavakkam" element={<NewProject />} />
          <Route path="/crystal-moonlight-villa" element={<NewProject />} />
          <Route path="/new-project" element={<NewProject />} />
          <Route path="/projects/apartments/pasha-pinnacle-luxury-apartment-in-royapettah" element={<PashaPinnacle />} />
          <Route path="/pasha-pinnacle" element={<PashaPinnacle />} />
          <Route path="/projects/plots/ashok-nagar-premium-plots-in-maduranthakam" element={<AshokNagar />} />
          <Route path="/ashok-nagar-villa-plots-in-maduranthakam" element={<AshokNagar />} />
          <Route path="/ashok-nagar" element={<AshokNagar />} />
          <Route path="/projects/plots/cmr-global-city-villa-plots-in-maduranthakam" element={<CMRGlobalCity />} />
          <Route path="/cmr-global-city" element={<CMRGlobalCity />} />
          <Route path="/cmr-global" element={<CMRGlobalCity />} />
        </Routes>
      </Suspense>
      <StickyActionBar />
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // Ultra-smooth, responsive 120Hz/60Hz luxury glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-grade exponential ease out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      smoothTouch: false,
      infinite: false,
    });

    window.lenis = lenis;

    // Direct synchronous lockstep between Lenis and GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Synchronize GSAP ticker frame updates with Lenis
    const updateRaf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateRaf);
    
    // CRITICAL: lagSmoothing(0) prevents GSAP from clamping frame deltas out of sync with Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
