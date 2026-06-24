import React, { useEffect, useState, useRef } from 'react';
import {
  MapPin, Compass, Shield, Zap, Home, Play,
  Layers, CheckCircle2, ArrowRight, Download,
  Maximize2, ChevronLeft, ChevronRight, X, Phone, Mail, User, Clock, ChevronDown, LayoutGrid,
  ShoppingBag, Coffee, Cross, Stethoscope, CreditCard, Dumbbell, Activity, Gamepad2, Trees, Users, Baby, ShieldCheck, Video
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyProject from '../components/WhyProject';
import ProjectSpecs from '../components/ProjectSpecs';
import ScrollReveal from '../components/ScrollReveal';

const SPECIFICATIONS = [
  {
    id: 'structure',
    label: 'Structure',
    index: '01',
    title: 'STRUCTURE',
    details: [
      'Pile foundation with RCC Column & Beam.',
      'Chamber bricks for all walls — Main walls 9" & Partition walls 4½" thickness.',
      'Ceiling height: 10½ ft (top) | 9 ft 7½ in (bottom height).'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'doors-windows',
    label: 'Doors & Windows',
    index: '02',
    title: 'DOORS & WINDOWS',
    details: [
      'Teak wood frames for all doors. Main door frames polished; all doors painted with Satin Enamel Asian Paint.',
      'Main door: Solid teak with Melamine/Matte Finish — Asian Paint varnish both sides, ornamental border.',
      'Interior doors: 32mm imported plywood arrangement with mica finish & SS fittings.',
      '5-Star Fiber Reinforced Polymer (FRP) waterproof doors — polished exterior, painted interior.',
      'UPVC windows with mosquito net shutters & safety grills.',
      'Basement height: 3 or 4 feet.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'electrical',
    label: 'Electrical',
    index: '03',
    title: 'ELECTRICAL',
    details: [
      'Concealed electrical wiring; modular switches of Anchor / Legrand / GM Switches.',
      'Finolex pipes & Orbit / Finolex / KEI wires — three-phase concealed power supply with changeover switches.',
      'Home theatre & inverter provision in the living room.',
      '15A AC power points for all bedrooms + one in the living area.',
      'Adequate 5A power points in the living room, bedrooms, kitchen & service area.',
      'Cable TV & telephone points in all bedrooms and living room.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    index: '04',
    title: 'KITCHEN',
    details: [
      'Polished Black Granite Galaxy platform (L-shape) with SS single bowl sink & drain board 24" × 18".',
      'Ceramic tile Kajaria dado — 2 feet height above the counter.',
      'Separate plumbing connections: Corporation water, bore/well water & RO water purifier.',
      '15A power points in the kitchen for wet grinder, electrical oven, mixer-grinder & refrigerator.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'wall-finish',
    label: 'Wall Finish',
    index: '05',
    title: 'WALL FINISH',
    details: [
      'Exterior walls: 2-coat emulsion finish.',
      'Interior walls & ceiling: 2 coats Asian paint + 1 coat internal primer + 1 coat acrylic putty, coloured with 2 coats of emulsion.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'bathroom',
    label: 'Bathroom',
    index: '06',
    title: 'BATHROOM',
    details: [
      'Anti-skid tiles for toilet flooring to match wall tiles.',
      'All fittings: Jaguar or equivalent brands; shower with concealed diverter and spout.',
      'Complete toilet accessories: towel rods & soap trays.',
      'Exhaust fan & power supply provision for water heater in each toilet.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'other-provisions',
    label: 'Other Provisions',
    index: '07',
    title: 'OTHER PROVISIONS',
    details: [
      'Rainwater harvesting system & EV car charging points.',
      'ISI-specified PVC Finol concealed pipes for water and sanitary fittings.',
      'Visible pipelines colour-matched with building facade using open clamps.',
      'Sewage system connection with PVC pipes.',
      'Adequate capacity electrical main panel board for each flat on the ground floor.'
    ],
    image: '/images/project/spec-structure.png'
  }
];

export default function CrystalMoonlightVilla() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeSubSection, setActiveSubSection] = useState('highlights');
  const whySubSections = ['highlights', 'location'];
  const handlePrevSubSection = () => {
    const currIdx = whySubSections.indexOf(activeSubSection);
    const prevIdx = (currIdx - 1 + whySubSections.length) % whySubSections.length;
    setActiveSubSection(whySubSections[prevIdx]);
  };
  const handleNextSubSection = () => {
    const currIdx = whySubSections.indexOf(activeSubSection);
    const nextIdx = (currIdx + 1) % whySubSections.length;
    setActiveSubSection(whySubSections[nextIdx]);
  };
  const [galleryTab, setGalleryTab] = useState('exteriors');
  const [floorPlanTab, setFloorPlanTab] = useState('planA');
  const floorPlanData = {
    planA: { name: 'Plan A (G+1)', type: '3 BHK', builtUp: '2,233 Sq.Ft.', plot: '1,260 Sq.Ft.', facing: 'North Facing', image: '/images/project/CML/floor-plan/PLAN A 30X42 NORTHFACE.jpg.jpeg' },
    planB: { name: 'Plan B (G+1)', type: '3 BHK', builtUp: '2,287 Sq.Ft.', plot: '1,260 Sq.Ft.', facing: 'North Facing', image: "/images/project/CML/floor-plan/PLAN - B  30' X 48'  (North Facing )VILLA.jpg.jpeg" },
    planC: { name: 'Plan C (G+2)', type: '4 BHK', builtUp: '2,287 Sq.Ft.', plot: '1,440 Sq.Ft.', facing: 'North Facing', image: "/images/project/CML/floor-plan/PLAN C  -    37' X 42'  (North Facing )VILLA.jpg.jpeg" },
    // planD: { name: 'Plan D (G+2)', type: '4 BHK', builtUp: '2,904 Sq.Ft.', plot: '1,554 Sq.Ft.', facing: 'North Facing' },
    // planE: { name: 'Plan E (G+2)', type: '4 BHK', builtUp: '2,927 Sq.Ft.', plot: '1,554 Sq.Ft.', facing: 'East Facing' }
  };
  const activePlanDetails = floorPlanData[floorPlanTab];
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteForm, setQuoteForm] = useState({ name: '', email: '', phone: '', note: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentGalleryIdx, setCurrentGalleryIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navContainerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [amenityIdx, setAmenityIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAmenityIdx((prev) => (prev + 1) % (isMobile ? 12 : 10)); // 12 items, 3 per view means 10 slides
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sliding indicator for sub-nav
  useEffect(() => {
    const updateIndicator = () => {
      const container = navContainerRef.current;
      if (!container) return;
      const activeLink = container.querySelector('.sub-nav-link.active');
      if (!activeLink) {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeLink.getBoundingClientRect();

      // Calculate position relative to container, adding scrollLeft to account for horizontal scrolling on mobile
      setIndicatorStyle({
        left: activeRect.left - containerRect.left + container.scrollLeft,
        width: activeRect.width,
        opacity: 1,
      });

      // Auto-scroll the active tab into view on mobile screens
      if (window.innerWidth < 900) {
        activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    };
    // Small delay to let DOM update
    const timer = setTimeout(updateIndicator, 50);
    window.addEventListener('resize', updateIndicator);

    // Also update on scroll of the sub-nav itself (for mobile horizontal scroll)
    const container = navContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateIndicator);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicator);
      if (container) {
        container.removeEventListener('scroll', updateIndicator);
      }
    };
  }, [activeTab]);

  const getGalleryCardStyle = (index, total) => {
    let diff = index - currentGalleryIdx;
    while (diff > total / 2) diff -= total;
    while (diff <= -total / 2) diff += total;
    const absDiff = Math.abs(diff);

    if (diff === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: 10,
        opacity: 1,
        filter: 'none',
        pointerEvents: 'auto'
      };
    }

    const spacing = isMobile ? 45 : 120;
    const translateX = diff * spacing;

    if (absDiff > 2) {
      return {
        transform: `translateX(${diff > 0 ? 1000 : -1000}px) scale(0.5)`,
        zIndex: 0,
        opacity: 0,
        pointerEvents: 'none',
        visibility: 'hidden'
      };
    }

    // Distinct visual treatment for depth layers
    const scale = absDiff === 1 ? 0.82 : 0.65;
    const opacity = absDiff === 1 ? 0.85 : 0.4;
    const filter = absDiff === 1 ? 'blur(1px) brightness(0.95)' : 'blur(2px) brightness(0.85)';
    const zIndex = 10 - absDiff;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex: zIndex,
      opacity: opacity,
      filter: filter,
      pointerEvents: absDiff === 1 ? 'auto' : 'none',
      visibility: 'visible'
    };
  };

  const prevGallerySlide = () => {
    const total = galleryImages[galleryTab].length;
    setCurrentGalleryIdx((prev) => (prev - 1 + total) % total);
  };

  const nextGallerySlide = () => {
    const total = galleryImages[galleryTab].length;
    setCurrentGalleryIdx((prev) => (prev + 1) % total);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll Spy to highlight the active section in sticky sub-nav on scroll
  useEffect(() => {
    const sections = ['overview', 'why-project', 'videos', 'gallery', 'specifications', 'amenities', 'floorplans', 'pricing', 'status'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset to trigger active tab before section hits viewport top

      // Check if we are near the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveTab('status');
        return;
      }

      // Find the last section that has been scrolled past the trigger offset
      let activeSection = 'overview';
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top - 10) {
            activeSection = sections[i];
          }
        }
      }

      setActiveTab(activeSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top - 50; // offset only sticky subnav (50px)
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  };

  const handleSubSectionNavigate = (subSectionId) => {
    setActiveSubSection(subSectionId);
    handleScrollToSection('why-project');
  };

  const handleGalleryTabNavigate = (tabId) => {
    setGalleryTab(tabId);
    setCurrentGalleryIdx(0); // reset slide index on tab change
    handleScrollToSection('gallery');
  };

  const amenities = [
    { image: "/images/project/CML/Interiors/cml-interior-01.jpg", icon: <ShieldCheck size={22} />, title: "Premium Gated Security", desc: "24/7 smart CCTV surveillance with security cabin." },
    { image: "/images/project/CML/Interiors/cml-interior-02.jpg", icon: <ShoppingBag size={22} />, title: "Supermarket", desc: "Daily essentials at your doorstep." },
    { image: "/images/project/CML/Interiors/cml-interior-03.jpg", icon: <Dumbbell size={22} />, title: "Gym & Wellness", desc: "Fully equipped with modern fitness equipment." },
    { image: "/images/project/CML/Interiors/cml-interior-04.jpg", icon: <Coffee size={22} />, title: "Café & Lounge", desc: "A relaxed social space with seating." },
    { image: "/images/project/CML/Interiors/cml-interior-05.jpg", icon: <Activity size={22} />, title: "Indoor Sports", desc: "Squash, Badminton, Snooker, Table Tennis." },
    { image: "/images/project/CML/Interiors/cml-interior-06.jpg", icon: <Stethoscope size={22} />, title: "Clinic & Pharmacy", desc: "Primary healthcare and medical essentials." },
    { image: "/images/project/CML/Interiors/cml-interior-07.jpg", icon: <Users size={22} />, title: "Banquet Hall", desc: "Convention hall for events and gatherings." },
    { image: "/images/project/CML/Interiors/cml-interior-08.jpg", icon: <Baby size={22} />, title: "Créche & Play Area", desc: "Safe supervised childcare and outdoor play area." },
    { image: "/images/project/CML/Interiors/cml-interior-09.jpg", icon: <Gamepad2 size={22} />, title: "Arcade Games", desc: "Indoor games centre and arcade for kids." },
    { image: "/images/project/CML/Interiors/cml-interior-10.jpg", icon: <Trees size={22} />, title: "Terrace Open Turf", desc: "Multi-sport arena on the terrace level." },
    { image: "/images/project/CML/Interiors/cml-interior-11.jpg", icon: <CreditCard size={22} />, title: "Bank & ATM", desc: "Financial convenience within the community." },
    { image: "/images/project/CML/Interiors/cml-interior-12.jpg", icon: <Zap size={22} />, title: "EV Charging", desc: "Dedicated EV charging points for each villa." }
  ];

  const landmarks = [
    { title: "Medavakkam Junction", dist: "3 mins" },
    { title: "OMR IT Corridor (Sholinganallur)", dist: "10 mins" },
    { title: "Velachery MRTS & Mall", dist: "15 mins" },
    { title: "Gleneagles Global Health City", dist: "8 mins" },
    { title: "Chennai International Airport", dist: "25 mins" },
    { title: "Elcot SEZ OMR", dist: "12 mins" }
  ];

  const galleryImages = {
    interiors: Array.from({ length: 33 }, (_, i) => ({
      src: `/images/project/CML/Interiors/cml-interior-${String(i + 1).padStart(2, '0')}.jpg`,
      title: `Crystal Moonlight Interior ${i + 1}`
    })),
    exteriors: [
      { src: '/images/villa_exterior_1779810861723.png', title: 'Moonlight Villa Façade' },
      { src: '/images/project_crystal_1779810838661.png', title: 'Recreational Pool Deck' },
      { src: '/images/project/why-cmv.png', title: 'Gated Community Portico' },
      { src: '/images/home/hero.png', title: 'Premium Landscaped Backyard' },
      { src: '/images/home/project-image-2.png', title: 'Evening Façade View' }
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIdx((prev) => (prev + 1) % galleryImages[galleryTab].length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryTab]);

  const handleOpenLightbox = (tab, idx) => {
    setLightboxIdx(idx);
    setLightboxImage(galleryImages[tab][idx]);
  };

  const handleLightboxPrev = () => {
    const list = galleryImages[galleryTab];
    const prevIdx = (lightboxIdx - 1 + list.length) % list.length;
    setLightboxIdx(prevIdx);
    setLightboxImage(list[prevIdx]);
  };

  const handleLightboxNext = () => {
    const list = galleryImages[galleryTab];
    const nextIdx = (lightboxIdx + 1) % list.length;
    setLightboxIdx(nextIdx);
    setLightboxImage(list[nextIdx]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsQuoteOpen(false);
      setQuoteForm({ name: '', email: '', phone: '', note: '' });
    }, 2500);
  };

  return (
    <div className="project-detail-page">
      <Navbar projectTitle="Crystal Moonlight Villa" />

      <main>
        {/* Project Hero Section */}
        <section className="project-hero-section">
          <div className="project-split-mask" aria-hidden="true">
            <div className="split-panel panel-1"></div>
            <div className="split-panel panel-2"></div>
            <div className="split-panel panel-3"></div>
            <div className="split-panel panel-4"></div>
          </div>

          <div className="project-hero-background">
            <img
              src="/images/home/hero.png"
              alt="Crystal Moonlight Villa"
              className="project-hero-bg-image"
            />
            <div className="project-hero-light-leak" aria-hidden="true"></div>
            <div className="project-hero-overlay"></div>
          </div>

          <div className="project-hero-content">
            <span className="project-tag-reveal">PREMIUM GATED VILLAS</span>
            <h1 className="project-hero-title">
              Crystal Moonlight <span className="highlight-text">Villa</span>
            </h1>
            <p className="project-hero-subtitle">MEDAVAKKAM, CHENNAI</p>
            
            <button 
              className="btn-luxury-outline hero-cta-btn" 
              onClick={() => setIsQuoteOpen(true)}
            >
              <span>Download Brochure</span>
              <span className="btn-circle-arrow">↓</span>
            </button>
          </div>
        </section>

        {/* Project Sticky Sub-navigation with Tab Dropdowns */}
        <nav className="project-sub-nav">
          <div className="container sub-nav-container">
            {/* Scrollable area containing all section links */}
            <div className="sub-nav-scroll-wrapper" ref={navContainerRef}>
              {/* Sliding gold indicator */}
              <div
                className="sub-nav-indicator"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity,
                }}
              />

              <button
                onClick={() => handleScrollToSection('overview')}
                className={`sub-nav-link ${activeTab === 'overview' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Overview</span>
              </button>

              {/* Why Project Dropdown */}
              <div className="sub-nav-dropdown-wrapper">
                <button
                  onClick={() => handleScrollToSection('why-project')}
                  className={`sub-nav-link ${activeTab === 'why-project' ? 'active' : ''}`}
                >
                  <span className="sub-nav-text">Why Project</span> <ChevronDown size={12} className="sub-nav-chevron" />
                </button>
                <div className="sub-nav-dropdown-menu">
                  <button
                    className={`dropdown-item ${activeTab === 'why-project' && activeSubSection === 'highlights' ? 'active' : ''}`}
                    onClick={() => handleSubSectionNavigate('highlights')}
                  >
                    Highlights
                  </button>
                  <button
                    className={`dropdown-item ${activeTab === 'why-project' && activeSubSection === 'location' ? 'active' : ''}`}
                    onClick={() => handleSubSectionNavigate('location')}
                  >
                    Location Advantage
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleScrollToSection('videos')}
                className={`sub-nav-link ${activeTab === 'videos' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Videos</span>
              </button>

              {/* Gallery Dropdown */}
              <div className="sub-nav-dropdown-wrapper">
                <button
                  onClick={() => handleScrollToSection('gallery')}
                  className={`sub-nav-link ${activeTab === 'gallery' ? 'active' : ''}`}
                >
                  <span className="sub-nav-text">Gallery</span> <ChevronDown size={12} className="sub-nav-chevron" />
                </button>
                <div className="sub-nav-dropdown-menu">
                  <button
                    className={`dropdown-item ${activeTab === 'gallery' && galleryTab === 'interiors' ? 'active' : ''}`}
                    onClick={() => handleGalleryTabNavigate('interiors')}
                  >
                    Interiors
                  </button>
                  <button
                    className={`dropdown-item ${activeTab === 'gallery' && galleryTab === 'exteriors' ? 'active' : ''}`}
                    onClick={() => handleGalleryTabNavigate('exteriors')}
                  >
                    Exteriors
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleScrollToSection('specifications')}
                className={`sub-nav-link ${activeTab === 'specifications' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Specifications</span>
              </button>

              <button
                onClick={() => handleScrollToSection('amenities')}
                className={`sub-nav-link ${activeTab === 'amenities' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Amenities</span>
              </button>

              <button
                onClick={() => handleScrollToSection('floorplans')}
                className={`sub-nav-link ${activeTab === 'floorplans' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Floor Plans</span>
              </button>
              {/* <button
                onClick={() => handleScrollToSection('pricing')}
                className={`sub-nav-link ${activeTab === 'pricing' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Size & Price</span>
              </button> */}
              <button
                onClick={() => handleScrollToSection('status')}
                className={`sub-nav-link ${activeTab === 'status' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Status</span>
              </button>
            </div>

            {/* Fixed Right Directory Trigger for Mobile */}
            <div className="sub-nav-dropdown-wrapper sub-nav-mobile-trigger-wrapper show-only-on-mobile">
              <button
                className="sub-nav-link mobile-grid-trigger-btn"
                aria-label="Section directory"
                style={{ padding: '20px 18px 18px' }}
              >
                <LayoutGrid size={15} style={{ margin: 0, transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }} className="more-trigger-icon" />
              </button>
              <div className="sub-nav-dropdown-menu mobile-directory-menu" style={{ right: 0, left: 'auto', transform: 'translateX(-15%) translateY(6px)' }}>
                <div className="mobile-directory-header">SECTION DIRECTORY</div>
                <button
                  className={`dropdown-item ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('overview')}
                >
                  Overview
                </button>
                <button
                  className={`dropdown-item ${activeTab === 'why-project' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('why-project')}
                >
                  Why Project
                </button>
                <button
                  className={`dropdown-item ${activeTab === 'videos' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('videos')}
                >
                  Videos
                </button>
                <button
                  className={`dropdown-item ${activeTab === 'gallery' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('gallery')}
                >
                  Gallery
                </button>
                <button
                  className={`dropdown-item ${activeTab === 'specifications' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('specifications')}
                >
                  Specifications
                </button>
                <button
                  className={`dropdown-item ${activeTab === 'amenities' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('amenities')}
                >
                  Amenities
                </button>
                <button
                  className={`dropdown-item ${activeTab === 'floorplans' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('floorplans')}
                >
                  Floor Plans
                </button>
                {/* <button
                  className={`dropdown-item ${activeTab === 'pricing' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('pricing')}
                >
                  Size & Price
                </button> */}
                <button
                  className={`dropdown-item ${activeTab === 'status' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('status')}
                >
                  Status
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Project Sections Container */}
        <div className="project-sections-container">

          {/* Overview Section - Minimalist Editorial Design */}
          <section id="overview" className="project-section-wrapper scroll-section" style={{ position: 'relative', overflow: 'hidden', padding: '60px 0', background: 'radial-gradient(circle at top right, #b48564 0%, #dfc3ae 40%, #f4e9de 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
              
              {/* Top Left Label */}
              <div style={{ display: 'flex', marginBottom: '0px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#133825', fontWeight: '600' }}>
                  / ABOUT PROJECT /
                </span>
              </div>

              {/* Main Content Grid */}
              <div className="overview-editorial-grid">
                
                {/* Left Column: Watermark Text */}
                <div style={{ position: 'relative' }}>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '160px', lineHeight: '1', color: 'rgba(92, 58, 33, 0.12)', margin: 0, letterSpacing: '-0.02em', fontWeight: '400', transform: 'translateY(24px)' }}>
                    CML
                  </h2>
                </div>

                {/* Right Column: Editorial Paragraphs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingBottom: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', lineHeight: '1.8', color: '#133825', margin: 0, fontWeight: '500' }}>
                    Crystal Moonlight by Aadhithya Mohan Properties represents the pinnacle of premium residential developments in Medavakkam, Chennai. The brand is built around the idea that homes are not just structures, but powerful statements that define presence.
                  </p>
                  
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '1.8', color: '#2c543e', margin: 0 }}>
                    The goal of the project was to design an emotionally engaging community experience that reflects this philosophy. The key challenge was to balance expressive visual design with usability — creating a thriving living environment while maintaining a deep connection to nature and serenity.
                  </p>
                  
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: '1.8', color: '#2c543e', margin: 0 }}>
                    Through the use of modern luxury architecture, meticulous material selection, and statement-driven craftsmanship, our aim is to highlight each villa's unique footprint and support a lifestyle upgrade for generations to come.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Project Overview Section */}
          <section id="why-project" className="project-section-wrapper scroll-section" style={{ position: 'relative', overflow: 'hidden', padding: '50px 0' }}>
            {/* Corner bird decorator on the right to match the screenshot */}
            <img src="/images/flycatcher_corner_topright.png" alt="" className="corner-bird corner-top-right" aria-hidden="true" style={{ top: '60px', right: '-10px' }} />

            <div className="container">

              {/* ── Left-Aligned Header ── */}
              <ScrollReveal className="section-header" animation="fadeUp" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <span className="section-tag">Why CML</span> */}
                <h2 className="section-title">
                  Bespoke living <span className="ov-highlight-italic">beyond time</span>
                </h2>
                {/* <p className="section-subtitle" style={{ marginTop: '8px' }}>
                  Explore the highlights and location advantage of Crystal Moonlight Villa.
                </p> */}
              </ScrollReveal>

              {/* ── Left-Aligned Tab Pills ── */}
              <div className="overview-nav-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '26px' }}>
                <ScrollReveal animation="fadeUp" delay={0.1}>
                  <div className="overview-nav-pills">
                    {whySubSections.map((sect) => (
                      <button
                        key={sect}
                        className={`overview-pill-btn ${sect === activeSubSection ? 'active' : ''}`}
                        onClick={() => setActiveSubSection(sect)}
                      >
                        {sect === 'highlights' ? 'Highlights' : 'Location Advantage'}
                      </button>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* ── Main Content Two-Column Grid ── */}
              <div className="overview-main-grid-redesign">

                {/* Left Side Content (Visuals) */}
                <div className="overview-left-visual">
                  <ScrollReveal animation="fadeRight">
                    {activeSubSection === 'highlights' && (
                      <div className="overview-image-wrapper">
                        <img src="/images/project/why-cmv.png" alt="Crystal Moonlight Villa Gated Entrance" />
                      </div>
                    )}

                    {activeSubSection === 'location' && (
                      <div className="overview-map-wrapper">
                        {/* Map Illustration */}
                        <div className="ov-map-visual" style={{ margin: 0, width: '100%' }}>
                          <div className="map-grid-layer"></div>
                          <div className="map-radar-pulse"></div>
                          <div className="map-core-node">
                            <Compass size={14} className="map-core-compass" />
                            <span className="map-core-label">CMV</span>
                          </div>
                          <div className="map-node node-omr" style={{ top: '22%', left: '72%' }}>
                            <div className="node-dot"></div>
                            <span className="node-text">OMR IT Park</span>
                          </div>
                          <div className="map-node node-velachery" style={{ top: '33%', left: '25%' }}>
                            <div className="node-dot"></div>
                            <span className="node-text">Velachery</span>
                          </div>
                          <div className="map-node node-hospital" style={{ top: '63%', left: '62%' }}>
                            <div className="node-dot"></div>
                            <span className="node-text">Global Hospital</span>
                          </div>
                          <svg className="map-vector-lines" viewBox="0 0 400 300">
                            <line x1="200" y1="150" x2="280" y2="75" stroke="rgba(19, 56, 37, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                            <line x1="200" y1="150" x2="120" y2="105" stroke="rgba(19, 56, 37, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                            <line x1="200" y1="150" x2="240" y2="195" stroke="rgba(19, 56, 37, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </ScrollReveal>
                </div>

                {/* Right Side Content (Text & CTAs) */}
                <div className="overview-right-text">
                  <ScrollReveal animation="fadeLeft">
                    {activeSubSection === 'highlights' && (
                      <div className="overview-slide-text-panel">
                        <span className="highlights-badge-tag" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--color-text-muted-light)', fontWeight: '500', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.08em', display: 'block' }}>
                          Villa • Ongoing
                        </span>
                        <h3 className="overview-text-title">
                          Crystal Moonlight Villa
                        </h3>
                        <p className="overview-text-desc">
                          Crystal Moonlight Villa offers an exclusive gated lifestyle community of 47 architecturally brilliant villas. Positioned in Chennai's prominent Medavakkam residential hub, it blends luxury interiors with secure community living.
                        </p>
                        <div className="highlights-actions-row" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                          <button className="btn-luxury-pill" onClick={() => setIsQuoteOpen(true)}>
                            <span>Brochure</span>
                            <span className="btn-circle-arrow">→</span>
                          </button>
                          <div className="ov-mini-video-badge" onClick={() => setIsVideoOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '8px 12px', transition: 'opacity 0.2s ease' }}>
                            <div className="ov-mini-play" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-sage-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px' }}>▶</div>
                            <span className="ov-mini-text" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: '600', color: 'var(--color-primary)', letterSpacing: '0.08em' }}>WATCH VIDEO</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSubSection === 'location' && (
                      <div className="overview-slide-text-panel">
                        <h3 className="overview-text-title">
                          Location Advantage
                        </h3>
                        <p className="overview-text-desc">
                          Strategically situated in Medavakkam, Crystal Moonlight Villa offers unparalleled connectivity to OMR IT Corridor, Velachery, MRTS, top schools, and global hospitals.
                        </p>

                        <div className="ov-landmarks-list" style={{ marginBottom: '32px' }}>
                          <h4 className="ov-landmarks-title" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--color-text-muted-light)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>NEIGHBORHOOD</h4>
                          <div className="ov-landmarks-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 20px' }}>
                            {landmarks.slice(0, 4).map((item, idx) => (
                              <div key={idx} className="ov-landmark-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <MapPin size={13} className="ov-landmark-icon" style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                                <div className="ov-landmark-details">
                                  <span className="ov-landmark-name" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: '500', color: 'var(--color-primary)', display: 'block' }}>{item.title}</span>
                                  <span className="ov-landmark-time" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--color-text-muted)' }}>{item.dist}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="overview-action-row">
                          <button className="btn-luxury-pill" onClick={() => setIsQuoteOpen(true)}>
                            <span>Brochure</span>
                            <span className="btn-circle-arrow">→</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </ScrollReveal>
                </div>

              </div>

            </div>
          </section>

          {/* Videos Section */}
          <section id="videos" className="project-videos-section scroll-section" style={{ padding: 0 }}>
            <div className="video-player-container" onClick={() => setIsVideoOpen(true)} style={{ borderRadius: 0, margin: 0, maxWidth: 'none', width: '100%', height: '100vh', aspectRatio: 'auto', border: 'none' }}>
              <img
                src="/images/home/project-image-2.png"
                alt="Widescreen Villa Showcase Walkthrough"
                className="video-player-thumbnail"
                style={{ borderRadius: 0, width: '100%', height: '100vh', objectFit: 'cover' }}
              />
              <div className="video-player-overlay" style={{ borderRadius: 0 }}>
                <div className="play-button-pulsing">
                  <Play size={24} fill="var(--color-primary)" stroke="none" />
                </div>
                <span className="video-overlay-text">EXPERIENCE WALKTHROUGH VIDEO</span>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="project-gallery-section scroll-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff', paddingTop: '60px', paddingBottom: '60px' }}>
            {/* Corner branch: top-left negative space */}
            <img src="/images/flycatcher_corner_topleft.png" alt="" className="corner-bird corner-top-left" aria-hidden="true" />
            <div className="container">
              <ScrollReveal className="section-header" animation="fadeUp" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '32px' }}>
                <h2 className="section-title">
                  A showcase of our <span className="highlight-italic">exquisite design.</span>
                </h2>
              </ScrollReveal>

              {/* Gallery Navigation Tabs */}
              <div className="nested-tabs-container" style={{ marginBottom: '16px' }}>
                <div className="nested-tabs-wrapper">
                  <button
                    className={`nested-tab-btn ${galleryTab === 'exteriors' ? 'active' : ''}`}
                    onClick={() => handleGalleryTabNavigate('exteriors')}
                  >
                    Exteriors
                  </button>
                  <button
                    className={`nested-tab-btn ${galleryTab === 'interiors' ? 'active' : ''}`}
                    onClick={() => handleGalleryTabNavigate('interiors')}
                  >
                    Interiors
                  </button>
                </div>
              </div>

              {/* 3D Stacked Card Gallery Deck without text/number content */}
              <div className="gallery-deck-viewport">
                <button className="gallery-deck-arrow prev" onClick={prevGallerySlide} aria-label="Previous image">
                  <ChevronLeft size={24} />
                </button>

                <div className="gallery-deck-stack">
                  {galleryImages[galleryTab].map((img, idx) => {
                    const total = galleryImages[galleryTab].length;
                    let diff = idx - currentGalleryIdx;
                    while (diff > total / 2) diff -= total;
                    while (diff <= -total / 2) diff += total;

                    return (
                      <div
                        key={idx}
                        className={`gallery-deck-card ${diff === 0 ? 'active' : ''}`}
                        style={getGalleryCardStyle(idx, total)}
                        onClick={() => {
                          if (diff === 0) {
                            handleOpenLightbox(galleryTab, idx);
                          } else {
                            setCurrentGalleryIdx(idx);
                          }
                        }}
                      >
                        <img src={img.src} alt={img.title} className="gallery-deck-img" />
                        <div className="gallery-deck-hover-overlay">
                          <Maximize2 size={24} className="hover-overlay-zoom-icon" />
                          <span className="hover-overlay-title">{img.title}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button className="gallery-deck-arrow next" onClick={nextGallerySlide} aria-label="Next image">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </section>

          {/* Specifications Section */}
          <section id="specifications" className="scroll-section">
            <ProjectSpecs
              specs={SPECIFICATIONS}
              title="PROJECT"
              highlightTitle="SPECIFICATIONS"
              subtitle="PROJECT DETAILS"
            />
          </section>

          {/* Amenities Section - Dark Theme Auto-Slider */}
          <section id="amenities" className="project-amenities-section scroll-section" style={{ position: 'relative', overflow: 'hidden', padding: '60px 0', backgroundColor: '#0a1c12', minHeight: 'calc(100vh - 60px)', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ width: '100%' }}>
              <ScrollReveal className="section-header" animation="fadeUp" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <span className="section-tag" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#f8fafc', border: '1px solid rgba(255,255,255,0.1)' }}>Amenities</span> */}
                <h2 className="section-title" style={{ color: '#f8fafc', marginBottom: '0px' }}>
                  Luxury Community <span className="highlight-italic" style={{ color: '#86a895' }}>Amenities</span>
                </h2>
                <p className="section-subtitle" style={{ color: '#cbd5e1', marginBottom: '24px' }}>
                  Designed for comfort, security, and an enriched community life
                </p>
              </ScrollReveal>

              <div className="amenities-slider-viewport" style={{ overflow: 'hidden', position: 'relative', width: '100%', padding: '20px 0' }}>
                <div className="amenities-slider-track" style={{ 
                  display: 'flex', 
                  transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)', 
                  transform: `translateX(calc(-${amenityIdx * (isMobile ? 100 : 33.333)}%))` 
                }}>
                  {amenities.map((item, idx) => (
                    <div key={idx} style={{ flex: '0 0 auto', width: isMobile ? '100%' : '33.333%', padding: '0 16px', boxSizing: 'border-box' }}>
                      <div className="amenity-luxury-card" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '340px', cursor: 'pointer', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
                        <div className="amenity-bg-img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.7s ease' }}></div>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(10, 28, 18, 0.95) 0%, rgba(10, 28, 18, 0.4) 50%, rgba(10, 28, 18, 0) 100%)' }}></div>
                        
                        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '24px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                          <div className="amenity-icon-wrapper" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginBottom: '16px', transition: 'all 0.4s ease' }}>
                            {item.icon}
                          </div>
                          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: '#fff', marginBottom: '12px', fontWeight: '400', letterSpacing: '0.02em' }}>{item.title}</h3>
                          <p className="amenity-desc-text" style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', margin: 0, transition: 'all 0.4s ease' }}>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Slider Dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
                {Array.from({ length: amenities.length - (isMobile ? 0 : 2) }).map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setAmenityIdx(idx)}
                    style={{ 
                      width: '8px', height: '8px', borderRadius: '50%', 
                      background: amenityIdx === idx ? '#fff' : 'rgba(255,255,255,0.2)',
                      border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
                      padding: 0
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Floor Plans Section */}
          <section id="floorplans" className="project-floorplans-section scroll-section" style={{ minHeight: 'calc(100vh - 60px)', display: 'flex', alignItems: 'center', padding: '40px 0' }}>
            <div className="container" style={{ width: '100%' }}>
              <ScrollReveal className="section-header" animation="fadeUp" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <span className="section-tag">Floor Plans</span> */}
                <h2 className="section-title" style={{ marginBottom: '0px' }}>Architectural <span className="highlight-italic">Layouts</span></h2>
                <p className="section-subtitle" style={{ color: '#64748b', marginBottom: '4px' }}>Bespoke layouts engineered for luxury space optimization</p>
              </ScrollReveal>

              <div className="floorplan-layout-grid">
                <div className="floorplan-tabs-col">
                  {Object.entries(floorPlanData).map(([key, data], idx) => (
                    <button
                      key={key}
                      className={`floorplan-tab-btn ${floorPlanTab === key ? 'active' : ''}`}
                      onClick={() => setFloorPlanTab(key)}
                    >
                      <span className="btn-tab-num">0{idx + 1}</span> {data.name}
                    </button>
                  ))}

                  <div className="floorplan-specs-box">
                    <div className="floorplan-spec-line">
                      <span className="spec-label">Configuration:</span>
                      <span className="spec-val">{activePlanDetails.type}</span>
                    </div>
                    <div className="floorplan-spec-line">
                      <span className="spec-label">Built-up Area:</span>
                      <span className="spec-val">{activePlanDetails.builtUp}</span>
                    </div>
                    <div className="floorplan-spec-line">
                      <span className="spec-label">Plot Area:</span>
                      <span className="spec-val">{activePlanDetails.plot}</span>
                    </div>
                    <div className="floorplan-spec-line">
                      <span className="spec-label">Direction:</span>
                      <span className="spec-val">{activePlanDetails.facing}</span>
                    </div>
                  </div>

                  <a href="#brochure" className="btn-luxury-outline" onClick={(e) => { e.preventDefault(); setIsQuoteOpen(true); }} style={{ display: 'inline-flex', width: '100%', boxSizing: 'border-box' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Download size={14} /> Download Floorplan PDF</span>
                    <span className="btn-circle-arrow">→</span>
                  </a>
                </div>

                <div className="floorplan-visual-col">
                  {activePlanDetails.image ? (
                    <div className="blueprint-image-container" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src={activePlanDetails.image} alt={activePlanDetails.name} style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'contain' }} />
                    </div>
                  ) : (
                    <div className="blueprint-canvas" style={{ width: '100%', height: '100%', minHeight: '420px', maxWidth: 'none', aspectRatio: 'auto', backgroundColor: '#0a1c12', borderRadius: '16px', borderColor: 'rgba(255,255,255,0.05)' }}>
                      <div className="blueprint-grid-mesh" style={{ opacity: 0.1, backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)' }}></div>
                      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#86a895' }}>
                        <LayoutGrid size={48} style={{ marginBottom: '24px', opacity: 0.8 }} />
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', letterSpacing: '0.05em', color: '#f8fafc' }}>{activePlanDetails.name}</span>
                        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: '16px', color: '#8c6a51' }}>Interactive Blueprint Layout</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section - Temporarily Commented Out
          <section id="pricing" className="project-pricing-section scroll-section" style={{ position: 'relative', overflow: 'hidden' }}>
            <img src="/images/flycatcher_corner_bottomright.png" alt="" className="corner-bird corner-bottom-right" aria-hidden="true" />
            <div className="container">
              <ScrollReveal className="section-header" animation="fadeUp">
                <span className="section-tag">Pricing</span>
                <h2 className="section-title">Size & Price <span className="highlight-italic">Details</span></h2>
                <p className="section-subtitle" style={{ color: '#64748b', marginBottom: '32px' }}>Bespoke configurations engineered for luxury space optimization</p>
              </ScrollReveal>

              <div className="pricing-leadgen-banner" style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '40px auto 0', borderRadius: '16px', overflow: 'hidden', padding: '80px 40px', textAlign: 'center', border: '1px solid rgba(19, 56, 37, 0.08)', background: 'linear-gradient(135deg, #fdfcf9 0%, #f4e9de 100%)', boxShadow: '0 20px 50px rgba(19, 56, 37, 0.06)' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'linear-gradient(rgba(19, 56, 37, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(19, 56, 37, 0.05) 1px, transparent 1px)', backgroundSize: '30px 30px', zIndex: 0 }}></div>
                
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 10px 30px rgba(140, 106, 81, 0.1)' }}>
                    <ShieldCheck size={36} color="#8c6a51" />
                  </div>
                  
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', color: '#133825', marginBottom: '16px', fontWeight: '400', letterSpacing: '0.02em' }}>
                    Unlock the <span style={{ fontStyle: 'italic', color: '#8c6a51' }}>Complete Cost Sheet</span>
                  </h3>
                  
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', color: '#2c543e', maxWidth: '580px', margin: '0 auto 40px', lineHeight: '1.8' }}>
                    Enter your details to instantly access our comprehensive pricing breakdown, flexible payment schedules, and real-time villa availability.
                  </p>
                  
                  <button className="btn-luxury-solid" onClick={() => setIsQuoteOpen(true)} style={{ padding: '18px 48px', fontSize: '15px', letterSpacing: '0.1em' }}>
                    UNLOCK PRICING NOW
                  </button>
                  <p style={{ marginTop: '16px', fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Shield size={12} /> Your information is secure and kept confidential.
                  </p>
                </div>
              </div>
            </div>
          </section>
          */}

          {/* Status Section */}
          <section id="status" className="project-status-section scroll-section">
            <div className="container">
              <ScrollReveal className="section-header" animation="fadeUp" style={{ textAlign: 'center', alignItems: 'center', marginBottom: '50px' }}>
                {/* <span className="section-tag">Status</span> */}
                <h2 className="section-title">Project <span className="highlight-italic">Status</span></h2>
                <p className="section-subtitle" style={{ color: '#64748b', margin: '0 auto', textAlign: 'center' }}>Live construction tracking and milestone updates</p>
              </ScrollReveal>

              <div className="status-timeline-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                <div className="status-month-container" style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', position: 'relative', width: '100%' }}>
                  <div className="status-month-label" style={{ width: '80px', flexShrink: 0, paddingTop: '10px' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', color: '#1a1d24', fontWeight: '500' }}>May</h3>
                  </div>
                  
                  <div className="status-month-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', flexGrow: 1 }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((imgNum, idx) => {
                      const formattedNum = imgNum.toString().padStart(2, '0');
                      const imgSrc = `/images/project/CML/Interiors/cml-interior-${formattedNum}.jpg`;
                      return (
                        <div key={idx} className="status-img-sm" style={{ aspectRatio: '16/11' }} onClick={() => setLightboxImage({ src: imgSrc, title: `Construction Progress ${idx + 1}` })}>
                          <img src={imgSrc} alt={`Progress ${idx + 1}`} />
                          <div className="status-img-overlay">
                            <Maximize2 size={24} color="#fff" />
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Navigation Arrow Slot */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', paddingBottom: '16px', paddingRight: '16px' }}>
                      <button className="status-nav-arrow-btn" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#1a1d24', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: 'none', transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = '#133825'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseOut={(e) => { e.currentTarget.style.background = '#1a1d24'; e.currentTarget.style.transform = 'none'; }}>
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <button className="lightbox-close-btn" onClick={() => setLightboxImage(null)}>
            <X size={24} />
          </button>
          <button className="lightbox-arrow-btn prev" onClick={(e) => { e.stopPropagation(); handleLightboxPrev(); }}>
            <ChevronLeft size={24} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage.src} alt={lightboxImage.title} className="lightbox-img" />
            <span className="lightbox-title">{lightboxImage.title}</span>
          </div>
          <button className="lightbox-arrow-btn next" onClick={(e) => { e.stopPropagation(); handleLightboxNext(); }}>
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="lightbox-overlay" onClick={() => setIsVideoOpen(false)}>
          <button className="lightbox-close-btn" onClick={() => setIsVideoOpen(false)}>
            <X size={24} />
          </button>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
              title="Villa Walkthrough Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Quote / Schedule Booking Modal */}
      {isQuoteOpen && (
        <div className="modal-overlay" onClick={() => setIsQuoteOpen(false)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsQuoteOpen(false)}>
              <X size={18} />
            </button>
            <h3 className="modal-heading">SCHEDULE A SITE VISIT</h3>
            <p className="modal-subheading">Experience premium luxury in person. Fill out the fields below.</p>

            {formSubmitted ? (
              <div className="form-success-message">
                <CheckCircle2 size={44} className="success-icon-gold" />
                <h4>Inquiry Received Successfully</h4>
                <p>One of our client service executives will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="modal-inquiry-form">
                <div className="form-group-field">
                  <User size={15} className="form-input-icon" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={quoteForm.name}
                    onChange={e => setQuoteForm({ ...quoteForm, name: e.target.value })}
                  />
                </div>
                <div className="form-group-field">
                  <Mail size={15} className="form-input-icon" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={quoteForm.email}
                    onChange={e => setQuoteForm({ ...quoteForm, email: e.target.value })}
                  />
                </div>
                <div className="form-group-field">
                  <Phone size={15} className="form-input-icon" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={quoteForm.phone}
                    onChange={e => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                  />
                </div>
                <div className="form-group-field text-area">
                  <input
                    type="text"
                    placeholder="Notes (e.g. preferred dates, facings)"
                    value={quoteForm.note}
                    onChange={e => setQuoteForm({ ...quoteForm, note: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-luxury-pill" style={{ width: '100%', padding: '10px 10px 10px 24px' }}>
                  <span>Submit Inquiry</span>
                  <span className="btn-circle-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />

      <style>{`
        .project-detail-page {
          background-color: var(--color-bg-light);
          min-height: 100vh;
        }

        .project-detail-page .navbar-new {
          position: absolute !important; /* Floats at top and scrolls away instead of staying fixed */
        }

        section[id], div[id] {
          scroll-margin-top: 50px; /* offset for sticky subnav only */
        }

        .project-sub-nav {
          background: var(--color-bg-light);
          border-bottom: none;
          position: sticky;
          top: 0;
          z-index: 90;
          padding: 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .sub-nav-container {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          position: relative;
        }

        .sub-nav-scroll-wrapper {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 0;
          flex: 1;
          position: relative;
        }

        .show-only-on-mobile {
          display: none !important;
        }

        /* ── SLIDING GOLD INDICATOR ── */
        .sub-nav-indicator {
          position: absolute;
          bottom: -1px;
          height: 3.5px;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-sage) 50%, var(--color-primary) 100%);
          border-radius: 4px 4px 0 0;
          transition: left 0.45s cubic-bezier(0.16, 1, 0.3, 1), width 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          box-shadow: 
            0 2px 10px rgba(19, 56, 37, 0.6), 
            0 0 20px rgba(19, 56, 37, 0.4),
            0 0 35px rgba(212, 182, 106, 0.2);
          pointer-events: none;
          z-index: 2;
        }

        .sub-nav-link {
          font-family: var(--font-sans);
          font-size: 11.5px;
          font-weight: 500;
          color: #94a3b8;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 20px 24px 18px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease, background 0.3s ease;
          white-space: nowrap;
        }

        .sub-nav-link:hover {
          color: #475569;
          background: rgba(19, 56, 37, 0.03);
        }

        .sub-nav-link.active {
          color: var(--color-primary);
          font-weight: 500;
          font-size: 11.5px;
        }

        /* ── SUBNAV DROPDOWNS ── */
        .sub-nav-dropdown-wrapper {
          position: relative;
          display: inline-flex;
        }

        .sub-nav-chevron {
          margin-left: 2px;
          display: inline-block;
          vertical-align: middle;
          opacity: 0.4;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        }

        .sub-nav-dropdown-wrapper:hover .sub-nav-chevron {
          transform: rotate(180deg);
          opacity: 0.8;
        }

        .sub-nav-dropdown-wrapper:hover .more-trigger-icon {
          transform: rotate(90deg) scale(1.1);
          color: var(--color-primary);
        }

        .sub-nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: 50%;
          transform: translateX(-50%) translateY(6px);
          background: #ffffff;
          border: 1px solid rgba(19, 56, 37, 0.12);
          border-radius: 12px;
          min-width: 185px;
          padding: 6px;
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.08),
            0 2px 8px rgba(19, 56, 37, 0.04);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 99;
        }

        .sub-nav-dropdown-wrapper:hover .sub-nav-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-item {
          display: block;
          padding: 10px 16px;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
          letter-spacing: 0.03em;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          cursor: pointer;
          background: transparent;
          border: none;
          border-radius: 8px;
          width: 100%;
        }

        .dropdown-item:hover {
          color: var(--color-primary);
          background: rgba(19, 56, 37, 0.06);
          padding-left: 20px;
        }

        .dropdown-item.active {
          color: var(--color-primary);
          font-weight: 600;
          background: rgba(19, 56, 37, 0.08);
        }

        /* ── Nested Tabs (Overview Switcher) ── */
        .nested-tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 16px; /* Reduced to eliminate negative space */
          margin-top: 10px;
        }

        .nested-tabs-wrapper {
          display: flex;
          background: rgba(19, 56, 37, 0.05);
          border: 1px solid rgba(19, 56, 37, 0.15);
          padding: 6px;
          border-radius: 100px;
          gap: 6px;
        }

        .nested-tab-btn {
          background: transparent;
          border: none;
          padding: 8px 24px;
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 500;
          color: #64748b;
          border-radius: 100px;
          cursor: pointer;
          letter-spacing: 0.03em;
          transition: all 0.3s ease;
        }

        .nested-tab-btn:hover {
          color: var(--color-primary);
          background: rgba(19, 56, 37, 0.04);
        }

        .nested-tab-btn.active {
          background: var(--color-primary);
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(19, 56, 37, 0.15);
        }

        /* ── Tab Pane Animations ── */
        .fade-in-panel {
          animation: paneFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes paneFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 700px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background-color: #060b1d;
        }

        /* ── 4-Split Reveal Mask ── */
        .project-split-mask {
          position: absolute;
          inset: 0;
          display: flex;
          z-index: 40;
          pointer-events: none;
        }
        
        .split-panel {
          flex: 1;
          height: 100%;
          background-color: #060b1d;
          animation: slideAwayProject 1.2s cubic-bezier(0.85, 0, 0.15, 1) forwards;
        }
        
        .panel-1 { transform-origin: top; animation-delay: 0.1s; }
        .panel-2 { transform-origin: bottom; animation-delay: 0.22s; }
        .panel-3 { transform-origin: top; animation-delay: 0.34s; }
        .panel-4 { transform-origin: bottom; animation-delay: 0.46s; }

        @keyframes slideAwayProject {
          to { transform: scaleY(0); }
        }

        /* ── Background Image ── */
        .project-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .project-hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        .project-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom, 
            rgba(6, 11, 29, 0.7) 0%, 
            rgba(6, 11, 29, 0.4) 50%, 
            rgba(6, 11, 29, 0.75) 100%
          );
          z-index: 2;
        }

        /* ── Light Leak ── */
        .project-hero-light-leak {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          overflow: hidden;
          mix-blend-mode: screen;
        }

        .project-hero-light-leak::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -20%;
          width: 80%;
          height: 80%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(19, 56, 37, 0.15) 0%, rgba(19, 56, 37, 0.03) 50%, transparent 80%);
          filter: blur(80px);
          animation: floatGoldProject 25s infinite alternate ease-in-out;
          will-change: transform;
        }

        .project-hero-light-leak::after {
          content: '';
          position: absolute;
          bottom: -20%;
          right: -20%;
          width: 80%;
          height: 80%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, rgba(2, 132, 199, 0.03) 50%, transparent 80%);
          filter: blur(80px);
          animation: floatTealProject 30s infinite alternate ease-in-out;
          will-change: transform;
        }

        @keyframes floatGoldProject {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          100% { transform: translate3d(80px, 60px, 0) rotate(120deg); }
        }

        @keyframes floatTealProject {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          100% { transform: translate3d(-80px, -60px, 0) rotate(-120deg); }
        }

        /* ── Overlaid Content ── */
        .project-hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 900px;
          padding: 0 24px;
          margin-top: 60px;
        }

        .project-tag-reveal {
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          color: #e2b865;
          letter-spacing: 0.3em;
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeUpProject 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.8s;
          display: inline-block;
        }

        .hero-cta-btn {
          margin-top: 48px;
          opacity: 0;
          animation: fadeUpProject 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.4s;
          background: transparent !important;
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
          backdrop-filter: blur(8px);
        }

        .hero-cta-btn .btn-circle-arrow {
          background: rgba(255, 255, 255, 0.15) !important;
          color: #ffffff !important;
        }
        
        .hero-cta-btn:hover {
          background: #ffffff !important;
          border-color: #ffffff !important;
          color: #060b1d !important;
          box-shadow: 0 8px 30px rgba(255, 255, 255, 0.15) !important;
        }

        .hero-cta-btn:hover .btn-circle-arrow {
          background: #e2b865 !important;
          color: #ffffff !important;
        }

        .project-hero-title {
          font-family: var(--font-heading);
          font-size: 64px;
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: 0.02em;
          color: #ffffff;
          margin-bottom: 24px;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.65), 0 2px 10px rgba(0, 0, 0, 0.4);
          opacity: 0;
          animation: fadeUpProject 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1s;
        }

        .project-hero-title .highlight-text {
          color: #e2b865;
          font-style: italic;
          font-weight: 700;
        }

        .project-hero-subtitle {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.2em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          opacity: 0;
          animation: fadeUpProject 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.2s;
          display: inline-block;
        }

        @keyframes fadeUpProject {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── SECTION WRAPPER & SUBSECTIONS ── */
        .project-section-wrapper {
          background-color: #fdfdfb;
        }

        .section-header {
          margin-bottom: 0px;
          text-align: left;
        }

        .section-subtitle {
          font-family: var(--font-sans);
          font-size: 14.5px;
          color: var(--color-text-muted);
          line-height: 1.6;
          max-width: 680px;
          margin-top: 8px;
          margin-bottom: 0;
          text-align: left;
        }

        #overview.project-section-wrapper {
          background-color: #fcfcf9;
          padding: 80px 0;
        }

        .overview-outer-container {
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .ov-highlight-italic {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: var(--color-primary);
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        /* ── Centered Header Styles ── */
        .overview-centered-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .overview-main-title {
          font-family: var(--font-heading);
          font-size: 42px;
          color: #133825;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin: 0 0 12px 0;
        }

        .overview-sub-title {
          font-family: var(--font-sans);
          font-size: 15px;
          color: #64748b;
          margin: 0;
        }

        /* ── Pill Tabs Styles ── */
        .overview-nav-container {
          display: flex;
          justify-content: center;
          margin-bottom: 56px;
        }

        .overview-nav-pills {
          display: inline-flex;
          background: rgba(19, 56, 37, 0.04);
          border: 1px solid rgba(19, 56, 37, 0.08);
          border-radius: 100px;
          padding: 6px;
          gap: 6px;
        }

        .overview-pill-btn {
          border: none;
          background: transparent;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-muted);
          padding: 10px 28px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .overview-pill-btn:hover:not(.active) {
          color: var(--color-primary);
          background: rgba(19, 56, 37, 0.04);
        }

        .overview-pill-btn.active {
          background: var(--color-primary);
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(19, 56, 37, 0.15);
        }

        /* ── Grid Layout Styles ── */
        .overview-main-grid-redesign {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 64px;
          align-items: center;
          min-height: 420px;
        }

        .overview-left-visual {
          width: 100%;
        }

        .overview-image-wrapper {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(19, 56, 37, 0.1);
          box-shadow: 0 12px 30px rgba(0,0,0,0.03);
          aspect-ratio: 16/10;
        }

        .overview-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .overview-right-text {
          width: 100%;
        }

        .overview-text-title {
          font-family: var(--font-heading);
          font-size: 32px;
          color: var(--color-primary);
          font-weight: 400;
          margin-bottom: 20px;
          letter-spacing: 0.02em;
          line-height: 1.2;
        }

        .overview-text-desc {
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.8;
          margin-bottom: 32px;
        }

        /* Curated slide panels */
        .overview-slide-panel {
          animation: ov-panel-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes ov-panel-fade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Curated Amenities View */
        .overview-amenities-view {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .ov-sub-heading {
          font-family: var(--font-heading);
          font-size: 21px;
          color: var(--color-primary);
          margin: 0 0 20px 0;
          font-weight: 400;
          letter-spacing: 0.04em;
        }

        .ov-amenities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px 20px;
        }

        .ov-amenity-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 12px;
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(19, 56, 37, 0.05);
        }

        .ov-amenity-icon {
          color: var(--color-primary);
          font-size: 18px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .ov-amenity-title {
          font-family: var(--font-sans);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--color-primary);
          margin: 0 0 4px 0;
        }

        .ov-amenity-desc {
          font-family: var(--font-sans);
          font-size: 11.5px;
          color: var(--color-text-muted);
          margin: 0;
          line-height: 1.45;
        }

        /* Curated Location View */
        .overview-location-view {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .ov-location-layout {
          display: grid;
          grid-template-columns: 1.2fr 1.05fr;
          gap: 24px;
          align-items: start;
        }

        .ov-map-visual {
          position: relative;
          width: 100%;
          height: 220px;
          border: 1px solid rgba(19, 56, 37, 0.12);
          background: rgba(255, 255, 255, 0.6);
          overflow: hidden;
        }

        .ov-landmarks-list {
          display: flex;
          flex-direction: column;
        }

        .ov-landmarks-title {
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--color-primary);
          letter-spacing: 0.15em;
          margin-bottom: 14px;
          font-weight: 600;
        }

        .ov-landmarks-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ov-landmark-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          border-bottom: 1px solid rgba(19, 56, 37, 0.05);
          padding-bottom: 6px;
        }

        .ov-landmark-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .ov-landmark-name {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: #1c222f;
          display: block;
        }

        .ov-landmark-time {
          font-family: var(--font-sans);
          font-size: 11px;
          color: #64748b;
        }

        @media (max-width: 960px) {
          .overview-main-grid-redesign {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .overview-text-title {
            font-size: 26px;
            margin-bottom: 14px;
          }

          .overview-text-desc {
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 24px;
          }

          .overview-nav-pills {
            flex-wrap: wrap;
            justify-content: center;
            border-radius: 24px;
            padding: 8px;
          }

          .overview-pill-btn {
            padding: 8px 16px;
            font-size: 13px;
          }

          .overview-main-title {
            font-size: 32px;
          }

          .ov-location-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .sub-section-title {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 500;
          color: #1c222f;
          letter-spacing: 0.08em;
          text-align: center;
          margin-bottom: 40px;
          position: relative;
        }

        .sub-section-title::after {
          content: '';
          display: block;
          width: 40px;
          height: 2px;
          background: var(--color-primary);
          margin: 12px auto 0;
        }

        /* Amenities Grid Styling */
        .overview-amenities-block {
          padding: 16px 0 0 0; /* Reduced to eliminate negative space */
          background-color: transparent !important;
          border: none !important;
        }

        /* ── Corner Branch Bird Decorators ── */
        .corner-bird {
          position: absolute;
          pointer-events: none;
          z-index: 2;
          opacity: 1;
          width: 340px;
          height: auto;
          transition: opacity 0.3s ease;
        }

        .corner-top-right {
          top: -10px;
          right: -10px;
          animation: gentleFloat 8s ease-in-out infinite;
        }

        .corner-top-left {
          top: -10px;
          left: -10px;
          transform: rotate(180)
          animation: gentleFloat 9s ease-in-out infinite 1s;
        }

        .corner-bottom-right {
          bottom: 10px;
          right: -10px;
          animation: gentleFloat 7s ease-in-out infinite 0.5s;
        }

        @keyframes gentleFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 1200px) {
          .corner-bird {
            width: 180px;
            opacity: 0.25;
          }
        }

        @media (max-width: 768px) {
          .corner-bird {
            display: none;
          }
        }

        .amenities-grid-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .amenity-card {
          background: #ffffff;
          padding: 30px 24px;
          border-radius: 12px;
          border: 1px solid #f0edf7;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.015);
          transition: all 0.35s var(--ease-luxury);
          text-align: center;
        }

        .amenity-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 10px 30px rgba(19, 56, 37, 0.08);
        }

        .amenity-icon-gold {
          color: var(--color-primary);
          margin-bottom: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(19, 56, 37, 0.08);
          transition: all 0.3s ease;
        }

        .amenity-card:hover .amenity-icon-gold {
          background: var(--color-primary);
          color: #ffffff;
        }

        .amenity-title {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 500;
          color: #1a1d24;
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }

        .amenity-desc {
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.5;
        }

        /* Location Layout Styling */
        .overview-location-block {
          padding: 16px 0 0 0; /* Reduced to eliminate negative space */
          background: transparent !important;
          border: none !important;
        }

        .location-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .location-map-visual {
          height: 350px;
          background-color: #060b1d;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(19, 56, 37, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .map-grid-layer {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: 
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px);
          background-size: 25px 25px;
        }

        .map-radar-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(19, 56, 37, 0.15);
          animation: mapRadar 2.5s infinite ease-out;
        }

        @keyframes mapRadar {
          0% { width: 0; height: 0; opacity: 1; }
          100% { width: 300px; height: 300px; opacity: 0; }
        }

        .map-core-node {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 10;
        }

        .map-core-compass {
          color: var(--color-primary);
          animation: spinCompass 25s infinite linear;
        }

        @keyframes spinCompass {
          to { transform: rotate(360deg); }
        }

        .map-core-label {
          font-family: var(--font-sans);
          font-size: 9px;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.1em;
          background: rgba(6, 11, 29, 0.85);
          border: 1px solid var(--color-primary);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .map-node {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          z-index: 5;
        }

        .node-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #0284c7;
          box-shadow: 0 0 10px #0284c7;
        }

        .node-text {
          font-family: var(--font-sans);
          font-size: 9px;
          color: rgba(255, 255, 255, 0.75);
          letter-spacing: 0.05em;
        }

        .map-vector-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .location-info-list {
          display: flex;
          flex-direction: column;
        }

        .location-heading {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 500;
          color: #1c222f;
          margin-bottom: 24px;
          letter-spacing: 0.05em;
        }

        .landmarks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .landmark-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .landmark-icon {
          color: var(--color-primary);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .landmark-name {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          color: #1a1d24;
          display: block;
        }

        .landmark-time {
          font-family: var(--font-sans);
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
        }

        /* ── VIDEOS SECTION STYLING ── */
        .project-videos-section {
          background-color: var(--color-bg-light);
          padding: 80px 0;
          color: var(--color-text-dark);
          border-top: 1px solid rgba(19, 56, 37, 0.05);
        }

        .text-center { text-align: center; }

        .project-videos-section .section-title {
          color: var(--color-text-dark);
        }

        .project-videos-section .section-subtitle {
          color: var(--color-text-muted);
        }

        .video-player-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          aspect-ratio: 16/9;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(19, 56, 37, 0.15);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.05);
          cursor: pointer;
        }

        .video-player-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .video-player-container:hover .video-player-thumbnail {
          transform: scale(1.04);
        }

        .video-player-overlay {
          position: absolute;
          inset: 0;
          background: rgba(19, 56, 37, 0.45);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          z-index: 5;
          transition: background-color 0.35s ease;
        }

        .video-player-container:hover .video-player-overlay {
          background-color: rgba(6, 11, 29, 0.4);
        }

        .play-button-pulsing {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.45);
          animation: playPulse 2s infinite;
          padding-left: 4px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .video-player-container:hover .play-button-pulsing {
          transform: scale(1.1);
          background: var(--color-primary);
          color: #ffffff;
        }

        .video-player-container:hover .play-button-pulsing svg {
          fill: #ffffff;
        }

        @keyframes playPulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }

        .video-overlay-text {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #ffffff;
        }

        /* ── GALLERY SECTION STYLING ── */
        .project-gallery-section {
          background-color: var(--color-bg-light);
          padding: 60px 0;
        }

        .project-gallery-section .section-subtitle {
          color: #64748b;
          margin-bottom: 20px;
          font-family: var(--font-sans);
          font-size: 15px;
        }


        /* ── 3D GALLERY SLIDER ── */
        .gallery-deck-viewport {
          position: relative;
          height: 400px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .gallery-deck-stack {
          position: relative;
          width: 580px;
          height: 380px;
        }

        .gallery-deck-card {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.04);
          transition: all 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          background-color: #060b1d;
        }

        .gallery-deck-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-deck-card:hover .gallery-deck-img {
          transform: scale(1.05);
        }

        .gallery-deck-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(6, 11, 29, 0.4);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: opacity 0.35s ease;
          z-index: 2;
        }

        .gallery-deck-card.active:hover .gallery-deck-hover-overlay {
          opacity: 1;
        }

        .hover-overlay-zoom-icon {
          color: var(--color-primary);
          margin-bottom: 6px;
          transform: translateY(10px);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-deck-card.active:hover .hover-overlay-zoom-icon {
          transform: translateY(0);
        }

        .hover-overlay-title {
          font-family: var(--font-heading);
          font-size: 15px;
          color: #ffffff;
          font-weight: 400;
          letter-spacing: 0.03em;
        }

        /* Elegant top-aligned active image title */
        .gallery-active-title-top {
          text-align: center;
          font-family: var(--font-heading);
          font-size: 24px;
          color: var(--color-primary);
          font-style: italic;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
          animation: fadeUpProject 0.5s ease forwards;
        }

        .gallery-deck-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(19, 56, 37, 0.15);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 30;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-deck-arrow:hover {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 8px 20px rgba(19, 56, 37, 0.2);
        }

        .gallery-deck-arrow.prev { left: 24px; }
        .gallery-deck-arrow.next { right: 24px; }

        @media (max-width: 768px) {
          .gallery-deck-viewport {
            height: 300px;
          }
          .gallery-deck-stack {
            width: 85vw;
            height: 280px;
          }
          .gallery-deck-arrow {
            width: 40px;
            height: 40px;
          }
          .gallery-deck-arrow.prev { left: 10px; }
          .gallery-deck-arrow.next { right: 10px; }
          .gallery-active-title-top {
            font-size: 18px;
            margin-bottom: 6px;
          }
        }

        /* ── FLOORPLANS SECTION STYLING ── */
        .project-floorplans-section {
          background: radial-gradient(circle at top left, #fdfcf9 0%, #f4e9de 100%);
          border-top: 1px solid rgba(19, 56, 37, 0.04);
          border-bottom: 1px solid rgba(19, 56, 37, 0.04);
        }

        .project-floorplans-section .section-subtitle {
          color: #2c543e;
          margin-bottom: 24px;
          font-family: var(--font-sans);
          font-size: 15px;
        }

        .floorplan-layout-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 50px;
          align-items: center;
        }

        .floorplan-tabs-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .floorplan-tab-btn {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(19, 56, 37, 0.08);
          padding: 12px 20px;
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 500;
          color: #2c543e;
          text-align: left;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .floorplan-tab-btn:hover {
          background: rgba(255, 255, 255, 0.7);
          border-color: rgba(140, 106, 81, 0.3);
        }

        .floorplan-tab-btn.active {
          border-color: #8c6a51;
          background: #ffffff;
          color: #133825;
          font-weight: 600;
          box-shadow: 0 8px 30px rgba(140, 106, 81, 0.12);
        }

        .btn-tab-num {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #8c6a51;
          border: 1px solid rgba(140, 106, 81, 0.3);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }

        .floorplan-tab-btn.active .btn-tab-num {
          background: #133825;
          border-color: #133825;
          color: #ffffff;
        }

        .floorplan-specs-box {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          border: 1px solid rgba(19, 56, 37, 0.08);
          padding: 14px 20px;
          margin-top: 6px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .floorplan-spec-line {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-family: var(--font-sans);
          border-bottom: 1px solid rgba(19, 56, 37, 0.04);
          padding-bottom: 8px;
        }
        .floorplan-spec-line:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .spec-label {
          color: #8c6a51;
          letter-spacing: 0.05em;
        }

        .spec-val {
          color: #133825;
          font-weight: 600;
        }



        .floorplan-visual-col {
          display: flex;
          justify-content: center;
        }

        .blueprint-canvas {
          width: 100%;
          max-width: 580px;
          aspect-ratio: 4/3;
          background-color: #060b1d;
          border-radius: 12px;
          border: 1px solid rgba(19, 56, 37, 0.3);
          box-shadow: inset 0 0 50px rgba(0,0,0,0.5), 0 20px 40px rgba(0, 0, 0, 0.12);
          position: relative;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blueprint-grid-mesh {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          background-image: 
            linear-gradient(rgba(19, 56, 37, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(19, 56, 37, 1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .blueprint-svg {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 5;
        }

        .blueprint-stamp {
          position: absolute;
          bottom: 15px;
          right: 15px;
          font-family: var(--font-sans);
          font-size: 8px;
          font-weight: 700;
          color: rgba(19, 56, 37, 0.35);
          letter-spacing: 0.15em;
          border: 1px solid rgba(19, 56, 37, 0.2);
          padding: 3px 8px;
          border-radius: 2px;
        }

        /* ── PRICING SECTION STYLING ── */
        .project-pricing-section {
          background-color: var(--color-bg-light);
          padding: 80px 0;
        }

        .project-pricing-section .section-subtitle {
          color: #64748b;
          margin-bottom: 48px;
          font-family: var(--font-sans);
          font-size: 15px;
        }

        .pricing-cards-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .pricing-item-card {
          background: #ffffff;
          border: 1px solid rgba(19, 56, 37, 0.12);
          border-radius: 16px;
          padding: 36px 28px;
          position: relative;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.01);
          transition: all 0.35s var(--ease-luxury);
        }

        /* Overview Editorial Layout */
        .overview-editorial-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          align-items: end;
        }

        @media (max-width: 900px) {
          .overview-editorial-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: start;
          }
          .overview-editorial-grid h2 {
            font-size: 100px !important;
            transform: none !important;
            text-align: center;
          }
        }

        .amenity-luxury-card .amenity-bg-img {
          transform: scale(1);
        }
        .amenity-luxury-card:hover .amenity-bg-img {
          transform: scale(1.08);
        }
        .amenity-luxury-card .amenity-icon-wrapper {
          background: rgba(255,255,255,0.1) !important;
          color: #fff !important;
        }
        .amenity-luxury-card:hover .amenity-icon-wrapper {
          background: #fff !important;
          color: #0a1c12 !important;
        }
        .amenity-luxury-card .amenity-desc-text {
          color: rgba(255,255,255,0.7) !important;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .amenity-luxury-card:hover .amenity-desc-text {
          color: rgba(255,255,255,1) !important;
        }

        .pricing-item-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(19, 56, 37, 0.08);
          border-color: var(--color-primary);
        }

        .pricing-item-card.featured {
          border-color: var(--color-primary);
          box-shadow: 0 12px 35px rgba(19, 56, 37, 0.04);
          background: #f4fbf7;
        }

        .pricing-item-card.featured:hover {
          box-shadow: 0 20px 50px rgba(19, 56, 37, 0.12);
        }

        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 28px;
          background: var(--color-primary);
          color: #faf8f0;
          font-family: var(--font-sans);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid var(--color-primary);
        }

        .pricing-badge.featured-badge {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #ffffff;
        }

        .pricing-title {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 500;
          color: var(--color-primary);
          margin-bottom: 20px;
          margin-top: 5px;
          letter-spacing: 0.03em;
        }

        .pricing-divider {
          width: 100%;
          height: 1px;
          background: rgba(19, 56, 37, 0.08);
          margin-bottom: 24px;
        }

        .pricing-specs {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 30px;
        }

        .pricing-amount {
          margin-top: auto;
          margin-bottom: 28px;
        }

        .pricing-label {
          display: block;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .pricing-val {
          font-family: var(--font-heading);
          font-size: 26px;
          font-weight: 600;
          color: var(--color-primary);
          letter-spacing: 0.02em;
        }

        .pricing-asterisk {
          font-size: 15px;
          vertical-align: super;
          color: #64748b;
        }



        .pricing-fineprint {
          text-align: center;
          font-family: var(--font-sans);
          font-size: 11px;
          color: #94a3b8;
          margin-top: 32px;
        }

        /* ── PROJECT STATUS SECTION STYLING ── */
        .project-status-section {
          background-color: var(--color-bg-light);
          padding: 80px 0;
          border-top: 1px solid rgba(19, 56, 37, 0.08);
        }

        .project-status-section .section-subtitle {
          color: #64748b;
          margin-bottom: 54px;
          font-family: var(--font-sans);
          font-size: 15px;
        }

        .status-timeline-container {
          display: grid;
          gap: 60px;
          max-width: 1050px;
          margin: 0 auto;
          align-items: center;
        }

        .status-img-sm {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
        }

        .status-img-sm img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .status-img-sm:hover img {
          transform: scale(1.05);
        }

        .status-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(19, 56, 37, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .status-img-sm:hover .status-img-overlay {
          opacity: 1;
        }



        /* ── LIGHTBOX / MODAL MEDIA OVERLAYS ── */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(6, 11, 29, 0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          color: #ffffff;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
          z-index: 1010;
        }

        .lightbox-close-btn:hover {
          color: var(--color-primary);
        }

        .lightbox-arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1010;
        }

        .lightbox-arrow-btn:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
        }

        .lightbox-arrow-btn.prev { left: 40px; }
        .lightbox-arrow-btn.next { right: 40px; }

        .lightbox-content {
          max-width: 80%;
          max-height: 80%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          position: relative;
        }

        .lightbox-img {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: 6px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .lightbox-title {
          font-family: var(--font-heading);
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 0.05em;
          text-align: center;
        }

        /* Video Iframe container inside overlay */
        .video-modal-content {
          width: 80%;
          max-width: 800px;
          aspect-ratio: 16/9;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .video-iframe {
          width: 100%;
          height: 100%;
        }

        /* Inquiry booking Form Modal styling */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(6, 11, 29, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content-card {
          background: #ffffff;
          border: 1px solid rgba(19, 56, 37, 0.2);
          border-radius: 16px;
          width: 90%;
          max-width: 440px;
          padding: 40px;
          position: relative;
          box-shadow: 0 25px 55px rgba(0,0,0,0.2);
          animation: modalEntrance 0.4s var(--ease-luxury);
        }

        @keyframes modalEntrance {
          from { opacity: 0; transform: translateY(15px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #94a3b8;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .modal-close-btn:hover {
          color: #1c222f;
        }

        .modal-heading {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 500;
          color: #1c222f;
          text-align: center;
          margin-bottom: 6px;
          letter-spacing: 0.05em;
        }

        .modal-subheading {
          font-family: var(--font-sans);
          font-size: 13px;
          color: #64748b;
          text-align: center;
          margin-bottom: 28px;
        }

        .modal-inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group-field {
          position: relative;
          width: 100%;
        }

        .form-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          pointer-events: none;
        }

        .form-group-field input {
          width: 100%;
          padding: 14px 14px 14px 40px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: #1e293b;
          outline: none;
          transition: all 0.3s ease;
        }

        .form-group-field input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(19, 56, 37, 0.08);
        }



        .form-success-message {
          text-align: center;
          padding: 20px 0;
          animation: fadeUpProject 0.5s ease forwards;
        }

        .success-icon-gold {
          color: var(--color-primary);
          margin-bottom: 16px;
        }

        .form-success-message h4 {
          font-family: var(--font-heading);
          font-size: 18px;
          color: #1a1d24;
          margin-bottom: 6px;
        }

        .form-success-message p {
          font-family: var(--font-sans);
          font-size: 13px;
          color: #64748b;
        }

        /* ── RESPONSIVE MEDIA CONTROLS ── */
        @media (max-width: 1024px) {
          .amenities-grid-box {
            grid-template-columns: repeat(2, 1fr);
          }
          .floorplan-layout-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .pricing-cards-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .status-timeline-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 900px) {
          .project-hero-title {
            font-size: 38px;
          }
          .sub-nav-container {
            justify-content: space-between;
            padding: 0;
            overflow: visible;
          }
          .sub-nav-scroll-wrapper {
            justify-content: flex-start;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .sub-nav-scroll-wrapper::-webkit-scrollbar {
            display: none;
          }
          .sub-nav-scroll-wrapper > .sub-nav-link,
          .sub-nav-scroll-wrapper > .sub-nav-dropdown-wrapper {
            flex: 0 0 auto !important;
            min-width: auto !important;
            max-width: none !important;
            display: inline-flex;
          }
          .sub-nav-scroll-wrapper .sub-nav-link {
            width: auto;
            padding: 16px 16px 14px !important;
          }
          .sub-nav-mobile-trigger-wrapper {
            display: flex !important;
            align-items: center;
            background: #ffffff;
            border-left: 1px solid rgba(0, 0, 0, 0.08);
            position: relative;
            z-index: 10;
            flex-shrink: 0;
          }
          .mobile-grid-trigger-btn {
            padding: 16px 16px 14px !important;
          }
          .show-only-on-mobile {
            display: inline-flex !important;
          }
          .mobile-directory-menu {
            min-width: 220px;
            padding: 8px;
            background: rgba(255, 255, 255, 0.95) !important;
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(19, 56, 37, 0.15) !important;
            border-radius: 16px !important;
            box-shadow: 
              0 12px 40px rgba(0, 0, 0, 0.12),
              0 2px 8px rgba(19, 56, 37, 0.06) !important;
          }
          .mobile-directory-header {
            font-family: var(--font-sans);
            font-size: 8.5px;
            font-weight: 600;
            color: var(--color-primary);
            letter-spacing: 0.15em;
            padding: 8px 12px 4px;
            text-transform: uppercase;
            border-bottom: 1px solid rgba(19, 56, 37, 0.08);
            margin-bottom: 6px;
          }
          .mobile-directory-menu .dropdown-item {
            padding: 10px 14px;
            font-size: 12.5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 8px;
            color: #475569;
            font-weight: 500;
          }
          .mobile-directory-menu .dropdown-item.active {
            color: var(--color-primary);
            background: rgba(19, 56, 37, 0.06);
            font-weight: 600;
          }
          .mobile-directory-menu .dropdown-item.active::after {
            content: '•';
            color: var(--color-primary);
            font-size: 16px;
            line-height: 1;
          }
          .nested-tabs-container {
            width: 100%;
            padding: 0 16px;
            box-sizing: border-box;
          }
          .nested-tabs-wrapper {
            width: 100%;
            justify-content: space-between;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
            white-space: nowrap;
          }
          .nested-tabs-wrapper::-webkit-scrollbar {
            display: none;
          }
          .nested-tab-btn {
            flex: 1;
            text-align: center;
            padding: 8px 12px !important;
            font-size: 11.5px !important;
            white-space: nowrap;
          }
          .location-grid-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .pricing-cards-container {
            grid-template-columns: 1fr;
          }
          .amenities-grid-box {
            grid-template-columns: 1fr;
          }
          .landmarks-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .lightbox-arrow-btn.prev { left: 15px; }
          .lightbox-arrow-btn.next { right: 15px; }
          .lightbox-content { max-width: 90%; }
        }
      `}</style>
    </div>
  );
}
