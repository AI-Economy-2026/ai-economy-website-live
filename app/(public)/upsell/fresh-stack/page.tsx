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

export const metadata = {
  title: "Fresh Stack | Stay Current With AI | AI Economy",
  description:
    "AI tools change every week. Fresh Stack keeps your toolkit current with monthly updates, new tool reviews and honest recommendations. $17 USD/month.",
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function BurgerIcon() {
  return (
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
  );
}

function BrandLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-70.40 -827.40 6209.80 954.80"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <title>AI Economy</title>
      <g fill="currentColor">
        <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" />
        <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
      </g>
    </svg>
  );
}

export default function FreshStackPage() {
  return (
    <main
      className={`${poppins.variable} ${dmSans.variable} bg-white text-[#444444] antialiased`}
    >
      <style>{`
        .font-dm {
          font-family: var(--font-dm-sans), sans-serif;
        }
        .font-p {
          font-family: var(--font-poppins), sans-serif;
        }
      `}</style>

      <nav className="fixed left-0 right-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-white/[0.97] backdrop-blur-[12px]">
        <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-8">
          <Link
            href="/dashboard"
            aria-label="AI Economy"
            className="block w-[150px] shrink-0 text-[#111111]"
          >
            <BrandLogo className="h-auto w-full" />
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
                className="text-[14px] font-medium text-[#111111] transition-colors hover:text-[#004AAD]"
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
                rel="noopener"
                className="ml-3 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
                aria-label="Sarah Balmer on LinkedIn"
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://www.linkedin.com/in/SarahBalmer"
              target="_blank"
              rel="noopener"
              className="mr-2 inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#004AAD] text-white"
              aria-label="Sarah Balmer on LinkedIn"
            >
              <LinkedInIcon className="h-[17px] w-[17px]" />
            </a>
            <button
              aria-label="Menu"
              className="inline-flex cursor-pointer items-center bg-transparent p-2 text-[#111111]"
              type="button"
            >
              <BurgerIcon />
            </button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-white pb-24 pt-32">
        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(#ECECEC_1px,transparent_1px),linear-gradient(90deg,#ECECEC_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative z-[1] mx-auto max-w-[1180px] px-8">
          <div className="grid items-center gap-16 min-[961px]:grid-cols-[1.05fr_.95fr] max-[960px]:gap-12">
            <div>
              <div className="mb-[18px] flex flex-wrap items-center gap-[10px]">
                <span className="font-dm text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                  Stay Current
                </span>
                <span className="font-dm inline-block rounded-full bg-[#E8890C] px-[11px] py-[5px] text-[10px] font-black uppercase tracking-[0.14em] text-white">
                  $17 Sale Price
                </span>
              </div>
              <h1 className="font-dm mb-2 text-[clamp(48px,7vw,88px)] font-black leading-[1] tracking-[-0.03em] text-[#111111]">
                Fresh Stack.
              </h1>
              <p className="font-dm mb-[22px] text-[clamp(22px,2.6vw,30px)] font-black leading-[1.15] tracking-[-0.01em] text-[#111111]">
                Your AI Toolkit,{" "}
                <span className="text-[#004AAD]">Always Current.</span>
              </p>
              <p className="mb-7 max-w-[540px] text-[17px] leading-[1.65] text-[#444444]">
                AI tools change every week. Pricing shifts, new tools launch,
                old ones fall behind, and your stack quietly becomes the wrong
                stack.{" "}
                <strong>
                  That&apos;s why Fresh Stack doesn&apos;t let that happen.
                </strong>
              </p>
              <div className="mb-8 flex flex-wrap gap-x-7 gap-y-[18px] text-[13px] text-[#444444]">
                <span className="inline-flex items-center gap-2 before:block before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#1D9E75]">
                  Monthly updates
                </span>
                <span className="inline-flex items-center gap-2 before:block before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#1D9E75]">
                  Cancel any time
                </span>
                <span className="inline-flex items-center gap-2 before:block before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#1D9E75]">
                  No lock in
                </span>
              </div>
              <div className="mb-[18px] flex flex-wrap items-baseline gap-[18px]">
                <span className="font-dm text-[24px] font-bold text-[#777777] line-through">
                  $37
                </span>
                <span className="font-dm text-[48px] font-black leading-none tracking-[-0.02em] text-[#111111]">
                  $17
                  <span className="ml-1 text-[14px] font-bold text-[#777777]">
                    USD/mo
                  </span>
                </span>
                <span className="font-dm inline-flex self-center whitespace-nowrap rounded-full bg-[rgba(232,137,12,.15)] px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[0.1em] text-[#E8890C]">
                  Save $20
                </span>
              </div>
              <div className="mb-[14px] flex flex-wrap items-center gap-4">
                <a
                  href="https://aieconomy.thrivecart.com/fresh-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-[10px] whitespace-nowrap rounded-full bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-[#003A8C] hover:[&>span]:translate-x-1"
                >
                  Join Fresh Stack{" "}
                  <span className="inline-block transition-transform">→</span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex cursor-pointer items-center whitespace-nowrap rounded-full border-[1.5px] border-[#111111] bg-transparent px-7 py-[14px] text-[14px] font-semibold text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
                >
                  How It Works
                </a>
              </div>
              <p className="text-[12px] text-[#777777]">
                Instant access · Cancel any time · No lock in
              </p>
            </div>
            <div className="flex w-full items-center justify-center">
              <img
                src="/assets/fresh-stack-mockup.jpg"
                alt="A monthly Fresh Stack email landing in your inbox with new tools, pricing changes and updates"
                loading="eager"
                className="block h-auto w-full max-w-[360px] object-contain mix-blend-multiply max-[960px]:max-w-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <div className="font-dm mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              The Difference
            </div>
            <h2 className="font-dm mb-[14px] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]">
              Without Fresh Stack vs With Fresh Stack.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              AI moves fast. The cost of falling behind is real. Here is what
              changes when you let me do the research for you.
            </p>
          </div>
          <div className="mx-auto grid max-w-[1080px] gap-6 min-[861px]:grid-cols-2">
            <div className="rounded-[18px] border border-[#E2E2E2] bg-white p-9">
              <span className="font-dm mb-6 inline-flex items-center gap-2 rounded-full bg-[rgba(220,38,38,.1)] px-[14px] py-[6px] text-[11px] font-black uppercase tracking-[0.12em] text-[#DC2626]">
                Without Fresh Stack
              </span>
              <h3 className="font-dm mb-5 text-[22px] font-black leading-[1.2] text-[#111111]">
                You Are Always A Step Behind.
              </h3>
              <ul className="list-none">
                {[
                  "You find out a tool changed its pricing after you have already committed.",
                  "You miss new tools that could save you hours every week.",
                  "You waste time researching changes yourself.",
                  "Your toolkit goes stale without you realising.",
                  "You stick with tools that are no longer the best option.",
                ].map((item) => (
                  <li
                    key={item}
                    className="relative border-b border-black/5 py-[10px] pl-8 pr-0 text-[14.5px] leading-[1.55] text-[#444444] last:border-b-0"
                  >
                    <span className="absolute left-0 top-[13px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(220,38,38,.12)] text-[#DC2626]">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[18px] border border-[rgba(0,74,173,.15)] bg-[#E6F1FB] p-9">
              <span className="font-dm mb-6 inline-flex items-center gap-2 rounded-full bg-[rgba(29,158,117,.15)] px-[14px] py-[6px] text-[11px] font-black uppercase tracking-[0.12em] text-[#1D9E75]">
                With Fresh Stack
              </span>
              <h3 className="font-dm mb-5 text-[22px] font-black leading-[1.2] text-[#111111]">
                Your Stack Always Reflects What Works.
              </h3>
              <ul className="list-none">
                {[
                  "You know about pricing changes before they affect you.",
                  "New tools land in your toolkit as soon as they are worth using.",
                  "Someone else does the research for you every month.",
                  "Your toolkit always reflects what actually works right now.",
                  "You get honest recommendations on what to switch to and what to avoid.",
                ].map((item) => (
                  <li
                    key={item}
                    className="relative border-b border-black/5 py-[10px] pl-8 pr-0 text-[14.5px] leading-[1.55] text-[#444444] last:border-b-0"
                  >
                    <span className="absolute left-0 top-[13px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1D9E75] text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-[640px] text-center">
            <a
              href="https://aieconomy.thrivecart.com/fresh-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] rounded-full bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white transition-all hover:-translate-y-[1px] hover:bg-[#003A8C] hover:[&>span]:translate-x-1"
            >
              Join Fresh Stack · $17/mo{" "}
              <span className="inline-block transition-transform">→</span>
            </a>
            <p className="mt-[14px] text-[13px] tracking-[0.02em] text-[#777777]">
              Cancel any time · No lock in.
            </p>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-t border-[#E2E2E2] bg-white py-24"
      >
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="mb-12 max-w-[760px]">
            <div className="font-dm mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              How It Works
            </div>
            <h2 className="font-dm mb-[14px] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]">
              Four Steps. Zero Effort.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              Sign up once and Fresh Stack does the rest. Every month, the
              tools, the pricing changes, and the recommendations land in your
              inbox and your toolkit.
            </p>
          </div>
          <div className="grid gap-[18px] min-[561px]:grid-cols-2 min-[961px]:grid-cols-4">
            {[
              [
                "01",
                "Join",
                "Sign up for $17 USD per month. Cancel any time, no lock in.",
              ],
              [
                "02",
                "Receive",
                "Monthly updates land in your inbox and your toolkit dashboard.",
              ],
              [
                "03",
                "Review",
                "See what changed, what launched, and what to avoid this month.",
              ],
              [
                "04",
                "Stay Ahead",
                "Your AI stack always reflects what actually works right now.",
              ],
            ].map(([num, title, desc]) => (
              <div
                key={num}
                className="flex h-full flex-col rounded-2xl border border-[#E2E2E2] bg-[#FAFAFA] p-7 transition-all hover:-translate-y-[3px] hover:border-[#004AAD]"
              >
                <div className="font-dm mb-[14px] text-[36px] font-black leading-none tracking-[-0.04em] text-[#E8890C]">
                  {num}
                </div>
                <h3 className="font-dm mb-2 text-[18px] font-black leading-[1.25] text-[#111111]">
                  {title}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-[#444444]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="mx-auto grid max-w-[1080px] items-start gap-16 min-[861px]:grid-cols-[1fr_1.3fr]">
            <div>
              <div className="font-dm mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
                What You Get Every Month
              </div>
              <h2 className="font-dm mb-[14px] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]">
                Stay Current Without The Research.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#444444]">
                A monthly snapshot of what changed, what launched, and what is
                now worth using. Built into your toolkit so you can act on it
                the same day.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E2E2E2] bg-white p-9">
              <ul className="list-none">
                {[
                  "<strong>Monthly updates</strong> when tools change, launch, or disappear.",
                  "<strong>New tool reviews</strong> added to your toolkit automatically.",
                  "<strong>Updated pricing</strong> and plan recommendations across the stack.",
                  "<strong>Sarah&apos;s take</strong> on what is worth switching to and what to avoid.",
                  "<strong>Cancel any time.</strong> No lock in, no hidden fees, no contracts.",
                ].map((item) => (
                  <li
                    key={item}
                    className="relative border-b border-[#E2E2E2] py-[14px] pl-9 text-[15px] leading-[1.55] text-[#444444] last:border-b-0"
                  >
                    <span className="absolute left-0 top-[18px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1D9E75] text-white">
                      ✓
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-white py-24">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="relative mx-auto max-w-[840px] rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-white px-12 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,.15)]">
            <span className="font-dm pointer-events-none absolute left-7 top-[-12px] text-[110px] font-black leading-none text-[#E8890C]">
              “
            </span>
            <span className="font-dm block text-[clamp(20px,2.2vw,26px)] font-black leading-[1.35] tracking-[-0.01em] text-[#111111]">
              I test tools every single week. Fresh Stack means you get the
              benefit of that without doing the work yourself. The toolkit stays
              current. You stay ahead. Everyone wins.
            </span>
            <div className="font-dm mt-6 flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-[#E8890C]">
              <span className="inline-block h-[2px] w-7 bg-[#E8890C]" />
              Sarah&apos;s Take
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111111] py-24 text-white">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative z-[1] mx-auto max-w-[1180px] px-8">
          <div className="mx-auto max-w-[780px] text-center">
            <div className="font-dm mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#E8890C]">
              Stop Falling Behind
            </div>
            <h2 className="font-dm mb-4 text-[clamp(36px,5vw,56px)] font-black leading-[1.1] tracking-[-0.01em] text-white">
              Your Stack,{" "}
              <span className="text-[#E8890C]">Always Current.</span>
            </h2>
            <p className="mx-auto mb-9 max-w-[600px] text-[17px] leading-[1.65] text-white/85">
              Sign up once. Cancel any time. Your AI toolkit stays up to date so
              you never have to think about it again. Just $17 USD a month for
              the work I am already doing.
            </p>
            <div className="mb-8 inline-flex flex-wrap items-baseline justify-center gap-[18px] rounded-full border border-white/10 bg-white/5 px-7 py-[18px]">
              <span className="font-dm text-[18px] font-bold text-white/40 line-through">
                $37
              </span>
              <span className="font-dm text-[32px] font-black leading-none text-white">
                $17
                <span className="ml-1 text-[13px] font-bold text-white/65">
                  USD/mo
                </span>
              </span>
              <span className="font-dm self-center rounded-full bg-[#E8890C] px-3 py-[5px] text-[10px] font-black uppercase tracking-[0.12em] text-white">
                Save $20
              </span>
            </div>
            <div>
              <a
                href="https://aieconomy.thrivecart.com/fresh-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[10px] rounded-full bg-white px-9 py-[18px] text-[15px] font-semibold text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#E6F1FB] hover:[&>span]:translate-x-1"
              >
                Join Fresh Stack Now{" "}
                <span className="inline-block transition-transform">→</span>
              </a>
            </div>
            <p className="mt-[18px] text-[13px] text-white/60">
              Starts immediately · Cancel any time · No lock in
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#111111] pb-8 pt-[72px] text-white">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="mb-14 grid grid-cols-1 gap-12 min-[861px]:grid-cols-2 min-[861px]:gap-8 min-[861px]:[&>*:first-child]:col-span-2 min-[1040px]:grid-cols-[1.5fr_1fr_1fr_1fr] min-[1040px]:[&>*:first-child]:col-span-1">
            <div>
              <Link
                href="/"
                aria-label="AI Economy"
                className="mb-5 block w-40 text-white"
              >
                <BrandLogo className="h-auto w-full" />
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
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/llm-comparison"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // aria-label="LLM Comparison"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    LLM Comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/toolkit/cluster"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // aria-label="All Tools"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    All Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-tips"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // aria-label="AI Tips"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    AI Tips
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // aria-label="Dashboard"
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
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/start-right"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // aria-label="Start Right With AI"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Start Right With AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upsell/build-your-own-ai-stack"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // aria-label="Build Your Own AI Stack"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Build Your Own AI Stack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upsell/fresh-stack"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // aria-label="Fresh Stack"
                    className="text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    Fresh Stack
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-dm mb-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-white">
                Company
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/about"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // aria-label="About Sarah"
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
                  <Link
                    href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact"
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
    </main>
  );
}
