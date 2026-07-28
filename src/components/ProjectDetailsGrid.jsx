import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailsGrid() {
  const containerRef = useRef(null);
  const countRef = useRef(null);
  const [count, setCount] = useState(0);

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

    // 3. Stagger reveal for the stat blocks (PROPERTY TYPE, CONFIG, COMMUNITY, STATUS)
    if (stats.length > 0) {
      tl.fromTo(stats,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
        '-=0.6'
      );
    }

    // 4. Stagger reveal letters of CRYSTAL MOONLIGHT
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

    // 6. Number Count Up for COMMUNITY (47)
    const communityObj = { val: 0 };
    tl.to(communityObj, {
      val: 47,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        setCount(Math.floor(communityObj.val));
      }
    }, '-=1');

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Animated Horizontal Border */}
        <div className="grid-top-border" style={{ height: '1px', background: 'rgba(0, 0, 0, 0.08)', width: '100%', marginBottom: '80px', willChange: 'transform' }}></div>
        
        <div style={{ width: '100%', paddingBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>

            {/* Left Stats Group */}
            <div style={{ display: 'flex', gap: '30px', flex: 1, justifyContent: 'center', minWidth: '200px' }}>
              {/* Stat 1 */}
              <div className="stat-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                <span className="info-grid-tag">PROPERTY TYPE</span>
                <span className="info-grid-val">PREMIUM</span>
                <span className="info-grid-desc">VILLAS</span>
              </div>

              {/* Stat 2 */}
              <div className="stat-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                <span className="info-grid-tag">CONFIGURATIONS</span>
                <span className="info-grid-val">3 & 4</span>
                <span className="info-grid-desc">BHK</span>
              </div>
            </div>

            {/* Vertical Divider Left */}
            <div className="divider-line" style={{ width: '1px', height: '120px', background: 'rgba(0, 0, 0, 0.08)', alignSelf: 'center', willChange: 'transform' }}></div>

            {/* Center Logo Group */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', padding: '0 40px', minWidth: '280px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
                <span className="info-grid-tag center-text-reveal" style={{ marginBottom: '8px' }}>PROJECT</span>
                <span className="info-grid-val-large" style={{ display: 'block', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  CRYSTAL MOONLIGHT
                </span>
              </div>
              <span className="info-grid-desc center-text-reveal">
                MEDAVAKKAM, CHENNAI
              </span>
            </div>

            {/* Vertical Divider Right */}
            <div className="divider-line" style={{ width: '1px', height: '120px', background: 'rgba(0, 0, 0, 0.08)', alignSelf: 'center', willChange: 'transform' }}></div>

            {/* Right Stats Group */}
            <div style={{ display: 'flex', gap: '30px', flex: 1, justifyContent: 'center', minWidth: '200px' }}>
              {/* Stat 3 */}
              <div className="stat-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                <span className="info-grid-tag">COMMUNITY</span>
                <span className="info-grid-val" ref={countRef}>
                  {count}
                </span>
                <span className="info-grid-desc">VILLAS</span>
              </div>

              {/* Stat 4 */}
              <div className="stat-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                <span className="info-grid-tag">STATUS</span>
                <span className="info-grid-val">ONGOING</span>
                <span className="info-grid-desc">PROJECT</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
