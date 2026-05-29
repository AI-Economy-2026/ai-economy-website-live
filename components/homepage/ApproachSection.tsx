import { type ReactNode } from 'react';
import { homepageApproachIntro, homepageApproachSteps } from '@/content/homepage';

function DiscoverIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
      <circle cx="24" cy="24" r="21" stroke="#004AAD" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2" fill="#004AAD" />
      <path d="M20 28L16 32l12-12-4 8-4 0z" fill="#004AAD" fillOpacity="0.15" stroke="#004AAD" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M28 20l4-4-12 12 4-8h4z" fill="#004AAD" fillOpacity="0.08" stroke="#004AAD" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="24" y1="3" x2="24" y2="7" stroke="#004AAD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="41" x2="24" y2="45" stroke="#004AAD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="24" x2="7" y2="24" stroke="#004AAD" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="41" y1="24" x2="45" y2="24" stroke="#004AAD" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TrainIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
      <rect x="4" y="36" width="8" height="8" rx="1.5" stroke="#00a878" strokeWidth="1.5" fill="#00a878" fillOpacity="0.08" />
      <rect x="16" y="26" width="8" height="18" rx="1.5" stroke="#00a878" strokeWidth="1.5" fill="#00a878" fillOpacity="0.08" />
      <rect x="28" y="16" width="8" height="28" rx="1.5" stroke="#00a878" strokeWidth="1.5" fill="#00a878" fillOpacity="0.12" />
      <rect x="40" y="6" width="4" height="38" rx="1.5" stroke="#00a878" strokeWidth="1.5" fill="#00a878" fillOpacity="0.06" />
      <path d="M8 32L20 20l8 6L42 8" stroke="#00a878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="42" cy="8" r="2.5" fill="#00a878" />
    </svg>
  );
}

function ActivateIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
      <path d="M24 4C24 4 14 14 14 28c0 6 4 12 10 16 6-4 10-10 10-16C34 14 24 4 24 4z" stroke="#E8890C" strokeWidth="1.5" strokeLinejoin="round" fill="#E8890C" fillOpacity="0.08" />
      <circle cx="24" cy="26" r="5" stroke="#E8890C" strokeWidth="1.5" fill="#E8890C" fillOpacity="0.12" />
      <circle cx="24" cy="26" r="2" fill="#E8890C" />
      <path d="M18 40l-4 4" stroke="#E8890C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 40l4 4" stroke="#E8890C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 42v4" stroke="#E8890C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const iconsByTitle: Record<string, ReactNode> = {
  Discover: <DiscoverIcon />,
  Train: <TrainIcon />,
  Activate: <ActivateIcon />,
};

export function ApproachSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-12">
      <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#004AAD]">
        {homepageApproachIntro.eyebrow}
      </p>
      <h2 className="mb-4 text-[36px] font-bold tracking-[-0.04em] text-black">
        {homepageApproachIntro.title}
      </h2>
      <p className="mb-14 max-w-2xl text-[15px] leading-7 text-[#86868B]">
        {homepageApproachIntro.body}
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {homepageApproachSteps.map((step) => (
          <div key={step.title} className="rounded-2xl bg-[#F5F5F7] p-8">
            <div className="mb-6">{iconsByTitle[step.title]}</div>
            <h3 className="mb-1 text-[28px] font-bold tracking-tight text-black">{step.title}</h3>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#004AAD]">{step.sub}</p>
            <p className="mb-5 text-[14px] leading-7 text-[#86868B]">{step.body}</p>
            <div className="flex flex-wrap gap-2">
              {step.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-black">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
