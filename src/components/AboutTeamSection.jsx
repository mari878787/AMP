import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import { X, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MD_LEADER = {
  id: 1,
  name: "V. Sai Mohan",
  role: "Founder, Chairman & Managing Director",
  signatureTitle: "V. Sai Mohan",
  signatureSub: "Founder, Chairman & Managing Director",
  quote: "PERFECTION IS NOT A DREAM, BUT A REALITY THAT I STRIVE TOWARDS IN MY WORK",
  image: "/images/team/sai-mohan-cutout.png",
  modalImage: "/images/team/sai-mohan.png",
  bio: [
    "V. Sai Mohan is the Founder, Chairman & MD of Aadhithya Mohan Properties. A visionary first-generation entrepreneur, he has spearheaded landmark residential developments across Chennai with an unyielding commitment to architectural perfection, enduring quality, and customer trust.",
    "Under his stewardship, Aadhithya Mohan Properties has evolved into a premier luxury developer known for creating bespoke villa communities that harmonize modern engineering with natural landscapes. His hands-on leadership ensures every project adheres to the highest benchmarks of structural durability, legal transparency, and aesthetic excellence."
  ]
};

const CEO_LEADER = {
  id: 2,
  name: "Muralidharan",
  role: "Chief Executive Officer",
  signatureTitle: "Muralidharan",
  signatureSub: "Chief Executive Officer",
  quote: "TRUST AND LASTING VALUE ARE THE CORNERSTONES OF EVERY COMMUNITY WE BUILD",
  image: "/images/team/murali-cutout.png",
  modalImage: "/images/team/murali.png",
  bio: [
    "Muralidharan brings over 11 years of professional experience, including more than six years in the real estate industry. His journey began in investor relations, where he worked closely with investors as an independent consultant, gaining valuable insight into market dynamics, customer expectations, and long-term value creation. His strategic vision and leadership ultimately led him to assume the role of Chief Executive Officer at Aadhithya Mohan Properties.",
    "Prior to his leadership in real estate, he served as a Marketing Consultant for digital campaigns at Condé Nast India Pvt. Ltd., where he worked on performance-driven marketing initiatives for leading brands. This experience cultivated a strategic approach to brand building, customer engagement, and business growth, which continues to influence his leadership today.",
    "As Chief Executive Officer of Aadhithya Mohan Properties, Muralidharan leads the company's overall operations, strategic planning, business growth, and expansion. His perspective on real estate is founded on two enduring principles: trust and lasting value. He believes every development should inspire confidence through uncompromising integrity while creating enduring value for homeowners and investors alike. Guided by this philosophy, he is committed to delivering thoughtfully planned communities that reflect exceptional quality, timeless design, and a legacy that extends well beyond the homes themselves."
  ]
};

const MANAGEMENT_LEADERS = [
  {
    id: 3,
    name: "Afroz",
    role: "Vice-President, Sales & Marketing",
    bio: [
      "Afroz manages end-to-end customer engagement, sales strategy, and brand outreach. With deep market insight and a customer-first approach, he ensures every client experiences seamless service and absolute transparency throughout their luxury home-buying journey."
    ],
    image: "/images/team/afroz.jpg"
  },
  {
    id: 4,
    name: "Bala",
    role: "Vice-President, Planning & Development",
    bio: [
      "Bala oversees project planning, architectural coordination, and operational development. With an eye for structural excellence and regulatory compliance, he ensures every development meets the highest standards of safety and sustainability."
    ],
    image: "/images/team/afroz.jpg"
  },
  {
    id: 5,
    name: "Priya Sundaram",
    role: "Head of Architecture & Design",
    bio: [
      "Priya heads architectural design and spatial innovation at Aadhithya Mohan Properties. Combining contemporary aesthetics with functional luxury, she ensures every villa and community reflects thoughtful ergonomics and enduring beauty."
    ],
    image: "/images/team/priya.png"
  },
  {
    id: 6,
    name: "Karthik Narayanan",
    role: "Vice-President, Finance & Operations",
    bio: [
      "Karthik leads corporate finance, fiscal management, and operational efficiency across all portfolio projects, ensuring resilient value creation, disciplined capital allocation, and on-time project execution."
    ],
    image: "/images/team/karthik.jpg"
  }
];

export default function AboutTeamSection({ showExecutives = true }) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  
  const pinSectionRef = useRef(null);
  const mdSlideRef = useRef(null);
  const ceoSlideRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedMember]);

  // Smooth GSAP Pin & ScrollTrigger transition (MD -> CEO)
  useEffect(() => {
    if (!showExecutives) return;
    const pinEl = pinSectionRef.current;
    const mdEl = mdSlideRef.current;
    const ceoEl = ceoSlideRef.current;

    if (!pinEl || !mdEl || !ceoEl) return;

    const ctx = gsap.context(() => {
      // Set initial states with explicit z-index & visibility
      gsap.set(mdEl, { opacity: 1, y: 0, pointerEvents: 'auto', zIndex: 5, autoAlpha: 1 });
      gsap.set(ceoEl, { opacity: 0, y: 35, pointerEvents: 'none', zIndex: 1, autoAlpha: 0 });

      // Create smooth scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinEl,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // 1. MD holds for first phase
      tl.to({}, { duration: 0.2 })
        // 2. MD smoothly fades out and moves up
        .to(mdEl, {
          opacity: 0,
          y: -35,
          pointerEvents: 'none',
          zIndex: 1,
          autoAlpha: 0,
          duration: 0.4,
          ease: 'power1.inOut'
        })
        // 3. CEO simultaneously fades in and glides into position
        .to(ceoEl, {
          opacity: 1,
          y: 0,
          pointerEvents: 'auto',
          zIndex: 5,
          autoAlpha: 1,
          duration: 0.4,
          ease: 'power1.inOut'
        }, '<+=0.08')
        // 4. CEO settles comfortably
        .to({}, { duration: 0.2 });

    }, pinSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="sobha-leadership-wrapper" id="team">

      {/* ── 1. PINNED GSAP SCROLL SPOTLIGHT (MD -> CEO SMOOTH CROSSFADE) ── */}
      {showExecutives && (
        <div className="sobha-gsap-pin-container" ref={pinSectionRef}>
        
        {/* Subtle Architectural Skyline Background */}
        <div className="sobha-hero-bg" style={{ backgroundImage: `url('/images/about/leadership_hero_bg.jpg')` }} />
        <div className="sobha-hero-light-wash" />

        <div className="sobha-hero-inner">
          
          {/* Centered Top Section Header */}
          <div className="sobha-section-top-header">
            <span className="sobha-header-eyebrow">EXECUTIVE LEADERSHIP</span>
            <h2 className="sobha-header-title">The People Behind Our Vision</h2>
          </div>

          <div className="sobha-slides-stage">

            {/* ── SLIDE 1: MD (V. SAI MOHAN) ── */}
            <div className="sobha-exec-slide md-slide" ref={mdSlideRef}>
              <div className="sobha-stage-grid">
                
                {/* Left Quote & Name with Right-Side Arrow Trigger */}
                <div className="sobha-stage-left">
                  <span className="sobha-big-quote-mark">“</span>
                  <h3 className="sobha-stage-quote">{MD_LEADER.quote}</h3>
                  <span className="sobha-big-quote-mark sobha-quote-close">”</span>

                  <button 
                    type="button"
                    className="sobha-name-arrow-row"
                    onClick={() => setSelectedMember(MD_LEADER)}
                    aria-label={`View full biography for ${MD_LEADER.name}`}
                    title="Click to view full biography"
                  >
                    <div className="sobha-name-details">
                      <h4 className="sobha-sig-name">{MD_LEADER.signatureTitle}</h4>
                      <p className="sobha-sig-role">{MD_LEADER.signatureSub}</p>
                    </div>
                    <div className="sobha-name-arrow-btn">
                      <ArrowUpRight size={18} strokeWidth={1.6} />
                    </div>
                  </button>
                </div>

                {/* Right Cutout Portrait */}
                <div className="sobha-stage-right">
                  <div 
                    className="sobha-cutout-container" 
                    onClick={() => setSelectedMember(MD_LEADER)} 
                    title="Click to view full biography"
                  >
                    <img 
                      src={MD_LEADER.image} 
                      alt={MD_LEADER.name} 
                      className="sobha-cutout-img"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* ── SLIDE 2: CEO (MURALIDHARAN) ── */}
            <div className="sobha-exec-slide ceo-slide" ref={ceoSlideRef}>
              <div className="sobha-stage-grid">
                
                {/* Left Quote & Name with Right-Side Arrow Trigger */}
                <div className="sobha-stage-left">
                  <span className="sobha-big-quote-mark">“</span>
                  <h3 className="sobha-stage-quote">{CEO_LEADER.quote}</h3>
                  <span className="sobha-big-quote-mark sobha-quote-close">”</span>

                  <button 
                    type="button"
                    className="sobha-name-arrow-row"
                    onClick={() => setSelectedMember(CEO_LEADER)}
                    aria-label={`View full biography for ${CEO_LEADER.name}`}
                    title="Click to view full biography"
                  >
                    <div className="sobha-name-details">
                      <h4 className="sobha-sig-name">{CEO_LEADER.signatureTitle}</h4>
                      <p className="sobha-sig-role">{CEO_LEADER.signatureSub}</p>
                    </div>
                    <div className="sobha-name-arrow-btn">
                      <ArrowUpRight size={18} strokeWidth={1.6} />
                    </div>
                  </button>
                </div>

                {/* Right Cutout Portrait */}
                <div className="sobha-stage-right">
                  <div 
                    className="sobha-cutout-container" 
                    onClick={() => setSelectedMember(CEO_LEADER)} 
                    title="Click to view full biography"
                  >
                    <img 
                      src={CEO_LEADER.image} 
                      alt={CEO_LEADER.name} 
                      className="sobha-cutout-img"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
      )}

      {/* ── 2. OUR TEAM SECTION (THE PEOPLE WHO BRING OUR VISION IN TO LIFE) ── */}
      <section className="sobha-team-section">
        <div className="container">
          
          <div className="sobha-team-header">
            <ScrollReveal animation="fadeUp">
              <span className="sobha-team-eyebrow">OUR TEAM</span>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.08}>
              <h2 className="section-title">The People Who Bring Our Vision In to Life</h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.15}>
              <p className="text-body" style={{ maxWidth: '680px', margin: '0 auto' }}>
                A multidisciplinary team of domain specialists driving engineering rigor, customer satisfaction, and strategic excellence.
              </p>
            </ScrollReveal>
          </div>

          {/* 4-Card Grid for Core Management */}
          <div className="sobha-team-cards-grid">
            {MANAGEMENT_LEADERS.map((member, idx) => (
              <div 
                className="sobha-team-card-col"
                key={member.id}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <ScrollReveal animation="fadeUp" delay={0.1 + idx * 0.08} style={{ height: '100%', width: '100%' }}>
                  <div
                    className={`sobha-team-member-card ${hoveredId !== null && hoveredId !== member.id ? 'is-dimmed' : ''}`}
                    onClick={() => setSelectedMember(member)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View bio for ${member.name}`}
                  >
                    {/* Portrait */}
                    <div className="sobha-card-portrait-wrap">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="sobha-card-photo"
                      />
                      <div className="sobha-card-dark-gradient" />
                    </div>

                    {/* Meta info at bottom */}
                    <div className="sobha-card-meta-bottom">
                      <div className="sobha-card-meta-text">
                        <h3 className="sobha-card-name">{member.name}</h3>
                        <p className="sobha-card-role">{member.role}</p>
                      </div>
                      <div className="sobha-card-arrow-badge">
                        <ArrowUpRight size={18} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. CINEMATIC BIO MODAL ── */}
      {selectedMember && (
        <div className="sobha-bio-modal-backdrop" data-lenis-prevent onClick={() => setSelectedMember(null)}>
          <div className="sobha-bio-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="sobha-bio-modal-close"
              onClick={() => setSelectedMember(null)}
              aria-label="Close modal"
            >
              <X size={22} strokeWidth={1.5} />
            </button>

            <div className="sobha-bio-modal-grid">
              {/* Left: Full portrait */}
              <div className="sobha-bio-modal-img-col">
                <img src={selectedMember.modalImage || selectedMember.image} alt={selectedMember.name} />
              </div>

              {/* Right: Scrollable bio */}
              <div className="sobha-bio-modal-info-col" data-lenis-prevent>
                <div className="sobha-bio-modal-inner">
                  <span className="sobha-bio-modal-tag">Leadership</span>
                  <h3 className="sobha-bio-modal-title">{selectedMember.name}</h3>
                  <p className="sobha-bio-modal-sub">{selectedMember.role}</p>
                  <div className="sobha-bio-modal-divider"></div>
                  <div className="sobha-bio-modal-paragraphs">
                    {Array.isArray(selectedMember.bio)
                      ? selectedMember.bio.map((para, i) => (
                          <p key={i} className="sobha-bio-p">{para}</p>
                        ))
                      : <p className="sobha-bio-p">{selectedMember.bio}</p>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .sobha-leadership-wrapper {
          width: 100%;
          background-color: #ffffff;
          box-sizing: border-box;
          position: relative;
        }

        /* ── 1. PINNED GSAP CONTAINER (SEAMLESS EDGE-TO-EDGE FIT) ── */
        .sobha-gsap-pin-container {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 560px;
          display: flex;
          align-items: stretch;
          background: #eae8e1;
          overflow: hidden;
          padding-top: 105px;
          padding-bottom: 0 !important;
          box-sizing: border-box;
        }

        .sobha-hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center right;
          opacity: 0.45;
          filter: grayscale(25%) contrast(105%);
          z-index: 0;
        }

        .sobha-hero-light-wash {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(234, 232, 225, 0.98) 0%,
            rgba(234, 232, 225, 0.92) 48%,
            rgba(234, 232, 225, 0.4) 80%,
            transparent 100%
          );
          z-index: 1;
        }

        .sobha-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
        }

        /* Centered Top Header (Matching OUR TEAM style) */
        .sobha-section-top-header {
          position: relative;
          z-index: 5;
          text-align: center;
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .sobha-header-eyebrow {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 6px;
        }

        .sobha-header-title {
          font-family: var(--font-heading);
          font-size: clamp(26px, 3vw, 42px);
          font-weight: 400;
          color: #111111;
          margin: 0;
          letter-spacing: -0.01em;
          line-height: 1.18;
        }

        /* Slides Stage Container */
        .sobha-slides-stage {
          position: relative;
          flex: 1;
          min-height: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }

        /* Individual Absolute Executive Slide */
        .sobha-exec-slide {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }

        .sobha-exec-slide.md-slide {
          z-index: 5;
        }

        .sobha-exec-slide.ceo-slide {
          z-index: 1;
        }

        /* Stage Grid (Equal 1fr 1fr Columns, Centered) */
        .sobha-stage-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: flex-end;
          gap: 40px;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          height: 100%;
          box-sizing: border-box;
        }

        /* Left Side Quote - Vertically Centered with Balanced Width */
        .sobha-stage-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0;
          margin: auto 0;
          max-width: 520px;
          height: 100%;
          box-sizing: border-box;
          position: relative;
          z-index: 10;
        }

        .sobha-big-quote-mark {
          font-family: var(--font-heading);
          font-size: 38px;
          color: #b48564;
          line-height: 0.8;
          display: block;
          margin-bottom: 8px;
        }

        .sobha-quote-close {
          margin-top: 8px;
          margin-bottom: 16px;
        }

        .sobha-stage-quote {
          font-family: var(--font-heading);
          font-size: clamp(20px, 2.2vw, 32px);
          font-weight: 400;
          color: #b48564;
          line-height: 1.25;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          margin: 0;
        }

        /* Name & Arrow Button Row */
        .sobha-name-arrow-row {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          margin-top: 10px;
          padding: 6px 12px 6px 0;
          background: transparent;
          border: none;
          outline: none;
          text-align: left;
          transition: all 0.3s ease;
          position: relative;
          z-index: 20;
          pointer-events: auto !important;
        }

        .sobha-name-details {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .sobha-sig-name {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 500;
          color: #111111;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0;
          transition: color 0.3s ease;
        }

        .sobha-name-arrow-row:hover .sobha-sig-name {
          color: #b48564;
        }

        .sobha-sig-role {
          font-family: var(--font-sans);
          font-size: 12.5px;
          font-weight: 400;
          color: #666666;
          text-transform: capitalize;
          margin: 0;
        }

        .sobha-name-arrow-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #111111;
          background: transparent;
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .sobha-name-arrow-row:hover .sobha-name-arrow-btn {
          background: #111111;
          color: #ffffff;
          transform: translate(2px, -2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Right Side Cutout Portrait */
        .sobha-stage-right {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          height: 100%;
          min-height: 0;
          position: relative;
          z-index: 5;
        }

        .sobha-cutout-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          cursor: pointer;
        }

        .sobha-cutout-img {
          width: auto;
          max-width: 100%;
          height: 100%;
          max-height: calc(100vh - 165px);
          object-fit: contain;
          object-position: center bottom;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.14));
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sobha-cutout-container:hover .sobha-cutout-img {
          transform: scale(1.02);
        }

        /* ── 2. OUR TEAM SECTION ── */
        .sobha-team-section {
          position: relative;
          z-index: 10;
          padding: 80px 0 120px;
          background: #ffffff;
        }

        .sobha-team-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .sobha-team-eyebrow {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 12px;
        }

        .sobha-team-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1320px;
          margin: 0 auto;
        }

        .sobha-team-card-col {
          height: 460px;
        }

        .sobha-team-member-card {
          position: relative;
          height: 100%;
          width: 100%;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          background-color: #111111;
        }

        .sobha-team-member-card:hover {
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.18);
        }


        .sobha-card-portrait-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .sobha-card-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sobha-team-member-card:hover .sobha-card-photo {
          transform: scale(1.05);
        }

        .sobha-card-dark-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 8, 6, 0.95) 0%,
            rgba(10, 8, 6, 0.55) 35%,
            rgba(10, 8, 6, 0.1) 60%,
            transparent 80%
          );
          transition: background 0.4s ease;
        }

        .sobha-team-member-card:hover .sobha-card-dark-gradient {
          background: linear-gradient(
            to top,
            rgba(10, 8, 6, 0.98) 0%,
            rgba(10, 8, 6, 0.7) 40%,
            rgba(10, 8, 6, 0.15) 65%,
            transparent 80%
          );
        }

        .sobha-card-meta-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px 20px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          z-index: 3;
        }

        .sobha-card-meta-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .sobha-card-name {
          font-family: var(--font-heading);
          font-size: 21px;
          font-weight: 400;
          color: #ffffff;
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .sobha-card-role {
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
          line-height: 1.3;
        }

        .sobha-team-member-card:hover .sobha-card-role {
          color: rgba(255, 255, 255, 0.9);
        }

        .sobha-card-arrow-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          flex-shrink: 0;
          transition: all 0.3s ease;
          opacity: 1;
          transform: translateY(0);
        }

        .sobha-team-member-card:hover .sobha-card-arrow-badge {
          border-color: #b48564;
          color: #ffffff;
          background: #b48564;
          transform: translate(2px, -2px);
          box-shadow: 0 4px 14px rgba(180, 133, 100, 0.4);
        }

        /* ── 3. CINEMATIC BIO MODAL ── */
        .sobha-bio-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 36px;
          animation: modalFadeIn 0.3s ease forwards;
        }

        .sobha-bio-modal-box {
          background: #ffffff;
          border-radius: 8px;
          max-width: 1060px;
          width: 100%;
          max-height: 88vh;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
          animation: modalScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .sobha-bio-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #333333;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .sobha-bio-modal-close:hover {
          background: #111111;
          border-color: #111111;
          color: #ffffff;
          transform: rotate(90deg);
        }

        .sobha-bio-modal-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          height: 100%;
          max-height: 88vh;
        }

        .sobha-bio-modal-img-col {
          height: 100%;
          min-height: 520px;
          max-height: 88vh;
          background: #0a0806;
          position: relative;
          overflow: hidden;
        }

        .sobha-bio-modal-img-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .sobha-bio-modal-info-col {
          overflow-y: auto;
          max-height: 88vh;
          scrollbar-width: thin;
          scrollbar-color: rgba(180, 133, 100, 0.3) transparent;
        }

        .sobha-bio-modal-info-col::-webkit-scrollbar {
          width: 4px;
        }

        .sobha-bio-modal-info-col::-webkit-scrollbar-track {
          background: transparent;
        }

        .sobha-bio-modal-info-col::-webkit-scrollbar-thumb {
          background: rgba(180, 133, 100, 0.3);
          border-radius: 4px;
        }

        .sobha-bio-modal-inner {
          padding: 56px 48px 48px;
        }

        .sobha-bio-modal-tag {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b48564;
          margin-bottom: 14px;
          padding: 5px 14px;
          background: rgba(180, 133, 100, 0.08);
          border-radius: 4px;
        }

        .sobha-bio-modal-title {
          font-family: var(--font-heading);
          font-size: 34px;
          color: #111111;
          margin: 0 0 6px 0;
          line-height: 1.12;
          letter-spacing: -0.02em;
        }

        .sobha-bio-modal-sub {
          font-family: var(--font-sans);
          font-size: 15px;
          color: #888888;
          margin: 0 0 24px 0;
          font-weight: 400;
        }

        .sobha-bio-modal-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #b48564, #d4a574);
          margin-bottom: 28px;
          border-radius: 2px;
        }

        .sobha-bio-modal-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .sobha-bio-p {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.8;
          color: #444444;
          margin: 0;
        }

        .sobha-bio-p:first-child::first-letter {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 400;
          color: #b48564;
          float: left;
          line-height: 1;
          margin-right: 6px;
          margin-top: 4px;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalScaleUp {
          from { opacity: 0; transform: scale(0.96) translateY(16px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* ── RESPONSIVE BREAKPOINTS ── */
        @media (max-width: 1024px) {
          .sobha-gsap-pin-container {
            height: 100dvh !important;
            height: 100vh !important;
            min-height: 540px !important;
            padding-top: 75px !important;
            padding-bottom: 0 !important;
            overflow: hidden !important;
          }
          .sobha-hero-inner {
            height: 100% !important;
            padding: 0 20px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
          }
          .sobha-section-top-header {
            margin-bottom: 6px !important;
            flex-shrink: 0 !important;
          }
          .sobha-header-eyebrow {
            font-size: 10.5px !important;
            margin-bottom: 3px !important;
          }
          .sobha-header-title {
            font-size: clamp(20px, 4.5vw, 26px) !important;
            line-height: 1.2 !important;
          }
          .sobha-slides-stage {
            flex: 1 !important;
            min-height: 0 !important;
            position: relative !important;
            width: 100% !important;
            height: 100% !important;
          }
          .sobha-exec-slide {
            position: absolute !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: flex !important;
            align-items: flex-end !important;
            padding: 0 !important;
          }
          .sobha-stage-grid {
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            align-items: center !important;
            width: 100% !important;
            height: 100% !important;
            gap: 4px !important;
          }
          .sobha-stage-left {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            flex-shrink: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .sobha-big-quote-mark {
            font-size: 24px !important;
            line-height: 0.6 !important;
            margin-bottom: 4px !important;
          }
          .sobha-quote-close {
            margin-top: 4px !important;
            margin-bottom: 6px !important;
          }
          .sobha-stage-quote {
            font-size: clamp(14px, 3.8vw, 17px) !important;
            line-height: 1.25 !important;
            letter-spacing: 0.02em !important;
          }
          .sobha-name-arrow-row {
            margin-top: 4px !important;
            gap: 10px !important;
            padding: 2px 0 !important;
          }
          .sobha-sig-name {
            font-size: 16px !important;
          }
          .sobha-sig-role {
            font-size: 11px !important;
          }
          .sobha-name-arrow-btn {
            width: 30px !important;
            height: 30px !important;
          }
          .sobha-stage-right {
            width: 100% !important;
            flex: 1 1 0% !important;
            min-height: 220px !important;
            height: 100% !important;
            display: flex !important;
            align-items: flex-end !important;
            justify-content: center !important;
            overflow: visible !important;
            position: relative !important;
          }
          .sobha-cutout-container {
            height: 100% !important;
            width: 100% !important;
            display: flex !important;
            align-items: flex-end !important;
            justify-content: center !important;
            position: relative !important;
          }
          .sobha-cutout-img {
            height: 100% !important;
            max-height: 46vh !important;
            width: auto !important;
            max-width: 100% !important;
            object-fit: contain !important;
            object-position: bottom center !important;
            display: block !important;
            filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15)) !important;
          }
          .sobha-team-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sobha-team-card-col {
            height: 420px;
          }
        }

        @media (max-width: 768px) {
          .sobha-team-section {
            padding: 70px 0 80px;
          }
          .sobha-team-cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .sobha-team-card-col {
            height: 400px;
          }
          .sobha-bio-modal-backdrop {
            padding: 16px;
          }
          .sobha-bio-modal-grid {
            grid-template-columns: 1fr;
          }
          .sobha-bio-modal-img-col {
            height: 260px;
            min-height: auto;
            max-height: 260px;
          }
          .sobha-bio-modal-info-col {
            max-height: calc(92vh - 260px);
          }
          .sobha-bio-modal-inner {
            padding: 28px 20px;
          }
        }
      `}</style>
    </div>
  );
}