import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import {
  MapPin, Compass, Shield, Zap, Home, Play,
  Layers, CheckCircle2, ArrowRight, Download,
  Maximize2, ChevronLeft, ChevronRight, X, Phone, Mail, User, Clock, ChevronDown, ChevronUp, LayoutGrid,
  ShoppingBag, Coffee, Cross, Stethoscope, CreditCard, Dumbbell, Activity, Gamepad2, Trees, Users, Baby, ShieldCheck, Video,
  FileText, MessageCircle, RotateCcw
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyProject from '../components/WhyProject';
import ProjectSpecs from '../components/ProjectSpecs';
import ScrollReveal from '../components/ScrollReveal';
import NeighbourhoodStory from '../components/StorySection/NeighbourhoodStory';
import ProjectDetailsGrid from '../components/ProjectDetailsGrid';
import ProjectPricingSection from '../components/ProjectPricingSection';
const VIDEO_SLIDES = [
  {
    title: "Gated Community Walkthrough",
    thumbnail: "/images/home/project-image-2.png",
    buttonLabel: "WALKTHROUGH",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
  },
  {
    title: "Ultra-Luxury Interior Showcase",
    thumbnail: "/images/project/CML/Interiors/cml-interior-01.jpg",
    buttonLabel: "WALKTHROUGH",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
  },
  {
    title: "Medavakkam & Drone Aerial Tour",
    thumbnail: "/images/home/project-image-1.png",
    buttonLabel: "DROON",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
  }
];
const SPECIFICATIONS = [
  {
    id: 'structure',
    label: 'Structure',
    index: '01',
    title: 'STRUCTURE',
    details: [
      'RCC Framed structure',
      'A robust structural system made of Reinforced Cement Concrete (RCC) columns, beams, and slabs, designed to safely carry building loads and transfer them to the foundation. It provides strength, durability, stability, and flexibility in architectural planning.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'wall-finish',
    label: 'Wall Finish',
    index: '02',
    title: 'WALL FINISH',
    details: [
      'Red Bricks',
      'High-quality traditional masonry units made from natural clay, offering strength, durability, thermal insulation, and long-lasting performance. They provide a solid and reliable wall construction while giving the building a natural, timeless finish.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'floor-finish',
    label: 'Floor Finish',
    index: '03',
    title: 'FLOOR FINISH',
    details: [
      'Vitrified Tiles',
      'High-quality vitrified tiles providing a smooth, durable, low-maintenance, and elegant flooring finish. They offer excellent resistance to stains, moisture, and daily wear while enhancing the overall look of the interiors.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'kitchen-dining',
    label: 'Kitchen & Dining',
    index: '04',
    title: 'KITCHEN & DINING',
    details: [
      'Black Quartz sink with Single Bowl / Black jet grantie',
      '20mm thick jet black granite countertop with a durable stainless steel sink, offering a sleek, hygienic, easy-to-maintain, and elegant finish for the kitchen and dining space.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'balcony',
    label: 'Balcony',
    index: '05',
    title: 'BALCONY',
    details: [
      'Toughedn glass with stainless steels hand rail',
      'High-safety toughened glass railings with premium stainless steel handrails, providing unobstructed views, modern elegance, and dependable durability.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'bathroom',
    label: 'Bathroom',
    index: '06',
    title: 'BATHROOM',
    details: [
      'Jaguar / Equivalent sanitory fittings',
      'Premium Jaguar or equivalent sanitary fittings, selected for durability, reliable performance, water efficiency, and a modern, elegant finish, ensuring comfort and functionality in every bathroom.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'joinery-windows',
    label: 'Joinery & Windows',
    index: '07',
    title: 'JOINERY & WINDOWS',
    details: [
      'Aluminium frame windows',
      'High-quality UPVC / Aluminium windows providing excellent durability, weather resistance, thermal insulation, and low maintenance, with a clean and modern appearance.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'internal-staircase',
    label: 'Internal Staircases',
    index: '08',
    title: 'INTERNAL STAIRCASES ( VILLAS DUPLEX UNITS)',
    details: [
      'Toughedn glass with stainless steels hand rail',
      'Elegant stainless steel handrails providing a sleek, modern appearance with excellent strength, durability, corrosion resistance, and low maintenance, ensuring safety and comfort along the staircase.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'electrical-points',
    label: 'Electrical Points',
    index: '09',
    title: 'ELECTRICAL POINTS',
    details: [
      'Finolex brand wires / Anchor Switches',
      'Electrical wiring using Finolex brand wires with Anchor switches, ensuring reliable electrical performance, safety, durability, and a quality finish throughout the villa.'
    ],
    image: '/images/project/spec-structure.png'
  },
  {
    id: 'common-features',
    label: 'Common Features',
    index: '10',
    title: 'COMMON FEATURES',
    details: [
      'Club House / Avenue trees, 24*7 Security',
      'Provision of a Fujitech lift, solar power for common areas, and a well-equipped gym, offering enhanced convenience, energy efficiency, comfort, and modern lifestyle amenities for residents.'
    ],
    image: '/images/project/spec-structure.png'
  }
];
export default function NewProject({ project }) {
  const location = useLocation();
  const isPashaPinnacle = project === 'pasha' || location.pathname.includes('pasha') || location.search.includes('pasha');

  const [activeTab, setActiveTab] = useState('overview');
  const [activeSubSection, setActiveSubSection] = useState('highlights');
  const [showAllInteriors, setShowAllInteriors] = useState(false);
  const [showAllExteriors, setShowAllExteriors] = useState(false);
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
  const [lightboxSection, setLightboxSection] = useState('exteriors');
  const [layoutCategory, setLayoutCategory] = useState(isPashaPinnacle ? 'typicalFloorPlan' : 'masterPlan');
  const [floorPlanConfig, setFloorPlanConfig] = useState('3bhk'); // '3bhk', '4bhk'
  const [activePlanId, setActivePlanId] = useState('planA');

  useEffect(() => {
    setLayoutCategory(isPashaPinnacle ? 'typicalFloorPlan' : 'masterPlan');
  }, [isPashaPinnacle]);

  const layoutsData = {
    masterPlan: {
      image: '/images/project/CML/master-plan.png',
      description: 'The master plan for the Crystal Moonlight project.'
    },
    typicalFloorPlan: {
      image: '/images/project/CML/master-plan.png',
      description: 'Typical architectural floor plan layout without legends.'
    },
    floorPlan: {
      '3bhk': [
        { id: 'planA', name: 'Plan A (G+1)', type: '3 BHK', builtUp: '2,233 Sq.Ft.', plot: '1,260 Sq.Ft.', facing: 'North Facing', image: '/images/project/CML/floor-plan/PLAN A 30X42 NORTHFACE.jpg.jpeg' },
        { id: 'planB', name: 'Plan B (G+1)', type: '3 BHK', builtUp: '2,287 Sq.Ft.', plot: '1,260 Sq.Ft.', facing: 'North Facing', image: "/images/project/CML/floor-plan/PLAN - B  30' X 48'  (North Facing )VILLA.jpg.jpeg" },
      ],
      '4bhk': [
        { id: 'planC', name: 'Plan C (G+2)', type: '4 BHK', builtUp: '2,287 Sq.Ft.', plot: '1,440 Sq.Ft.', facing: 'North Facing', image: "/images/project/CML/floor-plan/PLAN C  -    37' X 42'  (North Facing )VILLA.jpg.jpeg" },
      ]
    },
    walkthrough360: {
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0&modestbranding=1',
      description: '360 Degree Virtual Walkthrough'
    }
  };
  const currentConfigPlans = layoutsData.floorPlan[floorPlanConfig] || [];
  const activePlanDetails = currentConfigPlans.find(p => p.id === activePlanId) || currentConfigPlans[0];
  const handlePrevPlan = () => {
    if (currentConfigPlans.length <= 1) return;
    const currIdx = currentConfigPlans.findIndex(p => p.id === activePlanId);
    const prevIdx = (currIdx - 1 + currentConfigPlans.length) % currentConfigPlans.length;
    setActivePlanId(currentConfigPlans[prevIdx].id);
  };
  const handleNextPlan = () => {
    if (currentConfigPlans.length <= 1) return;
    const currIdx = currentConfigPlans.findIndex(p => p.id === activePlanId);
    const nextIdx = (currIdx + 1) % currentConfigPlans.length;
    setActivePlanId(currentConfigPlans[nextIdx].id);
  };
  const [lightboxImage, setLightboxImage] = useState(null);
  const [floorplanLightbox, setFloorplanLightbox] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activePillar, setActivePillar] = useState(0);
  const pillars = [
    {
      index: "01",
      title: "An Enduring Address",
      desc: "Nestled in Medavakkam, Crystal Moonlight offers the rare balance of tranquil living and prime connectivity, surrounded by top educational, healthcare, and business hubs for enduring value.",
      image: "/images/project_crystal_1779810838661.png"
    },
    {
      index: "02",
      title: "Architecture That Endures",
      desc: "Envisioned with timeless elegance, each villa features 100% Vastu-compliant expansive layouts, premium specifications, and meticulous craftsmanship designed to enrich everyday living.",
      image: "/images/villa_exterior_1779810861723.png"
    },
    {
      index: "03",
      title: "Tailored to Your Vision",
      desc: "Reflecting your individuality, Crystal Moonlight offers the flexibility to personalise select layouts and bespoke finishes, adapting effortlessly to your family's evolving lifestyle.",
      image: "/images/project/CML/Interiors/cml-interior-01.jpg"
    },
    {
      index: "04",
      title: "The Privilege of Privacy",
      desc: "A limited collection of independent villas in a secure gated enclave, offering round-the-clock security, serene privacy, and total peace of mind for your family.",
      image: "/images/project/why-cmv.png"
    }
  ];
  const [statusMonthIdx, setStatusMonthIdx] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState('https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [hideMainHeader, setHideMainHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.querySelector('.project-hero-section');
      const threshold = heroEl ? heroEl.offsetHeight - 60 : window.innerHeight - 60;
      setHideMainHeader(window.scrollY >= threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [quoteForm, setQuoteForm] = useState({
    contactMode: 'callback',
    firstName: '',
    lastName: '',
    phoneCode: '+91',
    phone: '',
    email: '',
    config: '3 BHK Villa',
    privacy: false,
    updates: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeLandmarkIdx, setActiveLandmarkIdx] = useState(0);
  const [galleryIndices, setGalleryIndices] = useState({ exteriors: 1, interiors: 1, videos: 1 });
  const [galleryTab, setGalleryTab] = useState('exteriors');
  const [isMobile, setIsMobile] = useState(false);
  const navContainerRef = useRef(null);
  const amenitiesListRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [amenityIdx, setAmenityIdx] = useState(0);
  const amenities = [
    { image: "/images/project/CML/amenities/18.png", icon: "/images/project/CML/amenities/icon/Security.png", title: "24*7 Security", desc: "Round-the-clock smart surveillance." },
    { image: "/images/project/CML/amenities/7.png", icon: "/images/project/CML/amenities/icon/Clubhouse.png", title: "Clubhouse", desc: "A massive, premium recreational space." },
    { image: "/images/project/CML/amenities/16.png", icon: "/images/project/CML/amenities/icon/gym.png", title: "Gym", desc: "Fully equipped with modern fitness equipment." },
    { image: "/images/project/CML/amenities/7.png", icon: "/images/project/CML/amenities/icon/PartyHall.png", title: "Party Hall", desc: "Elegant space for events and gatherings." },
    { image: "/images/project/CML/amenities/8.png", icon: "/images/project/CML/amenities/icon/Indoor Games.png", title: "Indoor Games", desc: "Dedicated area for indoor recreation." },
    { image: "/images/project/CML/amenities/17.png", icon: "/images/project/CML/amenities/icon/yogaRoom.png", title: "Yoga Room", desc: "A tranquil space for wellness and meditation." },
    { image: "/images/project/CML/amenities/4.png", icon: "/images/project/CML/amenities/icon/Play Area.png", title: "Play Area", desc: "Safe and fun play zones for children." },
    { image: "/images/project/CML/amenities/2.png", icon: "/images/project/CML/amenities/icon/Solar Lighting.png", title: "Solar Lighting", desc: "Eco-friendly illumination." },
    { image: "/images/project/CML/amenities/20.png", icon: "/images/project/CML/amenities/icon/DTH Connection.png", title: "DTH Connection", desc: "Ready connections for entertainment." },
    { image: "/images/project/CML/amenities/11.png", icon: "/images/project/CML/amenities/icon/Rainwater Harvesting.png", title: "Rainwater Harvesting", desc: "As per CMWSSB Norms." },
    { image: "/images/project/CML/amenities/12.png", icon: "/images/project/CML/amenities/icon/Coarse Paint.png", title: "Coarse Paint", desc: "Weather coarse paint on the terrace floor." },
    { image: "/images/project/CML/amenities/3.png", icon: "/images/project/CML/amenities/icon/Anti-Termite.png", title: "Anti-Termite", desc: "Ensuring long-lasting protection." }
  ];
  const [isAmenityAutoPlay, setIsAmenityAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAmenityAutoPlay) return;
    const interval = setInterval(() => {
      setAmenityIdx((prev) => (prev + 1) % amenities.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [amenities.length, isAmenityAutoPlay]);
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
  const [galleryAnim, setGalleryAnim] = useState({ exteriors: true, interiors: true, videos: true });
  const galleryTimer = useRef({ exteriors: null, interiors: null, videos: null });
  useEffect(() => {
    ['exteriors', 'interiors', 'videos'].forEach((section) => {
      if (!galleryImages[section]) return;
      const total = galleryImages[section].length;
      if (total <= 1) return;
      const idx = galleryIndices[section];

      clearTimeout(galleryTimer.current[section]);
      if (idx === total + 1) {
        galleryTimer.current[section] = setTimeout(() => {
          setGalleryAnim(prev => ({ ...prev, [section]: false }));
          setGalleryIndices(prev => ({ ...prev, [section]: 1 }));
        }, 500);
      } else if (idx === 0) {
        galleryTimer.current[section] = setTimeout(() => {
          setGalleryAnim(prev => ({ ...prev, [section]: false }));
          setGalleryIndices(prev => ({ ...prev, [section]: total }));
        }, 500);
      }
    });
  }, [galleryIndices]);
  useEffect(() => {
    ['exteriors', 'interiors', 'videos'].forEach((section) => {
      if (!galleryAnim[section]) {
        const t = requestAnimationFrame(() => {
          setGalleryAnim(prev => ({ ...prev, [section]: true }));
        });
        return () => cancelAnimationFrame(t);
      }
    });
  }, [galleryAnim]);
  const prevGallerySlide = (section) => {
    if (galleryImages[section].length <= 1) return;
    setGalleryAnim(prev => ({ ...prev, [section]: true }));
    setGalleryIndices((prev) => ({
      ...prev,
      [section]: prev[section] - 1
    }));
  };
  const nextGallerySlide = (section) => {
    if (galleryImages[section].length <= 1) return;
    setGalleryAnim(prev => ({ ...prev, [section]: true }));
    setGalleryIndices((prev) => ({
      ...prev,
      [section]: prev[section] + 1
    }));
  };
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Scroll Spy removed - now using Tabbed Interface (block layout)
  const handleScrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    // Allow React to render the new section, then scroll to it
    setTimeout(() => {
      const container = document.querySelector('.project-sections-container');
      const subNav = document.querySelector('.project-sub-nav');
      if (container && subNav) {
        const rect = container.getBoundingClientRect();
        const subNavHeight = subNav.getBoundingClientRect().height;
        const scrollTop = window.pageYOffset + rect.top - subNavHeight;
        window.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
      }
    }, 10);
  };
  const handleSubSectionNavigate = (subSectionId) => {
    setActiveSubSection(subSectionId);
    handleScrollToSection('why-project');
  };
  // amenities array moved to top of component
  const landmarks = [
    { title: "Medavakkam Junction", dist: "3 mins" },
    { title: "OMR IT Corridor (Sholinganallur)", dist: "10 mins" },
    { title: "Velachery MRTS & Mall", dist: "15 mins" },
    { title: "Gleneagles Global Health City", dist: "8 mins" },
    { title: "Chennai International Airport", dist: "25 mins" },
    { title: "Elcot SEZ OMR", dist: "12 mins" }
  ];
  const galleryImages = {
    videos: VIDEO_SLIDES.map(v => ({ src: v.thumbnail, title: v.title, url: v.url })),
    interiors: Array.from({ length: 33 }, (_, i) => ({
      src: `/images/project/CML/Interiors/cml-interior-${String(i + 1).padStart(2, '0')}.jpg`,
      title: `Crystal Moonlight Interior ${i + 1}`
    })),
    exteriors: [
      { src: '/images/villa_exterior_1779810861723.png', title: 'Moonlight Villa FaÃ§ade' },
      { src: '/images/project_crystal_1779810838661.png', title: 'Recreational Pool Deck' },
      { src: '/images/project/why-cmv.png', title: 'Gated Community Portico' },
      { src: '/images/home/hero.png', title: 'Premium Landscaped Backyard' },
      { src: '/images/home/project-image-2.png', title: 'Evening FaÃ§ade View' }
    ]
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryAnim(prev => ({ ...prev, [galleryTab]: true }));
      setGalleryIndices(prev => ({
        ...prev,
        [galleryTab]: prev[galleryTab] + 1
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryTab, galleryImages]);
  const handleOpenLightbox = (section, idx) => {
    setLightboxIdx(idx);
    setLightboxSection(section);
    setLightboxImage(galleryImages[section][idx]);
  };
  const handleLightboxPrev = () => {
    const list = galleryImages[lightboxSection];
    const prevIdx = (lightboxIdx - 1 + list.length) % list.length;
    setLightboxIdx(prevIdx);
    setLightboxImage(list[prevIdx]);
  };
  const handleLightboxNext = () => {
    const list = galleryImages[lightboxSection];
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
    <div className={`project-detail-page ${hideMainHeader ? 'hide-main-header' : ''}`}>
      <Navbar projectTitle="Crystal Moonlight" />
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
                src="/images/project/CML/Elevation.png"
                alt="Crystal Moonlight"
                className="project-hero-bg-image"
              />
              <div className="project-hero-light-leak" aria-hidden="true"></div>
              <div className="project-hero-overlay"></div>
            </div>
            <div className="project-hero-content">
              <div className="project-hero-text-col">
                {/* <span className="project-tag-reveal">PREMIUM GATED VILLAS</span> */}
                <h1 className="project-hero-title display-title">
                  Crystal Moonlight
                </h1>
                <p className="project-hero-subtitle">MEDAVAKKAM, CHENNAI</p>
              </div>
              <div className="project-hero-btn-col">
                <Button
                  theme="dark"
                  className="hero-cta-btn"
                  onClick={() => setIsQuoteOpen(true)}
                  icon="â†“"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </section>
        {/* Project Sticky Sub-navigation with Tab Dropdowns */}
        <nav className="project-sub-nav">
          <div className="container sub-nav-container">
            {/* Scrollable area containing all section links */}
            <div className="sub-nav-scroll-wrapper" ref={navContainerRef}>
              {/* Sliding gold indicator */}
              {/* <div
                className="sub-nav-indicator"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity
                }}
              /> */}
              <button
                onClick={() => handleScrollToSection('overview')}
                className={`sub-nav-link ${activeTab === 'overview' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Overview</span>
              </button>
              <button
                onClick={() => handleScrollToSection('why-project')}
                className={`sub-nav-link ${activeTab === 'why-project' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Why Project</span>
              </button>
              <button
                onClick={() => handleScrollToSection('gallery')}
                className={`sub-nav-link ${activeTab === 'gallery' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Gallery</span>
              </button>
              <button
                onClick={() => handleScrollToSection('floorplans')}
                className={`sub-nav-link ${activeTab === 'floorplans' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Floor Plans</span>
              </button>
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
                onClick={() => handleScrollToSection('pricing')}
                className={`sub-nav-link ${activeTab === 'pricing' ? 'active' : ''}`}
              >
                <span className="sub-nav-text">Price</span>
              </button>
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
                  className={`dropdown-item ${activeTab === 'gallery' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('gallery')}
                >
                  Gallery
                </button>
                <button
                  className={`dropdown-item ${activeTab === 'floorplans' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('floorplans')}
                >
                  Floor Plans
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
                  className={`dropdown-item ${activeTab === 'pricing' ? 'active' : ''}`}
                  onClick={() => handleScrollToSection('pricing')}
                >
                  Price
                </button>
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
          {activeTab === 'overview' && (
            <section id="overview" className="project-section-wrapper scroll-section" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', /*minHeight: 'calc(100vh - 140px)',*/ display: 'flex', alignItems: 'center' }}>
              {/* Project Logo Badge (Overview Section only) */}
              <div 
                className="overview-logo-badge" 
                title="Crystal Moonlight"
              >
                <img
                  src="/images/project/project-logos/Project Logos_CML.png"
                  alt="Crystal Moonlight Logo"
                  className="overview-logo-img"
                />
              </div>
              <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                {/* Main Content Grid */}
                <div className="overview-editorial-grid">
                  {/* Left Column: Overview Image */}
                  <ScrollReveal animation="fadeRight" delay={0.2}>
                    <div className="overview-img-container" style={{ position: 'relative', width: '100%', minHeight: '380px', maxHeight: '480px', overflow: 'hidden', borderRadius: '4px' }}>
                      <img
                        src="/images/project/CML/overview.jpeg"
                        alt="Crystal Moonlight Overview"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '4px' }}
                      />
                    </div>
                  </ScrollReveal>
                  {/* Right Column: Section Label & Editorial Paragraphs */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '20px' }}>
                    {/* <ScrollReveal animation="fadeUp" delay={0.25}>
                      <span className='section-title' style={{ marginBottom: '0px' }}>
                        About Project
                      </span>
                    </ScrollReveal> */}

                    <ScrollReveal animation="fadeUp" delay={0.2}>
                      <h2 className='overview-main-title'>
                        Where Contemporary Design Meets Serene Community Living
                      </h2>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeUp" delay={0.25}>
                      <p style={{ color: 'var(--color-text-dark)', margin: '10px 0 0', fontSize: '20px', textAlign: 'justify' }}>
                        Some homes are designed to accommodate life. Others are designed to enrich it.
                      </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeUp" delay={0.3}>
                      <p style={{ color: 'var(--color-text-dark)', margin: 0, fontSize: '20px', textAlign: 'justify' }}>
                        Crystal Moonlight is an exclusive gated villa community, created for families who value refined living, privacy, and the quiet confidence of a home built for generations. Nestled in the heart of Medavakkam, it presents a collection of thoughtfully crafted independent villas where every detail reflects timeless design and uncompromising craftsmanship.
                      </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeUp" delay={0.35}>
                      <p style={{ color: 'var(--color-text-dark)', margin: 0, fontSize: '20px', textAlign: 'justify' }}>
                        Designed with generous living spaces, elegant contemporary architecture, and the flexibility to be tailored to individual lifestyles, each residence offers the comfort of a home that is uniquely your own. Surrounded by tranquil landscaped spaces while remaining seamlessly connected to Chennai's leading business, educational, healthcare, and lifestyle destinations, Crystal Moonlight brings together the rare balance of serenity, convenience, and lasting value.
                      </p>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </section>
          )}
          {/* Project Details Section - Inspired by Luxury Data Grid */}
          {activeTab === 'overview' && (
            <section id="project-details" className="project-section-wrapper scroll-section" style={{ position: 'relative', padding: '0' }}>
              <ProjectDetailsGrid 
                stat1Tag="SITE EXTENT"
                stat1Val="15"
                stat1Desc="ACRES"
                stat1Count={15}
                stat2Tag="TOTAL UNITS"
                stat2Val="47"
                stat2Desc="VILLAS"
                stat2Count={47}
                projectTag="PROJECT"
                projectName="CRYSTAL MOONLIGHT"
                location="MEDAVAKKAM, CHENNAI"
                reraNo="(TN/29/Building/001/2024)"
                stat3Tag="CONFIGURATION"
                stat3Val="3 & 4"
                stat3Desc="BHK"
                stat4Tag="SIZE RANGE"
                stat4Val="2,233 - 2,287"
                stat4Desc="SQ.FT."
              />
            </section>
          )}

          {/* Project Overview Section */}
          {activeTab === 'why-project' && (
            <section id="why-project" className="project-section-wrapper scroll-section" style={{ position: 'relative', overflow: 'hidden', padding: '60px 0 0', minHeight: 'calc(100vh - 140px)', background: '#fff' }}>
              <div className="container" style={{ padding: '0 0 60px' }}>
                {/* ── Left-Aligned Header ── */}
                <ScrollReveal className="section-header" animation="fadeUp" delay={0.1} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h2 className="section-title">
                    Crystal Moonlight
                  </h2>
                  {/* <p className="section-subtitle" style={{ fontSize: '16px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                    Bespoke living <span>beyond time</span>
                  </p> */}
                </ScrollReveal>
                {/* ── Left-Aligned Tab Pills ── */}
                {/* ── Highlights Block Two-Column Grid ── */}
                <div className="overview-main-grid-redesign">
                  {/* Left Side Content (Visuals) */}
                  <div className="overview-left-visual">
                    <ScrollReveal animation="fadeRight" delay={0.1}>
                      <div className="overview-image-wrapper">
                        <img src="/images/project/CML/why-project.jpeg" alt="Crystal Moonlight Gated Entrance" />
                      </div>
                    </ScrollReveal>
                  </div>
                  {/* Right Side Content (Text & CTAs) */}
                  <div className="overview-right-text">
                    <ScrollReveal animation="fadeLeft" delay={0.1}>
                      <div className="pillars-container">

                        <div className="pillars-accordion">
                          {pillars.map((pillar, index) => {
                            const isOpen = index === activePillar;
                            return (
                              <div
                                key={pillar.index}
                                className={`pillar-item ${isOpen ? 'active' : ''}`}
                                onClick={() => setActivePillar(index)}
                              >
                                <div className="pillar-header">
                                  <span className="pillar-number">{pillar.index}</span>
                                  <h4 className="pillar-title">{pillar.title}</h4>
                                  <span className="pillar-toggle-icon">{isOpen ? '−' : '+'}</span>
                                </div>
                                <div
                                  className="pillar-body"
                                  style={{
                                    maxHeight: isOpen ? '360px' : '0px',
                                    opacity: isOpen ? 1 : 0,
                                    overflow: 'hidden',
                                    transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
                                    paddingBottom: isOpen ? '16px' : '0px'
                                  }}
                                >
                                  <p className="pillar-desc">{pillar.desc}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div> {/* Close container */}
              {/* ── Neighbourhood Story Experience ── */}
              <NeighbourhoodStory
                onEnquire={() => setIsQuoteOpen(true)}
                projectCoords={[12.9175, 80.1915]}
                projectName="Crystal Moonlight"
              />
            </section>
          )}
          {/* Master Gallery Section */}
          {activeTab === 'gallery' && (
            <>
              <section id="gallery" className="project-gallery-section scroll-section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-white)', paddingTop: '36px', paddingBottom: '36px', minHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '16px', background: '#fff' }}>
                <div className="container">
                  <ScrollReveal className="section-header" animation="fadeUp" delay={0.1} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4px' }}>
                    <h2 className="section-title">
                      Visual <span>Spotlight</span>
                    </h2>
                  </ScrollReveal>
                  {/* Gallery Navigation Tabs */}
                  <ScrollReveal animation="fadeUp" delay={0.25} className="nested-tabs-container" style={{ marginBottom: '4px', display: 'flex', justifyContent: 'center' }}>
                    <div className="filter-tabs">
                      {['exteriors', 'interiors', 'videos'].map(tab => (
                        <button
                          key={tab}
                          className={`filter-tab-btn ${galleryTab === tab ? 'active' : ''}`}
                          onClick={() => setGalleryTab(tab)}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      ))}
                    </div>
                  </ScrollReveal>
                </div> {/* Close container here for full-bleed viewport */}
                {/* Spotlight Active-Card Gallery Carousel */}
                <ScrollReveal animation="fadeUp" delay={0.35} className="gallery-spotlight-viewport">
                  <div
                    className="gallery-spotlight-track"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--gallery-gap, 8vw)',
                      width: 'max-content',
                      transition: galleryAnim[galleryTab] ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
                      transform: `translateX(calc(var(--gallery-card-offset, 12.5vw) - ${galleryIndices[galleryTab]} * (var(--gallery-card-w, 55vw) + var(--gallery-gap, 8vw))))`
                    }}
                  >
                    {(() => {
                      const items = galleryImages[galleryTab];
                      const total = items.length;
                      const extended = total > 1
                        ? [items[total - 1], ...items, items[0]]
                        : items;
                      return extended.map((img, idx) => {
                        const isActive = idx === galleryIndices[galleryTab];
                        const realIdx = total > 1
                          ? (idx === 0 ? total - 1 : idx === total + 1 ? 0 : idx - 1)
                          : 0;
                        return (
                          <div
                            key={idx}
                            className={`gallery-spotlight-card ${isActive ? 'active' : ''}`}
                            style={{
                              flexShrink: 0,
                              flexBasis: isActive ? 'var(--gallery-card-active-w, 75vw)' : 'var(--gallery-card-w, 55vw)',
                              width: isActive ? 'var(--gallery-card-active-w, 75vw)' : 'var(--gallery-card-w, 55vw)',
                              transition: 'flex-basis 0.6s cubic-bezier(0.16, 1, 0.3, 1), width 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease',
                              cursor: 'pointer',
                              overflow: 'hidden',
                              position: 'relative',
                              height: 'calc(100vh - 165px)',
                              maxHeight: '720px',
                              minHeight: '320px',
                              boxShadow: '0 12px 30px rgba(0,0,0,0.06)'
                            }}
                            onClick={() => {
                              if (isActive) {
                                if (galleryTab === 'videos') {
                                  setActiveVideoUrl(img.url);
                                  setIsVideoOpen(true);
                                } else {
                                  handleOpenLightbox(galleryTab, realIdx);
                                }
                              } else {
                                setGalleryAnim(prev => ({ ...prev, [galleryTab]: true }));
                                setGalleryIndices(prev => ({ ...prev, [galleryTab]: idx }));
                              }
                            }}
                          >
                            <img
                              src={img.src}
                              alt={img.title}
                              className="gallery-spotlight-img"
                            />

                            {galleryTab === 'videos' && (
                              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3 }}>
                                <div className="play-button-pulsing">
                                  <Play size={30} fill="currentColor" style={{ marginLeft: '4px' }} />
                                </div>
                              </div>
                            )}
                            <div className="gallery-deck-hover-overlay">
                              {galleryTab !== 'videos' && (
                                <>
                                  <Maximize2 size={24} className="hover-overlay-zoom-icon" />
                                  <span className="hover-overlay-title">{img.title}</span>
                                </>
                              )}
                            </div>
                          </div>
                        );
                      });
                    })()}
                  </div>
                  {/* Navigation Arrows positioned on left/right previews */}
                  <button
                    className="gallery-spotlight-arrow prev"
                    onClick={() => prevGallerySlide(galleryTab)}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="gallery-spotlight-arrow next"
                    onClick={() => nextGallerySlide(galleryTab)}
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </ScrollReveal>
              </section>
            </>
          )}
          {/* Specifications Section */}
          {activeTab === 'specifications' && (
            <ProjectSpecs
              specs={SPECIFICATIONS}
              title="PROJECT"
              highlightTitle="SPECIFICATIONS"
              subtitle="PROJECT DETAILS"
            />
          )}
          {/* Premium Amenities Section */}
          {activeTab === 'amenities' && (
            <section id="amenities" className="project-amenities-section scroll-section" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', backgroundColor: '#ffffff', minHeight: 'calc(100vh - 140px)', display: 'flex', alignItems: 'center' }}>
              {/* Optional ambient background leaf or shape */}
              <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'url("/images/bg/TR-1.png") center / contain no-repeat', opacity: 0.1, pointerEvents: 'none' }}></div>

              <div className="container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
                <ScrollReveal className="section-header" animation="fadeUp" delay={0.1} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
                  <h2 className="section-title">
                    Luxury Community <span style={{ color: 'var(--color-highlight)' }}>Amenities</span>
                  </h2>
                </ScrollReveal>

                <div className="amenities-split-layout">

                  {/* Left Column: Directory */}
                  <ScrollReveal animation="fadeRight" delay={0.25} className="amenities-directory">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(143, 143, 143, 0.23)' }}>
                      <span style={{ textTransform: 'uppercase', color: '#000000ff', fontSize: '13px' }}>Directory</span>
                      <span style={{ color: '#000000ff', fontSize: '14px' }}>{amenities.length} Amenities</span>
                    </div>

                    <div
                      ref={amenitiesListRef}
                      className="amenities-grid-container"
                    >
                      {amenities.map((item, idx) => {
                        const isActive = amenityIdx === idx;
                        return (
                          <div key={idx} className="amenity-item-wrapper" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                            <button
                              onClick={() => {
                                setAmenityIdx(idx);
                                setIsAmenityAutoPlay(false);
                              }}
                              className={`amenity-item-btn ${isActive ? 'active' : ''}`}
                              style={{
                                display: 'flex', alignItems: 'center', gap: '14px', padding: '16px',
                                background: isActive ? 'var(--color-bg-light)' : 'transparent',
                                border: 'none',
                                borderBottom: isActive ? '1px solid transparent' : '1px solid rgba(0,0,0,0.06)',
                                cursor: 'pointer', transition: 'all 0.3s ease',
                                textAlign: 'left', outline: 'none',
                                width: '100%', minWidth: 0, overflow: 'hidden'
                              }}
                            >
                              <div style={{
                                width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: isActive ? 'rgba(180, 133, 100, 0.12)' : 'rgba(0,0,0,0.03)',
                                border: isActive ? '1px solid #b48564' : '1px solid rgba(0,0,0,0.08)',
                                transition: 'all 0.3s ease',
                                flexShrink: 0,
                                padding: '6px'
                              }}>
                                {typeof item.icon === 'string' ? (
                                  <img
                                    src={item.icon}
                                    alt={item.title}
                                    style={{
                                      width: '18px',
                                      height: '18px',
                                      objectFit: 'contain',
                                      filter: isActive ? 'none' : 'grayscale(100%) opacity(0.7)'
                                    }}
                                  />
                                ) : (
                                  item.icon
                                )}
                              </div>
                              <span style={{ flex: 1, fontWeight: isActive ? '400' : '300', fontSize: '16px', color: isActive ? 'var(--color-highlight)' : '#000', lineHeight: '1.4', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</span>
                            </button>

                            {/* Mobile Inline Image Card under the active amenity item */}
                            {isActive && (
                              <div className="amenity-mobile-inline-card">
                                <div className="amenity-mobile-card-img" style={{ backgroundImage: `url(${item.image})` }} />
                                <div className="amenity-mobile-card-overlay">
                                  <h4 className="amenity-mobile-card-title">{item.title}</h4>
                                  <p className="amenity-mobile-card-desc">{item.desc}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </ScrollReveal>

                  {/* Right Column: Desktop Visualizer */}
                  <ScrollReveal animation="fadeLeft" delay={0.35} className="amenities-visualizer">
                    {amenities.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                          opacity: amenityIdx === idx ? 1 : 0,
                          transform: amenityIdx === idx ? 'scale(1)' : 'scale(1.05)',
                          transition: 'opacity 0.8s ease, transform 1.2s ease',
                          pointerEvents: amenityIdx === idx ? 'auto' : 'none'
                        }}
                      >
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                        {/* Elegant bottom overlay */}
                        <div style={{
                          position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
                          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                          padding: '40px',
                          zIndex: 2
                        }}>
                          <div style={{ paddingTop: '20px' }}>
                            <h3 style={{ color: '#ffffff', marginBottom: '8px', fontWeight: '500', fontSize: '24px', fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '15px', fontWeight: '300' }}>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </ScrollReveal>
                </div>
              </div>
            </section>
          )}
          {/* Master Floor Plans Section */}
          {activeTab === 'floorplans' && (
            <section id="floorplans" className="project-floorplans-section scroll-section" style={{ minHeight: 'calc(100vh - 140px)', display: 'flex', alignItems: 'center', padding: '40px 0', background: '#fff' }}>
              <div className="container" style={{ width: '100%' }}>
                <ScrollReveal className="section-header" animation="fadeUp" delay={0.1} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* <span className="section-tag">Floor Plans</span> */}
                  <h2 className="section-title">Architectural <span>Layouts</span></h2>
                </ScrollReveal>
                {/* Top-Level Category Switcher */}
                <ScrollReveal animation="fadeUp" delay={0.2} style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                  <div className="filter-tabs">
                    {(isPashaPinnacle
                      ? [
                        { id: 'typicalFloorPlan', label: 'Typical Floor plan' },
                        { id: 'floorPlan', label: 'Unit Plan' },
                        { id: 'walkthrough360', label: '360° Walkthrough' }
                      ]
                      : [
                        { id: 'masterPlan', label: 'Master Plan' },
                        { id: 'floorPlan', label: 'Unit Plan' },
                        { id: 'walkthrough360', label: '360° Walkthrough' }
                      ]
                    ).map(tab => (
                      <button
                        key={tab.id}
                        className={`filter-tab-btn ${layoutCategory === tab.id ? 'active' : ''}`}
                        onClick={() => setLayoutCategory(tab.id)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Master Plan Panel (CML) */}
                {layoutCategory === 'masterPlan' && (
                  <ScrollReveal animation="fadeUp" delay={0.3} className="layout-image-container" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      src={layoutsData.masterPlan.image}
                      alt="Master Plan"
                      onClick={() => setFloorplanLightbox({ image: layoutsData.masterPlan.image, name: 'Master Plan' })}
                      style={{ maxWidth: '100%', maxHeight: '700px', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)', cursor: 'pointer' }}
                    />
                  </ScrollReveal>
                )}

                {/* Typical Floor Plan Panel (Pasha Pinnacle - No Legends. Only Plan) */}
                {layoutCategory === 'typicalFloorPlan' && (
                  <ScrollReveal animation="fadeUp" delay={0.3} className="layout-image-container" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      src={layoutsData.typicalFloorPlan.image}
                      alt="Typical Floor Plan"
                      onClick={() => setFloorplanLightbox({ image: layoutsData.typicalFloorPlan.image, name: 'Typical Floor Plan' })}
                      style={{ maxWidth: '100%', maxHeight: '700px', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)', cursor: 'pointer' }}
                    />
                  </ScrollReveal>
                )}

                {/* 360 Degree Walkthrough Panel - Coming Soon */}
                {layoutCategory === 'walkthrough360' && (
                  <ScrollReveal animation="fadeUp" delay={0.3} className="layout-walkthrough-container" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{
                      textAlign: 'center',
                      padding: '70px 30px',
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderRadius: '16px',
                      width: '100%',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '16px'
                    }}>
                      <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'rgba(180, 133, 100, 0.12)',
                        color: '#b48564',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <RotateCcw size={26} />
                      </div>

                      <span style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: '#b48564'
                      }}>
                        360° Immersive Experience
                      </span>

                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '28px',
                        fontWeight: '400',
                        color: 'var(--color-primary, #111111)',
                        margin: 0
                      }}>
                        360° Virtual Walkthrough
                      </h3>

                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '15px',
                        color: 'var(--color-text-muted, #666666)',
                        maxWidth: '460px',
                        margin: 0,
                        lineHeight: '1.6'
                      }}>
                        The interactive 360° virtual walkthrough is currently in curation and will be available soon.
                      </p>

                      <div style={{ marginTop: '8px' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '8px 22px',
                          borderRadius: '100px',
                          background: '#f3efe8',
                          color: '#8f6b4e',
                          fontSize: '12px',
                          fontWeight: '600',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase'
                        }}>
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                )}
                {layoutCategory === 'floorPlan' && (
                  <ScrollReveal animation="fadeUp" delay={0.3} className="floorplan-slide-viewport" style={{ position: 'relative', width: '100%' }}>

                    {/* Left/Right Arrow Buttons on the outer sides */}
                    {currentConfigPlans.length > 1 && (
                      <>
                        <button
                          className="floorplan-slide-arrow prev"
                          onClick={handlePrevPlan}
                          aria-label="Previous floor plan"
                        >
                          <ChevronLeft size={28} />
                        </button>
                        <button
                          className="floorplan-slide-arrow next"
                          onClick={handleNextPlan}
                          aria-label="Next floor plan"
                        >
                          <ChevronRight size={28} />
                        </button>
                      </>
                    )}
                    {/* Tabs row: 3 BHK and 4 BHK using standard filter-tabs style */}
                    <div style={{ display: 'flex', marginBottom: '40px', borderBottom: '.1px solid rgba(0,0,0,0.08)', width: '100%' }}>
                      <div className="filter-tabs" style={{ display: 'flex', gap: '0' }}>
                        {['3bhk', '4bhk'].map(conf => {
                          const confLabel = conf === '3bhk' ? '3 BHK' : '4 BHK';
                          const isActive = floorPlanConfig === conf;
                          return (
                            <button
                              key={conf}
                              onClick={() => {
                                setFloorPlanConfig(conf);
                                setActivePlanId(layoutsData.floorPlan[conf][0].id);
                              }}
                              className={`filter-tab-btn ${isActive ? 'active' : ''}`}
                              style={{
                                padding: '0 24px',
                                paddingLeft: conf === '3bhk' ? '0' : '24px',
                                background: 'transparent',
                                border: 'none',
                                borderRight: conf === '3bhk' ? '.1px solid rgba(0, 0, 0, 0.15)' : 'none',
                                cursor: 'pointer',
                                outline: 'none',
                                boxShadow: 'none'
                              }}
                            >
                              <span
                                style={{
                                  position: 'relative',
                                  display: 'inline-block',
                                  paddingBottom: '12px',
                                  borderBottom: isActive ? '.1px solid var(--color-text-dark)' : '.1px solid transparent',
                                  marginBottom: '-1px',
                                  fontWeight: isActive ? '400' : '400',
                                  color: isActive ? '#000000' : 'var(--color-text-muted-light)',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.12em',
                                  fontFamily: 'var(--font-sans)',
                                  fontSize: isMobile ? '13px' : '14px',
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                {confLabel}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {/* Main Slide Layout */}
                    <div className="floorplan-slide-content-grid" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '3fr 7fr', gap: '30px', alignItems: 'center' }}>

                      {/* Left Column: Details */}
                      <div className="floorplan-slide-details-col" style={{ textAlign: 'left', order: isMobile ? 2 : 1 }}>
                        <h3 className="floorplan-slide-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '400', color: 'var(--color-highlight)', marginBottom: '32px' }}>
                          {activePlanDetails.name}
                        </h3>
                        <div className="floorplan-slide-specs-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
                          {/* <div className="floorplan-slide-spec-item" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '12px' }}>
                            <span className="spec-label" style={{ display: 'block', fontSize: '11px', fontWeight: '400', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.08em' }}>Configuration</span>
                            <span className="spec-val" style={{ fontSize: '18px', color: 'var(--color-primary)' }}>{activePlanDetails.type}</span>
                          </div> */}
                          <div className="floorplan-slide-spec-item" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '12px' }}>
                            <span className="spec-label" style={{ display: 'block', fontSize: '11px', fontWeight: '400', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.08em' }}>Built-up Area</span>
                            <span className="spec-val" style={{ fontSize: '18px', color: 'var(--color-primary)' }}>{activePlanDetails.builtUp}</span>
                          </div>
                          <div className="floorplan-slide-spec-item" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '12px' }}>
                            <span className="spec-label" style={{ display: 'block', fontSize: '11px', fontWeight: '400', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.08em' }}>Plot Area</span>
                            <span className="spec-val" style={{ fontSize: '18px', color: 'var(--color-primary)' }}>{activePlanDetails.plot}</span>
                          </div>
                          <div className="floorplan-slide-spec-item" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '12px' }}>
                            <span className="spec-label" style={{ display: 'block', fontSize: '11px', fontWeight: '400', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.08em' }}>Direction</span>
                            <span className="spec-val" style={{ fontSize: '18px', color: 'var(--color-primary)' }}>{activePlanDetails.facing}</span>
                          </div>
                        </div>
                        <Button
                          theme="light"
                          onClick={() => setIsQuoteOpen(true)}
                          icon="↓"
                          style={{ minWidth: '220px', boxSizing: 'border-box' }}
                        >
                          Download Floorplan PDF
                        </Button>
                      </div>
                      {/* Right Column: Visualizer */}
                      <div className="floorplan-slide-visual-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: isMobile ? 1 : 2 }}>
                        {activePlanDetails.image ? (
                          <div className="floorplan-slide-img-wrap" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                              src={activePlanDetails.image}
                              alt={activePlanDetails.name}
                              onClick={() => setFloorplanLightbox(activePlanDetails)}
                              style={{
                                maxWidth: '100%',
                                maxHeight: '550px',
                                objectFit: 'contain',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease'
                              }}
                              className="floorplan-image-zoomable"
                            />
                          </div>
                        ) : (
                          <div className="blueprint-canvas" style={{ width: '100%', minHeight: '400px', backgroundColor: 'var(--color-bg-navy)', borderRadius: '16px' }}>
                            <div className="blueprint-grid-mesh"></div>
                            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--color-text-muted-light)' }}>
                              <LayoutGrid size={48} style={{ marginBottom: '24px', opacity: 0.8 }} />
                              <span style={{ color: 'var(--color-bg-light)' }}>{activePlanDetails.name}</span>
                              <span style={{ textTransform: 'uppercase', marginTop: '16px', color: 'var(--color-gold)' }}>Interactive Blueprint Layout</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                )}
              </div>
            </section>
          )}
          {/* Size & Pricing Section (Currently omitted from navigation but kept for structure) */}
          {activeTab === 'pricing' && (
            <ProjectPricingSection
              projectName="Crystal Moonlight"
              prices={[
                { label: '3 BHK Villa', val: 'INR 2.26 CR*' },
                { label: '4 BHK Villa', val: 'INR 2.87 CR*' }
              ]}
              unitTypes={['3 BHK Villa', '4 BHK Villa']}
            />
          )}
          {/* Project Status Timeline */}
          {activeTab === 'status' && (
            (() => {
              const projectStatusData = [
                {
                  month: 'May',
                  year: '2026',
                  images: [1, 2, 3, 4, 5, 6].map(num => `/images/project/CML/Interiors/cml-interior-${num.toString().padStart(2, '0')}.jpg`)
                },
                {
                  month: 'April',
                  year: '2026',
                  images: [7, 8, 1, 2, 3, 4].map(num => `/images/project/CML/Interiors/cml-interior-${num.toString().padStart(2, '0')}.jpg`)
                },
                {
                  month: 'March',
                  year: '2026',
                  images: [5, 6, 7, 8, 1, 2].map(num => `/images/project/CML/Interiors/cml-interior-${num.toString().padStart(2, '0')}.jpg`)
                },
                {
                  month: 'February',
                  year: '2026',
                  images: [3, 4, 5, 6, 7, 8].map(num => `/images/project/CML/Interiors/cml-interior-${num.toString().padStart(2, '0')}.jpg`)
                }
              ];
              const currentStatus = projectStatusData[statusMonthIdx];

              const handlePrevMonth = () => {
                setStatusMonthIdx(prev => (prev === 0 ? projectStatusData.length - 1 : prev - 1));
              };

              const handleNextMonth = () => {
                setStatusMonthIdx(prev => (prev === projectStatusData.length - 1 ? 0 : prev + 1));
              };
              return (
                <section id="status" className="project-status-section scroll-section" style={{ minHeight: 'calc(100vh - 140px)', background: '#fff' }}>
                  <div className="container">
                    <ScrollReveal className="section-header" animation="fadeUp" delay={0.1} style={{ textAlign: 'center', alignItems: 'center', marginBottom: '50px' }}>
                      <h2 className="section-title">Project <span>Status</span></h2>

                    </ScrollReveal>
                    <ScrollReveal animation="fadeUp" delay={0.3} className="status-timeline-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                      <div className="status-month-container">

                        {/* Month/Year & Landscape Navigation */}
                        <div className="status-month-label">
                          <button
                            onClick={handlePrevMonth}
                            className="status-nav-btn prev"
                            aria-label="Previous month"
                            type="button"
                          >
                            <ChevronLeft size={22} />
                          </button>

                          <div className="status-month-text">
                            <h3 className="status-month-title">{currentStatus.month}</h3>
                            <span className="status-year-subtitle">{currentStatus.year}</span>
                          </div>

                          <button
                            onClick={handleNextMonth}
                            className="status-nav-btn next"
                            aria-label="Next month"
                            type="button"
                          >
                            <ChevronRight size={22} />
                          </button>
                        </div>

                        {/* Right Side - Images */}
                        <style>
                          {`
                            @keyframes statusFadeIn {
                              from { opacity: 0; transform: translateY(10px); }
                              to { opacity: 1; transform: translateY(0); }
                            }
                            .status-animate-grid {
                              animation: statusFadeIn 0.5s ease forwards;
                            }
                            .status-month-container {
                              display: flex;
                              gap: 40px;
                              align-items: center;
                              position: relative;
                              width: 100%;
                            }
                            .status-month-label {
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              gap: 16px;
                              flex-shrink: 0;
                            }
                            .status-nav-btn {
                              background: transparent;
                              border: 1px solid rgba(0, 0, 0, 0.12);
                              width: 36px;
                              height: 36px;
                              border-radius: 50%;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              cursor: pointer;
                              color: var(--color-bg-navy, #111);
                              transition: all 0.25s ease;
                              padding: 0;
                            }
                            .status-nav-btn:hover {
                              background: var(--color-primary, #111);
                              color: #fff;
                              border-color: var(--color-primary, #111);
                            }
                            .status-month-text {
                              text-align: center;
                              min-width: 90px;
                            }
                            .status-month-title {
                              color: var(--color-bg-navy, #111);
                              font-weight: 400;
                              font-family: var(--font-heading);
                              font-size: 22px;
                              margin: 0 0 2px 0;
                            }
                            .status-year-subtitle {
                              color: var(--color-text-dark, #555);
                              font-size: 14px;
                            }
                            .status-month-grid {
                              display: grid;
                              grid-template-columns: repeat(3, 1fr);
                              gap: 16px;
                              flex-grow: 1;
                              width: 100%;
                            }
                            @media (max-width: 900px) {
                              .status-month-container {
                                flex-direction: column !important;
                                gap: 24px !important;
                                align-items: center !important;
                              }
                              .status-month-label {
                                width: 100% !important;
                                justify-content: center !important;
                              }
                              .status-month-grid {
                                grid-template-columns: repeat(2, 1fr) !important;
                                width: 100% !important;
                                gap: 14px !important;
                              }
                            }
                            @media (max-width: 600px) {
                              .status-month-container {
                                flex-direction: column !important;
                                gap: 20px !important;
                              }
                              .status-month-grid {
                                grid-template-columns: 1fr !important;
                                width: 100% !important;
                                gap: 14px !important;
                              }
                            }
                          `}
                        </style>
                        <div key={statusMonthIdx} className="status-month-grid status-animate-grid">
                          {currentStatus.images.map((imgSrc, idx) => (
                            <div key={idx} className="status-img-sm" style={{ aspectRatio: '16/11' }} onClick={() => setLightboxImage({ src: imgSrc, title: `Construction Progress ${idx + 1}` })}>
                              <img src={imgSrc} alt={`Progress ${idx + 1}`} />
                              <div className="status-img-overlay">
                                <Maximize2 size={24} color="var(--color-white)" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </section>
              );
            })()
          )}
        </div>
        {/* --- PROJECT CTA BANNER SECTION --- */}
        <section
          className="project-cta-banner-section"
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            cursor: 'pointer',
            lineHeight: 0
          }}
          onClick={() => setIsQuoteOpen(true)}
        >
          <img
            src="/images/project/Crystal moonlight down section.png"
            alt="Crystal Moonlight - Experience True Luxury"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover'
            }}
          />
        </section>
      </main>

      {/* Floor Plan Lightbox Modal */}
      {floorplanLightbox && (
        <div className="lightbox-overlay" onClick={() => setFloorplanLightbox(null)} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '40px', boxSizing: 'border-box' }}>
          <button className="lightbox-close-btn" onClick={() => setFloorplanLightbox(null)}>
            <X size={24} />
          </button>

          {currentConfigPlans.length > 1 && (
            <>
              <button
                className="lightbox-arrow-btn prev"
                onClick={(e) => {
                  e.stopPropagation();
                  const currIdx = currentConfigPlans.findIndex(p => p.id === floorplanLightbox.id);
                  const prevIdx = (currIdx - 1 + currentConfigPlans.length) % currentConfigPlans.length;
                  const prevPlan = currentConfigPlans[prevIdx];
                  setActivePlanId(prevPlan.id);
                  setFloorplanLightbox(prevPlan);
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="lightbox-arrow-btn next"
                onClick={(e) => {
                  e.stopPropagation();
                  const currIdx = currentConfigPlans.findIndex(p => p.id === floorplanLightbox.id);
                  const nextIdx = (currIdx + 1) % currentConfigPlans.length;
                  const nextPlan = currentConfigPlans[nextIdx];
                  setActivePlanId(nextPlan.id);
                  setFloorplanLightbox(nextPlan);
                }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <img
              src={floorplanLightbox.image}
              alt={floorplanLightbox.name}
              style={{ maxWidth: '90%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px' }}
            />
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '900px',
              margin: '20px auto',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '16px',
              padding: '14px 20px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              color: '#ffffff',
              boxSizing: 'border-box'
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '400', color: '#b48564', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 16px 0' }}>
              {floorplanLightbox.name}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Configuration</span>
                <span style={{ fontSize: '16px', fontWeight: '500' }}>{floorplanLightbox.type}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Built-up Area</span>
                <span style={{ fontSize: '16px', fontWeight: '500' }}>{floorplanLightbox.builtUp}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Plot Area</span>
                <span style={{ fontSize: '16px', fontWeight: '500' }}>{floorplanLightbox.plot}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '10px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Direction</span>
                <span style={{ fontSize: '16px', fontWeight: '500' }}>{floorplanLightbox.facing}</span>
              </div>
            </div>
          </div>
        </div>
      )}
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
              src={activeVideoUrl}
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
          <div className="modal-content-card split-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-panel">
              <div className="modal-image-overlay">
                <h3>Crystal Moonlight</h3>
                <p>Bespoke Luxury Living</p>
              </div>
            </div>

            <div className="modal-form-panel">
              <button className="modal-close-btn" onClick={() => setIsQuoteOpen(false)}>
                <X size={18} />
              </button>

              <div className="modal-header-block-light">
                <h3 className="modal-heading-light">SCHEDULE A VISIT</h3>
                <p className="modal-subheading-light">Experience premium luxury in person.</p>
              </div>

              <div className="modal-body-light">
                {formSubmitted ? (
                  <div className="form-success-message">
                    <CheckCircle2 size={48} className="success-icon-gold" />
                    <h4>Inquiry Received Successfully</h4>
                    <p>One of our client service executives will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="modal-inquiry-form-new">
                    {/* Preferred Mode of Contact */}
                    <div className="form-radio-group">
                      <label className="form-label-top">Preferred Mode of Contact *</label>
                      <div className="radio-options">
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="contactMode"
                            value="callback"
                            checked={quoteForm.contactMode === 'callback'}
                            onChange={(e) => setQuoteForm({ ...quoteForm, contactMode: e.target.value })}
                          />
                          <span className="radio-custom"></span>
                          Request a call back
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name="contactMode"
                            value="videocall"
                            checked={quoteForm.contactMode === 'videocall'}
                            onChange={(e) => setQuoteForm({ ...quoteForm, contactMode: e.target.value })}
                          />
                          <span className="radio-custom"></span>
                          Schedule a video call
                        </label>
                      </div>
                    </div>

                    {/* Name Row */}
                    <div className="form-row-2">
                      <div className="form-group-outline">
                        <input type="text" placeholder="First Name *" required value={quoteForm.firstName} onChange={e => setQuoteForm({ ...quoteForm, firstName: e.target.value })} />
                      </div>
                      <div className="form-group-outline">
                        <input type="text" placeholder="Last Name *" required value={quoteForm.lastName} onChange={e => setQuoteForm({ ...quoteForm, lastName: e.target.value })} />
                      </div>
                    </div>

                    {/* Phone Row */}
                    <div className="form-row-phone">
                      <div className="form-group-outline phone-code">
                        <select value={quoteForm.phoneCode} onChange={e => setQuoteForm({ ...quoteForm, phoneCode: e.target.value })}>
                          <option value="+91">IN +91</option>
                          <option value="+1">US +1</option>
                          <option value="+44">UK +44</option>
                          <option value="+971">AE +971</option>
                        </select>
                      </div>
                      <div className="form-group-outline phone-number">
                        <input type="tel" placeholder="Phone Number *" required value={quoteForm.phone} onChange={e => setQuoteForm({ ...quoteForm, phone: e.target.value })} />
                      </div>
                    </div>

                    {/* Email & Config Row */}
                    <div className="form-row-2">
                      <div className="form-group-outline">
                        <input type="email" placeholder="Email Address *" required value={quoteForm.email} onChange={e => setQuoteForm({ ...quoteForm, email: e.target.value })} />
                      </div>
                      <div className="form-group-outline">
                        <select value={quoteForm.config} onChange={e => setQuoteForm({ ...quoteForm, config: e.target.value })}>
                          <option value="3 BHK Villa">3 BHK Villa</option>
                          <option value="4 BHK Villa">4 BHK Villa</option>
                        </select>
                      </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="form-checkbox-group">
                      <label className="checkbox-label">
                        <input type="checkbox" required checked={quoteForm.privacy} onChange={e => setQuoteForm({ ...quoteForm, privacy: e.target.checked })} />
                        <span className="checkbox-custom"></span>
                        <span>I've read and agree to the <a href="#privacy" style={{ color: '#b48564', textDecoration: 'underline' }}>privacy policy. *</a></span>
                      </label>
                      <label className="checkbox-label">
                        <input type="checkbox" checked={quoteForm.updates} onChange={e => setQuoteForm({ ...quoteForm, updates: e.target.checked })} />
                        <span className="checkbox-custom"></span>
                        <span>I'd like to receive priority project updates and offers.</span>
                      </label>
                    </div>

                    <Button type="submit" theme="dark" style={{ width: '100%', marginTop: '8px', padding: '16px' }}>
                      REQUEST PRICING DETAILS
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
      <style>{`
        .project-detail-page {
          background-color: var(--color-white);
          min-height: 100vh;
        }
        .project-detail-page .sobha-navbar:not(.mega-open):not(.mobile-open) {
          background: linear-gradient(180deg, rgba(10, 10, 10, 0.45) 0%, transparent 100%) !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease !important;
        }
        .project-detail-page.hide-main-header .sobha-navbar {
          transform: translateY(-100%) !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        section[id], div[id] {
          scroll-margin-top: 55px; /* offset for sticky subnav */
        }
        .project-sub-nav {
          background: 
            linear-gradient(180deg, rgb(39 39 39 / 86%) 0%, rgb(35 35 35) 38%, rgb(0 0 0 / 55%) 50%, rgb(0 0 0 / 80%) 100%), linear-gradient(115deg, rgba(26, 28, 34, 0.85) 0%, rgb(14 14 14 / 80%) 35%, rgb(47 47 47 / 80%) 50%, rgb(53 53 53 / 80%) 65%, rgb(33 34 35 / 73%) 100%) !important;
          backdrop-filter: blur(24px) saturate(200%) brightness(108%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(200%) brightness(108%) !important;
          position: sticky;
          top: 0 !important;
          z-index: 9990;
          padding: 0;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.16) !important;
        }
        .overview-logo-badge {
          position: absolute;
          top: 0;
          left: 24px;
          background: #ffffff;
          padding: 6px 14px;
          border-radius: 0 0 6px 6px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-top: none;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12), 0 3px 8px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9980;
          width: 140px;
          overflow: hidden;
          box-sizing: border-box;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .overview-logo-badge:hover {
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.16), 0 4px 10px rgba(0, 0, 0, 0.06);
          transform: translateY(2px);
        }
        .overview-logo-img {
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          object-fit: contain !important;
          transform: scale(1.6);
          transform-origin: center;
          display: block !important;
          pointer-events: none;
        }
        @media (min-width: 1248px) {
          .overview-logo-badge {
            left: calc((100vw - 1200px) / 2 + 24px);
          }
        }
        @media (max-width: 768px) {
          .overview-logo-badge {
            left: 14px;
            height: 38px;
            max-height: 38px;
            width: 105px;
            padding: 4px 8px;
            border-radius: 0 0 5px 5px;
          }
        }
        .sub-nav-container {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
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
        /* â”€â”€ REFINED CONCEPT 3 STYLES â”€â”€ */
        .concept-3-cinematic {
          position: relative;
          width: 100%;
          min-height: 700px;
          background: var(--color-bg-navy);
          overflow: hidden;
          display: flex;
          align-items: stretch;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .c3-massive-text {
          position: absolute;
          bottom: 2%;
          left: 50%;
          transform: translateX(-50%);
          font-size: 9vw;
          white-space: nowrap;
          color: transparent;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.15);
          pointer-events: none;
          z-index: 3;
          width: 100%;
          text-align: center;
          line-height: 1;
        }
        .c3-split-layout {
          display: flex;
          flex: 1;
          width: 100%;
          position: relative;
          z-index: 2;
        }
        .c3-image-pane {
          width: 60%;
          position: relative;
          display: flex;
        }
        .c3-image-pane img {
          width: 100%;
          flex: 1;
          object-fit: cover;
          filter: grayscale(10%) contrast(110%);
        }
        .c3-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(29,53,87,0), var(--color-bg-navy));
        }
        .c3-solid-pane {
          width: 40%;
          background: var(--color-bg-navy);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 80px 5%;
          position: relative;
        }
        .c3-action-area {
          max-width: 550px;
          position: relative;
          z-index: 4;
        }
        .c3-tag {
          font-size: 12px;
          color: var(--color-bg-cream);
          text-transform: uppercase;
          margin-bottom: 24px;
          display: block;
          font-weight: 400;
        }
        .c3-action-area h3 {
          color: var(--color-white);
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .c3-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          margin-bottom: 40px;
        }
        .show-only-on-mobile {
          display: none !important;
        }
        /* â”€â”€ INFO GRID STYLES â”€â”€ */
        .info-grid-tag {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 400;
          color: var(--color-text-muted-light);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }
        .info-grid-val {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 200;
          color: var(--color-text-dark);
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 6px;
          display: block;
          letter-spacing: 0.02em;
        }
        .info-grid-val-large {
          font-family: var(--font-heading);
          font-size: 30px;
          font-weight: 200;
          color: #b48564;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 6px;
          display: block;
          letter-spacing: 0.04em;
        }
        .info-grid-desc {
          font-family: var(--font-sans);
          font-size: 10px;
          color: var(--color-text-dark);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin: 0;
          font-weight: 400;
        }
        /* ── SLIDING GOLD INDICATOR ── */
        .sub-nav-indicator {
          position: absolute;
          bottom: -1px;
          height: 3.5px;
          background: linear-gradient(90deg, #f3c892 0%, #ffe6c2 50%, #f3c892 100%);
          border-radius: 4px 4px 0 0;
          transition: left 0.45s cubic-bezier(0.16, 1, 0.3, 1), width 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          box-shadow: 
            0 0 14px rgba(243, 200, 146, 0.8), 
            0 0 28px rgba(243, 200, 146, 0.4);
          pointer-events: none;
          z-index: 2;
        }
        .sub-nav-link {
          font-family: var(--font-sans) !important;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85) !important;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 18px 24px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: transparent !important;
          border: none;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease, text-shadow 0.3s ease;
          white-space: nowrap;
        }
        .sub-nav-link:hover {
          color: #B48564 !important;
          background: transparent !important;
        }
        .sub-nav-link.active {
          color: #B48564 !important;
          font-weight: 700 !important;
          background: transparent !important;
          text-shadow: 0 0 12px rgba(243, 200, 146, 0.5);
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
          color: #ffffff !important;
        }
        .sub-nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: 50%;
          transform: translateX(-50%) translateY(6px);
          background: rgba(30, 30, 30, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          min-width: 185px;
          padding: 6px;
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.5),
            0 2px 8px rgba(0, 0, 0, 0.2);
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
          font-family: var(--font-sans) !important;
          display: block;
          padding: 10px 16px;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          cursor: pointer;
          background: transparent;
          border: none;
          border-radius: 8px;
          width: 100%;
        }
        .dropdown-item:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          padding-left: 20px;
        }
        .dropdown-item.active {
          color: #b48564;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.04);
        }
        /* â”€â”€ Nested Tabs (Overview Switcher) â”€â”€ */
        .nested-tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 16px; /* Reduced to eliminate negative space */
        }
        .nested-tabs-wrapper {
          display: flex;
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.15);
          padding: 6px;
          border-radius: 100px;
          gap: 6px;
        }
        .nested-tab-btn {
          background: transparent;
          border: none;
          padding: 8px 24px;
          font-size: 13.5px;
          font-weight: 400;
          color: var(--color-text-muted);
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .nested-tab-btn:hover {
          color: var(--color-primary);
          background: rgba(0, 0, 0, 0.04);
        }
        .nested-tab-btn.active {
          background: var(--color-primary);
          color: var(--color-white);
          font-weight: 400;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }
        /* â”€â”€ Tab Pane Animations â”€â”€ */
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
          height: 100dvh;
          /* min-height removed to ensure perfect screen fit */
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          overflow: hidden;
          background-color: var(--color-bg-navy);
          padding-bottom: 80px;
        }
        /* â”€â”€ 4-Split Reveal Mask â”€â”€ */
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
          background-color: var(--color-bg-navy);
          animation: slideAwayProject 1.2s cubic-bezier(0.85, 0, 0.15, 1) forwards;
        }
        
        .panel-1 { transform-origin: top; animation-delay: 0.1s; }
        .panel-2 { transform-origin: bottom; animation-delay: 0.22s; }
        .panel-3 { transform-origin: top; animation-delay: 0.34s; }
        .panel-4 { transform-origin: bottom; animation-delay: 0.46s; }
        @keyframes slideAwayProject {
          to { transform: scaleY(0); }
        }
        /* â”€â”€ Background Image â”€â”€ */
        .project-hero-background {
          position: absolute;
          bottom: 0;
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
          transition: filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-hero-section:hover .project-hero-bg-image {
          filter: grayscale(0%);
        }
        .project-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(15, 15, 15, 0.75) 0%,
            rgba(15, 15, 15, 0) 10%,
            rgba(15, 15, 15, 0) 35%,
            rgba(15, 15, 15, 0) 70%,
            rgba(15, 15, 15, 0.46) 90%,
            rgba(15, 15, 15, 1) 100%
          );
          z-index: 2;
          pointer-events: none;
        }
        /* â”€â”€ Light Leak â”€â”€ */
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
          background: radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.03) 50%, transparent 80%);
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
        /* â”€â”€ Overlaid Content â”€â”€ */
        .project-hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
          max-width: 1400px;
          padding: 0 40px;
        }
        .project-hero-text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .project-hero-btn-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-bottom: 24px;
        }
        .project-tag-reveal {
        
          font-size: 10px;
          font-weight: 400;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 24px;
          opacity: 0;
          animation: fadeUpProject 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.8s;
          display: inline-block;
        }
        .hero-cta-btn {
          opacity: 0;
          animation: fadeUpProject 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.4s;
          background: rgba(255,255,255,0.1) !important;
          color: var(--color-white) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          backdrop-filter: blur(12px);
        }
        .hero-cta-btn .btn-circle-arrow {
          background: rgba(255, 255, 255, 0.15) !important;
          color: var(--color-white) !important;
        }
        
        .hero-cta-btn:hover {
          background: var(--color-white) !important;
          border-color: var(--color-white) !important;
          color: var(--color-bg-navy) !important;
          box-shadow: 0 8px 30px rgba(255, 255, 255, 0.15) !important;
        }
        .hero-cta-btn:hover .btn-circle-arrow {
          background: rgba(255,255,255,0.3) !important;
          color: var(--color-white) !important;
        }
        .project-hero-title {
          color: var(--color-white);
        }
        .project-hero-subtitle {
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
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
        /* â”€â”€ SECTION WRAPPER & SUBSECTIONS â”€â”€ */
        .project-section-wrapper {
          background-color: var(--color-bg-light);
        }
        .section-header {
          margin-bottom: 0px;
          text-align: left;
        }
        .section-subtitle {
          color: var(--color-text-dark);
          line-height: 1.6;
          max-width: 680px;
          margin-bottom: 0;
          text-align: left;
        }
        #overview.project-section-wrapper {
          background-color: var(--color-white);
          padding: 80px 0;
        }
        .overview-outer-container {
          max-width: var(--container-width);
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        /* â”€â”€ Centered Header Styles â”€â”€ */
        .overview-centered-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .overview-main-title {
          color: var(--color-text-dark);
          text-transform: uppercase;
          font-size: 32px;
          font-weight: 400;
          letter-spacing: 0px;
        }
        .overview-sub-title {
          font-size: 15px;
          color: var(--color-text-muted);
          margin: 0;
        }
        /* â”€â”€ Pill Tabs Styles â”€â”€ */
        .overview-nav-container {
          display: flex;
          justify-content: center;
          margin-bottom: 56px;
        }
        .overview-nav-pills {
          display: inline-flex;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 100px;
          padding: 6px;
          gap: 6px;
        }
        .overview-pill-btn {
          border: none;
          background: transparent;
          font-size: 14px;
          font-weight: 400;
          color: var(--color-text-muted);
          padding: 10px 28px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .overview-pill-btn:hover:not(.active) {
          color: var(--color-primary);
          background: rgba(0, 0, 0, 0.04);
        }
        .overview-pill-btn.active {
          background: var(--color-primary);
          color: var(--color-white);
          font-weight: 400;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }
        /* â”€â”€ Grid Layout Styles â”€â”€ */
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
          border-radius: 8px;
          overflow: hidden;
          // box-shadow: 0 12px 30px rgba(0, 0, 0, 0.03);
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
          color: var(--color-primary);
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .overview-text-desc {
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
          font-size: 21px;
          color: var(--color-primary);
          margin: 0 0 20px 0;
          font-weight: 400;
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
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .ov-amenity-icon {
          color: var(--color-primary);
          font-size: 18px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .ov-amenity-title {
          font-size: 13.5px;
          font-weight: 400;
          color: var(--color-primary);
          margin: 0 0 4px 0;
        }
        .ov-amenity-desc {
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
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: rgba(255, 255, 255, 0.6);
          overflow: hidden;
        }
        .ov-landmarks-list {
          display: flex;
          flex-direction: column;
        }
        .ov-landmarks-title {
          font-size: 10px;
          color: var(--color-primary);
          margin-bottom: 14px;
          font-weight: 400;
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
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          padding-bottom: 6px;
        }
        .ov-landmark-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .ov-landmark-name {
          font-size: 13px;
          font-weight: 400;
          color: var(--color-text-dark);
          display: block;
        }
        .ov-landmark-time {
          font-size: 11px;
          color: var(--color-text-muted);
        }
        @media (max-width: 960px) {
          .overview-main-grid-redesign {
            grid-template-columns: 1fr;
            gap: 36px;
            margin: 0 10px;
          }
          .overview-text-title {
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
          .ov-location-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .sub-section-title {
          font-size: 24px;
          font-weight: 400;
          color: var(--color-text-dark);
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
        /* â”€â”€ Corner Branch Bird Decorators â”€â”€ */
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
        /* ── Amenities Interactive Split Layout ── */
        .amenities-split-layout {
          display: flex;
          flex-direction: row;
          gap: 60px;
          width: 100%;
          align-items: stretch;
        }
        .amenities-directory {
          width: 45%;
          display: flex;
          flex-direction: column;
        }
        .amenities-grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 24px;
          row-gap: 0px;
          width: 100%;
        }
        .amenities-visualizer {
          display: block;
          width: 55%;
          min-height: 500px;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
        }
        .amenity-mobile-inline-card {
          display: none;
        }

        @keyframes amenityFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .amenities-grid-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .amenity-card {
          background: var(--color-white);
          padding: 30px 24px;
          border-radius: 12px;
          border: 1px solid var(--color-border-light);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.015);
          transition: all 0.35s var(--ease-luxury);
          text-align: center;
        }
        .amenity-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
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
          background: rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        .amenity-card:hover .amenity-icon-gold {
          background: var(--color-primary);
          color: var(--color-white);
        }
        .amenity-title {
          font-size: 17px;
          font-weight: 400;
          color: var(--color-bg-navy);
          margin-bottom: 8px;
        }
        .amenity-desc {
          font-size: 13.5px;
          color: var(--color-text-muted);
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
          background-color: var(--color-bg-navy);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.2);
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
          background: rgba(0, 0, 0, 0.15);
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
          font-size: 9px;
          font-weight: 400;
          color: var(--color-primary);
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
          background: var(--color-bg-navy);
          box-shadow: 0 0 10px var(--color-bg-navy);
        }
        .node-text {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.75);
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
          font-size: 18px;
          font-weight: 400;
          color: var(--color-text-dark);
          margin-bottom: 24px;
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
          font-weight: 400;
        }
        
        /* â”€â”€ VIDEOS SECTION STYLING â”€â”€ */
        .project-videos-section {
          background-color: var(--color-bg-cream);
          padding: 80px 0;
          color: var(--color-primary);
          border-top: 1px solid rgba(180, 133, 100, 0.12);
        }
        .video-slides-viewport {
          position: relative;
          width: 100%;
          height: 480px;
          border-radius: 0;
          overflow: hidden;
          border: 4px solid #ffffff;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        }
        .video-slides-track {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .video-slide-card {
          position: relative;
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .video-slide-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .video-slide-overlay {
          position: absolute;
          inset: 0;
          background: transparent;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0;
          box-sizing: border-box;
          z-index: 5;
        }
        .video-slide-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }
        .video-slide-tag {
          font-size: 10px;
          font-weight: 400;
          text-transform: uppercase;
          color: #aaaaaa;
        }
        .video-slide-title {
          font-size: 26px;
          font-weight: 400;
          color: #ffffff;
          margin: 0;
        }
        .video-slide-bottom-bar {
          display: block;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          height: 0;
          z-index: 20;
        }
        .video-slide-counter {
          font-size: 14px;
          font-weight: 400;
          color: var(--color-primary);
          position: absolute;
          left: 0;
          top: 12px;
        }
        /* Navigation Arrows on the sides */
        .video-slide-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          font-size: 24px;
          font-weight: 300;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
          user-select: none;
        }
        .video-slide-arrow:hover {
          background-color: #ffffff;
          color: var(--color-primary);
          border-color: #ffffff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .video-slide-arrow--left {
          left: 16px;
        }
        .video-slide-arrow--right {
          right: 16px;
        }
        @media (max-width: 768px) {
          .video-slides-viewport {
            height: 320px;
          }
          .video-slide-overlay {
            padding: 24px;
          }
          .video-slide-title {
            font-size: 18px;
          }
          .video-slide-arrow {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }
          .project-video-cta-group {
            transform: translateX(-50%) scale(0.85);
          }
        }
        /* â”€â”€ GALLERY SECTION STYLING â”€â”€ */
        .project-gallery-section {
          background-color: var(--color-bg-light);
          padding: 60px 0;
        }
        .project-gallery-section .section-subtitle {
          color: var(--color-text-dark);
          margin-bottom: 20px;
        }
        /* â”€â”€ INNOVATIVE BENTO GRID â”€â”€ */
        .innovative-bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 280px;
          gap: 16px;
          padding: 0 16px;
        }
        .bento-item {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          background: var(--color-bg-navy);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s var(--ease-luxury), box-shadow 0.4s var(--ease-luxury);
        }
        .bento-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        .bento-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bento-item:hover .bento-img {
          transform: scale(1.05);
        }
        .bento-overlay {
          position: absolute;
          z-index: 2;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px 24px 24px;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          gap: 6px;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.4s var(--ease-luxury);
        }
        .bento-item:hover .bento-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        .bento-title {
          font-size: 20px;
          color: var(--color-white);
          font-weight: 400;
          margin: 0;
        }
        /* Bento Asymmetrical Pattern (Repeats every 7 items) */
        .bento-item-0 { grid-column: span 2; grid-row: span 2; }
        .bento-item-1 { grid-column: span 1; grid-row: span 1; }
        .bento-item-2 { grid-column: span 1; grid-row: span 1; }
        .bento-item-3 { grid-column: span 2; grid-row: span 1; }
        .bento-item-4 { grid-column: span 1; grid-row: span 2; }
        .bento-item-5 { grid-column: span 2; grid-row: span 1; }
        .bento-item-6 { grid-column: span 1; grid-row: span 1; }
        @media (max-width: 992px) {
          .innovative-bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 240px;
          }
          /* Reset pattern for tablets for better fit */
          .bento-item-0 { grid-column: span 2; grid-row: span 2; }
          .bento-item-1 { grid-column: span 1; grid-row: span 1; }
          .bento-item-2 { grid-column: span 1; grid-row: span 1; }
          .bento-item-3 { grid-column: span 2; grid-row: span 1; }
          .bento-item-4 { grid-column: span 1; grid-row: span 1; }
          .bento-item-5 { grid-column: span 1; grid-row: span 1; }
          .bento-item-6 { grid-column: span 2; grid-row: span 1; }
        }
        @media (max-width: 576px) {
          .innovative-bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 250px;
          }
          /* Everything spans 1 col on small phones */
          .bento-item { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        /* â”€â”€ FLOORPLANS SECTION STYLING â”€â”€ */
        .project-floorplans-section {
          background: radial-gradient(circle at top left, var(--color-bg-light) 0%, var(--color-bg-cream) 100%);
          border-top: 1px solid rgba(0, 0, 0, 0.04);
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }
        .project-floorplans-section .section-subtitle {
          color: var(--color-text-dark);
          margin-bottom: 24px;
        }
        .floorplan-layout-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 50px;
          align-items: flex-start;
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
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 400;
          color: var(--color-text-muted);
          text-align: left;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .floorplan-tab-btn:hover {
          background: rgba(255, 255, 255, 0.35);
          border-color: rgba(255, 255, 255, 0.6);
        }
        .floorplan-tab-btn.active {
          border-color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.65);
          color: var(--color-primary);
          font-weight: 400;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        .btn-tab-num {
          font-size: 10px;
          font-weight: 400;
          color: var(--color-text-muted);
          border: 1px solid rgba(0, 0, 0, 0.3);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }
        .floorplan-tab-btn.active .btn-tab-num {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-white);
        }
        .floorplan-specs-box {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.05);
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
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          padding-bottom: 8px;
        }
        .floorplan-spec-line:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .spec-label {
          color: var(--color-text-muted);
        }
        .spec-val {
          color: var(--color-text-dark);
          font-weight: 400;
        }
        .floorplan-visual-col {
          display: flex;
          justify-content: center;
        }
        .blueprint-canvas {
          width: 100%;
          max-width: 580px;
          aspect-ratio: 4/3;
          background-color: var(--color-bg-navy);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5), 0 20px 40px rgba(0, 0, 0, 0.12);
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
            linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px);
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
          font-size: 8px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 3px 8px;
          border-radius: 2px;
        }
        /* â”€â”€ PRICING SECTION STYLING â”€â”€ */
        .project-pricing-section {
          background-color: var(--color-bg-light);
          padding: 80px 0;
        }
        .project-pricing-section .section-subtitle {
          color: var(--color-text-dark);
          margin-bottom: 48px;
        }
        .pricing-cards-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .pricing-item-card {
          background: var(--color-white);
          border: 1px solid rgba(0, 0, 0, 0.12);
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
          align-items: center;
        }
        @media (max-width: 900px) {
          .overview-editorial-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: start;
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
          color: var(--color-white) !important;
        }
        .amenity-luxury-card:hover .amenity-icon-wrapper {
          background: var(--color-white) !important;
          color: var(--color-bg-navy) !important;
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
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
          border-color: var(--color-primary);
        }
        .pricing-item-card.featured {
          border-color: var(--color-primary);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.04);
          background: var(--color-bg-light);
        }
        .pricing-item-card.featured:hover {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }
        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 28px;
          background: var(--color-primary);
          color: var(--color-bg-light);
          font-size: 10px;
          font-weight: 400;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid var(--color-primary);
        }
        .pricing-badge.featured-badge {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-white);
        }
        .pricing-title {
          font-size: 20px;
          font-weight: 400;
          color: var(--color-primary);
          margin-bottom: 20px;
          margin-top: 5px;
        }
        .pricing-divider {
          width: 100%;
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
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
          font-size: 11px;
          font-weight: 400;
          color: var(--color-text-muted);
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .pricing-val {
          font-size: 26px;
          font-weight: 400;
          color: var(--color-primary);
        }
        .pricing-asterisk {
          font-size: 15px;
          vertical-align: super;
          color: var(--color-text-muted);
        }
        .pricing-fineprint {
          text-align: center;
          font-size: 11px;
          color: var(--color-text-muted-light);
          margin-top: 32px;
        }
        /* â”€â”€ PROJECT STATUS SECTION STYLING â”€â”€ */
        .project-status-section {
          background-color: var(--color-bg-light);
          padding: 80px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }
        .project-status-section .section-subtitle {
          color: var(--color-text-dark);
          margin-bottom: 54px;
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
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .status-img-sm:hover .status-img-overlay {
          opacity: 1;
        }
        /* â”€â”€ LIGHTBOX / MODAL MEDIA OVERLAYS â”€â”€ */
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
          color: var(--color-white);
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
          color: var(--color-white);
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
          font-size: 18px;
          color: var(--color-white);
          text-align: center;
        }
        /* Video Iframe container inside overlay */
        .video-modal-content {
          width: 80%;
          max-width: 800px;
          aspect-ratio: 16/9;
          border-radius: 12px;
          overflow: hidden;
          background: var(--color-bg-navy);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        .video-iframe {
          width: 100%;
          height: 100%;
        }
        /* Inquiry booking Form Modal styling */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-content-card {
          background: var(--color-white);
          border-radius: 8px;
          width: 90%;
          max-width: 1040px; /* Wider for split layout */
          position: relative;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
          animation: modalEntrance 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          padding: 0;
          display: flex;
        }
        @keyframes modalEntrance {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        /* Left Image Panel */
        .modal-image-panel {
          flex: 1;
          background: url('/images/project/CML/master-banner.png') center/cover no-repeat;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding: 40px 32px;
        }
        .modal-image-panel::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%);
        }
        .modal-image-overlay {
          position: relative;
          z-index: 2;
          color: #ffffff;
        }
        .modal-image-overlay h3 {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 400;
          margin: 0 0 4px 0;

        color: #fff;
        }
        .modal-image-overlay p {
          font-family: var(--font-sans);
          font-size: 13.5px;
          opacity: 0.8;
          margin: 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #fff;
        }
        
        /* Right Form Panel */
        .modal-form-panel {
          flex: 1.1;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          position: relative;
        }

        /* Light Header */
        .modal-header-block-light {
          padding: 40px 40px 24px;
          text-align: left;
        }
        .modal-heading-light {
          font-family: var(--font-heading);
          font-size: 26px;
          font-weight: 400;
          color: #111111;
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }
        .modal-subheading-light {
          font-family: var(--font-sans);
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
          margin: 0;
        }
        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: transparent;
          border: none;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0,0,0,0.4);
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-close-btn:hover {
          color: #111111;
          transform: rotate(90deg);
        }
        
        .modal-body-light {
          padding: 0 40px 40px;
        }
        
        /* New Form Styles */
        .modal-inquiry-form-new {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-radio-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .form-label-top {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          color: rgba(0,0,0,0.6);
        }
        .radio-options {
          display: flex;
          gap: 24px;
        }
        .radio-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #111111;
          cursor: pointer;
        }
        .radio-label input[type="radio"] {
          display: none;
        }
        .radio-custom {
          width: 16px;
          height: 16px;
          border: 1px solid rgba(0,0,0,0.3);
          border-radius: 50%;
          position: relative;
          display: inline-block;
          transition: all 0.2s ease;
        }
        .radio-label input[type="radio"]:checked + .radio-custom {
          border-color: #b48564;
        }
        .radio-label input[type="radio"]:checked + .radio-custom::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: #b48564;
          border-radius: 50%;
        }
        .form-row-2 {
          display: flex;
          gap: 16px;
        }
        .form-row-phone {
          display: flex;
          gap: 16px;
        }
        .phone-code {
          flex: 0 0 100px;
        }
        .phone-number {
          flex: 1;
        }
        .form-group-outline {
          flex: 1;
        }
        .form-group-outline input, .form-group-outline select {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid rgba(0,0,0,0.15);
          border-radius: 4px;
          font-family: var(--font-sans);
          font-size: 14px;
          color: #111111;
          outline: none;
          background: #ffffff;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
        }
        .form-group-outline input::placeholder {
          color: rgba(0,0,0,0.5);
        }
        .form-group-outline input:focus, .form-group-outline select:focus {
          border-color: #b48564;
        }
        .form-checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 4px;
        }
        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 13px;
          color: rgba(0,0,0,0.7);
          cursor: pointer;
        }
        .checkbox-label input[type="checkbox"] {
          display: none;
        }
        .checkbox-custom {
          width: 16px;
          height: 16px;
          border: 1px solid rgba(0,0,0,0.2);
          border-radius: 3px;
          position: relative;
          display: inline-block;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.2s ease;
        }
        .checkbox-label input[type="checkbox"]:checked + .checkbox-custom {
          background: #b48564;
          border-color: #b48564;
        }
        .checkbox-label input[type="checkbox"]:checked + .checkbox-custom::after {
          content: '';
          position: absolute;
          left: 4px;
          top: 1px;
          width: 4px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
        
        /* Success Message */
        .form-success-message {
          text-align: center;
          padding: 20px 0;
          animation: fadeUpProject 0.5s ease forwards;
        }
        .success-icon-gold {
          color: #b48564;
          margin-bottom: 16px;
        }
        .form-success-message h4 {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 400;
          color: #111111;
          margin-bottom: 8px;
        }
        .form-success-message p {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
        }
        /* â”€â”€ Pillars Accordion Styling â”€â”€ */
        .pillars-container {
          width: 100%;
          text-align: left;
        }
        .pillars-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }
        .pillar-item {
          border-bottom: 1px solid rgba(29, 53, 87, 0.08);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .pillar-item:hover .pillar-title {
          color: var(--color-primary);
        }
        .pillar-header {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          gap: 16px;
          user-select: none;
          background-color: var(--color-bg-light);
        }
        .pillar-number {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: var(--color-primary);
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .pillar-item.active .pillar-number {
          opacity: 1;
          color: var(--color-highlight);
        }
        .pillar-title {
          font-family: var(--font-sans);
          color: var(--color-text-dark);
          font-weight:400;
          font-size: 18px;
          margin: 0;
          flex-grow: 1;
          transition: color 0.3s ease;
          letter-spacing: 0.1em;
        }
        .pillar-item.active .pillar-title {
          color: var(--color-highlight);
        }
        .pillar-toggle-icon {
          font-size: 18px;
          color: var(--color-primary);
          opacity: 0.6;
          transition: transform 0.3s ease;
        }
        .pillar-item.active .pillar-toggle-icon {
          transform: rotate(0deg);
        }
        .pillar-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .pillar-tagline {
          font-family: var(--font-sans);
          font-size: 9.5px;
          font-weight: 400;
          color: var(--color-primary);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: block;
        }
        .pillar-desc {
          color: var(--color-text-muted);
          font-size: 18px;
          padding: 15px;
          margin: 0;
        }
        .vision-dynamic-img-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 16/10;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.03);
        }
        /* â”€â”€ Floorplan Slide Layout Styles â”€â”€ */
        .floorplan-slide-viewport {
          position: relative;
          width: 100%;
          padding: 20px 40px;
        }
        .floorplan-slide-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-white);
          border: 1px solid rgba(0,0,0,0.06);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .floorplan-slide-arrow:hover {
          background: var(--color-primary);
          color: var(--color-white);
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
        }
        .floorplan-slide-arrow.prev {
          left: -24px;
        }
        .floorplan-slide-arrow.next {
          right: -24px;
        }
        @media (max-width: 768px) {
          .floorplan-slide-arrow {
            width: 40px;
            height: 40px;
          }
          .floorplan-slide-arrow.prev {
            left: -12px;
          }
          .floorplan-slide-arrow.next {
            right: -12px;
          }
        }
        /* â”€â”€ Gallery Spotlight Styles â”€â”€ */
        .gallery-spotlight-viewport {
          position: relative;
          width: 100vw;
          overflow: hidden;
          padding: 20px 0;
          margin-left: calc(-50vw + 50%);
          left: 0;
          --gallery-card-active-w: 85vw;
          --gallery-card-w: 65vw;
          --gallery-gap: 4vw;
          --gallery-card-offset: calc(50vw - var(--gallery-card-active-w) / 2);
        }
        .gallery-spotlight-track {
          display: flex;
          gap: var(--gallery-gap);
          width: max-content;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-spotlight-card {
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          height: calc(100vh - 165px);
          max-height: 720px;
          min-height: 320px;
          border-radius: 8px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          transition: flex-basis 0.6s cubic-bezier(0.16, 1, 0.3, 1), width 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
        }
        .gallery-spotlight-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-spotlight-card:hover .gallery-spotlight-img {
          transform: scale(1.2);
        }
        .gallery-spotlight-arrow {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.05);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        .gallery-spotlight-arrow:hover {
          background: var(--color-white);
          color: var(--color-primary);
          transform: translate(-50%, -50%) scale(1.08);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
        }
        .gallery-spotlight-arrow.prev {
          left: calc(var(--gallery-card-offset) / 2);
        }
        .gallery-spotlight-arrow.next {
          right: calc(var(--gallery-card-offset) / 2);
          transform: translate(50%, -50%);
        }
        
        .gallery-spotlight-arrow.next:hover {
          transform: translate(50%, -50%) scale(1.08);
        }
        
        /* Modal Split Layout Styles */
        @media (max-width: 768px) {
          .modal-content-card.split-modal {
            flex-direction: column;
            max-width: 440px;
            width: 95%;
            margin: 20px;
            max-height: 90vh;
            overflow-y: auto;
          }
          .modal-image-panel {
            height: 200px;
            flex: none;
            padding: 24px;
          }
          .modal-form-panel {
            flex: none;
          }
        }

        /* ── RESPONSIVE MEDIA CONTROLS ── */
        @media (max-width: 1024px) {
          .gallery-spotlight-viewport {
            --gallery-card-active-w: 80vw;
            --gallery-card-w: 60vw;
            --gallery-gap: 5vw;
          }
          .gallery-spotlight-card {
            height: clamp(480px, 60vh, 680px) !important;
            max-height: none !important;
            aspect-ratio: auto !important;
          }
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
            background: transparent;
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            z-index: 10;
            flex-shrink: 0;
          }
          .mobile-grid-trigger-btn {
            padding: 16px 16px 14px !important;
            color: #ffffff !important;
          }
          .show-only-on-mobile {
            display: inline-flex !important;
          }
          .mobile-directory-menu {
            min-width: 220px;
            padding: 8px;
            background: rgba(30, 30, 30, 0.95) !important;
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.12) !important;
            border-radius: 8px !important;
            box-shadow: 
              0 12px 40px rgba(0, 0, 0, 0.5),
              0 2px 8px rgba(0, 0, 0, 0.2) !important;
          }
          .mobile-directory-header {
            font-size: 8.5px;
            font-weight: 500;
            color: #ffffff;
            opacity: 0.4;
            padding: 8px 12px 4px;
            text-transform: uppercase;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            margin-bottom: 6px;
          }
          .mobile-directory-menu .dropdown-item {
            padding: 10px 14px;
            font-size: 12.5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 8px;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 500;
          }
          .mobile-directory-menu .dropdown-item.active {
            color: #b48564;
            background: rgba(255, 255, 255, 0.04);
            font-weight: 600;
          }
          .mobile-directory-menu .dropdown-item.active::after {
            content: '•';
            color: #b48564;
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
          .project-gallery-section {
            padding-top: 10px !important;
            padding-bottom: 16px !important;
            min-height: auto !important;
            justify-content: flex-start !important;
            gap: 26px !important;
          }
          .project-gallery-section .section-header {
            margin-bottom: 0px !important;
          }
          .project-gallery-section .section-title {
            margin-bottom: 4px !important;
            font-size: 28px !important;
            line-height: 1.2 !important;
          }
          .project-gallery-section .nested-tabs-container {
            margin-bottom: 2px !important;
          }
          .filter-tab-btn {
            padding: 0 12px !important;
            font-size: 13px !important;
          }
          .gallery-spotlight-viewport {
            --gallery-card-active-w: 88vw !important;
            --gallery-card-w: 72vw !important;
            --gallery-gap: 3vw !important;
            padding: 0 !important;
            margin-top: 0 !important;
          }
          .gallery-spotlight-card {
            height: clamp(520px, 72vh, 660px) !important;
            max-height: none !important;
            aspect-ratio: auto !important;
          }
          .project-floorplans-section {
            padding: 24px 0 !important;
          }
          .floorplan-slide-viewport {
            padding: 10px 0 !important;
          }
          .pricing-cards-container {
            grid-template-columns: 1fr;
          }
          .amenities-split-layout {
            flex-direction: column !important;
            gap: 0px !important;
          }
          .amenities-directory {
            width: 100% !important;
          }
          .amenities-grid-container {
            grid-template-columns: 1fr !important;
          }
          .amenities-visualizer {
            display: none !important;
          }
          .amenity-mobile-inline-card {
            display: block !important;
            width: 100%;
            height: 220px;
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            margin: 6px 0 14px 0;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
            animation: amenityFadeIn 0.3s ease;
          }
          .amenity-mobile-card-img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
          }
          .amenity-mobile-card-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
            padding: 16px 18px;
            z-index: 2;
          }
          .amenity-mobile-card-title {
            color: #ffffff;
            margin: 0 0 4px 0;
            font-weight: 500;
            font-size: 18px;
            font-family: var(--font-heading);
          }
          .amenity-mobile-card-desc {
            color: rgba(255, 255, 255, 0.85);
            margin: 0;
            font-size: 13px;
            font-weight: 300;
            line-height: 1.4;
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
          /* Generic layout fixes for screenshotted issues */
          
          /* Hero Section */
          .project-hero-content {
            flex-direction: column !important;
            align-items: flex-start !important;
            justify-content: flex-end !important;
            gap: 32px !important;
          }
          .project-hero-title {
            line-height: 1.1 !important;
            margin-bottom: 0px !important;
          }
          
          /* Video Tours Section */
          .project-video-cta-group {
            flex-direction: column !important;
            width: 90% !important;
            left: 50% !important;
            bottom: -60px !important;
            gap: 12px !important;
          }
          .project-video-cta-group > button {
            width: 100% !important;
            justify-content: center !important;
          }
          .video-slides-container {
            margin-bottom: 80px !important;
          }
          /* "Experience True Luxury" */
          .c3-action-area h3 {
            line-height: 1.1 !important;
          }
          .c3-split-layout {
            flex-direction: column !important;
          }
          .c3-image-pane, .c3-solid-pane {
            width: 100% !important;
          }
          /* Quick Info / Stats Grid (usually has 4 columns) */
          .project-stats-grid, div[style*="grid-template-columns: repeat(4"], div[style*="gridTemplateColumns: 'repeat(4"] {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
          /* Status Month Grid */
          .status-month-grid, div[style*="grid-template-columns: repeat(3"], div[style*="gridTemplateColumns: 'repeat(3"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .status-month-container {
            flex-direction: column !important;
            gap: 24px !important;
          }
          /* Nested tabs (Specifications, etc.) */
          .nested-tabs-wrapper {
            flex-wrap: wrap !important;
            justify-content: center !important;
            overflow: visible !important;
          }
          
          /* Location Timeline */
          .timeline-item-content {
            padding-right: 0 !important;
          }
          
          /* Titles */
          .section-title {
            font-size: 28px !important;
            line-height: 1.2 !important;
          }
          h3[style*="font-size: 32px"], h3[style*="fontSize: '32px'"] {
            font-size: 24px !important;
          }
        }
        /* â”€â”€ 3D GALLERY SLIDER â”€â”€ */
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
          box-shadow: 0 15px 35px rgba(29, 53, 87, 0.08);
          transition: all 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          background-color: var(--color-bg-navy);
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
          font-size: 15px;
          color: var(--color-white);
          font-weight: 400;
        }
        .gallery-deck-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--color-white);
          border: 1px solid rgba(29, 53, 87, 0.15);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 30;
          box-shadow: 0 4px 15px rgba(29, 53, 87, 0.05);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-deck-arrow:hover {
          background: var(--color-primary);
          color: var(--color-white);
          border-color: var(--color-primary);
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 8px 20px rgba(29, 53, 87, 0.2);
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
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-deck-card:hover .play-button-pulsing {
          transform: scale(1.1);
          background: var(--color-primary);
          color: var(--color-white);
        }
        @keyframes playPulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
      `}</style>
    </div>
  );
}