import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ContactForm } from '@/components/product/ContactForm';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Contact Us | AI Economy',
  description: 'Get in touch with the AI Economy team.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b h-14 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 text-foreground/60 hover:text-foreground transition-colors font-semibold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>AI Economy</span>
          </Link>
        </div>
      </div>

      <div className="pt-14 max-w-2xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">Get in touch.</h1>
        <p className="text-foreground/60 text-lg font-medium mb-12">
          Fill in the form below and we&apos;ll be in touch shortly.
        </p>
        <ContactForm />
      </div>

      <Footer minimal />
    </div>
  );
}
