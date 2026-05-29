'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BarChart3, Search, Globe, Users, Map, Zap, TrendingUp, FileText, ChevronRight } from 'lucide-react';
import { Product } from '@/data/products';
import { Footer } from '@/components/layout/Footer';
import { MoreProducts } from '@/components/product/MoreProducts';
import { ContactForm } from '@/components/product/ContactForm';

interface RankcoPageProps {
  product: Product;
}

const workflowStages = [
  {
    stage: '01',
    label: 'Audit',
    title: 'AI Search Visibility Audit',
    body: 'Run a comprehensive audit across ChatGPT, Gemini, Perplexity, Grok, and other leading AI engines. Test buyer prompts relevant to your category and see exactly where your brand appears — and where it is invisible.',
    features: [
      'All audits dashboard with full history',
      'Benchmark comparison against industry average and top-quartile',
      'Biggest gap and biggest strength highlights',
      'KPI cards: prompts tested, brand mentions, share of voice',
      'Prompt-type breakdown: informational vs commercial intent',
      'PDF export for client or stakeholder reporting',
    ],
    icon: Search,
    color: '#004AAD',
  },
  {
    stage: '02',
    label: 'Analyse',
    title: 'Deep Prompt and Engine Analysis',
    body: 'Go beneath the headline score. Understand exactly which buyer prompts trigger citations, which AI engines ignore your brand, and where your competitors are winning the conversation instead of you.',
    features: [
      'Prompt Analysis with filters: commercial, informational, blind-spot',
      'Priority prompt plan ranked by activation score',
      'Engine Gaps page showing citation rates per AI engine',
      'Engine x prompt-type matrix for targeted diagnosis',
      'Competitor share of voice leaderboard',
      'Source analysis: domains AI engines trust in your category',
    ],
    icon: BarChart3,
    color: '#7C3AED',
  },
  {
    stage: '03',
    label: 'Plan',
    title: 'Opportunity Map and Action Planning',
    body: 'Convert audit findings into a ranked list of practical plays. Every recommendation is scored by impact so you know exactly what to work on first and what the lift potential looks like.',
    features: [
      'Opportunity Map with score out of 100',
      'Category benchmark and quick-fix identification',
      'Priority opportunity cards: critical, high-impact, authority, foundational',
      'Re-audit window recommendation',
      'Add recommendations directly to your execution plan',
      'CSV export for prompt data and planning',
    ],
    icon: Map,
    color: '#059669',
  },
  {
    stage: '04',
    label: 'Activate',
    title: '90-Day Execution Roadmap',
    body: 'Turn analysis into action. Rankco generates a structured 90-day plan from your audit findings, with task cards, effort estimates, and progress tracking so your team knows exactly what to do and when.',
    features: [
      '90-day action plan auto-generated from audit',
      'Plan progress tracking with completion percentage',
      'Technical and non-technical task filters',
      'Task cards with description, type, estimated effort, and status',
      'Date-stamped task completion',
      'Tracker for ongoing measurement after activation',
    ],
    icon: Zap,
    color: '#E8890C',
  },
];

const managementFeatures = [
  {
    icon: Users,
    title: 'Client Workspace',
    body: 'Manage multiple clients from a single workspace. View client name, website, status, intake link, and report link in one clean roster.',
  },
  {
    icon: FileText,
    title: 'Audit Credits',
    body: 'Monitor available and used audit credits from the sidebar. Request top-ups as your client base grows.',
  },
  {
    icon: Globe,
    title: 'Multi-Engine Testing',
    body: 'Every audit tests your brand across five or more AI engines simultaneously, so you never have a blind spot.',
  },
  {
    icon: TrendingUp,
    title: 'Ask Sarah Assistant',
    body: 'An AI assistant inside the overview page helps you interpret results and answers questions like: what do these results mean, what should I work on first, and what is achievable in 30 days.',
  },
];

const kpis = [
  { value: '5+', label: 'AI Engines Audited' },
  { value: '100s', label: 'Buyer Prompts Tested' },
  { value: '90-day', label: 'Action Plan Generated' },
  { value: 'Real-time', label: 'Benchmark Comparison' },
];

export function RankcoPage({ product }: RankcoPageProps) {
  return (
    <div className="min-h-screen bg-white">

      {/* Top Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b h-14 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-foreground/60 hover:text-foreground transition-colors font-semibold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>AI Economy</span>
          </Link>
          <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest">AI Visibility</span>
          <a
            href="#contact"
            className="px-6 py-2 bg-[#004AAD] text-white rounded-full font-semibold text-sm hover:bg-[#003A8C] transition-all"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-14 min-h-[90vh] flex items-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-[#1b2d4f] to-[#4a2070]" />
          <div className="absolute inset-0 opacity-30"
            style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, #004AAD 0%, transparent 60%)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="mb-8">
              <img
                src="/images/rankco-logo.svg"
                alt="Rankco"
                className="h-16 brightness-0 invert"
              />
            </div>

            <p className="mb-6 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">AI Visibility Platform</p>
            <h1 className="mb-8 text-6xl md:text-[100px] font-extrabold text-white tracking-tighter leading-[0.85]">
              Own AI<br />search.
            </h1>
            <p className="mb-12 text-white/70 text-xl md:text-2xl font-medium max-w-2xl leading-snug">
              Rankco measures your brand&apos;s visibility across every major AI engine, identifies where competitors are winning, and generates a 90-day plan to close the gap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#004AAD] text-white rounded-full font-bold hover:bg-[#003A8C] transition-all text-lg shadow-2xl"
              >
                Get Started <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/25 text-white rounded-full font-semibold hover:bg-white/10 transition-all text-lg"
              >
                See How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI Strip */}
      <section className="bg-[#0d1b2a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="py-8 px-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white mb-1">{kpi.value}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-white/40">{kpi.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Rankco */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">What is Rankco</p>
            <h2 className="mb-6 text-5xl md:text-6xl font-extrabold tracking-tighter text-black leading-[0.9]">
              AI search is the new front page.
            </h2>
            <p className="text-xl text-foreground/60 font-medium leading-relaxed mb-6">
              When your customers ask ChatGPT, Perplexity, or Gemini about the products and services you sell, is your brand in the answer? Most businesses have no idea. Rankco gives you the data, the diagnosis, and the plan to fix it.
            </p>
            <p className="text-xl text-foreground/60 font-medium leading-relaxed">
              From a single audit to an ongoing visibility programme, Rankco turns AI search into a measurable, manageable channel — just like SEO, but built for the era of generative answers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works — 4 Workflow Stages */}
      <section id="how-it-works" className="py-28 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-2xl"
          >
            <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-black leading-tight">
              Four stages. One connected workflow.
            </h2>
          </motion.div>

          <div className="space-y-8">
            {workflowStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-3xl p-10 md:p-14"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${stage.color}15` }}>
                          <Icon className="w-6 h-6" style={{ color: stage.color }} />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/30">{stage.stage} — {stage.label}</span>
                      </div>
                      <h3 className="text-3xl font-extrabold tracking-tight text-black mb-4">{stage.title}</h3>
                      <p className="text-foreground/60 text-base font-medium leading-relaxed">{stage.body}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {stage.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3 py-3 border-b border-black/5 last:border-0">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: stage.color }} />
                          <span className="text-sm font-semibold text-foreground/70 leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">Platform</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-black leading-tight">
              Built for agencies and in-house teams.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {managementFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#F5F5F7] rounded-3xl p-10"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#004AAD]/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#004AAD]" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-foreground/60 font-medium leading-relaxed">{feature.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials from products.ts */}
      {product.testimonials && (
        <section className="py-28 bg-[#0d1b2a]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <p className="mb-4 text-[11px] font-bold text-white/40 uppercase tracking-[0.2em]">What clients say</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">Real results.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8"
                >
                  <p className="text-white/80 text-base font-medium leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-white font-bold text-sm">{t.author}</p>
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {product.faqs && (
        <section className="py-28 bg-white border-t border-black/5">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="mb-4 text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em]">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Questions, answered.</h2>
            </motion.div>
            <div className="divide-y divide-black/10 border-t border-black/10">
              {product.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact / Get Started */}
      <section id="contact" className="py-28 bg-[#F5F5F7]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">Get Started</p>
            <h2 className="mb-4 text-5xl md:text-6xl font-extrabold tracking-tighter text-black leading-[0.9]">
              Find out where you stand.
            </h2>
            <p className="mb-12 text-foreground/60 text-lg font-medium leading-relaxed">
              Get in touch to run your first AI visibility audit and see exactly how your brand ranks across the AI engines your customers use every day.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <MoreProducts currentProductId={product.id} />
      <Footer minimal />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10 last:border-0">
      <button
        className="w-full text-left py-6 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(o => !o)}
      >
        <span className="text-lg font-semibold text-foreground group-hover:text-[#004AAD] transition-colors leading-snug">{question}</span>
        <span className="text-foreground/40 group-hover:text-[#004AAD] transition-colors mt-0.5 flex-shrink-0 text-xl leading-none">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="pb-6 text-foreground/70 text-base font-medium leading-relaxed pr-8">{answer}</div>
      )}
    </div>
  );
}
