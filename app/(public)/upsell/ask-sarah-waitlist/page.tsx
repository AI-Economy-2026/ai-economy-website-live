import Link from "next/link";
import { DM_Sans, Poppins } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["700", "900"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const problemCards = [
  {
    before: "You open Claude or ChatGPT and stare at the blank box, not sure ",
    strong: "where to start",
    after: ".",
  },
  {
    before: "You have a task in front of you and no idea ",
    strong: "which AI tool is the right one",
    after: " for it.",
  },
  {
    before: "You try a prompt, get a flat answer, and do not know ",
    strong: "how to make it better",
    after: ".",
  },
  {
    before: "You read about a new feature or tool and cannot tell if ",
    strong: "you actually need it",
    after: ".",
  },
  {
    before:
      "You want AI to sound like you, not like a robot, and have no idea ",
    strong: "how to set that up",
    after: ".",
  },
  {
    before: "You feel like everyone else is winning with AI and you are ",
    strong: "the only one still confused",
    after: ".",
  },
];

const askCards = [
  {
    q: '"Which AI gives me the most up to date info?"',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[16px] w-[16px]">
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 16L21 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    q: '"Should I get Claude Pro or wait?"',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[16px] w-[16px]">
        <path
          d="M8 3.5H15L20 8.5V20.5H8C6.9 20.5 6 19.6 6 18.5V5.5C6 4.4 6.9 3.5 8 3.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M15 3.5V8.5H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    q: '"Is Claude or ChatGPT better for strategy work?"',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[16px] w-[16px]">
        <path
          d="M4 18.5H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6.5 15V10.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11.5 15V6.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16.5 15V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    q: '"How do I get my brand voice into Claude?"',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[16px] w-[16px]">
        <path
          d="M12 19.5C16.5 19.5 20 16.2 20 12C20 7.8 16.5 4.5 12 4.5C7.5 4.5 4 7.8 4 12C4 13.4 4.4 14.7 5.2 15.8L4.5 19.5L8.4 18.6C9.5 19.2 10.7 19.5 12 19.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    q: '"Is it safe to put client info into ChatGPT?"',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[16px] w-[16px]">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 8V12L14.8 13.8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    q: '"I just got Claude. Where do I start?"',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[16px] w-[18px]">
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 4V6.3M12 17.7V20M20 12H17.7M6.3 12H4M17.7 6.3L16.1 7.9M7.9 16.1L6.3 17.7M17.7 17.7L16.1 16.1M7.9 7.9L6.3 6.3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Is this Sarah herself or a chatbot?",
    a: (
      <>
        It is an AI chatbot trained on everything I have ever taught, written,
        or recorded about AI. It answers in my voice, with my opinions, on the
        topics I cover.{" "}
        <strong className="font-bold text-[#111111]">
          For private 1:1 strategy you would book a Priority AI Audit instead.
        </strong>{" "}
        Ask Sarah is for the questions that come up daily that do not warrant a
        call.
      </>
    ),
  },
  {
    q: "What can I ask Sarah about?",
    a: (
      <>
        Ask Sarah is built for the questions that come up while you are
        figuring out AI. Which tool to use for what, whether to subscribe and
        at which tier, what is and is not safe to put into the models, how to
        set things up, where to start.{" "}
        <strong className="font-bold text-[#111111]">
          It is not a general-purpose chatbot and it will not do your work for
          you.
        </strong>{" "}
        If you ask something outside its world (writing your content, building
        workflows, technical engineering, legal, medical, financial advice,
        off-topic chat), it will tell you so and point you somewhere better.
      </>
    ),
  },
  {
    q: "How fast are the replies?",
    a: (
      <>
        Instant. It is an AI chatbot, so replies arrive in seconds.{" "}
        <strong className="font-bold text-[#111111]">
          Available 24 hours a day, every day, including weekends and public
          holidays.
        </strong>
      </>
    ),
  },
  {
    q: "Why is it called Ask Sarah if it is a chatbot?",
    a: "Because it is trained exclusively on my content and answers in my voice. It will not give you generic ChatGPT answers. It gives you my answers. The same opinions, the same recommendations, the same tone.",
  },
  // {
  //   q: "Is there a money back guarantee?",
  //   a: "The Dashboard is your toolkit, a curated list of every AI tool worth knowing with my honest take on each. Ask Sarah is the chatbot you ask questions to. They work best together. Most people start with the Dashboard then add Ask Sarah when they realise they need quick answers as they go.",
  // },
  {
    q: "How is this different from the AI Tool Dashboard?",
    a: (
      <>
        The Dashboard is your toolkit, a curated list of every AI tool worth
        knowing with my honest take on each.{" "}
        <strong className="font-bold text-[#111111]">
          Ask Sarah is the chatbot you ask questions to.
        </strong>{" "}
        They work best together. Most people start with the Dashboard then add
        Ask Sarah when they realise they need quick answers as they go.
      </>
    ),
  },
  {
    q: "What happens after I express interest?",
    a: "You fill out a short form so I know who you are and what you do. Within 48 hours I reach out personally to confirm fit and send you a payment link. Onboarding takes five minutes after that.",
  },
];

function Logo({ white = false }: { white?: boolean }) {
  return (
    <span
      className={`block w-[150px] ${white ? "text-white" : "text-[#111111]"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-70.40 -827.40 6209.80 954.80"
        preserveAspectRatio="xMidYMid meet"
        className="block h-auto w-full"
      >
        <title>AI Economy</title>
        <g fill="currentColor">
          <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0" />
          <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
        </g>
      </svg>
    </span>
  );
}

export default function AskSarahWaitlistPage() {
  return (
    <main
      className={`${poppins.className} bg-white text-[#444444] antialiased`}
    >
      <nav className="fixed inset-x-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-white/95 backdrop-blur-[12px]">
        <div className="relative mx-auto flex h-full w-full max-w-[1280px] items-center px-4">
          <Link href="/dashboard" aria-label="AI Economy">
            <Logo />
          </Link>
          <ul className="hidden list-none items-center gap-8 min-[861px]:absolute min-[861px]:left-1/2 min-[861px]:flex min-[861px]:-translate-x-1/3">
            <li>
              <Link
                href="/llm-comparison"
                className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD]"
              >
                LLMs
              </Link>
            </li>
            <li>
              <Link
                href="/toolkit/cluster"
                className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD]"
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link
                href="/ai-tips"
                className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD]"
              >
                AI Tips
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/ask-sarah"
                className="text-[14px] font-semibold text-[#004AAD]"
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
                className="ml-1 inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
              >
                <FaLinkedin className="h-[16px] w-[16px]" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-[#E2E2E2] bg-white pb-24 pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(#ECECEC 1px,transparent 1px),linear-gradient(90deg,#ECECEC 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-8">
          <div className="grid items-center gap-16 md:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="mb-[18px] flex flex-wrap items-center gap-[10px]">
                <span
                  className={`${dmSans.className} text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
                >
                  Direct Access
                </span>
                <span
                  className={`${dmSans.className} rounded-full bg-[#E8890C] px-[11px] py-[5px] text-[10px] font-black uppercase tracking-[0.14em] text-white`}
                >
                  First 100 Only
                </span>
              </div>
              <h1
                className={`${dmSans.className} mb-[18px] text-[clamp(40px,5.5vw,64px)] font-black leading-[1.02] tracking-[-0.02em] text-[#111111]`}
              >
                Stuck On AI?{" "}
                <span className="text-[#004AAD]">Just Ask Sarah.</span>
              </h1>
              <p className="mb-7 max-w-[540px] text-[17px] leading-[1.65] text-[#444444]">
                An AI chatbot trained on my approach to AI tools, subscriptions,
                setup and use cases. Get specific answers in seconds, in my
                voice.{" "}
                <strong className="font-semibold text-[#111111]">
                  The fastest way to get unstuck and keep moving.
                </strong>
              </p>
              <div className="mb-8 flex flex-wrap gap-x-7 gap-y-[18px] text-[13px] text-[#444444]">
                {[
                  "Available 24/7",
                  "Trained on Sarah's content",
                  "One year access",
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
                  $297
                </span>
                <span
                  className={`${dmSans.className} text-5xl font-black leading-none tracking-[-0.02em] text-[#111111]`}
                >
                  $149{" "}
                  <span className="ml-[-6px] text-[14px] font-bold text-[#777777]">
                    USD/year
                  </span>
                </span>
                <span
                  className={`${dmSans.className} inline-flex rounded-full bg-[rgba(232,137,12,.15)] px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[0.1em] text-[#E8890C]`}
                >
                  Save $148
                </span>
              </div>
              <div className="mb-[14px] flex flex-wrap items-center gap-4">
                <a
                  href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="I&apos;m Interested"
                  className="inline-flex whitespace-nowrap rounded-full bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:bg-[#003A8C]"
                >
                  I&apos;m Interested <span className="ml-2">→</span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex whitespace-nowrap rounded-full border-[1.5px] border-[#111111] px-7 py-[14px] text-[14px] font-semibold text-[#111111] transition-colors hover:bg-[#111111] hover:text-white"
                >
                  How It Works
                </a>
              </div>
              <p className="text-xs text-[#777777]">
                Introductory offer. Limited to the first 100 registrations.
              </p>
            </div>

            <div className="ml-auto w-full max-w-[440px] rounded-[32px] border border-[#E2E2E2] bg-white p-7 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)]" aria-hidden="true">
              <div className="mb-[24px] flex items-center gap-3.5">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-[#f0f0f0] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.2)]">
                  <img
                    src="/assets/sarah-laptop.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className={`${dmSans.className} text-[16px] font-black text-[#111111] leading-tight`}>
                    Ask Sarah
                  </div>
                  <div className={`${dmSans.className} flex items-center gap-[6px] text-[10px] font-black uppercase tracking-[0.08em] text-[#1D9E75]`}>
                    <span className="h-2 w-2 rounded-full bg-[#1D9E75]" />
                    Online · Ready To Help
                  </div>
                </div>
              </div>

              <div className="mb-6 flex flex-col gap-4 text-[14px] leading-[1.55] text-[#111111]">
                <div className="ml-auto max-w-[85%] rounded-[20px] rounded-br-[4px] bg-[#004AAD] px-5 py-3.5 text-white shadow-md font-medium">
                  What is the best AI for the most up to date information on the internet?
                </div>

                <div className="max-w-[95%] rounded-[20px] border border-[#F0F0F0] bg-[#FAFAFA]/50 p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3 border-b border-[#F0F0F0] pb-3">
                    <span className={`${dmSans.className} font-black text-[#111111] text-[14px]`}>Sarah</span>
                    <span className="bg-[#E6F1FB] text-[#004AAD] text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                      Ask Sarah
                    </span>
                  </div>
                  <p className="text-[#444444] mb-5">
                    <strong className="font-bold text-[#111111]">Perplexity, hands down.</strong> It searches the live web and cites every source. Free tier is fine for everyday lookups, Pro unlocks the deeper research workflow.
                  </p>
                  <div className="relative overflow-hidden rounded-[8px] border border-[#F0F0F0] bg-white p-1 py-2 shadow-sm">
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] rounded-full bg-[#E8890C]" />
                    <div className="pl-1">
                      <div className={`${dmSans.className} text-[10px] font-black uppercase tracking-[0.1em] text-[#E8890C] mb-1.5`}>One Watch-Out</div>
                      <div className="text-[#444444] leading-relaxed">For long-form thinking and writing, you still want Claude. Use the right tool for the job.</div>
                    </div>
                  </div>
                </div>

                <div className="ml-auto max-w-[85%] rounded-[20px] rounded-br-[4px] bg-[#004AAD] px-5 py-3.5 text-white shadow-md font-medium">
                  How do I get my brand voice into Claude?
                </div>

                <div className="inline-flex gap-1.5 p-4 bg-[#FAFAFA] rounded-[18px] border border-[#F0F0F0] w-fit shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9b9b9b] animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9b9b9b] animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9b9b9b] animate-bounce"></span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-full border border-[#E2E2E2] bg-[#FAFAFA] px-2 py-2 shadow-inner">
                <span className="flex-1 text-[13.5px] text-[#777777] px-1 truncate">
                  Ask about AI tools, subscriptions or setup...
                </span>
                <button className="text-[#777777] hover:text-[#444444] transition-colors p-1" aria-label="Voice input">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#004AAD] text-white hover:bg-[#003A8C] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
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
              You Have A Question. Now What?
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              You have the tools. The toolkit is there. But every time you sit
              down to use them, you freeze. Which one for this? Where do I even
              start? Ask Sarah is the second pair of eyes that tells you exactly
              what to do, in plain English, the moment you need it.
            </p>
          </div>
          <div className="mx-auto grid max-w-[980px] gap-[18px] md:grid-cols-2">
            {problemCards.map((card) => (
              <div
                key={card.strong}
                className="flex items-start gap-[14px] rounded-[14px] border border-[#E2E2E2] bg-white px-7 py-6"
              >
                <span
                  className={`${dmSans.className} inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(220,38,38,.1)] text-lg font-black leading-none text-[#DC2626]`}
                >
                  !
                </span>
                <p className="text-[15px] leading-[1.6] text-[#444444]">
                  {card.before}
                  <strong className="font-semibold text-[#111111]">
                    {card.strong}
                  </strong>
                  {card.after}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-t border-[#E2E2E2] bg-white py-24"
      >
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-12 max-w-[760px]">
            <div
              className={`${dmSans.className} mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
            >
              How It Works
            </div>
            <h2
              className={`${dmSans.className} mb-[14px] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]`}
            >
              Trained On Me. Available For You.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              I built Ask Sarah because I wanted to help, and this felt like the
              easiest way to do it. So I am there the moment you need the
              answer, not three days later. Trained on my approach to AI tools
              and prompts, ready when you are.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Ask Your Question",
                desc: "Which tool to use, which subscription is worth it, what to put in (and what not to), how to set things up. Type it the same way you would ask a friend. The chatbot is trained on my content and only my content.",
              },
              {
                num: "02",
                title: "Get Real Answers",
                desc: "Specific, opinionated, in my voice. Not generic AI fluff. The same advice I would give a private client, available the moment you need it.",
              },
              {
                num: "03",
                title: "Use It Daily",
                desc: "Open Ask Sarah from your toolkit dashboard. No waitlist, no delays. Hit a roadblock at any hour and have a real answer in seconds.",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="rounded-2xl border border-[#E2E2E2] bg-[#FAFAFA] px-7 py-8 transition-all hover:border-[#004AAD]"
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
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-white py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative">
              <img
                src="/assets/me-mic.png"
                alt="Sarah Balmer, AI trainer and creator of Ask Sarah"
                className="w-full rounded-[24px] shadow-2xl shadow-black/10"
              />
            </div>
            <div>
              <div
                className={`${dmSans.className} mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
              >
                Trained On Me
              </div>
              <h2
                className={`${dmSans.className} mb-[18px] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]`}
              >
                The Voice Behind Ask Sarah.
              </h2>
              <p className="mb-6 text-[17px] leading-[1.7] text-[#444444]">
                Hi, I'm Sarah. AI trainer, strategist, and the brain Ask Sarah
                is trained on. Every answer it gives comes from my approach.{" "}
                <strong className="font-semibold text-[#111111]">
                  The same opinions, the same recommendations, the same plain
                  English I would give a private client.
                </strong>
              </p>
              <p className="mb-6 text-[17px] leading-[1.7] text-[#444444]">
                I built Ask Sarah because the questions never stop. Which tool,
                which subscription, what to type, what not to. You should not
                have to wait three days for an email reply or sit through a
                one-hour call to get a thirty-second answer.
              </p>
              <p className="mb-6 text-[17px] leading-[1.7] text-[#444444]">
                So now you do not have to. Ask the question, get my answer, keep
                moving.
              </p>
              <div className="mt-10 border-t border-[#E2E2E2] pt-8">
                <div>
                  <div
                    className={`${dmSans.className} text-[15px] font-bold text-[#111111]`}
                  >
                    Sarah Balmer
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.06em] text-[#777777]">
                    Founder, AI Economy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-12 max-w-[760px]">
            <div
              className={`${dmSans.className} mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
            >
              What You Can Ask
            </div>
            <h2
              className={`${dmSans.className} mb-[14px] text-[clamp(32px,4vw,48px)] font-black leading-[1.1] tracking-[-0.01em] text-[#111111]`}
            >
              Real Questions, Real Answers.
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#444444]">
              A taste of what Ask Sarah handles every day. The tool questions,
              the subscription questions, the setup questions, the privacy
              questions. The kind of thing you would ask a friend who knows AI.
            </p>
          </div>
          <div className="grid gap-[14px] md:grid-cols-2">
            {askCards.map((card) => (
              <div
                key={card.q}
                className="flex items-center gap-[14px] rounded-[14px] border border-[#E2E2E2] bg-white px-6 py-[20px] transition-colors duration-200 hover:border-[#004AAD]"
              >
                <span className="inline-flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[10px] bg-[#EEF4FF] text-[#2F6DB6]">
                  {card.icon}
                </span>
                <span
                  className={`${dmSans.className} text-[15px] font-bold leading-[1.35] text-[#111111]`}
                >
                  {card.q}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="I&apos;m Interested"
              className="inline-flex rounded-full bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white hover:bg-[#003A8C]"
            >
              I&apos;m Interested · $149/year <span className="ml-2">→</span>
            </a>
            <p className="mt-6 text-[13px] text-[#777777]">
              Introductory offer. Limited to the first 100 registrations.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-white py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="relative mx-auto max-w-[840px] rounded-[14px] border border-[#E2E2E2] border-l-4 border-l-[#E8890C] bg-white px-12 pb-9 pt-[52px]">
            <span
              className={`${dmSans.className} pointer-events-none absolute left-7 top-[-12px] text-[110px] font-black leading-none text-[#E8890C]`}
            >
              &ldquo;
            </span>
            <span
              className={`${dmSans.className} block text-[clamp(20px,2.2vw,26px)] font-black leading-[1.3] tracking-[-0.01em] text-[#111111]`}
            >
              I built Ask Sarah because I wanted to help. There are too many
              people sitting at their desks staring at AI tools, not sure where
              to start. This was the easiest way to be in your corner the moment
              you need the answer.
            </span>
            <div
              className={`${dmSans.className} mt-6 flex items-center gap-3 border-t border-[#E2E2E2] pt-[18px] text-[12px] font-bold uppercase tracking-[0.14em] text-[#E8890C]`}
            >
              <span className="h-0.5 w-7 bg-[#E8890C]" />
              Sarah&apos;s Take
            </div>
          </div>
        </div>
      </section>

      <section
        id="interested"
        className="border-t border-[#E2E2E2] bg-[#FAFAFA] py-24"
      >
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div
            className="relative mx-auto max-w-[800px] overflow-hidden rounded-[22px] bg-[#0B0B0D] px-10 py-[74px] text-center text-white md:px-14"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          >
            <div className="mx-auto max-w-[640px]">
              <span
                className={`${dmSans.className} mb-6 inline-block rounded-full bg-[#E8890C] px-5 py-[8px] text-[11px] font-black uppercase tracking-[.16em] text-white`}
              >
                First 100 Only
              </span>
              <h2
                className={`${dmSans.className} mb-5 text-[clamp(40px,4.8vw,60px)] font-black leading-[1.05] tracking-[-0.02em]`}
              >
                Stop Getting <span className="text-[#E8890C]">Stuck.</span>
              </h2>
              <p className="mx-auto mb-10 max-w-[600px] text-[15px] leading-[1.48] text-white/88">
                Ask Sarah is in early access. The first 100 registrations get
                the introductory price of $149 USD a year. After that, the price
                goes up.
              </p>

              <div className="mb-9 flex justify-center">
                <div className="inline-flex flex-wrap items-center justify-center gap-5 rounded-full border border-white/10 bg-[rgba(255,255,255,0.05)] px-8 py-[17px] shadow-[inset_0_1px_0_rgba(255,255,255,.04)]">
                  <span
                    className={`${dmSans.className} text-[20px] font-bold leading-none text-white/35 line-through`}
                  >
                    $297
                  </span>
                  <span
                    className={`${dmSans.className} text-[32px] font-black leading-none tracking-[-0.02em]`}
                  >
                    $149
                    <span className="ml-1 text-[16px] font-bold text-white/70">
                      USD/year
                    </span>
                  </span>
                  <span
                    className={`${dmSans.className} rounded-full bg-[#E8890C] px-5 py-[8px] text-[11px] font-black uppercase tracking-[.12em] text-white`}
                  >
                    Save $148
                  </span>
                </div>
              </div>

              <div className="mb-10 text-[13px] text-white/90">
                <div className="mb-[11px] flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                  {[
                    "Available 24/7",
                    "One year of access",
                    "Trained on Sarah's content",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-[8px]"
                    >
                      <span className="h-[9px] w-[9px] rounded-full bg-[#F5A623]" />
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center gap-[8px]">
                    <span className="h-[9px] w-[9px] rounded-full bg-[#F5A623]" />
                    Cancel any time
                  </span>
                </div>
              </div>

              <div>
                <a
                  href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="I&apos;m Interested"
                  className="inline-flex items-center rounded-full bg-white px-12 py-[18px] text-[15px] font-semibold text-[#111111] hover:bg-[#E6F1FB]"
                >
                  I&apos;m Interested <span className="ml-2">→</span>
                </a>
              </div>
              <p className="mt-8 text-[13px] leading-[1.35] text-white/82">
                We will reach out within 48 hours to confirm your spot.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-white py-24">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <div
              className={`${dmSans.className} mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
            >
              Common Questions
            </div>
            <h2
              className={`${dmSans.className} text-[clamp(32px,4vw,48px)] font-black text-[#111111]`}
            >
              FAQ.
            </h2>
          </div>
          <div className="mx-auto flex max-w-[780px] flex-col gap-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-[14px] border border-[#E2E2E2] bg-[#FAFAFA] transition-colors hover:border-[#004AAD]"
              >
                <summary
                  className={`${dmSans.className} flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 text-[16px] font-black text-[#111111]`}
                >
                  <span>{item.q}</span>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[24px] font-bold leading-none text-[#E8890C]">
                    +
                  </span>
                </summary>
                <div className="px-7 pb-5 text-[14.5px] leading-[1.65] text-[#444444]">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E2E2] bg-white py-24 text-center">
        <div className="mx-auto w-full max-w-[760px] px-8">
          <div
            className={`${dmSans.className} mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.14em] text-[#004AAD]`}
          >
            Ready When You Are
          </div>
          <h2
            className={`${dmSans.className} mb-4 text-[clamp(32px,4vw,48px)] font-black leading-[1.12] text-[#111111]`}
          >
            <span className="whitespace-nowrap">Get The Answers, Skip The</span>
            <br />
            Wait.
          </h2>
          <p className="mx-auto mb-8 max-w-[680px] text-[15px] leading-[1.55] text-[#2b2b2b]">
            Join Ask Sarah and stop spending hours on Google. Specific answers,
            in my voice, the moment you need them.
          </p>
          <a
            href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="I&apos;m Interested"
            className="inline-flex rounded-full bg-[#004AAD] px-9 py-[18px] text-[15px] font-semibold text-white hover:bg-[#003A8C]"
          >
            I&apos;m Interested <span className="ml-2">→</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#111111] pb-8 pt-[72px] text-white">
        <div className="mx-auto w-full max-w-[1180px] px-8">
          <div className="mb-14 grid gap-12 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="md:col-span-2 xl:col-span-1">
              <Link href="/" className="mb-5 block w-40">
                <Logo white />
              </Link>
              <p className="max-w-[320px] text-[14px] leading-[1.65] text-white/65">
                AI trainer, strategist and consultant. Building AI platforms
                including parently.ai and aieconomy.ai.
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
                    className="text-[14px] text-white/70 hover:text-white"
                  >
                    LLM Comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/toolkit/cluster"
                    className="text-[14px] text-white/70 hover:text-white"
                  >
                    All Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-tips"
                    className="text-[14px] text-white/70 hover:text-white"
                  >
                    AI Tips
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-[14px] text-white/70 hover:text-white"
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
                    className="text-[14px] text-white/70 hover:text-white"
                  >
                    Start Right With AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upsell/build-your-own-ai-stack"
                    className="text-[14px] text-white/70 hover:text-white"
                  >
                    Build Your Own AI Stack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upsell/fresh-stack"
                    className="text-[14px] text-white/70 hover:text-white"
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
                    className="text-[14px] text-white/70 hover:text-white"
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
                    className="text-[14px] text-white/70 hover:text-white"
                  >
                    Ask Sarah
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-[14px] text-white/70 hover:text-white"
                  >
                    Privacy &amp; Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                    className="text-[14px] text-white/70 hover:text-white"
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
