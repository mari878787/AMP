import React, { useRef, useEffect, useState } from 'react';

/**
 * ScrollReveal — wraps children and reveals them with an animation
 * when they scroll into view. Uses IntersectionObserver.
 *
 * Props:
 *   animation: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'slideUp'
 *   delay:     delay in seconds (e.g. 0.1)
 *   duration:  duration in seconds (default 0.7)
 *   threshold: how much must be visible (0–1, default 0.15)
 *   once:      only animate once (default true)
 *   className: extra classes
 *   style:     extra inline styles
 *   as:        wrapper element tag (default 'div')
 */
export default function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = 0.5,
  duration = 1.6,
  threshold = 0.1,
  rootMargin = '0px',
  once = false,
  className = '',
  style = {},
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isMounted = true;

    // Helper to check if element is inside or near viewport
    const checkViewportVisibility = () => {
      if (!el || !isMounted) return false;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight + 150 && rect.bottom > -150) {
        setVisible(true);
        return true;
      }
      return false;
    };

    // Immediate check on mount
    checkViewportVisibility();

    // Secondary checks to handle tab transitions and layout recalculations
    const timer1 = setTimeout(checkViewportVisibility, 50);
    const timer2 = setTimeout(checkViewportVisibility, 200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      isMounted = false;
      clearTimeout(timer1);
      clearTimeout(timer2);
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  // Slow down the transition for an elegant, cinematic luxury reveal
  const effectiveDuration = Math.max(duration * 1.5, 1.6);

  const animStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : getInitialTransform(animation),
    transition: visible
      ? `opacity ${effectiveDuration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${effectiveDuration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
      : `opacity 0.4s ease 0s, transform 0.4s ease 0s`,
    willChange: 'opacity, transform',
    ...style,
  };

  return (
    <Tag ref={ref} className={`sr ${className}`} style={animStyle} {...rest}>
      {children}
    </Tag>
  );
}

function getInitialTransform(animation) {
  if (animation === 'fadeIn') return 'none';
  // All animations strictly fadeUp with zero side movement
  return 'translateY(45px)';
}
