const Footer = () => (
  <footer className="footer">
    {/* Top lotus row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem', opacity: 0.4 }}>
      {['🌸','❁','✦','❁','🌸'].map((s, i) => (
        <span key={i} style={{ color: 'var(--gold-light)', fontSize: i === 2 ? '0.9rem' : '1rem' }}>{s}</span>
      ))}
    </div>

    <div className="footer-names">Janani &amp; Denuwan</div>
    <div className="footer-names-si">ජනනී &amp; දෙනුවන්</div>

    <div className="footer-quote">
      "Together is a wonderful place to be — in Sri Lankan tradition, in love, forever."
      <br/>
      <span style={{ fontFamily: 'var(--font-sinhala)', fontSize: '0.82rem' }}>
        "ශ්‍රී ලාංකීය සාම්ප්‍රදායික ශෛලිය — ආදරය — සදාකාලිකව"
      </span>
    </div>

    {/* Contact links */}
    <div style={{
      display: 'flex', gap: '1.5rem', justifyContent: 'center',
      flexWrap: 'wrap', marginBottom: '2rem'
    }}>
      {[
        { icon: '📞', label: 'Janani', href: 'tel:+94771234567' },
        { icon: '📞', label: 'Denuwan', href: 'tel:+94719876543' },
        { icon: '📧', label: 'Email', href: 'mailto:janani.denuwan2026@gmail.com' },
      ].map((c, i) => (
        <a key={i} href={c.href}
          id={`footer-link-${i}`}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            color: 'var(--gold-thin)', textDecoration: 'none',
            fontFamily: 'var(--font-caps)', fontSize: '0.6rem',
            letterSpacing: '0.15em', opacity: 0.65,
            transition: 'var(--transition)',
            padding: '0.4rem 0.8rem',
            border: '1px solid rgba(184,149,90,0.2)',
            borderRadius: '20px',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.borderColor = 'rgba(184,149,90,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '0.65'; e.currentTarget.style.borderColor = 'rgba(184,149,90,0.2)'; }}
        >
          {c.icon} {c.label}
        </a>
      ))}
    </div>

    <div className="footer-hash">
      #JananiAndDenuwan2026 &nbsp;·&nbsp; #ශ්‍රීලාංකීයවිවාහ &nbsp;·&nbsp; #PoruwaCeremony
    </div>

    <div className="footer-bottom">
      <div>✦ &nbsp; 14TH AUGUST 2026 &nbsp;·&nbsp; GALLE FACE HOTEL &nbsp;·&nbsp; COLOMBO, SRI LANKA &nbsp; ✦</div>
      <div style={{ marginTop: '0.5rem' }}>Made with ♡ for our special day</div>
    </div>
  </footer>
);

export default Footer;
