export function MeetSarahVideo() {
  return (
    <div className="w-full max-w-[340px]">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#004AAD]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#004AAD]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004AAD] animate-pulse" />
          Sarah&apos;s Digital Twin
        </span>
      </div>
      <div className="overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.15)]">
        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
          <iframe
            src="https://app.heygen.com/embeds/904df39b333643d3979bed5113365fa9?autoplay=1"
            title="Sarah's Digital Twin"
            frameBorder="0"
            allow="encrypted-media; fullscreen; autoplay;"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {['AI Trainer', 'Consultant', 'Founder', 'Speaker', 'Podcast Host'].map((role) => (
          <span key={role} className="rounded-full bg-[#F5F5F7] px-3.5 py-1.5 text-xs font-semibold text-black">
            {role}
          </span>
        ))}
      </div>
    </div>
  );
}
