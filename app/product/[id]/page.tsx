import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { products, getProductById } from '@/content/products';
import { buildMetadata } from '@/lib/seo';
import { getOrganizationSchema, getServiceSchema, getFAQSchema } from '@/lib/schema';
import { PriorityAIPage } from '@/components/product/PriorityAIPage';
import { SarahSpeaksPage } from '@/components/product/SarahSpeaksPage';
import { AgentAlicePage } from '@/components/product/AgentAlicePage';
import { AIConsultancyPage } from '@/components/product/AIConsultancyPage';
import { GathaPage } from '@/components/product/GathaPage';

export async function generateStaticParams() {
  return products
    .filter((p) => !p.externalLink && p.id !== 'ai-toolkit')
    .map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};

  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    canonical: product.seo.canonical,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Redirect ai-toolkit to its dedicated page
  if (id === 'ai-toolkit') {
    redirect('/product/ai-toolkit');
  }

  const product = getProductById(id);
  if (!product) notFound();

  // If product has an external link, redirect there
  if (product.externalLink && !product.externalLink.startsWith('#')) {
    redirect(product.externalLink);
  }

  const orgSchema = getOrganizationSchema();
  const serviceSchema = getServiceSchema({ name: product.name, description: product.description, id: product.id });
  const faqSchema = product.faqs ? getFAQSchema(product.faqs) : null;

  const jsonLd = [orgSchema, serviceSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {renderProductPage(id, product)}
    </>
  );
}

function renderProductPage(id: string, product: Parameters<typeof PriorityAIPage>[0]['product']) {
  switch (id) {
    case 'priority-ai':
      return <PriorityAIPage product={product} />;
    case 'sarah-speaks':
      return <SarahSpeaksPage product={product} />;
    case 'agent-alice':
      return <AgentAlicePage product={product} />;
    case 'ai-consultancy':
      return <AIConsultancyPage product={product} />;
    case 'gatha-ai':
      return <GathaPage product={product} />;
    default:
      // For products without a custom page (parently, prolinks, geo-audit), show generic layout
      return <GenericProductPage product={product} />;
  }
}

function GenericProductPage({ product }: { product: Parameters<typeof PriorityAIPage>[0]['product'] }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-14 min-h-[70vh] flex items-center overflow-hidden bg-black">
        {product.image && (
          <div className="absolute inset-0 z-0">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-40 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          {product.id === 'geo-audit' && (
            <img
              src="/images/rankco-wordmark-mint.svg"
              alt="RankCo"
              className="mb-8 h-14 w-auto"
            />
          )}
          <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">{product.label}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[0.9] mb-8">{product.name}</h1>
          <p className="text-white/70 text-xl font-medium max-w-2xl leading-relaxed mb-12">{product.description}</p>
          {product.ctaLink || product.externalLink ? (
            <a
              href={product.ctaLink || product.externalLink}
              target={(product.externalLink || product.ctaLink)?.startsWith('#') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-[#2563EB] text-white rounded-full font-bold hover:bg-[#1D4ED8] transition-all text-lg"
            >
              {product.cta}
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
}
