import { organizationSchema } from '@/content/seo/organization-schema';

export function getOrganizationSchema() {
  return organizationSchema;
}

export function getServiceSchema(product: {
  name: string;
  description: string;
  id: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: product.name,
    description: product.description,
    provider: {
      '@type': 'Organization',
      name: 'AI Economy',
      url: 'https://aieconomy.ai',
    },
    url: `https://aieconomy.ai/product/${product.id}`,
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
