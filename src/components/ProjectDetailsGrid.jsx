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
      const obj1 = { val: 0 };
      tl.to(obj1, {
        val: stat1Count,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          setCount1(Math.floor(obj1.val));
        }
      }, '-=1');
    }

    // 7. Number Count Up for Stat 2 (e.g. Total Units)
    if (typeof stat2Count === 'number' && stat2Count > 0) {
      const obj2 = { val: 0 };
      tl.to(obj2, {
        val: stat2Count,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          setCount2(Math.floor(obj2.val));
        }
      }, '<');
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [stat1Count, stat2Count]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Animated Horizontal Border */}
        <div className="grid-top-border" style={{ height: '1px', background: 'rgba(0, 0, 0, 0.08)', width: '100%', marginBottom: '80px', willChange: 'transform' }}></div>
        
        <div style={{ width: '100%', paddingBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>

            {/* Left Stats Group */}
            <div style={{ display: 'flex', gap: '30px', flex: 1, justifyContent: 'center', minWidth: '200px' }}>
              {/* Stat 1: Site Extent */}
              <div className="stat-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                <span className="info-grid-tag">{stat1Tag}</span>
                <span className="info-grid-val" style={String(stat1Val).length > 6 ? { fontSize: '24px', whiteSpace: 'nowrap' } : {}}>
                  {typeof stat1Count === 'number' && stat1Count > 0 ? count1 : stat1Val}
                </span>
                <span className="info-grid-desc">{stat1Desc}</span>
              </div>

              {/* Stat 2: Total Units */}
              <div className="stat-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                <span className="info-grid-tag">{stat2Tag}</span>
                <span className="info-grid-val" style={String(stat2Val).length > 6 ? { fontSize: '24px', whiteSpace: 'nowrap' } : {}}>
                  {typeof stat2Count === 'number' && stat2Count > 0 ? count2 : stat2Val}
                </span>
                <span className="info-grid-desc">{stat2Desc}</span>
              </div>
            </div>

            {/* Vertical Divider Left */}
            <div className="divider-line" style={{ width: '1px', height: '120px', background: 'rgba(0, 0, 0, 0.08)', alignSelf: 'center', willChange: 'transform' }}></div>

            {/* Center: Project Name Group */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', padding: '0 30px', minWidth: '280px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px' }}>
                <span className="info-grid-tag center-text-reveal" style={{ marginBottom: '8px' }}>{projectTag}</span>
                <span className="info-grid-val-large" style={{ display: 'block', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  {projectName}
                </span>
              </div>
              <span className="info-grid-desc center-text-reveal" style={{ marginBottom: '6px' }}>
                {location}
              </span>
              <span className="info-grid-rera center-text-reveal" style={{ fontSize: '11px', letterSpacing: '0.06em', color: '#777777', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', fontWeight: '400' }}>
                {reraNo}
              </span>
            </div>

            {/* Vertical Divider Right */}
            <div className="divider-line" style={{ width: '1px', height: '120px', background: 'rgba(0, 0, 0, 0.08)', alignSelf: 'center', willChange: 'transform' }}></div>

            {/* Right Stats Group */}
            <div style={{ display: 'flex', gap: '30px', flex: 1, justifyContent: 'center', minWidth: '200px' }}>
              {/* Stat 3: Configuration / Custom */}
              <div className="stat-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                <span className="info-grid-tag">{stat3Tag}</span>
                <span className="info-grid-val" style={String(stat3Val).length > 6 ? { fontSize: '24px', whiteSpace: 'nowrap' } : {}}>
                  {stat3Val}
                </span>
                <span className="info-grid-desc">{stat3Desc}</span>
              </div>

              {/* Stat 4: Size Range / Custom */}
              <div className="stat-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
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
    </div>
  );
}
