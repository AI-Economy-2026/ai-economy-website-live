import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const headingClass = `${dmSans.className} font-black tracking-[-0.01em] leading-[1.1] text-[#111111]`;

function BrandLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ListCheckIcon({ orange = false }: { orange?: boolean }) {
  return (
    <span
      className={`mt-[3px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${orange ? "bg-[#e8890c]" : "bg-[#004aad]"
        }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[10px] w-[10px]"
        fill="none"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export default function AiTipsPage() {
  return (
    <div className="bg-white text-[#444444] leading-[1.6]">
      <nav className="fixed inset-x-0 top-0 z-[100] h-16 border-b border-[#e2e2e2] bg-white/95 backdrop-blur-[12px]">
        <div className="relative mx-auto flex h-full w-full max-w-[1280px] items-center px-4">
          <Link
            href="/dashboard"
            className="block w-[150px] shrink-0 text-[#111111]"
          >
            <BrandLogo className="h-auto w-full" />
          </Link>

          <ul className="hidden list-none items-center gap-8 min-[861px]:absolute min-[861px]:left-1/2 min-[861px]:flex min-[861px]:-translate-x-1/3">
            <li>
              <Link
                href="/llm-comparison"
                className="text-sm font-medium text-[#111111] transition-colors hover:text-[#004aad]"
              >
                LLMs
              </Link>
            </li>
            <li>
              <Link
                href="/toolkit/cluster"
                className="text-sm font-medium text-[#111111] transition-colors hover:text-[#004aad]"
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link
                href="/ai-tips"
                className="text-sm font-semibold text-[#004aad]"
              >
                AI Tips
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm font-medium text-[#111111] transition-colors hover:text-[#004aad]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/ask-sarah"
                className="text-sm font-medium text-[#111111] transition-colors hover:text-[#004aad]"
              >
                Ask Sarah
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/SarahBalmer"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
                aria-label="Sarah Balmer on LinkedIn"
              >
                <FaLinkedin className="h-[20px] w-[20px]" />
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2 min-[861px]:hidden">
            <a
              href="https://www.linkedin.com/in/SarahBalmer"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#004AAD] text-white"
              aria-label="Sarah Balmer on LinkedIn"
            >
              <FaLinkedin className="h-[20px] w-[20px]" />
            </a>
            <button
              type="button"
              aria-label="Menu"
              className="inline-flex items-center p-2 text-[#111111]"
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

      <section className="relative overflow-hidden bg-white px-8 pb-20 pt-[140px] text-center max-[860px]:pb-[60px] max-[860px]:pt-[110px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#ececec 1px, transparent 1px), linear-gradient(90deg, #ececec 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-[1] mx-auto max-w-[780px]">
          <div
            className={`${dmSans.className} mb-5 inline-block text-xs font-bold uppercase tracking-[0.14em] text-[#004aad]`}
          >
            AI Economy
          </div>
          <h1
            className={`${headingClass} mb-6 text-[clamp(48px,7vw,92px)] leading-[0.94] tracking-[-0.02em]`}
          >
            AI Tips, Tools{" "}
            <span className="text-[#004aad]">&amp; Services.</span>
          </h1>
          <p className="mx-auto mb-9 max-w-[620px] text-lg leading-[1.65] text-[#444444]">
            The toolkit is just the starting point. Here is everything else AI
            Economy offers to help you get real results from AI. Training,
            products, services and resources to take you further.
          </p>
          <div className="inline-flex flex-wrap items-center gap-2 rounded-[100px] border border-[#e2e2e2] bg-white p-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] max-[860px]:w-full max-[860px]:flex-col max-[860px]:rounded-[20px]">
            <a
              href="#products"
              className="rounded-[100px] px-5 py-2.5 text-[13px] font-semibold text-[#444444] transition hover:bg-[#e6f1fb] hover:text-[#004aad] max-[860px]:w-full"
            >
              Training &amp; Products
            </a>
            <a
              href="#services"
              className="rounded-[100px] px-5 py-2.5 text-[13px] font-semibold text-[#444444] transition hover:bg-[#e6f1fb] hover:text-[#004aad] max-[860px]:w-full"
            >
              Services
            </a>
            <a
              href="#resources"
              className="rounded-[100px] px-5 py-2.5 text-[13px] font-semibold text-[#444444] transition hover:bg-[#e6f1fb] hover:text-[#004aad] max-[860px]:w-full"
            >
              Resources
            </a>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="border-t border-[#e2e2e2] bg-[#fafafa] py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-8">
          <div className="mb-14 max-w-[760px]">
            <div
              className={`${dmSans.className} mb-5 inline-block text-xs font-bold uppercase tracking-[0.14em] text-[#004aad]`}
            >
              Training &amp; Products
            </div>
            <h2
              className={`${headingClass} mb-4 text-[clamp(36px,4.5vw,56px)]`}
            >
              Learn, Level Up &amp; Stay Sharp.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              Self-paced training, prompt guides and monthly stack updates.
              Built for busy professionals who want AI that actually works,
              without the overwhelm.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[860px]:grid-cols-1">
            <div className="flex flex-col rounded-[20px] border border-[#e2e2e2] bg-white p-9 transition hover:-translate-y-1 hover:border-[#004aad] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)] max-[860px]:p-7">
              <div className="mb-[14px] inline-block w-fit rounded-[100px] bg-[rgba(232,137,12,0.15)] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#e8890c]">
                Flagship Training
              </div>
              <div className="mb-[18px] flex items-start justify-between gap-5">
                <div className="min-w-0 flex-1">
                  <h3 className={`${headingClass} text-2xl leading-[1.2]`}>
                    Build Your Own AI Stack.
                  </h3>
                </div>
                <div
                  className={`${headingClass} shrink-0 text-right text-[22px] leading-[1.1] text-[#111111]`}
                >
                  $27
                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.04em] text-[#777777]">
                    USD · One-Time
                  </span>
                </div>
              </div>
              <p className="mb-6 flex-1 text-sm leading-[1.6] text-[#444444]">
                The complete AI training for professionals and business owners.
                Go from overwhelmed to confident with a proven framework you can
                apply the same day.
              </p>
              <ul className="mb-7 list-none">
                {[
                  "Self-paced, on demand",
                  "Built for non-technical learners",
                  "Real business use cases",
                  "Lifetime access & updates",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-[#e2e2e2] py-[9px] text-[13px] leading-[1.5] text-[#444444] last:border-b-0"
                  >
                    <ListCheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/upsell/build-your-own-ai-stack"
                className={`${dmSans.className} inline-flex w-full items-center justify-start gap-2.5 rounded-[100px] bg-[#004aad] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-px hover:bg-[#003a8c]`}
              >
                Get Your Own AI Stack  <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex flex-col rounded-[20px] border border-[#e2e2e2] bg-white p-9 transition hover:-translate-y-1 hover:border-[#004aad] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)] max-[860px]:p-7">
              <div className="mb-[14px] inline-block w-fit rounded-[100px] bg-[#e6f1fb] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#004aad]">
                Toolkit Unlock
              </div>
              <div className="mb-[18px] flex items-start justify-between gap-5">
                <div className="min-w-0 flex-1">
                  <h3 className={`${headingClass} text-2xl leading-[1.2]`}>
                    Unlock Your AI Tool Dashboard.
                  </h3>
                </div>
                <div
                  className={`${headingClass} shrink-0 text-right text-[22px] leading-[1.1] text-[#111111]`}
                >
                  $27
                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.04em] text-[#777777]">
                    USD · One-Time
                  </span>
                </div>
              </div>
              <p className="mb-6 flex-1 text-sm leading-[1.6] text-[#444444]">
                Get inside the AI Tool Dashboard. Every tool Sarah uses &amp;
                recommends, across 9 use cases, with honest reviews, setup
                guides and pricing. One payment. Lifetime access.
              </p>
              <ul className="mb-7 list-none">
                {[
                  "Full AI Tool Dashboard access",
                  "9 use cases, every tool covered",
                  "Honest reviews & setup guides",
                  "Lifetime access, one payment",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-[#e2e2e2] py-[9px] text-[13px] leading-[1.5] text-[#444444] last:border-b-0"
                  >
                    <ListCheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/dashboard"
                className={`${dmSans.className} inline-flex w-full items-center justify-start gap-2.5 rounded-[100px] bg-[#004aad] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-px hover:bg-[#003a8c]`}
              >
                Unlock The Dashboard <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex flex-col rounded-[20px] border border-[#e2e2e2] bg-white p-9 transition hover:-translate-y-1 hover:border-[#004aad] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)] max-[860px]:p-7">
              <div className="mb-[14px] inline-block w-fit rounded-[100px] bg-[rgba(29,158,117,0.15)] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#1d9e75]">
                Monthly Membership
              </div>
              <div className="mb-[18px] flex items-start justify-between gap-5">
                <div className="min-w-0 flex-1">
                  <h3 className={`${headingClass} text-2xl leading-[1.2]`}>
                    Fresh Stack.
                  </h3>
                </div>
                <div
                  className={`${headingClass} shrink-0 text-right text-[22px] leading-[1.1] text-[#111111]`}
                >
                  $17
                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.04em] text-[#777777]">
                    USD · Per Month
                  </span>
                </div>
              </div>
              <p className="mb-6 flex-1 text-sm leading-[1.6] text-[#444444]">
                Your AI toolkit, kept current. Every month Sarah sends you what
                is new, what is changing and what to watch, so your stack never
                goes stale.
              </p>
              <ul className="mb-7 list-none">
                {[
                  "Monthly tool updates, curated",
                  "New tools worth your time",
                  "Changes to existing tools",
                  "Cancel any time",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-[#e2e2e2] py-[9px] text-[13px] leading-[1.5] text-[#444444] last:border-b-0"
                  >
                    <ListCheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/upsell/fresh-stack"
                className={`${dmSans.className} inline-flex w-full items-center justify-start gap-2.5 rounded-[100px] bg-[#004aad] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-px hover:bg-[#003a8c]`}
              >
                Get Fresh Stack <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex flex-col rounded-[20px] border border-[#e2e2e2] bg-white p-9 transition hover:-translate-y-1 hover:border-[#004aad] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)] max-[860px]:p-7">
              <div className="mb-[14px] inline-block w-fit rounded-[100px] bg-[#e6f1fb] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#004aad]">
                Annual Access
              </div>
              <div className="mb-[18px] flex items-start justify-between gap-5">
                <div className="min-w-0 flex-1">
                  <h3 className={`${headingClass} text-2xl leading-[1.2]`}>
                    Ask Sarah.
                  </h3>
                </div>
                <div
                  className={`${headingClass} shrink-0 text-right text-[22px] leading-[1.1] text-[#111111]`}
                >
                  $149
                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.04em] text-[#777777]">
                    USD · Per Year
                  </span>
                </div>
              </div>
              <p className="mb-6 flex-1 text-sm leading-[1.6] text-[#444444]">
                Direct access to Sarah for your AI questions. Tool
                recommendations, setup help and honest answers when you need
                them.
              </p>
              <ul className="mb-7 list-none">
                {[
                  "Ask AI questions any time",
                  "Tool recommendations, tailored",
                  "Setup & workflow help",
                  "Trained on Sarah's expertise",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-[#e2e2e2] py-[9px] text-[13px] leading-[1.5] text-[#444444] last:border-b-0"
                  >
                    <ListCheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join Ask Sarah"
                className={`${dmSans.className} inline-flex w-full items-center justify-start gap-2.5 rounded-[100px] bg-[#004aad] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-px hover:bg-[#003a8c]`}
              >
                Join Ask Sarah <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24">
        <div className="mx-auto w-full max-w-[1200px] px-8">
          <div className="mb-14 max-w-[760px]">
            <div
              className={`${dmSans.className} mb-5 inline-block text-xs font-bold uppercase tracking-[0.14em] text-[#004aad]`}
            >
              Services
            </div>
            <h2
              className={`${headingClass} mb-4 text-[clamp(36px,4.5vw,56px)]`}
            >
              Discover Your AI Potential.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              One-to-one work, led by me. From AI ROI diagnostics to visibility
              audits, team training, keynotes and strategic consulting. Scoped
              to your business.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[860px]:grid-cols-1">
            <div className="flex flex-col rounded-[20px] border border-[#111111] bg-[#111111] p-9 text-white transition hover:-translate-y-1 hover:border-[#e8890c] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)] max-[860px]:p-7">
              <div className="mb-[14px] inline-block w-fit rounded-[100px] bg-[rgba(232,137,12,0.2)] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#e8890c]">
                Most Requested
              </div>
              <h3
                className={`${headingClass} mb-3 text-2xl leading-[1.2] text-white`}
              >
                Priority AI Business Audit.
              </h3>
              <p className="mb-6 flex-1 text-sm leading-[1.6] text-white/80">
                Know where to begin with AI, based on your data. Priority AI
                connects to your payroll so you can see the low effort, high
                reward opportunities and prioritise AI that actually works.
              </p>
              <ul className="mb-7 list-none">
                {[
                  "Payroll integration for real ROI",
                  "Low effort, high reward actions ranked",
                  "Three-session diagnostic",
                  "Personalised AI roadmap. Led by me.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-white/10 py-[9px] text-[13px] leading-[1.5] text-white/90 last:border-b-0"
                  >
                    <ListCheckIcon orange />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://priorityai.io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enquire Now"
                className={`${dmSans.className} inline-flex w-full items-center justify-start gap-2.5 rounded-[100px] bg-white px-7 py-3.5 text-sm font-bold text-[#111111] transition hover:-translate-y-px hover:bg-[#e6f1fb]`}
              >
                Enquire Now <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex flex-col rounded-[20px] border border-[#e2e2e2] bg-white p-9 transition hover:-translate-y-1 hover:border-[#004aad] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)] max-[860px]:p-7">
              <div className="mb-[14px] inline-block w-fit rounded-[100px] bg-[#e6f1fb] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#004aad]">
                For Visibility
              </div>
              <h3 className={`${headingClass} mb-3 text-2xl leading-[1.2]`}>
                GEO Audit.
              </h3>
              <p className="mb-6 flex-1 text-sm leading-[1.6] text-[#444444]">
                Find out how visible your business is to AI search engines. A
                full diagnostic with scored prompts, prioritised opportunities
                and a clear activation plan.
              </p>
              <ul className="mb-7 list-none">
                {[
                  "Scored prompts across major AI engines",
                  "Prioritised opportunities",
                  "Activation plan",
                  "Diagnostic explained in easy language",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-[#e2e2e2] py-[9px] text-[13px] leading-[1.5] text-[#444444] last:border-b-0"
                  >
                    <ListCheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://www.aieconomy.ai/product/geo-audit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Run My GEO Audit"
                className={`${dmSans.className} inline-flex w-full items-center justify-start gap-2.5 rounded-[100px] bg-[#004aad] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-px hover:bg-[#003a8c]`}
              >
                Run My GEO Audit <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex flex-col rounded-[20px] border border-[#e2e2e2] bg-white p-9 transition hover:-translate-y-1 hover:border-[#004aad] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)] max-[860px]:p-7">
              <div className="mb-[14px] inline-block w-fit rounded-[100px] bg-[#e6f1fb] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#004aad]">
                For Teams
              </div>
              <h3 className={`${headingClass} mb-3 text-2xl leading-[1.2]`}>
                Strategy &amp; Consulting.
              </h3>
              <p className="mb-6 flex-1 text-sm leading-[1.6] text-[#444444]">
                Get help with AI in your business. From tool selection and
                implementation to team training and governance. Tailored to your
                goals, led by me.
              </p>
              <ul className="mb-7 list-none">
                {[
                  "AI strategy for leaders and teams",
                  "Tool selection and implementation",
                  "Team training and governance",
                  "Scoped to your business",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-[#e2e2e2] py-[9px] text-[13px] leading-[1.5] text-[#444444] last:border-b-0"
                  >
                    <ListCheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get In Touch"
                className={`${dmSans.className} inline-flex w-full items-center justify-start gap-2.5 rounded-[100px] bg-[#004aad] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-px hover:bg-[#003a8c]`}
              >
                Get In Touch <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex flex-col rounded-[20px] border border-[#e2e2e2] bg-white p-9 transition hover:-translate-y-1 hover:border-[#004aad] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)] max-[860px]:p-7">
              <div className="mb-[14px] inline-block w-fit rounded-[100px] bg-[#e6f1fb] px-[11px] py-[5px] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#004aad]">
                Speaking &amp; Keynotes
              </div>
              <h3 className={`${headingClass} mb-3 text-2xl leading-[1.2]`}>
                Sarah Speaks AI.
              </h3>
              <p className="mb-6 flex-1 text-sm leading-[1.6] text-[#444444]">
                Keynotes, panels, workshops and certified AI training for
                conferences, corporate events and industry groups. Audiences
                leave confident, not confused.
              </p>
              <ul className="mb-7 list-none">
                {[
                  "Keynotes & panel moderation",
                  "Corporate workshops & training",
                  "Industry & conference speaking",
                  "CPD certified AI trainer",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-[#e2e2e2] py-[9px] text-[13px] leading-[1.5] text-[#444444] last:border-b-0"
                  >
                    <ListCheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://www.aieconomy.ai/product/ai-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book Sarah"
                className={`${dmSans.className} inline-flex w-full items-center justify-start gap-2.5 rounded-[100px] bg-[#004aad] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-px hover:bg-[#003a8c]`}
              >
                Book Sarah <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="resources"
        className="border-t border-[#e2e2e2] bg-[#fafafa] py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-8">
          <div className="mb-14 max-w-[760px]">
            <div
              className={`${dmSans.className} mb-5 inline-block text-xs font-bold uppercase tracking-[0.14em] text-[#e8890c]`}
            >
              Resources
            </div>
            <h2
              className={`${headingClass} mb-4 text-[clamp(36px,4.5vw,56px)]`}
            >
              Resources To Take You Further.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              Free resources, where I show up, and the conversations worth
              following. No email gate, no friction. Just good stuff.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 max-[860px]:grid-cols-1">
            {[
              {
                title: "LinkedIn",
                description:
                  "Daily AI tips, tool reviews & behind the scenes of building AI products. Most active here. Come say hi.",
                cta: "Connect",
                href: "https://www.linkedin.com/in/SarahBalmer",
                external: true,
                icon: <LinkedInIcon />,
              },
              {
                title: "AI That Works Podcast",
                description:
                  "Real conversations with people actually building & using AI. No hype. No theory. Practical, honest insights you can apply this week.",
                cta: "Listen",
                href: "https://www.aieconomy.ai/",
                external: true,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z" />
                  </svg>
                ),
              },

              {
                title: "AI Tips on the Blog",
                description:
                  "Long form articles, tool deep dives & the real workflows Sarah uses every day. New posts weekly.",
                cta: "Read",
                href: "/ai-tips",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                ),
              },
              {
                title: "YouTube",
                description:
                  "Short-form tool walkthroughs, live AI builds & recorded keynotes. Watch how Sarah uses AI in real time.",
                cta: "Watch",
                href: "https://www.youtube.com/@aieconomyai",
                external: true,
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                ),
              },
              // {
              //   title: "The Newsletter",
              //   description:
              //     "Join the free newsletter for new tools worth trying, AI shifts that matter & Sarah's weekly picks. One email, no spam.",
              //   cta: "Subscribe",
              //   href: "/newsletter",
              //   icon: (
              //     <svg
              //       viewBox="0 0 24 24"
              //       fill="none"
              //       stroke="currentColor"
              //       strokeWidth="2"
              //       strokeLinecap="round"
              //       strokeLinejoin="round"
              //     >
              //       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              //       <polyline points="22,6 12,13 2,6" />
              //     </svg>
              //   ),
              // },
              {
                title: "Free AI Tips",
                description:
                  "Quick reads, prompting frameworks & how to start with AI. No sign-up, no gate. Straight to your screen.",
                cta: "Browse",
                href: "/ai-tips",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                ),
              },
            ].map((resource) => (
              <div
                key={resource.title}
                className="flex flex-col rounded-2xl border border-[#e2e2e2] bg-white p-7 transition hover:-translate-y-[3px] hover:border-[#004aad] hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-[#e6f1fb] text-[#004aad]">
                  <span className="h-[22px] w-[22px]">{resource.icon}</span>
                </div>
                <h4 className={`${headingClass} mb-2 text-lg leading-[1.25]`}>
                  {resource.title}
                </h4>
                <p className="mb-[18px] flex-1 text-[13px] leading-[1.55] text-[#444444]">
                  {resource.description}
                </p>
                {resource.external ? (
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${dmSans.className} inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#004aad] transition after:content-['→'] hover:after:translate-x-[3px]`}
                  >
                    {resource.cta}
                  </a>
                ) : (
                  <Link
                    href={resource.href}
                    className={`${dmSans.className} inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#004aad] transition after:content-['→'] hover:after:translate-x-[3px]`}
                  >
                    {resource.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111111] py-24 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-[1] mx-auto w-full max-w-[1200px] px-8">
          <div className="mx-auto max-w-[720px] text-center">
            <div
              className={`${dmSans.className} mb-5 inline-block text-xs font-bold uppercase tracking-[0.14em] text-white/75`}
            >
              Not Sure Where To Start?
            </div>
            <h2
              className={`${headingClass} mb-5 text-[clamp(36px,4.5vw,56px)] text-white`}
            >
              Start With A Conversation.
            </h2>
            <p className="mb-9 text-[17px] leading-[1.6] text-white/85">
              The quickest way to work out the right move is a short call. Tell
              me what you are working on and I will point you at the right path,
              whether it is a product, a service, or neither.
            </p>
            <Link
              href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AI That Works Podcast"
              className={`${dmSans.className} inline-flex items-center gap-2.5 rounded-[100px] bg-white px-7 py-3.5 text-sm font-bold text-[#111111] transition hover:-translate-y-px hover:bg-[#e6f1fb]`}
            >
              Get In Touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#111111] px-8 pb-8 pt-[72px] text-white">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mb-14 grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 max-[860px]:grid-cols-2 max-[860px]:gap-8">
            <div className="max-[860px]:col-span-2">
              <Link href="/" className="mb-5 block w-40 text-white">
                <BrandLogo className="h-auto w-full" />
              </Link>
              <p className="max-w-[320px] text-sm leading-[1.65] text-white/65">
                AI trainer, strategist and consultant. Building AI platforms
                including parently.ai and aieconomy.ai. Cutting through the AI
                chaos so you can focus on what matters.
              </p>
            </div>
            <div>
              <h4
                className={`${dmSans.className} mb-[18px] text-xs font-bold uppercase tracking-[0.14em] text-white`}
              >
                Toolkit
              </h4>
              <ul className="list-none">
                <li className="mb-2.5">
                  <Link
                    href="/llm-comparison"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    LLM Comparison
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/toolkit/cluster"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    All Tools
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/ai-tips"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    AI Tips
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/dashboard"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className={`${dmSans.className} mb-[18px] text-xs font-bold uppercase tracking-[0.14em] text-white`}
              >
                Learn
              </h4>
              <ul className="list-none">
                <li className="mb-2.5">
                  <Link
                    href="/toolkit/claude-deep-dive"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    Claude Deep Dive
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/toolkit/chatgpt-deep-dive"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    ChatGPT Deep Dive
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/toolkit/perplexity-deep-dive"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    Perplexity Deep Dive
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className={`${dmSans.className} mb-[18px] text-xs font-bold uppercase tracking-[0.14em] text-white`}
              >
                Company
              </h4>
              <ul className="list-none">
                <li className="mb-2.5">
                  <Link
                    href="/about"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="AI That Works Podcast"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    Ask Sarah
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/privacy"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    Privacy &amp; Data
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="AI That Works Podcast"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/50">
            <div>© 2026 AI Economy. ABN: 24 602 295 698.</div>
            <div>Melbourne, Australia.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
