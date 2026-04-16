'use client';

import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users,
  Briefcase,
  ChevronRight,
  ShieldCheck,
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

interface AIConsultancyPageProps {
  product: ProductDetail;
}

export function AIConsultancyPage({ product }: AIConsultancyPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 min-h-[90vh] flex items-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={product.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'}
            alt={product.name}
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-4xl">
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              AI Strategy &amp; Consultation
            </p>
            <h1 className="text-6xl md:text-[110px] font-extrabold text-white tracking-tighter leading-[0.85] mb-8">
              Strategy over
              <br />
              software.
            </h1>
            <p className="text-white/70 text-2xl md:text-3xl font-medium max-w-3xl leading-snug mb-12">
              Bespoke AI consulting for businesses that want more than just another tool. We build
              practical roadmaps for commercial impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a
                href={product.ctaHref}
                target={product.ctaHref.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-5 bg-[#2563EB] text-white rounded-full font-bold hover:bg-[#1D4ED8] transition-all transform hover:scale-[1.02] text-center text-lg shadow-2xl"
              >
                {product.ctaLabel}
              </a>
              <div className="flex items-center gap-4 text-white/50">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/20" />
                  ))}
                </div>
                <span className="text-sm font-semibold tracking-wide uppercase">
                  Trusted by 50+ Enterprises
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Governance & Culture Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              The AI adoption gap.
            </h2>
            <p className="text-xl md:text-2xl text-ink/60 font-medium leading-relaxed mb-12">
              Most businesses have experimentation, but very few have alignment. We bridge the gap
              between &ldquo;cool pilots&rdquo; and &ldquo;core infrastructure.&rdquo;
            </p>
            <div className="space-y-8">
              {[
                {
                  title: 'Executive Workshops',
                  desc: 'Aligning leadership on risk, budget, and commercial prioritization.',
                  icon: Users,
                },
                {
                  title: 'Compliance & Governance',
                  desc: 'Secure implementation strategies that protect your proprietary data.',
                  icon: ShieldCheck,
                },
                {
                  title: 'Commercial Roadmaps',
                  desc: 'Moving from vague ideas to ranked, ROI-focused project lists.',
                  icon: BarChart3,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-ink/60 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F5F5F7] p-12 rounded-[48px] lg:sticky lg:top-24">
            <h3 className="text-3xl font-bold mb-8">Typical Engagement</h3>
            <div className="space-y-12">
              {[
                {
                  step: 'Phase 01',
                  title: 'Opportunity Audit',
                  desc: 'Mapping departments against automation potential.',
                },
                {
                  step: 'Phase 02',
                  title: 'Strategic Roadmap',
                  desc: 'Prioritizing projects based on Effort vs. Reward.',
                },
                {
                  step: 'Phase 03',
                  title: 'Activation Blocks',
                  desc: 'Implementing workshops, training, and pilot tools.',
                },
              ].map((s, i) => (
                <div key={i} className="relative pl-12">
                  {i < 2 && (
                    <div className="absolute left-[23px] top-12 w-px h-16 bg-black/10" />
                  )}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5">
                    <CheckCircle2 className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div>
                    <span className="text-[#2563EB] text-[10px] font-bold uppercase tracking-widest">
                      {s.step}
                    </span>
                    <h4 className="text-xl font-bold mt-1">{s.title}</h4>
                    <p className="text-ink/60 text-sm font-medium mt-2">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={product.ctaHref}
              target={product.ctaHref.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="mt-12 w-full py-5 bg-black text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-black/90 transition-all"
            >
              Start the audit <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-4xl md:text-5xl font-extrabold italic tracking-tight leading-tight text-black mb-12">
            &ldquo;The single best strategic investment we made into AI. No fluff, just commercial
            reality.&rdquo;
          </p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-black/10 mb-4" />
            <p className="font-bold text-lg">Managing Director</p>
            <p className="text-ink/40 text-sm font-semibold uppercase tracking-widest">
              Global Logistics Firm
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
            Build your AI blueprint.
          </h2>
          <p className="text-ink/60 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
            Don&apos;t leave your AI strategy to chance. Partner with experts who have implemented
            AI at scale.
          </p>
          <a
            href="https://calendar.app.google/bZ3j6WLHznPt1FP4A"
            className="inline-flex items-center space-x-3 px-12 py-5 rounded-full font-bold text-white text-lg transition-all hover:opacity-90 hover:scale-[1.02] shadow-2xl bg-[#2563EB]"
          >
            <span>Request a Proposal</span>
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

      <MoreProducts currentId="ai-consultancy" />
      <SiteFooter />
    </div>
  );
}
