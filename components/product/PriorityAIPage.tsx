'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Banknote, ShieldX, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Product } from '@/data/products';
import { Footer } from '@/components/layout/Footer';
import { MoreProducts } from '@/components/product/MoreProducts';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10 last:border-0">
      <button
        className="w-full text-left py-6 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(o => !o)}
      >
        <span className="text-lg font-semibold text-foreground group-hover:text-[#2563EB] transition-colors leading-snug">{question}</span>
        {open
          ? <ChevronUp className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
          : <ChevronDown className="w-5 h-5 text-foreground/40 flex-shrink-0 mt-0.5 group-hover:text-[#2563EB] transition-colors" />
        }
      </button>
      {open && (
        <div className="pb-6 text-foreground/70 text-base font-medium leading-relaxed pr-8">
          {answer}
        </div>
      )}
    </div>
  );
}

interface PriorityAIPageProps {
  product: Product;
}

export function PriorityAIPage({ product }: PriorityAIPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Nav Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b h-14 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-foreground/60 hover:text-foreground transition-colors font-semibold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>AI Economy</span>
          </Link>
          <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest">{product.label}</span>
          <a
            href={product.ctaLink || product.externalLink || "https://calendar.app.google/bZ3j6WLHznPt1FP4A"}
            target={(product.externalLink || product.ctaLink)?.startsWith('#') ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#2563EB] text-white rounded-full font-semibold text-sm hover:bg-[#1D4ED8] transition-all"
          >
            {product.cta}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-14 min-h-[85vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">AI Readiness Diagnostic</p>
            <h1 className="text-6xl md:text-[90px] font-extrabold text-white tracking-tighter leading-[0.9] mb-8">
              Stop guessing.<br />Start knowing.
            </h1>
            <p className="text-white/70 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed mb-12">
              In less than 10 minutes, find out where AI can automate operations, cut costs, and help you scale. Get a tailored roadmap with confident next steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href={product.ctaLink || product.externalLink || "https://calendar.app.google/bZ3j6WLHznPt1FP4A"}
                target={(product.externalLink || product.ctaLink)?.startsWith('#') ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-[#2563EB] text-white rounded-full font-bold hover:bg-[#1D4ED8] transition-all transform hover:scale-[1.02] text-center text-lg shadow-lg shadow-blue-500/20"
              >
                {product.cta}
              </a>
              <a href="#how-it-works" className="text-white/80 hover:text-white font-semibold transition-colors flex items-center gap-1 group">
                How it works <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Sound familiar?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, text: 'AI pilots scattered across departments with no strategic thread' },
              { icon: Banknote, text: "Budget spent on tools nobody uses because teams weren't ready" },
              { icon: ShieldX, text: 'Resistance from teams who see AI as a threat, not an advantage' }
            ].map((point) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-[32px] shadow-sm flex flex-col items-center text-center"
                >
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-secondary/60 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-foreground/60" />
                  </div>
                  <p className="text-lg font-semibold text-foreground/80 leading-relaxed">{point.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Three modules.<br />One complete picture.</h2>
            <p className="text-xl text-foreground/60 font-medium">Run one or run all three. Each builds on the last.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: '1',
                price: 'Included',
                title: 'Opportunity Scan',
                desc: 'Maps departments against AI automation potential. Ranks by estimated hours saved and cost impact.',
                features: ['Department-level mapping', 'Hours saved estimates', 'Cost impact analysis', 'Priority ranking']
              },
              {
                id: '2',
                price: '$XX',
                title: 'Fluency Assessment',
                desc: 'Measures team AI literacy. Classifies individuals and teams as Aware, Starter, Confident, or Pioneer.',
                features: ['Individual scoring', 'Team heatmaps', 'Fluency classification', 'Training recommendations']
              },
              {
                id: '3',
                price: '$XX',
                title: 'Human Advantage',
                desc: 'Evaluates cultural readiness, leadership alignment, trust levels, and change capacity.',
                features: ['Cultural readiness score', 'Leadership alignment', 'Trust assessment', 'Change capacity index']
              }
            ].map((mod, i) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col h-full bg-secondary/30 rounded-[40px] p-10 border border-foreground/5"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-6xl font-black text-black/10 tabular-nums leading-none tracking-tighter">{mod.id}</span>
                  <span className="px-4 py-1.5 bg-black text-white text-xs font-bold rounded-full">{mod.price}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{mod.title}</h3>
                <p className="text-foreground/60 font-medium leading-relaxed mb-10">{mod.desc}</p>
                <div className="mt-auto space-y-4 pt-8 border-t border-foreground/5">
                  {mod.features.map(f => (
                    <div key={f} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="font-medium text-sm text-foreground/80">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Matrix */}
      <section className="py-32 bg-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-3xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Your Priority Matrix.</h2>
            <p className="text-xl text-white/60 font-medium">Every department plotted across two axes. AI opportunity vs. team readiness.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-[40px] overflow-hidden p-[1px]">
            {[
              { title: 'Fast Track', cond: 'High opportunity + High readiness', act: 'Deploy now', bg: 'bg-white/5', hover: 'hover:bg-white/10' },
              { title: 'Train First', cond: 'High opportunity + Low readiness', act: 'Upskill before tools', bg: 'bg-black/50', hover: 'hover:bg-white/5' },
              { title: 'Optimise', cond: 'Low opportunity + High readiness', act: 'Revisit later', bg: 'bg-black/80', hover: 'hover:bg-black/60' },
              { title: 'Foundation', cond: 'Low opportunity + Low readiness', act: 'Build fundamentals first', bg: 'bg-black', hover: 'hover:bg-black/80' }
            ].map((quad, i) => (
              <div key={i} className={`${quad.bg} ${quad.hover} p-12 md:p-16 transition-colors duration-500 flex flex-col justify-center h-[300px]`}>
                <h3 className="text-3xl font-bold mb-4">{quad.title}</h3>
                <p className="text-white/40 text-sm font-semibold uppercase tracking-widest mb-8">{quad.cond}</p>
                <div className="flex items-center space-x-2 text-accent font-bold mt-auto">
                  <ArrowRight className="w-5 h-5" />
                  <span>{quad.act}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/20 blur-[150px] pointer-events-none" />
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">How it works.</h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: '01', title: 'Complete the diagnostic', desc: 'Answer questions about your operations, team capabilities, and culture. Takes 15 to 20 minutes per module.' },
              { step: '02', title: 'Receive your Priority Matrix', desc: 'Every department plotted on a 2×2 grid showing exactly where to start, where to train, and where to wait.' },
              { step: '03', title: 'Get your action plan', desc: 'A prioritised roadmap with specific recommendations for tools, training, and quick wins. Ready to present to leadership.' }
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row md:items-center gap-8 bg-white p-8 md:p-12 rounded-[32px] shadow-sm"
              >
                <div className="text-4xl font-black text-black/10 w-24">{s.step}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-foreground/60 font-medium text-lg leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      {product.stats && (
        <section className="bg-white border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/5">
              {product.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="py-10 px-8 text-center"
                >
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-2">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-foreground/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {product.faqs && (
        <section className="py-32 bg-white border-t border-black/5">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-6">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Questions, answered.</h2>
            </motion.div>
            <div className="divide-y divide-black/10 border-t border-black/10">
              {product.faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
            </div>
          </div>
        </section>
      )}

      {/* Built For & Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-8">Built for.</p>
            <div className="flex flex-wrap justify-center gap-3 mb-24">
              {['Business owners', 'Ops & finance heads', 'HR & L&D leads', 'IT directors', 'Consultants'].map(role => (
                <span key={role} className="px-6 py-3 bg-secondary/50 rounded-full font-semibold text-foreground/80 text-sm">
                  {role}
                </span>
              ))}
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
              Start with the Opportunity Scan.
            </h2>
            <p className="text-foreground/60 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
              Ten minutes. Find out which departments have the biggest AI opportunity.
            </p>
            <a
              href="https://calendar.app.google/bZ3j6WLHznPt1FP4A"
              className="inline-flex items-center space-x-3 px-12 py-5 rounded-full font-bold text-white text-lg transition-all hover:opacity-90 hover:scale-[1.02] shadow-2xl bg-[#2563EB]"
            >
              <span>Start your diagnostic</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <MoreProducts currentProductId={product.id} />

      <Footer minimal />
    </div>
  );
}
