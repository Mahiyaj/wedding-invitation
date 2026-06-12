import { useState } from 'react';

const RSVPSection = () => {
  const [form, setForm] = useState({
    name: '', nameSi: '', phone: '', email: '',
    attending: 'yes', guests: '1', meal: 'veg', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section rsvp-bg" id="rsvp">
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌸</div>
          <h2 style={{
            fontFamily: 'var(--font-script)', fontSize: '3rem',
            color: 'var(--burgundy)', marginBottom: '0.75rem'
          }}>ස්තූතියි!</h2>
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            color: 'var(--text-mid)', fontSize: '1.1rem', lineHeight: 1.8,
            maxWidth: '450px', margin: '0 auto 0.75rem'
          }}>
            We're so glad you'll be joining us on our special day!
          </p>
          <p style={{
            fontFamily: 'var(--font-sinhala)', fontSize: '0.9rem',
            color: 'var(--text-light)', lineHeight: 1.9
          }}>
            ඔබේ සහභාගීත්වය සාදරයෙන් පිළිගනිමු 💌
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            {['🌸','🌺','🌸','🌺','🌸'].map((f,i) => (
              <span key={i} style={{ fontSize: '1.3rem', opacity: 0.7 }}>{f}</span>
            ))}
          </div>
          <button onClick={() => setSubmitted(false)} style={{
            marginTop: '2rem', padding: '0.6rem 1.5rem',
            background: 'transparent', border: 'var(--border-gold)',
            borderRadius: '8px', fontFamily: 'var(--font-sinhala)',
            fontSize: '0.85rem', color: 'var(--text-mid)', cursor: 'pointer',
            transition: 'var(--transition)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--ivory)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            ← ආපසු
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section rsvp-bg" id="rsvp">
      <div style={{ textAlign: 'center' }}>
        <div className="section-label reveal">KINDLY REPLY</div>
        <h2 className="section-title reveal">RSVP</h2>
        <span className="section-title-si reveal">ප්‍රතිචාර දක්වන්න</span>
        <div className="section-divider reveal">
          <div className="divider-line"/>
          <span className="divider-flower">💌</span>
          <div className="divider-line"/>
        </div>
        <p className="reveal" style={{
          fontFamily: 'var(--font-serif)', fontStyle: 'italic',
          color: 'var(--text-light)', fontSize: '0.95rem', marginTop: '0.5rem'
        }}>
          Please respond by <strong style={{ color: 'var(--burgundy)' }}>August 1st, 2026</strong>
        </p>
      </div>

      <div className="rsvp-card reveal">
        <span className="rsvp-header-icon">💌</span>
        <h3 className="rsvp-header-title">Confirm Your Attendance</h3>
        <span className="rsvp-header-sub">ඔබේ සහභාගීත්වය තහවුරු කරන්න</span>

        <form onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="f-name">FULL NAME</label>
              <input id="f-name" className="form-input" type="text"
                name="name" placeholder="Your full name"
                value={form.name} onChange={onChange} required/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="f-nameSi">නම (සිංහල)</label>
              <input id="f-nameSi" className="form-input" type="text"
                name="nameSi" placeholder="ඔබේ නම"
                value={form.nameSi} onChange={onChange}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="f-phone">PHONE NUMBER</label>
              <input id="f-phone" className="form-input" type="tel"
                name="phone" placeholder="+94 77 000 0000"
                value={form.phone} onChange={onChange} required/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="f-email">EMAIL</label>
              <input id="f-email" className="form-input" type="email"
                name="email" placeholder="your@email.com"
                value={form.email} onChange={onChange}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="f-attending">ATTENDING?</label>
              <select id="f-attending" className="form-select"
                name="attending" value={form.attending} onChange={onChange}>
                <option value="yes">✅ Yes, I'll be there!</option>
                <option value="no">❌ Sorry, can't make it</option>
                <option value="maybe">🤔 Maybe</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="f-guests">NO. OF GUESTS</label>
              <select id="f-guests" className="form-select"
                name="guests" value={form.guests} onChange={onChange}>
                {[1,2,3,4,5].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="f-meal">MEAL PREFERENCE</label>
            <select id="f-meal" className="form-select"
              name="meal" value={form.meal} onChange={onChange}>
              <option value="veg">🥗 Vegetarian / ශාකාහාරී</option>
              <option value="nonveg">🍗 Non-Vegetarian / මාංශාහාරී</option>
              <option value="vegan">🌱 Vegan</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="f-msg">YOUR BLESSING MESSAGE</label>
            <textarea id="f-msg" className="form-textarea"
              name="message" rows={3}
              placeholder="Share your blessings with us... ඔබේ ශුභ ආශීර්වාදය..."
              value={form.message} onChange={onChange}/>
          </div>

          <button type="submit" className="rsvp-btn" id="rsvp-submit-btn"
            disabled={loading}>
            {loading ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  width: '14px', height: '14px',
                  border: '2px solid rgba(245,230,216,0.3)',
                  borderTopColor: 'var(--blush)',
                  borderRadius: '50%', display: 'inline-block',
                  animation: 'spin 0.7s linear infinite',
                }}/>
                SENDING...
              </span>
            ) : 'CONFIRM RSVP · සහභාගීත්වය තහවුරු කරන්න'}
          </button>
        </form>

        {/* Deadline */}
        <div style={{
          marginTop: '1.5rem', textAlign: 'center', padding: '0.75rem',
          background: 'rgba(125,25,53,0.04)', borderRadius: '8px',
          border: '1px solid rgba(125,25,53,0.08)',
        }}>
          <p style={{
            fontFamily: 'var(--font-sinhala)', fontSize: '0.8rem',
            color: 'var(--text-faint)', lineHeight: 1.7,
          }}>
            ⚠️ කරුණාකර <strong style={{ color: 'var(--burgundy)' }}>2026 අගෝස්තු 01</strong> ට පෙර ප්‍රතිචාර දක්වන්න
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default RSVPSection;
