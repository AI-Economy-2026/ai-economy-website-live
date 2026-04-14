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

      <SiteFooter />
    </div>
  );
}
