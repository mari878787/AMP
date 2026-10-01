import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(ScrollTrigger, Observer);

const PROJECTS = [
  {
    id: 1,
    title: 'Pelican Grove',
    image: '/images/maia/1.png',
    link: '#',
  },
  {
    id: 2,
    title: '27 Summit',
    image: '/images/maia/2.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Mélange',
    image: '/images/maia/3.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Reserve 16',
    image: '/images/maia/4.png',
    link: '/crystal-moonlight-villa',
  },
];

export default function ClipPathProjects() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scoped selections matching CodePen
    const sections = gsap.utils.toArray('.obs-section', container);
    const images = gsap.utils.toArray('.bg', container);
    const outerWrappers = gsap.utils.toArray('.outer', container);
    const innerWrappers = gsap.utils.toArray('.inner', container);
    const wrap = gsap.utils.wrap(0, sections.length);
    
    let currentIndex = -1;
    let animating = false;
    let observerInstance;
    let scrollTriggerInstance;

    // Initial position setup matching the CodePen SCSS/JS
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });
    gsap.set(sections, { autoAlpha: 0, zIndex: 0 });

    function gotoSection(index, direction) {
      index = wrap(index); // make sure it's valid
      animating = true;
      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;
      let tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => {
          // Add 800ms cooldown to absorb trackpad scroll inertia
          setTimeout(() => {
            animating = false;
          }, 800);
        }
      });

      if (currentIndex >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      
      tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
          yPercent: i => i ? -100 * dFactor : 100 * dFactor
        }, { 
          yPercent: 0 
        }, 0)
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      // Character split stagger entrance matching CodePen SplitText chars animation
      const chars = sections[index].querySelectorAll('.char-span');
      if (chars.length > 0) {
        tl.fromTo(chars, { 
            autoAlpha: 0, 
            yPercent: 150 * dFactor
        }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: {
              each: 0.02,
              from: "random"
            }
          }, 0.2);
      }

      currentIndex = index;
    }

    // ScrollTrigger to pin the whole slide container section with large distance to prevent bypass
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=10000',
      pin: true,
      scrub: true,
      onEnter: () => {
        if (observerInstance) observerInstance.enable();
        if (window.lenis) window.lenis.stop(); // Freeze page scroll bar completely
      },
      onEnterBack: () => {
        if (observerInstance) observerInstance.enable();
        if (window.lenis) window.lenis.stop();
      },
      onLeave: () => {
        if (observerInstance) observerInstance.disable();
        if (window.lenis) window.lenis.start(); // Unfreeze page scroll bar
      },
      onLeaveBack: () => {
        if (observerInstance) observerInstance.disable();
        if (window.lenis) window.lenis.start();
      }
    });

    // Observer instance matching CodePen setup with Lenis page release integration
    observerInstance = Observer.create({
      target: container,
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      tolerance: 10,
      preventDefault: true,
      onDown: () => {
        if (animating) return;
        // Releasing scroll boundary check for page continuation
        if (currentIndex === sections.length - 1) {
          if (window.lenis) {
            window.lenis.start(); // Unlock scroll before scrolling away
            window.lenis.scrollTo('#testimonials', { duration: 1.2 });
          }
          return;
        }
        gotoSection(currentIndex + 1, 1);
      },
      onUp: () => {
        if (animating) return;
        // Releasing scroll boundary check for page continuation
        if (currentIndex === 0) {
          if (window.lenis) {
            window.lenis.start();
            window.lenis.scrollTo('#about', { duration: 1.2 });
          }
          return;
        }
        gotoSection(currentIndex - 1, -1);
      }
    });

    // Initialize first slide transition
    gotoSection(0, 1);

    return () => {
      if (observerInstance) observerInstance.kill();
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      if (window.lenis) window.lenis.start(); // Ensure scrollbar is unlocked on unmount
    };
  }, []);

  return (
    <section ref={containerRef} className="clip-projects-section" id="projects">
      <div className="clip-slides-wrapper">
        {PROJECTS.map((project) => (
          <section key={project.id} className="obs-section">
            <div className="outer">
              <div className="inner">
                <div 
                  className="bg" 
                  style={{ 
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.1) 100%), url(${project.image})` 
                  }}
                >
                  <h2 className="section-heading">
                    {project.title.split('').map((char, charIdx) => (
                      <span 
                        key={charIdx} 
                        className="char-span"
                        style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                      >
                        {char}
                      </span>
                    ))}
                  </h2>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <style>{`
        .clip-projects-section {
          position: relative;
          width: 100%;
          height: 100vh;
          background-color: #000;
          overflow: hidden;
          padding: 0;
          margin: 0;
        }

        .clip-slides-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* ── CodePen Fixed Section Stacking inside Container ── */
        .obs-section {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          visibility: hidden;
          overflow: hidden;
        }

        .outer,
        .inner {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
        }

        .bg {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          background-size: cover;
          background-position: center;
        }

        .section-heading {
          font-family: inherit;
          font-size: clamp(2rem, 6vw, 8rem);
          font-weight: 600;
          line-height: 1.2;
          text-align: center;
          margin-right: -0.5em;
          width: 90vw;
          max-width: 1200px;
          text-transform: none;
          color: #fff;
          z-index: 999;
        }

        .char-span {
          will-change: transform, opacity;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
