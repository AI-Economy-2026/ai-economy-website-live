import { SiteFooter } from '@/components/site-footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <div className="space-y-6 text-lg leading-8 text-midGrey">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At AI Economy, we take your privacy seriously. This privacy policy describes our policies and procedures on
            the collection, use and disclosure of your information when you use the service.
          </p>
          <h2 className="text-2xl font-semibold text-ink">Information Collection and Use</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our service to
            you. This includes tracking cookies, generic engagement metrics, and contact information strictly provided
            by you via forms.
          </p>
          <h2 className="text-2xl font-semibold text-ink">Security</h2>
          <p>
            The security of your personal information is extremely important to us, but remember that no method of
            transmission over the Internet, or method of electronic storage is 100% secure.
          </p>
          <h2 className="text-2xl font-semibold text-ink">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please{' '}
            <a href="https://calendar.app.google/bZ3j6WLHznPt1FP4A" target="_blank" rel="noopener noreferrer" className="text-brandBlue underline-offset-4 hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
