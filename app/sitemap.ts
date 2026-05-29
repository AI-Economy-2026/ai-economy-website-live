import type { MetadataRoute } from 'next';
import { globalSEO } from '@/content/seo/global';
import { products } from '@/content/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = globalSEO.siteUrl;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    // /product/ai-toolkit serves the Blueprint page (rewritten in middleware) at
    // its own URL — keep it as the canonical public "AI Toolkit" entry.
    { url: `${base}/product/ai-toolkit`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products
    .filter((p) => !p.externalLink && p.id !== 'ai-toolkit')
    .map((p) => ({
      url: `${base}/product/${p.id}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  return [...staticRoutes, ...productRoutes];
}
