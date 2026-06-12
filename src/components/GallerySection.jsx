import { useState } from 'react';

const galleryData = [
  { emoji: '🌸', label: 'පොරොව', color: '#F5E6D8', accent: '#E8B4B8' },
  { emoji: '💍', label: 'ශ්‍රී ලාංකීය', color: '#EDD5C2', accent: '#D4A0A8' },
  { emoji: '🪷', label: 'නේකා', color: '#F0D8D0', accent: '#E8B4B8' },
  { emoji: '🌺', label: 'ආශීර්වාද', color: '#F5E6D8', accent: '#C9A0A8' },
  { emoji: '🌿', label: 'ශෛලිය', color: '#EDD5C2', accent: '#B8C4A8' },
];

const GallerySection = () => {
  const [hov, setHov] = useState(null);

  return (
    <section className="section" id="gallery" style={{ background: 'var(--cream)' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="section-label reveal">OUR MOMENTS</div>
        <h2 className="section-title reveal">
          Love in Every <em>Frame</em>
        </h2>
        <span className="section-title-si reveal">ශ්‍රී ලාංකීය ශෛලිය ● ඡායාරූප</span>
        <div className="section-divider reveal">
          <div className="divider-line"/>
          <span className="divider-flower">❁</span>
          <div className="divider-line"/>
        </div>
      </div>

      <div className="gallery-masonry reveal">
        {galleryData.map((item, i) => (
          <div
            key={i}
            className="gallery-item"
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}
            id={`gallery-${i}`}
            style={{ gridRow: i === 0 ? 'span 2' : 'span 1' }}
          >
            <div className="gallery-inner" style={{
              background: `radial-gradient(ellipse at center, ${item.accent}55 0%, ${item.color} 100%)`,
            }}>
              {/* Subtle floral watermark */}
              <svg style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12
              }} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                {[...Array(6)].map((_, j) => {
                  const a = (j / 6) * 360;
                  const r = (a * Math.PI) / 180;
                  const cx = 100 + Math.cos(r) * 55, cy = 100 + Math.sin(r) * 55;
                  return (
                    <ellipse key={j} cx={cx} cy={cy} rx="12" ry="28"
                      fill="#B8955A"
                      transform={`rotate(${a+90} ${cx} ${cy})`}
                    />
                  );
                })}
                <circle cx="100" cy="100" r="88" stroke="#B8955A" strokeWidth="0.5" fill="none"/>
              </svg>

              <span style={{
                fontSize: i === 0 ? '4.5rem' : '3rem',
                transition: 'all 0.45s cubic-bezier(0.34,1.56,0.64,1)',
                transform: hov === i ? 'scale(1.2) rotate(-8deg)' : 'scale(1)',
                display: 'block', position: 'relative', zIndex: 1,
              }}>{item.emoji}</span>
            </div>

            <div className="gallery-item-overlay">
              <div>
                <div className="gallery-item-label">{item.label}</div>
                <div style={{
                  width: '24px', height: '1px',
                  background: 'rgba(232,201,138,0.8)',
                  marginTop: '0.3rem'
                }}/>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative row */}
      <div className="reveal" style={{
        textAlign: 'center', marginTop: '2.5rem',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: '1.5rem',
        flexWrap: 'wrap',
      }}>
        <div style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          color: 'var(--text-faint)', fontSize: '0.9rem',
        }}>
          "Every picture tells our story"
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['🌸','🌺','🌸','🌺','🌸'].map((f,i) => (
            <span key={i} style={{
              fontSize: '1.1rem', opacity: 0.6,
              animation: `heartBeat ${1.5 + i*0.2}s ease-in-out infinite`,
              animationDelay: `${i*0.15}s`,
              display: 'inline-block',
            }}>{f}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
