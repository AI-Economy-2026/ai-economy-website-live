import Link from "next/link";
import { DM_Sans, Poppins } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";

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

function BrandLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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

function CheckIcon() {
  return (
    <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#1D9E75] text-white">
      <svg
        viewBox="0 0 24 24"
        className="h-3 w-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export default function LLMComparisonPage() {
  return (
    <div
      className={`${poppins.variable} ${dmSans.variable} bg-white font-[var(--font-poppins)] text-[#444444] leading-[1.6] antialiased`}
    >
      <nav className="fixed inset-x-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-white/95 backdrop-blur-[12px]">
        <div className="relative mx-auto flex h-full w-full max-w-[1280px] items-center px-4">
          <Link
            href="/dashboard"
            className="block w-[150px] shrink-0 text-[#111111]"
            aria-label="AI Economy"
          >
            <BrandLogo className="h-auto w-full" />
          </Link>

          <ul className="hidden list-none items-center gap-8 min-[861px]:absolute min-[861px]:left-1/2 min-[861px]:flex min-[861px]:-translate-x-1/3">
            <li>
              <Link
                href="/llm-comparison"
                className="text-[14px] font-semibold text-[#004AAD]"
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
                className="ml-3 inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
                aria-label="Sarah Balmer on LinkedIn"
              >
                <FaLinkedin className="h-[20px] w-[20px]" />
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
              <FaLinkedin className="h-[20px] w-[20px]" />
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

      <section className="border-b border-[#E2E2E2] bg-white bg-[linear-gradient(#ECECEC_1px,transparent_1px),linear-gradient(90deg,#ECECEC_1px,transparent_1px)] bg-[size:40px_40px] px-8 pb-16 pt-[120px] text-center max-[860px]:pb-12 max-[860px]:pt-[104px]">
        <div className="mx-auto max-w-[1180px]">
          <div className="relative z-[1] mx-auto max-w-[760px]">
            <div className="mb-5 inline-block font-[var(--font-dm-sans)] text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              LLMs &amp; AI Search
            </div>
            <h1 className="mb-[18px] font-[var(--font-dm-sans)] text-[clamp(44px,6vw,72px)] font-black leading-[1] tracking-[-0.02em] text-[#111111]">
              Which AI  <span className="text-[#004AAD]"> Should You Use?</span>
            </h1>
            <p className="mx-auto mb-7 max-w-[620px] text-[17px] leading-[1.6] text-[#444444]">
              There are five large language models and one AI search engine
              worth knowing about right now. Here is what each one does, what it
              costs, and which ones I use every single day.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#777777]">
              {[
                "6 models compared",
                "Sarah's daily three",
                "Honest takes, straight answers",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E8890C]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 max-w-[760px]">
            <div className="mb-5 inline-block font-[var(--font-dm-sans)] text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              At A Glance
            </div>
            <h2 className="mb-4 font-[var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]">
              Compare All Six Side By Side.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              What each model is best for, whether it can search the web, what
              the paid plan costs, and how often I actually use it.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E2E2E2] bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)]">
            <table className="min-w-[900px] w-full border-collapse">
              <thead className="bg-[#FAFAFA]">
                <tr>
                  {[
                    "Model",
                    "Best For",
                    "Search",
                    "Paid Plan",
                    "Sarah Uses",
                    "",
                  ].map((head) => (
                    <th
                      key={head}
                      className={`border-b border-[#E2E2E2] px-2.5 py-[14px] text-left font-[var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[0.12em] text-[#777777] ${head === "Best For" ? "whitespace-nowrap min-w-[250px]" : ""}`}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Claude",
                    by: "Anthropic",
                    best: "Writing, analysis, coding, reasoning",
                    price: "US$20/mo (Pro)",
                    usage: "Daily",
                    fav: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
                    learn: "#claude-deep",
                    visit: "https://claude.ai",
                    pick: true,
                  },
                  {
                    name: "ChatGPT",
                    by: "OpenAI",
                    best: "General purpose, images, custom GPTs",
                    price: "US$20/mo (Plus)",
                    usage: "Daily",
                    fav: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
                    learn: "#chatgpt-deep",
                    visit: "https://chatgpt.com",
                    pick: true,
                  },
                  {
                    name: "Perplexity",
                    by: "Perplexity AI",
                    best: "Real-time research with cited sources",
                    price: "US$20/mo (Pro)",
                    usage: "Daily",
                    fav: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
                    learn: "#perplexity-deep",
                    visit: "https://perplexity.ai",
                    pick: true,
                  },
                  {
                    name: "Copilot",
                    by: "Microsoft",
                    best: "Microsoft 365 integration, enterprise",
                    price: "Included with M365",
                    usage: "Occasional",
                    fav: "https://www.google.com/s2/favicons?domain=copilot.microsoft.com&sz=128",
                    visit: "https://copilot.microsoft.com",
                    pick: false,
                  },
                  {
                    name: "Gemini",
                    by: "Google DeepMind",
                    best: "Google Workspace, multimodal tasks",
                    price: "US$19.99/mo",
                    usage: "Occasional",
                    fav: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128",
                    visit: "https://gemini.google.com",
                    pick: false,
                  },
                  {
                    name: "Grok",
                    by: "xAI",
                    best: "Real-time X data, trending topics",
                    price: "Included with X Premium",
                    usage: "Occasional",
                    fav: "https://www.google.com/s2/favicons?domain=x.ai&sz=128",
                    visit: "https://grok.com",
                    pick: false,
                  },
                ].map((model) => (
                  <tr
                    key={model.name}
                    className={`${model.pick ? "bg-[rgba(232,137,12,0.04)] hover:bg-[rgba(232,137,12,0.08)]" : "hover:bg-[#FAFAFA]"} transition-colors`}
                  >
                    <td className="border-b border-[#E2E2E2] px-2.5 py-5 align-middle">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[9px] border border-[#E2E2E2] bg-[#FAFAFA] p-1.5">
                          <img
                            src={model.fav}
                            alt={model.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-[var(--font-dm-sans)] text-[16px] font-black leading-[1.15] text-[#111111]">
                            {model.name}
                          </div>
                          <div className="mt-0.5 text-[11px] tracking-[0.02em] text-[#777777]">
                            {model.by}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className={`border-b border-[#E2E2E2] pl-2.5 pr-1.5 py-5 text-[14px] leading-[1.45] text-[#444444] ${["ChatGPT", "Perplexity", "Copilot", "Gemini"].includes(model.name) ? "" : "whitespace-nowrap"}`}
                    >
                      {model.name === "ChatGPT" ? (
                        <>
                          General purpose, images, custom
                          <br />
                          GPTs
                        </>
                      ) : model.name === "Perplexity" ? (
                        <>
                          Real-time research with cited
                          <br />
                          sources
                        </>
                      ) : model.name === "Copilot" ? (
                        <>
                          Microsoft 365 integration,
                          <br />
                          enterprise
                        </>
                      ) : model.name === "Gemini" ? (
                        <>
                          Google Workspace, multimodal
                          <br />
                          tasks
                        </>
                      ) : (
                        model.best
                      )}
                    </td>
                    <td className="border-b border-[#E2E2E2] pl-1.5 pr-2.5 py-5">
                      <CheckIcon />
                    </td>
                    <td className="border-b border-[#E2E2E2] px-2.5 py-5 text-[14px] text-[#444444]">
                      {model.price}
                    </td>
                    <td className="border-b border-[#E2E2E2] px-2.5 py-5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-[11px] py-[5px] font-[var(--font-dm-sans)] text-[11px] font-bold uppercase tracking-[0.08em] ${model.usage === "Daily" ? "bg-[rgba(232,137,12,0.15)] text-[#E8890C]" : "bg-[#F0F0F0] text-[#444444]"}`}
                      >
                        <span className="h-[5px] w-[5px] rounded-full bg-current" />
                        {model.usage}
                      </span>
                    </td>
                    <td className="border-b border-[#E2E2E2] px-2.5 py-5 align-middle">
                      <div className="flex flex-col items-start gap-1.5">
                        {model.learn ? (
                          <a
                            href={model.learn}
                            className="inline-flex whitespace-nowrap rounded-full border border-[#D8DCE3] bg-white px-4 py-1 text-center text-[12px] font-semibold text-[#004AAD] transition-all hover:border-[#004AAD] hover:bg-[#004AAD] hover:text-white"
                          >
                            Learn More
                          </a>
                        ) : null}
                        <a
                          href={model.visit}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex whitespace-nowrap rounded-full border border-[#D8DCE3] bg-white px-3.5 py-1 text-center text-[12px] font-semibold text-[#004AAD] transition-all hover:border-[#004AAD] hover:bg-[#004AAD] hover:text-white"
                        >
                          Visit
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E2E2E2] bg-[#FAFAFA] px-8 py-[72px]">
        <div className="mx-auto max-w-[1180px]">
          <div className="relative mx-auto max-w-[780px] rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-white px-12 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,0.15)]">
            <span className="pointer-events-none absolute left-7 top-[-12px] font-[var(--font-dm-sans)] text-[110px] font-black leading-none text-[#E8890C]">
              &ldquo;
            </span>
            <span className="block font-[var(--font-dm-sans)] text-[clamp(20px,2.2vw,26px)] font-black leading-[1.3] tracking-[-0.01em] text-[#111111]">
              I use Claude, ChatGPT and Perplexity every single day, each for
              different things. Claude is ridiculously capable and getting
              better by the day. These three support me. Combined with the rest
              of my stack I can tackle basically everything.
            </span>
            <div className="mt-6 flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] font-[var(--font-dm-sans)] text-[12px] font-bold uppercase tracking-[0.14em] text-[#E8890C]">
              <span className="h-[2px] w-7 bg-[#E8890C]" />
              Sarah&apos;s Take
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111111] px-8 py-[88px] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-[1] mx-auto max-w-[780px] text-center">
          <div className="mb-5 inline-block font-[var(--font-dm-sans)] text-[12px] font-bold uppercase tracking-[0.14em] text-[#E8890C]">
            Build Your Stack
          </div>
          <h2 className="mb-[18px] font-[var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-white">
            Unlock The AI Tool Dashboard.
          </h2>
          <p className="mb-8 text-[17px] leading-[1.6] text-white/85">
            One place to track, manage and star every AI tool you use. Built
            around the daily three plus everything else worth running. One
            payment, lifetime access.
          </p>
          <div className="mb-7 inline-flex items-baseline gap-2 rounded-full border border-white/20 px-5 py-2.5">
            <span className="font-[var(--font-dm-sans)] text-[22px] font-black">
              $27
            </span>
            <span className="text-[11px] uppercase tracking-[0.06em] text-white/65">
              USD · ONE-TIME
            </span>
          </div>
          <div>
            <Link
              href="/toolkit/cluster"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#111111] transition hover:-translate-y-px hover:bg-[#E6F1FB]"
            >
              Unlock The Dashboard
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] px-8 py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-12 max-w-[760px]">
            <div className="mb-5 inline-block font-[var(--font-dm-sans)] text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              Go Deeper
            </div>
            <h2 className="mb-4 font-[var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]">
              Explore Each Model.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              A closer look at what the daily three do best. The features that
              matter, what they cost, and where each one fits in a working AI
              stack.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 min-[721px]:grid-cols-2 min-[1081px]:grid-cols-3">
            {[
              {
                id: "claude-deep",
                name: "Claude",
                by: "by Anthropic",
                tag: "My Pick",
                desc: "The most capable AI for long-form writing, deep analysis, nuanced reasoning and coding. My number one tool every day.",
                features: [
                  "Projects for organised workspaces",
                  "Artifacts for live document creation",
                  "Claude Code for developers",
                  "Computer Use & Cowork",
                  "Web search & connectors",
                ],
                price: "Pro: US$20/mo",
                link: "/toolkit/claude-deep-dive",
                fav: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
                pick: true,
              },
              {
                id: "chatgpt-deep",
                name: "ChatGPT",
                by: "by OpenAI",
                desc: "The most widely used AI. Strong on general tasks, native image generation, custom GPTs and voice mode for hands-free chat.",
                features: [
                  "GPT-4o with vision and voice",
                  "Native image generation built in",
                  "Custom GPTs & plugin store",
                  "Code interpreter & analysis",
                  "Web browsing & file uploads",
                ],
                price: "Plus: US$20/mo",
                link: "/toolkit/chatgpt-deep-dive",
                fav: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
              },
              {
                id: "perplexity-deep",
                name: "Perplexity",
                by: "by Perplexity AI",
                desc: "AI search engine with real-time web access and cited sources. Not an LLM, but essential alongside one for current research.",
                features: [
                  "Real-time web search with citations",
                  "Focus modes for different research",
                  "Collections for organising research",
                  "Comet AI browser",
                  "Follow-up questions for deeper research",
                ],
                price: "Pro: US$20/mo",
                link: "/toolkit/perplexity-deep-dive",
                fav: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
              },
            ].map((model) => (
              <div
                key={model.name}
                id={model.id}
                className={`flex h-full flex-col rounded-[18px] border bg-white p-9 transition duration-200 hover:-translate-y-1 hover:border-[#004AAD] hover:shadow-[0_24px_50px_-24px_rgba(0,74,173,0.18)] ${model.pick ? "border-[#E8890C]" : "border-[#E2E2E2]"}`}
              >
                <div className="mb-5 flex items-center gap-[14px]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[11px] border border-[#E2E2E2] bg-[#FAFAFA] p-2">
                    <img
                      src={model.fav}
                      alt={model.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-[var(--font-dm-sans)] text-[22px] font-black leading-[1.15] text-[#111111]">
                      {model.name}
                    </h3>
                    <div className="mt-0.5 text-[12px] leading-[1.2] tracking-[0.02em] text-[#777777]">
                      {model.by}
                    </div>
                  </div>
                </div>
                {model.tag ? (
                  <span className="mb-3 inline-block w-fit rounded-full bg-[rgba(232,137,12,0.15)] px-[11px] py-[5px] font-[var(--font-dm-sans)] text-[10px] font-bold uppercase tracking-[0.12em] text-[#E8890C]">
                    {model.tag}
                  </span>
                ) : null}
                <p className="mb-5 text-[14px] leading-[1.6] text-[#444444]">
                  {model.desc}
                </p>
                <ul className="mb-6 flex-1">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 border-b border-[#E2E2E2] py-2.5 text-[13px] leading-[1.5] text-[#444444] last:border-none"
                    >
                      <span className="mt-[3px] inline-flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#004AAD]">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-[9px] w-[9px]"
                          fill="none"
                          stroke="white"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center justify-between gap-[14px] border-t border-[#E2E2E2] pt-[18px]">
                  <div className="text-[12px] leading-[1.4] text-[#777777]">
                    Free{" "}
                    <strong className="mt-0.5 block font-semibold text-[#111111]">
                      {model.price}
                    </strong>
                  </div>
                  <Link
                    href={model.link}
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#004AAD] px-7 py-3.5 text-[14px] font-semibold text-white transition hover:-translate-y-px hover:bg-[#003A8C]"
                  >
                    Deep Dive →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-white px-8 py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 max-w-[760px]">
            <div className="mb-5 inline-block font-[var(--font-dm-sans)] text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              Also Worth Knowing
            </div>
            <h2 className="mb-4 font-[var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]">
              Other Models In The Mix.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              Strong tools that make sense if you are already in the ecosystem.
              Less useful as a daily driver, more useful as a specialist.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 min-[861px]:grid-cols-3">
            {[
              {
                name: "Microsoft Copilot",
                by: "by Microsoft",
                desc: "AI baked into Microsoft 365. Word, Excel, Outlook & Teams. Native to where Microsoft users already work daily. Best fit for enterprise teams already on the M365 stack.",
                price: "Included with M365",
                strong: "Pro: US$20/mo",
                href: "https://copilot.microsoft.com",
                fav: "https://www.google.com/s2/favicons?domain=copilot.microsoft.com&sz=128",
              },
              {
                name: "Gemini",
                by: "by Google DeepMind",
                desc: "Google's AI with native Workspace, Docs & Gmail integration. Strong on multimodal tasks across text, image, audio and video. The natural fit if you live in Google Workspace.",
                price: "Free",
                strong: "Advanced: US$19.99/mo",
                href: "https://gemini.google.com",
                fav: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128",
              },
              {
                name: "Grok",
                by: "by xAI",
                desc: "Live access to X, real-time trending topics & breaking news. Best for what is happening right now. A specialist tool for live social and news context, not a general-purpose AI.",
                price: "Included with",
                strong: "X Premium",
                href: "https://grok.com",
                fav: "https://www.google.com/s2/favicons?domain=x.ai&sz=128",
              },
            ].map((other) => (
              <div
                key={other.name}
                className="flex h-full flex-col rounded-[14px] border border-[#E2E2E2] bg-white p-6 transition hover:-translate-y-[3px] hover:border-[#004AAD] hover:shadow-[0_16px_30px_-18px_rgba(0,0,0,0.1)]"
              >
                <div className="mb-[14px] flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[9px] border border-[#E2E2E2] bg-[#FAFAFA] p-1.5">
                    <img
                      src={other.fav}
                      alt={other.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-[var(--font-dm-sans)] text-[17px] font-black leading-[1.15] text-[#111111]">
                      {other.name}
                    </h3>
                    <div className="mt-0.5 text-[11px] text-[#777777]">
                      {other.by}
                    </div>
                  </div>
                </div>
                <p className="mb-4 flex-1 text-[13px] leading-[1.55] text-[#444444]">
                  {other.desc}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-[#E2E2E2] pt-[14px] text-[12px] text-[#777777]">
                  <div>
                    {other.price}
                    <strong className="mt-0.5 block font-semibold text-[#111111]">
                      {other.strong}
                    </strong>
                  </div>
                  <a
                    href={other.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap text-[12px] font-semibold text-[#004AAD]"
                  >
                    Visit →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] px-8 py-[72px]">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] rounded-2xl border border-[#E2E2E2] bg-white px-10 py-9 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.1)]">
            <div className="mb-[18px] flex items-center gap-[14px]">
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#E6F1FB] text-[#004AAD]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-[var(--font-dm-sans)] text-[20px] font-black leading-[1.2] text-[#111111]">
                A Note On Free Plans.
              </h3>
            </div>
            <p className="text-[15px] leading-[1.7] text-[#444444]">
              Free tiers are great for testing, but they often train on your
              data by default. For business use, a paid plan gives you better
              privacy controls, higher usage limits and compliance options. I
              always recommend checking the data and privacy settings on day one
              before putting any client or business information into any AI
              tool.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-white px-8 py-[88px] text-center">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[680px]">
            <div className="mb-5 inline-block font-[var(--font-dm-sans)] text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]">
              Ready To Build Your Stack?
            </div>
            <h2 className="mb-[18px] font-[var(--font-dm-sans)] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]">
              Pick Your Tools. Make It Yours.
            </h2>
            <p className="mb-8 text-[16px] text-[#444444]">
              Create a free dashboard to track the tools you actually use, or
              unlock the full AI Tool Dashboard for $27. Either way, your stack
              stays in one place.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-[14px]">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-[#004AAD] px-7 py-3.5 text-[14px] font-semibold text-white transition hover:-translate-y-px hover:bg-[#003A8C]"
              >
                Learn more →
              </Link>
              <Link
                href="/toolkit/cluster"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#111111] px-7 py-3.5 text-[14px] font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
              >
                Unlock The Dashboard · $27 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] px-8 pb-8 pt-[72px] text-white">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-14 grid grid-cols-1 gap-12 min-[861px]:grid-cols-2 min-[861px]:gap-8 min-[861px]:[&>*:first-child]:col-span-2 min-[1040px]:grid-cols-[1.5fr_1fr_1fr_1fr] min-[1040px]:[&>*:first-child]:col-span-1">
            <div>
              <Link
                href="/"
                className="mb-5 block w-40 text-white"
                aria-label="AI Economy"
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
              <h4 className="mb-[18px] font-[var(--font-dm-sans)] text-[12px] font-bold uppercase tracking-[0.14em] text-white">
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
              <h4 className="mb-[18px] font-[var(--font-dm-sans)] text-[12px] font-bold uppercase tracking-[0.14em] text-white">
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
              <h4 className="mb-[18px] font-[var(--font-dm-sans)] text-[12px] font-bold uppercase tracking-[0.14em] text-white">
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                    target="_blank"
                    rel="noopener noreferrer"
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
    </div>
  );
}
