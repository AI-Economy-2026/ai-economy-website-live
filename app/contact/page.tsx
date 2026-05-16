import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ContactForm } from '@/components/contact/ContactForm';
import { siteConfig } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with AI Economy. Tell us about your business and where you want AI to help.',
  canonical: '/contact',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#004AAD]">
                CONTACT
              </p>
              <h1 className="mb-6 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-black">
                Let&apos;s talk about AI in your business.
              </h1>
              <p className="mb-8 max-w-lg text-lg leading-8 text-[#86868B]">
                Tell us a little about what you are working on and we will come back to you within
                one business day. No pitch decks, no jargon, just a useful conversation.
              </p>

              <div className="space-y-5 text-sm text-[#1D1D1F]">
                <div>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#86868B]">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-base font-medium text-black hover:text-[#004AAD]"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#86868B]">
                    Connect
                  </p>
                  <a
                    href={siteConfig.socialLinks[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-black hover:text-[#004AAD]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] md:p-10">
              <ContactForm contactEmail={siteConfig.contactEmail} />
            </div>
          </div>
        </section>
      </main>
      <Footer minimal />
    </div>
  );
}
