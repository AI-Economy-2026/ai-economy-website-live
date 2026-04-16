'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Search, X } from 'lucide-react';
import { tools, categories, pricingConfig, type AITool } from '@/data/toolkit-tools';
import { Footer } from '@/components/layout/Footer';

function ToolCard({ tool }: { tool: AITool }) {
  const pricing = pricingConfig[tool.pricing];
  return (
    <article
      className="tool-card group relative flex flex-col rounded-2xl border border-black/10 bg-white cursor-pointer overflow-hidden hover:shadow-md transition-all"
      onClick={() => window.open(tool.url, '_blank', 'noopener,noreferrer')}
    >
      {tool.badge && (
        <div className="absolute top-3 right-3 z-10">
          <span
            className="text-[10px] font-bold px-2 py-1 rounded-md tracking-wide uppercase"
            style={{
              backgroundColor:
                tool.badge === "Editor's Pick" ? '#0369A1'
                : tool.badge === 'Trending' ? '#059669'
                : tool.badge === 'New' ? '#7C3AED'
                : '#DC2626',
              color: '#fff',
            }}
          >
            {tool.badge}
          </span>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-[10px] font-semibold text-[#9CA3AF] tracking-widest uppercase mb-3">
          {tool.categoryLabel}
        </div>
        <div className="flex items-start gap-3 mb-3.5">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
            style={{ backgroundColor: tool.logoColor + '18', color: tool.logoColor, border: `1px solid ${tool.logoColor}28` }}
          >
            {tool.logo}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-[15px] text-black leading-snug truncate">{tool.name}</h3>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span
              className="inline-block text-[11px] font-medium px-2 py-0.5 rounded-md mt-0.5"
              style={{ color: pricing.color, backgroundColor: pricing.bg }}
            >
              {pricing.label}
            </span>
          </div>
        </div>
        <p className="text-sm font-medium text-[#111] leading-snug mb-1.5">{tool.tagline}</p>
        <p className="text-[13px] text-[#6B7280] leading-relaxed flex-1 mb-4">{tool.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tool.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-[#F3F4F6] text-[#6B7280] font-medium">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); window.open(tool.url, '_blank', 'noopener,noreferrer'); }}
          className="w-full py-2.5 rounded-lg border border-black/10 text-[13px] font-semibold text-[#374151] hover:border-black hover:bg-black hover:text-white transition-all"
        >
          Try {tool.name} &rarr;
        </button>
      </div>
    </article>
  );
}

function ToolsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filtered = tools.filter((t) => {
    const matchCat = activeCategory === 'all' || t.category === activeCategory;
    const q = query.toLowerCase();
    const matchQ = !q || (
      t.name.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q))
    );
    return matchCat && matchQ;
  });

  const counts: Record<string, number> = { all: tools.length };
  categories.slice(1).forEach((cat) => {
    counts[cat.id] = tools.filter((t) => t.category === cat.id).length;
  });

  function handleCategoryClick(slug: string) {
    setActiveCategory(slug);
    const params = new URLSearchParams();
    if (slug !== 'all') params.set('category', slug);
    router.replace(`/product/ai-toolkit/tools${params.toString() ? '?' + params.toString() : ''}`);
  }

  function clearFilters() {
    setQuery('');
    setActiveCategory('all');
    router.replace('/product/ai-toolkit/tools');
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10 h-14 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <Link
            href="/product/ai-toolkit"
            className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-semibold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>AI Toolkit</span>
          </Link>
          <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest">All Tools</span>
          <Link
            href="/"
            className="text-[13px] font-semibold text-foreground/50 hover:text-foreground transition-colors"
          >
            AI Economy
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-14 pb-0 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-[0.2em] mb-4">AI Toolkit</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.04] mb-6">
            All Tools
          </h1>
          <p className="text-foreground/60 text-xl font-medium max-w-2xl mb-10 leading-relaxed">
            {tools.length} handpicked AI tools tested by Sarah. Find exactly what you need for your workflow.
          </p>

          {/* Search */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5 border border-black/15 rounded-xl px-4 py-3 bg-white shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black/10 transition-all">
              <Search className="text-[#9CA3AF] shrink-0 w-[18px] h-[18px]" />
              <input
                type="text"
                placeholder="Search tools by name, category, or use case..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 text-sm text-black bg-transparent outline-none placeholder:text-[#9CA3AF]"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-[#9CA3AF] hover:text-black transition-colors">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category filter pills */}
        <div className="max-w-7xl mx-auto px-6 pb-0">
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]'
                }`}
              >
                {cat.label}
                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-black/8 text-[#6B7280]'
                }`}>
                  {counts[cat.id] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length > 0 ? (
            <>
              <p className="text-[13px] text-[#9CA3AF] font-medium mb-8">
                {filtered.length} tool{filtered.length !== 1 ? 's' : ''}
                {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.label}`}
                {query && ` matching "${query}"`}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-[#F3F4F6] flex items-center justify-center mx-auto mb-6">
                <Search className="w-7 h-7 text-[#9CA3AF]" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">No tools found</h3>
              <p className="text-[#6B7280] font-medium mb-8">Try a different search term or browse all categories.</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-black text-white rounded-full font-semibold text-sm hover:bg-[#111] transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#F5F5F7] border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Missing a tool?</h2>
          <p className="text-foreground/60 text-xl font-medium mb-10 leading-relaxed">
            Sarah reviews new tools every week. Browse by category or head back to the toolkit homepage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/product/ai-toolkit"
              className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-[#111] transition-all"
            >
              &larr; Back to AI Toolkit
            </Link>
            <a
              href="#subscribe"
              className="px-8 py-4 bg-white text-foreground rounded-full font-bold border border-black/10 hover:border-black transition-all"
            >
              Get Weekly Updates
            </a>
          </div>
        </div>
      </section>

      <Footer minimal />
    </div>
  );
}

export default function AIToolkitToolsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><p className="text-foreground/40">Loading tools...</p></div>}>
      <ToolsPageContent />
    </Suspense>
  );
}
