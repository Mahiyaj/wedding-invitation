import { useState, useEffect } from 'react';

/* Decorative corner SVG */
const CornerOrnament = ({ className }) => (
  <div className={`corner-ornament ${className}`}>
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,170 L10,40 Q10,10 40,10 L170,10" stroke="#B8955A" strokeWidth="1" fill="none"/>
      <path d="M10,130 Q10,70 70,30" stroke="#B8955A" strokeWidth="0.5" fill="none" opacity="0.5"/>
      {/* Floral at corner */}
      {[0,45,90,135].map((a,i) => {
        const r = (a * Math.PI) / 180;
        return (
          <ellipse key={i}
            cx={10 + Math.cos(r)*18} cy={10 + Math.sin(r)*18}
            rx="5" ry="9"
            fill="#B8955A" opacity="0.5"
            transform={`rotate(${a+90}, ${10+Math.cos(r)*18}, ${10+Math.sin(r)*18})`}
          />
        );
      })}
      <circle cx="10" cy="10" r="4" fill="#B8955A" opacity="0.7"/>
      {/* Small diamonds along the L */}
      {[40, 80, 120].map((pos, i) => (
        <rect key={i} x={9} y={pos} width="2.5" height="2.5"
          fill="#B8955A" opacity="0.4" transform={`rotate(45 10.25 ${pos+1.25})`}/>
      ))}
      {[40, 80, 120].map((pos, i) => (
        <rect key={i} x={pos} y={9} width="2.5" height="2.5"
          fill="#B8955A" opacity="0.4" transform={`rotate(45 ${pos+1.25} 10.25)`}/>
      ))}
    </svg>
  </div>
);

/* Watermark SVG lotus */
const LotusWatermark = () => (
  <div className="hero-watermark">
    <svg viewBox="0 0 600 600" style={{ width: '70vmin', opacity: 0.25 }}>
      {[...Array(12)].map((_, i) => {
        const a = (i / 12) * 360;
        const r = (a * Math.PI) / 180;
        const cx = 300 + Math.cos(r) * 150;
        const cy = 300 + Math.sin(r) * 150;
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="28" ry="65"
            fill="#D4A0A8"
            transform={`rotate(${a + 90} ${cx} ${cy})`}
            opacity="0.6"
          />
        );
      })}
      {[...Array(8)].map((_, i) => {
        const a = (i / 8) * 360 + 15;
        const r = (a * Math.PI) / 180;
        const cx = 300 + Math.cos(r) * 85;
        const cy = 300 + Math.sin(r) * 85;
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="18" ry="45"
            fill="#D4A0A8"
            transform={`rotate(${a + 90} ${cx} ${cy})`}
            opacity="0.8"
          />
        );
      })}
      <circle cx="300" cy="300" r="30" fill="#D4A0A8" opacity="0.6"/>
      <circle cx="300" cy="300" r="200" stroke="#D4A0A8" strokeWidth="0.8" fill="none" opacity="0.4"/>
      <circle cx="300" cy="300" r="160" stroke="#D4A0A8" strokeWidth="0.5" fill="none" opacity="0.3"/>
    </svg>
  </div>
);

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      {/* Video Background */}
      <video
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Watermark */}
      <LotusWatermark />

      {/* Corner ornaments */}
      <CornerOrnament className="tl" />
      <CornerOrnament className="tr" />
      <CornerOrnament className="bl" />
      <CornerOrnament className="br" />

      {/* Side meta text */}
      <div className="hero-meta left">GALLE FACE HOTEL &nbsp;•&nbsp; COLOMBO</div>
      <div className="hero-meta right">SAVE THE DATE &nbsp;•&nbsp; AUGUST 2026</div>

      {/* Top label */}
      <div className="hero-top-line">
        <span className="hero-top-label">LOVELY WEDDING CEREMONY &nbsp;|&nbsp; ආදරණීය විවාහ මංගල උත්සවය</span>
      </div>

      {/* Heart icon */}
      <div className="hero-heart">🤍</div>

      {/* Main Names */}
      <h1 className="hero-names-en">
        Janani <em>&</em> Denuwan
      </h1>
      <span className="hero-names-si">ජනනී &amp; දෙනුවන්</span>

      {/* Divider */}
      <div className="hero-divider">
        <div className="hero-divider-line" />
        <div className="hero-divider-diamond" />
        <div className="hero-divider-line" />
      </div>

      {/* English invite */}
      <p className="hero-invite-text">
        Together with our families, we joyfully invite you<br/>to join us
      </p>

      {/* Sinhala invite */}
      <p className="hero-invite-si">
        අපගේ පවුල් වල සාමාජිකයින් සමග එක්ව, අපගේ විවාහ මංගල<br/>
        උත්සවය සඳහා අප ඔබව <strong>මහත් ගෞරවයෙන්</strong> ආරාධනා කර සිටිනවා.
      </p>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default HeroSection;
