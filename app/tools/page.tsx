import type { Metadata } from 'next';
import { categories, tools } from '@/lib/tools';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'AI Toolkit',
  description:
    'A curated directory of AI tools handpicked by Sarah across writing, coding, design, video, productivity, research, and audio.',
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <main className="mx-auto max-w-[1200px] px-6 py-24 md:px-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brandBlue">AI Toolkit</p>
        <h1 className="mb-4 text-[clamp(3rem,7vw,5rem)] font-bold tracking-[-0.06em]">Tools that actually work.</h1>
        <p className="mb-10 max-w-3xl text-lg leading-8 text-midGrey">
          A curated shortlist of AI tools handpicked by Sarah across writing, coding, image generation, video, research, audio, and productivity.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span key={category.id} className="rounded-full bg-softGrey px-4 py-2 text-sm text-ink">
              {category.label}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-black/8 p-6 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold text-white"
                  style={{ backgroundColor: tool.logoColor }}
                >
                  {tool.logo}
                </div>
                <span className="rounded-full bg-softGrey px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-midGrey">
                  {tool.pricing}
                </span>
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brandBlue">{tool.categoryLabel}</p>
              <h2 className="mb-2 text-2xl font-bold tracking-tight">{tool.name}</h2>
              <p className="mb-3 text-[15px] font-medium text-ink">{tool.tagline}</p>
              <p className="mb-4 text-[15px] leading-7 text-midGrey">{tool.description}</p>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-softGrey px-3 py-1 text-xs text-ink">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
