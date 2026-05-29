import type { Metadata } from "next";
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
  title: "Your Guide Is Ready | Start Right With AI | AI Economy",
  description:
    "Your Start Right with AI guide is ready. Download your PDF and start getting better AI output today.",
  robots: {
    index: false,
    follow: false,
  },
};

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-70.40 -827.40 6209.80 954.80"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <title>AI Economy</title>
      <g fill="currentColor">
        <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" />
        <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
      </g>
    </svg>
  );
}

export default function StartRightAccessPage() {
  return (
    <div
      className={`${poppins.className} bg-white text-[#444444] antialiased`}
      style={{ MozOsxFontSmoothing: "grayscale" }}
    >
      <header className="border-b border-[#E2E2E2] bg-white py-6">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-8">
          <a
            href="/dashboard"
            aria-label="AI Economy"
            className="block w-[150px] shrink-0 text-[#111111] no-underline"
          >
            <Logo />
          </a>
          <a
            href="/"
            className={`${dmSans.className} group inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#777777] transition-colors duration-200 hover:text-[#004AAD]`}
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-[3px]">
              &larr;
            </span>
            Back to AI Economy
          </a>
        </div>
      </header>

      <section
        className="relative overflow-hidden bg-white py-[72px] md:py-[56px] lg:py-[96px]"
        style={{
          backgroundImage:
            "linear-gradient(#ECECEC 1px, transparent 1px), linear-gradient(90deg, #ECECEC 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <div className="grid items-center gap-9 text-center lg:grid-cols-[auto_1fr] lg:text-left">
              <div className="mx-auto aspect-[4/5] w-[180px] overflow-hidden rounded-[18px] bg-[#FAFAFA] shadow-[0_24px_50px_-20px_rgba(220,38,38,0.4),0_8px_20px_-10px_rgba(0,0,0,0.18)] lg:mx-0 lg:w-[200px]">
                <img
                  src="/assets/me-mic-2.png"
                  alt="Sarah Balmer, AI Strategist & Trainer"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span
                  className={`${dmSans.className} mb-[18px] inline-flex items-center gap-2 rounded-full bg-[rgba(29,158,117,0.12)] px-[14px] py-[6px] text-[11px] font-black uppercase tracking-[0.14em] text-[#1D9E75]`}
                >
                  <span className="inline-block h-[14px] w-[14px] rounded-full bg-[#1D9E75]" />
                  Purchase Complete
                </span>
                <h1
                  className={`${dmSans.className} mb-[14px] text-[clamp(34px,4.5vw,52px)] font-black leading-[1.05] tracking-[-0.02em] text-[#111111]`}
                >
                  Welcome To{" "}
                  <span className="text-[#004AAD]">Start Right.</span>
                </h1>
                <p className="mx-auto max-w-[480px] text-[16px] leading-[1.65] text-[#444444] lg:mx-0">
                  Your guide is ready. Open it next to any AI tool and start
                  getting better output in five minutes flat. Yours to keep,
                  refer back to whenever you need it.
                </p>
              </div>
            </div>

            <div className="relative rounded-[20px] border border-[#E2E2E2] bg-white p-9 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.16)]">
              <div
                className={`${dmSans.className} mb-2 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#1D9E75]`}
              >
                <span className="inline-block h-[14px] w-[14px] rounded-full bg-[#1D9E75]" />
                Your Guide Is Ready
              </div>
              <h2
                className={`${dmSans.className} mb-2 text-2xl font-black leading-[1.2] text-[#111111]`}
              >
                Start Right With AI
              </h2>
              <p className="mb-6 text-[14px] leading-[1.6] text-[#444444]">
                Click below to download your copy. The framework, the prompts,
                the way to actually get useful AI output the first time.
              </p>
              <a
                href="/start-right-with-ai.pdf"
                download
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white transition-transform duration-150 hover:-translate-y-[1px] hover:bg-[#003A8C]"
              >
                Download Your Guide (PDF) <span>&rarr;</span>
              </a>
              <div className="mt-[18px] flex flex-wrap justify-center gap-3.5 text-[12px] text-[#777777]">
                <span>PDF format</span>
                <span>Instant download</span>
                <span>Yours to keep</span>
              </div>
              <div className="my-6 h-px bg-[#E2E2E2]" />
              <p className="m-0 text-center text-[12px] text-[#777777]">
                Trouble downloading?{" "}
                <a
                  href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                  className="font-semibold text-[#004AAD]"
                >
                  Email me
                </a>{" "}
                and I will sort it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-10 max-w-[760px]">
            <div
              className={`${dmSans.className} mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
            >
              Keep Going
            </div>
            <h2
              className={`${dmSans.className} mb-[14px] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]`}
            >
              What To Do Next.
            </h2>
            <p className="text-[17px] font-normal leading-[1.6] text-[#444444]">
              Three places worth your attention now you have Start Right in
              hand. Pick the one that matches what you need most.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="flex h-full flex-col rounded-[18px] border border-[#111111] bg-[#111111] p-8 text-white transition-all duration-200 hover:-translate-y-1 hover:border-[#E8890C] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)]">
              <span
                className={`${dmSans.className} mb-4 inline-block w-fit rounded-full bg-[rgba(232,137,12,0.2)] px-[11px] py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-[#E8890C]`}
              >
                Annual Access
              </span>
              <h3
                className={`${dmSans.className} mb-3 text-[22px] font-black leading-[1.2] text-white`}
              >
                Ask Sarah.
              </h3>
              <p className="mb-[22px] flex-1 text-[14px] leading-[1.6] text-[rgba(255,255,255,0.82)]">
                Direct access to me for AI questions, tool recommendations and
                setup help. The fastest way to get unstuck and keep moving
                without spending hours figuring it out alone.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-[14px] border-t border-[rgba(255,255,255,0.15)] pt-[18px]">
                <div
                  className={`${dmSans.className} text-[22px] font-black leading-none text-white`}
                >
                  $149
                  <small className="mt-1 block text-[11px] font-medium uppercase tracking-[0.04em] text-[rgba(255,255,255,0.6)]">
                    USD · Per Year
                  </small>
                </div>
                <a
                  href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-[14px] text-[14px] font-semibold text-[#111111] transition-transform duration-150 hover:-translate-y-[1px] hover:bg-[#E6F1FB]"
                >
                  I&apos;m Interested <span>&rarr;</span>
                </a>
              </div>
            </div>

            <div className="flex h-full flex-col rounded-[18px] border border-[#E2E2E2] bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-[#004AAD] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)]">
              <span
                className={`${dmSans.className} mb-4 inline-block w-fit rounded-full bg-[#E6F1FB] px-[11px] py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-[#004AAD]`}
              >
                Membership
              </span>
              <h3
                className={`${dmSans.className} mb-3 text-[22px] font-black leading-[1.2] text-[#111111]`}
              >
                Fresh Stack.
              </h3>
              <p className="mb-[22px] flex-1 text-[14px] leading-[1.6] text-[#444444]">
                Monthly drops of the newest AI tools, prompts and tactics worth
                your time. Filtered by me. Cancel anytime.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-[14px] border-t border-[#E2E2E2] pt-[18px]">
                <div
                  className={`${dmSans.className} text-[22px] font-black leading-none text-[#111111]`}
                >
                  $17
                  <small className="mt-1 block text-[11px] font-medium uppercase tracking-[0.04em] text-[#777777]">
                    USD · Per Month
                  </small>
                </div>
                <a
                  href="/upsell/fresh-stack"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#004AAD] px-7 py-[14px] text-[14px] font-semibold text-white transition-transform duration-150 hover:-translate-y-[1px] hover:bg-[#003A8C]"
                >
                  Join Fresh Stack <span>&rarr;</span>
                </a>
              </div>
            </div>

            <div className="flex h-full flex-col rounded-[18px] border border-[#E2E2E2] bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-[#004AAD] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)]">
              <span
                className={`${dmSans.className} mb-4 inline-block w-fit rounded-full bg-[#E6F1FB] px-[11px] py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-[#004AAD]`}
              >
                Flagship Training
              </span>
              <h3
                className={`${dmSans.className} mb-3 text-[22px] font-black leading-[1.2] text-[#111111]`}
              >
                Build Your Own AI Stack.
              </h3>
              <p className="mb-[22px] flex-1 text-[14px] leading-[1.6] text-[#444444]">
                The complete training for professionals and business owners. Go
                from overwhelmed to confident with a proven approach you can
                apply the same day.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-[14px] border-t border-[#E2E2E2] pt-[18px]">
                <div
                  className={`${dmSans.className} text-[22px] font-black leading-none text-[#111111]`}
                >
                  $97
                  <small className="mt-1 block text-[11px] font-medium uppercase tracking-[0.04em] text-[#777777]">
                    USD · One-Time
                  </small>
                </div>
                <a
                  href="/upsell/build-your-own-ai-stack"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#004AAD] px-7 py-[14px] text-[14px] font-semibold text-white transition-transform duration-150 hover:-translate-y-[1px] hover:bg-[#003A8C]"
                >
                  Learn More <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#111111] pb-8 pt-[72px] text-white">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="md:col-span-2 lg:col-span-1">
              <a
                href="/"
                className="mb-5 block w-40 text-white"
                aria-label="AI Economy"
              >
                <Logo />
              </a>
              <p className="max-w-[320px] text-[14px] leading-[1.65] text-[rgba(255,255,255,0.65)]">
                AI trainer, strategist and consultant. Building AI platforms
                including parently.ai and aieconomy.ai. Cutting through the AI
                chaos so you can focus on what matters.
              </p>
            </div>

            <div>
              <h4
                className={`${dmSans.className} mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white`}
              >
                Toolkit
              </h4>
              <ul className="space-y-[10px]">
                <li>
                  <a
                    href="/llm-comparison"
                    className="text-[14px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                  >
                    LLM Comparison
                  </a>
                </li>
                <li>
                  <a
                    href="/toolkit/cluster"
                    className="text-[14px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                  >
                    All Tools
                  </a>
                </li>
                <li>
                  <a
                    href="/ai-tips"
                    className="text-[14px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                  >
                    AI Tips
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard"
                    className="text-[14px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`${dmSans.className} mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white`}
              >
                Learn
              </h4>
              <ul className="space-y-[10px]">
                <li>
                  <a
                    href="/start-right"
                    className="text-[14px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                  >
                    Start Right With AI
                  </a>
                </li>
                <li>
                  <a
                    href="/upsell/build-your-own-ai-stack"
                    className="text-[14px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                  >
                    Build Your Own AI Stack
                  </a>
                </li>
                <li>
                  <a
                    href="/upsell/fresh-stack"
                    className="text-[14px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                  >
                    Fresh Stack
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`${dmSans.className} mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white`}
              >
                Company
              </h4>
              <ul className="space-y-[10px]">
                <li>
                  <a
                    href="/about"
                    className="text-[14px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                  >
                    About Sarah
                  </a>
                </li>
                <li>
                  <a
                    href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                  >
                    Ask Sarah
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-[14px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                  >
                    Privacy &amp; Data
                  </a>
                </li>
                <li>
                  <a
                    href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.12)] pt-7 text-[12px] text-[rgba(255,255,255,0.5)]">
            <div>&copy; 2026 AI Economy. ABN: 24 602 295 698.</div>
            <div>Melbourne, Australia.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
