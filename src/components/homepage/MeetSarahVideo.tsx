import { useEffect, useRef } from 'react';

export function MeetSarahVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-[340px] overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.15)]">
      <video ref={videoRef} src={src} muted playsInline controls className="block w-full" />
    </div>
  );
}
