"use client";

import Link from "next/link";
import { DM_Sans, Poppins } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-h",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-b",
});

type DashboardClientProps = {
  userName: string;
  userEmail: string;
};

export default function DashboardClient({
  userName: _userName,
  userEmail: _userEmail,
}: DashboardClientProps) {
  return (
    <div
      className={`${dmSans.variable} ${poppins.variable} bg-white text-[#444444] antialiased`}
      style={{ fontFamily: "var(--font-b)" }}
    >
      <nav className="fixed left-0 right-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-white/[0.97] backdrop-blur-[12px]">
        <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-8">
          <Link
            href="/dashboard"
            aria-label="AI Economy"
            className="block w-[150px] shrink-0 text-[#111111] no-underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-70.40 -827.40 6209.80 954.80"
              preserveAspectRatio="xMidYMid meet"
              className="block h-auto w-full [shape-rendering:geometricPrecision]"
            >
              <title>AI Economy</title>
              <g fill="currentColor">
                <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" />
                <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
              </g>
            </svg>
          </Link>
          <ul className="absolute left-[57%] hidden -translate-x-1/2 list-none items-center gap-8 lg:flex">
            {[
              { href: "/llm-comparison", label: "LLMs" },
              { href: "/toolkit/cluster", label: "Use Cases" },
              { href: "/ai-tips", label: "AI Tips" },
              { href: "/about", label: "About" },
              { href: "/upsell/ask-sarah-waitlist", label: "Ask Sarah" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    item.label === "About"
                      ? "text-sm font-semibold "
                      : "text-sm font-medium text-[#111111] transition-colors duration-200 hover:text-[#004AAD]"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/in/SarahBalmer"
                target="_blank"
                rel="noopener"
                aria-label="Sarah Balmer on LinkedIn"
                className="ml-3 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-[18px] w-[18px]"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/SarahBalmer"
              target="_blank"
              rel="noopener"
              aria-label="Sarah Balmer on LinkedIn"
              className="mr-2 inline-flex size-[38px] items-center justify-center rounded-full bg-[#004AAD] text-white lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="size-[17px]"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <button
              className="inline-flex cursor-pointer items-center bg-transparent p-2 text-[#111111] lg:hidden"
              aria-label="Menu"
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

      <section
        className="relative bg-white pb-24 pt-[140px] text-center max-md:pb-16 max-md:pt-[110px]"
        style={{
          backgroundImage:
            "linear-gradient(#ECECEC 1px,transparent 1px),linear-gradient(90deg,#ECECEC 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-8">
          <div className="relative z-[1] mx-auto max-w-[860px]">
            <div
              className="mb-7 inline-block rounded-[100px] border border-[#E2E2E2] bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-[#004AAD] shadow-[0_2px_8px_-2px_rgba(0,0,0,.06)]"
              style={{ fontFamily: "var(--font-h)" }}
            >
              AI Economy Toolkit
            </div>
            <h1
              className="mb-6 text-[clamp(48px,7vw,96px)] font-black leading-[.98] tracking-[-.02em] text-[#111111]"
              style={{ fontFamily: "var(--font-h)" }}
            >
              Cut Through The{" "}
              <span className="text-[#004AAD]">AI Overwhelm.</span>
            </h1>
            <p className="mx-auto mb-9 max-w-[640px] text-[18px] leading-[1.65] text-[#444444]">
              I have personally tested hundreds of tools, and this is what I use
              to get ahead with AI. From everyday AI to common use cases, this
              is my honest take on every single one.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-[14px]">
              <Link
                href="/toolkit/cluster"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-[100px] bg-[#004AAD] px-8 py-4 text-[15px] font-semibold text-white transition duration-200 hover:-translate-y-[1px] hover:bg-[#003A8C] hover:[&>span]:translate-x-1"
              >
                View All{" "}
                <span className="inline-block transition-transform">→</span>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#777777]">
              {[
                "Hundreds of tools tested",
                "7 use cases covered",
                "Honest takes, straight answers",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#E8890C]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="start" className="bg-[#FAFAFA] py-24">
        <div className="mx-auto w-full max-w-[1200px] px-8">
          <div className="mb-14 max-w-[720px]">
            <div
              className="mb-5 inline-block text-xs font-bold uppercase tracking-[.14em] text-[#004AAD]"
              style={{ fontFamily: "var(--font-h)" }}
            >
              Large Language Models &amp; Search
            </div>
            <h2
              className="mb-4 text-[clamp(36px,4.5vw,56px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]"
              style={{ fontFamily: "var(--font-h)" }}
            >
              Not A Day Goes By Without These Three.
            </h2>
            <p className="text-[17px] font-normal leading-[1.6] text-[#444444]">
              The engine behind most of what AI can do. Before anything else in
              this stack, you need one of these.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {[
              {
                name: "Claude",
                by: "by Anthropic",
                desc: "My number one tool. Best for long-form writing, deep analysis, nuanced reasoning and coding. Designed to be helpful, harmless and honest.",
                price: "Free plan available. Pro: US$20/month",
                favicon:
                  "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
              },
              {
                name: "ChatGPT",
                by: "by OpenAI",
                desc: "My thinking partner. The most widely used AI assistant. Versatile for writing, research, image generation and custom GPTs.",
                price: "Free plan available. Plus: US$20/month",
                favicon:
                  "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
              },
              {
                name: "Perplexity",
                by: "by Perplexity AI",
                desc: "My live research starting point. AI-powered search engine with cited sources. Not an LLM, a wrapper built on top of them.",
                price: "Free plan available. Pro: US$20/month",
                favicon:
                  "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
              },
            ].map((card) => (
              <div
                key={card.name}
                className="flex flex-col rounded-2xl border border-[#E2E2E2] bg-white p-8 transition duration-200 hover:-translate-y-1 hover:border-[#004AAD] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,.12)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-xl border border-[#E2E2E2] bg-[#FAFAFA] p-2">
                    <img
                      src={card.favicon}
                      alt={card.name}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div
                    className="rounded-[100px] bg-[rgba(232,137,12,.15)] px-3 py-[5px] text-[10px] font-bold uppercase tracking-[.12em] text-[#E8890C]"
                    style={{ fontFamily: "var(--font-h)" }}
                  >
                    Daily
                  </div>
                </div>
                <div
                  className="mb-1 text-[26px] font-black leading-[1.1] text-[#111111]"
                  style={{ fontFamily: "var(--font-h)" }}
                >
                  {card.name}
                </div>
                <div className="mb-[14px] text-xs tracking-[.02em] text-[#777777]">
                  {card.by}
                </div>
                <p className="mb-[18px] flex-1 text-sm leading-[1.6] text-[#444444]">
                  {card.desc}
                </p>
                <div className="border-t border-[#E2E2E2] pt-4 text-xs leading-[1.5] text-[#777777]">
                  {card.price.split(". ")[0]}.{" "}
                  <strong className="font-semibold text-[#111111]">
                    {card.price.split(". ")[1]}
                  </strong>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-[#E2E2E2] pt-9">
            <p className="m-0 max-w-[560px] text-[15px] text-[#444444]">
              These three are just the start. Compare all 6 LLMs side by side,
              or explore what makes each one different.
            </p>
            <Link
              href="/llm-comparison"
              className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[.06em] text-[#004AAD]"
              style={{ fontFamily: "var(--font-h)" }}
            >
              Compare All 6 Models
              <span className="transition duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto w-full max-w-[1200px] px-8">
          <div className="mb-14 max-w-[760px]">
            <div
              className="mb-5 inline-block text-xs font-bold uppercase tracking-[.14em] text-[#004AAD]"
              style={{ fontFamily: "var(--font-h)" }}
            >
              Explore The Toolkit
            </div>
            <h2
              className="mb-4 text-[clamp(36px,4.5vw,56px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]"
              style={{ fontFamily: "var(--font-h)" }}
            >
              7 Use Cases. Hundreds Of Tools. Honest Takes.
            </h2>
            <p className="text-[17px] font-normal leading-[1.6] text-[#444444]">
              Every tool has been personally tested. If it is not worth your
              time, I will tell you.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            <UseCaseCard
              href="/toolkit/cluster?filter=automate"
              count="3 Tools"
              title="Automate & Save Time."
              desc="AI agents that handle multi-step tasks and automate workflows independently."
              tools={["Lindy", "Manus", "Genspark"]}
            />
            <UseCaseCard
              href="/toolkit/cluster?filter=build"
              count="3 Tools"
              title="Build & Launch."
              desc="Turn ideas into working apps and websites without a development team."
              tools={["Claude", "Lovable", "Blink.new"]}
            />
            <UseCaseCard
              href="/toolkit/cluster?filter=create"
              count="4 Tools"
              title="Create Content."
              desc="Write, design and schedule social posts, presentations, visuals and written content at scale."
              tools={["Claude", "Blotato", "Gamma", "Napkin"]}
            />
            <UseCaseCard
              href="/toolkit/cluster?filter=design"
              count="6 Tools"
              title="Design & Presentation."
              desc="Professional design tools for brand assets, UI, presentations and visual content."
              tools={[
                "Figma",
                "Canva",
                "Midjourney",
                "Gamma",
                "Claude",
                "ChatGPT",
              ]}
            />
            <UseCaseCard
              href="/toolkit/cluster?filter=video"
              count="4 Tools"
              title="Video & Media."
              desc="AI avatars, screen recording, clip generation and video content creation."
              tools={["HeyGen", "Loom", "Opus Clip", "Higgsfield"]}
            />
            <UseCaseCard
              href="/toolkit/cluster?filter=audio"
              count="2 Tools"
              title="Audio & Voice."
              desc="Turn your voice into content, create voiceovers and transcribe speech instantly."
              tools={["ElevenLabs", "Wispr Flow"]}
            />
            <UseCaseCard
              href="/toolkit/cluster?filter=productivity"
              count="4 Tools"
              title="Productivity & Business."
              desc="Manage meetings, tasks, CRM, scheduling and team workflows."
              tools={["Read AI", "Calendly", "GoHighLevel", "Asana"]}
              className="min-h-[300px]"
            />

            <Link
              href="/toolkit/cluster"
              className="flex min-h-[300px] flex-col justify-center rounded-2xl border border-[#004AAD] bg-[#004AAD] px-7 py-8 text-white transition duration-200 hover:border-[#003A8C] hover:bg-[#003A8C] hover:shadow-[0_18px_40px_-20px_rgba(0,74,173,.4)]"
            >
              <div className="flex h-full flex-col items-start">
                <div className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-[10px] bg-[rgba(255,255,255,.15)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[22px] w-[22px]"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                </div>
                <h3
                  className="mb-[10px] text-[22px] font-black leading-[1.2]"
                  style={{ fontFamily: "var(--font-h)" }}
                >
                  View All Use Cases.
                </h3>
                <p className="mb-5 flex-1 text-[13px] leading-[1.55] text-[rgba(255,255,255,.85)]">
                  Every tool, every category. Browse the full toolkit side by
                  side.
                </p>
                <div
                  className="w-full border-t border-[rgba(255,255,255,.2)] pt-4 text-xs font-bold uppercase tracking-[.1em]"
                  style={{ fontFamily: "var(--font-h)" }}
                >
                  Explore The Toolkit <span className="inline-block">→</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-[14px]">
            <Link
              href="/myo-ai-stack"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-[100px] bg-[#004AAD] px-8 py-4 text-[15px] font-semibold text-white transition duration-200 hover:-translate-y-[1px] hover:bg-[#003A8C] hover:[&>span]:translate-x-1"
            >
              Create Your Own{" "}
              <span className="inline-block transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-24 text-white">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[1.1fr_1fr] items-center gap-[72px] px-8 max-md:grid-cols-1 max-md:gap-12">
          <div>
            <div
              className="mb-5 inline-block text-xs font-bold uppercase tracking-[.14em] text-[#E8890C]"
              style={{ fontFamily: "var(--font-h)" }}
            >
              About Sarah
            </div>
            <h2
              className="mb-5 text-[clamp(36px,4.5vw,56px)] font-black leading-[1.1] tracking-[-.01em] text-white"
              style={{ fontFamily: "var(--font-h)" }}
            >
              Built By Someone Who Uses AI Every Day.
            </h2>
            <p className="mb-8 text-[17px] leading-[1.65] text-[rgba(255,255,255,.82)]">
              I spent 25 years building brands, strategies and digital marketing
              campaigns. Then generative AI arrived and changed everything. This
              toolkit is not a tech blog. It is a practical guide built by
              someone who uses these tools to run real businesses.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-[100px] bg-white px-8 py-4 text-[15px] font-semibold text-[#111111] transition duration-200 hover:-translate-y-[1px] hover:bg-[#E6F1FB] hover:[&>span]:translate-x-1"
            >
              About Sarah{" "}
              <span className="inline-block transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "100's", label: "AI Tools Tested" },
              { num: "7", label: "AI Use Cases" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border-t-2 border-[rgba(255,255,255,.15)] pt-5 text-center"
              >
                <div
                  className="mb-2 text-[clamp(36px,4vw,52px)] font-black leading-none tracking-[-.02em] text-white"
                  style={{ fontFamily: "var(--font-h)" }}
                >
                  {stat.num.includes("+") ? (
                    <>
                      25<span className="text-[#E8890C]">+</span>
                    </>
                  ) : stat.num.includes("'") ? (
                    <>
                      100<span className="text-[#E8890C]">'s</span>
                    </>
                  ) : (
                    stat.num
                  )}
                </div>
                <div className="text-xs leading-[1.4] text-[rgba(255,255,255,.65)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto w-full max-w-[1200px] px-8">
          <div className="mx-auto max-w-[820px]">
            <div className="relative rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-white px-12 pb-10 pt-14 shadow-[0_20px_40px_-28px_rgba(0,0,0,.15)]">
              <span
                className="pointer-events-none absolute left-7 top-[-12px] text-[110px] font-black leading-none text-[#E8890C]"
                style={{ fontFamily: "var(--font-h)" }}
              >
                {"\u201C"}
              </span>
              <span
                className="block text-[clamp(22px,2.4vw,30px)] font-black leading-[1.25] tracking-[-.01em] text-[#111111]"
                style={{ fontFamily: "var(--font-h)" }}
              >
                Every tool has been personally tested. Every recommendation
                comes from real experience.
              </span>
              <div
                className="mt-[22px] flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] text-xs font-bold uppercase tracking-[.14em] text-[#E8890C]"
                style={{ fontFamily: "var(--font-h)" }}
              >
                <span className="h-[2px] w-7 bg-[#E8890C]" />
                Sarah&apos;s Promise
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-t border-[#E2E2E2] bg-[#FAFAFA] py-[100px]"
        style={{
          backgroundImage:
            "linear-gradient(#ECECEC 1px,transparent 1px),linear-gradient(90deg,#ECECEC 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="relative z-[1] mx-auto w-full max-w-[1200px] px-8">
          <div className="mx-auto max-w-[720px] text-center">
            <div
              className="mb-5 inline-block text-xs font-bold uppercase tracking-[.14em] text-[#004AAD]"
              style={{ fontFamily: "var(--font-h)" }}
            >
              Your Stack, Your Way
            </div>
            <h2
              className="mb-5 text-[clamp(36px,4.5vw,56px)] font-black leading-[1.1] tracking-[-.01em] text-[#111111]"
              style={{ fontFamily: "var(--font-h)" }}
            >
              Create Your Own AI Tool Dashboard.
            </h2>
            <p className="mb-9 text-[17px] leading-[1.6] text-[#444444]">
              Track and manage the tools you choose to use. Star your
              favourites. Add in more. One place to manage it all.
            </p>
            <Link
              href="/myo-ai-stack"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-[100px] bg-[#004AAD] px-8 py-4 text-[15px] font-semibold text-white transition duration-200 hover:-translate-y-[1px] hover:bg-[#003A8C] hover:[&>span]:translate-x-1"
            >
              Create Your Own{" "}
              <span className="inline-block transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] px-0 pb-8 pt-[72px] text-white">
        <div className="mx-auto w-full max-w-[1200px] px-8">
          <div className="mb-14 grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 max-md:grid-cols-2 max-md:gap-8">
            <div className="max-md:col-span-2">
              <Link
                href="/"
                aria-label="AI Economy"
                className="mb-5 block w-40 text-white no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-70.40 -827.40 6209.80 954.80"
                  preserveAspectRatio="xMidYMid meet"
                  className="block h-auto w-full"
                >
                  <title>AI Economy</title>
                  <g fill="currentColor">
                    <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" />
                    <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
                  </g>
                </svg>
              </Link>
              <p className="max-w-[320px] text-sm leading-[1.65] text-[rgba(255,255,255,.65)]">
                AI trainer, strategist and consultant. Building AI platforms
                including parently.ai and aieconomy.ai. Cutting through the AI
                chaos so you can focus on what matters.
              </p>
            </div>

            <FooterCol
              title="Toolkit"
              links={[
                { href: "/llm-comparison", label: "LLM Comparison" },
                { href: "/toolkit/cluster", label: "All Tools" },
                { href: "/ai-tips", label: "AI Tips" },
                { href: "/dashboard", label: "Dashboard" },
              ]}
            />
            <FooterCol
              title="Learn"
              links={[
                { href: "/toolkit/claude", label: "Claude Deep Dive" },
                { href: "/toolkit/chatgpt", label: "ChatGPT Deep Dive" },
                { href: "/toolkit/perplexity", label: "Perplexity Deep Dive" },
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                { href: "/about", label: "About" },
                {
                  href: "https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma",
                  label: "Ask Sarah",
                },
                { href: "/privacy", label: "Privacy & Data" },
                {
                  href: "https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG",
                  label: "Contact",
                },
              ]}
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(255,255,255,.12)] pt-7 text-xs text-[rgba(255,255,255,.5)]">
            <div>© 2026 AI Economy. ABN: 24 602 295 698.</div>
            <div>Melbourne, Australia.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

type UseCaseCardProps = {
  href: string;
  count: string;
  title: string;
  desc: string;
  tools: string[];
  className?: string;
};

function UseCaseCard({
  href,
  count,
  title,
  desc,
  tools,
  className,
}: UseCaseCardProps) {
  return (
    <Link
      href={href}
      className={`flex flex-col rounded-2xl border border-[#E2E2E2] bg-white p-7 transition duration-200 hover:-translate-y-[3px] hover:border-[#004AAD] hover:shadow-[0_18px_40px_-20px_rgba(0,74,173,.15)] ${className ?? ""}`}
    >
      <div className="mb-[14px] flex items-center justify-between">
        <span
          className="rounded-[100px] bg-[rgba(232,137,12,.12)] px-[10px] py-1 text-[11px] font-bold uppercase tracking-[.1em] text-[#E8890C]"
          style={{ fontFamily: "var(--font-h)" }}
        >
          {count}
        </span>
      </div>
      <h3
        className="mb-[10px] text-[22px] font-black leading-[1.2] text-[#111111]"
        style={{ fontFamily: "var(--font-h)" }}
      >
        {title}
      </h3>
      <p className="mb-[18px] flex-1 text-[13px] leading-[1.55] text-[#444444]">
        {desc}
      </p>
      <div className="flex flex-wrap gap-1.5 border-t border-[#E2E2E2] pt-4">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-[100px] border border-[#E2E2E2] bg-[#FAFAFA] px-[10px] py-1 text-[11px] font-medium text-[#444444]"
          >
            {tool}
          </span>
        ))}
      </div>
    </Link>
  );
}

type FooterColProps = {
  title: string;
  links: { href: string; label: string }[];
};

function FooterCol({ title, links }: FooterColProps) {
  return (
    <div>
      <h4
        className="mb-[18px] text-xs font-bold uppercase tracking-[.14em] text-white"
        style={{ fontFamily: "var(--font-h)" }}
      >
        {title}
      </h4>
      <ul className="list-none">
        {links.map((item) => (
          <li key={item.href} className="mb-[10px]">
            <Link
              href={item.href}
              className="text-sm text-[rgba(255,255,255,.7)] transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
