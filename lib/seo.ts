import { globalSEO } from '@/content/seo/global';

export function buildMetadata({
  title,
  description,
  canonical,
  ogImage,
}: {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}) {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: globalSEO.siteName,
      images: [{ url: ogImage || globalSEO.defaultOgImage }],
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [ogImage || globalSEO.defaultOgImage],
    },
  };
}
