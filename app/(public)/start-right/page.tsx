import Image from "next/image";
import Link from "next/link";
import { DM_Sans, Poppins } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["700", "900"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const navLinks = [
  { href: "/llm-comparison", label: "LLMs" },
  { href: "/toolkit/cluster", label: "Use Cases" },
  { href: "/ai-tips", label: "AI Tips" },
  { href: "/about", label: "About" },
  {
    href: "/ask-sarah",
    label: "Ask Sarah",
  },
];

const problemCards = [
  {
    before: "You have tried AI and the output came back ",
    strong: "generic, robotic, or just wrong",
    after: ".",
  },
  {
    before: "You spend more time fixing AI output than you would have ",
    strong: "writing it yourself",
    after: ".",
  },
  {
    before: "You know AI can save time but you cannot get it to ",
    strong: "produce anything useful",
    after: ".",
  },
  {
    before: "You stare at the empty box and have ",
    strong: "no idea what to type in",
    after: ".",
  },
  {
    before: "You have watched tutorials but nothing has actually changed ",
    strong: "how you use AI day to day",
    after: ".",
  },
  {
    before: "You are still copy-pasting the same vague prompt and ",
    strong: "hoping for the best",
    after: ".",
  },
];

const promiseCards = [
  {
    num: "01",
    title: "The Framework I Use Every Day",
    body: "The way I structure every prompt to get useful output the first time. Not theory, not best practice. The actual method I use.",
  },
  {
    num: "02",
    title: "Battle-Tested Prompts",
    body: "Copy, paste, edit lightly, send. Built for real business use. Each prompt explained so you understand why it works and can build your own.",
  },
  {
    num: "03",
    title: "Coverage Across Real Work",
    body: "Built for the work you actually do. Spans nine different areas of business so you have something to reach for whatever the task.",
  },
  {
    num: "04",
    title: "Works With Any AI Tool",
    body: "The framework is tool-agnostic. Use it with Claude, ChatGPT, Perplexity, Gemini or anything that comes next. The method outlasts the tool.",
  },
  {
    num: "05",
    title: "A Check-Your-Work Process",
    body: "How to spot when the AI is off track before you ship the output. The quick checks I run before anything goes to a client.",
  },
  {
    num: "06",
    title: "Yours To Keep, Forever",
    body: "Instant download after purchase. No subscription, no expiry, no upsells. Buy it once, refer back to it whenever you need it.",
  },
];

const coverageTiles = [
  {
    title: "Email & Comms",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Content & Copy",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Strategy & Planning",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Research & Analysis",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "HR & People",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
        <path d="M16 3.1a4 4 0 0 1 0 7.8" />
      </svg>
    ),
  },
  {
    title: "Sales & Outreach",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 4 5-5" />
      </svg>
    ),
  },
  {
    title: "Operations",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Social Media",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Problem Solving",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.5.4.8 1 .8 1.6V18h6.4v-1.7c0-.6.3-1.2.8-1.6A7 7 0 0 0 12 2z" />
      </svg>
    ),
  },
];

function Logo() {
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

export default function StartRightPage() {
  return (
    <div className={`${poppins.className} bg-white text-[#444444] antialiased`}>
      <nav className="fixed inset-x-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-white/95 backdrop-blur-[12px]">
        <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-8">
          <Link href="/dashboard" className="w-[150px] shrink-0 text-[#111111]">
            <Logo />
          </Link>
          <ul className="hidden list-none items-center gap-8 min-[861px]:absolute min-[861px]:left-1/2 min-[861px]:flex min-[861px]:-translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/in/SarahBalmer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarah Balmer on LinkedIn"
                className="ml-3 inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
              >
                <FaLinkedin className="h-[18px] w-[18px]" />
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2 min-[861px]:hidden">
            <a
              href="https://www.linkedin.com/in/SarahBalmer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarah Balmer on LinkedIn"
              className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#004AAD] text-white"
            >
              <FaLinkedin className="h-[18px] w-[18px]" />
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

      <section className="relative overflow-hidden bg-white pb-24 pt-32 min-[960px]:pb-[96px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(#ECECEC 1px,transparent 1px),linear-gradient(90deg,#ECECEC 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-8">
          <div className="grid items-center gap-16 min-[960px]:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="mb-[18px] flex flex-wrap items-center gap-[10px]">
                <span
                  className={`${dmSans.className} text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
                >
                  Sarah&apos;s Prompting Guide
                </span>
                <span
                  className={`${dmSans.className} rounded-full bg-[#E8890C] px-[11px] py-[5px] text-[10px] font-black uppercase tracking-[0.14em] text-white`}
                >
                  $27 Sale Price
                </span>
              </div>
              <h1
                className={`${dmSans.className} mb-[18px] text-[clamp(38px,5vw,60px)] font-black leading-[1.05] tracking-[-0.02em] text-[#111111]`}
              >
                Stop Getting Average AI Output.{" "}
                <span className="text-[#004AAD]">Start Right.</span>
              </h1>
              <p className="mb-7 max-w-[540px] text-[17px] leading-[1.65] text-[#444444]">
                A practical guide built around the framework I use every day.
                Copy it, paste it, get useful output the first time. No theory.
                No filler. Just the way to prompt that actually works.
              </p>

              <div className="mb-8 flex flex-wrap gap-x-7 gap-y-[18px] text-[13px] text-[#444444]">
                {[
                  "Instant access",
                  "Yours to keep",
                  "Works with any AI tool",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#1D9E75]" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mb-[18px] flex flex-wrap items-center gap-[18px]">
                <span
                  className={`${dmSans.className} text-2xl font-bold text-[#777777] line-through`}
                >
                  $57
                </span>
                <span
                  className={`${dmSans.className} text-5xl font-black leading-none tracking-[-0.02em] text-[#111111]`}
                >
                  $27{" "}
                  <span className="ml-[-6px] text-[18px] font-bold text-[#777777]">
                    USD
                  </span>
                </span>
                <span
                  className={`${dmSans.className} inline-flex rounded-full bg-[rgba(232,137,12,.15)] px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[0.1em] text-[#E8890C]`}
                >
                  Save $30
                </span>
              </div>

              <div className="mb-10 flex flex-col items-center gap-4 min-[960px]:items-start">
                <a
                  href="https://aieconomy.thrivecart.com/start-right-with-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Start Right"
                  className="inline-flex whitespace-nowrap rounded-full bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-[#003A8C]"
                >
                  Get Start Right · $27{" "}
                  <span className="ml-2 transition-transform hover:translate-x-1">
                    →
                  </span>
                </a>
                <p className="text-[13px] text-[#777777]">
                  One-time payment · Instant access · Yours to keep.
                </p>
              </div>
              <p className="text-xs text-[#777777]">
                One-time payment · Instant access after purchase · Works with
                ChatGPT, Claude, Perplexity &amp; more.
              </p>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#FAFAFA] shadow-[0_40px_80px_-32px_rgba(220,38,38,.45),0_16px_32px_-16px_rgba(0,0,0,.2)] min-[960px]:mx-0 min-[960px]:max-w-none">
              <span
                className={`${dmSans.className} absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-[10px] text-[11px] font-black uppercase tracking-[0.12em] text-[#111111] shadow-[0_8px_20px_-8px_rgba(0,0,0,.25)]`}
              >
                <span className="h-2 w-2 rounded-full bg-[#1D9E75]" />
                In Stock
              </span>
              <Image
                src="/assets/sarah-laptop.png"
                alt="Sarah Balmer, AI Strategist & Trainer"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-6 right-0 z-10 max-w-[240px] rounded-[14px] bg-white px-[22px] py-[18px] shadow-[0_16px_36px_-12px_rgba(0,0,0,.22)] min-[960px]:right-[-20px]">
                <div
                  className={`${dmSans.className} mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#E8890C]`}
                >
                  Get AI Ready In
                </div>
                <div
                  className={`${dmSans.className} text-[14px] font-black leading-[1.3] text-[#111111]`}
                >
                  5 Minutes Flat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <div
              className={`${dmSans.className} mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
            >
              Sound Familiar?
            </div>
            <h2
              className={`${dmSans.className} mb-[14px] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]`}
            >
              The Problem Is Not AI. <br />
              <span className="text-[#004AAD]">
                It Is How You Are Talking To It.
              </span>
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              If any of these sound like you, you are not the problem. You just
              have not been shown the way to prompt that actually works.
            </p>
          </div>

          <div className="mx-auto grid max-w-[980px] gap-[18px] min-[760px]:grid-cols-2">
            {problemCards.map((card) => (
              <div
                key={card.strong}
                className="flex items-start gap-[14px] rounded-[14px] border border-[#E2E2E2] bg-white px-7 py-6 transition-all hover:-translate-y-0.5 hover:border-[#777777]"
              >
                <span
                  className={`${dmSans.className} inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(220,38,38,.1)] text-lg font-black leading-none text-[#DC2626]`}
                >
                  !
                </span>
                <p className="text-[15px] font-normal leading-[1.6] text-[#444444]">
                  {card.before}
                  <strong className="font-semibold text-[#111111]">
                    {card.strong}
                  </strong>
                  {card.after}
                </p>
              </div>
            ))}
          </div>
          {/* <div className="mt-14 text-center">
            <a
              href="https://aieconomy.thrivecart.com/start-right-with-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Start Right"
              className="inline-flex whitespace-nowrap rounded-full bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-[#003A8C]"
            >
              Get Start Right · $27{" "}
              <span className="ml-2 transition-transform hover:translate-x-1">
                →
              </span>
            </a>
            <p className="mt-4 text-[13px] text-[#777777]">
              One-time payment · Instant access · Yours to keep.
            </p>
          </div> */}
        </div>
      </section>

      <section
        id="what-you-get"
        className="border-t border-[#E2E2E2] bg-white py-24"
      >
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-12 max-w-[760px]">
            <div
              className={`${dmSans.className} mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
            >
              What You Get
            </div>
            <h2
              className={`${dmSans.className} mb-[14px] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]`}
            >
              A Shortcut To Useful AI Output.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              Built so you can open it next to any AI tool and get a better
              answer in five minutes. No course to sit through. Just the way I
              work, written down for you.
            </p>
          </div>

          <div className="grid gap-5 min-[600px]:grid-cols-2 min-[960px]:grid-cols-3">
            {promiseCards.map((card) => (
              <div
                key={card.num}
                className="flex h-full flex-col rounded-2xl border border-[#E2E2E2] bg-[#FAFAFA] px-7 py-8 transition-all hover:-translate-y-1 hover:border-[#004AAD] hover:shadow-[0_16px_36px_-18px_rgba(0,74,173,.15)]"
              >
                <div
                  className={`${dmSans.className} mb-[14px] text-4xl font-black leading-none tracking-[-0.04em] text-[#E8890C]`}
                >
                  {card.num}
                </div>
                <h3
                  className={`${dmSans.className} mb-[10px] text-xl font-black leading-[1.25] text-[#111111]`}
                >
                  {card.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-[#444444]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          {/* <div className="mt-14 text-center">
            <a
              href="https://aieconomy.thrivecart.com/start-right-with-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Start Right"
              className="inline-flex whitespace-nowrap rounded-full bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-[#003A8C]"
            >
              Get Start Right · $27{" "}
              <span className="ml-2 transition-transform hover:translate-x-1">
                →
              </span>
            </a>
            <p className="mt-4 text-[13px] text-[#777777]">
              One-time payment · Instant access · Yours to keep.
            </p>
          </div> */}
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-12 max-w-[760px]">
            <div
              className={`${dmSans.className} mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
            >
              Real Work, Real Coverage
            </div>
            <h2
              className={`${dmSans.className} mb-[14px] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]`}
            >
              Built For The Nine Areas You Actually Use AI For.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              Every business has the same nine areas where AI saves the most
              time. The guide is built around them, so whatever the task in
              front of you, there is something to reach for.
            </p>
          </div>

          <div className="grid gap-[14px] min-[480px]:grid-cols-2 min-[760px]:grid-cols-3">
            {coverageTiles.map((tile) => (
              <div
                key={tile.title}
                className="flex items-center gap-[14px] rounded-xl border border-[#E2E2E2] bg-white px-6 py-[22px] transition-all hover:-translate-y-0.5 hover:border-[#004AAD]"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#E6F1FB] text-[#004AAD] [&>svg]:h-[18px] [&>svg]:w-[18px]">
                  {tile.icon}
                </span>
                <h3
                  className={`${dmSans.className} text-[15px] font-black leading-[1.25] text-[#111111]`}
                >
                  {tile.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a
              href="https://aieconomy.thrivecart.com/start-right-with-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Start Right"
              className="inline-flex whitespace-nowrap rounded-full bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-[#003A8C]"
            >
              Get Start Right · $27{" "}
              <span className="ml-2 transition-transform hover:translate-x-1">
                →
              </span>
            </a>
            <p className="mt-4 text-[13px] text-[#777777]">
              One-time payment · Instant access · Yours to keep.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-white py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="relative mx-auto max-w-[840px] rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-white px-12 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,.15)]">
            <span
              className={`${dmSans.className} pointer-events-none absolute left-7 top-[-12px] text-[110px] font-black leading-none text-[#E8890C]`}
            >
              &ldquo;
            </span>
            <span
              className={`${dmSans.className} block text-[clamp(20px,2.2vw,26px)] font-black leading-[1.3] tracking-[-0.01em] text-[#111111]`}
            >
              This is the guide I wish I had when I started. No theory. No
              filler. Just the framework and the prompts that actually work.
              Open it next to any AI tool and start getting better results in
              minutes.
            </span>
            <div
              className={`${dmSans.className} mt-6 flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-[#E8890C]`}
            >
              <span className="h-0.5 w-7 bg-[#E8890C]" />
              Sarah&apos;s Take
            </div>
          </div>
          <div className="mt-16 text-center">
            <a
              href="https://aieconomy.thrivecart.com/start-right-with-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Start Right"
              className="inline-flex whitespace-nowrap rounded-full bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-[#003A8C]"
            >
              Get Start Right · $27{" "}
              <span className="ml-2 transition-transform hover:translate-x-1">
                →
              </span>
            </a>
            <p className="mt-4 text-[13px] text-[#777777]">
              One-time payment · Instant access · Yours to keep.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111111] py-24 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-8">
          <div className="mx-auto max-w-[780px] text-center">
            <div
              className={`${dmSans.className} mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#E8890C]`}
            >
              Get Started Today
            </div>
            <h2
              className={`${dmSans.className} mb-4 text-[clamp(36px,5vw,56px)] font-black leading-[1.1] tracking-[-0.01em] text-white`}
            >
              Start Right With AI. <br />
              <span className="text-[#E8890C]">Today.</span>
            </h2>
            <p className="mx-auto mb-9 max-w-[600px] text-[17px] leading-[1.65] text-white/85">
              The framework I use every day, plus the prompts that make it work
              from day one. Yours to keep, refer back to forever, and use with
              any AI tool you bring into your stack.
            </p>
            <div className="mb-8 inline-flex flex-wrap items-center justify-center gap-[18px] rounded-full border border-white/10 bg-white/5 px-7 py-[18px]">
              <span
                className={`${dmSans.className} text-[18px] font-bold text-white/40 line-through`}
              >
                $57
              </span>
              <span
                className={`${dmSans.className} text-[32px] font-black leading-none text-white`}
              >
                $27{" "}
                <span className="text-[14px] font-bold text-white/65">USD</span>
              </span>
              <span
                className={`${dmSans.className} rounded-full bg-[#E8890C] px-3 py-[5px] text-[10px] font-black uppercase tracking-[0.12em] text-white`}
              >
                Save $30
              </span>
            </div>
            <div>
              <a
                href="https://aieconomy.thrivecart.com/start-right-with-ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Start Right Now"
                className="inline-flex rounded-full bg-white px-9 py-[18px] text-[15px] font-semibold text-[#111111] transition-all hover:-translate-y-px hover:bg-[#E6F1FB]"
              >
                Get Start Right Now
                <span className="ml-2 transition-transform hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
            <p className="mt-[18px] text-[16px] font-medium text-white/60">
              One-time payment. Instant access. Yours to keep forever.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#111111] pb-8 pt-[72px] text-white">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-14 grid gap-12 min-[860px]:grid-cols-2 min-[1100px]:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="min-[860px]:col-span-2 min-[1100px]:col-span-1">
              <Link href="/" className="mb-5 block w-40 text-white">
                <Logo />
              </Link>
              <p className="max-w-[320px] text-[14px] leading-[1.65] text-white/65">
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
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/llm-comparison"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    LLM Comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/toolkit/cluster"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    All Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-tips"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    AI Tips
                  </Link>
                </li>
                <li>
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
              <h4
                className={`${dmSans.className} mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white`}
              >
                Learn
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/start-right"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Start Right With AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upsell/build-your-own-ai-stack"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Build Your Own AI Stack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upsell/fresh-stack"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Fresh Stack
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className={`${dmSans.className} mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white`}
              >
                Company
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/about"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    About Sarah
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get Ask Sarah"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Ask Sarah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Privacy &amp; Data
                  </Link>
                </li>
                <li>
                  <a
                    href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get Contact"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Contact
                  </a>
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
