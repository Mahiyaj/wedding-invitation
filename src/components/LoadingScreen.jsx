import { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinish }) => {
  const [gone, setGone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const prog = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(prog); return 100; }
        return p + (p < 70 ? 3 : p < 90 ? 1.5 : 0.8);
      });
    }, 40);

    const timer = setTimeout(() => {
      setGone(true);
      setTimeout(onFinish, 700);
    }, 2800);

    return () => { clearInterval(prog); clearTimeout(timer); };
  }, [onFinish]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'var(--cream)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
      transition: 'opacity 0.7s ease, visibility 0.7s ease',
      opacity: gone ? 0 : 1,
      visibility: gone ? 'hidden' : 'visible',
    }}>
      {/* Rotating lotus mandala */}
      <div style={{
        width: '110px', height: '110px', position: 'relative',
        animation: 'spin 5s linear infinite',
      }}>
        <svg viewBox="0 0 200 200" width="110" height="110">
          {/* Outer petals */}
          {[...Array(12)].map((_, i) => {
            const a = (i / 12) * 360;
            const r = (a * Math.PI) / 180;
            const cx = 100 + Math.cos(r) * 72;
            const cy = 100 + Math.sin(r) * 72;
            return (
              <ellipse key={i} cx={cx} cy={cy} rx="10" ry="22"
                fill={i % 2 === 0 ? '#E8B4B8' : '#D4A0A8'}
                transform={`rotate(${a+90} ${cx} ${cy})`}
                opacity="0.8"/>
            );
          })}
          {/* Inner petals */}
          {[...Array(8)].map((_, i) => {
            const a = (i / 8) * 360 + 22.5;
            const r = (a * Math.PI) / 180;
            const cx = 100 + Math.cos(r) * 42;
            const cy = 100 + Math.sin(r) * 42;
            return (
              <ellipse key={i} cx={cx} cy={cy} rx="7" ry="16"
                fill="#B8955A"
                transform={`rotate(${a+90} ${cx} ${cy})`}
                opacity="0.7"/>
            );
          })}
          {/* Rings */}
          <circle cx="100" cy="100" r="90" stroke="#B8955A" strokeWidth="0.5" fill="none" opacity="0.4"/>
          <circle cx="100" cy="100" r="60" stroke="#B8955A" strokeWidth="0.3" fill="none" opacity="0.3"/>
          {/* Center */}
          <circle cx="100" cy="100" r="18" fill="#B8955A" opacity="0.5"/>
          <circle cx="100" cy="100" r="10" fill="#D4956A" opacity="0.8"/>
        </svg>
      </div>

      {/* Names */}
      <div style={{
        fontFamily: 'var(--font-script)', fontSize: '2.2rem',
        color: 'var(--burgundy)', letterSpacing: '0.02em',
        textAlign: 'center', lineHeight: 1.2,
      }}>
        Janani <em style={{ fontStyle: 'italic' }}>&</em> Denuwan
      </div>

      <div style={{
        fontFamily: 'var(--font-sinhala)', fontSize: '0.85rem',
        color: 'var(--text-faint)', letterSpacing: '0.05em',
      }}>
        ශ්‍රී ලාංකීය සාම්ප්‍රදායික විවාහ
      </div>

      {/* Progress bar */}
      <div style={{
        width: '180px', height: '1.5px',
        background: 'rgba(184,149,90,0.15)', borderRadius: '2px', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--gold-thin), var(--burgundy), var(--gold-thin))',
          borderRadius: '2px', transition: 'width 0.1s linear',
        }}/>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
