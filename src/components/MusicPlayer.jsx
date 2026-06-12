import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

const MusicPlayer = forwardRef(({ autoPlay = false }, ref) => {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/song.mp3');
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'auto';
    audio.addEventListener('canplaythrough', () => setReady(true));
    audioRef.current = audio;
    return () => { audio.pause(); audio.src = ''; };
  }, []);

  /* Smooth volume fade */
  const fadeTo = (targetVol, duration = 800) => {
    const audio = audioRef.current;
    if (!audio) return;
    const start = audio.volume;
    const diff = targetVol - start;
    const steps = 30;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      audio.volume = Math.min(1, Math.max(0, start + diff * (step / steps)));
      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  /* Expose play() to parent via ref */
  useImperativeHandle(ref, () => ({
    play: async () => {
      const audio = audioRef.current;
      if (!audio || playing) return;
      try {
        audio.volume = 0;
        await audio.play();
        fadeTo(0.55);
        setPlaying(true);
      } catch (e) {
        console.warn('Autoplay blocked:', e);
      }
    }
  }));

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!playing) {
      try {
        audio.volume = 0;
        await audio.play();
        fadeTo(0.55);
        setPlaying(true);
      } catch (e) {
        console.warn('Autoplay blocked:', e);
      }
    } else {
      fadeTo(0, 600);
      setTimeout(() => audio.pause(), 650);
      setPlaying(false);
    }
  };

  return (
    <button
      className={`music-btn ${playing ? 'playing' : ''}`}
      onClick={toggle}
      title={playing ? 'සංගීතය නතර කරන්න' : 'සංගීතය ආරම්භ කරන්න'}
      id="music-toggle-btn"
      aria-label={playing ? 'Pause background music' : 'Play background music'}
    >
      {playing ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1"/>
          <rect x="14" y="4" width="4" height="16" rx="1"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5.14v14l11-7-11-7z"/>
        </svg>
      )}
      {playing && (
        <span className="music-waves" aria-hidden="true">
          <span/><span/><span/>
        </span>
      )}
    </button>
  );
});

MusicPlayer.displayName = 'MusicPlayer';
export default MusicPlayer;
