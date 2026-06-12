import { useEffect, useRef } from 'react';

const PETAL_COLORS = [
  '#E8B4B8', '#F2C4CE', '#D4A0A8', '#ECBFC8',
  '#F0C8D0', '#DDA8B0', '#F5D0D8', '#E0B0BC',
];

const PetalCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const petals = [];
    const TOTAL = 22;

    const createPetal = () => {
      const el = document.createElement('div');
      el.className = 'petal';

      const size = Math.random() * 12 + 6;
      const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
      const left = Math.random() * 100;
      const duration = Math.random() * 12 + 10;
      const delay = Math.random() * 15;

      el.innerHTML = `
        <svg width="${size * 1.6}" height="${size * 2}" viewBox="0 0 16 20">
          <ellipse cx="8" cy="11" rx="6" ry="9"
            fill="${color}"
            opacity="${Math.random() * 0.4 + 0.5}"
            transform="rotate(${Math.random() * 30 - 15} 8 11)"
          />
        </svg>
      `;
      el.style.left = `${left}%`;
      el.style.animationDuration = `${duration}s`;
      el.style.animationDelay = `-${delay}s`;
      el.style.animationTimingFunction = `cubic-bezier(${Math.random() * 0.3},${Math.random()},${Math.random() * 0.3 + 0.7},1)`;

      container.appendChild(el);
      petals.push(el);
      return el;
    };

    for (let i = 0; i < TOTAL; i++) createPetal();

    return () => {
      petals.forEach(p => p.remove());
    };
  }, []);

  return <div ref={containerRef} className="petal-container" />;
};

export default PetalCanvas;
