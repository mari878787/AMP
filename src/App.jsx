import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewProject from './pages/NewProject';
import PashaPinnacle from './pages/PashaPinnacle';
import PlottedDevelopment from './pages/PlottedDevelopment';
import AboutUs from './pages/AboutUs';
import AllProjects from './pages/AllProjects';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import StickyActionBar from './components/StickyActionBar';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ComingSoonPage from './pages/ComingSoonPage';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,             // Snaps to scroll target quicker for higher responsiveness
      duration: 1.2,          // Slightly shorter duration for snappier feedback
      smoothWheel: true,
      wheelMultiplier: 1.4,   // Higher value increases distance per scroll tick
      touchMultiplier: 2.0,   // More sensitive mobile/trackpad swipe scrolling
    });

    window.lenis = lenis;

    // Synchronize ScrollTrigger with Lenis updates
    lenis.on('scroll', () => ScrollTrigger.update());

    // Synchronize GSAP ticker frame updates with Lenis
    const updateRaf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoonPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crystal-moonlight-villa" element={<NewProject />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/pasha-pinnacle" element={<PashaPinnacle />} />
        <Route path="/ashok-nagar-villa-plots-in-maduranthakam" element={<PlottedDevelopment />} />
        <Route path="/ashok-nagar" element={<PlottedDevelopment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
