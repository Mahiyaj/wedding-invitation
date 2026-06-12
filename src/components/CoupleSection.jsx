/* CoupleSection - matching reference with illustration in center */

const CoupleSection = () => {
  return (
    <section className="section" id="couple" style={{ background: 'var(--cream)' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="section-label reveal">THE HAPPY COUPLE</div>
        <h2 className="section-title reveal">
          Janani <em>&</em> Denuwan
        </h2>
        <span className="section-title-si reveal">ජනනී &amp; දෙනුවන්</span>
        <div className="section-divider reveal">
          <div className="divider-line" />
          <span className="divider-flower">❁</span>
          <div className="divider-line" />
        </div>
      </div>

      <div className="couple-layout">
        {/* Groom */}
        <div className="person-card reveal-left">
          <div className="person-role">THE GROOM &nbsp;|&nbsp; <span style={{ fontFamily: 'var(--font-sinhala)', fontSize: '0.7rem' }}>මනාලයා</span></div>
          <div className="person-name-en">Denuwan</div>
          <span className="person-name-si">දෙනුවන්</span>
          <div style={{
            width: '40px', height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            margin: '0.75rem auto 0.75rem'
          }}/>
          <div className="person-parents">Son of Mr. &amp; Mrs. Perera</div>
          <span className="person-parents-si">පෙරේරා මහතා සහ මහත්මියගේ පුතණුවන්</span>

          {/* Heart below */}
          <div style={{
            marginTop: '1.5rem',
            color: 'var(--burgundy)',
            opacity: 0.35,
            fontSize: '1rem'
          }}>
            ♡
          </div>
        </div>

        {/* Center Illustration */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
          <div className="couple-illustration reveal">
            {/* Avatar photo */}
            <img
              src="/avatar.jpeg"
              alt="Janani & Denuwan"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                display: 'block',
              }}
            />
          </div>

          <span className="couple-heart-icon">♡</span>

          <div style={{
            fontFamily: 'var(--font-caps)',
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            color: 'var(--text-faint)',
            textAlign: 'center',
          }}>
            FOREVER BEGINS
          </div>
        </div>

        {/* Bride */}
        <div className="person-card reveal-right">
          <div className="person-role">THE BRIDE &nbsp;|&nbsp; <span style={{ fontFamily: 'var(--font-sinhala)', fontSize: '0.7rem' }}>මනාලිය</span></div>
          <div className="person-name-en">Janani</div>
          <span className="person-name-si">ජනනී</span>
          <div style={{
            width: '40px', height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            margin: '0.75rem auto 0.75rem'
          }}/>
          <div className="person-parents">Daughter of Mr. &amp; Mrs. Silva</div>
          <span className="person-parents-si">සිල්වා මහතා සහ මහත්මියගේ දියණිය</span>

          <div style={{
            marginTop: '1.5rem',
            color: 'var(--burgundy)',
            opacity: 0.35,
            fontSize: '1rem'
          }}>
            ♡
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
