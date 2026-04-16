import Image from 'next/image';
import type { ProductDetail } from '@/lib/product-details';
import { SiteFooter } from '@/components/site-footer';

export function ProductDetailPage({ product }: { product: ProductDetail }) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <section className="relative isolate overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image src={product.image} alt={product.name} fill className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-32 md:px-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-white/55">{product.label}</p>
          <h1 className="mb-6 text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em]">{product.name}</h1>
          <p className="mb-4 max-w-3xl text-2xl font-medium leading-tight text-white/90">{product.hero.headline}</p>
          <p className="mb-8 max-w-2xl text-lg leading-8 text-white/65">{product.hero.subheadline}</p>
          <a
            href={product.ctaHref}
            target={product.ctaHref.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            {product.ctaLabel}
          </a>
        </div>
      </section>

      {product.stats && (
        <section className="border-b border-black/5 bg-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 px-6 md:grid-cols-4 md:px-12">
            {product.stats.map((stat) => (
              <div key={stat.label} className="border-r border-black/5 px-6 py-10 last:border-r-0">
                <div className="mb-2 text-4xl font-bold tracking-[-0.05em] text-black">{stat.value}</div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-midGrey">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <main className="mx-auto max-w-[1200px] px-6 py-20 md:px-12">
        <section className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brandBlue">Overview</p>
            <p className="text-xl leading-9 text-midGrey">{product.overview}</p>
          </div>
          <div className="rounded-3xl bg-softGrey p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brandBlue">Outcome</p>
            <p className="text-lg leading-8 text-ink">{product.outcome}</p>
          </div>
        </section>

        <section className="py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brandBlue">Features</p>
          <div className="grid gap-6 md:grid-cols-2">
            {product.features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-black/8 p-7">
                <h2 className="mb-3 text-2xl font-bold tracking-tight">{feature.title}</h2>
                <p className="text-[15px] leading-7 text-midGrey">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {product.targetAudience && (
          <section className="py-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brandBlue">Who this is for</p>
            <ul className="grid gap-3 md:grid-cols-2">
              {product.targetAudience.map((item) => (
                <li key={item} className="rounded-2xl bg-softGrey px-5 py-4 text-[15px] leading-7 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {product.testimonials && (
          <section className="py-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brandBlue">Testimonials</p>
            <div className="grid gap-6 md:grid-cols-3">
              {product.testimonials.map((testimonial) => (
                <figure key={testimonial.quote} className="rounded-2xl bg-softGrey p-7">
                  <blockquote className="mb-6 text-[15px] leading-7 text-ink">“{testimonial.quote}”</blockquote>
                  <figcaption className="text-sm text-midGrey">
                    <div className="font-semibold text-ink">{testimonial.author}</div>
                    <div>{testimonial.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {product.faqs && (
          <section className="py-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brandBlue">FAQ</p>
            <div className="divide-y divide-black/8 rounded-2xl border border-black/8">
              {product.faqs.map((faq) => (
                <div key={faq.question} className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
                  <p className="text-[15px] leading-7 text-midGrey">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {product.slug === 'sarah-speaks' && (
        <section className="bg-softGrey py-20">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-brandBlue">Watch & Learn</p>
                <h2 className="text-3xl font-bold tracking-tight text-black">Latest from the channel</h2>
              </div>
              <a
                href="https://www.youtube.com/@aieconomyai"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-black sm:flex"
              >
                <svg className="h-4 w-4 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                View channel
              </a>
            </div>
            <div className="mb-8 aspect-video overflow-hidden rounded-2xl bg-black shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/Adtz3zKKBng?rel=0"
                title="How to Rank Your Business First on ChatGPT"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { id: '-W1PVeNdFkk', title: "SEO Isn't Enough Anymore \u2013 Tom Winter on GEO and AEO" },
                { id: 'h9Uf1SGJ30s', title: 'From Chaos to Clarity: Audrey Chia on Making AI Actually Work' },
                { id: 'du3EoH1Q5Nk', title: 'AI That Works: Valeriya Shows Us How' },
                { id: 'DTtMGV9ZRak', title: "AI That Works: How do LLM's work?" },
                { id: 'XsF8jin_y60', title: "CMO's this is your wake-up call. Are you ready for it?" },
                { id: 'SSeuvBAR5R8', title: 'Stop wasting your time with AI - featuring Charlie Hills' },
              ].map((video) => (
                <div key={video.id} className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
                  <div className="aspect-video bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                  <div className="p-4">
                    <p className="line-clamp-2 text-sm font-semibold leading-snug text-black">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
