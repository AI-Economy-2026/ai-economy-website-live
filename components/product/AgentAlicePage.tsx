'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Sparkles, MessageSquare, Globe, Zap, ChevronRight, PenTool, Share2, ChevronDown, ChevronUp } from 'lucide-react';
import { Product } from '@/data/products';
import { Footer } from '@/components/layout/Footer';
import { MoreProducts } from '@/components/product/MoreProducts';
import { ContactForm } from '@/components/product/ContactForm';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10 last:border-0">
      <button className="w-full text-left py-6 flex items-start justify-between gap-4 group" onClick={() => setOpen(o => !o)}>
        <span className="text-lg font-semibold text-foreground group-hover:text-[#2563EB] transition-colors leading-snug">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" /> : <ChevronDown className="w-5 h-5 text-foreground/40 flex-shrink-0 mt-0.5 group-hover:text-[#2563EB] transition-colors" />}
      </button>
      {open && <div className="pb-6 text-foreground/70 text-base font-medium leading-relaxed pr-8">{answer}</div>}
    </div>
  );
}

interface AgentAlicePageProps {
  product: Product;
}

export function AgentAlicePage({ product }: AgentAlicePageProps) {
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
            href={product.ctaLink || product.externalLink || "#contact"}
            target={(product.externalLink || product.ctaLink)?.startsWith('#') ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#2563EB] text-white rounded-full font-semibold text-sm hover:bg-[#1D4ED8] transition-all"
          >
            {product.cta}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-14 min-h-[85vh] flex items-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-30 grayscale"
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
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">Marketing & Content Agent</p>
            <h1 className="text-6xl md:text-[90px] font-extrabold text-white tracking-tighter leading-[0.9] mb-8">
              Expertise that<br />doesn&apos;t sleep.
            </h1>
            <p className="text-white/70 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed mb-12">
              Imagine 25 years of strategic marketing expertise distilled into one tireless agent. Repurpose content, generate campaigns, and dominate search instantly.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href={product.ctaLink || product.externalLink || "#contact"}
                target={(product.externalLink || product.ctaLink)?.startsWith('#') ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-[#2563EB] text-white rounded-full font-bold hover:bg-[#1D4ED8] transition-all transform hover:scale-[1.02] text-center text-lg shadow-lg shadow-blue-500/20"
              >
                {product.cta}
              </a>
              <a href="#how-it-works" className="text-white/80 hover:text-white font-semibold transition-colors flex items-center gap-1 group">
                See the workflow <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Pain: Content Overwhelm */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-black">Scaling content is broken.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            {[
              { icon: Sparkles, text: 'Great content is trapped in single-use silos like whitepapers and webinars' },
              { icon: PenTool, text: 'The "empty page" problem forces marketing teams into slow, expensive cycles' },
              { icon: Share2, text: 'Multi-channel distribution requires manual work that teams simply cannot scale' }
            ].map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[32px] shadow-sm flex flex-col items-center text-center border border-black/5"
                >
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-[#2563EB]/5 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#2563EB]" />
                  </div>
                  <p className="text-lg font-semibold text-foreground/80 leading-relaxed">{point.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Solution: The Alice Engine */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.2em] mb-6">The Alice Engine</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                Input once.<br />Dominate everywhere.
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Content Repurposing', desc: 'Turn one webinar into 12 social posts, 3 blog articles, and a newsletter sequence.' },
                  { title: 'Search Dominance', desc: 'Optimized for traditional SEO and the new Generative Engine Optimization (GEO).' },
                  { title: 'Brand Integrity', desc: 'Alice learns your specific tone of voice so every output sounds like you.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-[#2563EB] flex-shrink-0 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-foreground/60 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[40px] overflow-hidden bg-black flex items-center justify-center border border-black/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-transparent" />
              <Zap className="w-32 h-32 text-[#2563EB] animate-pulse" />
              <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white max-w-[80%]">
                <p className="text-sm font-bold opacity-50 uppercase mb-2">Efficiency Boost</p>
                <p className="text-2xl font-bold">14x Faster Production</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Built for scale.</h2>
          <p className="text-xl text-white/60 font-medium">Alice handles the work. You handle the strategy.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: MessageSquare, title: 'Tone of Voice', desc: 'Upload your brand guide. Alice mimics your style perfectly.' },
            { icon: Globe, title: 'GEO Ready', desc: 'Content designed to be cited by Perplexity, Gemini, and ChatGPT.' },
            { icon: Zap, title: 'Instant Briefing', desc: 'Turn rough notes into professional marketing briefs in seconds.' },
            { icon: Sparkles, title: 'Visual Synergy', desc: 'Integration with image generation tools for cohesive campaigns.' }
          ].map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-8 rounded-[32px] border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Icon className="w-8 h-8 text-[#2563EB] mb-6" />
                <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                <p className="text-white/50 font-medium">{cap.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9] text-black">
              Put content on autopilot.
            </h2>
            <p className="text-foreground/60 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
              Stop letting great ideas go to waste. Hire Agent Alice today and scale your voice across every channel.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {product.stats && (
        <section className="bg-white border-b border-black/5"><div className="max-w-7xl mx-auto px-6"><div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/5">{product.stats.map((stat, i) => (<motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="py-10 px-8 text-center"><div className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-2">{stat.value}</div><div className="text-xs font-bold uppercase tracking-widest text-foreground/40">{stat.label}</div></motion.div>))}</div></div></section>
      )}
      {product.faqs && (
        <section className="py-32 bg-white border-t border-black/5"><div className="max-w-4xl mx-auto px-6"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16"><p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-6">FAQ</p><h2 className="text-4xl md:text-5xl font-bold tracking-tight">Questions, answered.</h2></motion.div><div className="divide-y divide-black/10 border-t border-black/10">{product.faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}</div></div></section>
      )}
      <MoreProducts currentProductId={product.id} />

      <Footer minimal />
    </div>
  );
}
