import { useState, useEffect, useRef } from 'react';
import EnvelopeIntro    from './components/EnvelopeIntro';
import LoadingScreen    from './components/LoadingScreen';
import PetalCanvas      from './components/ParticleCanvas';
import Navbar           from './components/Navbar';
import MusicPlayer      from './components/MusicPlayer';
import HeroSection      from './components/HeroSection';
import CoupleSection    from './components/CoupleSection';
import CountdownSection from './components/CountdownSection';
import EventsSection    from './components/EventsSection';
import GallerySection   from './components/GallerySection';
import LocationSection  from './components/LocationSection';
import RSVPSection      from './components/RSVPSection';
import Footer           from './components/Footer';

function App() {
  /* 0 = envelope intro, 1 = loading, 2 = main site */
  const [phase, setPhase] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const musicRef = useRef(null);

  /* Called when user clicks the envelope */
  const handleEnvelopeOpen = () => {
    setPhase(1); // show loading screen
  };

  /* Called when loading screen finishes */
  const handleLoadingFinish = () => {
    setPhase(2);
    setLoaded(true);
    // Auto-play music — this runs right after a user gesture (envelope click)
    setTimeout(() => {
      musicRef.current?.play();
    }, 400);
  };

  /* Global scroll-reveal observer */
  useEffect(() => {
    if (!loaded) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [loaded]);

  return (
    <>
      {/* Phase 0: Envelope intro */}
      {phase === 0 && <EnvelopeIntro onOpen={handleEnvelopeOpen} />}

      {/* Phase 1: Loading screen */}
      {phase === 1 && <LoadingScreen onFinish={handleLoadingFinish} />}

      {/* Phase 2+: Main site (rendered but hidden until phase 2) */}
      {phase >= 1 && (
        <>
          {/* Thin page border frame */}
          <div className="page-frame" />

          {/* Falling petals */}
          <PetalCanvas />

          {/* Floating music player */}
          <MusicPlayer ref={musicRef} />

          {/* Navigation */}
          <Navbar />

          {/* Sections */}
          <main>
            <HeroSection />
            <CoupleSection />
            <CountdownSection />
            <EventsSection />
            <GallerySection />
            <LocationSection />
            <RSVPSection />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
