import Link from "next/link";

interface LegalSection {
  num: string;
  title: string;
  content?: string | null;
  subsections?: { title: string; content: string }[];
}

interface LegalPageShellProps {
  title: string;
  subtitle: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalPageShell({ title, subtitle, intro, sections }: LegalPageShellProps) {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* ── NAV ── */}
      <nav className="fixed inset-x-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-white/95 backdrop-blur-[12px]">
        <div className="relative mx-auto flex h-full w-full max-w-[1280px] items-center px-4">
          <Link
              href="/dashboard"
            className="block w-[150px] shrink-0 text-[#111111]"
            aria-label="AI Economy"
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

          <ul className="hidden list-none items-center gap-8 min-[861px]:absolute min-[861px]:left-1/2 min-[861px]:flex min-[861px]:-translate-x-1/3">
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
                className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/upsell/ask-sarah-waitlist"
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
                className="group ml-3 inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
                aria-label="Sarah Balmer on LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-[18px] w-[18px] text-[#111111] transition-colors group-hover:text-white"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </li>
          </ul>

          <div className="ml-auto flex items-center gap-2 min-[861px]:hidden">
            <a
              href="https://www.linkedin.com/in/SarahBalmer"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#004AAD] text-white"
              aria-label="Sarah Balmer on LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-[18px] w-[18px] text-[#111111]"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <button
              type="button"
              className="inline-flex items-center p-2 text-[#111111]"
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

      {/* ── HEADER ── */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 border-b border-gray-100 pt-24 pb-14 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-semibold text-blue-600 uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-[2.2rem] font-extrabold text-gray-900 tracking-tight mb-3">{title}</h1>
          <p className="text-gray-400 text-[14px]">{subtitle}</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Intro callout */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-10 text-[14px] text-blue-700 leading-relaxed">
            {intro}
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.num} className="mb-10 pb-10 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
              <h2 className="text-[1.1rem] font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-[12px] font-bold flex items-center justify-center flex-shrink-0">
                  {section.num}
                </span>
                {section.title}
              </h2>
              {section.content && (
                <p className="text-gray-600 text-[14px] leading-relaxed">{section.content}</p>
              )}
              {section.subsections && (
                <div className="space-y-4 mt-4">
                  {section.subsections.map((sub) => (
                    <div key={sub.title} className="pl-5 border-l-2 border-blue-100">
                      <h3 className="font-bold text-gray-800 text-[13px] mb-1">{sub.title}</h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed">{sub.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111111] px-8 pb-8 pt-[72px] text-white">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-14 grid grid-cols-1 gap-12 min-[861px]:grid-cols-2 min-[861px]:gap-8 min-[861px]:[&>*:first-child]:col-span-2 min-[1040px]:grid-cols-[1.5fr_1fr_1fr_1fr] min-[1040px]:[&>*:first-child]:col-span-1">
            <div>
              <Link
                href="/"
                className="mb-5 block w-40 text-white"
                aria-label="AI Economy"
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
              <h4 className="mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white">
                Toolkit
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/llm-comparison"
                    className="text-[14px] text-white/70 transition hover:text-white"
                  >
                    LLM Comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/toolkit/cluster"
                    className="text-[14px] text-white/70 transition hover:text-white"
                  >
                    All Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-tips"
                    className="text-[14px] text-white/70 transition hover:text-white"
                  >
                    AI Tips
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-[14px] text-white/70 transition hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white">
                Learn
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/toolkit/claude-deep-dive"
                    className="text-[14px] text-white/70 transition hover:text-white"
                  >
                    Claude Deep Dive
                  </Link>
                </li>
                <li>
                  <Link
                    href="/toolkit/chatgpt-deep-dive"
                    className="text-[14px] text-white/70 transition hover:text-white"
                  >
                    ChatGPT Deep Dive
                  </Link>
                </li>
                <li>
                  <Link
                    href="/toolkit/perplexity-deep-dive"
                    className="text-[14px] text-white/70 transition hover:text-white"
                  >
                    Perplexity Deep Dive
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white">
                Company
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/about"
                    className="text-[14px] text-white/70 transition hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                    className="text-[14px] text-white/70 transition hover:text-white"
                  >
                    Ask Sarah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-[14px] text-white/70 transition hover:text-white"
                  >
                    Privacy &amp; Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                    className="text-[14px] text-white/70 transition hover:text-white"
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
    </main>
  );
}
