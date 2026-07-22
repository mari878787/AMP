import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import { ArrowRight, MapPin } from 'lucide-react';

const PROJECTS_DATA = [
  { id: 1, title: 'Modern Luxury Villa', location: 'ADYAR, CHENNAI', category: 'Villa', status: 'Completed', area: '4,200 Sq.Ft.', image: '/images/home/project-image-1.png', link: '#' },
  { id: 2, title: 'Crystal Moonlight Villa', location: 'MEDAVAKKAM, CHENNAI', category: 'Villa', status: 'Ongoing', area: '2,400 - 4,100 Sq.Ft.', image: '/images/project_crystal_1779810838661.png', link: '/crystal-moonlight-villa' },
  { id: 3, title: 'Skyline Residences', location: 'OMR, CHENNAI', category: 'Apartment', status: 'Ongoing', area: '1,200 - 1,800 Sq.Ft.', image: '/images/home/project-image-2.png', link: '#' },
  { id: 4, title: 'Ocean View Apartments', location: 'ECR, CHENNAI', category: 'Apartment', status: 'Completed', area: '2,000 Sq.Ft.', image: '/images/villa_exterior_1779810861723.png', link: '#' },
  { id: 5, title: 'Green Earth Plots', location: 'TAMBARAM, CHENNAI', category: 'Plotted', status: 'Ongoing', area: '1,200 - 2,400 Sq.Ft.', image: '/images/project/CML/master-plan.png', link: '#' },
  { id: 6, title: 'Sunrise Valley', location: 'GUDUVANCHERY, CHENNAI', category: 'Plotted', status: 'Ongoing', area: '600 - 1,500 Sq.Ft.', image: '/images/home/project-image-1.png', link: '#' },
  { id: 7, title: 'Eco-tech Plotted Estate', location: 'OMR, CHENNAI', category: 'Plotted', status: 'Completed', area: '3,800 Sq.Ft.', image: '/images/home/project-image-2.png', link: '#' },
  { id: 8, title: 'Luxury Panorama Villa', location: 'ADYAR, CHENNAI', category: 'Villa', status: 'Ongoing', area: '5,500 Sq.Ft.', image: '/images/villa_exterior_1779810861723.png', link: '#' },
];

export default function AllProjects() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    // Parse query params for category
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam && ['Villa', 'Apartment', 'Plotted'].includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [location]);

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const matchCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchStatus = activeStatus === 'All' || project.status === activeStatus;
    return matchCategory && matchStatus;
  });

  return (
    <div className="all-projects-page" style={{ backgroundColor: 'var(--color-bg-light)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme="dark" />

      <main style={{ flexGrow: 1, paddingBottom: '80px' }}>
        {/* 100vh Screen Fit Hero Banner */}
        <div className="all-projects-hero" style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          padding: '0 5% 80px 5%',
          marginBottom: '60px',
          background: 'url("/images/home/hero.png") center/cover no-repeat fixed'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.5) 100%)' }}></div>

          <ScrollReveal animation="fadeUp" style={{ position: 'relative', zIndex: 1, color: 'white' }}>
            <h1 className="section-title" style={{ color: 'white', textShadow: '0 4px 20px rgba(0,0,0,0.3)', margin: 0 }}>Our Projects</h1>
          </ScrollReveal>
        </div>

        <div className="container">

          {/* Section Content */}
          <ScrollReveal animation="fadeUp" style={{ marginBottom: '20px', maxWidth: '800px', margin: '0 auto 40px auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '1px' }}>Discover Extraordinary Living</h2>
            <p style={{ color: '#666' }}>
              Explore our curated portfolio of premium residential and plotted developments.
            </p>
          </ScrollReveal>

          {/* Pill Filters */}
          <ScrollReveal animation="fadeUp" style={{ marginBottom: '30px', display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>

            {/* Category Filter */}
            <div className="filter-tabs">
              {['All', 'Villa', 'Apartment', 'Plotted'].map(cat => (
                <button
                  key={cat}
                  className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="filter-tabs" style={{ marginLeft: '32px' }}>
              {['All', 'Ongoing', 'Completed'].map(status => (
                <button
                  key={status}
                  className={`filter-tab-btn ${activeStatus === status ? 'active' : ''}`}
                  onClick={() => setActiveStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>

          </ScrollReveal>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '40px' }}>
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} animation="fadeUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <a href={project.link} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
                    <div className="ap-card" style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      position: 'relative',
                      height: '500px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease' }}>
                      {/* Background Image */}
                      <img src={project.image} alt={project.title} className="ap-img" style={{
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover',
                        transition: 'transform 0.7s ease'
                      }} />

                      {/* Top Pills */}
                      <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px', zIndex: 2 }}>
                        <span style={{ padding: '4px 16px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', borderRadius: '100px', fontSize: '12px', fontWeight: '400', color: '#fff', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.3)' }}>
                          {project.category}
                        </span>
                      </div>

                      {/* Bottom Glass Overlay */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0, left: 0, right: 0,
                        padding: '30px 24px 20px',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                        backdropFilter: 'blur(6px)',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 2
                      }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                          <h3 style={{ margin: '0', fontWeight: '400', color: '#fff' }}>{project.title}</h3>
                          <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '400' }}>{project.location}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-text-muted-light)' }}>
              <h3 style={{ marginBottom: '16px' }}>No projects found</h3>
              <p >We don't have any {activeStatus.toLowerCase()} {activeCategory !== 'All' ? activeCategory.toLowerCase() : ''} projects at the moment.</p>
              <Button theme="outline" onClick={() => { setActiveCategory('All'); setActiveStatus('All'); }} style={{ marginTop: '24px' }}>
                Clear Filters
              </Button>
            </div>
          )}

        </div>
      </main>

      <Footer />

      <style>{`
        .ap-card:hover .ap-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
