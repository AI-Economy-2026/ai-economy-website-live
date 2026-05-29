import type { Metadata } from 'next';
import { Suspense } from 'react';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { SubscriptionModal } from '@/components/ui/SubscriptionModal';
import { globalSEO } from '@/content/seo/global';

// Default metadata for the public marketing subtree. Individual marketing
// pages override title/description via their own `metadata` / buildMetadata().
export const metadata: Metadata = {
  title: {
    default: `${globalSEO.siteName} – AI Strategy, Training & Tools`,
    template: `%s | ${globalSEO.siteName}`,
  },
  description: globalSEO.siteDescription,
  metadataBase: new URL(globalSEO.siteUrl),
  openGraph: {
    type: 'website',
    siteName: globalSEO.siteName,
    images: [{ url: globalSEO.defaultOgImage }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: globalSEO.twitterHandle,
  },
};

// The `.marketing` wrapper confines the marketing design system (Geist font +
// its shadcn tokens) to this route group. CSS custom properties cascade, so
// the tokens redefined under `.marketing` in globals.css only apply here and
// never leak into the base (member) app's `:root` tokens.
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="marketing">
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>
      <SubscriptionModal />
      {children}
    </div>
  );
}
