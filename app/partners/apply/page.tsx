import type { Metadata } from 'next';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PartnerApplyForm } from '@/components/contact/PartnerApplyForm';
import { siteConfig } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Join the AI Economy Partner Program',
  description:
    'Apply to join the AI Economy Partner Program. We connect clients to trusted AI service providers.',
  canonical: '/partners/apply',
});

export default function PartnersApplyPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#004AAD]">
              AI NETWORK
            </p>
            <h1 className="mb-6 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-black">
              Join the AI Economy Partner Program.
            </h1>
            <p className="text-lg leading-8 text-[#86868B]">
              We connect clients to trusted AI service providers. If you offer AI strategy,
              training, implementation, GEO, content, or automation services, tell us about your
              work and we will be in touch.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] md:p-10">
            <PartnerApplyForm contactEmail={siteConfig.contactEmail} />
          </div>
        </section>
      </main>
      <Footer minimal />
    </div>
  );
}
