'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Clock,
  ChevronRight,
  Zap,
  Target,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
import type { ProductDetail } from '@/lib/product-details';
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

const youtubeVideos = [
  { id: 'Adtz3zKKBng', title: 'How to Rank Your Business First on ChatGPT (AEO Secrets EXPOSED)' },
  { id: '-W1PVeNdFkk', title: 'SEO Isn\u2019t Enough Anymore \u2013 Tom Winter on GEO and AEO' },
  { id: 'h9Uf1SGJ30s', title: 'From Chaos to Clarity: Audrey Chia on Making AI Actually Work' },
  { id: 'du3EoH1Q5Nk', title: 'AI That Works: Valeriya Shows Us How' },
  { id: 'DTtMGV9ZRak', title: "AI That Works: How do LLM's work?" },
  { id: 'XsF8jin_y60', title: "CMO's this is your wake-up call. Are you ready for it?" },
];

interface SarahSpeaksPageProps {
  product: ProductDetail;
}

export function SarahSpeaksPage({ product }: SarahSpeaksPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Nav Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b h-14 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-ink/60 hover:text-ink transition-colors font-semibold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>AI Economy</span>
          </Link>
          <span className="text-[11px] font-bold text-ink/30 uppercase tracking-widest">{product.label}</span>
          <a
            href={product.ctaHref}
            target={product.ctaHref.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#2563EB] text-white rounded-full font-semibold text-sm hover:bg-[#1D4ED8] transition-all"
          >
            {product.ctaLabel}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-14 min-h-[85vh] flex items-center overflow-hidden bg-[#F5F5F7] text-black">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Practical AI Training
            </p>
            <h1 className="text-6xl md:text-[90px] font-extrabold text-black tracking-tighter leading-[0.9] mb-8">
              No jargon.
              <br />
              Just skills.
            </h1>
            <p className="text-ink/60 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed mb-12">
              Sarah Speaks demystifies AI. Practical, self-paced training designed for business
              leaders and teams. Skills you can use on Monday morning.
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
                href="#curriculum"
                className="text-ink/80 hover:text-black font-semibold transition-colors flex items-center gap-1 group"
              >
                View curriculum{' '}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideos[0].id}?rel=0`}
                title={youtubeVideos[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-2">
                Watch &amp; Learn
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                Latest from the channel
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@aieconomyai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 text-sm font-semibold text-ink hover:border-black transition-colors"
            >
              <YoutubeIcon className="w-4 h-4 text-red-500" />
              View channel
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.slice(1).map((video) => (
              <div
                key={video.id}
                className="rounded-xl overflow-hidden shadow-sm border border-black/5"
              >
                <div className="aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm font-semibold text-black leading-snug line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <a
              href="https://www.youtube.com/@aieconomyai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 text-sm font-semibold text-ink hover:border-black transition-colors"
            >
              <YoutubeIcon className="w-4 h-4 text-red-500" />
              View channel
            </a>
          </div>
        </div>
      </section>

      {/* Cut through the noise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-black">
              Cut through the noise.
            </h2>
            <p className="text-xl text-ink/60 font-medium">
              Most AI training is either too technical or too generic. We focus on the middle
              ground: commercial application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Skills you can use',
                desc: 'Every module ends with a "Monday morning" action — a specific way to apply what you just learned.',
                icon: Zap,
              },
              {
                title: 'Zero technical debt',
                desc: 'No coding required. We focus on the interface, the strategy, and the human workflow.',
                icon: GraduationCap,
              },
              {
                title: 'Trusted framework',
                desc: 'Based on the same methodology we use for enterprise AI consultancy worldwide.',
                icon: Target,
              },
            ].map((feature, i) => (
              <div key={i}>
                <div className="mb-6 w-12 h-12 rounded-xl bg-[#2563EB]/5 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-ink/60 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section id="curriculum" className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Curriculum
              </p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Structured for progression.
              </h2>
            </div>
            <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm">
              <Clock className="w-5 h-5 text-[#2563EB]" />
              <span className="font-bold">12+ Hours of Content</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: '01',
                title: 'The Generative Era',
                desc: 'Understanding the shift from traditional computing to probabilistic AI. Setting the foundation.',
              },
              {
                id: '02',
                title: 'Prompt Architecture',
                desc: 'Professional prompting frameworks. Going beyond "Write me a summary" to complex chain-of-thought.',
              },
              {
                id: '03',
                title: 'Tool Selection',
                desc: 'A deep dive into the current landscape. Selecting the right models for specific business tasks.',
              },
              {
                id: '04',
                title: 'Internal Workflow Integration',
                desc: 'Mapping AI into your team processes without creating friction or cultural resistance.',
              },
            ].map((mod, i) => (
              <div
                key={mod.id}
                className="bg-white p-10 rounded-[40px] shadow-sm flex items-start gap-8"
              >
                <div className="text-4xl font-black text-[#2563EB]/10">{mod.id}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{mod.title}</h3>
                  <p className="text-ink/60 font-medium text-lg leading-relaxed">{mod.desc}</p>
                  <div className="flex items-center gap-2 mt-6 text-[#2563EB] font-bold">
                    <BookOpen className="w-4 h-4" />
                    <span>View Lessons</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
            Future-proof your career.
          </h2>
          <p className="text-white/60 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
            Join 5,000+ professionals who have transitioned from AI-overwhelmed to AI-confident.
          </p>
          <a
            href="https://calendar.app.google/bZ3j6WLHznPt1FP4A"
            className="inline-flex items-center space-x-3 px-12 py-5 rounded-full font-bold text-white text-lg transition-all hover:opacity-90 hover:scale-[1.02] shadow-2xl bg-[#2563EB]"
          >
            <span>Get Lifetime Access</span>
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

      <SiteFooter />
    </div>
  );
}
