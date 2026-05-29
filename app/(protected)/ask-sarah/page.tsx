"use client";

import type { CSSProperties } from "react";

export default function AskSarahPage() {
  const avatarStyle: CSSProperties = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23999'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E\")",
  };

  return (
    <>
      <div className="ask-sarah-page h-full overflow-hidden bg-[#FFFFFF] text-[15px] leading-[1.65] text-[#444444] antialiased">
        <nav className="fixed inset-x-0 top-0 z-[200] h-[64px] border-b border-[#E2E2E2] bg-[rgba(255,255,255,.97)] backdrop-blur-[12px]">
          <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-8">
            <a
              href="/dashboard"
              className="block w-[150px] shrink-0 text-[#111111]"
              aria-label="AI Economy"
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
            </a>

            <ul className="site-nav-links hidden list-none items-center gap-8 [@media(min-width:861px)]:flex">
              <li>
                <a
                  href="/llm-comparison"
                  className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]"
                >
                  LLMs
                </a>
              </li>
              <li>
                <a
                  href="/toolkit/cluster"
                  className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]"
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  href="/ai-tips"
                  className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]"
                >
                  AI Tips
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/ask-sarah"
                  className="text-[14px] font-semibold text-[#004AAD]"
                >
                  Ask Sarah
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/SarahBalmer"
                  target="_blank"
                  rel="noopener"
                  className="ml-3 inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
                  aria-label="Sarah Balmer on LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-[17px] w-[17px]"
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
                className="site-nav-mobile-social inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#004AAD] text-[#FFFFFF] [@media(min-width:861px)]:hidden"
                aria-label="Sarah Balmer on LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-[17px] w-[17px]"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <button
                className="inline-flex items-center p-2 text-[#111111] [@media(min-width:861px)]:hidden"
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

        <div className="mt-[64px] grid h-[calc(100vh-64px)] w-full grid-cols-[280px_1fr] bg-[#FAFAFA] [@media(max-width:860px)]:grid-cols-1">
          <aside className="flex flex-col overflow-hidden border-r border-[#E2E2E2] bg-[#FFFFFF] [@media(max-width:860px)]:hidden">
            <div className="flex items-center justify-between gap-2 border-b border-[#F0F0F0] px-4 pb-[14px] pt-[18px]">
              <div
                className="pl-[6px] text-[11px] font-bold uppercase tracking-[0.14em] text-[#777777]"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Chats
              </div>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#5A5A5A] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#111111]"
                aria-label="Close sidebar"
                title="Close sidebar"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              </button>
            </div>

            <button className="mx-3 my-[14px] flex w-[calc(100%-24px)] items-center justify-center gap-2 rounded-[100px] bg-[#004AAD] px-4 py-[11px] text-[13.5px] font-semibold text-[#FFFFFF] shadow-[0_4px_12px_-4px_rgba(0,74,173,.3)] transition-[background,transform] duration-150 hover:-translate-y-[1px] hover:bg-[#003A8C]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[14px] w-[14px] shrink-0"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New Chat
            </button>

            <div className="sidebar-section flex-1 overflow-y-auto px-3">
              <div
                className="px-[6px] pb-2 pt-[14px] text-[10px] font-bold uppercase tracking-[0.14em] text-[#777777]"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Today
              </div>
              <ul className="flex list-none flex-col gap-px">
                <li className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg bg-[#E6F1FB] px-3 py-[9px] text-[13px] font-semibold leading-[1.3] text-[#004AAD]">
                  Best AI for live web research
                </li>
                <li className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-[9px] text-[13px] leading-[1.3] text-[#444444] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#111111]">
                  Setting up brand voice in Claude
                </li>
                <li className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-[9px] text-[13px] leading-[1.3] text-[#444444] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#111111]">
                  ChatGPT vs Claude for long docs
                </li>
              </ul>

              <div
                className="px-[6px] pb-2 pt-[14px] text-[10px] font-bold uppercase tracking-[0.14em] text-[#777777]"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Yesterday
              </div>
              <ul className="flex list-none flex-col gap-px">
                <li className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-[9px] text-[13px] leading-[1.3] text-[#444444] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#111111]">
                  Which AI for podcast editing
                </li>
                <li className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-[9px] text-[13px] leading-[1.3] text-[#444444] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#111111]">
                  Perplexity Pro worth it?
                </li>
                <li className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-[9px] text-[13px] leading-[1.3] text-[#444444] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#111111]">
                  Privacy: what not to put in
                </li>
              </ul>

              <div
                className="px-[6px] pb-2 pt-[14px] text-[10px] font-bold uppercase tracking-[0.14em] text-[#777777]"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Previous 7 days
              </div>
              <ul className="flex list-none flex-col gap-px">
                <li className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-[9px] text-[13px] leading-[1.3] text-[#444444] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#111111]">
                  Lindy vs Manus for automation
                </li>
                <li className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-[9px] text-[13px] leading-[1.3] text-[#444444] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#111111]">
                  HeyGen avatar quality
                </li>
                <li className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-[9px] text-[13px] leading-[1.3] text-[#444444] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#111111]">
                  Switching from ChatGPT to Claude
                </li>
                <li className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-[9px] text-[13px] leading-[1.3] text-[#444444] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#111111]">
                  Best free tier for testing
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-[10px] border-t border-[#F0F0F0] p-3">
              <div className="flex flex-1 cursor-pointer items-center gap-[10px] rounded-lg px-2 py-[6px] transition-colors duration-150 hover:bg-[#FAFAFA]">
                <div
                  className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#E6F1FB] text-[11px] font-bold text-[#004AAD]"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  EM
                </div>
                <div>
                  <div className="leading-[1.2] text-[13px] font-semibold text-[#111111]">
                    Emma M.
                  </div>
                  <div className="text-[11px] text-[#777777]">
                    Annual member
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="main relative flex flex-col overflow-hidden bg-[#FAFAFA]">
            <header className="relative z-[5] flex h-[60px] shrink-0 items-center justify-between border-b border-[#E2E2E2] bg-[rgba(250,250,250,.85)] px-7 backdrop-blur-[8px]">
              <div className="flex items-center gap-3">
                <div
                  className="h-[34px] w-[34px] shrink-0 rounded-full bg-[#C8C8C8] bg-cover bg-center shadow-[0_2px_6px_-2px_rgba(220,38,38,.25)]"
                  style={avatarStyle}
                />
                <div className="flex flex-col gap-[2px]">
                  <div
                    className="leading-[1.1] text-[14px] font-black tracking-[-0.01em] text-[#111111]"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Ask Sarah
                  </div>
                  <div className="topbar-status inline-flex items-center gap-[6px] leading-none text-[11px] font-medium tracking-[.04em] text-[#1D9E75]">
                    Online · Ready To Help
                  </div>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <button
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#5A5A5A] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#004AAD]"
                  title="Share"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[14px] w-[14px]"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </button>
                <button
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#5A5A5A] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#004AAD]"
                  title="More"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[14px] w-[14px]"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </button>
              </div>
            </header>

            <div className="convo-scroll relative z-[1] flex-1 overflow-y-auto scroll-smooth">
              <div className="mx-auto max-w-[780px] px-8 pb-[200px] pt-8 [@media(max-width:860px)]:px-4 [@media(max-width:860px)]:pb-[200px] [@media(max-width:860px)]:pt-6">
                <div className="mb-6 flex justify-end">
                  <div className="max-w-[65%] rounded-[18px_18px_4px_18px] bg-[#004AAD] px-[18px] py-[13px] text-[14.5px] font-medium leading-[1.55] text-[#FFFFFF] shadow-[0_4px_14px_-6px_rgba(0,74,173,.35),0_2px_4px_-2px_rgba(0,74,173,.2)]">
                    What is the best AI for the most up to date information on
                    the internet?
                  </div>
                </div>

                <div className="mb-8 flex items-start gap-[14px] [@media(max-width:860px)]:gap-[10px]">
                  <div
                    className="mt-[2px] h-9 w-9 shrink-0 rounded-full bg-[#C8C8C8] bg-cover bg-center shadow-[0_2px_6px_-2px_rgba(220,38,38,.3)] [@media(max-width:860px)]:h-8 [@media(max-width:860px)]:w-8"
                    style={avatarStyle}
                  />
                  <div className="group min-w-0 flex-1 rounded-2xl border border-[#E2E2E2] bg-[#FFFFFF] px-[22px] py-5 shadow-[0_8px_24px_-16px_rgba(0,0,0,.12),0_2px_6px_-2px_rgba(0,0,0,.04)]">
                    <div className="mb-[10px] flex items-center gap-2 border-b border-[#F0F0F0] pb-[10px]">
                      <div
                        className="text-[13.5px] font-black tracking-[-.005em] text-[#111111]"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        Sarah
                      </div>
                      <span
                        className="rounded-[100px] bg-[#E6F1FB] px-2 py-[2px] text-[9.5px] font-bold uppercase tracking-[.1em] text-[#004AAD]"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        Ask Sarah
                      </span>
                    </div>
                    <div className="sarah-content text-[14.5px] leading-[1.7] text-[#444444]">
                      <p className="mb-3">
                        <strong className="font-bold text-[#111111]">
                          Perplexity, hands down.
                        </strong>{" "}
                        It searches the live web and cites every source, which
                        is exactly what you want when the answer needs to be
                        current and trustworthy.
                      </p>
                      <p className="mb-3">Here is how I use it day to day:</p>
                      <ul className="mb-3 list-none p-0">
                        <li className="relative py-[5px] pl-5 text-[14px]">
                          Free tier is fine for everyday lookups, news scans,
                          and quick fact-checks
                        </li>
                        <li className="relative py-[5px] pl-5 text-[14px]">
                          Pro tier unlocks the deeper research workflow with
                          multi-step searches and document analysis
                        </li>
                        <li className="relative py-[5px] pl-5 text-[14px]">
                          I use the Spaces feature to keep ongoing research
                          threads organised by client or topic
                        </li>
                      </ul>
                      <div className="my-3 rounded-lg border border-[#E2E2E2] border-l-[3px] border-l-[#E8890C] bg-[#FAFAFA] px-4 py-3 text-[13.5px]">
                        <strong
                          className="mb-1 block text-[11px] uppercase tracking-[.1em] text-[#E8890C]"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        >
                          One Watch-Out
                        </strong>
                        Perplexity is brilliant for current information, but for
                        long-form thinking, writing, or strategy work, you still
                        want Claude. Use the right tool for the job.
                      </div>
                      <p>
                        Want me to walk you through setting up a Perplexity
                        Space for ongoing research?
                      </p>
                    </div>
                    <div className="mt-[14px] flex items-center gap-[2px] border-t border-[#F0F0F0] pt-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <button
                        className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-md text-[#777777] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#004AAD]"
                        title="Copy"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-[14px] w-[14px]"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      </button>
                      <button
                        className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-md text-[#777777] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#004AAD]"
                        title="Regenerate"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-[14px] w-[14px]"
                        >
                          <polyline points="23 4 23 10 17 10" />
                          <polyline points="1 20 1 14 7 14" />
                          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                        </svg>
                      </button>
                      <span className="mx-[6px] h-[14px] w-px bg-[#E2E2E2]" />
                      <button
                        className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-md text-[#777777] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#004AAD]"
                        title="Helpful"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-[14px] w-[14px]"
                        >
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                        </svg>
                      </button>
                      <button
                        className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-md text-[#777777] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#004AAD]"
                        title="Not helpful"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-[14px] w-[14px]"
                        >
                          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-6 flex justify-end">
                  <div className="max-w-[65%] rounded-[18px_18px_4px_18px] bg-[#004AAD] px-[18px] py-[13px] text-[14.5px] font-medium leading-[1.55] text-[#FFFFFF] shadow-[0_4px_14px_-6px_rgba(0,74,173,.35),0_2px_4px_-2px_rgba(0,74,173,.2)]">
                    How do I get my brand voice into Claude so it actually
                    sounds like me?
                  </div>
                </div>

                <div className="mb-8 flex items-start gap-[14px] [@media(max-width:860px)]:gap-[10px]">
                  <div
                    className="mt-[2px] h-9 w-9 shrink-0 rounded-full bg-[#C8C8C8] bg-cover bg-center shadow-[0_2px_6px_-2px_rgba(220,38,38,.3)] [@media(max-width:860px)]:h-8 [@media(max-width:860px)]:w-8"
                    style={avatarStyle}
                  />
                  <div className="group min-w-0 flex-1 rounded-2xl border border-[#E2E2E2] bg-[#FFFFFF] px-[22px] py-5 shadow-[0_8px_24px_-16px_rgba(0,0,0,.12),0_2px_6px_-2px_rgba(0,0,0,.04)]">
                    <div className="mb-[10px] flex items-center gap-2 border-b border-[#F0F0F0] pb-[10px]">
                      <div
                        className="text-[13.5px] font-black tracking-[-.005em] text-[#111111]"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        Sarah
                      </div>
                      <span
                        className="rounded-[100px] bg-[#E6F1FB] px-2 py-[2px] text-[9.5px] font-bold uppercase tracking-[.1em] text-[#004AAD]"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        Ask Sarah
                      </span>
                    </div>
                    <div className="sarah-content text-[14.5px] leading-[1.7] text-[#444444]">
                      <p className="mb-3">
                        Great question. The difference between AI writing that
                        sounds robotic and AI writing that sounds like you comes
                        down to{" "}
                        <strong className="font-bold text-[#111111]">
                          feeding it real examples, not adjectives
                        </strong>
                        .
                      </p>
                      <p className="mb-3">
                        Skip the prompts that say "write in a warm,
                        professional, friendly tone." That gets you generic AI
                        writing every time. Instead:
                      </p>
                      <ul className="mb-3 list-none p-0">
                        <li className="relative py-[5px] pl-5 text-[14px]">
                          Take three to five pieces you have written that sound
                          most like you
                        </li>
                        <li className="relative py-[5px] pl-5 text-[14px]">
                          Paste them into a Claude Project as reference material
                        </li>
                        <li className="relative py-[5px] pl-5 text-[14px]">
                          Tell Claude:{" "}
                          <em className="italic text-[#5A5A5A]">
                            "Match the tone, sentence length, and rhythm of the
                            reference samples."
                          </em>
                        </li>
                        <li className="relative py-[5px] pl-5 text-[14px]">
                          Then write inside that project. Every output starts
                          from your voice, not a blank slate
                        </li>
                      </ul>
                      <div className="my-3 rounded-lg border border-[#E2E2E2] border-l-[3px] border-l-[#E8890C] bg-[#FAFAFA] px-4 py-3 text-[13.5px]">
                        <strong
                          className="mb-1 block text-[11px] uppercase tracking-[.1em] text-[#E8890C]"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        >
                          The Real Trick
                        </strong>
                        Edit Claude&apos;s first three outputs aggressively and
                        paste your edits back in as new examples. After about a
                        week, the project reads you back to yourself.
                      </div>
                    </div>
                    <div className="mt-[14px] flex items-center gap-[2px] border-t border-[#F0F0F0] pt-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <button
                        className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-md text-[#777777] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#004AAD]"
                        title="Copy"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-[14px] w-[14px]"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      </button>
                      <button
                        className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-md text-[#777777] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#004AAD]"
                        title="Regenerate"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-[14px] w-[14px]"
                        >
                          <polyline points="23 4 23 10 17 10" />
                          <polyline points="1 20 1 14 7 14" />
                          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                        </svg>
                      </button>
                      <span className="mx-[6px] h-[14px] w-px bg-[#E2E2E2]" />
                      <button
                        className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-md text-[#777777] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#004AAD]"
                        title="Helpful"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-[14px] w-[14px]"
                        >
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                        </svg>
                      </button>
                      <button
                        className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-md text-[#777777] transition-colors duration-150 hover:bg-[#FAFAFA] hover:text-[#004AAD]"
                        title="Not helpful"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-[14px] w-[14px]"
                        >
                          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-6 flex justify-end">
                  <div className="max-w-[65%] rounded-[18px_18px_4px_18px] bg-[#004AAD] px-[18px] py-[13px] text-[14.5px] font-medium leading-[1.55] text-[#FFFFFF] shadow-[0_4px_14px_-6px_rgba(0,74,173,.35),0_2px_4px_-2px_rgba(0,74,173,.2)]">
                    Yes please, walk me through setting up a Claude Project
                  </div>
                </div>

                <div className="mb-8 flex items-start gap-[14px] [@media(max-width:860px)]:gap-[10px]">
                  <div
                    className="mt-[2px] h-9 w-9 shrink-0 rounded-full bg-[#C8C8C8] bg-cover bg-center shadow-[0_2px_6px_-2px_rgba(220,38,38,.3)] [@media(max-width:860px)]:h-8 [@media(max-width:860px)]:w-8"
                    style={avatarStyle}
                  />
                  <div className="min-w-0 flex-1 rounded-2xl border border-[#E2E2E2] bg-[#FFFFFF] px-[22px] py-5 shadow-[0_8px_24px_-16px_rgba(0,0,0,.12),0_2px_6px_-2px_rgba(0,0,0,.04)]">
                    <div className="mb-[10px] flex items-center gap-2 border-b border-[#F0F0F0] pb-[10px]">
                      <div
                        className="text-[13.5px] font-black tracking-[-.005em] text-[#111111]"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        Sarah
                      </div>
                      <span
                        className="rounded-[100px] bg-[#E6F1FB] px-2 py-[2px] text-[9.5px] font-bold uppercase tracking-[.1em] text-[#004AAD]"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        Ask Sarah
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-[5px] py-[6px]">
                      <span className="h-[7px] w-[7px] animate-[typing_1.4s_infinite] rounded-full bg-[#C8C8C8]" />
                      <span className="h-[7px] w-[7px] animate-[typing_1.4s_infinite] rounded-full bg-[#C8C8C8] [animation-delay:.18s]" />
                      <span className="h-[7px] w-[7px] animate-[typing_1.4s_infinite] rounded-full bg-[#C8C8C8] [animation-delay:.36s]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-[linear-gradient(180deg,rgba(250,250,250,0)_0%,#FAFAFA_30%)] px-8 pb-[22px] pt-[18px] [@media(max-width:860px)]:px-4 [@media(max-width:860px)]:pb-[18px] [@media(max-width:860px)]:pt-[14px]">
              <div className="pointer-events-auto mx-auto max-w-[780px]">
                <div className="mb-[14px] flex flex-wrap justify-center gap-2">
                  <button className="whitespace-nowrap rounded-[100px] border border-[#E2E2E2] bg-[#FFFFFF] px-[14px] py-2 text-[12.5px] font-medium text-[#444444] shadow-[0_2px_6px_-2px_rgba(0,0,0,.05)] transition-all duration-150 hover:-translate-y-[1px] hover:border-[#004AAD] hover:text-[#004AAD]">
                    Which subscription tier should I get?
                  </button>
                  <button className="whitespace-nowrap rounded-[100px] border border-[#E2E2E2] bg-[#FFFFFF] px-[14px] py-2 text-[12.5px] font-medium text-[#444444] shadow-[0_2px_6px_-2px_rgba(0,0,0,.05)] transition-all duration-150 hover:-translate-y-[1px] hover:border-[#004AAD] hover:text-[#004AAD]">
                    Best AI for video editing?
                  </button>
                  <button className="whitespace-nowrap rounded-[100px] border border-[#E2E2E2] bg-[#FFFFFF] px-[14px] py-2 text-[12.5px] font-medium text-[#444444] shadow-[0_2px_6px_-2px_rgba(0,0,0,.05)] transition-all duration-150 hover:-translate-y-[1px] hover:border-[#004AAD] hover:text-[#004AAD]">
                    How do I keep my data private?
                  </button>
                </div>

                <div className="flex items-end gap-[10px] rounded-[18px] border border-[#E2E2E2] bg-[#FFFFFF] px-[18px] pb-[10px] pt-[10px] shadow-[0_12px_32px_-16px_rgba(0,0,0,.15),0_2px_6px_-2px_rgba(0,0,0,.04)] focus-within:border-[#004AAD] focus-within:shadow-[0_12px_32px_-16px_rgba(0,74,173,.25),0_0_0_3px_rgba(0,74,173,.08)]">
                  <textarea
                    rows={1}
                    className="min-h-[24px] max-h-[200px] flex-1 resize-none bg-transparent py-[10px] text-[14.5px] leading-[1.5] text-[#111111] placeholder:text-[#777777] outline-none"
                    placeholder="Ask Sarah anything about AI tools, subscriptions or setup..."
                  />
                  <div className="flex items-center gap-[2px]">
                    <button
                      className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full text-[#5A5A5A] transition-colors duration-150 hover:bg-[#E6F1FB] hover:text-[#004AAD]"
                      title="Voice input"
                      aria-label="Voice input"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="23" />
                        <line x1="8" y1="23" x2="16" y2="23" />
                      </svg>
                    </button>
                    <button
                      className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#004AAD] text-[#FFFFFF] transition-[background,transform] duration-150 hover:-translate-y-[1px] hover:bg-[#003A8C]"
                      title="Send"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <line x1="12" y1="19" x2="12" y2="5" />
                        <polyline points="5 12 12 5 19 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-[10px] text-center text-[11.5px] tracking-[.01em] text-[#777777]">
                  Trained only on Sarah&apos;s content.{" "}
                  <strong className="font-semibold text-[#5A5A5A]">
                    Not a general-purpose chatbot.
                  </strong>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700;900&family=Poppins:wght@300;400;500;600;700&display=swap");

        .ask-sarah-page,
        .ask-sarah-page * {
          font-family: "Poppins", sans-serif;
        }

        .main::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(#ececec 1px, transparent 1px),
            linear-gradient(90deg, #ececec 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          opacity: 0.5;
          z-index: 0;
        }

        .topbar-status::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #1d9e75;
          animation: pulse 2s ease-in-out infinite;
        }

        .sarah-content ul li::before {
          content: "";
          position: absolute;
          left: 4px;
          top: 13px;
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: #e8890c;
        }

        .convo-scroll::-webkit-scrollbar,
        .sidebar-section::-webkit-scrollbar {
          width: 8px;
        }

        .convo-scroll::-webkit-scrollbar-thumb,
        .sidebar-section::-webkit-scrollbar-thumb {
          background: #e2e2e2;
          border-radius: 4px;
        }

        .convo-scroll::-webkit-scrollbar-thumb:hover,
        .sidebar-section::-webkit-scrollbar-thumb:hover {
          background: #c8c8c8;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          30% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }
      `}</style>
    </>
  );
}
