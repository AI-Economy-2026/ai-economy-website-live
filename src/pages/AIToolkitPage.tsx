import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Search, BookOpen, Zap,
  Menu, X, Pen, Image, Code, Video, Search as SearchIcon, Music
} from 'lucide-react';
import { tools, pricingConfig, type AITool } from '@/data/toolkit-tools';
import { Footer } from '@/components/layout/Footer';

// ─── Disclaimer strip ────────────────────────────────────────────────────────
function Disclaimer() {
  return (
    <div className="bg-[#F5F5F7] border-b border-black/5 py-2 px-4 text-center">
      <p className="text-[11px] text-foreground/40 font-medium">
        This site contains affiliate links. We may earn a commission when you click through and purchase. This helps keep our reviews free.{' '}
        <a href="#" className="underline hover:text-foreground/70 transition-colors">Learn more</a>
      </p>
    </div>
  );
}

// ─── Top nav ─────────────────────────────────────────────────────────────────
function ToolkitNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: 'All Tools', href: '/product/ai-toolkit/tools', internal: true },
    { label: 'Categories', href: '#categories', internal: false },
    { label: 'How It Works', href: '#how-it-works', internal: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex h-[56px] items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-semibold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>AI Economy</span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.internal ? (
                <Link key={link.label} to={link.href} className="px-3 py-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors rounded-md hover:bg-[#F9FAFB]">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="px-3 py-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors rounded-md hover:bg-[#F9FAFB]">
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#subscribe"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-[#111] transition-colors"
            >
              Get Updates
            </a>
            <button
              className="md:hidden p-1.5 rounded-md text-foreground/60 hover:text-foreground hover:bg-[#F9FAFB] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-black/10 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex px-2 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-[#F9FAFB] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#subscribe"
                className="flex items-center justify-center w-full py-2.5 rounded-lg bg-black text-white text-sm font-semibold"
              >
                Get Updates
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero({ searchQuery, onSearchChange }: { searchQuery: string; onSearchChange: (q: string) => void }) {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-white">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsl(0,0%,0%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,0%) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-0 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-0 items-end">

          <div className="pb-16 sm:pb-20">
            <div className="animate-fade-in-up mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1.5 rounded-full tracking-wide uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                Curated AI Tools, Updated Weekly
              </span>
            </div>

            <p className="animate-fade-in-up delay-50 text-sm font-medium text-[#6B7280] mb-3 tracking-wide uppercase">
              Your Journey Begins With
            </p>

            <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-[1.04] tracking-tight mb-6 max-w-3xl">
              AI Tools That{' '}
              <span className="text-[#2563EB]">Actually Work</span>
            </h1>

            <p className="animate-fade-in-up delay-200 text-lg text-[#6B7280] leading-relaxed max-w-2xl mb-10">
              We've tested and handpicked the best AI tools across writing, coding, design, video, and more. Skip the noise and get straight to the results.
            </p>

            <div className="animate-fade-in-up delay-300 max-w-xl mb-10">
              <div className="flex items-center gap-2.5 border border-black/15 rounded-xl px-4 py-3 bg-white shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black/10 transition-all">
                <Search className="text-[#9CA3AF] shrink-0" style={{ width: '18px', height: '18px' }} />
                <input
                  type="text"
                  placeholder="Search tools: writing, coding, image generation..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="flex-1 text-sm text-black bg-transparent outline-none placeholder:text-[#9CA3AF]"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="text-xs text-[#6B7280] hover:text-black px-2 py-0.5 rounded bg-[#F3F4F6] transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="animate-fade-in-up delay-400 flex flex-wrap items-center gap-3">
              <a
                href="#toolkit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white text-sm font-semibold hover:bg-[#111] transition-colors"
              >
                Explore Tools
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-black/15 text-[#374151] text-sm font-semibold hover:border-black hover:text-black transition-colors"
              >
                Browse Categories ›
              </a>
            </div>

            <div className="animate-fade-in-up delay-500 mt-12 flex flex-wrap items-center gap-8">
              {[
                { value: '50+', label: 'AI Tools Reviewed' },
                { value: '8', label: 'Categories' },
                { value: 'Weekly', label: 'Updates' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-xl font-bold text-black">{stat.value}</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-end justify-center animate-fade-in-up delay-300">
            <div className="relative w-[380px]">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F9DLQMDmFiPVlxtvVm2eBtiUPAbY2%2Fsarah30__46d93c63.png?alt=media&token=b07812b3-7e35-48e9-b3b4-06a4abf06c6f"
                alt="Sarah, AI Toolkit curator"
                className="w-full object-cover object-top"
                style={{ maxHeight: '560px', objectPosition: 'top center' }}
              />
              <div className="absolute bottom-8 left-0 bg-white border border-[#E5E7EB] rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold text-black">Sarah Speaks</p>
                <p className="text-[11px] text-[#6B7280]">AI Tools Curator</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Tool Card ───────────────────────────────────────────────────────────────
function ToolCard({ tool, index = 0 }: { tool: AITool; index?: number }) {
  const pricing = pricingConfig[tool.pricing];
  return (
    <article
      className="tool-card group relative flex flex-col rounded-xl border border-black/10 bg-white cursor-pointer overflow-hidden"
      style={{ animationDelay: `${index * 40}ms` }}
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
          Try {tool.name} →
        </button>
      </div>
    </article>
  );
}

// ─── Toolkit grid ─────────────────────────────────────────────────────────────
function ToolkitGrid({ filteredTools }: { filteredTools: AITool[] }) {
  const display = filteredTools.length > 0 ? filteredTools : tools;
  const featured = display.slice(0, 2);
  const rest = display.slice(2, 8);

  return (
    <section id="toolkit" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">Cut through AI overwhelm</h2>
          <p className="text-foreground/60 text-lg md:text-xl font-medium">Explore the toolkit</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {featured[0] && (
            <div className="col-span-12 lg:col-span-7 animate-fade-in-up">
              <ToolCard tool={featured[0]} />
            </div>
          )}
          {featured[1] && (
            <div className="col-span-12 lg:col-span-5 animate-fade-in-up delay-100">
              <ToolCard tool={featured[1]} />
            </div>
          )}

          {rest.map((tool, i) => (
            <div
              key={tool.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 animate-fade-in-up"
              style={{ animationDelay: `${(i + 2) * 80}ms` }}
            >
              <ToolCard tool={tool} index={i + 2} />
            </div>
          ))}

          {filteredTools.length === 0 && (
            <div className="col-span-12 lg:col-span-4 animate-fade-in-up delay-700">
              <Link
                to="/product/ai-toolkit/tools"
                className="toolkit-card group relative rounded-[32px] overflow-hidden bg-[#F5F5F7] border border-black/5 flex flex-col h-[400px] items-center justify-center text-center p-10 hover:bg-[#ebebeb] transition-colors"
              >
                <div className="mb-6 w-20 h-20 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">View All Tools</h3>
                <p className="text-foreground/50 text-lg font-medium leading-snug">50+ vetted AI tools across all categories</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const phases = [
    {
      number: '01',
      icon: SearchIcon,
      title: 'Discover',
      subtitle: 'Find the right tool for the job',
      description: 'Browse our curated directory of AI tools, filtered by category, pricing, and use case. Every tool has been tested and reviewed for real-world value.',
      tags: ['Writing & Chat', 'Image & Design', 'Coding', 'Video'],
    },
    {
      number: '02',
      icon: BookOpen,
      title: 'Evaluate',
      subtitle: 'Honest reviews, no fluff',
      description: 'Each tool listing includes clear pricing details, use cases, and an honest tagline so you can quickly decide if it fits your workflow.',
      tags: ['Pricing Info', 'Use Cases', 'Honest Reviews'],
    },
    {
      number: '03',
      icon: Zap,
      title: 'Activate',
      subtitle: 'Start building with AI today',
      description: 'Click through to any tool, start your free trial, and begin integrating AI into your work. Updated weekly with the latest releases.',
      tags: ['Direct Links', 'Free Trials', 'Weekly Updates'],
    },
  ];

  return (
    <section id="how-it-works" className="border-t border-black/5 bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="mb-14">
          <p className="text-[10px] font-semibold text-[#9CA3AF] tracking-widest uppercase mb-3">The Roadmap to AI Integration</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight tracking-tight max-w-lg">
              Discover. Evaluate. Activate.
            </h2>
            <p className="text-[14px] text-[#6B7280] max-w-xs">Three steps to finding the right AI tool for your workflow.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.number}
                className="bg-white rounded-2xl border border-black/10 p-7 hover:border-black/20 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F3F4F6]">
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-xs font-semibold text-[#D1D5DB] tabular-nums">Phase {phase.number}</span>
                </div>
                <h3 className="font-bold text-lg text-black mb-1">{phase.title}</h3>
                <p className="text-[13px] font-semibold text-[#374151] mb-2">{phase.subtitle}</p>
                <p className="text-[13px] text-[#6B7280] leading-relaxed mb-5">{phase.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {phase.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F3F4F6] text-[#6B7280]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span className="text-[11px] font-medium text-[#059669]">System Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Engagement Model ─────────────────────────────────────────────────────────
function EngagementModel() {
  const phases = [
    { icon: '🔍', iconBg: '#0071e3', phase: 'Phase 01', title: 'Discover', description: 'Browse our curated toolkit by category, use case, or pricing tier to find what fits your needs.' },
    { icon: '📋', iconBg: '#34c759', phase: 'Phase 02', title: 'Evaluate', description: "Read our in-depth reviews, compare alternatives, and understand exactly what you're signing up for." },
    { icon: '⚡', iconBg: '#5856d6', phase: 'Phase 03', title: 'Activate', description: 'Click through to get the best available deal. Some tools offer exclusive discounts via our links.' },
    { icon: '🚀', iconBg: '#ff9f0a', phase: 'Phase 04', title: 'Scale', description: 'Come back weekly for new tools, updated reviews, and the AI news that matters to your workflow.' },
  ];

  return (
    <section className="py-32 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 animate-fade-in-up">
          <p className="text-[#0071e3] font-bold tracking-widest uppercase mb-6 text-sm">Our Process</p>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">How we work with you</h2>
          <p className="text-foreground/60 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            A simple, repeatable process to go from AI-curious to AI-powered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, i) => (
            <div
              key={phase.title}
              className="phase-card relative p-10 bg-white rounded-[40px] shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className="icon-box w-16 h-16 rounded-[20px] flex items-center justify-center mb-10 text-2xl shadow-lg"
                style={{ backgroundColor: phase.iconBg }}
              >
                <span role="img" aria-label={phase.title}>{phase.icon}</span>
              </div>
              <p className="text-foreground/30 font-bold text-sm uppercase tracking-widest mb-4">{phase.phase}</p>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">{phase.title}</h3>
              <p className="text-foreground/60 font-medium leading-relaxed">{phase.description}</p>
              {i < phases.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-8 -translate-y-1/2 z-10 w-8 items-center justify-center text-foreground/20">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Categories ───────────────────────────────────────────────────────────────
function Categories() {
  const cats = [
    { icon: Pen,        title: 'Writing',       subtitle: 'Create & communicate', description: 'AI writing assistants, copywriting tools, and content generators that help you write better, faster.', color: '#0071e3', slug: 'writing',      examples: ['ChatGPT', 'Claude', 'Jasper'] },
    { icon: Image,      title: 'Image & Design', subtitle: 'Visual creativity',    description: 'Text-to-image generators, design assistants, and visual AI tools for creators and marketers.',         color: '#5856d6', slug: 'image',        examples: ['Midjourney', 'DALL·E 3', 'Stable Diffusion'] },
    { icon: Code,       title: 'Coding',         subtitle: 'Build faster',         description: 'AI code editors, copilots, and developer tools that write, test, and explain code.',                    color: '#34c759', slug: 'coding',       examples: ['Cursor', 'GitHub Copilot', 'v0'] },
    { icon: Video,      title: 'Video',           subtitle: 'Motion & story',       description: 'Text-to-video generators, AI editors, and avatar tools for content creators and marketers.',            color: '#e63950', slug: 'video',        examples: ['Runway', 'Sora', 'HeyGen'] },
    { icon: SearchIcon, title: 'Research',        subtitle: 'Know more, faster',    description: 'AI search engines, summarizers, and research assistants that surface insights in seconds.',            color: '#20b2aa', slug: 'research',     examples: ['Perplexity', 'Gemini', 'NotebookLM'] },
    { icon: Music,      title: 'Audio & Voice',   subtitle: 'Sound & speech',       description: 'Voice cloning, text-to-speech, transcription, and AI music generation tools.',                        color: '#f59e0b', slug: 'audio',        examples: ['ElevenLabs', 'Descript', 'Suno'] },
  ];

  return (
    <section id="categories" className="py-32 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 animate-fade-in-up">
          <p className="text-[#0071e3] font-bold tracking-widest uppercase mb-6 text-sm">Everything You Need</p>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">Browse by category</h2>
          <p className="text-foreground/60 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Six categories. Hundreds of tools. Find exactly what you need for your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cats.map((cat, i) => (
            <Link
              key={cat.title}
              to={`/product/ai-toolkit/category/${cat.slug}`}
              className="ecosystem-card group p-10 bg-white rounded-[40px] border border-transparent hover:shadow-xl transition-all flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className="icon-box w-16 h-16 rounded-[20px] flex items-center justify-center text-white mb-10 shadow-lg"
                style={{ backgroundColor: cat.color, boxShadow: `0 8px 16px ${cat.color}25` }}
              >
                <cat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-1 tracking-tight group-hover:text-[#0071e3] transition-colors">{cat.title}</h3>
              <p className="text-foreground/50 font-bold text-sm mb-6">{cat.subtitle}</p>
              <p className="text-foreground/60 font-medium leading-relaxed flex-grow mb-8">{cat.description}</p>
              <div className="mt-auto pt-6 border-t border-foreground/5 flex flex-wrap gap-2">
                {cat.examples.map((tool) => (
                  <span key={tool} className="px-4 py-1.5 bg-[#F5F5F7] rounded-full text-[10px] font-bold uppercase tracking-wider text-foreground/70">
                    {tool}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-16 items-center">
        <div className="relative aspect-[4/5] md:aspect-square rounded-[48px] overflow-hidden bg-[#F5F5F7] group w-full max-w-[450px] animate-fade-in-up">
          <img
            alt="Sarah, AI Toolkit curator"
            className="w-full h-full object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2F9DLQMDmFiPVlxtvVm2eBtiUPAbY2%2Fsarah30__46d93c63.png?alt=media&token=b07812b3-7e35-48e9-b3b4-06a4abf06c6f"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <p className="text-2xl font-bold tracking-tight mb-1">Sarah Speaks</p>
            <p className="text-white/60 font-medium uppercase tracking-widest text-xs">AI Tools Curator</p>
          </div>
        </div>

        <div className="flex flex-col animate-fade-in-up delay-200">
          <div className="w-16 h-16 bg-[#0071e3]/10 rounded-2xl flex items-center justify-center font-bold text-2xl text-[#0071e3] mb-8">
            AI
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-10 leading-[1.1]">
            Built by someone who uses AI every day
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-foreground/60 leading-relaxed font-medium mb-12">
            <p>Sarah tests every tool before recommending it. No sponsored rankings, no pay-to-play lists — just honest reviews from someone who's been in the AI space since day one.</p>
            <p>The AI Toolkit exists because the noise is deafening. This is the shortcut: tools that actually work, curated for real business workflows.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#toolkit" className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-all text-center">
              Explore Tools ›
            </a>
            <a href="#subscribe" className="w-full sm:w-auto px-8 py-4 bg-secondary text-foreground rounded-full font-bold hover:bg-secondary/80 transition-all text-center">
              Get Updates ›
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── Main Page ────────────────────────────────────────────────────────────────
export function AIToolkitPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = searchQuery.trim()
    ? tools.filter((t) => {
        const q = searchQuery.toLowerCase();
        return (
          t.name.toLowerCase().includes(q) ||
          t.tagline.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          t.categoryLabel.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Disclaimer />
      <ToolkitNav />
      <main>
        <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <ToolkitGrid filteredTools={filteredTools} />
        <HowItWorks />
        <EngagementModel />
        <Categories />
        <About />
      </main>
      <Footer minimal />
    </div>
  );
}
