import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ProductDetailPage } from '@/components/product-detail-page';
import { getProductBySectionAndSlug, productDetails } from '@/lib/product-details';
import { siteConfig } from '@/lib/site';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';

export function generateStaticParams() {
  return productDetails
    .filter((p) => p.section === 'services')
    .map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySectionAndSlug('services', slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `${siteConfig.url}/services/${slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `${siteConfig.url}/services/${slug}`,
      images: [product.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySectionAndSlug('services', slug);
  if (!product) notFound();

  const pageUrl = `${siteConfig.url}/services/${slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(product.name, product.description, pageUrl)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: siteConfig.url },
              { name: 'Services', url: `${siteConfig.url}/services` },
              { name: product.name, url: pageUrl },
            ])
          ),
        }}
      />
      {product.faqs && product.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(product.faqs)) }}
        />
      )}
      <ProductDetailPage product={product} />
    </>
  );
}
