'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Layout,
  Mic,
  Newspaper,
  Search,
  ChevronRight,
  Bookmark,
  Filter,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import type { ProductDetail } from '@/lib/product-details';
import { MoreProducts } from '@/components/more-products';
import { SiteFooter } from '@/components/site-footer';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10 last:border-0">
      <button
        className="w-full text-left py-6 flex items-start justify-between gap-4 group"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-lg font-semibold text-ink group-hover:text-[#2563EB] transition-colors leading-snug">
          {question}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-5 h-5 text-ink/40 flex-shrink-0 mt-0.5 group-hover:text-[#2563EB] transition-colors" />
        )}
      </button>
      {open && (
        <div className="pb-6 text-ink/70 text-base font-medium leading-relaxed pr-8">{answer}</div>
      )}
    </div>
  );
}

interface GathaPageProps {
  product: ProductDetail;
}

export function GathaPage({ product }: GathaPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 min-h-[85vh] flex items-center overflow-hidden bg-[#0A0A0B] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0B]/80 to-[#0A0A0B]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Personal Knowledge Dashboard
            </p>
            <h1 className="text-6xl md:text-[90px] font-extrabold text-white tracking-tighter leading-[0.9] mb-8">
              Your digital life,
              <br />
              distilled.
            </h1>
            <p className="text-white/70 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed mb-12">
              End the tab chaos. Gatha aggregates your newsletters, links, and articles into one
              visual wall, then turns it into a daily brief or bespoke podcast.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href={product.ctaHref}
                target={product.ctaHref.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-[#2563EB] text-white rounded-full font-bold hover:bg-[#1D4ED8] transition-all transform hover:scale-[1.02] text-center text-lg shadow-lg shadow-blue-500/20"
              >
                {product.ctaLabel}
              </a>
              <a
                href="#how-it-works"
                className="text-white/80 hover:text-white font-semibold transition-colors flex items-center gap-1 group"
              >
                How it works{' '}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Pain: Information Overload */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-black">
              Too much to read, too little time.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            {[
              {
                icon: Bookmark,
                text: 'Bookmarks are where good articles go to die, lost in browser silos',
              },
              {
                icon: Filter,
                text: 'Newsletters clutter your inbox, mixing urgent work with deep reading',
              },
              {
                icon: Newspaper,
                text: 'The mental load of "I should read this" creates constant digital anxiety',
              },
            ].map((point, i) => {
              const Icon = point.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-10 rounded-[32px] shadow-sm flex flex-col items-center text-center"
                >
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-[#2563EB]/5 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#2563EB]" />
                  </div>
                  <p className="text-lg font-semibold text-ink/80 leading-relaxed">{point.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features: Visual & Audio */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="bg-[#0A0A0B] rounded-[40px] aspect-[4/3] p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full p-8 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white/5 rounded-2xl border border-white/10 p-4">
                    <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 mb-4" />
                    <div className="w-full h-2 bg-white/10 rounded-full mb-2" />
                    <div className="w-2/3 h-2 bg-white/5 rounded-full" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2563EB]/20 to-transparent" />
            </div>

            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                A visual wall for your brain.
              </h2>
              <p className="text-xl text-ink/60 font-medium mb-12">
                Stop scrolling lists. Gatha creates a beautiful, searchable mosaic of your
                knowledge, parsed for readability and ready for action.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    icon: Search,
                    title: 'Semantic Search',
                    desc: 'Find ideas by what they mean, not just the keywords you remember.',
                  },
                  {
                    icon: Mic,
                    title: 'Personal Podcast',
                    desc: 'Turn your weekly reading list into a professional audio brief for your commute.',
                  },
                  {
                    icon: Newspaper,
                    title: 'Synthesized Briefs',
                    desc: 'AI-generated morning newsletters summarizing your saved content.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 p-6 rounded-3xl hover:bg-[#F5F5F7] transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-ink/60 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#2563EB] blur-[150px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
            Reclaim your attention.
          </h2>
          <p className="text-white/60 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
            Join thinkers, creators, and leaders who use Gatha to stay informed without being
            overwhelmed.
          </p>
          <a
            href="https://calendar.app.google/bZ3j6WLHznPt1FP4A"
            className="inline-flex items-center space-x-3 px-12 py-5 rounded-full font-bold text-white text-lg transition-all hover:opacity-90 hover:scale-[1.02] shadow-2xl bg-[#2563EB]"
          >
            <span>Explore Gatha.ai</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {product.stats && (
        <section className="bg-white border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/5">
              {product.stats.map((stat, i) => (
                <div key={stat.label} className="py-10 px-8 text-center">
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tighter text-ink mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-ink/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {product.faqs && (
        <section className="py-32 bg-white border-t border-black/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-16">
              <p className="text-[11px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-6">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Questions, answered.</h2>
            </div>
            <div className="divide-y divide-black/10 border-t border-black/10">
              {product.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      )}

      <MoreProducts currentId="gatha-ai" />
      <SiteFooter />
    </div>
  );
}
