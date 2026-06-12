import { useRef, useCallback } from 'react';

/**
 * 3D tilt effect hook - attach to any card element
 * Returns { ref, onMouseMove, onMouseLeave }
 */
export const useTilt = (intensity = 8) => {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    el.style.transform = `
      perspective(800px)
      rotateY(${x * intensity}deg)
      rotateX(${-y * intensity}deg)
      translateY(-6px)
      scale(1.02)
    `;
    // Shine overlay
    const shine = el.querySelector('.tilt-shine');
    if (shine) {
      shine.style.opacity = '1';
      shine.style.background = `
        radial-gradient(circle at ${(x + 1) * 50}% ${(y + 1) * 50}%,
          rgba(255,255,255,0.12) 0%,
          transparent 60%
        )
      `;
    }
  }, [intensity]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)';
    el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    const shine = el.querySelector('.tilt-shine');
    if (shine) shine.style.opacity = '0';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
};

/**
 * Parallax mouse tracking hook for hero/bg elements
 */
export const useParallax = (depth = 0.02) => {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) * depth;
    const dy = (e.clientY - cy) * depth;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
    el.style.transition = 'transform 0.1s linear';
  }, [depth]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
    el.style.transition = 'transform 0.8s ease';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
};
