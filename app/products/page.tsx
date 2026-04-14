import Link from 'next/link';
import type { Metadata } from 'next';
import { productDetails } from '@/lib/product-details';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Products',
  description: 'AI products and learning experiences from AI Economy.',
};

export default function ProductsIndexPage() {
  const products = productDetails.filter((product) => product.section === 'products');

  return (
    <div className="min-h-screen bg-white text-ink">
      <main className="mx-auto max-w-[1200px] px-6 py-24 md:px-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brandBlue">Products</p>
        <h1 className="mb-4 text-[clamp(3rem,7vw,5rem)] font-bold tracking-[-0.06em]">Products built around practical AI adoption.</h1>
        <p className="mb-10 max-w-3xl text-lg leading-8 text-midGrey">
          Explore AI products, agents, dashboards, and learning experiences designed to make AI useful, visible, and commercially relevant.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="rounded-2xl border border-black/8 p-7 transition hover:-translate-y-0.5 hover:shadow-xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brandBlue">{product.label}</p>
              <h2 className="mb-2 text-3xl font-bold tracking-tight">{product.name}</h2>
              <p className="mb-3 text-[15px] font-medium text-ink">{product.tagline}</p>
              <p className="text-[15px] leading-7 text-midGrey">{product.description}</p>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
