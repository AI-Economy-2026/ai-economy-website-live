import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7VS8LLDD4W"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7VS8LLDD4W');
          `}
        </Script>
      </head>
      <body>
        <SubscriptionModal />
        {children}
      </body>
    </html>
  );
}
