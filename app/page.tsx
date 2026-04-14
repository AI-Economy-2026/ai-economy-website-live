import type { Metadata } from 'next';
import { HomePage } from '@/components/homepage';
import { organizationSchema, websiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI That Works',
  description:
    'AI consultancy, diagnostics, training, and AI visibility strategy to help businesses discover, train, and activate AI.',
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <HomePage />
    </>
  );
}
