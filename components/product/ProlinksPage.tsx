'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronRight,
  FileUp,
  LayoutTemplate,
  MousePointerClick,
  Sparkles,
  Bot,
  Headphones,
  Users,
  ChartColumn,
  ShieldCheck,
  Paperclip,
} from 'lucide-react';
import { Product } from '@/data/products';
import { Footer } from '@/components/layout/Footer';

interface ProlinksPageProps {
  product: Product;
}

const DEMO_URL = '/contact';
const SITE_URL = 'https://prolinksai.com/';

const methods = [
  {
    icon: FileUp,
    title: 'Transform existing files',
    body: 'Upload a PDF or Word document and turn it into a smart document in about a minute',
  },
  {
    icon: LayoutTemplate,
    title: 'Professional templates',
    body: 'Start from the template library or upload your own branded templates, so every document stays on brand',
  },
  {
    icon: MousePointerClick,
    title: 'DIY builder',
    body: 'Drag and drop to build exactly what you need from scratch, with full control over the layout',
  },
  {
    icon: Sparkles,
    title: 'AI prompt builder',
    body: 'Describe the document you want. Add attachments, navigation, your branding and your team, and PROLINKS builds it',
  },
];

const features = [
  {
    icon: Bot,
    title: 'PROBOT, your 24/7 assistant',
    body: 'Readers can ask the document anything. PROBOT draws on the content and attachments to answer instantly, in any language, by voice or text',
  },
  {
    icon: Headphones,
    title: 'Listen to your documents',
    body: 'AI-narrated audio overviews give a summary or a full read, section by section. Ideal for reviewing on the go',
  },
  {
    icon: Users,
    title: 'Collaborate with your team and clients',
    body: 'Collect feedback before and after you publish, and get documents approved faster',
  },
  {
    icon: ChartColumn,
    title: 'Know what works',
    body: 'See who viewed, how long they spent and which sections held their attention, in real time',
  },
  {
    icon: Paperclip,
    title: 'Organised attachments',
    body: 'Supporting files live inside the document, in order, instead of a pile of email attachments',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    body: 'Encryption, password control and role-based access, so you decide who sees what',
  },
];

const useCases = [
  'Proposals and quotes that need to be read, not skimmed',
  'Capability statements and tender responses',
  'Investor decks and board reports',
  'Client reports and case studies that need to prove their impact',
  'Onboarding packs, policies and internal communications',
];

export function ProlinksPage({ product }: ProlinksPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#20242C]">
      {/* Top Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b h-14 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-foreground/60 hover:text-foreground transition-colors font-semibold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>AIEconomy</span>
          </Link>
          <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest">Prolinks</span>
          <Link
            href={DEMO_URL}
            className="px-6 py-2 bg-[#004AAD] text-white rounded-full font-semibold text-sm hover:bg-[#003A8C] transition-all"
          >
            Request a demo
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-14 min-h-[85vh] flex items-center overflow-hidden bg-[#1C1C1E] text-white">
        <div className="absolute inset-0 z-0">
          <img src={product.image} alt="" className="w-full h-full object-cover opacity-40 grayscale" />
          <div className="absolute inset-0 bg-[#004AAD] mix-blend-multiply opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E] via-[#1C1C1E]/90 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">Document AI</p>
              <span className="inline-flex rounded-full bg-[#004AAD] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                Now live
              </span>
            </div>
            <h1 className="mb-8 text-5xl md:text-[88px] font-extrabold text-white tracking-tighter leading-[0.9]">
              Smart documents<br />built for business
            </h1>
            <p className="mb-10 text-white/90 text-xl md:text-2xl font-medium max-w-2xl leading-snug">
              PROLINKS turns static PDFs and Word files into AI-powered smart documents. Elevate your client experience, cut your creation time, and see exactly what lands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={DEMO_URL}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#004AAD] text-white rounded-full font-bold hover:bg-[#003A8C] transition-all text-lg shadow-2xl"
              >
                Request a demo <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 border border-white/40 text-white rounded-full font-semibold hover:bg-white/10 transition-all text-lg"
              >
                Visit prolinksai.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">What is PROLINKS</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight">
              Stop sending documents <span className="text-[#004AAD]">into the void</span>
            </h2>
          </div>
          <div className="space-y-5 text-lg font-medium leading-relaxed text-[#20242C]/75">
            <p>
              You send a proposal, a report or a capability statement as a PDF, and then you wait. You do not know if it was opened, read or passed on.
            </p>
            <p>
              PROLINKS replaces the attachment with a smart, branded web document. Your reader gets something easy to navigate on any device, with an AI assistant and audio overview built in. You get feedback, approvals and real engagement data.
            </p>
          </div>
        </div>
      </section>

      {/* Create your way */}
      <section className="py-24 bg-[#F4F4F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">Create your way</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
              Four ways to build, one platform
            </h2>
            <p className="text-[#20242C]/70 text-lg font-medium leading-relaxed">
              Pick the creation method that fits how you work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methods.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl bg-white p-8"
                >
                  <Icon className="w-6 h-6 text-[#004AAD] mb-5" />
                  <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                  <p className="text-[#20242C]/70 font-medium leading-relaxed">{m.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">What you get</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight">
              Smart, secure, <span className="text-[#004AAD]">seamless</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="border-t-2 border-[#004AAD] pt-6">
                  <Icon className="w-6 h-6 text-[#004AAD] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-[#20242C]/70 font-medium leading-relaxed">{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-24 bg-[#1C1C1E] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="mb-4 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">Who it is for</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight">
              Any business that sends documents that matter
            </h2>
          </div>
          <ul className="divide-y divide-white/15 border-t border-white/15">
            {useCases.map((u) => (
              <li key={u} className="py-5 text-lg font-medium text-white/90">
                {u}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#F4F4F6]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">See it in action</p>
          <h2 className="mb-5 text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95]">
            Book a PROLINKS demo
          </h2>
          <p className="mb-10 text-[#20242C]/70 text-lg font-medium leading-relaxed">
            We will walk you through turning one of your own documents into a smart document, and show you what your readers do with it.
          </p>
          <Link
            href={DEMO_URL}
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#004AAD] text-white rounded-full font-bold hover:bg-[#003A8C] transition-all text-lg"
          >
            Request a demo <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer minimal />
    </div>
  );
}
