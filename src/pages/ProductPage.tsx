import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, products } from '@/data/products';
import { Footer } from '@/components/layout/Footer';
import { MoreProducts } from '@/components/product/MoreProducts';
import { PriorityAIPage } from './PriorityAIPage';
import { SarahSpeaksPage } from './SarahSpeaksPage';
import { AgentAlicePage } from './AgentAlicePage';
import { AIConsultancyPage } from './AIConsultancyPage';
import { GathaPage } from './GathaPage';
import { AIToolkitPage } from './AIToolkitPage';

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

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id!);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product not found</h1>
          <Link to="/" className="text-[#2563EB] hover:underline font-semibold">← Back to home</Link>
        </div>
      </div>
    );
  }

  const currentIndex = products.findIndex(p => p.id === id);
  const prevProduct = products[currentIndex - 1];
  const nextProduct = products[currentIndex + 1];

  if (id === 'priority-ai') {
    return <PriorityAIPage product={product} />;
  }

  if (id === 'agent-alice') {
    return <AgentAlicePage product={product} />;
  }

  if (id === 'gatha-ai') {
    return <GathaPage product={product} />;
  }

  if (id === 'sarah-speaks') {
    return <SarahSpeaksPage product={product} />;
  }

  if (id === 'ai-consultancy') {
    return <AIConsultancyPage product={product} />;
  }

  if (id === 'ai-toolkit') {
    return <AIToolkitPage />;
  }

  const ctaHref = product.ctaLink || product.externalLink || 'https://calendar.app.google/bZ3j6WLHznPt1FP4A';
  const ctaTarget = ctaHref.startsWith('#') ? undefined : '_blank';

  return (
    <div className="min-h-screen bg-white">
      {/* Top Nav Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b h-14 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-foreground/60 hover:text-foreground transition-colors font-semibold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>AI Economy</span>
          </Link>
          <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest">{product.label}</span>
          <a
            href={ctaHref}
            target={ctaTarget}
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#2563EB] text-white rounded-full font-semibold text-sm hover:bg-[#1D4ED8] transition-all"
          >
            {product.cta}
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-14 min-h-[90vh] flex items-center overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {!product.isBlack && product.image ? (
            <>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover opacity-40 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center">
              <span className="text-[400px] font-bold text-white/5 select-none leading-none">{product.letter}</span>
            </div>
          )}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">{product.label}</p>
            <h1 className="text-6xl md:text-[100px] font-extrabold text-white tracking-tighter leading-[0.9] mb-8">
              {product.name}
            </h1>
            <p className="text-white/70 text-2xl md:text-3xl font-medium max-w-2xl leading-snug mb-4">
              {product.hero.headline}
            </p>
            <p className="text-white/50 text-lg md:text-xl font-medium max-w-xl leading-relaxed mb-10">
              {product.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={ctaHref}
                target={ctaTarget}
                rel="noopener noreferrer"
                className="px-10 py-4 bg-[#2563EB] text-white rounded-full font-bold hover:bg-[#1D4ED8] transition-all transform hover:scale-[1.02] text-lg shadow-lg shadow-blue-500/20"
              >
                {product.cta}
              </a>
              <a href="#overview" className="text-white/60 hover:text-white font-semibold transition-colors flex items-center gap-1 py-4">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
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
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-foreground/40">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section id="overview" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-8">Overview</p>
              <p className="text-2xl md:text-3xl font-medium text-foreground/80 leading-relaxed">
                {product.overview}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-[#F5F5F7] rounded-[32px] p-10">
                <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-6">Expected Outcome</p>
                <p className="text-lg font-semibold text-foreground leading-relaxed mb-10">
                  {product.outcome}
                </p>
                <a
                  href={ctaHref}
                  target={ctaTarget}
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-4 rounded-full font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ backgroundColor: product.color }}
                >
                  <span>{product.cta}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      {product.targetAudience && (
        <section className="py-24 bg-[#F5F5F7] border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-6">Who It's For</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  Built for people who are serious about results.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                {product.targetAudience.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                    <span className="text-base font-medium text-foreground/80 leading-snug">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-32 bg-white border-t border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-6">Key Capabilities</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              What {product.name} does
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 rounded-[32px] overflow-hidden">
            {product.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className="bg-white p-12 flex flex-col"
              >
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-8 text-white font-bold text-lg"
                  style={{ backgroundColor: product.color }}
                >
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-foreground/60 text-lg font-medium leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {product.faqs && (
        <section className="py-32 bg-white border-t border-black/5">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-6">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Questions, answered.
              </h2>
            </motion.div>

            <div className="divide-y divide-black/10 border-t border-black/10">
              {product.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{ backgroundColor: product.color }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-8">{product.label}</p>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
              Ready to get started?
            </h2>
            <p className="text-white/60 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
              {product.tagline} {product.description}
            </p>
            <a
              href={ctaHref}
              target={ctaTarget}
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-12 py-5 rounded-full font-bold text-white text-lg transition-all hover:opacity-90 hover:scale-[1.02] shadow-2xl"
              style={{ backgroundColor: product.color }}
            >
              <span>{product.cta}</span>
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
