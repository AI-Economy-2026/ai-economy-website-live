'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, animate, useInView } from 'framer-motion';
import { ArrowLeft, ChevronRight, Search, Activity, Wrench, ClipboardCheck, Gauge, Handshake } from 'lucide-react';
import { Product } from '@/data/products';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/product/ContactForm';

interface AISearchPageProps {
  product: Product;
}

const BOOKING_URL = 'https://calendar.app.google/KMWhVZmsAGEMrna2A';
const PARTNER_URL = 'https://gatha.ai';

const engines = [
  { name: 'ChatGPT', logo: '/logos/openai.svg' },
  { name: 'Claude', logo: '/logos/anthropic.svg' },
  { name: 'Gemini', logo: '/logos/googlegemini.svg' },
  { name: 'Perplexity', logo: '/logos/perplexity.svg' },
  { name: 'Google AI Overviews', logo: '/logos/google.svg' },
];

function EngineChips({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {engines.map((e) => (
        <span key={e.name} className="inline-flex items-center gap-2 rounded-full border border-[#20242C]/10 bg-white px-4 py-2 text-xs font-semibold text-[#20242C]">
          <img src={e.logo} alt="" className="h-4 w-4" />
          {e.name}
        </span>
      ))}
    </div>
  );
}

const helpCtas = [
  { icon: Search, title: 'Book an audit', body: 'We ask the engines the questions your customers ask and show you who gets named.', cta: 'Call us for an audit', href: BOOKING_URL },
  { icon: ClipboardCheck, title: 'Assess your AI readiness', body: 'A short review of how ready your business is for AI-led search and AI in the business.', cta: 'Assess your readiness', href: '/product/priority-ai' },
  { icon: Wrench, title: 'Site health and setup', body: 'Can the engines read your site? We check the crawl, structure and schema, then fix it.', cta: 'Check my site', href: BOOKING_URL },
  { icon: Gauge, title: 'Prompt tracking support', body: 'We pick the prompts that matter, track them weekly and report against your starting point.', cta: 'Get tracking support', href: BOOKING_URL },
];

const explainer = [
  {
    title: 'Search has changed',
    body: 'People no longer type keywords and scan ten links. They ask ChatGPT, Claude, Gemini or Perplexity a question and get one answer. Google now puts its own AI answer above the results.',
  },
  {
    title: 'One answer, a few names',
    body: 'That answer names two or three businesses. If you are one of them, you get the call. If not, the customer never knew you existed. There is no page two.',
  },
  {
    title: 'It is not decided by ad spend',
    body: 'AI engines build the answer from what they can find and trust about you: your site, your Google listing, reviews, directories and who else mentions you. Clear and consistent beats big and loud.',
  },
];

const services = [
  {
    icon: Search,
    label: 'Audit',
    title: 'Know where you stand',
    body: 'A one-off check across ChatGPT, Claude, Gemini, Perplexity and Google AI on the questions your customers actually ask. You get the answers, screenshots included, who gets named instead of you, and a plain-English list of what to fix.',
    fit: 'For businesses that want the facts first, or have a team who can action a list.',
  },
  {
    icon: Activity,
    label: 'Track and manage',
    title: 'Watch it move, every month',
    body: 'The same questions run weekly across every engine, with a monthly report against your starting point. We keep the fix list current as the answers shift, and you or your agency work through it.',
    fit: 'For businesses with in-house marketing or an SEO agency already in place.',
  },
  {
    icon: Wrench,
    label: 'Done for you',
    title: 'We check, we fix, we track',
    body: 'We run the audit, make the fixes ourselves (answer pages, listings, consistency, reviews, structured data) and track the movement every month. You get on with the work; we handle the whole thing.',
    fit: 'For founders and businesses who do not want another to-do list.',
  },
];

const influences = [
  { n: '1', title: 'Answer pages', body: 'Does your site answer the questions customers ask, in plain words an AI can quote?' },
  { n: '2', title: 'Site crawl', body: 'Can the AI engines read your site at all? Speed, structure, blocked pages and broken links.' },
  { n: '3', title: 'Citations', body: 'Who else mentions you? Directories, industry sites, local media and partners the engines trust.' },
  { n: '4', title: 'Consistency', body: 'Is your name, address, services and description identical across your site, Google listing and socials?' },
  { n: '5', title: 'Reviews', body: 'How many, how recent, and what they say. Engines read reviews as evidence.' },
  { n: '6', title: 'Structured data', body: 'The code behind the page that tells an engine what kind of business you are and what you do.' },
];

const stats = [
  { to: 14, decimals: 0, suffix: ' billion', label: 'Daily searches', sub: 'Google Search' },
  { to: 2.5, decimals: 1, suffix: ' billion', label: 'Monthly users', sub: 'Google AI Overviews' },
  { to: 1, decimals: 0, suffix: ' billion', label: 'Monthly users', sub: 'Google AI Mode' },
  { to: 900, decimals: 0, suffix: ' million', label: 'Weekly users', sub: 'ChatGPT' },
];

const growth = [
  { title: 'ChatGPT weekly users', from: 400, to: 900, decimals: 0, suffix: 'M', startLabel: 'Feb 2025', endLabel: 'Feb 2026' },
  { title: 'Google AI Overviews monthly users', from: 1.5, to: 2.5, decimals: 1, suffix: 'B', startLabel: 'May 2025', endLabel: 'May 2026' },
];

function CountUp({ from, to, decimals, suffix }: { from: number; to: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [val, setVal] = useState(from);
  useEffect(() => {
    if (!inView) return;
    const c = animate(from, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(v) });
    return () => c.stop();
  }, [inView, from, to]);
  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}

const faqs = [
  {
    question: 'Can you guarantee I will show up?',
    answer:
      'No, and be wary of anyone who does. AI answers change from run to run and from engine to engine. What we can do is measure how often you appear across many runs, fix the things that influence it, and report the movement honestly against your starting point.',
  },
  {
    question: 'What is AI search?',
    answer:
      'Instead of typing keywords into Google and clicking through ten blue links, people now ask a question in ChatGPT, Claude, Gemini or Perplexity and get one answer. Google itself now puts an AI answer above the results. If that answer names a business, that business gets the call. If it does not name you, you are invisible to that customer.',
  },
  {
    question: 'How does it work?',
    answer:
      'AI engines read the web, your Google Business listing, review sites and directories, then write an answer from what they find. They favour businesses that are described clearly and consistently everywhere, have pages that answer the actual question, and get mentioned by other sites. They do not favour the biggest ad budget.',
  },
  {
    question: 'Is this just SEO?',
    answer:
      'It overlaps, but it is not the same. SEO gets you a position on a results page. AI search gives one answer, and either you are in it or you are not. A lot of businesses that rank fine on Google are nowhere in AI answers. Already have an SEO agency? Keep them. We handle the AI search side and work alongside them. No agency? We do both, Google and AI, in one plan.',
  },
  {
    question: 'Why does the answer change each time?',
    answer:
      'AI answers are not fixed like a ranking. Ask twice and the names shift. That is why a single check is a snapshot, and why we measure how often you are mentioned across many runs and many questions, not just one.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'At kick-off we agree the ten questions your customers actually ask. Then we track how often each AI engine names you on those questions, run many times over. That share of mentions is the score. We report it monthly against the starting point, alongside your Google rankings.',
  },
  {
    question: 'Which service do I need?',
    answer:
      'If you want the facts and have someone to action them, start with the audit. If you have marketing in-house or an agency and want the numbers kept honest month to month, track and manage. If you would rather not touch any of it, done for you covers the audit, the fixes and the tracking. Most people start with a call and we point you at the right one.',
  },
  {
    question: 'How long until something moves?',
    answer:
      'Google AI Overviews and Perplexity usually move within weeks of the fixes going live. ChatGPT is the slowest and can take months. We say this on the first call and put it in the proposal, so nobody expects to be number one in ChatGPT by next month.',
  },
];

export function AISearchPage({ product }: AISearchPageProps) {
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
          <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest">AI Search</span>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#004AAD] text-white rounded-full font-semibold text-sm hover:bg-[#003A8C] transition-all"
          >
            Schedule a call
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-14 min-h-[90vh] flex items-center overflow-hidden bg-[#1C1C1E] text-white">
        <div className="absolute inset-0 z-0">
          <img src="/images/geo_audit_hero_web.jpg" alt="" className="w-full h-full object-cover opacity-40 grayscale" />
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
            <p className="mb-6 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">AI search visibility for founders and businesses</p>
            <h1 className="mb-8 text-5xl md:text-[96px] font-extrabold text-white tracking-tighter leading-[0.9]">
              The search game<br />has changed.
            </h1>
            <p className="mb-8 text-white/70 text-xl md:text-2xl font-medium max-w-2xl leading-snug">
              Customers now ask ChatGPT, Claude, Gemini, Perplexity and Google AI who to call. Each gives its own answer, and the answers keep moving. The aim is not to show up once. It is to be found, again and again, in all search.
            </p>
            <EngineChips className="mb-10" />
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#004AAD] text-white rounded-full font-bold hover:bg-[#003A8C] transition-all text-lg shadow-2xl">
                Call us for an audit <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-white/25 text-white rounded-full font-semibold hover:bg-white/10 transition-all text-lg">
                How we help
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="mb-3 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">AI search is here to stay</p>
          <p className="mb-12 max-w-2xl text-[#20242C]/70 text-lg font-medium leading-relaxed">
            Buyers still Google, and more of them now ask ChatGPT, Claude, Gemini and Perplexity. If AI does not name you, it names someone else.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {stats.map((st) => (
              <div key={st.sub} className="border-t border-[#20242C]/20 pt-6">
                <div className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#20242C]">
                  <CountUp from={0} to={st.to} decimals={st.decimals} suffix={st.suffix} />
                </div>
                <p className="mt-3 text-[#20242C] text-sm font-semibold">{st.label}</p>
                <p className="text-[#20242C]/60 text-sm font-medium">{st.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <p className="mb-3 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">AI search, one year on</p>
            <p className="mb-10 max-w-2xl text-[#20242C]/70 text-lg font-medium leading-relaxed">More places to get found. AI search is gaining real traction.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {growth.map((g) => (
                <div key={g.title} className="border-t border-[#20242C]/20 pt-6">
                  <p className="text-[#20242C] text-sm font-semibold mb-3">{g.title}</p>
                  <div className="flex items-baseline gap-6">
                    <div>
                      <div className="text-2xl font-extrabold tracking-tighter text-[#20242C]/40">{g.from}{g.suffix}</div>
                      <p className="text-[#20242C]/50 text-xs font-medium">{g.startLabel}</p>
                    </div>
                    <div>
                      <div className="text-5xl font-extrabold tracking-tighter text-[#004AAD]"><CountUp from={g.from} to={g.to} decimals={g.decimals} suffix={g.suffix} /></div>
                      <p className="text-[#20242C]/50 text-xs font-medium">{g.endLabel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-12 text-[#20242C]/50 text-xs font-medium">Sources: Google (5 trillion searches a year, 2025; AI Overviews at I/O May 2025 and May 2026; AI Mode, I/O May 2026), OpenAI (February 2025 and February 2026).</p>
        </div>
      </section>

      {/* Found in all search */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-[#1C1C1E]">
            <img src="/images/priority_ai_hero_web.jpg" alt="" className="absolute inset-0 w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-[#004AAD] mix-blend-multiply opacity-80" />
          </div>
          <div>
            <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">Not just showing up</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#20242C] leading-tight mb-5">
              It is about being found in <span className="text-[#004AAD]">all search</span>
            </h2>
            <p className="text-foreground/60 text-lg font-medium leading-relaxed mb-4">
              Showing up once is luck. Being found, consistently, is the work. A good Google ranking does not mean ChatGPT names you, and being named by Claude does not mean Gemini does.
            </p>
            <p className="text-foreground/60 text-lg font-medium leading-relaxed mb-4">
              AI answers are fluid. Ask the same question twice and the names change, so nobody can promise you a spot. What we can do is measure how often you appear, work on the things that decide it, and show you the movement.
            </p>
            <p className="text-foreground/60 text-lg font-medium leading-relaxed mb-8">
              That is the difference between hoping and knowing.
            </p>
            <EngineChips />
          </div>
        </div>
      </section>

      {/* What is AI search visibility */}
      <section id="how-it-works" className="relative overflow-hidden py-28 bg-white">
        <img src="/images/abstract_mesh.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">AI search visibility, explained</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#20242C] leading-tight mb-4">
              What it is, and <span className="text-[#004AAD]">why it matters now</span>
            </h2>
            <p className="text-[#20242C]/70 text-lg font-medium leading-relaxed">
              AI search visibility is simple to define: when someone asks an AI engine a question your business should answer, does your name come back? Three things to know.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {explainer.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="border-t border-[#20242C]/20 pt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#004AAD] mb-3">0{i + 1}</p>
                <h3 className="text-2xl font-extrabold tracking-tight text-[#20242C] mb-3">{item.title}</h3>
                <p className="text-[#20242C]/70 font-medium leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What influences AI search visibility */}
      <section className="relative overflow-hidden py-28 bg-white text-[#20242C]">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-[#004AAD] text-xs font-bold uppercase tracking-[0.2em]">What decides it</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">What influences AI search visibility</h2>
            <p className="text-[#20242C]/70 text-lg font-medium leading-relaxed">
              AI engines do not rank pages. They build an answer from what they can find and trust about you. Six things decide whether you are in it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {influences.map((item) => (
              <div key={item.n} className="border-t border-[#20242C]/20 pt-6">
                <p className="mb-3 text-[#20242C]/40 text-xs font-bold tracking-[0.2em]">0{item.n}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#20242C]/70 font-medium leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt tracking */}
      <section className="relative overflow-hidden py-28 bg-[#20242C] text-white">
        <img src="/images/abstract_ripples.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">Prompt visibility tracking</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-4">
              Track the prompts your customers <span className="text-white/60">actually ask</span>
            </h2>
            <p className="text-white/70 text-lg font-medium leading-relaxed">
              Our own software runs your prompts across every engine on a schedule, so you see a trend instead of a lucky screenshot.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: '01', title: 'Choose the prompts', body: 'We agree the questions that matter to your business: who to call, who to trust, who is best for what.' },
              { n: '02', title: 'Run them on every engine', body: 'The same prompts run again and again across ChatGPT, Claude, Gemini, Perplexity and Google AI, because one answer proves nothing.' },
              { n: '03', title: 'Report the movement', body: 'You see how often you are named, who is named instead, and what changed since your starting point. We do not guarantee a result. We show you the real one.' },
            ].map((t) => (
              <div key={t.n} className="border-t border-white/10 pt-6">
                <p className="mb-3 text-white/40 text-xs font-bold tracking-[0.2em]">{t.n}</p>
                <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                <p className="text-white/70 font-medium leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">How we help</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#20242C] leading-tight mb-4">
              Audit. Track and manage. <span className="text-[#004AAD]">Done for you.</span>
            </h2>
            <p className="text-[#20242C]/60 text-lg font-medium leading-relaxed">
              Three ways to work with us, depending on how much you want to hand over. Every one starts with the same check on the questions your customers ask.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex flex-col border-t-2 border-[#004AAD] pt-6">
                  <Icon className="w-6 h-6 text-[#004AAD] mb-5" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2 text-[#20242C]/40">{svc.label}</p>
                  <h3 className="text-2xl font-extrabold tracking-tight mb-3 text-[#20242C]">{svc.title}</h3>
                  <p className="font-medium leading-relaxed mb-6 text-[#20242C]/70">{svc.body}</p>
                  <p className="mt-auto text-sm font-medium text-[#20242C]/50">{svc.fit}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#004AAD] text-white rounded-full font-bold hover:bg-[#003A8C] transition-all text-lg">
              Talk through the options <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Search has changed CTAs */}
      <section className="relative overflow-hidden py-28 bg-[#F4F4F6]">
        <img src="/images/abstract_mesh.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">Search has changed</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#20242C] leading-tight mb-4">
              Start with a <span className="text-[#004AAD]">call</span>
            </h2>
            <p className="text-[#20242C]/70 text-lg font-medium leading-relaxed">
              Pick the place to begin. Each one starts with a conversation, and we point you at what is worth doing.
            </p>
          </div>
          <div className="border-t border-[#20242C]/20">
            {helpCtas.map((c) => {
              const external = c.href.startsWith('http');
              return (
                <a key={c.title} href={c.href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="group grid grid-cols-1 md:grid-cols-[1fr_1.5fr_12rem] items-center gap-3 md:gap-10 border-b border-[#20242C]/20 py-7">
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#20242C] group-hover:text-[#004AAD] transition-colors">{c.title}</h3>
                  <p className="text-[#20242C]/70 font-medium leading-relaxed">{c.body}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#004AAD] md:justify-end">{c.cta}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-6 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">Who it is for</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border-t-2 border-[#004AAD] pt-6">
              <h3 className="text-2xl font-extrabold tracking-tight text-[#20242C] mb-3">Businesses</h3>
              <p className="text-[#20242C]/70 font-medium leading-relaxed">Clinics, trades, professional firms and B2B services. Start with an audit, keep it tracked, or hand the whole thing over. Whichever you pick, we measure the questions your customers ask, not vanity keywords.</p>
            </div>
            <div className="border-t-2 border-[#004AAD] pt-6">
              <h3 className="text-2xl font-extrabold tracking-tight text-[#20242C] mb-3">Founders and personal brands</h3>
              <p className="text-[#20242C]/70 font-medium leading-relaxed">When someone asks AI who the experts are in your field, is it your name that comes back? Same audit, same fixes, built around you rather than a company.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Need a hand */}
      <section className="relative overflow-hidden bg-[#1C1C1E]">
        <img src="/images/abstract_ribbons.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-white grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <p className="mb-4 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">Done for you</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-5">Need a hand?</h2>
              <p className="text-white/70 text-lg font-medium leading-relaxed mb-6">
                Most businesses do not want to do this themselves. We run the audit, make the fixes and track the movement every month, so you can get on with the work. Already have an SEO agency? Keep them. Take the audit or track and manage, and we work alongside them.
              </p>
              <p className="text-white/50 text-sm font-medium">
                I have been helping businesses navigate digital change for 25 years. Now it is AI. Be seen in search. Sarah Balmer
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img src="/images/sarah_balmer_web.jpg" alt="Sarah Balmer" className="mb-3 h-72 w-full rounded-2xl object-cover" style={{ objectPosition: "50% 30%" }} />
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#004AAD] text-white rounded-full font-bold hover:bg-[#003A8C] transition-all text-lg"
              >
                Schedule a call <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-5 border border-white/25 text-white rounded-full font-semibold hover:bg-white/10 transition-all text-lg"
              >
                Send a message
              </a>
            </div>
          </div>
      </section>

      {/* Partner with us */}
      <section className="relative overflow-hidden bg-white text-[#20242C]">
        <img src="/images/white_label_hero_web.jpg" alt="" className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-90 grayscale lg:w-1/2" />
        <div className="absolute inset-y-0 right-0 w-full bg-[#004AAD] mix-blend-multiply opacity-60 lg:w-1/2" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div>
            <div className="py-28 max-w-2xl">
              <Handshake className="w-7 h-7 text-[#004AAD] mb-6" />
              <p className="mb-4 text-[#20242C]/50 text-xs font-bold uppercase tracking-[0.2em]">Agencies and resellers</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-5">Want to partner with us?</h2>
              <p className="text-[#20242C]/70 text-lg font-medium leading-relaxed mb-4">
                Your clients are asking where they show up in ChatGPT, Claude and Google AI. Gatha is the audit and tracking tool behind this service, and you can run it under your own brand with white label reports.
              </p>
              <p className="text-[#20242C]/70 text-lg font-medium leading-relaxed mb-8">
                Resell it as it is, or hand us the client work and we deliver it done for you, with you as the face.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PARTNER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#004AAD] text-white rounded-full font-bold hover:bg-[#003A8C] transition-all text-lg">
                  See the reseller program <ChevronRight className="w-5 h-5" />
                </a>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 border border-[#20242C] text-[#20242C] rounded-full font-semibold hover:bg-[#20242C]/5 transition-all text-lg">
                  Talk to us first
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-28 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <p className="mb-4 text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em]">AI search, explained</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Questions, answered.</h2>
          </div>
          <div className="divide-y divide-black/10 border-t border-black/10">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-[#F4F4F6]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="mb-4 text-[11px] font-bold text-[#004AAD] uppercase tracking-[0.2em]">Get in touch</p>
          <h2 className="mb-4 text-5xl md:text-6xl font-extrabold tracking-tighter text-[#20242C] leading-[0.9]">
            Find out where you stand.
          </h2>
          <p className="mb-12 text-foreground/60 text-lg font-medium leading-relaxed">
            Tell us your business and the question your customers ask. We will run the check and show you the answer.
          </p>
          <ContactForm />
        </div>
      </section>

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
        onClick={() => setOpen((o) => !o)}
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
