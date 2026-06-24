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
  duration = 0.7,
  threshold = 0.15,
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
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const animStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : getInitialTransform(animation),
    transition: `opacity ${duration}s var(--ease-luxury) ${delay}s, transform ${duration}s var(--ease-luxury) ${delay}s`,
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
  switch (animation) {
    case 'fadeUp':    return 'translateY(40px)';
    case 'fadeDown':  return 'translateY(-40px)';
    case 'fadeLeft':  return 'translateX(-40px)';
    case 'fadeRight': return 'translateX(40px)';
    case 'scaleIn':  return 'scale(0.92)';
    case 'slideUp':  return 'translateY(60px)';
    case 'fadeIn':
    default:          return 'none';
  }
}
