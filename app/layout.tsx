import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { SubscriptionModal } from '@/components/ui/SubscriptionModal';
import { globalSEO } from '@/content/seo/global';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body>
        <SubscriptionModal />
        {children}
      </body>
    </html>
  );
}
