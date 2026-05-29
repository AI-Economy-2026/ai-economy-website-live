import type { Metadata } from "next";
import Link from "next/link";
import { DM_Sans, Poppins } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Unlock Your AI Toolkit | AI Economy",
  description:
    "Unlock your AI Tool Dashboard. Check your email for your access code and log in to explore Sarah's curated toolkit.",
  robots: {
    index: false,
    follow: false,
  },
};

const steps = [
  {
    number: "01",
    title: "Check Your Email",
    description:
      "You will receive an email with your unique access code within the next few minutes. Use it to log in to your toolkit.",
  },
  {
    number: "02",
    title: "Log In To Your Toolkit",
    description:
      "Use your access code to log in and explore your curated AI toolkit. 31 tools across 7 categories, all with Sarah's honest take.",
  },
  {
    number: "03",
    title: "Start With Sarah's Top Picks",
    description:
      "Head straight to the Sarah's Top Picks category. These are the tools Sarah uses every single day. Start there for the fastest results.",
  },
];

function AIEconomyLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-70.40 -827.40 6209.80 954.80"
      preserveAspectRatio="xMidYMid meet"
      className="h-auto w-full [shape-rendering:geometricPrecision]"
    >
      <title>AI Economy</title>
      <g fill="currentColor">
        <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" />
        <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
      </g>
    </svg>
  );
}

export default function ThankYouPage() {
  return (
    <main
      className={`${poppins.className} min-h-screen bg-white text-[#444444] antialiased`}
    >
      <header className="border-b border-[#E2E2E2] bg-white py-6">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-8">
          <Link
            href="/dashboard"
            className="w-[150px] shrink-0 text-[#111111]"
            aria-label="AI Economy"
          >
            <AIEconomyLogo />
          </Link>
          <Link
            href="/dashboard"
            className={`${dmSans.className} inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.04em] text-[#777777] transition-colors hover:text-[#004AAD]`}
          >
            <span className="inline-block transition-transform group-hover:-translate-x-[3px]">
              ←
            </span>
            Back to AI Economy
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white px-8 py-24 pb-16 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(#ECECEC_1px,transparent_1px),linear-gradient(90deg,#ECECEC_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative z-10 mx-auto max-w-[780px]">
          <div className="mb-7 inline-flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#1D9E75] shadow-[0_16px_36px_-12px_rgba(29,158,117,0.4),0_4px_12px_-4px_rgba(0,0,0,0.1)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-white"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1
            className={`${dmSans.className} mb-5 text-[clamp(38px,5vw,60px)] font-black leading-[1.05] tracking-[-0.02em] text-[#111111]`}
          >
            Unlock Your <span className="text-[#004AAD]">AI Toolkit</span>{" "}
            Today.
          </h1>

          <p className="mx-auto max-w-[600px] text-[17px] leading-[1.65] text-[#444444]">
            Check your email, including your spam folder, for a message from{" "}
            <strong className="font-bold text-[#111111]">Sarah</strong> with
            your unique access code.
          </p>
        </div>
      </section>

      <section className="bg-white px-8 py-16 pb-24">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <div
              className={`${dmSans.className} mb-4 inline-block text-xs font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
            >
              Get Started
            </div>
            <h2
              className={`${dmSans.className} text-[clamp(28px,3.5vw,40px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]`}
            >
              Your Next 3 Steps.
            </h2>
          </div>

          <div className="mx-auto max-w-[760px] space-y-3.5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-[80px_1fr] items-start gap-6 rounded-2xl border border-[#E2E2E2] bg-[#FAFAFA] px-8 py-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#004AAD] max-[640px]:grid-cols-1 max-[640px]:gap-2 max-[640px]:px-[26px] max-[640px]:py-6"
              >
                <div
                  className={`${dmSans.className} text-5xl font-black leading-none tracking-[-0.04em] text-[#E8890C] max-[640px]:text-4xl`}
                >
                  {step.number}
                </div>
                <div>
                  <h3
                    className={`${dmSans.className} mb-2 text-lg font-black leading-[1.25] text-[#111111]`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.65] text-[#444444]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-[760px] text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-[100px] bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#003A8C]"
            >
              Log In To Your Toolkit
              <span aria-hidden="true">→</span>
            </Link>
            <p className="mt-3.5 text-[13px] text-[#777777]">
              Use the access code from your email to log in.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] px-8 py-24">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="relative mx-auto max-w-[840px] rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-white px-12 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,0.15)]">
            <div
              className={`${dmSans.className} pointer-events-none absolute left-7 top-[-12px] text-[110px] font-black leading-none text-[#E8890C]`}
            >
              &ldquo;
            </div>
            <span
              className={`${dmSans.className} block text-[clamp(20px,2.2vw,26px)] font-black leading-[1.35] tracking-[-0.01em] text-[#111111]`}
            >
              Thank you for trusting me with your AI journey. I have put
              everything I know into this toolkit, and I cannot wait to hear how
              it helps your business. If you ever get stuck, I am here.
            </span>
            <div
              className={`${dmSans.className} mt-6 flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] text-xs font-bold uppercase tracking-[0.14em] text-[#E8890C]`}
            >
              <span className="h-0.5 w-7 bg-[#E8890C]" />
              Sarah Balmer · Founder, AI Economy
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#111111] px-8 pb-8 pt-[72px] text-white">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mb-14 grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 max-[860px]:grid-cols-2 max-[860px]:gap-8">
            <div className="max-[860px]:col-span-2">
              <Link
                href="/"
                className="mb-5 block w-40 text-white"
                aria-label="AI Economy"
              >
                <AIEconomyLogo />
              </Link>
              <p className="max-w-[320px] text-sm leading-[1.65] text-white/65">
                AI trainer, strategist and consultant. Building AI platforms
                including parently.ai and aieconomy.ai. Cutting through the AI
                chaos so you can focus on what matters.
              </p>
            </div>

            <div>
              <h4
                className={`${dmSans.className} mb-[18px] text-xs font-bold uppercase tracking-[0.14em]`}
              >
                Toolkit
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/llm-comparison"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    LLM Comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/toolkit/cluster"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    All Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-tips"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    AI Tips
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`${dmSans.className} mb-[18px] text-xs font-bold uppercase tracking-[0.14em]`}
              >
                Learn
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/start-right"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    Start Right With AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upsell/build-your-own-ai-stack"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    Build Your Own AI Stack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upsell/fresh-stack"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    Fresh Stack
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`${dmSans.className} mb-[18px] text-xs font-bold uppercase tracking-[0.14em]`}
              >
                Company
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    About Sarah
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ask Sarah"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    Ask Sarah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    Privacy &amp; Data
                  </Link>
                </li>
                <li>
                  <a
                    href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    Contact
                  </a>
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
    </main>
  );
}
