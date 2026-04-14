import { SiteFooter } from '@/components/site-footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">Terms of Use</h1>
        <div className="space-y-6 text-lg leading-8 text-midGrey">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Welcome to AI Economy. These terms and conditions outline the rules and regulations for the use of our
            website and services.
          </p>
          <h2 className="text-2xl font-semibold text-ink">Acceptance of Terms</h2>
          <p>
            By accessing this website we assume you fully accept these terms and conditions in full. Do not continue to
            use AI Economy&apos;s website if you do not accept all of the terms and conditions stated on this page.
          </p>
          <h2 className="text-2xl font-semibold text-ink">Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, AI Economy and/or its licensors own the intellectual property rights for all
            material on AI Economy. All intellectual property rights are reserved.
          </p>
          <h2 className="text-2xl font-semibold text-ink">Limitation of Liability</h2>
          <p>AI Economy will not be liable for any damages that arise from the use of our web services.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
