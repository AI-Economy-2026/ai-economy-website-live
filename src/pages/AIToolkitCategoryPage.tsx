import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ArrowRight, Pen, Image, Code, Video, Search, Music, BarChart2 } from 'lucide-react';
import { tools, pricingConfig, type AITool } from '@/data/toolkit-tools';
import { Footer } from '@/components/layout/Footer';

const categoryMeta: Record<string, {
  label: string;
  slug: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  description: string;
  useCases: string[];
  whoItsFor: string[];
}> = {
  writing: {
    label: 'Writing & Chat',
    slug: 'writing',
    color: '#0071e3',
    icon: Pen,
    headline: 'Write better. Think clearer. Create faster.',
    description: 'AI writing assistants, copywriting tools, and conversational AI that help you draft, refine, and publish content across every format.',
    useCases: ['Blog posts & articles', 'Email campaigns', 'Ad copywriting', 'Long-form research', 'Social media content', 'Proposals & pitches'],
    whoItsFor: ['Marketers needing consistent content at scale', 'Founders writing investor decks and outreach', 'Teams drafting internal docs and communications', 'Creators building an audience through writing'],
  },
  image: {
    label: 'Image & Design',
    slug: 'image',
    color: '#5856d6',
    icon: Image,
    headline: 'Turn ideas into visuals in seconds.',
    description: 'Text-to-image generators, AI design assistants, and visual creation tools for marketers, creators, and product teams.',
    useCases: ['Product visuals & mockups', 'Social media graphics', 'Concept art & illustration', 'Brand asset creation', 'Presentation imagery', 'Background generation'],
    whoItsFor: ['Designers exploring AI-augmented workflows', 'Marketers creating campaign visuals fast', 'Founders who need brand imagery without a studio', 'Content creators building visual brands'],
  },
  coding: {
    label: 'Coding',
    slug: 'coding',
    color: '#34c759',
    icon: Code,
    headline: 'Ship faster. Debug smarter. Build more.',
    description: 'AI code editors, copilots, and developer tools that write, complete, test, and explain code inside your existing workflow.',
    useCases: ['Code completion & generation', 'Bug detection & fixes', 'Unit test writing', 'Code explanation', 'Refactoring', 'Documentation generation'],
    whoItsFor: ['Developers who want to multiply their output', 'Founders building their first product', 'Teams onboarding engineers to new codebases', 'Non-technical builders using AI-first IDEs'],
  },
  video: {
    label: 'Video',
    slug: 'video',
    color: '#e63950',
    icon: Video,
    headline: 'Create cinematic content without a camera.',
    description: 'Text-to-video generators, AI video editors, avatar creation tools, and translation platforms that redefine what video production looks like.',
    useCases: ['Text-to-video generation', 'AI avatar presenters', 'Video translation & dubbing', 'Social media clips', 'Product demos', 'Training content'],
    whoItsFor: ['Content creators scaling video without a crew', 'Marketers adding video to every campaign', 'Businesses creating training and explainer videos', 'Agencies delivering multilingual video at scale'],
  },
  research: {
    label: 'Research',
    slug: 'research',
    color: '#20b2aa',
    icon: Search,
    headline: 'Know more in less time.',
    description: 'AI search engines, research synthesisers, and knowledge tools that surface insights from the web and your own documents instantly.',
    useCases: ['Real-time web research', 'Document summarisation', 'Competitive analysis', 'Literature reviews', 'Fact-checking', 'Market intelligence'],
    whoItsFor: ['Analysts who need to synthesise fast', 'Consultants staying ahead of their clients', 'Founders tracking market and competitor moves', 'Researchers managing large bodies of source material'],
  },
  audio: {
    label: 'Audio & Voice',
    slug: 'audio',
    color: '#f59e0b',
    icon: Music,
    headline: 'Your voice, amplified by AI.',
    description: 'Voice cloning, text-to-speech, transcription, podcast editing, and AI music tools that make audio production accessible to everyone.',
    useCases: ['Podcast production & editing', 'Voice cloning & narration', 'Meeting transcription', 'Text-to-speech content', 'AI music generation', 'Multilingual audio'],
    whoItsFor: ['Podcasters who want to produce faster', 'Businesses adding voice to digital products', 'Teams who need reliable meeting transcripts', 'Creators exploring AI-generated audio content'],
  },
  productivity: {
    label: 'Productivity',
    slug: 'productivity',
    color: '#374151',
    icon: BarChart2,
    headline: 'Do more with less effort.',
    description: 'AI-powered productivity tools that automate tasks, organise information, and help you focus on the work that actually matters.',
    useCases: ['Meeting notes & summaries', 'Task and project management', 'Document organisation', 'Workflow automation', 'Email management', 'Knowledge management'],
    whoItsFor: ['Professionals overwhelmed by admin and meetings', 'Teams who need to stay aligned without overhead', 'Executives managing complex information flows', 'Anyone who needs to reclaim time in their day'],
  },
};

function ToolCard({ tool }: { tool: AITool }) {
  const pricing = pricingConfig[tool.pricing];
  return (
    <article
      className="tool-card group relative flex flex-col rounded-2xl border border-black/10 bg-white cursor-pointer overflow-hidden hover:shadow-md transition-all"
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

export function AIToolkitCategoryPage() {
  const { category } = useParams<{ category: string }>();
  const meta = category ? categoryMeta[category] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [category]);

  if (!meta) return <Navigate to="/product/ai-toolkit/tools" replace />;

  const categoryTools = tools.filter((t) => t.category === category);
  const otherCategories = Object.values(categoryMeta).filter((c) => c.slug !== category);
  const Icon = meta.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10 h-14 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <Link
            to="/product/ai-toolkit"
            className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-semibold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>AI Toolkit</span>
          </Link>
          <span className="text-[11px] font-bold text-foreground/30 uppercase tracking-widest">{meta.label}</span>
          <Link
            to="/product/ai-toolkit/tools"
            className="px-5 py-2 rounded-full text-[13px] font-semibold border border-black/10 hover:border-black hover:bg-black hover:text-white transition-all"
          >
            All Tools
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-14 bg-black text-white overflow-hidden relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 60% 50%, ${meta.color} 0%, transparent 70%)` }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-16 h-16 rounded-[20px] flex items-center justify-center shadow-xl"
              style={{ backgroundColor: meta.color }}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em]">AI Toolkit</p>
              <p className="text-white/70 text-sm font-semibold">{meta.label}</p>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] mb-8 max-w-4xl">
            {meta.headline}
          </h1>
          <p className="text-white/60 text-xl font-medium max-w-2xl leading-relaxed mb-10">
            {meta.description}
          </p>

          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: meta.color + '33', border: `1px solid ${meta.color}66` }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: meta.color }}
              />
              {categoryTools.length} tools in this category
            </span>
          </div>
        </div>
      </section>

      {/* Use cases + Who it's for */}
      <section className="py-24 bg-[#F5F5F7] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-6">Use Cases</p>
            <h2 className="text-3xl font-bold tracking-tight mb-8">What you can do with these tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {meta.useCases.map((uc) => (
                <div key={uc} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-black/5">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: meta.color }} />
                  <span className="text-sm font-semibold text-foreground/80">{uc}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-6">Who It's For</p>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Built for people serious about results</h2>
            <div className="space-y-4">
              {meta.whoItsFor.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ backgroundColor: meta.color + '20' }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: meta.color }} />
                  </div>
                  <span className="text-base font-medium text-foreground/70 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-3">{meta.label}</p>
              <h2 className="text-4xl font-bold tracking-tight">
                {categoryTools.length} {meta.label} tools
              </h2>
            </div>
            <Link
              to="/product/ai-toolkit/tools"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-black/10 hover:border-black hover:bg-black hover:text-white transition-all"
            >
              View all tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {categoryTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-foreground/50 font-medium text-lg mb-6">No tools in this category yet — check back soon.</p>
              <Link to="/product/ai-toolkit/tools" className="px-6 py-3 bg-black text-white rounded-full font-semibold text-sm hover:bg-[#111] transition-colors">
                Browse all tools
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other categories */}
      <section className="py-24 bg-[#F5F5F7] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-4">More Categories</p>
          <h2 className="text-4xl font-bold tracking-tight mb-12">Explore the rest of the toolkit</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherCategories.map((cat) => {
              const CatIcon = cat.icon;
              const count = tools.filter((t) => t.category === cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  to={`/product/ai-toolkit/category/${cat.slug}`}
                  className="group flex items-center gap-5 p-6 bg-white rounded-2xl border border-black/5 hover:border-black/20 hover:shadow-md transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: cat.color + '15' }}
                  >
                    <div style={{ color: cat.color }}>
                      <CatIcon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base text-foreground group-hover:text-[#0071e3] transition-colors">{cat.label}</h3>
                    <p className="text-[13px] text-foreground/50 font-medium">{count} tools</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-foreground/60 group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/product/ai-toolkit/tools"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-[#111] transition-all"
            >
              View all {tools.length} tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer minimal />
    </div>
  );
}
