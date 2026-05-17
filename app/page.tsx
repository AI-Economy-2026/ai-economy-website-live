import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import {
  homepageCta,
  homepageFeaturedIntro,
  homepageFeaturedCards,
  homepageFounder,
  homepageGeoSection,
  homepageHero,
  homepageJourney,
  homepageJourneySteps,
  homepageMomentum,
  homepageRoadmapIntro,
  homepageRoadmapSteps,
  homepageSocialLinks,
  homepageStats,
} from '@/content/homepage';
import { footerSections, siteConfig } from '@/content/site';
import { NavSocialBar } from '@/components/homepage/NavSocialBar';
import { SiteNav } from '@/components/homepage/SiteNav';
import { ProductCard } from '@/components/homepage/ProductCard';
import { MeetSarahVideo } from '@/components/homepage/MeetSarahVideo';
import { SocialIcon } from '@/components/homepage/SocialIcon';
import { ApproachSection } from '@/components/homepage/ApproachSection';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'AI Economy – AI Strategy, Training & Tools for Business',
  description: 'Helping businesses simplify the complex and focus on what works in the AI era. AI consultancy, diagnostics, training, and tools led by Sarah Balmer.',
  canonical: 'https://aieconomy.ai',
});

const sarahImg = '/images/sarah_balmer.jpg';

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-white text-[#111111]">
      <NavSocialBar />
      <SiteNav />

      <main>
        <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-6 pb-20 pt-44 md:px-12 lg:grid-cols-[1.2fr_0.88fr] lg:items-center">
          <div>
            <h1 className="mb-6 text-[clamp(3.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.06em] text-black">
              {homepageHero.title}
            </h1>
            <p className="max-w-[34rem] text-lg leading-8 text-[#86868B]">
              {homepageHero.body}
            </p>
            <a
              href={homepageHero.ctaHref}
              className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#86868B] transition hover:border-[#004AAD] hover:text-[#004AAD]"
            >
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>

          <div className="w-full lg:flex lg:justify-end">
            <MeetSarahVideo />
          </div>
        </section>

        <section id="products" className="mx-auto max-w-[1200px] px-8 pb-24 md:px-12">
          <h2 className="mb-3 text-[clamp(2.25rem,5vw,3.25rem)] font-bold tracking-[-0.04em] text-black">
            {homepageFeaturedIntro.title}
          </h2>
          <p className="mb-12 text-[15px] leading-7 text-[#86868B]">{homepageFeaturedIntro.body}</p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
            {homepageFeaturedCards.map((card, index) => (
              <ProductCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </section>

        <section id="founder" className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-6 py-20 md:px-12 lg:grid-cols-[300px_1fr]">
          <div className="relative h-[380px] overflow-hidden rounded-2xl lg:sticky lg:top-28">
            <img src={sarahImg} alt="Sarah Balmer" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
              {homepageFounder.imageBadge}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#004AAD]">{homepageFounder.eyebrow}</p>
            <h3 className="mb-5 text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] text-black">
              {homepageFounder.title}
            </h3>
            <div className="space-y-5 text-lg leading-8 text-[#86868B]">
              {homepageFounder.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={siteConfig.contactHref}
                className="inline-flex items-center justify-center rounded-full bg-[#004AAD] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#003A8C]"
              >
                {homepageFounder.contactLabel}
              </a>
              <a
                href={siteConfig.aboutHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-3.5 text-sm font-semibold text-black transition hover:border-black"
              >
                {homepageFounder.aboutLabel}
              </a>
              <a
                href={siteConfig.socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={homepageFounder.linkedInLabel}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black/70 transition hover:text-black"
              >
                <SocialIcon label="LinkedIn" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#1D1D1F] py-24">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="mb-14 max-w-3xl">
              <h2 className="mb-5 text-[clamp(2rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.04em] text-white">
                {homepageMomentum.title.split('\n')[0]}
                <br />
                {homepageMomentum.title.split('\n')[1]}
              </h2>
              <p className="text-base leading-8 text-white/60">
                {homepageMomentum.body}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {homepageStats.map((stat) => (
                <div key={stat.label} className="border-t border-white/10 py-8">
                  <div className="mb-3 text-5xl font-bold tracking-[-0.06em] text-white">{stat.value}</div>
                  <p className="mb-3 text-[15px] leading-7 text-white/70">{stat.label}</p>
                  <a
                    href={stat.sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] font-medium uppercase tracking-[0.14em] text-white/60 no-underline transition hover:text-white hover:underline"
                  >
                    {stat.source}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="mx-auto max-w-[1200px] px-6 py-24 md:px-12">
          <h2 className="mb-4 text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.04em] text-black">
            {homepageRoadmapIntro.title}
          </h2>
          <p className="mb-14 max-w-2xl text-[15px] leading-7 text-[#86868B]">
            {homepageRoadmapIntro.body}
          </p>

          <div className="space-y-16">
            {homepageRoadmapSteps.map((step, index) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div>
                  <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.18em] text-[#004AAD]">{step.number}</p>
                  <h3 className="mb-2 text-[30px] font-bold tracking-[-0.03em] text-black">{step.title}</h3>
                  <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#E8890C]">
                    {step.subtitle}
                  </p>
                  <p className="mb-5 text-[15px] leading-8 text-[#86868B]">{step.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#F5F5F7] px-3.5 py-1.5 text-xs font-medium text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#F5F5F7]">
                  <img src={step.image} alt={step.title} className="h-full w-full object-cover object-center" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-24">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 md:px-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-[clamp(1.9rem,4vw,2.5rem)] font-bold leading-tight tracking-[-0.04em] text-black">
                {homepageGeoSection.title}
              </h2>
              <p className="mb-5 text-[15px] leading-8 text-[#86868B]">
                {homepageGeoSection.intro}
              </p>

              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {homepageGeoSection.stats.map((stat) => (
                  <div key={stat.value} className="rounded-xl bg-white p-6">
                    <div className="mb-2 text-4xl font-bold tracking-[-0.05em] text-[#004AAD]">{stat.value}</div>
                    <p className="text-sm leading-6 text-[#86868B]">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mb-8 text-[15px] leading-8 text-[#86868B]">
                {homepageGeoSection.outro}
              </p>
            </div>

            <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d1b2a] via-[#1b2d4f] to-[#4a2070] p-10 text-center">
              <h3 className="mb-4 max-w-sm text-3xl font-bold tracking-[-0.03em] text-white">
                {homepageGeoSection.cardTitle}
              </h3>
              <p className="mb-6 max-w-sm text-sm leading-7 text-white/65">
                {homepageGeoSection.cardBody}
              </p>
              <Link
                href={homepageGeoSection.cardHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {homepageGeoSection.cardCta}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F7] py-24">
          <div className="mx-auto max-w-[1200px] px-6 text-center md:px-12">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#004AAD]">{homepageJourney.eyebrow}</p>
            <h2 className="mb-4 text-[36px] font-bold tracking-[-0.04em] text-black">{homepageJourney.title}</h2>
            <p className="mx-auto mb-14 max-w-2xl text-[15px] leading-7 text-[#86868B]">
              {homepageJourney.body}
            </p>

            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 xl:grid-cols-4">
              {homepageJourneySteps.map((step) => (
                <div key={step.title} className="rounded-2xl bg-white p-8">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#004AAD] text-sm font-bold text-[#004AAD]">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-base font-bold tracking-tight text-black">{step.title}</h3>
                  <p className="text-[13px] leading-6 text-[#86868B]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ApproachSection />

        <section id="cta" className="bg-[#111111] px-6 py-24 text-center text-white md:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.05em]">
              {homepageCta.title}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/70">
              {homepageCta.body}
            </p>
            <a
              href={homepageCta.buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              {homepageCta.buttonLabel}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] md:px-12">
          <div>
            <Link href="/" className="mb-5 block text-lg font-bold tracking-tight text-black">
              {siteConfig.shortName}
            </Link>
            <p className="max-w-xs text-sm leading-7 text-[#86868B]">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-2">
              {homepageSocialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/70 transition hover:text-black"
                >
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-black">
                {section.title}
              </h4>
              <div className="space-y-3 text-sm text-[#86868B]">
                {section.items.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition hover:text-black"
                    >
                      {item.label}
                    </a>
                  ) : item.href.startsWith('/') ? (
                    <Link key={item.label} href={item.href} className="block transition hover:text-black">
                      {item.label}
                    </Link>
                  ) : (
                    <a key={item.label} href={item.href} className="block transition hover:text-black">
                      {item.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-black/5 px-6 py-5 text-center text-xs text-black/40 md:px-12">
          {siteConfig.copyright}
        </div>
      </footer>
    </div>
  );
}
