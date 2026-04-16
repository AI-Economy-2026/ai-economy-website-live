import type { MetadataRoute } from 'next';
import { globalSEO } from '@/content/seo/global';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${globalSEO.siteUrl}/sitemap.xml`,
    host: globalSEO.siteUrl,
  };
}
