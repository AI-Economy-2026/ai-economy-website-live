"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DM_Sans, Poppins } from "next/font/google";
import { CATALOG_TOOLS, faviconUrl } from "@/lib/tools-catalog";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-dm-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

type ToolItem = {
  name: string;
  by: string;
  cat: string;
  desc: string;
  price: string;
  strong?: string;
  href: string;
  favicon: string;
  star?: boolean;
  catClass?: string;
  cardClass?: string;
};

const INITIAL_TOOLS: ToolItem[] = CATALOG_TOOLS.map((t) => ({
  name: t.name,
  by: t.maker,
  cat: t.category,
  desc: t.description,
  price: t.price,
  strong: t.plan,
  href: t.websiteUrl,
  favicon: faviconUrl(t.faviconDomain),
  catClass: t.categoryClass,
  cardClass: t.cardClass,
  star: false,
}));

// Maps a filter pill to the set of `cat` values that belong to it.
// Every tool's cat must appear in exactly one group so counts add up cleanly.
const FILTER_GROUPS: { label: string; cats: string[] }[] = [
  { label: "Core AI", cats: ["My Pick", "LLM", "LLM & Image Gen", "AI Search", "AI Assistant", "AI Researcher"] },
  { label: "Automate & Save Time", cats: ["Scheduling", "CRM", "Project Mgmt", "Comms", "Workspace"] },
  { label: "Build & Launch", cats: ["Website Builder"] },
  { label: "Create Content", cats: ["AI Sparkpages", "Socials", "Image Gen"] },
  { label: "Design & Presentation", cats: ["Presentations", "Design", "Design (Icons)", "Design (UI)", "New · Design"] },
  { label: "Video & Media", cats: ["Avatars", "Meetings", "Editing", "Image & Video"] },
  { label: "Audio & Voice", cats: ["Voice & Clones", "Voice to Text"] },
];

// Use-case slugs sent by the dashboard tiles. Each maps to an explicit list of
// tool names so the grid shows exactly the curated picks for that use case.
const USE_CASE_FILTERS: Record<string, { label: string; tools: string[] }> = {
  automate: { label: "Automate & Save Time", tools: ["Lindy", "Manus", "Genspark"] },
  build: { label: "Build & Launch", tools: ["Claude", "Lovable", "Blink.new"] },
  create: { label: "Create Content", tools: ["Claude", "Blotato", "Gamma", "Napkin"] },
  design: { label: "Design & Presentation", tools: ["Figma", "Canva", "Midjourney", "Gamma", "Claude", "ChatGPT"] },
  video: { label: "Video & Media", tools: ["HeyGen", "Loom", "Opus Clip", "Higgsfield"] },
  audio: { label: "Audio & Voice", tools: ["ElevenLabs", "Wispr Flow"] },
  productivity: { label: "Productivity & Business", tools: ["Read AI", "Calendly", "GoHighLevel", "Asana"] },
};

function LogoSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-70.40 -827.40 6209.80 954.80" preserveAspectRatio="xMidYMid meet">
      <title>AI Economy</title>
      <g fill="currentColor">
        <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" />
        <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
      </g>
    </svg>
  );
}

function ToolkitClusterContent() {
  const searchParams = useSearchParams();
  const useCaseSlug = searchParams.get("filter");
  const useCase = useCaseSlug ? USE_CASE_FILTERS[useCaseSlug] ?? null : null;

  const [toolsState, setToolsState] = useState<ToolItem[]>(INITIAL_TOOLS);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Hydrate stars from the DB on mount.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/user-tools");
        if (!res.ok) return;
        const data = await res.json();
        const starred = new Set<string>(
          (data.tools ?? [])
            .filter((t: { is_curated: boolean }) => t.is_curated)
            .map((t: { tool_name: string }) => t.tool_name),
        );
        if (cancelled) return;
        setToolsState((prev) =>
          prev.map((t) => ({ ...t, star: starred.has(t.name) })),
        );
      } catch (e) {
        console.error("Failed to load user tools", e);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleToggleStar = (toolName: string) => {
    // Compute the next state from the current closure BEFORE calling setState,
    // otherwise the async block below races with React's deferred updater and
    // always reads the initial value.
    const current = toolsState.find((t) => t.name === toolName);
    if (!current) return;
    const nextStarred = !current.star;

    setToolsState((prev) =>
      prev.map((t) =>
        t.name === toolName ? { ...t, star: nextStarred } : t,
      ),
    );

    (async () => {
      try {
        const res = nextStarred
          ? await fetch("/api/user-tools", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ tool_name: toolName, is_curated: true }),
            })
          : await fetch(
              `/api/user-tools?name=${encodeURIComponent(toolName)}`,
              { method: "DELETE" },
            );
        if (!res.ok) throw new Error(await res.text());
      } catch (e) {
        console.error("Failed to sync star to DB", e);
        setToolsState((prev) =>
          prev.map((t) =>
            t.name === toolName ? { ...t, star: !nextStarred } : t,
          ),
        );
      }
    })();
  };

  const starredCount = toolsState.filter((t) => t.star).length;

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: toolsState.length };
    for (const group of FILTER_GROUPS) {
      map[group.label] = toolsState.filter((t) =>
        group.cats.includes(t.cat),
      ).length;
    }
    return map;
  }, [toolsState]);

  const filteredTools = useMemo(() => {
    if (useCase) {
      const wanted = new Set(useCase.tools);
      // Preserve the curated order from USE_CASE_FILTERS rather than the source array order.
      return useCase.tools
        .map((name) => toolsState.find((t) => t.name === name))
        .filter((t): t is ToolItem => Boolean(t) && wanted.has(t!.name));
    }
    if (!activeFilter) return toolsState;
    const group = FILTER_GROUPS.find((g) => g.label === activeFilter);
    if (!group) return toolsState;
    return toolsState.filter((t) => group.cats.includes(t.cat));
  }, [activeFilter, useCase, toolsState]);

  return (
    <div className={`${poppins.variable} ${dmSans.variable} bg-white text-[#444444] antialiased`}>
      <style jsx>{`.font-dm{font-family:var(--font-dm-sans),sans-serif}`}</style>
      <nav className="fixed left-0 right-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-white/[0.97] backdrop-blur-[12px]">
        <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-8">
          <Link href="/dashboard" aria-label="AI Economy" className="w-[150px] shrink-0 text-[#111111]"><LogoSvg /></Link>
          <ul className="absolute left-[57%] hidden -translate-x-1/2 list-none items-center gap-8 lg:flex">
            <li><Link href="/llm-comparison" className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]">LLMs</Link></li>
            <li><Link href="/toolkit/cluster" className="text-[14px] font-semibold text-[#004AAD]">Use Cases</Link></li>
            <li><Link href="/ai-tips" className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]">AI Tips</Link></li>
            <li><Link href="/about" className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]">About</Link></li>
            <li><Link href="/upsell/ask-sarah-waitlist" className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]">Ask Sarah</Link></li>
            <li>
              <a href="https://www.linkedin.com/in/SarahBalmer" target="_blank" rel="noopener" aria-label="Sarah Balmer on LinkedIn" className="ml-3 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[18px] w-[18px]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <button aria-label="Menu" className="inline-flex cursor-pointer items-center bg-transparent p-2 text-[#111111] lg:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
          </div>
        </div>
      </nav>

      <section className="border-b border-[#E2E2E2] bg-white pb-14 pt-[120px] [background-image:linear-gradient(#ECECEC_1px,transparent_1px),linear-gradient(90deg,#ECECEC_1px,transparent_1px)] [background-size:40px_40px]">
        <div className="mx-auto grid max-w-[1280px] items-end gap-12 px-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="font-dm mb-5 text-[14px] font-bold uppercase tracking-[0.04em] text-[#777777]">AI Economy Toolkit</div>
            <h1 className="font-dm mb-[14px] text-[clamp(40px,5.5vw,68px)] font-black leading-none tracking-[-0.02em] text-[#111111]">Browse The <span className="text-[#004AAD]">Full Toolkit.</span></h1>
            <p className="max-w-[560px] text-[16px] leading-[1.6] text-[#444444]">Every AI tool I have personally tested, in one place. Star your favourites, build your stack and manage everything from your dashboard.</p>
          </div>
          <div className="flex flex-wrap justify-start gap-[14px] md:justify-end">
            <div className="min-w-[140px] rounded-[14px] border border-[#E2E2E2] bg-white px-[22px] py-[18px] shadow-[0_4px_16px_-8px_rgba(0,0,0,.08)]">
              <div className="font-dm mb-[6px] text-[36px] font-black leading-none text-[#E8890C]">
                {starredCount}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#777777]">
                My Stack
              </div>
              <Link
                href="/myo-ai-stack"
                className="font-dm mt-[10px] inline-flex border-t border-[#E2E2E2] pt-[10px] text-[11px] font-bold uppercase tracking-[0.08em] text-[#E8890C] hover:text-[#004AAD]"
              >
                View →
              </Link>
            </div>
            <div className="min-w-[140px] rounded-[14px] border border-[#E2E2E2] bg-white px-[22px] py-[18px] shadow-[0_4px_16px_-8px_rgba(0,0,0,.08)]">
              <div className="font-dm mb-[6px] text-[36px] font-black leading-none text-[#004AAD]">
                {toolsState.length}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#777777]">
                Browse All
              </div>
            </div>
          </div>
        </div>
      </section>

      {useCase ? (
        <div className="sticky top-16 z-50 border-b border-[#E2E2E2] bg-white/[0.97] py-[18px] backdrop-blur-[12px]">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-8">
            <div className="flex items-center gap-3">
              <span className="font-dm text-[11px] font-bold uppercase tracking-[0.14em] text-[#777777]">Use Case</span>
              <span className="font-dm text-[15px] font-black tracking-tight text-[#111111]">{useCase.label}</span>
              <span className="rounded-full border border-[#E2E2E2] bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#444444]">{filteredTools.length} tool{filteredTools.length === 1 ? "" : "s"}</span>
            </div>
            <Link href="/toolkit/cluster" className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#004AAD] hover:underline">
              View all {INITIAL_TOOLS.length} tools →
            </Link>
          </div>
        </div>
      ) : (
        <div className="sticky top-16 z-50 border-b border-[#E2E2E2] bg-white/[0.97] py-[18px] backdrop-blur-[12px]">
          <div className="mx-auto flex max-w-[1280px] items-center gap-[14px] px-8">
            <div className="flex flex-1 gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                onClick={() => setActiveFilter(null)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-medium ${activeFilter === null ? "border-[#111111] bg-[#111111] text-white" : "border-[#E2E2E2] bg-white text-[#444444] hover:border-[#004AAD] hover:text-[#004AAD]"}`}
              >
                All <span className="opacity-60">{counts.All}</span>
              </button>
              {FILTER_GROUPS.map((group) => (
                <button
                  key={group.label}
                  type="button"
                  onClick={() => setActiveFilter(group.label)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-medium ${activeFilter === group.label ? "border-[#111111] bg-[#111111] text-white" : "border-[#E2E2E2] bg-white text-[#444444] hover:border-[#004AAD] hover:text-[#004AAD]"}`}
                >
                  {group.label} <span className="opacity-60">{counts[group.label]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <section className="bg-[#FAFAFA] pb-24 pt-12">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {filteredTools.map((tool) => (
              <div key={tool.name} className={`flex min-h-[340px] flex-col rounded-2xl border border-[#E2E2E2] bg-white p-6 transition-all hover:-translate-y-[3px] hover:border-[#004AAD] hover:shadow-[0_16px_36px_-18px_rgba(0,74,173,.18)] ${tool.cardClass ?? ""}`}>
                <div className="mb-[14px] flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-[6px]"><img src={tool.favicon} alt={tool.name} loading="lazy" className="h-full w-full object-contain" /></div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-dm truncate text-[18px] font-black leading-[1.15] text-[#111111]">{tool.name}</h3>
                    <div className="mt-[2px] text-[11px] leading-[1.2] text-[#777777]">{tool.by}</div>
                  </div>
                  <button
                    aria-label={tool.star ? "Starred" : "Star this tool"}
                    onClick={() => handleToggleStar(tool.name)}
                    className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border transition-all ${tool.star ? "border-[#E8890C] bg-[#E8890C] text-white" : "border-[#E2E2E2] text-[#777777] hover:border-[#E8890C] hover:text-[#E8890C]"}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill={tool.star ? "currentColor" : "none"}
                      stroke={tool.star ? "none" : "currentColor"}
                      strokeWidth={tool.star ? 0 : 2}
                      strokeLinejoin="round"
                      className="h-[13px] w-[13px]"
                    >
                      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                    </svg>
                  </button>
                </div>
                <span className={`mb-[10px] inline-block w-fit rounded-full px-[9px] py-[3px] text-[10px] font-semibold uppercase tracking-[0.06em] ${tool.catClass ?? "bg-[#E6F1FB] text-[#004AAD]"}`}>{tool.cat}</span>
                <p className="mb-4 min-h-[80px] flex-1 text-[13px] leading-[1.55] text-[#444444]">{tool.desc}</p>
                <div className="mb-[14px] min-h-[54px] border-t border-[#E2E2E2] pt-[14px] text-[12px] leading-[1.4] text-[#777777]">{tool.price}{tool.strong ? <strong className="mt-[2px] block font-semibold text-[#111111]">{tool.strong}</strong> : null}</div>
                <a href={tool.href} target="_blank" rel="noopener" className="mt-auto inline-flex w-full items-center justify-center gap-[6px] rounded-full border border-[#E2E2E2] bg-[#FAFAFA] px-4 py-[10px] text-[12px] font-semibold text-[#111111] transition-all hover:border-[#004AAD] hover:bg-[#004AAD] hover:text-white">Visit <span>→</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E2E2E2] bg-white py-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="font-dm mb-5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">Manage Your Tools</div>
            <h2 className="font-dm mb-4 text-[clamp(36px,4.5vw,56px)] font-black leading-[1.08] text-[#111111]">Build Your Stack. <br />Keep It In One Place.</h2>
            <p className="mb-7 max-w-[520px] text-[16px] leading-[1.65] text-[#444444]">Star the tools you actually use. Add notes. Track subscriptions. See your full AI stack at a glance, without juggling tabs or trying to remember what you signed up for last month.</p>
            <ul className="mb-8 grid list-none grid-cols-1 gap-[14px] p-0 md:grid-cols-2">
              {["Star your favourites instantly", "Track every subscription", "Add custom tools and notes", "Filter by category or pricing", "One dashboard, all your tools", "Always up to date"].map((f) => (
                <li key={f} className="flex items-start gap-[10px] text-[14px] leading-[1.5] text-[#444444]">
                  <span className="mt-[3px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#004AAD]">
                    <svg viewBox="0 0 24 24" fill="none" className="h-[10px] w-[10px]">
                      <polyline points="20 6 9 17 4 12" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/dashboard" className="inline-flex items-center gap-[10px] rounded-full bg-[#004AAD] px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-[#003A8C]">Go To My Dashboard →</Link>
          </div>
          <div className="space-y-[14px] rounded-[20px] border border-[#E2E2E2] bg-gradient-to-br from-[#E6F1FB] to-[#F0F0F0] p-9">
            {[
              ["C", "Claude", "My Pick · Anthropic", true],
              ["G", "Gamma", "Presentations · Gamma", true],
              ["F", "Figma", "Design (UI) · Figma", false],
              ["E", "ElevenLabs", "Voice & Clones · ElevenLabs", true],
            ].map(([letter, title, cat, filled]) => (
              <div key={title as string} className="flex items-center gap-3 rounded-xl border border-[#E2E2E2] bg-white px-4 py-3 shadow-[0_6px_20px_-10px_rgba(0,0,0,.12)]">
                <div className="font-dm flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E2E2E2] bg-[#FAFAFA] text-[14px] font-black text-[#004AAD]">{letter as string}</div>
                <div className="min-w-0 flex-1">
                  <div className="font-dm text-[13px] font-bold leading-[1.2] text-[#111111]">{title as string}</div>
                  <div className="mt-[2px] text-[10px] uppercase tracking-[0.04em] text-[#777777]">{cat as string}</div>
                </div>
                <div className={`flex h-6 w-6 items-center justify-center rounded-full ${filled ? "bg-[#E8890C] text-white" : "border border-[#E2E2E2] bg-white text-[#E2E2E2]"}`}>
                  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke={filled ? "none" : "currentColor"} strokeWidth={2.5} strokeLinejoin="round" className="h-[11px] w-[11px]"><polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-12 max-w-[720px]">
            <div className="font-dm mb-5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#E8890C]">Add To Your Stack</div>
            <h2 className="font-dm mb-[14px] text-[clamp(36px,4.5vw,56px)] font-black text-[#111111]">Get More From AI Economy.</h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">You have the toolkit. These add-ons make it work even harder for you. Unlock the ones that fit how you work.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-[18px] border border-[#E2E2E2] bg-white p-8">
              <div className="mb-4 inline-block w-fit rounded-full bg-[#E6F1FB] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#004AAD]">Guide</div>
              <h3 className="font-dm mb-[10px] text-2xl font-black leading-[1.2] text-[#111111]">Start Right With AI</h3>
              <p className="mb-5 text-[14px] leading-[1.6] text-[#444444]">The shortcut to actually getting results from AI, not just chatting with it. The framework I use every day, plus the prompts that make it work from day one.</p>
              <ul className="mb-6 flex-1 list-none p-0">
                {["The framework I use every day", "Battle-tested prompts that work", "Real business use cases", "Instant download"].map((item) => <li key={item} className="border-b border-[#E2E2E2] py-[9px] text-[13px] text-[#444444] last:border-b-0">{item}</li>)}
              </ul>
              <div className="border-t border-[#E2E2E2] pt-[18px]">
                <div className="mb-[14px]"><span className="font-dm text-[28px] font-black leading-none text-[#111111]">$27</span> <span className="ml-2 text-[12px] text-[#777777] line-through">was $57</span><div className="text-[11px] uppercase tracking-[0.04em] text-[#777777]">USD · One-Time</div></div>
                <Link href="/start-right" className="inline-flex w-full items-center justify-center rounded-full bg-[#004AAD] px-8 py-3 text-[14px] font-semibold text-white hover:bg-[#003A8C]">Unlock Now →</Link>
              </div>
            </div>
            <div className="flex flex-col rounded-[18px] border border-[#111111] bg-[#111111] p-8 text-white">
              <div className="mb-4 inline-block w-fit rounded-full bg-[rgba(232,137,12,.2)] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#E8890C]">Most Popular</div>
              <h3 className="font-dm mb-[10px] text-2xl font-black leading-[1.2]">Fresh Stack Membership</h3>
              <p className="mb-5 text-[14px] leading-[1.6] text-white/80">Monthly updates on new tools, changes and emerging AI trends. Your toolkit stays current, automatically.</p>
              <ul className="mb-6 flex-1 list-none p-0">
                {["Monthly tool updates", "New tools worth your time", "Changes to existing tools", "Cancel any time"].map((item) => <li key={item} className="border-b border-white/10 py-[9px] text-[13px] text-white/90 last:border-b-0">{item}</li>)}
              </ul>
              <div className="border-t border-white/15 pt-[18px]">
                <div className="mb-[14px]"><span className="font-dm text-[28px] font-black leading-none">$17</span> <span className="ml-2 text-[12px] text-white/60 line-through">was $37</span><div className="text-[11px] uppercase tracking-[0.04em] text-white/65">USD · Per Month</div></div>
                <Link href="/upsell/fresh-stack" className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-[14px] font-semibold text-[#111111] hover:bg-[#E6F1FB]">Unlock Now →</Link>
              </div>
            </div>
            <div className="flex flex-col rounded-[18px] border border-[#E2E2E2] bg-white p-8">
              <div className="mb-4 inline-block w-fit rounded-full bg-[#E6F1FB] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#004AAD]">Annual Access</div>
              <h3 className="font-dm mb-[10px] text-2xl font-black leading-[1.2] text-[#111111]">Ask Sarah</h3>
              <p className="mb-5 text-[14px] leading-[1.6] text-[#444444]">Direct access to Sarah for AI questions, tool recommendations and setup help.</p>
              <ul className="mb-6 flex-1 list-none p-0">
                {["Ask AI questions any time", "Tool recommendations, tailored", "Setup & workflow help", "Trained on Sarah's expertise"].map((item) => <li key={item} className="border-b border-[#E2E2E2] py-[9px] text-[13px] text-[#444444] last:border-b-0">{item}</li>)}
              </ul>
              <div className="border-t border-[#E2E2E2] pt-[18px]">
                <div className="mb-[14px]"><span className="font-dm text-[28px] font-black leading-none text-[#111111]">$149</span> <span className="ml-2 text-[12px] text-[#777777] line-through">was $297</span><div className="text-[11px] uppercase tracking-[0.04em] text-[#777777]">USD · Per Year</div></div>
                <Link href="/upsell/ask-sarah-waitlist" className="inline-flex w-full items-center justify-center rounded-full bg-[#004AAD] px-8 py-3 text-[14px] font-semibold text-white hover:bg-[#003A8C]">Unlock Now →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] pb-8 pt-[72px] text-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-14 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Link href="/" aria-label="AI Economy" className="mb-5 block w-[160px] text-white"><LogoSvg /></Link>
              <p className="max-w-[320px] text-[14px] leading-[1.65] text-white/65">AI trainer, strategist and consultant. Building AI platforms including parently.ai and aieconomy.ai. Cutting through the AI chaos so you can focus on what matters.</p>
            </div>
            <div>
              <h4 className="font-dm mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white">Toolkit</h4>
              <ul className="list-none">
                <li className="mb-[10px]"><Link href="/llm-comparison" className="text-[14px] text-white/70 hover:text-white">LLM Comparison</Link></li>
                <li className="mb-[10px]"><Link href="/toolkit/cluster" className="text-[14px] text-white/70 hover:text-white">All Tools</Link></li>
                <li className="mb-[10px]"><Link href="/ai-tips" className="text-[14px] text-white/70 hover:text-white">AI Tips</Link></li>
                <li className="mb-[10px]"><Link href="/dashboard" className="text-[14px] text-white/70 hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-dm mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white">Learn</h4>
              <ul className="list-none">
                <li className="mb-[10px]"><Link href="/toolkit/claude" className="text-[14px] text-white/70 hover:text-white">Claude Deep Dive</Link></li>
                <li className="mb-[10px]"><Link href="/toolkit/chatgpt" className="text-[14px] text-white/70 hover:text-white">ChatGPT Deep Dive</Link></li>
                <li className="mb-[10px]"><Link href="/toolkit/perplexity" className="text-[14px] text-white/70 hover:text-white">Perplexity Deep Dive</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-dm mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white">Company</h4>
              <ul className="list-none">
                <li className="mb-[10px]"><Link href="/about" className="text-[14px] text-white/70 hover:text-white">About</Link></li>
                <li className="mb-[10px]"><Link href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 hover:text-white">Ask Sarah</Link></li>
                <li className="mb-[10px]"><Link href="/privacy" className="text-[14px] text-white/70 hover:text-white">Privacy &amp; Data</Link></li>
                <li className="mb-[10px]"><Link href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7 text-[12px] text-white/50">
            <div>© 2026 AI Economy. ABN: 24 602 295 698.</div>
            <div>Melbourne, Australia.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function ToolkitClusterPage() {
  return (
    <Suspense fallback={null}>
      <ToolkitClusterContent />
    </Suspense>
  );
}
