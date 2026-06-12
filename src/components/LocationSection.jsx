/* LocationSection - Split layout with Google Maps iframe matching reference */

const LocationSection = () => {
  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9482193671326!2d79.84554147465706!3d6.927078619315083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2592a2e5a1bbb%3A0x4f8de6ea7b9f5d0a!2sGalle%20Face%20Hotel!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk';

  const mapsDirectUrl = 'https://maps.google.com/?q=Galle+Face+Hotel+Colombo';

  return (
    <section className="section" id="location" style={{ background: 'var(--blush)' }}>
      <div style={{ textAlign: 'center', marginBottom: '0' }}>
        <div className="section-label reveal">THE VENUE</div>
      </div>

      <div className="venue-layout">
        {/* Info side */}
        <div className="venue-info reveal-left">
          <h2 className="venue-name">
            Where We<br/><em>Celebrate</em>
          </h2>
          <div style={{ marginTop: '2rem' }}>
            <div className="venue-address">
              <span style={{ color: 'var(--burgundy)', fontSize: '1.1rem', flexShrink: 0 }}>📍</span>
              <div>
                <div style={{
                  fontFamily: 'var(--font-serif)', fontSize: '1.15rem',
                  color: 'var(--text-dark)', fontWeight: 500, marginBottom: '0.15rem'
                }}>
                  Galle Face Hotel
                </div>
                <div style={{
                  fontFamily: 'var(--font-caps)', fontSize: '0.58rem',
                  letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '0.4rem'
                }}>
                  COLOMBO, SRI LANKA
                </div>
                <div style={{
                  fontFamily: 'var(--font-sinhala)', fontSize: '0.82rem',
                  color: 'var(--text-light)', lineHeight: 1.7
                }}>
                  ගාලු මුව මාලිගය, කොළඹ<br/>
                  Sri Lanka's iconic heritage hotel
                </div>
              </div>
            </div>

            <div className="venue-quote">
              "A serene and elegant setting where we<br/>
              will begin our new chapter together."
            </div>

            {/* Details */}
            {[
              { icon: '⏰', title: 'Ceremony Time', si: 'ප.ව 09:30 – ප.ව 03:30', en: '09:30 AM – 03:30 PM' },
              { icon: '🚗', title: 'Parking', si: 'නොමිලේ නැවතීම', en: 'Complimentary valet parking' },
              { icon: '📞', title: 'Contact', si: 'Janani: +94 77 123 4567', en: 'Denuwan: +94 71 987 6543' },
            ].map((d, i) => (
              <div key={i} style={{
                display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                marginBottom: '1rem', padding: '0.75rem',
                background: 'var(--ivory)', borderRadius: '10px',
                border: 'var(--border-light)',
                transition: 'var(--transition)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(184,149,90,0.5)';
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(184,149,90,0.18)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              >
                <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '0.1rem' }}>{d.icon}</span>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-caps)', fontSize: '0.55rem',
                    letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '0.2rem'
                  }}>{d.title}</div>
                  <div style={{
                    fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: 'var(--text-dark)'
                  }}>{d.en}</div>
                  <div style={{
                    fontFamily: 'var(--font-sinhala)', fontSize: '0.78rem', color: 'var(--text-faint)'
                  }}>{d.si}</div>
                </div>
              </div>
            ))}

            <a href={mapsDirectUrl} target="_blank" rel="noopener noreferrer"
              className="venue-btn" id="venue-directions-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              OPEN LIVE LOCATION
            </a>
          </div>
        </div>

        {/* Map side */}
        <div className="venue-map reveal-right">
          <div className="venue-map-badge">
            <span style={{ marginRight: '0.4rem' }}>🗺️</span> LIVE MAP
          </div>
          <iframe
            src={mapsEmbedUrl}
            title="Galle Face Hotel Location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
