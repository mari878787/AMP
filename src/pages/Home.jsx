import React from 'react';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectsSection from '../components/ProjectsSection';
import HeritageSection from '../components/HeritageSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home-page">
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ProjectsSection />
        <HeritageSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
