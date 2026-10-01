import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewProject from './pages/NewProject';
import PashaPinnacle from './pages/PashaPinnacle';
import AshokNagar from './pages/AshokNagar';
import CMRGlobalCity from './pages/CMRGlobalCity';
import AboutUs from './pages/AboutUs';
import AllProjects from './pages/AllProjects';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import BlogDetails from './pages/BlogDetails';
import StickyActionBar from './components/StickyActionBar';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ComingSoonPage from './pages/ComingSoonPage';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,          // Fast, responsive luxury glide without sluggish trailing lag
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-grade exponential ease out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,   // Natural 1:1 wheel distance (no overshooting)
      touchMultiplier: 1.0,   // Natural 1:1 gesture response
      smoothTouch: false,     // Native 120Hz hardware touch/trackpad response (eliminates trackpad/mobile lag!)
      infinite: false,
    });

    window.lenis = lenis;

    // Synchronize ScrollTrigger with Lenis updates
    lenis.on('scroll', () => ScrollTrigger.update());

    // Synchronize GSAP ticker frame updates with Lenis
    const updateRaf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(500, 33); // Normal lag smoothing so frames don't drop or hitch

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ComingSoonPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crystal-moonlight-villa" element={<NewProject />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/pasha-pinnacle" element={<PashaPinnacle />} />
        <Route path="/ashok-nagar-villa-plots-in-maduranthakam" element={<AshokNagar />} />
        <Route path="/ashok-nagar" element={<AshokNagar />} />
        <Route path="/cmr-global-city" element={<CMRGlobalCity />} />
        <Route path="/cmr-global" element={<CMRGlobalCity />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/blogs" element={<BlogDetails />} />
      </Routes>
      <StickyActionBar />
    </Router>
  );
}

export default App;
