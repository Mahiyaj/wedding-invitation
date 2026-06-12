import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const goto = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const links = [
    { id: 'couple',    label: 'The Couple',  si: 'යුවල' },
    { id: 'countdown', label: 'Countdown',   si: 'දිනය' },
    { id: 'events',    label: 'Ceremony',    si: 'උත්සව' },
    { id: 'gallery',   label: 'Gallery',     si: 'ෆොටෝ' },
    { id: 'location',  label: 'Venue',       si: 'ස්ථානය' },
    { id: 'rsvp',      label: 'RSVP',        si: 'ආරාධනා' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo" onClick={() => goto('hero')}>
        J <span style={{ fontStyle: 'italic', color: 'var(--burgundy)' }}>&</span> D
      </a>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.id}>
            <a href={`#${l.id}`} onClick={e => { e.preventDefault(); goto(l.id); }}
              id={`nav-${l.id}`}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span style={open ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}} />
        <span style={open ? { opacity: 0, transform: 'translateX(-8px)' } : {}} />
        <span style={open ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}} />
      </button>
    </nav>
  );
};

export default Navbar;
