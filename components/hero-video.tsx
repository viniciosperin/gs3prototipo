'use client';

import { useEffect, useRef } from 'react';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const slowPlayback = () => { video.playbackRate = 0.85; };
    slowPlayback();
    video.addEventListener('loadedmetadata', slowPlayback);
    return () => video.removeEventListener('loadedmetadata', slowPlayback);
  }, []);

  return <video ref={videoRef} autoPlay muted loop playsInline preload="auto" aria-label="Productores y paisaje agrícola al atardecer"><source src="/assets/hero.mp4" type="video/mp4" /></video>;
}
