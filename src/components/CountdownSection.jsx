import { useState, useEffect } from 'react';

const CountdownSection = () => {
  const target = new Date('2026-08-14T09:30:00');

  const calc = () => {
    const diff = target - new Date();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff / 3600000) % 24),
      m: Math.floor((diff / 60000) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };

  const [t, setT] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { val: t.d, label: 'DAYS', si: 'දින' },
    { val: t.h, label: 'HOURS', si: 'පැය' },
    { val: t.m, label: 'MINUTES', si: 'මිනිත්' },
    { val: t.s, label: 'SECONDS', si: 'තත්පර' },
  ];

  return (
    <section className="section countdown-bg" id="countdown">
      <div className="section-header" style={{ textAlign: 'center' }}>
        <div className="section-label reveal">THE FINAL COUNTDOWN</div>
        <h2 className="section-title reveal">
          Until We Say <em>"I Do"</em>
        </h2>
        <div className="section-divider reveal">
          <div className="divider-line" />
          <span className="divider-flower">✿</span>
          <div className="divider-line" />
        </div>
        <p className="reveal" style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          color: 'var(--text-light)', fontSize: '1rem', marginTop: '0.5rem'
        }}>
          Time is standing still as we eagerly await the moment our forever begins.
        </p>
      </div>

      <div className="countdown-grid">
        {units.map((u, i) => (
          <div key={i} className="countdown-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="countdown-num">{String(u.val).padStart(2, '0')}</span>
            <span className="countdown-unit">{u.label}</span>
            <span className="countdown-unit-si">{u.si}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountdownSection;
