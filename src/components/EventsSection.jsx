const EventsSection = () => {
  return (
    <section className="section arch-section" id="events" style={{ padding: '5rem 1rem 3rem' }}>
      {/* Zoomed Elegant Invitation Card Image Container */}
      <div 
        className="reveal" 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          maxWidth: '540px', // Zoomed size
          width: '100%',
        }}
      >
        <div 
          style={{
            width: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(125, 25, 53, 0.15), var(--shadow-card)',
            border: 'var(--border-gold)',
            transition: 'var(--transition-bounce)',
            backgroundColor: 'var(--ivory)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.03) translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 30px 65px rgba(125, 25, 53, 0.22), var(--shadow-hover)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(125, 25, 53, 0.15), var(--shadow-card)';
          }}
        >
          <img 
            src="/img_01.png" 
            alt="The Wedding Day - A Journey of Tradition & Grace" 
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
