import { useEffect, useRef, useState } from 'react';

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Lotus petals 3D rotating around center
    const drawLotusPetal = (cx, cy, angle, radius, size, alpha, hue) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
      ctx.rotate(angle + Math.PI / 2);

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      gradient.addColorStop(0, `hsla(${hue}, 70%, 85%, 1)`);
      gradient.addColorStop(0.5, `hsla(${hue}, 60%, 65%, 0.8)`);
      gradient.addColorStop(1, `hsla(${hue}, 50%, 40%, 0)`);

      ctx.beginPath();
      ctx.ellipse(0, -size / 2, size * 0.4, size * 0.7, 0, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
    };

    // Mandala rings
    const drawMandalaRing = (cx, cy, radius, petals, rotation, alpha, color) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.8;

      for (let i = 0; i < petals; i++) {
        const angle = (i / petals) * Math.PI * 2 + rotation;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.arc(x, y, radius * 0.15, 0, Math.PI * 2);
        ctx.stroke();

        // Connecting lines
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Background glow
      const bgGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, canvas.height * 0.7);
      bgGrad.addColorStop(0, 'rgba(139, 26, 26, 0.08)');
      bgGrad.addColorStop(0.5, 'rgba(201, 169, 110, 0.04)');
      bgGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Mandala rings - rotating
      drawMandalaRing(cx, cy, 80, 8, time * 0.5, 0.15, '#C9A96E');
      drawMandalaRing(cx, cy, 140, 12, -time * 0.3, 0.12, '#C9A96E');
      drawMandalaRing(cx, cy, 200, 16, time * 0.2, 0.1, '#8B1A1A');
      drawMandalaRing(cx, cy, 260, 20, -time * 0.15, 0.08, '#C9A96E');

      // Inner lotus petals
      const innerPetals = 8;
      for (let i = 0; i < innerPetals; i++) {
        const angle = (i / innerPetals) * Math.PI * 2 + time * 0.3;
        const pHue = i % 2 === 0 ? 35 : 350;
        drawLotusPetal(cx, cy, angle, 60, 45, 0.35, pHue);
      }

      // Middle lotus petals
      const midPetals = 12;
      for (let i = 0; i < midPetals; i++) {
        const angle = (i / midPetals) * Math.PI * 2 - time * 0.2;
        const pHue = i % 3 === 0 ? 45 : i % 3 === 1 ? 15 : 350;
        drawLotusPetal(cx, cy, angle, 110, 55, 0.25, pHue);
      }

      // Outer petals
      const outerPetals = 16;
      for (let i = 0; i < outerPetals; i++) {
        const angle = (i / outerPetals) * Math.PI * 2 + time * 0.1;
        drawLotusPetal(cx, cy, angle, 165, 40, 0.15, 35);
      }

      // Center glow
      const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
      centerGrad.addColorStop(0, 'rgba(201, 169, 110, 0.6)');
      centerGrad.addColorStop(0.5, 'rgba(201, 169, 110, 0.2)');
      centerGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = centerGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 50, 0, Math.PI * 2);
      ctx.fill();

      // Floating mini dots orbiting
      for (let i = 0; i < 24; i++) {
        const orbitAngle = (i / 24) * Math.PI * 2 + time * 0.4;
        const orbitR = 230 + Math.sin(time * 2 + i) * 15;
        const dotX = cx + Math.cos(orbitAngle) * orbitR;
        const dotY = cy + Math.sin(orbitAngle) * orbitR;
        const dotAlpha = (Math.sin(time * 3 + i * 0.5) + 1) / 2 * 0.5 + 0.1;
        ctx.save();
        ctx.globalAlpha = dotAlpha;
        ctx.fillStyle = i % 3 === 0 ? '#C9A96E' : '#8B1A1A';
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default HeroCanvas;
