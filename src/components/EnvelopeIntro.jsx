import { useState, useEffect } from 'react';

const EnvelopeIntro = ({ onOpen }) => {
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const p = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animDelay: `${Math.random() * 7}s`,
      animDur: `${6 + Math.random() * 5}s`,
      size: `${5 + Math.random() * 7}px`,
      opacity: 0.2 + Math.random() * 0.35,
    }));
    setPetals(p);
  }, []);

  const handleClick = () => {
    if (opened || leaving) return;
    setOpened(true);
    setTimeout(() => {
      setLeaving(true);
      setTimeout(() => onOpen(), 700);
    }, 1100);
  };

  return (
    <div className={`ei-root ${leaving ? 'ei-leaving' : ''}`}>

      {/* Petals */}
      {petals.map(p => (
        <div key={p.id} className="ei-petal" style={{
          left: p.left, width: p.size,
          height: `calc(${p.size} * 1.7)`,
          animationDelay: p.animDelay,
          animationDuration: p.animDur,
          opacity: p.opacity,
        }} />
      ))}

      {/* Soft vignette edges */}
      <div className="ei-vignette" />

      {/* Corner ornaments */}
      {['tl','tr','bl','br'].map(pos => (
        <div key={pos} className={`ei-corner ei-corner--${pos}`}>
          <svg viewBox="0 0 60 60" width="60" height="60" fill="none">
            <path d="M2,58 L2,12 Q2,2 12,2 L58,2" stroke="#B8955A" strokeWidth="1" fill="none" opacity="0.5"/>
            <circle cx="2" cy="2" r="2.5" fill="#B8955A" opacity="0.6"/>
            {[15,30,45].map((v,i) => (
              <rect key={i} x="1" y={v} width="2" height="2"
                fill="#B8955A" opacity="0.3"
                transform={`rotate(45 2 ${v+1})`}/>
            ))}
          </svg>
        </div>
      ))}

      {/* Top label */}
      <div className="ei-header">
        <div className="ei-header-line">
          <span className="ei-hline"/><span className="ei-htxt">A WEDDING INVITATION</span><span className="ei-hline"/>
        </div>
        <p className="ei-tagline">Unveil the moment</p>
      </div>

      {/* ══ ENVELOPE ══ */}
      <div
        className={`ei-env ${opened ? 'ei-env--open' : ''}`}
        onClick={handleClick}
        role="button" tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleClick()}
        aria-label="Open invitation"
      >
        {/* Envelope shadow */}
        <div className="ei-shadow"/>

        {/* Envelope body */}
        <div className="ei-body">

          {/* Back flap (bottom V) — always visible */}
          <div className="ei-back-flap"/>

          {/* Side panels */}
          <div className="ei-side ei-side--l"/>
          <div className="ei-side ei-side--r"/>

          {/* ── Inner card that peeks up when opened ── */}
          <div className={`ei-card ${opened ? 'ei-card--peek' : ''}`}>
            {/* Card lotus watermark */}
            <svg className="ei-card-lotus" viewBox="0 0 200 200">
              {[...Array(10)].map((_,i) => {
                const a = (i/10)*360;
                const r = a*Math.PI/180;
                const cx = 100+Math.cos(r)*55, cy = 100+Math.sin(r)*55;
                return <ellipse key={i} cx={cx} cy={cy} rx="9" ry="22"
                  fill="#D4A0A8" opacity="0.25"
                  transform={`rotate(${a+90} ${cx} ${cy})`}/>;
              })}
              <circle cx="100" cy="100" r="12" fill="#D4A0A8" opacity="0.2"/>
            </svg>

            <div className="ei-card-top">
              <span className="ei-card-label">THE HAPPY COUPLE</span>
              <div className="ei-card-ornline">
                <span/><span className="ei-card-diamond"/><span/>
              </div>
            </div>

            <div className="ei-card-names">Janani <em>&amp;</em> Denuwan</div>
            <div className="ei-card-names-si">ජනනී &amp; දෙනුවන්</div>

            <div className="ei-card-date">
              <span className="ei-card-label" style={{fontSize:'0.5rem'}}>AUGUST 2026 &nbsp;•&nbsp; COLOMBO</span>
            </div>
          </div>

          {/* Front flap (top V that lifts open) */}
          <div className={`ei-front-flap ${opened ? 'ei-front-flap--open' : ''}`}>
            {/* Flap inner crease line */}
            <div className="ei-flap-crease"/>
          </div>

          {/* Wax seal */}
          <div className={`ei-seal ${opened ? 'ei-seal--up' : ''}`}>
            <div className="ei-seal-ring">
              {/* Decorative petals around seal */}
              <svg className="ei-seal-deco" viewBox="0 0 80 80">
                {[...Array(8)].map((_,i) => {
                  const a = (i/8)*360;
                  const r2 = a*Math.PI/180;
                  return <ellipse key={i}
                    cx={40+Math.cos(r2)*30} cy={40+Math.sin(r2)*30}
                    rx="3.5" ry="8"
                    fill="#B8955A" opacity="0.3"
                    transform={`rotate(${a+90} ${40+Math.cos(r2)*30} ${40+Math.sin(r2)*30})`}/>;
                })}
              </svg>
              <div className="ei-seal-face">
                <span className="ei-seal-initials">J&thinsp;•&thinsp;D</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <p className={`ei-cta ${opened ? 'ei-cta--hide' : ''}`}>TOUCH TO UNVEIL</p>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@400;600&family=Cormorant+Garamond:ital,wght@0,400;1,400&family=Noto+Sans+Sinhala:wght@300;400&display=swap');

        /* ── Root ── */
        .ei-root {
          position: fixed; inset: 0; z-index: 9999;
          background: #FAF0E6;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.9rem; overflow: hidden;
          transition: opacity 0.8s ease, visibility 0.8s ease;
        }
        .ei-leaving { opacity: 0; visibility: hidden; }

        /* Vignette */
        .ei-vignette {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at center,
            transparent 40%,
            rgba(237,213,194,0.55) 75%,
            rgba(221,192,165,0.4) 100%);
        }

        /* Petals */
        .ei-petal {
          position: absolute; top: -20px;
          border-radius: 50% 0 50% 0;
          background: rgba(212,160,168,0.5);
          animation: eiPetal linear infinite;
          pointer-events: none;
        }
        @keyframes eiPetal {
          0%   { transform: translateY(-20px) rotate(0deg) translateX(0); opacity:0; }
          5%   { opacity: 1; }
          95%  { opacity: 0.4; }
          100% { transform: translateY(110vh) rotate(500deg) translateX(60px); opacity:0; }
        }

        /* Corners */
        .ei-corner {
          position: absolute; pointer-events: none;
        }
        .ei-corner--tl { top: 10px; left: 10px; }
        .ei-corner--tr { top: 10px; right: 10px; transform: scaleX(-1); }
        .ei-corner--bl { bottom: 10px; left: 10px; transform: scaleY(-1); }
        .ei-corner--br { bottom: 10px; right: 10px; transform: scale(-1); }

        /* Header */
        .ei-header {
          text-align: center;
          animation: eiFadeUp 1s ease 0.3s both;
        }
        .ei-header-line {
          display: flex; align-items: center; gap: 0.7rem; justify-content: center;
        }
        .ei-hline {
          display: block; width: 45px; height: 1px;
          background: linear-gradient(90deg, transparent, #B8955A);
          opacity: 0.6;
        }
        .ei-header-line .ei-hline:last-child {
          background: linear-gradient(90deg, #B8955A, transparent);
        }
        .ei-htxt {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem; letter-spacing: 0.3em;
          color: #B8955A;
        }
        .ei-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-size: 1.05rem;
          color: rgba(107,58,42,0.55);
          margin: 0.3rem 0 0; letter-spacing: 0.03em;
        }

        /* ── Envelope wrapper ── */
        .ei-env {
          position: relative;
          width: min(400px, 90vw);
          cursor: pointer;
          animation: eiFadeUp 1s ease 0.6s both;
          perspective: 1000px;
        }
        .ei-env:hover .ei-body { transform: translateY(-4px); }
        .ei-env:hover .ei-shadow { transform: translateY(6px) scaleX(0.96); opacity: 0.18; }

        /* Envelope shadow */
        .ei-shadow {
          position: absolute;
          bottom: -12px; left: 5%; right: 5%;
          height: 24px; border-radius: 50%;
          background: rgba(125,25,53,0.25);
          filter: blur(10px);
          transition: all 0.35s ease;
          opacity: 0.22;
        }

        /* Body */
        .ei-body {
          position: relative;
          width: 100%; padding-bottom: 62%;
          transition: transform 0.35s ease;
        }

        /* Back flap — bottom V inside */
        .ei-back-flap {
          position: absolute; inset: 0;
          background: linear-gradient(175deg, #EDD5B0 0%, #DFC090 50%, #E8CC9A 100%);
          border-radius: 6px;
          border: 1.5px solid rgba(184,149,90,0.4);
          box-shadow:
            inset 0 0 30px rgba(184,149,90,0.1),
            0 8px 30px rgba(125,25,53,0.12);
        }

        /* Side panels (left and right triangles create depth) */
        .ei-side {
          position: absolute; bottom: 0;
          width: 0; height: 0; border-style: solid;
        }
        .ei-side--l {
          left: 0;
          border-width: 0 0 calc(min(400px,90vw) * 0.62) calc(min(400px,90vw) * 0.5);
          border-color: transparent transparent #D4B07A transparent;
          border-radius: 0 0 0 6px;
        }
        .ei-side--r {
          right: 0;
          border-width: 0 calc(min(400px,90vw) * 0.5) calc(min(400px,90vw) * 0.62) 0;
          border-color: transparent #D4B07A transparent transparent;
          border-radius: 0 0 6px 0;
        }

        /* ── Inner invitation card ── */
        .ei-card {
          position: absolute;
          left: 12%; right: 12%;
          bottom: 8%;
          height: 70%;
          background: linear-gradient(160deg, #FFFDF9 0%, #FAF0E6 100%);
          border: 1px solid rgba(184,149,90,0.3);
          border-radius: 3px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0.25rem; padding: 0.8rem 1rem;
          z-index: 2;
          box-shadow: 0 2px 12px rgba(125,25,53,0.08);
          transition: transform 0.9s cubic-bezier(0.34,1.3,0.64,1);
          overflow: hidden;
        }
        .ei-card--peek {
          transform: translateY(-55%);
        }

        /* Card lotus bg */
        .ei-card-lotus {
          position: absolute; opacity: 1;
          width: 80%; height: auto;
          pointer-events: none;
        }

        .ei-card-top {
          display: flex; flex-direction: column;
          align-items: center; gap: 0.25rem;
          position: relative; z-index: 1;
        }
        .ei-card-label {
          font-family: 'Cinzel', serif;
          font-size: 0.45rem; letter-spacing: 0.25em;
          color: #B8955A;
        }
        .ei-card-ornline {
          display: flex; align-items: center; gap: 0.4rem;
        }
        .ei-card-ornline span:first-child,
        .ei-card-ornline span:last-child {
          display: block; width: 25px; height: 0.5px;
          background: linear-gradient(90deg, transparent, rgba(184,149,90,0.5), transparent);
        }
        .ei-card-diamond {
          display: block !important;
          width: 4px !important; height: 4px !important;
          background: rgba(184,149,90,0.6) !important;
          transform: rotate(45deg) !important;
        }

        .ei-card-names {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(1.4rem, 6vw, 2rem);
          color: #3D1A0E;
          line-height: 1.1;
          position: relative; z-index: 1;
          text-align: center;
        }
        .ei-card-names em {
          font-style: italic; color: #7D1935;
        }
        .ei-card-names-si {
          font-family: 'Noto Sans Sinhala', sans-serif;
          font-size: 0.65rem;
          color: rgba(125,25,53,0.6);
          position: relative; z-index: 1;
        }
        .ei-card-date {
          position: relative; z-index: 1;
          margin-top: 0.15rem;
        }

        /* ── Front flap ── */
        .ei-front-flap {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 0;
          border-left: calc(min(400px,90vw) / 2) solid transparent;
          border-right: calc(min(400px,90vw) / 2) solid transparent;
          border-top: calc(min(400px,90vw) * 0.345) solid #E8CC9A;
          transform-origin: top center;
          transition: transform 0.9s cubic-bezier(0.4,0,0.2,1);
          z-index: 6;
          filter: drop-shadow(0 3px 6px rgba(125,25,53,0.1));
        }
        .ei-front-flap--open {
          transform: rotateX(180deg);
        }
        /* Flap crease line */
        .ei-flap-crease {
          position: absolute;
          top: 100%; left: -50vw; right: -50vw;
          height: 1px;
          background: rgba(184,149,90,0.25);
          transform: translateY(-100%);
        }

        /* ── Wax Seal ── */
        .ei-seal {
          position: absolute;
          top: 43%; left: 50%;
          transform: translate(-50%, -50%);
          z-index: 8;
          transition: transform 0.5s ease, opacity 0.4s ease;
        }
        .ei-seal--up {
          transform: translate(-50%, -50%) translateY(-20px) scale(0.7);
          opacity: 0;
        }
        .ei-seal-ring {
          position: relative;
          width: 62px; height: 62px;
          display: flex; align-items: center; justify-content: center;
        }
        .ei-seal-deco {
          position: absolute; inset: -9px;
          width: calc(100% + 18px); height: calc(100% + 18px);
          pointer-events: none;
        }
        .ei-seal-face {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: radial-gradient(circle at 38% 32%, #A0253A 0%, #5C1028 70%);
          border: 2px solid rgba(201,169,110,0.7);
          box-shadow:
            0 4px 16px rgba(0,0,0,0.25),
            inset 0 1px 0 rgba(255,255,255,0.12),
            inset 0 -1px 0 rgba(0,0,0,0.2);
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .ei-seal-face::before {
          content: '';
          position: absolute; inset: 4px;
          border-radius: 50%;
          border: 0.5px solid rgba(201,169,110,0.35);
        }
        .ei-seal-initials {
          font-family: 'Cinzel', serif;
          font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.05em;
          color: rgba(201,169,110,0.95);
        }

        /* CTA */
        .ei-cta {
          font-family: 'Cinzel', serif;
          font-size: 0.55rem; letter-spacing: 0.4em;
          color: #B8955A;
          animation: eiFadeUp 1s ease 1s both, eiPulse 2.5s ease-in-out 2s infinite;
          margin: 0.3rem 0 0;
          transition: opacity 0.3s ease;
        }
        .ei-cta--hide { opacity: 0; pointer-events: none; }

        @keyframes eiFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes eiPulse {
          0%,100% { opacity: 0.45; }
          50%      { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default EnvelopeIntro;
