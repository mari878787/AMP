import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CenterMorphReveal({ children }) {
  const containerRef = useRef(null);
  const morphTargetRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Set the initial state of the morphing container (narrow center pill)
      gsap.set(morphTargetRef.current, {
        width: '40%',
        borderRadius: '60px',
        margin: '0 auto',
        background: 'var(--color-bg-light)',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        boxShadow: '0 -20px 50px rgba(0,0,0,0.1)'
      });

      // Create the scroll-triggered animation
      ScrollTrigger.create({
        start: 0, // Starts immediately on the very first pixel of scroll (scroll position = 0)
        end: () => window.innerHeight * 0.8, // Completes after scrolling 80% of viewport height
        scrub: true,          // Instant scrubbing
        animation: gsap.to(morphTargetRef.current, {
          width: '100%',
          borderRadius: '0px',
          ease: 'none'
        })
      });
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
