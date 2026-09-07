import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailsGrid({
  stat1Tag = 'SITE EXTENT',
  stat1Val = '15',
  stat1Desc = 'ACRES',
  stat1Count = 15,

  stat2Tag = 'TOTAL UNITS',
  stat2Val = '47',
  stat2Desc = 'VILLAS',
  stat2Count = 47,

  projectTag = 'PROJECT',
  projectName = 'CRYSTAL MOONLIGHT',
  location = 'MEDAVAKKAM, CHENNAI',
  reraNo = '(TN/29/Building/001/2024)',

  stat3Tag = 'CONFIGURATION',
  stat3Val = '3 & 4',
  stat3Desc = 'BHK',

  stat4Tag = 'SIZE RANGE',
  stat4Val = '2,233 - 2,287',
  stat4Desc = 'SQ.FT.'
}) {
  const containerRef = useRef(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Selectors
    const stats = gsap.utils.toArray('.stat-block', container);
    const dividers = gsap.utils.toArray('.divider-line', container);
    const centerTitle = container.querySelector('.info-grid-val-large');
    const centerTexts = gsap.utils.toArray('.center-text-reveal', container);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      }
    });

    // 1. Animate the top border line
    tl.fromTo('.grid-top-border', 
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 1.2, ease: 'power2.inOut' }
    );

    // 2. Animate vertical dividers (draw down)
    if (dividers.length > 0) {
      tl.fromTo(dividers,
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 1, ease: 'power2.inOut', stagger: 0.15 },
        '-=0.8'
      );
    }

    // 3. Stagger reveal for the stat blocks
    if (stats.length > 0) {
      tl.fromTo(stats,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
        '-=0.6'
      );
    }

    // 4. Stagger reveal letters of projectName
    if (centerTitle) {
      const text = centerTitle.innerText;
      centerTitle.innerHTML = text.split('').map(char => 
        `<span class="char-span" style="display:inline-block; transform: translate3d(0, 100%, 0); opacity: 0; will-change: transform, opacity;">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      const chars = centerTitle.querySelectorAll('.char-span');
      tl.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.03
      }, '-=0.5');
    }

    // 5. Stagger other center group texts
    if (centerTexts.length > 0) {
      tl.fromTo(centerTexts,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', stagger: 0.1 },
        '-=0.4'
      );
    }

    // 6. Number Count Up for Stat 1 (e.g. Site Extent)
    if (typeof stat1Count === 'number' && stat1Count > 0) {
      const isDecimal = !Number.isInteger(stat1Count) || (typeof stat1Val === 'string' && stat1Val.includes('.'));
      const decimals = isDecimal ? (String(stat1Val || stat1Count).split('.')[1]?.length || 2) : 0;
      const obj1 = { val: 0 };
      tl.to(obj1, {
        val: stat1Count,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          setCount1(decimals > 0 ? obj1.val.toFixed(decimals) : Math.floor(obj1.val));
        }
      }, '-=1');
    }

    // 7. Number Count Up for Stat 2 (e.g. Total Units)
    if (typeof stat2Count === 'number' && stat2Count > 0) {
      const isDecimal = !Number.isInteger(stat2Count) || (typeof stat2Val === 'string' && stat2Val.includes('.'));
      const decimals = isDecimal ? (String(stat2Val || stat2Count).split('.')[1]?.length || 2) : 0;
      const obj2 = { val: 0 };
      tl.to(obj2, {
        val: stat2Count,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          setCount2(decimals > 0 ? obj2.val.toFixed(decimals) : Math.floor(obj2.val));
        }
      }, '<');
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [stat1Count, stat2Count, stat1Val, stat2Val]);

  return (
    <div ref={containerRef} className="project-details-grid-root" style={{ width: '100%' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Animated Horizontal Border */}
        <div className="grid-top-border" style={{ height: '1px', background: 'rgba(0, 0, 0, 0.08)', width: '100%', willChange: 'transform' }}></div>
        
        <div className="project-details-grid-content">
          <div className="project-details-grid-wrapper">

            {/* Left Stats Group (Top row on mobile) */}
            <div className="stat-group stat-group-left">
              {/* Stat 1: Site Extent */}
              <div className="stat-block">
                <span className="info-grid-tag">{stat1Tag}</span>
                <span className="info-grid-val" style={String(stat1Val).length > 6 ? { fontSize: '24px', whiteSpace: 'nowrap' } : {}}>
                  {typeof stat1Count === 'number' && stat1Count > 0 ? count1 : stat1Val}
                </span>
                <span className="info-grid-desc">{stat1Desc}</span>
              </div>

              {/* Stat 2: Total Units */}
              <div className="stat-block">
                <span className="info-grid-tag">{stat2Tag}</span>
                <span className="info-grid-val" style={String(stat2Val).length > 6 ? { fontSize: '24px', whiteSpace: 'nowrap' } : {}}>
                  {typeof stat2Count === 'number' && stat2Count > 0 ? count2 : stat2Val}
                </span>
                <span className="info-grid-desc">{stat2Desc}</span>
              </div>
            </div>

            {/* Vertical Divider Left */}
            <div className="divider-line stat-divider-line"></div>

            {/* Center: Project Name Group */}
            <div className="stat-group stat-group-center">
              <div className="stat-project-title-wrap">
                <span className="info-grid-tag center-text-reveal" style={{ marginBottom: '8px' }}>{projectTag}</span>
                <span className="info-grid-val-large" style={{ display: 'block', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  {projectName}
                </span>
              </div>
              <span className="info-grid-desc center-text-reveal" style={{ marginBottom: '6px' }}>
                {location}
              </span>
              {reraNo && reraNo.trim() && (
                <span className="info-grid-rera center-text-reveal" style={{ fontSize: '13px', letterSpacing: '0.06em', color: '#777777', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', fontWeight: '400' }}>
                  {reraNo}
                </span>
              )}
            </div>

            {/* Vertical Divider Right */}
            <div className="divider-line stat-divider-line"></div>

            {/* Right Stats Group (Bottom row on mobile) */}
            <div className="stat-group stat-group-right">
              {/* Stat 3: Configuration / Custom */}
              <div className="stat-block">
                <span className="info-grid-tag">{stat3Tag}</span>
                <span className="info-grid-val" style={String(stat3Val).length > 6 ? { fontSize: '24px', whiteSpace: 'nowrap' } : {}}>
                  {stat3Val}
                </span>
                <span className="info-grid-desc">{stat3Desc}</span>
              </div>

              {/* Stat 4: Size Range / Custom */}
              <div className="stat-block">
                <span className="info-grid-tag">{stat4Tag}</span>
                <span className="info-grid-val" style={String(stat4Val).length > 6 ? { fontSize: '24px', whiteSpace: 'nowrap' } : {}}>
                  {stat4Val}
                </span>
                <span className="info-grid-desc">{stat4Desc}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .grid-top-border {
          margin-bottom: 80px;
        }

        .project-details-grid-content {
          width: 100%;
          padding-bottom: 80px;
        }

        .project-details-grid-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .stat-group-left,
        .stat-group-right {
          display: flex;
          gap: 30px;
          flex: 1;
          justify-content: center;
          min-width: 200px;
        }

        .stat-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex: 1;
        }

        .stat-divider-line {
          width: 1px;
          height: 120px;
          background: rgba(0, 0, 0, 0.08);
          align-self: center;
          will-change: transform;
        }

        .stat-group-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex: 0 0 auto;
          padding: 0 30px;
          min-width: 280px;
        }

        .stat-project-title-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 16px;
        }

        @media (max-width: 900px) {
          .grid-top-border {
            margin-bottom: 48px;
          }

          .project-details-grid-content {
            padding-bottom: 50px;
          }

          .project-details-grid-wrapper {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 36px;
            width: 100%;
            margin: 0 auto;
          }

          .stat-group-left,
          .stat-group-right {
            width: 100%;
            max-width: 460px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            min-width: 0;
            flex: none;
          }

          .stat-group-center {
            width: 100%;
            max-width: 460px;
            padding: 0;
            min-width: 0;
            margin: 0 auto;
            flex: none;
          }

          .stat-divider-line {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
