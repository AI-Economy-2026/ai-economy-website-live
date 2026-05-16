const VIDEO_SRC = '/ai-economy-video.mp4';
const POSTER_SRC = '/images/sarah_balmer.jpg';

export function MeetSarahVideo() {
  return (
    <div className="w-full max-w-[340px]">
      <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#86868B]">
        Sarah Balmer Digital Twin
      </p>
      <div className="overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.15)]">
        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
          <video
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
