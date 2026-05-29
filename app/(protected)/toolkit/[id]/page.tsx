"use client";

import React from "react";
import Link from "next/link";
import { DM_Sans, Poppins } from "next/font/google";

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

function BrandLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-70.40 -827.40 6209.80 954.80"
      preserveAspectRatio="xMidYMid meet"
      className="h-auto w-full"
    >
      <title>AI Economy</title>
      <g fill="currentColor">
        <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" />
        <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
      </g>
    </svg>
  );
}

function LinkedInIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ToolDeepDivePage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = React.use(props.params);
  const toolId = params.id.replace("-deep-dive", "");

  if (toolId === "claude") {
    return (
      <div
        className={`${poppins.variable} ${dmSans.variable} bg-white text-[#444444] antialiased [font-family:var(--font-poppins)]`}
      >
        <nav className="fixed inset-x-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-white/[0.97] backdrop-blur-[12px]">
          <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-8">
            <Link
              href="/dashboard"
              aria-label="AI Economy"
              className="block w-[150px] text-[#111111]"
            >
              <BrandLogo />
            </Link>
            <ul className="hidden list-none items-center gap-8 min-[861px]:absolute min-[861px]:left-1/2 min-[861px]:flex min-[861px]:-translate-x-1/3">
              <li>
                <Link
                  href="/llm-comparison"
                  className="text-sm font-semibold text-[#004AAD]"
                >
                  LLMs
                </Link>
              </li>
              <li>
                <Link
                  href="/toolkit/cluster"
                  className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-tips"
                  className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
                >
                  AI Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/ask-sarah"
                  className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
                >
                  Ask Sarah
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/SarahBalmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sarah Balmer on LinkedIn"
                  className="ml-3 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
                >
                  <LinkedInIcon className="h-[18px] w-[18px]" />
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2 min-[861px]:hidden">
              <a
                href="https://www.linkedin.com/in/SarahBalmer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarah Balmer on LinkedIn"
                  className="mr-2 inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#004AAD] text-white"
              >
                <LinkedInIcon className="h-[17px] w-[17px]" />
              </a>
              <button
                aria-label="Menu"
                className="inline-flex p-2 text-[#111111]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <div className="mx-auto w-full max-w-[1180px] px-8 pt-[88px]">
          <div className="text-[13px] text-[#777777]">
            <Link href="/" className="hover:text-[#004AAD]">
              Home
            </Link>
            <span className="mx-2 text-[#E2E2E2]">/</span>
            <Link href="/llm-comparison" className="hover:text-[#004AAD]">
              LLMs
            </Link>
            <span className="mx-2 text-[#E2E2E2]">/</span>
            <span className="font-semibold text-[#111111]">Claude</span>
          </div>
        </div>

        <section className="border-b border-[#E2E2E2] bg-white py-[48px] [background-image:linear-gradient(#ECECEC_1px,transparent_1px),linear-gradient(90deg,#ECECEC_1px,transparent_1px)] [background-size:40px_40px]">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="grid max-w-[980px] grid-cols-1 items-center gap-9 min-[721px]:grid-cols-[auto_1fr]">
              <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-[22px] border border-[#E2E2E2] bg-white p-[14px] shadow-[0_12px_32px_-16px_rgba(0,0,0,.15)] min-[721px]:mx-0">
                <img
                  src="https://www.google.com/s2/favicons?domain=claude.ai&sz=256"
                  alt="Claude"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-center min-[721px]:text-left">
                <span className="mb-[18px] inline-block rounded-full bg-[#E8890C] px-3 py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-black uppercase tracking-[0.14em] text-white">
                  Sarah&apos;s Number One
                </span>
                <div className="mb-4 block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                  Deep Dive
                </div>
                <h1 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.05] tracking-[-.02em] text-[#111111] min-[721px]:whitespace-nowrap">
                  Why Claude Wins{" "}
                  <span className="text-[#004AAD]">For Real Work.</span>
                </h1>
                <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#444444]">
                  Claude is my number one AI tool. The most capable model for
                  writing, strategy, deep analysis and code. Now with native
                  design capability, connectors that plug into your real tools,
                  and a way of thinking that actually feels like working with
                  someone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#E2E2E2] bg-[#FAFAFA] py-6">
          <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 gap-4 px-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
            {[
              ["Built By", "Anthropic"],
              ["Category", "Core AI / LLM"],
              ["Difficulty", "Easy To Start"],
              ["Free Plan", "Yes"],
              ["Availability", "Most Countries"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-1.5 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[0.1em] text-[#777777]">
                  {label}
                </div>
                <div className="flex flex-wrap items-center gap-2 [font-family:var(--font-dm-sans)] text-[15px] font-black text-[#111111]">
                  {label === "Difficulty" ? (
                    <span className="inline-flex rounded-full bg-[rgba(29,158,117,.15)] px-[10px] py-[3px] text-[11px] font-semibold tracking-[.04em] text-[#1D9E75]">
                      {value}
                    </span>
                  ) : (
                    value
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto w-full max-w-[840px] px-8">
            <div className="relative rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-white px-12 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,.15)]">
              <span className="pointer-events-none absolute left-7 top-[-12px] [font-family:var(--font-dm-sans)] text-[110px] font-black leading-none text-[#E8890C]">
                &ldquo;
              </span>
              <span className="block [font-family:var(--font-dm-sans)] text-[clamp(20px,2.2vw,26px)] font-black leading-[1.3] tracking-[-.01em] text-[#111111]">
                Claude does most things really well. At the moment it is the
                smartest, most capable model. If you are only going to bother
                with one AI tool, this is it.
              </span>
              <div className="mt-6 flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em] text-[#E8890C]">
                <span className="h-0.5 w-7 bg-[#E8890C]" />
                Sarah&apos;s Take
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="mb-14 max-w-[760px]">
              <h2 className="mb-2 [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
                Chat. Create. Code.
              </h2>
              <p className="mb-[18px] [font-family:var(--font-dm-sans)] text-sm font-bold uppercase tracking-[.14em] text-[#E8890C]">
                How It Works.
              </p>
              <p className="text-[17px] leading-[1.6] text-[#444444]">
                Claude is built around three jobs. Get one of these right and
                you have a powerful AI assistant. Get all three and you have a
                working creative, coding and thinking partner that does what you
                ask, the way you would do it yourself.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 min-[761px]:grid-cols-3">
              {[
                [
                  "Chat.",
                  "Think out loud. Solve hard problems. Get unstuck.",
                  "When you need a thinking partner that asks the right questions, follows nuance, and pushes back when you are off track. Claude reasons through complex problems with you, and remembers what you have already discussed.",
                  [
                    [
                      "Claude Opus",
                      "The flagship model. Deep reasoning, long-form writing, hard analysis.",
                    ],
                    [
                      "Voice mode",
                      "Have a real conversation. Brainstorm, dictate, work through ideas hands-free.",
                    ],
                    [
                      "Web search",
                      "Live information when you need it, with citations you can verify.",
                    ],
                  ],
                  false,
                ],
                [
                  "Create.",
                  "Design, write, present. Polished output, fast.",
                  "Claude can now design, not just describe. Build landing pages, dashboards, decks and full mockups directly in chat. Write copy that does not sound like AI. The closest thing to a creative team in one tool.",
                  [
                    [
                      "Claude Design",
                      "Landing pages, components & mockups built from a prompt. Visual design plus working code.",
                    ],
                    [
                      "Long-form writing",
                      "Strategic content, articles, decks & long documents in your voice.",
                    ],
                    [
                      "Projects",
                      "Upload reference files and Claude remembers your brand, your style & your context.",
                    ],
                  ],
                  true,
                ],
                [
                  "Code.",
                  "Build apps, ship code, automate workflows.",
                  "Claude is the strongest AI for software. Vibe code your way to a working web app, write production code, refactor, debug, and ship. The chat-to-code workflow that actually keeps up with how you think.",
                  [
                    [
                      "Claude Code",
                      "Full coding agent in your terminal. Reads codebases, plans, executes, tests.",
                    ],
                    [
                      "Artifacts",
                      "Live components, apps and tools rendered right in chat. See it, click it, refine it.",
                    ],
                    [
                      "Cowork",
                      "Long-running coding sessions with state, planning and execution across hours.",
                    ],
                  ],
                  false,
                ],
              ].map(([title, tag, desc, list, orange]) => (
                <div
                  key={String(title)}
                  className={`relative h-full overflow-hidden rounded-[20px] border bg-white px-[26px] pb-8 pt-8 transition hover:-translate-y-1 ${orange ? "border-[#E2E2E2] hover:border-[#E8890C] hover:shadow-[0_24px_50px_-24px_rgba(232,137,12,.18)]" : "border-[#E2E2E2] hover:border-[#004AAD] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,.18)]"}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full ${orange ? "bg-[radial-gradient(circle,rgba(232,137,12,.12)_0%,transparent_70%)]" : "bg-[radial-gradient(circle,rgba(0,74,173,.08)_0%,transparent_70%)]"}`}
                  />
                  <div className="relative z-[1] mb-[18px] border-b border-[#E2E2E2] pb-[22px]">
                    <div
                      className={`mb-3 [font-family:var(--font-dm-sans)] text-[42px] font-black leading-none tracking-[-.03em] text-[#111111]`}
                    >
                      <span
                        className={orange ? "text-[#E8890C]" : "text-[#004AAD]"}
                      >
                        {String(title).charAt(0)}
                      </span>
                      {String(title).slice(1)}
                    </div>
                    <p className="[font-family:var(--font-dm-sans)] text-sm font-bold leading-[1.3] text-[#444444]">
                      {tag as string}
                    </p>
                  </div>
                  <p className="relative z-[1] mb-[22px] text-sm leading-[1.65] text-[#444444]">
                    {desc as string}
                  </p>
                  <ul className="relative z-[1]">
                    {(list as string[][]).map(([h, b]) => (
                      <li
                        key={h}
                        className="border-b border-[#E2E2E2] py-[14px] text-[13px] leading-[1.55] text-[#444444] last:border-none"
                      >
                        <strong className="mb-1 block [font-family:var(--font-dm-sans)] text-sm font-black tracking-[.01em] text-[#111111]">
                          {h}
                        </strong>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="mb-12 max-w-[760px]">
              <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                Also Worth Knowing
              </div>
              <h2 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
                More Reasons Claude Earns Its Spot.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#444444]">
                Beyond the Three C&apos;s, these are the features that turn
                Claude from a chat tool into a workflow tool.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 min-[681px]:grid-cols-2 min-[1081px]:grid-cols-3">
              {[
                [
                  "Workspaces",
                  "Projects",
                  "Organise chats by client, topic or workflow. Upload reference files Claude remembers across every conversation in that project.",
                  "Easy",
                  "",
                ],
                [
                  "Integration",
                  "Connectors",
                  "Plug Claude into Drive, Gmail, Calendar, Notion, Slack, GitHub, Asana & more. Built on the open MCP standard. Claude reads & acts on your real data.",
                  "Intermediate",
                  "",
                ],
                [
                  "Workflow",
                  "Computer Use",
                  "Claude can drive your computer to complete real tasks. Click, type, navigate. Less typing, more output. The closest thing to delegating to a colleague.",
                  "Intermediate",
                  "int",
                ],
              ].map(([tag, title, desc, level, variant]) => (
                <div
                  key={String(title)}
                  className="flex min-h-[240px] flex-col rounded-2xl border border-[#E2E2E2] bg-white p-7 transition hover:-translate-y-[3px] hover:border-[#004AAD] hover:shadow-[0_16px_36px_-18px_rgba(0,74,173,.15)]"
                >
                  <span
                    className={`mb-[14px] inline-block w-fit rounded-full px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] ${variant === "int" ? "bg-[rgba(232,137,12,.15)] text-[#E8890C]" : "bg-[#E6F1FB] text-[#004AAD]"}`}
                  >
                    {tag}
                  </span>
                  <h3 className="mb-2.5 [font-family:var(--font-dm-sans)] text-[20px] font-black leading-[1.2] text-[#111111]">
                    {title}
                  </h3>
                  <p className="flex-1 text-sm leading-[1.6] text-[#444444]">
                    {desc}
                  </p>
                  <div
                    className={`mt-[14px] border-t border-[#E2E2E2] pt-[14px] text-[11px] font-semibold uppercase tracking-[.08em] ${level === "Intermediate" ? "text-[#E8890C]" : "text-[#777777]"}`}
                  >
                    {level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-white py-24">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="mb-12 max-w-[760px]">
              <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                How It Works
              </div>
              <h2 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
                Chat, Projects, Skills &amp; Cowork.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#444444]">
                New to Claude? Start here. There are four ways to use it, and
                each one gets you more out of it. Most people start with Chat,
                but the real power is in the next three.
              </p>
            </div>
            <div className="mx-auto max-w-[980px]">
              {[
                [
                  "01",
                  "Start Here",
                  "Chat. Ask A Question, Get An Answer.",
                  "The simplest way to use Claude. Type a question, get a response. Like texting someone who happens to know everything. Each chat is its own conversation. Close the tab and it is gone.",
                  "Best for:",
                  "One-off questions. Drafting an email. Quick research. Anything you would Google but want a real answer back.",
                  "#004AAD",
                  "bg-[#E6F1FB] text-[#004AAD]",
                ],
                [
                  "02",
                  "Add Memory",
                  "Projects. A Workspace Claude Remembers.",
                  "A folder for related chats. Upload files Claude reads as context (your brand guide, client briefs, last year's report). Every chat inside the project starts with that context already loaded. No need to re-explain.",
                  "Best for:",
                  'Ongoing work for a client, project or topic. Anything where you keep saying "let me give you some context first" before each chat.',
                  "#E8890C",
                  "bg-[rgba(232,137,12,.15)] text-[#E8890C]",
                ],
                [
                  "03",
                  "Teach Claude",
                  "Skills. Reusable Ways Of Working.",
                  "A skill is a way of working you teach Claude once, and it remembers it everywhere. Your tone of voice. Your formatting rules. Your favourite frameworks. Skills work across every chat and every project, like a colleague who has learned how you like things done.",
                  "Best for:",
                  "Anything you do the same way every time. Writing in your voice. Producing a specific deliverable. Following a process you have refined over years.",
                  "#1D9E75",
                  "bg-[rgba(29,158,117,.15)] text-[#1D9E75]",
                ],
                [
                  "04",
                  "Delegate",
                  "Cowork. Give Claude A Job & Walk Away.",
                  "Cowork is the power move. Give Claude a multi-step task, set the parameters, and let it run. It plans, executes, checks its own work, and reports back. Hours of work in minutes, with you only checking in at key moments. The closest thing to having a junior who actually delivers.",
                  "Best for:",
                  "Long research jobs. Multi-document analysis. Anything that takes more than 30 minutes of your own time and follows a known shape.",
                  "#111111",
                  "bg-[#111111] text-white",
                ],
              ].map(
                ([
                  num,
                  tag,
                  title,
                  desc,
                  whenLabel,
                  whenDesc,
                  borderColor,
                  tagClass,
                ]) => (
                  <div
                    key={String(num)}
                    className="grid grid-cols-1 gap-3 border-b border-[#E2E2E2] py-9 last:border-none min-[761px]:grid-cols-[120px_1fr] min-[761px]:gap-8"
                  >
                    <div className="[font-family:var(--font-dm-sans)] text-5xl font-black leading-none tracking-[-.04em] text-[#E2E2E2] min-[761px]:text-[64px]">
                      {num}
                    </div>
                    <div>
                      <div
                        className={`mb-[14px] inline-block rounded-full px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] ${tagClass}`}
                      >
                        {tag}
                      </div>
                      <h3 className="mb-3 [font-family:var(--font-dm-sans)] text-[clamp(22px,2.4vw,28px)] font-black leading-[1.2] text-[#111111]">
                        {title}
                      </h3>
                      <p className="mb-[18px] text-[15px] leading-[1.7] text-[#444444]">
                        {desc}
                      </p>
                      <div
                        className="rounded-md bg-[#FAFAFA] px-[18px] py-[14px] text-[13px] leading-[1.5] text-[#444444]"
                        style={{
                          borderLeft: `3px solid ${borderColor as string}`,
                        }}
                      >
                        <strong className="font-bold text-[#111111]">
                          {whenLabel}
                        </strong>{" "}
                        {whenDesc}
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-[18px] border border-[#E2E2E2] bg-[#FAFAFA] px-9 py-8 min-[980px]:flex-nowrap">
              <p className="max-w-[420px] [font-family:var(--font-dm-sans)] text-base font-bold leading-[1.4] text-[#111111]">
                Want to learn the practical side of all four? Get the full
                walkthrough.
              </p>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="https://crm.njin.co/v2/preview/ggENr5gfNpziNl3iqQEB"
                  className="inline-flex items-center gap-2 rounded-full bg-[#004AAD] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#003A8C]"
                >
                  Learn More About Claude <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/toolkit/cluster"
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#111111] px-7 py-3.5 text-sm font-semibold text-[#111111] hover:bg-[#111111] hover:text-white"
                >
                  Unlock The Dashboard <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-[#E2E2E2] bg-white py-24">
          <div className="pointer-events-none absolute right-[-200px] top-0 h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(232,137,12,.08)_0%,transparent_60%)]" />
          <div className="relative z-[1] mx-auto w-full max-w-[1180px] px-8">
            <div className="mb-12 max-w-[780px]">
              <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#E8890C]">
                Spotlight · New
              </div>
              <h2 className="mb-[18px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
                Claude Design Changes The Game.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#444444]">
                For the first time, an AI can produce real, working visual
                design alongside the code. Not just descriptions of designs.
                Actual rendered pages, components and mockups in seconds.
              </p>
            </div>
            <div className="mx-auto max-w-[880px]">
              <p className="mb-4 text-base leading-[1.7] text-[#444444]">
                Ask Claude to build you a landing page, a dashboard, an email
                layout or a full app mockup. It produces a working visual you
                can see, click and refine in chat. The output is real code,
                ready to ship or hand to a developer.
              </p>
              <p className="mb-6 text-base leading-[1.7] text-[#444444]">
                This is the closest thing to having a design and dev team in one
                tool. Ideation, prototyping, polish and code, all in one chat.
                For founders, marketers and consultants without a design team,
                this is genuinely transformative.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 min-[761px]:grid-cols-2">
                <div className="rounded-[14px] border border-[rgba(0,74,173,.15)] bg-[#E6F1FB] p-6">
                  <span className="mb-2.5 block [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#004AAD]">
                    Replaces, For Many Tasks
                  </span>
                  <ul>
                    {[
                      ["Figma", "for early concepts & rapid prototyping"],
                      ["Lovable", "& Blink.new for AI-built sites"],
                      ["Designers", "for first-pass visual ideation"],
                    ].map(([h, b]) => (
                      <li
                        key={String(h)}
                        className="flex items-start gap-2 py-[5px] text-[13px] leading-[1.5] text-[#444444]"
                      >
                        <span className="text-lg font-black leading-[1.2] text-[#777777]">
                          ·
                        </span>
                        <span>
                          <strong className="font-bold text-[#111111]">
                            {h}
                          </strong>{" "}
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[14px] border border-[rgba(232,137,12,.2)] bg-[rgba(232,137,12,.06)] p-6">
                  <span className="mb-2.5 block [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#E8890C]">
                    Works Alongside
                  </span>
                  <ul>
                    {[
                      ["Canva", "for finalising social & marketing assets"],
                      ["Figma", "for design systems & team handoff"],
                      ["Developers", "who turn Claude's code into production"],
                    ].map(([h, b]) => (
                      <li
                        key={String(h)}
                        className="flex items-start gap-2 py-[5px] text-[13px] leading-[1.5] text-[#444444]"
                      >
                        <span className="text-lg font-black leading-[1.2] text-[#777777]">
                          ·
                        </span>
                        <span>
                          <strong className="font-bold text-[#111111]">
                            {h}
                          </strong>{" "}
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-white py-20">
          <div className="mx-auto w-full max-w-[840px] px-8">
            <div className="relative rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-[#FAFAFA] px-12 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,.15)]">
              <span className="pointer-events-none absolute left-7 top-[-12px] [font-family:var(--font-dm-sans)] text-[110px] font-black leading-none text-[#E8890C]">
                &ldquo;
              </span>
              <span className="block [font-family:var(--font-dm-sans)] text-[clamp(20px,2.2vw,26px)] font-black leading-[1.3] tracking-[-.01em] text-[#111111]">
                Claude is the only AI that can take a brief, ask the right
                clarifying questions, and come back with something I would
                actually publish. The new design feature is wild. I have built
                landing pages, dashboards and full prototypes in minutes that
                would have taken days. If you only have one AI tool in your
                stack, make it this one.
              </span>
              <div className="mt-6 flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em] text-[#E8890C]">
                <span className="h-0.5 w-7 bg-[#E8890C]" />
                Sarah&apos;s Take
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="mb-12 max-w-[760px]">
              <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                Plans &amp; Pricing
              </div>
              <h2 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
                Pick The Right Plan.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#444444]">
                Four tiers, but the path is simple. Try Free. Start with Pro for
                daily individual use. Upgrade to Max if you hit the Pro limits
                often. Move to Team when you have more than one person who needs
                in.
              </p>
            </div>
            <div className="mb-12 grid grid-cols-1 gap-5 min-[861px]:grid-cols-2 min-[1081px]:grid-cols-4">
              {[
                [
                  "Free",
                  "",
                  "0",
                  "Forever",
                  [
                    "Limited daily messages",
                    "Default Claude model",
                    "Web & mobile access",
                    "Try before you commit",
                  ],
                  false,
                  "Try Claude",
                ],
                [
                  "Pro",
                  "US$",
                  "20",
                  "Per Month · (Start Here)",
                  [
                    "Full Claude Opus access",
                    "Projects & Artifacts",
                    "Connectors (Drive, Gmail, Slack)",
                    "Claude Code & Cowork",
                    "5x more usage than Free",
                  ],
                  true,
                  "Get Pro",
                ],
                [
                  "Max",
                  "US$",
                  "100",
                  "Per Month · (Heavy Users)",
                  [
                    "Everything in Pro",
                    "5x or 20x usage limits",
                    "Priority access to new features",
                    "Early access to new models",
                    "Upgrade if Pro keeps hitting limits",
                  ],
                  false,
                  "Get Max",
                ],
                [
                  "Team",
                  "US$",
                  "25",
                  "Per Seat / Month · (Team Choice)",
                  [
                    "Data not used for training",
                    "Admin controls & central billing",
                    "Microsoft 365 & Slack integration",
                    "SSO & enterprise search",
                    "Min 5 seats (US$125/mo floor)",
                  ],
                  false,
                  "Get Team",
                ],
              ].map(([name, cur, price, unit, features, pick, ctaText]) => (
                <div
                  key={String(name)}
                  className={`relative flex h-full flex-col rounded-[18px] border p-8 ${pick ? "border-[#111111] bg-[#111111] text-white" : "border-[#E2E2E2] bg-white"}`}
                >
                  {pick ? (
                    <div className="absolute -top-3 left-8 rounded-full bg-[#E8890C] px-[14px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-black uppercase tracking-[.14em] text-white">
                      Sarah&apos;s Pick
                    </div>
                  ) : null}
                  <div
                    className={`mb-[14px] [font-family:var(--font-dm-sans)] text-[22px] font-black ${pick ? "text-white" : "text-[#111111]"}`}
                  >
                    {name}
                  </div>
                  <div className="mb-1 flex items-end gap-1.5">
                    {cur ? (
                      <span
                        className={`[font-family:var(--font-dm-sans)] text-base font-bold ${pick ? "text-white/60" : "text-[#777777]"}`}
                      >
                        {cur}
                      </span>
                    ) : null}
                    <span
                      className={`[font-family:var(--font-dm-sans)] text-[42px] font-black leading-none tracking-[-.02em] ${pick ? "text-white" : "text-[#111111]"}`}
                    >
                      {price}
                    </span>
                  </div>
                  <div
                    className={`mb-6 text-[12px] ${pick ? "text-white/65" : "text-[#777777]"}`}
                  >
                    {unit}
                  </div>
                  <ul className="mb-7 flex-1">
                    {(features as string[]).map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2 border-b py-[9px] text-[13px] leading-[1.5] ${pick ? "border-white/15 text-white/90" : "border-[#E2E2E2] text-[#444444]"}`}
                      >
                        <span
                          className={`mt-[3px] inline-flex h-[13px] w-[13px] items-center justify-center rounded-full text-[8px] font-black text-white ${pick ? "bg-[#E8890C]" : "bg-[#004AAD]"}`}
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://claude.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex h-11 w-full items-center justify-center rounded-full text-[13px] font-semibold ${pick ? "bg-white text-[#111111]" : "border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"}`}
                  >
                    {ctaText as string}
                  </a>
                </div>
              ))}
            </div>
            <div className="mx-auto mb-12 mt-12 flex max-w-[980px] flex-wrap items-center justify-between gap-6 rounded-[18px] border border-[#E2E2E2] bg-white px-9 py-7">
              <p className="[font-family:var(--font-dm-sans)] text-[15px] font-bold leading-[1.4] text-[#111111]">
                Ready to try Claude? Free plan available, no credit card
                required.
              </p>
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[#004AAD] px-7 py-3.5 text-sm font-semibold text-white"
              >
                Sign Up Now
              </a>
            </div>

            <div className="mx-auto max-w-[1080px]">
              <div className="mb-9 max-w-[760px]">
                <div className="mb-2.5 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                  The Honest Take
                </div>
                <h3 className="[font-family:var(--font-dm-sans)] text-[clamp(22px,2.4vw,28px)] font-black leading-[1.2] text-[#111111]">
                  Pros &amp; Cons Of The Paid Plans.
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.6] text-[#444444]">
                  Start with Pro. It is the right entry point for individuals
                  and gives you everything you need for daily work. Upgrade to
                  Max if you hit the Pro limits regularly. Move to Team when you
                  have more than one person who needs in, or when admin controls
                  and stricter privacy defaults matter.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 min-[861px]:grid-cols-2">
                <div className="relative rounded-2xl border border-[rgba(0,74,173,.15)] bg-[#E6F1FB] p-8">
                  <span className="absolute -top-3 left-6 rounded-full bg-[#E8890C] px-[14px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-black uppercase tracking-[.14em] text-white">
                    Sarah&apos;s Pick
                  </span>
                  <div className="mb-5 border-b border-black/10 pb-3.5 [font-family:var(--font-dm-sans)] text-lg font-black text-[#111111]">
                    Pro · US$20/mo
                  </div>
                  <div className="mb-3 inline-block rounded-full bg-[rgba(29,158,117,.15)] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#1D9E75]">
                    Pros
                  </div>
                  <ul className="mb-4 space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                    {[
                      "Full Opus, Projects & Connectors",
                      "Claude Code & Cowork included",
                      "Cheapest paid tier",
                      "Right entry point for solo users",
                      "Plenty for most daily workflows",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1D9E75] text-[10px] font-black text-white">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-3 inline-block rounded-full bg-[#F0F0F0] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#777777]">
                    Cons
                  </div>
                  <ul className="space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                    {[
                      "5-hour reset windows can pinch",
                      "No team workspace or admin controls",
                      "Heavy users hit limits regularly",
                      "Single user only",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E2E2E2] text-[11px] font-black leading-none text-[#777777]">
                          −
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#E2E2E2] bg-white p-8">
                  <div className="mb-5 border-b border-black/10 pb-3.5 [font-family:var(--font-dm-sans)] text-lg font-black text-[#111111]">
                    Team · US$25/seat/mo · Min 5 Seats
                  </div>
                  <div className="mb-3 inline-block rounded-full bg-[rgba(29,158,117,.15)] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#1D9E75]">
                    Pros
                  </div>
                  <ul className="mb-4 space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                    {[
                      "Data not used for training by default",
                      "Admin controls, SSO & central billing",
                      "Microsoft 365 & Slack integration",
                      "Higher usage limits than Pro",
                      "The right answer for multi-user teams",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1D9E75] text-[10px] font-black text-white">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-3 inline-block rounded-full bg-[#F0F0F0] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#777777]">
                    Cons
                  </div>
                  <ul className="space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                    {[
                      "5-seat minimum (US$125/mo floor)",
                      "Standard seats do not include Claude Code",
                      "Premium seats with Claude Code cost more",
                      "Requires admin setup",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E2E2E2] text-[11px] font-black leading-none text-[#777777]">
                          −
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-white py-24">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="relative overflow-hidden rounded-3xl bg-[#111111] p-10 md:p-16">
              <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_1fr]">
                <div className="relative z-[1]">
                  <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#E8890C]">
                    AI Search Visibility
                  </div>
                  <h2 className="mb-5 [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] text-white">
                    Find Out How Your Company Ranks In AI Search.
                  </h2>
                  <p className="mb-6 text-base leading-[1.65] text-white/85">
                    People are not just Googling any more. They are asking
                    Claude, ChatGPT and Perplexity for recommendations. The GEO
                    Audit shows you exactly where your business shows up in AI
                    search results, what is missing, and what to do about it.
                  </p>
                  <ul className="mb-7 space-y-2.5">
                    {[
                      "Scored prompts across major AI engines",
                      "Prioritised opportunities ranked by impact",
                      "Activation plan to lift your visibility",
                      "Diagnostic explained in easy language",
                    ].map((item) => (
                      <li
                        key={item}
                        className="relative pl-[26px] text-sm leading-[1.5] text-white/90"
                      >
                        <span className="absolute left-0 top-[5px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E8890C] text-[10px] font-black text-white">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://www.aieconomy.ai/product/geo-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#004AAD] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#003A8C]"
                  >
                    Enquire Now <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="relative z-[1] rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  {[
                    ["Claude", "82%"],
                    ["ChatGPT", "71%"],
                    ["Perplexity", "58%"],
                    ["Gemini", "44%"],
                  ].map(([name, width]) => (
                    <div
                      key={name}
                      className="grid grid-cols-[90px_1fr_36px] items-center gap-3.5 border-b border-white/10 py-2.5 last:border-none"
                    >
                      <div className="[font-family:var(--font-dm-sans)] text-[13px] font-bold text-white">
                        {name}
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-[#E8890C] to-[#FFB347]"
                          style={{ width }}
                        />
                      </div>
                      <div className="[font-family:var(--font-dm-sans)] text-right text-sm font-black text-white">
                        {width.replace("%", "")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="mb-10 max-w-[760px]">
              <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                Keep Going
              </div>
              <h2 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
                Take Claude Further.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#444444]">
                Manage your full AI stack, get trained on Claude properly, and
                grab direct access to me when you need it.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 min-[961px]:grid-cols-3">
              <div className="flex h-full flex-col rounded-[18px] border border-[#111111] bg-[#111111] p-8 text-white transition hover:-translate-y-[4px] hover:border-[#E8890C] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,.18)]">
                <span className="mb-4 inline-block w-fit rounded-full bg-[rgba(232,137,12,.2)] px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] text-[#E8890C]">
                  Most Requested
                </span>
                <h3 className="mb-3 [font-family:var(--font-dm-sans)] text-[22px] font-black leading-[1.2]">
                  The AI Tool Dashboard.
                </h3>
                <p className="mb-[22px] flex-1 text-sm leading-[1.6] text-white/80">
                  Track and manage every AI tool in your stack. Star Claude, add
                  your own, see what is current. One place for the whole stack,
                  lifetime access.
                </p>
                <div className="flex items-center justify-between border-t border-white/15 pt-[18px]">
                  <div className="[font-family:var(--font-dm-sans)] text-[22px] font-black">
                    $27{" "}
                    <small className="mt-1 block text-[11px] font-medium uppercase tracking-[.04em] text-white/60">
                      USD · One-Time
                    </small>
                  </div>
                  <Link
                    href="/toolkit/cluster"
                    className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#111111]"
                  >
                    Unlock Now
                  </Link>
                </div>
              </div>
              <div className="flex h-full flex-col rounded-[18px] border border-[#E2E2E2] bg-white p-8 transition hover:-translate-y-[4px] hover:border-[#004AAD] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,.18)]">
                <span className="mb-4 inline-block w-fit rounded-full bg-[#E6F1FB] px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] text-[#004AAD]">
                  Claude Training
                </span>
                <h3 className="mb-3 [font-family:var(--font-dm-sans)] text-[22px] font-black leading-[1.2] text-[#111111]">
                  Get Trained On Claude.
                </h3>
                <p className="mb-[22px] flex-1 text-sm leading-[1.6] text-[#444444]">
                  Self-paced training to help you actually get results from
                  Claude. The framework, the workflows & the prompts that turn
                  Claude from a chat tool into a working partner.
                </p>
                <div className="border-t border-[#E2E2E2] pt-[18px]">
                  <div className="mb-3 [font-family:var(--font-dm-sans)] text-[22px] font-black text-[#111111]">
                    $97{" "}
                    <small className="mt-1 block text-[11px] font-medium uppercase tracking-[.04em] text-[#777777]">
                      USD · One-Time
                    </small>
                  </div>
                  <Link
                    href="https://crm.njin.co/v2/preview/ggENr5gfNpziNl3iqQEB"
                    className="inline-flex items-center gap-2 rounded-full bg-[#004AAD] px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    I&apos;m Interested <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="flex h-full flex-col rounded-[18px] border border-[#E2E2E2] bg-white p-8 transition hover:-translate-y-[4px] hover:border-[#004AAD] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,.18)]">
                <span className="mb-4 inline-block w-fit rounded-full bg-[#E6F1FB] px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] text-[#004AAD]">
                  Annual Access
                </span>
                <h3 className="mb-2 [font-family:var(--font-dm-sans)] text-[22px] font-black leading-[1.2] text-[#111111]">
                  Ask Sarah.
                </h3>
                <p className="mb-[22px] flex-1 text-sm leading-[1.6] text-[#444444]">
                  Direct access to Sarah for AI questions, tool recommendations
                  and setup help. The fastest way to get unstuck and keep
                  moving.
                </p>
                <div className="border-t border-[#E2E2E2] pt-[18px]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="[font-family:var(--font-dm-sans)] text-[22px] font-black text-[#111111]">
                      $149{" "}
                      <small className="mt-1 block text-[11px] font-medium uppercase tracking-[.04em] text-[#777777]">
                        USD · Per Year
                      </small>
                    </div>
                    <Link
                      href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                      className="inline-flex items-center gap-2 rounded-full bg-[#004AAD] px-5 py-2.5 text-sm font-semibold text-white"
                    >
                      I&apos;m Interested <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#111111] pb-8 pt-[72px] text-white">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
              <div className="xl:col-span-1">
                <Link
                  href="/"
                  aria-label="AI Economy"
                  className="mb-5 block w-40 text-white"
                >
                  <BrandLogo />
                </Link>
                <p className="max-w-[320px] text-sm leading-[1.65] text-white/65">
                  AI trainer, strategist and consultant. Building AI platforms
                  including parently.ai and aieconomy.ai. Cutting through the AI
                  chaos so you can focus on what matters.
                </p>
              </div>
              <div>
                <h4 className="mb-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em]">
                  Toolkit
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/llm-comparison"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      LLM Comparison
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/toolkit/cluster"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      All Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ai-tips"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      AI Tips
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em]">
                  Learn
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/toolkit/claude-deep-dive"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Claude Deep Dive
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/toolkit/chatgpt-deep-dive"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      ChatGPT Deep Dive
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/toolkit/perplexity-deep-dive"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Perplexity Deep Dive
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em]">
                  Company
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Ask Sarah
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Privacy &amp; Data
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-7 text-xs text-white/50">
              <div>© 2026 AI Economy. ABN: 24 602 295 698.</div>
              <div>Melbourne, Australia.</div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  if (toolId === "chatgpt") {
    return (
      <div
        className={`${poppins.variable} ${dmSans.variable} bg-white text-[#444444] antialiased [font-family:var(--font-poppins)]`}
      >
        <nav className="fixed inset-x-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-white/[0.97] backdrop-blur-[12px]">
          <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-8">
            <Link
              href="/dashboard"
              aria-label="AI Economy"
              className="block w-[150px] text-[#111111]"
            >
              <BrandLogo />
            </Link>
            <ul className="hidden list-none items-center gap-8 min-[861px]:absolute min-[861px]:left-1/2 min-[861px]:flex min-[861px]:-translate-x-1/3">
              <li>
                <Link
                  href="/llm-comparison"
                  className="text-sm font-semibold text-[#004AAD]"
                >
                  LLMs
                </Link>
              </li>
              <li>
                <Link
                  href="/toolkit/cluster"
                  className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-tips"
                  className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
                >
                  AI Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/ask-sarah"
                  className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
                >
                  Ask Sarah
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/SarahBalmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sarah Balmer on LinkedIn"
                  className="ml-3 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
                >
                  <LinkedInIcon className="h-[18px] w-[18px]" />
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2 min-[861px]:hidden">
              <a
                href="https://www.linkedin.com/in/SarahBalmer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarah Balmer on LinkedIn"
                className="mr-2 inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#004AAD] text-white"
              >
                <LinkedInIcon className="h-[17px] w-[17px]" />
              </a>
              <button
                aria-label="Menu"
                className="inline-flex p-2 text-[#111111]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <div className="mx-auto w-full max-w-[1180px] px-8 pt-[88px]">
          <div className="text-[13px] text-[#777777]">
            <Link href="/" className="hover:text-[#004AAD]">
              Home
            </Link>
            <span className="mx-2 text-[#E2E2E2]">/</span>
            <Link href="/llm-comparison" className="hover:text-[#004AAD]">
              LLMs
            </Link>
            <span className="mx-2 text-[#E2E2E2]">/</span>
            <span className="font-semibold text-[#111111]">ChatGPT</span>
          </div>
        </div>

        <section className="border-b border-[#E2E2E2] bg-white py-[48px] [background-image:linear-gradient(#ECECEC_1px,transparent_1px),linear-gradient(90deg,#ECECEC_1px,transparent_1px)] [background-size:40px_40px]">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="grid max-w-[980px] grid-cols-1 items-center gap-9 min-[721px]:grid-cols-[auto_1fr]">
              <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-[22px] border border-[#E2E2E2] bg-white p-[14px] shadow-[0_12px_32px_-16px_rgba(0,0,0,.15)] min-[721px]:mx-0">
                <img
                  src="https://www.google.com/s2/favicons?domain=openai.com&sz=256"
                  alt="ChatGPT"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-center min-[721px]:text-left">
                <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                  Deep Dive
                </div>
                <h1 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(36px,4.5vw,56px)] font-black leading-[1] tracking-[-.02em] text-[#111111]">
                  Get ChatGPT{" "}
                  <span className="text-[#004AAD]">Working For You.</span>
                </h1>
                <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#444444]">
                  ChatGPT is the AI assistant that started it all. The most
                  widely used AI in the world, with native image generation,
                  voice mode and custom GPTs built right in. I use it daily as
                  my thinking partner alongside Claude.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#E2E2E2] bg-[#FAFAFA] py-6">
          <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 gap-4 px-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
            {[
              ["Built By", "OpenAI"],
              ["Category", "Core AI / LLM"],
              ["Difficulty", "Easy To Start"],
              ["Free Plan", "Yes"],
              ["Availability", "Most Countries"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-1.5 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[0.1em] text-[#777777]">
                  {label}
                </div>
                <div className="flex flex-wrap items-center gap-2 [font-family:var(--font-dm-sans)] text-[15px] font-black text-[#111111]">
                  {label === "Difficulty" ? (
                    <span className="inline-flex rounded-full bg-[rgba(29,158,117,.15)] px-[10px] py-[3px] text-[11px] font-semibold tracking-[.04em] text-[#1D9E75]">
                      {value}
                    </span>
                  ) : (
                    value
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto w-full max-w-[840px] px-8">
            <div className="relative rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-white px-12 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,.15)]">
              <span className="pointer-events-none absolute left-7 top-[-12px] [font-family:var(--font-dm-sans)] text-[110px] font-black leading-none text-[#E8890C]">
                &ldquo;
              </span>
              <span className="block [font-family:var(--font-dm-sans)] text-[clamp(20px,2.2vw,26px)] font-black leading-[1.3] tracking-[-.01em] text-[#111111]">
                Claude is my number one. ChatGPT is in second place, and it
                earns the spot. I use it for AI washing. Run an answer through
                both, see if they line up, take the better perspective.
              </span>
              <div className="mt-6 flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em] text-[#E8890C]">
                <span className="h-0.5 w-7 bg-[#E8890C]" />
                Sarah&apos;s Take
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="mb-12 max-w-[760px]">
              <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                Key Features
              </div>
              <h2 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
                What Makes ChatGPT A Powerhouse.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#444444]">
                From the flagship GPT-4o model to native image generation,
                custom GPTs and voice mode. Here is what you actually get and
                what each one is best for.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 min-[561px]:grid-cols-2 min-[881px]:grid-cols-3 min-[1181px]:grid-cols-4">
              {[
                [
                  "Flagship Model",
                  "GPT-4o",
                  "OpenAI's flagship model with text, vision and voice built in. Understands images, documents and audio natively. Fast, capable and the default for most tasks.",
                  "Easy",
                  "",
                ],
                [
                  "New · Image 2",
                  "Native Image Generation",
                  "The new Image 2 model is a step change. Photorealistic images, accurate text rendering, brand consistency and multi-image edits in one go. Outperforms Gemini on quality and control.",
                  "Easy",
                  "new",
                ],
                [
                  "Build Your Own",
                  "Custom GPTs",
                  "Build task-specific AI assistants with custom instructions, knowledge files and actions. No coding needed. Share with your team or keep private.",
                  "Intermediate",
                  "int",
                ],
                [
                  "Data Analysis",
                  "Code Interpreter",
                  "Upload spreadsheets, CSVs and data files. ChatGPT analyses your data, runs code, creates charts and exports results. The fastest way to interrogate a dataset.",
                  "Easy",
                  "",
                ],
                [
                  "Live Web",
                  "Web Browsing",
                  "Search the web in real time, find current information and verify facts. Now uses ChatGPT Search for cleaner, faster results with better citations.",
                  "Easy",
                  "",
                ],
                [
                  "Sarah Uses",
                  "Voice Chat",
                  "Instead of typing a prompt, have a conversation. I bounce between ChatGPT and Claude on voice when I am on the go. The fastest way to think out loud and get a real-time response.",
                  "Easy",
                  "",
                ],
                [
                  "Hidden Power",
                  "The + Button",
                  "The most underused thing in any AI tool. Click + to upload files, take a photo, connect apps, switch on web search, image gen or agent mode. Most people never look here. They should.",
                  "Easy",
                  "",
                ],
                [
                  "Plug In",
                  "Connectors",
                  "Plug ChatGPT into Google Drive, OneDrive, SharePoint, GitHub, Box and Dropbox. Pull files in, ask questions, get answers grounded in your actual data without copy-paste.",
                  "Easy",
                  "",
                ],
              ].map(([tag, title, desc, level, variant]) => (
                <div
                  key={title}
                  className={`flex min-h-[240px] flex-col rounded-2xl border bg-white p-[26px] transition hover:-translate-y-[3px] ${variant === "new" ? "border-[#E8890C] hover:shadow-[0_16px_36px_-18px_rgba(232,137,12,.25)]" : "border-[#E2E2E2] hover:border-[#004AAD] hover:shadow-[0_16px_36px_-18px_rgba(0,74,173,.15)]"}`}
                >
                  <span
                    className={`mb-[14px] inline-block w-fit rounded-full px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] ${variant === "new" ? "bg-[#E8890C] text-white" : variant === "int" ? "bg-[rgba(232,137,12,.15)] text-[#E8890C]" : "bg-[#E6F1FB] text-[#004AAD]"}`}
                  >
                    {tag}
                  </span>
                  <h3 className="mb-2.5 [font-family:var(--font-dm-sans)] text-[18px] font-black leading-[1.2] text-[#111111]">
                    {title}
                  </h3>
                  <p className="flex-1 text-[13px] leading-[1.6] text-[#444444]">
                    {desc}
                  </p>
                  <div
                    className={`mt-[14px] border-t border-[#E2E2E2] pt-[14px] text-[11px] font-semibold uppercase tracking-[.08em] ${level === "Intermediate" ? "text-[#E8890C]" : "text-[#777777]"}`}
                  >
                    {level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-white py-20">
          <div className="mx-auto w-full max-w-[840px] px-8">
            <div className="relative rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-[#FAFAFA] px-12 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,.15)]">
              <span className="pointer-events-none absolute left-7 top-[-12px] [font-family:var(--font-dm-sans)] text-[110px] font-black leading-none text-[#E8890C]">
                &ldquo;
              </span>
              <span className="block [font-family:var(--font-dm-sans)] text-[clamp(20px,2.2vw,26px)] font-black leading-[1.3] tracking-[-.01em] text-[#111111]">
                ChatGPT is my thinking partner. When I need to validate an idea,
                stress-test a strategy, or get a different perspective on
                something Claude and I have been working on, I take it to
                ChatGPT. Image 2 has changed the game for visual ideation,
                beating Nano Banana on quality, and Custom GPTs let you build
                task-specific assistants in minutes. Everyone should have this
                in their stack.
              </span>
              <div className="mt-6 flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em] text-[#E8890C]">
                <span className="h-0.5 w-7 bg-[#E8890C]" />
                Sarah&apos;s Take
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-white py-24">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="mb-12 max-w-[760px]">
              <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                Plans &amp; Pricing
              </div>
              <h2 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
                Pick The Right Plan.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#444444]">
                There are three tiers worth knowing. The free plan is fine for a
                quick try. Plus is what I use every day. Team is for when more
                than one person needs in.
              </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-5 min-[1081px]:mx-0 min-[1081px]:max-w-none min-[1081px]:grid-cols-3">
              {[
                [
                  "Free",
                  "",
                  "0",
                  "Forever",
                  [
                    "Limited daily messages",
                    "GPT-4o mini model",
                    "Basic features",
                    "Web & mobile access",
                  ],
                  false,
                  "View Plans",
                ],
                [
                  "Plus",
                  "US$",
                  "20",
                  "Per Month",
                  [
                    "GPT-4o full model",
                    "Image 2 native image generation",
                    "Custom GPTs & advanced data analysis",
                    "Web browsing & file uploads",
                    "Advanced Voice Mode",
                  ],
                  false,
                  "Get Plus",
                ],
                [
                  "Team",
                  "US$",
                  "25",
                  "Per Seat / Month · Min 2 Seats",
                  [
                    "Data not used for training",
                    "Admin controls & audit logs",
                    "Everything in Plus",
                    "Team workspace",
                    "Higher usage limits",
                  ],
                  true,
                  "Get Team",
                ],
              ].map(([name, cur, price, unit, features, pick, ctaText]) => (
                <div
                  key={String(name)}
                  className={`relative flex h-full flex-col rounded-[18px] border p-8 ${pick ? "border-[#111111] bg-[#111111] text-white" : "border-[#E2E2E2] bg-white"}`}
                >
                  {pick ? (
                    <div className="absolute -top-3 left-8 rounded-full bg-[#E8890C] px-[14px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-black uppercase tracking-[.14em] text-white">
                      Sarah&apos;s Pick
                    </div>
                  ) : null}
                  <div
                    className={`mb-[14px] [font-family:var(--font-dm-sans)] text-[24px] font-black ${pick ? "text-white" : "text-[#111111]"}`}
                  >
                    {name}
                  </div>
                  <div className="mb-1 flex items-end gap-1.5">
                    {cur ? (
                      <span
                        className={`[font-family:var(--font-dm-sans)] text-[18px] font-bold ${pick ? "text-white/60" : "text-[#777777]"}`}
                      >
                        {cur}
                      </span>
                    ) : null}
                    <span
                      className={`[font-family:var(--font-dm-sans)] text-[48px] font-black leading-none tracking-[-.02em] ${pick ? "text-white" : "text-[#111111]"}`}
                    >
                      {price}
                    </span>
                  </div>
                  <div
                    className={`mb-6 text-[13px] ${pick ? "text-white/65" : "text-[#777777]"}`}
                  >
                    {unit}
                  </div>
                  <ul className="mb-7 flex-1">
                    {(features as string[]).map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 border-b py-2.5 text-[14px] leading-[1.5] ${pick ? "border-white/15 text-white/90" : "border-[#E2E2E2] text-[#444444]"}`}
                      >
                        <span
                          className={`mt-[3px] inline-flex h-[14px] w-[14px] items-center justify-center rounded-full text-[9px] font-black text-white ${pick ? "bg-[#E8890C]" : "bg-[#004AAD]"}`}
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold ${pick ? "bg-white text-[#111111]" : "border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"}`}
                  >
                    {ctaText as string}
                  </a>
                </div>
              ))}
            </div>

            <div className="mx-auto mb-12 mt-12 flex max-w-[980px] flex-wrap items-center justify-between gap-6 rounded-[18px] border border-[#E2E2E2] bg-white px-9 py-7">
              <p className="[font-family:var(--font-dm-sans)] text-[15px] font-bold leading-[1.4] text-[#111111]">
                Ready to try ChatGPT? Free plan available, no credit card
                required.
              </p>
              <a
                href="https://chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[#004AAD] px-7 py-3.5 text-sm font-semibold text-white"
              >
                Sign Up Now
              </a>
            </div>

            <div className="mx-auto max-w-[1080px]">
              <div className="mb-9 max-w-[760px]">
                <div className="mb-2.5 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                  The Honest Take
                </div>
                <h3 className="[font-family:var(--font-dm-sans)] text-[clamp(22px,2.4vw,28px)] font-black leading-[1.2] text-[#111111]">
                  Pros &amp; Cons Of The Paid Plans.
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.6] text-[#444444]">
                  Team is my pick, even for solo users. The privacy controls
                  actually work, your data is not used for training by default,
                  and you get admin controls. Plus is the minimum if Team is
                  overkill, but you have to manually opt out of training.
                  Whatever you choose, do not put real client data into the Free
                  plan.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 min-[861px]:grid-cols-2">
                <div className="rounded-2xl border border-[#E2E2E2] bg-[#FAFAFA] p-8">
                  <div className="mb-5 border-b border-black/10 pb-3.5 [font-family:var(--font-dm-sans)] text-lg font-black text-[#111111]">
                    Plus · US$20/mo
                  </div>
                  <div className="mb-3 inline-block rounded-full bg-[rgba(29,158,117,.15)] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#1D9E75]">
                    Pros
                  </div>
                  <ul className="mb-4 space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                    {[
                      "Full GPT-4o, Image 2 & Voice Mode",
                      "Custom GPTs & advanced data analysis",
                      "Higher usage limits than Free",
                      "Privacy controls available",
                      "Cheaper if you really only need solo access",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1D9E75] text-[10px] font-black text-white">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-3 inline-block rounded-full bg-[#F0F0F0] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#777777]">
                    Cons
                  </div>
                  <ul className="space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                    {[
                      "Privacy opt-out is manual, you have to set it",
                      "No team workspace or admin controls",
                      "No audit logs",
                      "Single user only",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E2E2E2] text-[11px] font-black leading-none text-[#777777]">
                          −
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-2xl border border-[rgba(0,74,173,.15)] bg-[#E6F1FB] p-8">
                  <span className="absolute -top-3 left-6 rounded-full bg-[#E8890C] px-[14px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-black uppercase tracking-[.14em] text-white">
                    Sarah&apos;s Pick
                  </span>
                  <div className="mb-5 border-b border-black/10 pb-3.5 [font-family:var(--font-dm-sans)] text-lg font-black text-[#111111]">
                    Team · US$25/seat/mo · Min 2 Seats
                  </div>
                  <div className="mb-3 inline-block rounded-full bg-[rgba(29,158,117,.15)] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#1D9E75]">
                    Pros
                  </div>
                  <ul className="mb-4 space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                    {[
                      "Data not used for training by default",
                      "Admin controls & audit logs",
                      "Central workspace for team access",
                      "Higher usage limits than Plus",
                      "Everything Plus offers, plus security",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1D9E75] text-[10px] font-black text-white">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-3 inline-block rounded-full bg-[#F0F0F0] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#777777]">
                    Cons
                  </div>
                  <ul className="space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                    {[
                      "US$50/month minimum (two seats)",
                      "More than a solo user strictly needs",
                      "Requires admin setup",
                      "Does not include API access",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E2E2E2] text-[11px] font-black leading-none text-[#777777]">
                          −
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-white py-24">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="relative overflow-hidden rounded-3xl bg-[#111111] p-10 md:p-16">
              <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:32px_32px]" />
              <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_1fr]">
                <div className="relative z-[1]">
                  <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#E8890C]">
                    AI Search Visibility
                  </div>
                  <h2 className="mb-5 [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] text-white">
                    Find Out How Your Company Ranks In AI Search.
                  </h2>
                  <p className="mb-6 text-base leading-[1.65] text-white/85">
                    People are not just Googling any more. They are asking
                    ChatGPT, Claude and Perplexity for recommendations. The GEO
                    Audit shows you exactly where your business shows up in AI
                    search results, what is missing, and what to do about it.
                  </p>
                  <ul className="mb-7 space-y-2.5">
                    {[
                      "Scored prompts across major AI engines",
                      "Prioritised opportunities ranked by impact",
                      "Activation plan to lift your visibility",
                      "Diagnostic explained in easy language",
                    ].map((item) => (
                      <li
                        key={item}
                        className="relative pl-[26px] text-sm leading-[1.5] text-white/90"
                      >
                        <span className="absolute left-0 top-[5px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E8890C] text-[10px] font-black text-white">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="https://www.aieconomy.ai/product/geo-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#004AAD] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#003A8C]"
                  >
                    Enquire Now <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="relative z-[1] rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  {[
                    ["ChatGPT", "78%"],
                    ["Claude", "62%"],
                    ["Perplexity", "54%"],
                    ["Gemini", "41%"],
                  ].map(([name, width]) => (
                    <div
                      key={name}
                      className="grid grid-cols-[90px_1fr_36px] items-center gap-3.5 border-b border-white/10 py-2.5 last:border-none"
                    >
                      <div className="[font-family:var(--font-dm-sans)] text-[13px] font-bold text-white">
                        {name}
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-[#E8890C] to-[#FFB347]"
                          style={{ width }}
                        />
                      </div>
                      <div className="[font-family:var(--font-dm-sans)] text-right text-sm font-black text-white">
                        {width.replace("%", "")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="mb-10 max-w-[760px]">
              <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                Keep Going
              </div>
              <h2 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
                Take ChatGPT Further.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#444444]">
                Manage your full AI stack, learn the prompts that actually work,
                and see how ChatGPT compares to Claude side by side.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 min-[961px]:grid-cols-3">
              <div className="flex h-full flex-col rounded-[18px] border border-[#111111] bg-[#111111] p-8 text-white transition hover:-translate-y-[4px] hover:border-[#E8890C] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,.18)]">
                <span className="mb-4 inline-block w-fit rounded-full bg-[rgba(232,137,12,.2)] px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] text-[#E8890C]">
                  Most Requested
                </span>
                <h3 className="mb-3 [font-family:var(--font-dm-sans)] text-[22px] font-black leading-[1.2]">
                  The AI Tool Dashboard.
                </h3>
                <p className="mb-[22px] flex-1 text-sm leading-[1.6] text-white/80">
                  Track and manage every AI tool in your stack. Star ChatGPT,
                  add your own, see what is current. One place for the whole
                  stack, lifetime access.
                </p>
                <div className="flex items-center justify-between border-t border-white/15 pt-[18px]">
                  <div className="[font-family:var(--font-dm-sans)] text-[22px] font-black">
                    $27{" "}
                    <small className="mt-1 block text-[11px] font-medium uppercase tracking-[.04em] text-white/60">
                      USD · One-Time
                    </small>
                  </div>
                  <Link
                    href="/toolkit/cluster"
                    className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#111111]"
                  >
                    Unlock Now
                  </Link>
                </div>
              </div>
              <div className="flex h-full flex-col rounded-[18px] border border-[#E2E2E2] bg-white p-8 transition hover:-translate-y-[4px] hover:border-[#004AAD] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,.18)]">
                <span className="mb-4 inline-block w-fit rounded-full bg-[#E6F1FB] px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] text-[#004AAD]">
                  Prompting Guide
                </span>
                <h3 className="mb-3 [font-family:var(--font-dm-sans)] text-[22px] font-black leading-[1.2] text-[#111111]">
                  Start Right With AI.
                </h3>
                <p className="mb-[22px] flex-1 text-sm leading-[1.6] text-[#444444]">
                  The shortcut to actually getting results from ChatGPT, not
                  just chatting with it. The framework I use every day, plus the
                  prompts that make it work from day one.
                </p>
                <div className="border-t border-[#E2E2E2] pt-[18px]">
                  <div className="mb-3 [font-family:var(--font-dm-sans)] text-[22px] font-black text-[#111111]">
                    $27{" "}
                    <small className="mt-1 block text-[11px] font-medium uppercase tracking-[.04em] text-[#777777]">
                      USD · One-Time
                    </small>
                  </div>
                  <Link
                    href="/start-right"
                    className="inline-flex items-center gap-2 rounded-full bg-[#004AAD] px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Get Start Right <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="flex h-full flex-col rounded-[18px] border border-[#E2E2E2] bg-white p-8 transition hover:-translate-y-[4px] hover:border-[#004AAD] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,.18)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-[11px] border border-[#E2E2E2] bg-[#FAFAFA] p-2">
                  <img
                    src="https://www.google.com/s2/favicons?domain=claude.ai&sz=256"
                    alt="Claude"
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mb-2 [font-family:var(--font-dm-sans)] text-[22px] font-black leading-[1.2] text-[#111111]">
                  Compare With Claude.
                </h3>
                <div className="mb-[14px] text-[11px] uppercase tracking-[.02em] text-[#777777]">
                  By Anthropic
                </div>
                <p className="mb-[22px] flex-1 text-sm leading-[1.6] text-[#444444]">
                  My number one tool. See how Claude compares on writing,
                  analysis, coding and pricing. Most people end up using both
                  for different things.
                </p>
                <div className="border-t border-[#E2E2E2] pt-[18px]">
                  <Link
                    href="/toolkit/claude-deep-dive"
                    className="inline-flex items-center rounded-full border-[1.5px] border-[#111111] px-7 py-3.5 text-sm font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
                  >
                    View Claude →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#111111] pb-8 pt-[72px] text-white">
          <div className="mx-auto w-full max-w-[1180px] px-8">
            <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
              <div className="xl:col-span-1">
                <Link
                  href="/"
                  aria-label="AI Economy"
                  className="mb-5 block w-40 text-white"
                >
                  <BrandLogo />
                </Link>
                <p className="max-w-[320px] text-sm leading-[1.65] text-white/65">
                  AI trainer, strategist and consultant. Building AI platforms
                  including parently.ai and aieconomy.ai. Cutting through the AI
                  chaos so you can focus on what matters.
                </p>
              </div>
              <div>
                <h4 className="mb-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em]">
                  Toolkit
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/llm-comparison"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      LLM Comparison
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/toolkit/cluster"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      All Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ai-tips"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      AI Tips
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em]">
                  Learn
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/toolkit/claude-deep-dive"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Claude Deep Dive
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/toolkit/chatgpt-deep-dive"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      ChatGPT Deep Dive
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/toolkit/perplexity-deep-dive"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Perplexity Deep Dive
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em]">
                  Company
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Ask Sarah
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Privacy &amp; Data
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-7 text-xs text-white/50">
              <div>© 2026 AI Economy. ABN: 24 602 295 698.</div>
              <div>Melbourne, Australia.</div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  if (toolId !== "perplexity") {
    return (
      <div
        className={`${poppins.variable} ${dmSans.variable} p-20 text-center text-[#111111] [font-family:var(--font-poppins)]`}
      >
        This page currently has a custom layout for ChatGPT and Perplexity.
      </div>
    );
  }

  return (
    <div
      className={`${poppins.variable} ${dmSans.variable} bg-white text-[#444444] antialiased [font-family:var(--font-poppins)]`}
    >
      <nav className="fixed inset-x-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-white/95 backdrop-blur-[12px]">
        <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-8">
          <Link
            href="/dashboard"
            aria-label="AI Economy"
            className="block w-[150px] text-[#111111]"
          >
            <BrandLogo />
          </Link>
          <ul className="hidden list-none items-center gap-8 md:absolute md:left-1/2 md:flex md:-translate-x-1/3">
            <li>
              <Link
                href="/llm-comparison"
                className="text-sm font-semibold text-[#004AAD]"
              >
                LLMs
              </Link>
            </li>
            <li>
              <Link
                href="/toolkit/cluster"
                className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link
                href="/ai-tips"
                className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
              >
                AI Tips
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/ask-sarah"
                className="text-sm font-medium text-[#111111] hover:text-[#004AAD]"
              >
                Ask Sarah
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/SarahBalmer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarah Balmer on LinkedIn"
                className="ml-3 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://www.linkedin.com/in/SarahBalmer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarah Balmer on LinkedIn"
              className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#004AAD] text-white"
            >
              <LinkedInIcon className="h-[17px] w-[17px]" />
            </a>
            <button
              aria-label="Menu"
              className="inline-flex p-2 text-[#111111]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="mx-auto w-full max-w-[1180px] px-8 pt-[88px]">
        <div className="py-0 text-[13px] text-[#777777]">
          <Link href="/" className="hover:text-[#004AAD]">
            Home
          </Link>
          <span className="mx-2 text-[#E2E2E2]">/</span>
          <Link href="/llm-comparison" className="hover:text-[#004AAD]">
            LLMs
          </Link>
          <span className="mx-2 text-[#E2E2E2]">/</span>
          <span className="font-semibold text-[#111111]">Perplexity</span>
        </div>
      </div>

      <section className="border-b border-[#E2E2E2] bg-white py-[48px] [background-image:linear-gradient(#ECECEC_1px,transparent_1px),linear-gradient(90deg,#ECECEC_1px,transparent_1px)] [background-size:40px_40px]">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="grid max-w-[980px] grid-cols-1 items-center gap-9 min-[720px]:grid-cols-[auto_1fr] min-[720px]:text-left">
            <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-[22px] border border-[#E2E2E2] bg-white p-[14px] shadow-[0_12px_32px_-16px_rgba(0,0,0,.15)] min-[720px]:mx-0">
              <img
                src="https://www.google.com/s2/favicons?domain=perplexity.ai&sz=256"
                alt="Perplexity"
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-center min-[720px]:text-left">
              <span className="mb-[18px] inline-block rounded-full bg-[#E8890C] px-3 py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-black uppercase tracking-[0.14em] text-white">
                Sarah&apos;s Daily Search
              </span>
              <div className="mb-4 block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                Deep Dive
              </div>
              <h1 className="[font-family:var(--font-dm-sans)] mb-[14px] text-[clamp(32px,4vw,48px)] font-black leading-[1.05] tracking-[-0.02em] text-[#111111] min-[720px]:whitespace-nowrap">
                Perplexity Is{" "}
                <span className="text-[#004AAD]">Search With Receipts.</span>
              </h1>
              <p className="max-w-[640px] text-[17px] leading-[1.65] text-[#444444]">
                Perplexity is an AI search engine, not an LLM. It pulls live
                information from the web, cites the sources, and answers your
                question. Where Google gives you ten links to read, Perplexity
                gives you the answer with the working shown. The third tool in
                my daily stack alongside Claude and ChatGPT.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E2E2E2] bg-[#FAFAFA] py-6">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 gap-4 px-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {[
            ["Built By", "Perplexity AI"],
            ["Category", "AI Search"],
            ["Difficulty", "Easy To Start"],
            ["Free Plan", "Yes"],
            ["Availability", "Most Countries"],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="mb-1.5 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[0.1em] text-[#777777]">
                {label}
              </div>
              <div className="flex flex-wrap items-center gap-2 [font-family:var(--font-dm-sans)] text-[15px] font-black text-[#111111]">
                {label === "Difficulty" ? (
                  <span className="inline-flex rounded-full bg-[rgba(29,158,117,.15)] px-[10px] py-[3px] text-[11px] font-semibold tracking-[.04em] text-[#1D9E75]">
                    {value}
                  </span>
                ) : (
                  value
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[840px] px-8">
          <div className="relative rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-white px-12 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,.15)]">
            <span className="pointer-events-none absolute left-7 top-[-12px] [font-family:var(--font-dm-sans)] text-[110px] font-black leading-none text-[#E8890C]">
              &ldquo;
            </span>
            <span className="block [font-family:var(--font-dm-sans)] text-[clamp(20px,2.2vw,26px)] font-black leading-[1.3] tracking-[-.01em] text-[#111111]">
              Perplexity replaces Google for me. When I want a real answer, with
              sources, I go to Perplexity. When I want to think something
              through, I go to Claude. When I want a second opinion, I go to
              ChatGPT. These three together cover almost everything.
            </span>
            <div className="mt-6 flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em] text-[#E8890C]">
              <span className="h-0.5 w-7 bg-[#E8890C]" />
              Sarah&apos;s Take
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-12 max-w-[760px]">
            <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              Key Features
            </div>
            <h2 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
              What Perplexity Does Well.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              Real-time web search, cited sources, and an AI browser that can
              take actions for you. Here is what you actually get and what each
              thing is best for.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {[
              [
                "Live Search",
                "Real-Time Web Search",
                "Perplexity searches the live web in real time. Up-to-date answers on news, prices, schedules, statistics. The right tool whenever you need an answer that is current, not training-data-old.",
                "Easy",
                "",
              ],
              [
                "Trust Layer",
                "Cited Sources",
                "Every answer comes with numbered citations. Click any number, see the source. Perfect for research where you need to verify the claim or quote it elsewhere.",
                "Easy",
                "",
              ],
              [
                "Deep Research",
                "Pro Search & Research",
                "Pro Search runs multi-step searches that build on each other. Research mode goes deeper. Comprehensive reports on complex topics with autonomous reasoning.",
                "Intermediate",
                "int",
              ],
              [
                "New · Comet Browser",
                "Comet AI Browser",
                "Perplexity's own AI-powered browser. It searches, summarises, fills forms, books things, takes actions. The web browser as an AI assistant, not just a window onto pages.",
                "Intermediate",
                "new",
              ],
              [
                "Workspaces",
                "Spaces & Files",
                "Spaces are research workspaces. Upload documents, organise threads, share with a team. Combined with file uploads, Perplexity can answer questions across your own data.",
                "Easy",
                "",
              ],
              [
                "Model Mix",
                "All The Models, One Place",
                "Perplexity uses the best models from OpenAI, Anthropic and Google under the hood. You get the right model for the job without juggling subscriptions.",
                "Easy",
                "",
              ],
            ].map(([tag, title, desc, level, variant]) => (
              <div
                key={title}
                className={`flex min-h-[240px] flex-col rounded-2xl border bg-white p-[26px] transition hover:-translate-y-0.5 ${variant === "new" ? "border-[#E8890C]" : "border-[#E2E2E2] hover:border-[#004AAD]"}`}
              >
                <span
                  className={`mb-[14px] inline-block w-fit rounded-full px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] ${variant === "new" ? "bg-[#E8890C] text-white" : variant === "int" ? "bg-[rgba(232,137,12,.15)] text-[#E8890C]" : "bg-[#E6F1FB] text-[#004AAD]"}`}
                >
                  {tag}
                </span>
                <h3 className="mb-2.5 [font-family:var(--font-dm-sans)] text-lg font-black leading-[1.2] text-[#111111]">
                  {title}
                </h3>
                <p className="flex-1 text-[13px] leading-[1.6] text-[#444444]">
                  {desc}
                </p>
                <div
                  className={`mt-[14px] border-t border-[#E2E2E2] pt-[14px] text-[11px] font-semibold uppercase tracking-[.08em] ${level === "Intermediate" ? "text-[#E8890C]" : "text-[#777777]"}`}
                >
                  {level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-white py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-12 max-w-[760px]">
            <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              In My Stack
            </div>
            <h2 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
              What I Use Perplexity For.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              My honest, daily use. Where it fits, what it is good at, and where
              I lean on Comet to do more.
            </p>
          </div>
          <div className="mx-auto grid max-w-[880px] grid-cols-1 gap-5 min-[680px]:grid-cols-2">
            {[
              [
                "Daily Research",
                "Anything I Used To Google.",
                "Pricing checks, statistics, current events, fact-checking. If I want a real answer with the source attached, Perplexity is my default. Faster than Googling, more reliable than guessing.",
              ],
              [
                "Verifying Claude",
                "Sources For My Work.",
                "When Claude gives me a fact or stat, I pop it into Perplexity to verify. The citation makes it easy to check the source is current and credible before I use it in client work.",
              ],
              [
                "Comet Browser",
                "Letting Comet Take Actions.",
                "Comet is my AI browser. Instead of opening tabs and clicking around, I tell Comet what I want and it does the work. Books flights, fills forms, summarises pages, drafts replies. Watching the web become something you can talk to.",
              ],
              [
                "Topic Briefings",
                "Getting Up To Speed.",
                "Before a client call, a meeting or a piece of content, I ask Perplexity for a briefing on the topic. I get a structured summary with sources I can dig into. Saves an hour of reading every time.",
              ],
            ].map(([tag, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#E2E2E2] bg-[#FAFAFA] px-[30px] py-7 transition hover:-translate-y-0.5 hover:border-[#004AAD]"
              >
                <span className="mb-2 block [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[0.12em] text-[#E8890C]">
                  {tag}
                </span>
                <h3 className="mb-2.5 [font-family:var(--font-dm-sans)] text-[18px] font-black leading-[1.25] text-[#111111]">
                  {title}
                </h3>
                <p className="text-sm leading-[1.6] text-[#444444]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-white py-20">
        <div className="mx-auto w-full max-w-[840px] px-8">
          <div className="relative rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-[#FAFAFA] px-12 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,.15)]">
            <span className="pointer-events-none absolute left-7 top-[-12px] [font-family:var(--font-dm-sans)] text-[110px] font-black leading-none text-[#E8890C]">
              &ldquo;
            </span>
            <span className="block [font-family:var(--font-dm-sans)] text-[clamp(20px,2.2vw,26px)] font-black leading-[1.3] tracking-[-.01em] text-[#111111]">
              If you do any work where facts matter, you need Perplexity in your
              stack. The cited sources alone justify the subscription. The Comet
              browser is the next step, an AI that does the work, not just
              answers your questions.
            </span>
            <div className="mt-6 flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em] text-[#E8890C]">
              <span className="h-0.5 w-7 bg-[#E8890C]" />
              Sarah&apos;s Take
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-12 max-w-[760px]">
            <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              Plans &amp; Pricing
            </div>
            <h2 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
              Pick The Right Plan.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              Four tiers to know. Try Free. Start with Pro for daily use.
              Upgrade to Max if you live in deep research. Move to Enterprise
              Pro when you have a team.
            </p>
          </div>
          <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "Free",
                "",
                "0",
                "Forever",
                [
                  "Unlimited basic searches",
                  "Limited Pro searches per day",
                  "Cited sources",
                  "Try before you commit",
                ],
                false,
                "Try Perplexity",
              ],
              [
                "Pro",
                "US$",
                "20",
                "Per Month · (Start Here)",
                [
                  "Unlimited Pro Searches",
                  "All advanced models (GPT, Claude, Gemini)",
                  "Unlimited file uploads",
                  "Spaces & image generation",
                  "$5/mo in API credits",
                ],
                true,
                "Get Pro",
              ],
              [
                "Max",
                "US$",
                "200",
                "Per Month · (Heavy Users)",
                [
                  "Everything in Pro",
                  "Unlimited Research mode",
                  "Comet Assistant for actions",
                  "Priority access to new features",
                  "Upgrade if Pro keeps hitting limits",
                ],
                false,
                "Get Max",
              ],
              [
                "Enterprise Pro",
                "US$",
                "40",
                "Per Seat / Month · (Team Choice)",
                [
                  "Everything in Pro",
                  "Shared Spaces for team research",
                  "Admin controls & SSO",
                  "Centralised billing",
                  "Stronger data privacy by default",
                ],
                false,
                "Get Enterprise",
              ],
            ].map(([name, cur, price, unit, features, pick, ctaText]) => (
              <div
                key={String(name)}
                className={`relative flex h-full flex-col rounded-[18px] border p-8 ${pick ? "border-[#111111] bg-[#111111] text-white" : "border-[#E2E2E2] bg-white"}`}
              >
                {pick ? (
                  <div className="absolute -top-3 left-8 rounded-full bg-[#E8890C] px-[14px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-black uppercase tracking-[.14em] text-white">
                    Sarah&apos;s Pick
                  </div>
                ) : null}
                <div
                  className={`mb-[14px] [font-family:var(--font-dm-sans)] text-2xl font-black ${pick ? "text-white" : "text-[#111111]"}`}
                >
                  {name}
                </div>
                <div className="mb-1 flex items-end gap-1.5">
                  {cur ? (
                    <span
                      className={`[font-family:var(--font-dm-sans)] text-lg font-bold ${pick ? "text-white/60" : "text-[#777777]"}`}
                    >
                      {cur}
                    </span>
                  ) : null}
                  <span
                    className={`[font-family:var(--font-dm-sans)] text-5xl font-black leading-none tracking-[-.02em] ${pick ? "text-white" : "text-[#111111]"}`}
                  >
                    {price}
                  </span>
                </div>
                <div
                  className={`mb-6 text-[13px] ${pick ? "text-white/65" : "text-[#777777]"}`}
                >
                  {unit}
                </div>
                <ul className="mb-7 flex-1">
                  {(features as string[]).map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 border-b py-2.5 text-sm ${pick ? "border-white/15 text-white/90" : "border-[#E2E2E2] text-[#444444]"}`}
                    >
                      <span
                        className={`mt-[3px] inline-flex h-[14px] w-[14px] items-center justify-center rounded-full text-[9px] font-black text-white ${pick ? "bg-[#E8890C]" : "bg-[#004AAD]"}`}
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://perplexity.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold ${pick ? "bg-white text-[#111111]" : "border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"}`}
                >
                  {ctaText as string}
                </a>
              </div>
            ))}
          </div>

          <div className="mx-auto mb-12 mt-12 flex max-w-[980px] flex-wrap items-center justify-between gap-6 rounded-[18px] border border-[#E2E2E2] bg-white px-9 py-7">
            <p className="[font-family:var(--font-dm-sans)] text-[15px] font-bold leading-[1.4] text-[#111111]">
              Ready to try Perplexity? Free plan available, no credit card
              required.
            </p>
            <a
              href="https://perplexity.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#004AAD] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Sign Up Now
            </a>
          </div>

          <div className="mx-auto max-w-[1080px]">
            <div className="mb-9 max-w-[760px]">
              <div className="mb-2.5 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                The Honest Take
              </div>
              <h3 className="[font-family:var(--font-dm-sans)] text-[clamp(22px,2.4vw,28px)] font-black leading-[1.2] text-[#111111]">
                Pros &amp; Cons Of The Paid Plans.
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-[#444444]">
                Start with Pro. It is the right entry point for individuals and
                gives you everything you need for daily search and research.
                Upgrade to Max if you live inside Research mode and want Comet
                Assistant. Move to Enterprise Pro when you have a team that
                needs shared spaces and admin controls.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="relative rounded-2xl border border-[rgba(0,74,173,.15)] bg-[#E6F1FB] p-8">
                <span className="absolute -top-3 left-6 rounded-full bg-[#E8890C] px-[14px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-black uppercase tracking-[.14em] text-white">
                  Sarah&apos;s Pick
                </span>
                <div className="mb-5 border-b border-black/10 pb-3.5 [font-family:var(--font-dm-sans)] text-lg font-black text-[#111111]">
                  Pro · US$20/mo
                </div>
                <div className="mb-3 inline-block rounded-full bg-[rgba(29,158,117,.15)] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#1D9E75]">
                  Pros
                </div>
                <ul className="mb-4 space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                  {[
                    "Unlimited Pro Searches removes all friction",
                    "Access to GPT, Claude & Gemini in one place",
                    "Unlimited file uploads & Spaces",
                    "$5/mo in API credits if you build with it",
                    "The right entry point for daily use",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 leading-[1.55]"
                    >
                      <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1D9E75] text-[10px] font-black text-white">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-3 inline-block rounded-full bg-[#F0F0F0] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#777777]">
                  Cons
                </div>
                <ul className="space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                  {[
                    "Research mode capped per day",
                    "No Comet Assistant for autonomous actions",
                    "Single user only",
                    "Not as deep as Claude for analysis",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 leading-[1.55]"
                    >
                      <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E2E2E2] text-[11px] font-black leading-none text-[#777777]">
                        −
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#E2E2E2] bg-white p-8">
                <div className="mb-5 border-b border-black/10 pb-3.5 [font-family:var(--font-dm-sans)] text-lg font-black text-[#111111]">
                  Max · US$200/mo
                </div>
                <div className="mb-3 inline-block rounded-full bg-[rgba(29,158,117,.15)] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#1D9E75]">
                  Pros
                </div>
                <ul className="mb-4 space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                  {[
                    "Unlimited Research mode",
                    "Comet Assistant for autonomous actions",
                    "Priority access to new features",
                    "Best for daily deep research",
                    "Highest model access available to consumers",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 leading-[1.55]"
                    >
                      <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1D9E75] text-[10px] font-black text-white">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-3 inline-block rounded-full bg-[#F0F0F0] px-2.5 py-1 [font-family:var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[.12em] text-[#777777]">
                  Cons
                </div>
                <ul className="space-y-2.5 text-[13px] leading-[1.55] text-[#444444]">
                  {[
                    "10x the price of Pro",
                    "Overkill if you do not live in Research mode",
                    "Premium tier pricing for individual use",
                    "Most users do not need this much",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 leading-[1.55]"
                    >
                      <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E2E2E2] text-[11px] font-black leading-none text-[#777777]">
                        −
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-white py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#111111] p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_1fr]">
              <div className="relative z-[1]">
                <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#E8890C]">
                  AI Search Visibility
                </div>
                <h2 className="mb-5 [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] text-white">
                  Find Out How Your Company Ranks In AI Search.
                </h2>
                <p className="mb-6 text-base leading-[1.65] text-white/85">
                  People are not just Googling any more. They are asking
                  Perplexity, Claude and ChatGPT for recommendations. The GEO
                  Audit shows you exactly where your business shows up in AI
                  search results, what is missing, and what to do about it.
                </p>
                <ul className="mb-7 space-y-2.5">
                  {[
                    "Scored prompts across major AI engines",
                    "Prioritised opportunities ranked by impact",
                    "Activation plan to lift your visibility",
                    "Diagnostic explained in easy language",
                  ].map((item) => (
                    <li
                      key={item}
                      className="relative pl-[26px] text-sm leading-[1.5] text-white/90"
                    >
                      <span className="absolute left-0 top-[5px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#E8890C] text-[10px] font-black text-white">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://www.aieconomy.ai/product/geo-audit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#004AAD] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#003A8C]"
                >
                  Enquire Now <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="relative z-[1] rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                {[
                  ["Perplexity", "74%"],
                  ["Claude", "68%"],
                  ["ChatGPT", "62%"],
                  ["Gemini", "48%"],
                ].map(([name, width]) => (
                  <div
                    key={name}
                    className="grid grid-cols-[90px_1fr_36px] items-center gap-3.5 border-b border-white/10 py-2.5 last:border-none"
                  >
                    <div className="[font-family:var(--font-dm-sans)] text-[13px] font-bold text-white">
                      {name}
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-[#E8890C] to-[#FFB347]"
                        style={{ width }}
                      />
                    </div>
                    <div className="[font-family:var(--font-dm-sans)] text-right text-sm font-black text-white">
                      {width.replace("%", "")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-10 max-w-[760px]">
            <div className="mb-4 inline-block [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              Keep Going
            </div>
            <h2 className="mb-[14px] [font-family:var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]">
              Take Perplexity Further.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              Manage your full AI stack, see how your business ranks in AI
              search, and grab direct access to me when you need it.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="flex h-full flex-col rounded-[18px] border border-[#111111] bg-[#111111] p-8 text-white">
              <span className="mb-4 inline-block w-fit rounded-full bg-[rgba(232,137,12,.2)] px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] text-[#E8890C]">
                Most Requested
              </span>
              <h3 className="mb-3 [font-family:var(--font-dm-sans)] text-[22px] font-black leading-[1.2]">
                The AI Tool Dashboard.
              </h3>
              <p className="mb-[22px] flex-1 text-sm leading-[1.6] text-white/80">
                Track and manage every AI tool in your stack. Star Perplexity,
                add your own, see what is current. One place for the whole
                stack, lifetime access.
              </p>
              <div className="flex items-center justify-between border-t border-white/15 pt-[18px]">
                <div className="[font-family:var(--font-dm-sans)] text-[22px] font-black">
                  $27{" "}
                  <small className="mt-1 block text-[11px] font-medium uppercase tracking-[.04em] text-white/60">
                    USD · One-Time
                  </small>
                </div>
                <Link
                  href="/toolkit/cluster"
                  className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#111111]"
                >
                  Unlock Now
                </Link>
              </div>
            </div>
            <div className="flex h-full flex-col rounded-[18px] border border-[#E2E2E2] bg-white p-8">
              <span className="mb-4 inline-block w-fit rounded-full bg-[#E6F1FB] px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] text-[#004AAD]">
                AI Search Visibility
              </span>
              <h3 className="mb-3 [font-family:var(--font-dm-sans)] text-[22px] font-black leading-[1.2] text-[#111111]">
                Run A GEO Audit.
              </h3>
              <p className="mb-[22px] flex-1 text-sm leading-[1.6] text-[#444444]">
                Find out how your company shows up in Perplexity, Claude &
                ChatGPT. Scored prompts, prioritised opportunities, activation
                plan. Led by me.
              </p>
              <div className="border-t border-[#E2E2E2] pt-[18px]">
                <div className="mb-3 [font-family:var(--font-dm-sans)] text-[22px] font-black text-[#111111]">
                  Enquire{" "}
                  <small className="mt-1 block text-[11px] font-medium uppercase tracking-[.04em] text-[#777777]">
                    USD · Project Scoped
                  </small>
                </div>
                <Link
                  href="https://www.aieconomy.ai/product/geo-audit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#004AAD] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  I&apos;m Interested <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="flex h-full flex-col rounded-[18px] border border-[#E2E2E2] bg-white p-8">
              <span className="mb-4 inline-block w-fit rounded-full bg-[#E6F1FB] px-[11px] py-[5px] [font-family:var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[.12em] text-[#004AAD]">
                Annual Access
              </span>
              <h3 className="mb-2 [font-family:var(--font-dm-sans)] text-[22px] font-black leading-[1.2] text-[#111111]">
                Ask Sarah.
              </h3>
              <p className="mb-[22px] flex-1 text-sm leading-[1.6] text-[#444444]">
                Direct access to Sarah for AI questions, tool recommendations
                and setup help. The fastest way to get unstuck and keep moving.
              </p>
              <div className="border-t border-[#E2E2E2] pt-[18px]">
                <div className="flex items-center justify-between gap-4">
                  <div className="[font-family:var(--font-dm-sans)] text-[22px] font-black text-[#111111]">
                    $149{" "}
                    <small className="mt-1 block text-[11px] font-medium uppercase tracking-[.04em] text-[#777777]">
                      USD · Per Year
                    </small>
                  </div>
                  <Link
                    href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                    className="inline-flex items-center gap-2 rounded-full bg-[#004AAD] px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    I&apos;m Interested <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] pb-8 pt-[72px] text-white">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
            <div className="xl:col-span-1">
              <Link
                href="/"
                aria-label="AI Economy"
                className="mb-5 block w-40 text-white"
              >
                <BrandLogo />
              </Link>
              <p className="max-w-[320px] text-sm leading-[1.65] text-white/65">
                AI trainer, strategist and consultant. Building AI platforms
                including parently.ai and aieconomy.ai. Cutting through the AI
                chaos so you can focus on what matters.
              </p>
            </div>
            <div>
              <h4 className="mb-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em]">
                Toolkit
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/llm-comparison"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    LLM Comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/toolkit/cluster"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    All Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-tips"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    AI Tips
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em]">
                Learn
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/toolkit/claude-deep-dive"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Claude Deep Dive
                  </Link>
                </li>
                <li>
                  <Link
                    href="/toolkit/chatgpt-deep-dive"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    ChatGPT Deep Dive
                  </Link>
                </li>
                <li>
                  <Link
                    href="/toolkit/perplexity-deep-dive"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Perplexity Deep Dive
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-[18px] [font-family:var(--font-dm-sans)] text-xs font-bold uppercase tracking-[.14em]">
                Company
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Ask Sarah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Privacy &amp; Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-7 text-xs text-white/50">
            <div>© 2026 AI Economy. ABN: 24 602 295 698.</div>
            <div>Melbourne, Australia.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
