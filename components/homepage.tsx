import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { featuredCards } from '@/lib/products';
import { SiteFooter } from '@/components/site-footer';

function DiscoverIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
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
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
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
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <path d="M24 4C24 4 14 14 14 28c0 6 4 12 10 16 6-4 10-10 10-16C34 14 24 4 24 4z" stroke="#E8890C" strokeWidth="1.5" strokeLinejoin="round" fill="#E8890C" fillOpacity="0.08" />
      <circle cx="24" cy="26" r="5" stroke="#E8890C" strokeWidth="1.5" fill="#E8890C" fillOpacity="0.12" />
      <circle cx="24" cy="26" r="2" fill="#E8890C" />
      <path d="M18 40l-4 4" stroke="#E8890C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 40l4 4" stroke="#E8890C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 42v4" stroke="#E8890C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const stats = [
  {
    value: '78%',
    label: 'of organisations already use AI in at least one business function.',
    source: 'McKinsey, 2025',
    href: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
  },
  {
    value: '59%',
    label: 'of professionals say AI literacy is now essential for career growth.',
    source: 'DataCamp, 2026',
    href: 'https://www.datacamp.com/blog/the-state-of-data-and-ai-literacy-in-2026-definitions-statistics-and-the-ai-skills-gap',
  },
  {
    value: '74%',
    label: 'of enterprises say AI is already delivering measurable business value.',
    source: 'Deloitte, 2026',
    href: 'https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
  },
  {
    value: '35%',
    label: 'of businesses cite lack of internal skills as the main barrier to AI adoption.',
    source: 'Netguru, 2025',
    href: 'https://www.netguru.com/blog/ai-adoption-statistics',
  },
  {
    value: '61%',
    label: 'say they need more confidence to use AI well at work.',
    source: 'DataCamp, 2026',
    href: 'https://www.datacamp.com/blog/the-state-of-data-and-ai-literacy-in-2026-definitions-statistics-and-the-ai-skills-gap',
  },
  {
    value: '67%',
    label: 'of leaders expect AI to reshape how customers discover and buy.',
    source: 'Deloitte, 2026',
    href: 'https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
  },
];

const roadmapSteps = [
  {
    number: '01',
    title: 'Discover where AI will actually make a difference',
    subtitle: 'DISCOVER',
    text: 'Start with a practical diagnostic, not generic hype. We identify where AI can reduce wasted head hours, improve service, strengthen delivery, and create a clearer roadmap for what to do next.',
    tags: ['Priority AI', 'Readiness audit', 'Opportunity mapping'],
    image: '/images/roadmap_discover.jpg',
  },
  {
    number: '02',
    title: 'Train your team so they can use AI with confidence',
    subtitle: 'TRAIN',
    text: 'Once the opportunities are clear, the next step is capability. We train leaders and teams with practical tools, workflows, and language they can actually apply on Monday morning.',
    tags: ['Sarah Speaks', 'Workshops', 'Leadership fluency'],
    image: '/images/roadmap_train.jpg',
  },
  {
    number: '03',
    title: 'Activate AI tools, workflows, and visibility',
    subtitle: 'ACTIVATE',
    text: 'Then we move from planning to implementation. That can mean deploying tools, improving your internal operations, or making sure your business is visible when AI engines answer your customers.',
    tags: ['Implementation', 'GEO', 'Automation'],
    image: '/images/roadmap_activate.jpg',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <main>
        <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-6 pb-20 pt-44 md:px-12 lg:grid-cols-[1.2fr_0.88fr] lg:items-center">
          <div>
            <h1 className="mb-6 whitespace-nowrap text-[clamp(3.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.06em] text-black">AI That Works</h1>
            <p className="max-w-[34rem] text-lg leading-8 text-midGrey">
              AI is everywhere, and it&apos;s hard to know where to start. Whether you&apos;re just trying to make sense of it all, or you&apos;re ready to put AI to work in your business, you&apos;re in the right place. I&apos;ll help you find your starting point, build your confidence, and get real results.
            </p>
            <a href="#products" className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-midGrey transition hover:border-brandBlue hover:text-brandBlue">↓</a>
          </div>

          <div className="w-full lg:flex lg:justify-end">
            <div className="relative aspect-[9/12] w-full max-w-[420px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#111827] via-[#0f3460] to-[#004AAD] shadow-[0_16px_48px_rgba(0,0,0,0.15)]">
              <Image src="/images/sarah_balmer.jpg" alt="Sarah Balmer" fill className="object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xl backdrop-blur">▶</div>
                <span className="text-[13px] font-medium text-white/75">Meet Sarah</span>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-[1200px] px-8 pb-24 md:px-12">
          <h2 className="mb-3 text-[clamp(2.25rem,5vw,3.25rem)] font-bold tracking-[-0.04em] text-black">Cut through AI overwhelm</h2>
          <p className="mb-12 text-[15px] leading-7 text-midGrey">Explore our services</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
            {featuredCards.map((card, index) => {
              const spanClass = index < 2 ? 'md:col-span-3' : 'md:col-span-2';
              const inner = (
                <>
                  <div className="absolute inset-0">
                    <Image src={card.image} alt={card.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">{card.label}</p>
                    <h3 className="mb-2 text-[28px] font-bold tracking-tight">{card.title}</h3>
                    <p className="max-w-[32ch] text-sm leading-6 text-white/85">{card.description}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-white">{card.cta} →</span>
                      {card.comingSoon && <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur">Coming soon</span>}
                    </div>
                  </div>
                </>
              );

              return card.external ? (
                <a key={card.id} href={card.href} target="_blank" rel="noopener noreferrer" className={`group relative min-h-[440px] overflow-hidden rounded-2xl ${spanClass}`}>{inner}</a>
              ) : (
                <Link key={card.id} href={card.href} className={`group relative min-h-[440px] overflow-hidden rounded-2xl ${spanClass}`}>{inner}</Link>
              );
            })}
          </div>
        </section>

        <section id="founder" className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-6 py-20 md:px-12 lg:grid-cols-[300px_1fr]">
          <div className="relative h-[380px] overflow-hidden rounded-2xl lg:sticky lg:top-28">
            <Image src="/images/sarah_balmer.jpg" alt="Sarah Balmer" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
              LinkedIn Top Voice for AI
            </div>
          </div>

          <div>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-brandBlue">BUILT BY SARAH</p>
            <h2 className="mb-5 text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] text-black">Start your AI journey right</h2>
            <div className="space-y-5 text-lg leading-8 text-midGrey">
              <p>Sarah Balmer has spent more than 25 years helping businesses simplify the complex and focus on what works. She brings that same practical lens to AI.</p>
              <p>This is not about hype, jargon, or chasing every new tool. It&apos;s about figuring out where AI can create real value, building confidence in your team, and putting the right systems in place.</p>
              <p>From strategic consulting and training to GEO and product innovation, AI Economy is designed to help leaders move with clarity.</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="https://calendar.app.google/bZ3j6WLHznPt1FP4A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-brandBlue px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003A8C]">Contact</a>
              <a href="https://www.balmeragency.com.au/profile/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-3.5 text-sm font-semibold text-black transition hover:border-black">About</a>
            </div>
          </div>
        </section>

        <section className="bg-darkPanel py-24">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="mb-14 max-w-3xl">
              <h2 className="mb-5 text-[clamp(2rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.04em] text-white">AI is moving fast.<br />Is your business keeping up?</h2>
              <p className="text-base leading-8 text-white/60">The businesses that move early are building efficiency, confidence, and visibility. The ones that wait are losing ground in skills, operations, and discoverability.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-white/10 py-8">
                  <div className="mb-3 text-5xl font-bold tracking-[-0.06em] text-white">{stat.value}</div>
                  <p className="mb-3 text-[15px] leading-7 text-white/70">{stat.label}</p>
                  <a href={stat.href} target="_blank" rel="noopener noreferrer" className="inline-block text-[11px] font-medium uppercase tracking-[0.14em] text-white/35 transition hover:text-white/70 hover:underline">{stat.source}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="mx-auto max-w-[1200px] px-6 py-24 md:px-12">
          <h2 className="mb-4 text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.04em] text-black">Here&apos;s what you can expect</h2>
          <p className="mb-14 max-w-2xl text-[15px] leading-7 text-midGrey">The AI Economy model is simple: discover where value sits, train people to use AI well, then activate the tools and visibility layers that create results.</p>
          <div className="space-y-16">
            {roadmapSteps.map((step, index) => (
              <div key={step.number} className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div>
                  <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.18em] text-brandBlue">{step.number}</p>
                  <h3 className="mb-2 text-[30px] font-bold tracking-[-0.03em] text-black">{step.title}</h3>
                  <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-brandOrange">{step.subtitle}</p>
                  <p className="mb-5 text-[15px] leading-8 text-midGrey">{step.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-softGrey px-3.5 py-1.5 text-xs font-medium text-black">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-softGrey">
                  <Image src={step.image} alt={step.title} width={1200} height={900} className="h-full w-full object-cover object-center" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-softGrey py-24">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-tight tracking-[-0.04em] text-black">Will your business be found when AI answers your customers&apos; questions?</h2>
              <p className="mb-5 text-[15px] leading-8 text-midGrey">AI search is changing how customers find businesses. ChatGPT, Perplexity, Gemini and Copilot are already answering the questions your customers used to type into Google. If your business isn&apos;t showing up in those answers, you&apos;re invisible to a growing share of your market.</p>
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-6">
                  <div className="mb-2 text-4xl font-bold tracking-[-0.05em] text-brandBlue">5x</div>
                  <p className="text-sm leading-6 text-midGrey">more engaged traffic from AI search compared to traditional search</p>
                </div>
                <div className="rounded-xl bg-white p-6">
                  <div className="mb-2 text-4xl font-bold tracking-[-0.05em] text-brandBlue">400%</div>
                  <p className="text-sm leading-6 text-midGrey">increase in AI-powered search usage in the last 12 months</p>
                </div>
              </div>
              <p className="mb-8 text-[15px] leading-8 text-midGrey">GEO (generative engine optimisation) is no longer optional. The businesses that act now will own the AI search results in their category. The ones that wait will wonder where their traffic went.</p>
            </div>
            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d1b2a] via-[#1b2d4f] to-[#4a2070] p-10 text-center">
              <h3 className="mb-4 max-w-sm text-3xl font-bold tracking-[-0.03em] text-white">Is your business turning up in AI search?</h3>
              <p className="mb-6 max-w-sm text-sm leading-7 text-white/65">Find out where you rank for your key services and products. Get your AI visibility report.</p>
              <Link href="/services/geo-audit" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-xl">Check your visibility</Link>
            </div>
          </div>
        </section>

        <section className="bg-softGrey py-24">
          <div className="mx-auto max-w-[1200px] px-6 text-center md:px-12">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-brandBlue">YOUR AI ECONOMY JOURNEY</p>
            <h2 className="mb-4 text-[36px] font-bold tracking-[-0.04em] text-black">How we work with you</h2>
            <p className="mx-auto mb-14 max-w-2xl text-[15px] leading-7 text-midGrey">A structured, repeatable process that takes AI from uncertain to indispensable across your business.</p>
            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 xl:grid-cols-4">
              {[
                ['1', 'The conversation', "We start with a conversation about where your business is today, what's working, and where AI could make the biggest difference."],
                ['2', 'The diagnostic', 'We run your business through Priority AI to map your AI readiness against your head hours, payroll, and operational priorities.'],
                ['3', 'The audit', 'A deep-dive audit that produces a clear AI roadmap tied to your specific revenue, cost, and efficiency goals.'],
                ['4', 'The activation', 'Hands-on implementation and training so your team can use AI tools independently and see results from day one.'],
              ].map(([num, title, body]) => (
                <div key={title} className="rounded-2xl bg-white p-8">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-brandBlue text-sm font-bold text-brandBlue">{num}</div>
                  <h3 className="mb-2 text-base font-bold tracking-tight text-black">{title}</h3>
                  <p className="text-[13px] leading-6 text-midGrey">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-12">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-brandBlue">OUR APPROACH</p>
          <h2 className="mb-4 text-[36px] font-bold tracking-[-0.04em] text-black">Three steps</h2>
          <p className="mb-14 max-w-2xl text-[15px] leading-7 text-midGrey">One focused approach. Every tool and service we offer connects back to this core strategy.</p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {(
              [
                { title: 'Discover', sub: 'Find your AI starting point', body: 'Unpack your business, identify where AI delivers the highest ROI, and build your custom roadmap to implementation.', tags: ['Priority AI', 'AI Consultancy'], icon: <DiscoverIcon /> },
                { title: 'Train', sub: 'Build the skills to deliver', body: 'Equip your team with practical AI skills through workshops, courses, and hands-on training with real tools and real workflows.', tags: ['AI Training', 'Workshops'], icon: <TrainIcon /> },
                { title: 'Activate', sub: 'Put AI into production', body: 'Move from planning to doing. Implement AI tools, automate workflows, and track results across your business operations.', tags: ['AI Toolkit', 'AI Visibility'], icon: <ActivateIcon /> },
              ] as { title: string; sub: string; body: string; tags: string[]; icon: React.ReactNode }[]
            ).map(({ title, sub, body, tags, icon }) => (
              <div key={title} className="rounded-2xl bg-softGrey p-8">
                <div className="mb-6">{icon}</div>
                <h3 className="mb-1 text-[28px] font-bold tracking-tight text-black">{title}</h3>
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-brandBlue">{sub}</p>
                <p className="mb-5 text-[14px] leading-7 text-midGrey">{body}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-black">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="bg-[#111111] px-6 py-24 text-center text-white md:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.05em]">Start now.</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/70">Discover. Train. Activate. Find out where AI fits in your business and start getting real results.</p>
            <a href="https://calendar.app.google/bZ3j6WLHznPt1FP4A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200">Get in Touch</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
