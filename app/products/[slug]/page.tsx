import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ProductDetailPage } from '@/components/product-detail-page';
import { AgentAlicePage } from '@/components/products/agent-alice-page';
import { GathaPage } from '@/components/products/gatha-page';
import { SarahSpeaksPage } from '@/components/products/sarah-speaks-page';
import { getProductBySectionAndSlug, productDetails } from '@/lib/product-details';
import { siteConfig } from '@/lib/site';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';

export function generateStaticParams() {
  return productDetails
    .filter((p) => p.section === 'products')
    .map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySectionAndSlug('products', slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `${siteConfig.url}/products/${slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `${siteConfig.url}/products/${slug}`,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySectionAndSlug('products', slug);
  if (!product) notFound();

  const pageUrl = `${siteConfig.url}/products/${slug}`;

  function renderPage() {
    switch (slug) {
      case 'agent-alice':
        return <AgentAlicePage product={product!} />;
      case 'gatha-ai':
        return <GathaPage product={product!} />;
      case 'sarah-speaks':
        return <SarahSpeaksPage product={product!} />;
      default:
        return <ProductDetailPage product={product!} />;
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: siteConfig.url },
              { name: 'Products', url: `${siteConfig.url}/products` },
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
      {renderPage()}
    </>
  );
}
