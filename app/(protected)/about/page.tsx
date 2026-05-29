"use client";

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

export default function AboutPage() {
  return (
    <div
      className={`${poppins.variable} ${dmSans.variable} bg-white text-[#444444] antialiased`}
    >
      <style jsx>{`
        .font-dm {
          font-family: var(--font-dm-sans), sans-serif;
        }
      `}</style>
      <nav className="fixed left-0 right-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-white/[0.97] backdrop-blur-[12px]">
        <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-8">
          <Link
            href="/dashboard"
            aria-label="AI Economy"
            className="w-[150px] shrink-0 text-[#111111]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-70.40 -827.40 6209.80 954.80"
              preserveAspectRatio="xMidYMid meet"
            >
              <title>AI Economy</title>
              <g fill="currentColor">
                <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" />
                <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
              </g>
            </svg>
          </Link>

          <ul className="absolute left-[57%] hidden -translate-x-1/2 list-none items-center gap-8 lg:flex">
            <li>
              <Link
                href="/llm-comparison"
                className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]"
              >
                LLMs
              </Link>
            </li>
            <li>
              <Link
                href="/toolkit/cluster"
                className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]"
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link
                href="/ai-tips"
                className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]"
              >
                AI Tips
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[14px] font-semibold text-[#004AAD]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/ask-sarah"
                className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]"
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
              aria-label="Menu"
              className="inline-flex cursor-pointer items-center bg-transparent p-2 text-[#111111] lg:hidden"
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

      <section className="relative bg-white pb-24 pt-[140px] [background-image:linear-gradient(#ECECEC_1px,transparent_1px),linear-gradient(90deg,#ECECEC_1px,transparent_1px)] [background-size:40px_40px] max-lg:pb-16 max-lg:pt-[110px]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid items-center gap-[72px] lg:grid-cols-[1.2fr_1fr] max-lg:gap-12">
            <div>
              <div className="font-dm mb-5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                About
              </div>
              <h1 className="font-dm mb-6 text-[clamp(56px,8vw,104px)] font-black leading-[0.95] tracking-[-0.02em] text-[#111111]">
                Sarah <span className="text-[#004AAD]">Balmer.</span>
              </h1>
              <div className="mb-6 flex max-w-[520px] flex-col items-start border-b border-[#E2E2E2] pb-6">
                <span className="font-dm block text-[17px] font-bold leading-[1.45] tracking-[0.02em] text-[#111111]">
                  Founder &amp; CEO, AI Economy. AI Trainer, Strategist &amp;
                  Speaker.
                </span>
                <a
                  href="https://www.linkedin.com/in/SarahBalmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sarah Balmer on LinkedIn"
                  className="mt-[14px] inline-flex w-fit items-center gap-2 rounded-full bg-[#E6F1FB] px-[14px] py-[6px] pl-[10px] text-[12px] font-semibold tracking-[0.02em] text-[#004AAD] transition-all hover:-translate-y-[1px] hover:bg-[#004AAD] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="size-[14px] shrink-0"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
              <p className="mb-9 max-w-[560px] text-[16px] leading-[1.65] text-[#444444]">
                For three years I&apos;ve been deep in AI. Building platforms
                like parently.ai and aieconomy.ai. Helping busy professionals
                cut through the overwhelm. Too many tools. Too much noise. Not
                enough hours. I&apos;m here to give you AI that actually works,
                so you can get on with what matters.
              </p>
              <div className="flex flex-wrap items-center gap-[14px]">
                <Link
                  href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Work With Sarah"
                  className="inline-flex items-center gap-[10px] rounded-[100px] bg-[#004AAD] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-[#003A8C] hover:[&>span]:translate-x-1"
                >
                  Work With Sarah{" "}
                  <span className="inline-block transition-transform">→</span>
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#F0F0F0] shadow-[0_24px_60px_-20px_rgba(0,74,173,.25)] max-lg:mx-auto max-lg:max-w-[360px]">
              <img
                src="/assets/me-chair.png"
                alt="Sarah Balmer portrait"
                className="h-full w-full object-cover"
              />
              <div className="font-dm absolute bottom-[-16px] left-[-16px] rounded-[10px] bg-[#111111] px-5 py-[14px] text-[13px] uppercase tracking-[0.04em] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,.4)]">
                Founder <span className="text-[#E8890C]">·</span> CEO
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-white py-24 max-lg:py-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid items-start gap-20 lg:grid-cols-[320px_1fr] max-lg:gap-8">
            <div>
              <div className="font-dm mb-5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                The Story
              </div>
              <h2 className="font-dm text-[clamp(36px,4.5vw,56px)] font-black leading-[1.08] tracking-[-0.01em] text-[#111111]">
                Why I Built AI Economy.
              </h2>
            </div>

            <div>
              <p className="mb-5 text-[18px] font-medium leading-[1.55] text-[#111111]">
                I spent 25 years building brands, strategies and digital
                marketing campaigns for businesses of every size. Then
                generative AI arrived and changed everything.
              </p>
              <p className="mb-5 text-[16px] leading-[1.7] text-[#444444]">
                I&apos;ve transformed my own day to day with AI and now I help
                clients do the same. Save time. Work smarter. Get ahead. I know
                how busy everyone is. There are too many tools, too much noise,
                and not enough hours in the day to figure it all out.
              </p>
              <p className="mb-5 text-[16px] leading-[1.7] text-[#444444]">
                That is exactly why I built AI Economy. To cut through the chaos
                and give you AI that actually works. Just the tools I use. Just
                the ones I recommend.
              </p>

              <div className="relative my-14 rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-white px-11 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,.15)]">
                <span className="font-dm pointer-events-none absolute left-7 top-[-12px] text-[110px] font-black leading-none text-[#E8890C]">
                  “
                </span>
                <span className="font-dm relative z-10 block text-[clamp(22px,2.4vw,30px)] font-black leading-[1.25] tracking-[-0.01em] text-[#111111]">
                  Every tool has been personally tested. Every recommendation
                  comes from real experience.
                </span>
                <div className="font-dm mt-[22px] flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-[#E8890C]">
                  <span className="inline-block h-[2px] w-7 bg-[#E8890C]" />
                  Sarah&apos;s Promise
                </div>
              </div>

              <p className="text-[16px] leading-[1.7] text-[#444444]">
                If something will change how you work, I&apos;ll show you
                exactly how to set it up. If it&apos;s not worth it, I&apos;ll
                tell you that too. No hype. No affiliate noise. Just what works.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-[88px] text-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="font-dm mb-5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-white/75">
            Track Record
          </div>
          <h2 className="font-dm mb-12 max-w-[640px] text-[clamp(36px,4.5vw,56px)] font-black leading-[1.08] tracking-[-0.01em] text-white">
            Built On Real Experience.
          </h2>
          <div className="grid gap-12 md:grid-cols-3 max-md:gap-8">
            <div className="border-t-2 border-white/15 pt-6">
              <div className="font-dm mb-3 text-[clamp(48px,6vw,72px)] font-black leading-none tracking-[-0.02em] text-white">
                25<span className="text-[#E8890C]">+</span>
              </div>
              <div className="max-w-[220px] text-[15px] leading-[1.5] text-white/75">
                Years in brand, strategy and digital marketing. Founder since
                2014.
              </div>
            </div>
            <div className="border-t-2 border-white/15 pt-6">
              <div className="font-dm mb-3 text-[clamp(48px,6vw,72px)] font-black leading-none tracking-[-0.02em] text-white">
                3<span className="text-[#E8890C]">+</span>
              </div>
              <div className="max-w-[220px] text-[15px] leading-[1.5] text-white/75">
                Years building, training, speaking and consulting in AI.
              </div>
            </div>
            <div className="border-t-2 border-white/15 pt-6">
              <div className="font-dm mb-3 text-[clamp(48px,6vw,72px)] font-black leading-none tracking-[-0.02em] text-white">
                7K<span className="text-[#E8890C]">+</span>
              </div>
              <div className="max-w-[220px] text-[15px] leading-[1.5] text-white/75">
                Professionals in Sarah&apos;s network across property, legal,
                logistics, manufacturing and trades.
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap gap-[14px]">
            <Link
              href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[10px] rounded-[100px] bg-white px-8 py-4 text-[15px] font-semibold text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#E6F1FB] hover:[&>span]:translate-x-1"
            >
              Work With Sarah{" "}
              <span className="inline-block transition-transform">→</span>
            </Link>
            <Link
              href="https://www.aieconomy.ai/product/ai-consultancy"
              target="_blank"
              rel="noopener"
              aria-label="Book Sarah To Speak"
              className="inline-flex items-center  rounded-[100px] border-[1.5px] border-white/40 bg-transparent px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-[#111111]"
            >
              Book Sarah To Speak
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-24 max-lg:py-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-14 max-w-[640px]">
            <div className="font-dm mb-5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              Daily Tools
            </div>
            <h2 className="font-dm mb-4 text-[clamp(36px,4.5vw,56px)] font-black leading-[1.08] tracking-[-0.01em] text-[#111111]">
              My Personal AI Stack.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              Not a day goes by without these three. They form the foundation of
              everything I do.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                rank: "01 · Number One Tool",
                name: "Claude",
                role: "Daily collaboration partner. Strategy, writing, thinking, building. It&apos;s where the work happens.",
                notePrefix: "Also for:",
                note: "design, vibe coding and rapid prototyping.",
                favicon:
                  "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
              },
              {
                rank: "02 · Validation Layer",
                name: "ChatGPT",
                role: "Thinking partner. I cross-check outputs across models for a different perspective and better answers.",
                notePrefix: "Watching:",
                note: "the 2.0 image creation release, coming soon.",
                favicon:
                  "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
              },
              {
                rank: "03 · Live Research",
                name: "Perplexity",
                role: "Real-time web research with real sources. Where every fact-check and live question starts.",
                notePrefix: "Best for:",
                note: "current news, pricing, live citations.",
                favicon:
                  "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
              },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col rounded-2xl border border-[#E2E2E2] bg-white px-8 py-9 transition-all hover:-translate-y-1 hover:border-[#004AAD] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,.12)]"
              >
                <div className="mb-5 flex size-14 items-center justify-center overflow-hidden rounded-xl border border-[#E2E2E2] bg-[#FAFAFA] p-2.5">
                  <img
                    src={tool.favicon}
                    alt={tool.name}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="font-dm mb-4 text-[14px] font-black tracking-[0.08em] text-[#004AAD]">
                  {tool.rank}
                </div>
                <div className="font-dm mb-[10px] text-[28px] font-black text-[#111111]">
                  {tool.name}
                </div>
                <p
                  className="mb-[14px] text-[15px] leading-[1.55] text-[#444444]"
                  dangerouslySetInnerHTML={{ __html: tool.role }}
                />
                <p className="mt-auto border-t border-dashed border-[#E2E2E2] pt-[14px] text-[13px] leading-[1.5] text-[#777777]">
                  <strong className="font-semibold text-[#E8890C]">
                    {tool.notePrefix}
                  </strong>{" "}
                  {tool.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-[#E2E2E2] pt-10">
            <p className="m-0 max-w-[520px] text-[16px] text-[#444444]">
              These three are just the start. The AI Toolkit has the full stack
              of tools I use and recommend across every use case.
            </p>
            <Link
              href="/toolkit/cluster"
              className="inline-flex items-center gap-[10px] rounded-[100px] bg-[#004AAD] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-[#003A8C] hover:[&>span]:translate-x-1"
            >
              Explore The AI Toolkit{" "}
              <span className="inline-block transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 max-lg:py-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-14 max-w-[720px]">
            <div className="font-dm mb-5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              Work With Sarah
            </div>
            <h2 className="font-dm mb-4 text-[clamp(36px,4.5vw,56px)] font-black leading-[1.08] tracking-[-0.01em] text-[#111111]">
              Three Ways To Start.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              The fastest path forward depends on what you need. Know where to
              start with AI based on your data, get visible to AI search, or
              bring Sarah in for strategic consulting.
            </p>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-3 max-md:mx-auto max-md:max-w-[500px] max-md:grid-cols-1 max-md:gap-5">
            <div className="flex flex-col rounded-[20px] border border-[#111111] bg-[#111111] px-8 py-9 text-white transition-all hover:-translate-y-1 hover:border-[#E8890C] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,.2)]">
              <div className="mb-5 inline-block w-fit rounded-full bg-[rgba(232,137,12,.2)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#E8890C]">
                Most Requested
              </div>
              <h3 className="font-dm mb-[14px] text-[24px] font-black leading-[1.2]">
                Priority AI Business Audit
              </h3>
              <p className="mb-6 min-h-[108px] text-[14px] leading-[1.6] text-white/80 max-md:min-h-0">
                Know where to begin with AI, based on your data. Priority AI
                connects to your payroll so you can see the low effort, high
                reward opportunities and prioritise AI that actually works.
              </p>
              <ul className="mb-7 flex flex-1 list-none flex-col p-0">
                {[
                  "Payroll integration for real ROI",
                  "Low effort, high reward actions ranked",
                  "Three-session diagnostic",
                  "Personalised AI roadmap. Led by me.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-[10px] border-b border-white/10 py-[11px] text-[13px] leading-[1.5] text-white/90 last:border-b-0"
                  >
                    <span className="mt-[3px] inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-[#E8890C]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-[10px]"
                      >
                        <polyline
                          points="20 6 9 17 4 12"
                          stroke="white"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="https://priorityai.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-[10px] rounded-[100px] bg-white px-8 py-4 text-[15px] font-semibold text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#E6F1FB] hover:[&>span]:translate-x-1"
              >
                Enquire Now{" "}
                <span className="inline-block transition-transform">→</span>
              </Link>
            </div>

            {[
              {
                tag: "For Visibility",
                title: "GEO Audit.",
                desc: "Find out how visible your business is to AI search engines. A full diagnostic with scored prompts, prioritised opportunities and a clear activation plan.",
                features: [
                  "Scored prompts across major AI engines",
                  "Prioritised opportunities",
                  "Activation plan",
                  "Diagnostic explained in easy language",
                ],
                href: "https://www.aieconomy.ai/product/geo-audit",
                external: true,
                cta: "Run My GEO Audit",
              },
              {
                tag: "For Teams",
                title: "Strategy & Consulting.",
                desc: "Get help with AI in your business. From tool selection and implementation to team training and governance. Tailored to your goals, led by me.",
                features: [
                  "AI strategy for leaders and teams",
                  "Tool selection and implementation",
                  "Team training and governance",
                  "Scoped to your business",
                ],
                href: "https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG",
                cta: "Get In Touch",
              },
            ].map((offer) => (
              <div
                key={offer.title}
                className="flex flex-col rounded-[20px] border border-[#E2E2E2] bg-white px-8 py-9 transition-all hover:-translate-y-1 hover:border-[#004AAD] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,.2)]"
              >
                <div className="mb-5 inline-block w-fit rounded-full bg-[#E6F1FB] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#004AAD]">
                  {offer.tag}
                </div>
                <h3 className="font-dm mb-[14px] text-[24px] font-black leading-[1.2] text-[#111111]">
                  {offer.title}
                </h3>
                <p className="mb-6 min-h-[108px] text-[14px] leading-[1.6] text-[#444444] max-md:min-h-0">
                  {offer.desc}
                </p>
                <ul className="mb-7 flex flex-1 list-none flex-col p-0">
                  {offer.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-[10px] border-b border-[#E2E2E2] py-[11px] text-[13px] leading-[1.5] text-[#444444] last:border-b-0"
                    >
                      <span className="mt-[3px] inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-[#004AAD]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="size-[10px]"
                        >
                          <polyline
                            points="20 6 9 17 4 12"
                            stroke="white"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={offer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-[10px] rounded-[100px] bg-[#004AAD] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-[#003A8C] hover:[&>span]:translate-x-1"
                >
                  {offer.cta}{" "}
                  <span className="inline-block transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#E2E2E2] bg-[#FAFAFA] py-[100px] text-[#111111]">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(#ECECEC_1px,transparent_1px),linear-gradient(90deg,#ECECEC_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-8">
          <div className="max-w-[720px]">
            <div className="font-dm mb-5 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              Let&apos;s Talk
            </div>
            <h2 className="font-dm mb-5 text-[clamp(36px,4.5vw,56px)] font-black leading-[1.08] tracking-[-0.01em] text-[#111111]">
              Not Sure Which Fits?
            </h2>
            <p className="mb-9 text-[17px] leading-[1.6] text-[#444444]">
              Consulting, speaking, training, Ask Sarah, Fresh Stack. There are
              more ways to work together than fit on this page.
            </p>
            <Link
              href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] rounded-[100px] bg-[#004AAD] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-[#003A8C] hover:[&>span]:translate-x-1"
            >
              Learn More{" "}
              <span className="inline-block transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] pb-8 pt-[72px] text-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-14 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Link
                href="/"
                aria-label="AI Economy"
                className="mb-5 block w-[160px] text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-70.40 -827.40 6209.80 954.80"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <title>AI Economy</title>
                  <g fill="currentColor">
                    <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" />
                    <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
                  </g>
                </svg>
              </Link>
              <p className="max-w-[320px] text-[14px] leading-[1.65] text-white/65">
                AI trainer, strategist and consultant. Building AI platforms
                including parently.ai and aieconomy.ai. Cutting through the AI
                chaos so you can focus on what matters.
              </p>
            </div>
            <div>
              <h4 className="font-dm mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white">
                Toolkit
              </h4>
              <ul className="list-none">
                <li className="mb-[10px]">
                  <Link
                    href="/llm-comparison"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    LLM Comparison
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    href="/toolkit/cluster"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    All Tools
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    href="/ai-tips"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    AI Tips
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    href="/dashboard"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-dm mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white">
                Learn
              </h4>
              <ul className="list-none">
                <li className="mb-[10px]">
                  <Link
                    href="/toolkit/claude"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Claude Deep Dive
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    href="/toolkit/chatgpt"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    ChatGPT Deep Dive
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    href="/toolkit/perplexity"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Perplexity Deep Dive
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-dm mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white">
                Company
              </h4>
              <ul className="list-none">
                <li className="mb-[10px]">
                  <Link
                    href="/about"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Ask Sarah
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    href="/privacy"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Privacy &amp; Data
                  </Link>
                </li>
                <li className="mb-[10px]">
                  <Link
                    href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
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
