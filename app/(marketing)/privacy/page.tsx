import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { privacyPageContent } from '@/content/legal';
import { siteConfig } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Read the AI Economy Privacy Policy to understand how we collect, use, and protect your data.',
  canonical: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
          {privacyPageContent.title}
        </h1>
        <div className="prose prose-lg text-foreground/80 space-y-6">
          <p>Last updated: {privacyPageContent.updatedAt}</p>
          <p>{privacyPageContent.intro}</p>
          {privacyPageContent.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.heading === 'Contact Us' ? (
                <p>
                  If you have any questions about this Privacy Policy, please{' '}
                  <a
                    href={siteConfig.contactHref}
                    className="text-[#2563EB] hover:underline"
                  >
                    contact us
                  </a>
                  .
                </p>
              ) : (
                <p>{section.body}</p>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer minimal />
    </div>
  );
}
