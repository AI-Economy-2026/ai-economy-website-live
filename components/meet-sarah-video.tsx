'use client';

import { useEffect, useRef } from 'react';

export function MeetSarahVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.15)] max-w-[340px] w-full">
      <video
        ref={videoRef}
        src="/sarah-speaks-preview.mp4"
        muted
        playsInline
        controls
        className="w-full block"
      />
    </div>
  );
}
