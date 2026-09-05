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
  delay = 0,
  duration = 1.4,
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
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
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  // Slow down the transition duration for a smooth, luxury reveal
  const effectiveDuration = duration === 0.7 ? 1.4 : Math.max(duration * 1.4, 1.2);

  const animStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : getInitialTransform(animation),
    transition: `opacity ${effectiveDuration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${effectiveDuration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
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
  return 'translateY(36px)';
}
