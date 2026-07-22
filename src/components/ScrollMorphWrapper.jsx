import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollMorphWrapper({ children }) {
  const containerRef = useRef(null);
  const morphTargetRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Set the initial state of the morphing container
      gsap.set(morphTargetRef.current, {
        width: '100%',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        margin: '0 auto',
        background: 'var(--color-bg-light)',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        boxShadow: '0 -30px 60px rgba(0,0,0,0.2)'
      });

      const hero = document.getElementById('hero');
      const tl = gsap.timeline({
        scrollTrigger: {
          start: 0, // Starts immediately on the very first pixel of scroll (scroll position = 0)
          end: () => window.innerHeight * 0.8, // Completes after scrolling 80% of viewport height
          scrub: true
        }
      });

      // Animate the Hero pushing back into the depth
      if (hero) {
        gsap.set(hero, { transformOrigin: 'center top' });
        tl.to(hero, {
          scale: 0.93,
          filter: 'blur(12px)',
          opacity: 0.4,
          ease: 'none'
        }, 0);
      }

      // Simultaneously animate the border radius flattening out
      tl.to(morphTargetRef.current, {
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        ease: 'none'
      }, 0);
    }, containerRef); // Scope to this component

    // Force scrolltrigger recalculation immediately on render
    ScrollTrigger.refresh();

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="scroll-morph-spacer" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        backgroundColor: 'transparent' // Transparent so the fixed Hero section shows through the sides!
      }}
    >
      <div 
        ref={morphTargetRef}
        className="scroll-morph-container"
      >
        {children}
      </div>
    </div>
  );
}
