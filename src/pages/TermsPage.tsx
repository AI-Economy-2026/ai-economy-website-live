import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { termsPageContent } from '@/content/legal';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
          {termsPageContent.title}
        </h1>
        <div className="prose prose-lg text-foreground/80 space-y-6">
          <p>Last updated: {termsPageContent.updatedAt}</p>
          <p>{termsPageContent.intro}</p>
          {termsPageContent.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer minimal />
    </div>
  );
}
