"use client";

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

function LinkedInIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LogoSVG() {
  return (
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
  );
}

function ToolLogo({ name }: { name: string }) {
  if (name === "Claude") {
    return (
      <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
        <rect width="34" height="34" rx="8" fill="#D97757" />
        <path d="M9.5 22.5l3.4-9h1.6l3.4 9h-1.5l-.85-2.4h-3.7l-.85 2.4h-1.5zm2.7-3.6h2.9L13.65 15l-1.45 3.9zM18.5 22.5v-9h1.4v9h-1.4zM21.5 22.5v-9h2.6c.95 0 1.7.25 2.25.75.55.5.825 1.2.825 2.1 0 .9-.275 1.6-.825 2.1-.55.5-1.3.75-2.25.75H22.9v3.3h-1.4zm1.4-4.5h1.15c.55 0 .95-.13 1.2-.4.25-.27.375-.62.375-1.05 0-.43-.125-.78-.375-1.05-.25-.27-.65-.4-1.2-.4H22.9v2.9z" fill="white" />
      </svg>
    );
  }
  if (name === "Perplexity") {
    return (
      <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
        <rect width="34" height="34" rx="8" fill="#1F1F1F" />
        <path d="M17 7.5v19m-7-15.5h14m-14 12h14m-7-16v3m0 13v3" stroke="#20B7D7" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="17" cy="17" r="3" fill="#20B7D7" />
      </svg>
    );
  }
  if (name === "ChatGPT") {
    return (
      <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
        <rect width="34" height="34" rx="8" fill="#10A37F" />
        <path d="M22.95 14.7a4.6 4.6 0 0 0-.4-3.78 4.66 4.66 0 0 0-5.02-2.24 4.6 4.6 0 0 0-3.47-1.55 4.66 4.66 0 0 0-4.45 3.23 4.6 4.6 0 0 0-3.07 2.23 4.66 4.66 0 0 0 .57 5.46 4.6 4.6 0 0 0 .4 3.78 4.66 4.66 0 0 0 5.02 2.24 4.6 4.6 0 0 0 3.47 1.55 4.66 4.66 0 0 0 4.45-3.23 4.6 4.6 0 0 0 3.07-2.23 4.66 4.66 0 0 0-.57-5.46z" fill="white" />
      </svg>
    );
  }
  if (name === "ElevenLabs") {
    return (
      <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
        <rect width="34" height="34" rx="8" fill="#000000" />
        <rect x="11" y="10" width="3" height="14" rx="1" fill="white" />
        <rect x="20" y="10" width="3" height="14" rx="1" fill="white" />
      </svg>
    );
  }
  if (name === "Canva") {
    return (
      <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C4CC" />
            <stop offset="100%" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
        <rect width="34" height="34" rx="8" fill="url(#canvaGrad)" />
        <path d="M17 9.5c-3.31 0-6 3.36-6 7.5s2.69 7.5 6 7.5c1.95 0 3.69-1.18 4.78-3l-1.42-.8c-.69 1.16-1.97 1.95-3.36 1.95-2.21 0-4-2.46-4-5.5s1.79-5.5 4-5.5c1.95 0 3.55 1.91 3.94 4.43l1.95-.39C22.32 12.1 20 9.5 17 9.5z" fill="white" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="34" rx="8" fill="#FFFFFF" stroke="#E2E2E2" strokeWidth="1" />
      <path d="M11 11.5L11 22.5L13 22.5L13 14.5L18.5 22.5L20 22.5L20 11.5L18 11.5L18 19L13 11.5L11 11.5Z" fill="#000" />
      <rect x="22" y="11.5" width="1.5" height="11" fill="#000" />
    </svg>
  );
}

export default function BuildYourOwnAiStackPage() {
  return (
    <div className={`${poppins.className} byas-page`}>
      <style jsx global>{`
        .byas-page{--blue:#004AAD;--blue-dark:#003A8C;--blue-tint:#E6F1FB;--black:#111111;--white:#FFFFFF;--g1:#FAFAFA;--g2:#F0F0F0;--g3:#E2E2E2;--g5:#777777;--g7:#444444;--green:#1D9E75;--orange:#E8890C;--red:#DC2626;--grid:#ECECEC;color:var(--g7);background:var(--white);line-height:1.6;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
        .byas-page *, .byas-page *::before, .byas-page *::after{box-sizing:border-box}
        .byas-page a{color:var(--blue);text-decoration:none}
        .byas-page .brand-link{color:var(--black)}
        .byas-page .brand-link:hover{color:var(--black)}
        .byas-page .footer a{color:rgba(255,255,255,.92)}
        .byas-page .footer a:hover{color:var(--white)}
        .byas-page .footer h4{color:var(--white)}
        .byas-page img{max-width:100%;display:block}
        .byas-page .wrap{max-width:1180px;margin:0 auto;padding:0 32px}
        .byas-page .eyebrow{display:inline-block;font-family:${dmSans.style.fontFamily};font-weight:700;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--blue);margin-bottom:16px}
        .byas-page h1,.byas-page h2,.byas-page h3,.byas-page h4{font-family:${dmSans.style.fontFamily};font-weight:900;color:var(--black);line-height:1.1;letter-spacing:-.01em}
        .byas-page .h2{font-size:clamp(32px,4vw,48px)}
        .byas-page .lede{font-size:17px;line-height:1.6;color:var(--g7);font-weight:400}
        .byas-page .btn{display:inline-flex;align-items:center;gap:10px;padding:14px 28px;border-radius:100px;font-size:14px;font-weight:600;cursor:pointer;border:none;transition:transform .15s ease,background .2s ease,color .2s ease,border-color .2s ease;white-space:nowrap}
        .byas-page .btn-primary{background:var(--blue);color:var(--white)}
        .byas-page .btn-primary:hover{background:var(--blue-dark);transform:translateY(-1px)}
        .byas-page .btn-outline{background:transparent;color:var(--black);border:1.5px solid var(--black)}
        .byas-page .btn-outline:hover{background:var(--black);color:var(--white)}
        .byas-page .btn-white{background:var(--white);color:var(--black)}
        .byas-page .btn-white:hover{background:var(--blue-tint);transform:translateY(-1px)}
        .byas-page .btn-large{padding:18px 36px;font-size:15px}
        .byas-page .btn-arrow::after{content:"→";display:inline-block;transition:transform .2s ease}
        .byas-page .btn-arrow:hover::after{transform:translateX(4px)}
        .byas-page .nav-links{display:flex;gap:32px;list-style:none;align-items:center}
        .byas-page .nav-links a{font-size:14px;font-weight:500;color:var(--black);transition:color .2s ease}
        .byas-page .nav-links a:hover{color:var(--blue)}
        .byas-page .dash-mock-tool-name{font-family:${dmSans.style.fontFamily};font-weight:900;font-size:12px;color:var(--black);line-height:1.2;margin-bottom:2px;display:flex;align-items:center;gap:5px}
        .byas-page .faq-q{list-style:none}
        .byas-page .faq-q::-webkit-details-marker{display:none}
        .byas-page .faq-q::after{content:"+";font-family:${dmSans.style.fontFamily};font-weight:900;font-size:24px;color:var(--orange);line-height:1;flex-shrink:0;transition:transform .25s ease}
        .byas-page .faq-item[open] .faq-q::after{transform:rotate(45deg)}
        .byas-page .price-section h2{color:var(--white)}
        @media (max-width:860px){
          .byas-page .nav-links{display:none}
          .byas-page .footer-grid{grid-template-columns:1fr 1fr;gap:32px}
          .byas-page .footer-brand{grid-column:1 / -1}
          .byas-page .inside-grid,.byas-page .how-grid{grid-template-columns:1fr}
        }
        @media (min-width:861px){.byas-page .nav-mobile-social{display:none}}
        @media (max-width:960px){
          .byas-page .hero{padding:108px 0 80px}
          .byas-page .hero-grid{grid-template-columns:1fr;gap:48px}
          .byas-page .dash-mock{max-width:480px;margin:0 auto;width:100%}
        }
        @media (max-width:760px){.byas-page .problem-grid{grid-template-columns:1fr}}
      `}</style>

      <nav className="fixed left-0 right-0 top-0 z-[100] h-16 border-b border-[var(--g3)] bg-[rgba(255,255,255,.97)] backdrop-blur-[12px]">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-8">
          <Link href="/dashboard" className="brand-link block w-[150px] shrink-0">
            <LogoSVG />
          </Link>
          <ul className="nav-links">
            <li><Link href="/llm-comparison">LLMs</Link></li>
            <li><Link href="/toolkit/cluster">Use Cases</Link></li>
            <li><Link href="/ai-tips">AI Tips</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/ask-sarah">Ask Sarah</Link></li>
            <li>
              <a href="https://www.linkedin.com/in/SarahBalmer" target="_blank" rel="noopener" className="ml-3 inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[var(--blue)] !text-[var(--black)] transition-all hover:-translate-y-[1px] hover:bg-[var(--black)] hover:!text-[var(--white)]" aria-label="Sarah Balmer on LinkedIn">
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/SarahBalmer" target="_blank" rel="noopener" className="nav-mobile-social mr-2 inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[var(--blue)] text-[var(--white)]" aria-label="Sarah Balmer on LinkedIn">
              <LinkedInIcon className="h-[17px] w-[17px]" />
            </a>
            <button className="inline-flex cursor-pointer items-center bg-transparent p-2 text-[var(--black)] [@media(min-width:861px)]:hidden" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <section className="hero relative overflow-hidden bg-[var(--white)] pb-24 pt-32 before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] before:bg-[length:40px_40px] before:opacity-50">
        <div className="wrap">
          <div className="hero-grid relative z-[1] grid grid-cols-[1fr_1.1fr] items-center gap-16">
            <div>
              <div className="mb-[18px] flex flex-wrap items-center gap-[10px]">
                <span className={`${dmSans.className} text-[12px] font-bold uppercase tracking-[.14em] text-[var(--blue)]`}>Build Your Own AI Stack</span>
                <span className={`${dmSans.className} inline-block rounded-[100px] bg-[var(--orange)] px-[11px] py-[5px] text-[10px] font-black uppercase tracking-[.14em] text-[var(--white)]`}>$27 Sale Price</span>
              </div>
              <h1 className={`${dmSans.className} mb-[18px] text-[clamp(38px,5vw,60px)] leading-[1.05] tracking-[-.02em]`}>
                One Place For Every <span className="text-[var(--blue)]">AI Tool You Use.</span>
              </h1>
              <p className="mb-7 max-w-[540px] text-[17px] leading-[1.65] text-[var(--g7)]">
                My curated AI toolkit, plus the tools you already use, all in one dashboard. <strong className="font-bold text-[var(--black)]">No more browser tabs. No more lost bookmarks. No more forgotten subscriptions.</strong>
              </p>
              <div className="mb-8 flex flex-wrap gap-x-7 gap-y-[18px] text-[13px] text-[var(--g7)]">
                {["Lifetime access", "Pick what works for you", "Add your own"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--green)] before:content-['']">{item}</span>
                ))}
              </div>
              <div className="mb-[18px] flex flex-wrap items-baseline gap-[18px]">
                <span className={`${dmSans.className} text-2xl font-bold text-[var(--g5)] line-through`}>$97</span>
                <span className={`${dmSans.className} text-5xl font-black leading-none tracking-[-.02em] text-[var(--black)]`}>
                  $27<span className="ml-1 text-[14px] font-bold text-[var(--g5)]">USD · One-time</span>
                </span>
                <span className={`${dmSans.className} inline-flex self-center whitespace-nowrap rounded-[100px] bg-[rgba(232,137,12,.15)] px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[.1em] text-[var(--orange)]`}>Save $70</span>
              </div>
              <div className="mb-[14px] flex flex-wrap items-center gap-4">
                <a href="https://aieconomy.thrivecart.com/myo-ai-toolkit/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large btn-arrow">Unlock Now</a>
                <a href="#how-it-works" className="btn btn-outline">See How</a>
              </div>
              <p className="text-xs text-[var(--g5)]">Instant access · Pay once · Yours forever</p>
            </div>

            <div className="dash-mock overflow-hidden rounded-[18px] border border-[var(--g3)] bg-[var(--white)] shadow-[0_30px_60px_-24px_rgba(0,0,0,.18),0_12px_24px_-12px_rgba(0,74,173,.08)]" aria-hidden="true">
              <div className="flex items-center gap-2 border-b border-[var(--g3)] bg-[var(--g1)] px-[14px] py-[10px]">
                <span className="h-[10px] w-[10px] rounded-full bg-[#FF5F57]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#FFBD2E]" />
                <span className="h-[10px] w-[10px] rounded-full bg-[#28CA42]" />
                <span className="ml-[14px] flex-1 rounded-md border border-[var(--g3)] bg-[var(--white)] px-[10px] py-1 font-mono text-[11px] text-[var(--g5)]">aieconomy.ai/toolkit</span>
              </div>
              <div className="bg-[var(--white)] px-[22px] py-5">
                <div className="mb-[14px] flex items-center justify-between gap-3 border-b border-[var(--g3)] pb-[14px]">
                  <div>
                    <div className={`${dmSans.className} text-[17px] font-black leading-[1.2] text-[var(--black)]`}>Your AI Stack</div>
                    <div className="mt-[3px] text-[11px] tracking-[.04em] text-[var(--g5)]">Anna Brown · 6 tools</div>
                  </div>
                  <button className="inline-flex shrink-0 items-center gap-[5px] rounded-[100px] bg-[var(--blue)] px-[14px] py-[7px] text-[11px] font-semibold text-[var(--white)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-[11px] w-[11px]"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    Add Tool
                  </button>
                </div>
                <div className="mb-[14px] flex flex-col gap-[6px] border-b border-[var(--g3)] pb-[14px]">
                  <div className="flex flex-wrap items-center gap-[5px]">
                    <span className={`${dmSans.className} mr-1 text-[9px] font-bold uppercase tracking-[.12em] text-[var(--g5)]`}>Source</span>
                    <span className="whitespace-nowrap rounded-[100px] border border-[var(--black)] bg-[var(--black)] px-[10px] py-1 text-[10px] leading-[1.2] text-[var(--white)]">All</span>
                    <span className="whitespace-nowrap rounded-[100px] border border-[var(--g3)] bg-[var(--g1)] px-[10px] py-1 text-[10px] leading-[1.2] text-[var(--g7)]">Sarah&apos;s Picks</span>
                    <span className="whitespace-nowrap rounded-[100px] border border-[var(--g3)] bg-[var(--g1)] px-[10px] py-1 text-[10px] leading-[1.2] text-[var(--g7)]">Your Tools</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-[5px]">
                    <span className={`${dmSans.className} mr-1 text-[9px] font-bold uppercase tracking-[.12em] text-[var(--g5)]`}>Use Case</span>
                    <span className="whitespace-nowrap rounded-[100px] border border-[var(--orange)] bg-[var(--orange)] px-[10px] py-1 text-[10px] leading-[1.2] text-[var(--white)]">All</span>
                    <span className="whitespace-nowrap rounded-[100px] border border-[var(--g3)] bg-[var(--g1)] px-[10px] py-1 text-[10px] leading-[1.2] text-[var(--g7)]">Writing</span>
                    <span className="whitespace-nowrap rounded-[100px] border border-[var(--g3)] bg-[var(--g1)] px-[10px] py-1 text-[10px] leading-[1.2] text-[var(--g7)]">Research</span>
                    <span className="whitespace-nowrap rounded-[100px] border border-[var(--g3)] bg-[var(--g1)] px-[10px] py-1 text-[10px] leading-[1.2] text-[var(--g7)]">Design</span>
                    <span className="whitespace-nowrap rounded-[100px] border border-[var(--g3)] bg-[var(--g1)] px-[10px] py-1 text-[10px] leading-[1.2] text-[var(--g7)]">Voice</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  {[
                    { name: "Claude", tag: "Sarah's #1", yours: false },
                    { name: "Perplexity", tag: "Daily Search", yours: false },
                    { name: "ChatGPT", tag: "Number Two", yours: false },
                    { name: "ElevenLabs", tag: "Voice AI", yours: false },
                    { name: "Canva", tag: "Added by you", yours: true },
                    { name: "Notion AI", tag: "Added by you", yours: true },
                  ].map(({ name, tag, yours }) => {
                    return (
                      <div key={name} className="relative flex items-center gap-[10px] rounded-lg border border-[var(--g2)] bg-[var(--g1)] p-[10px]">
                        <div className="h-[34px] w-[34px] shrink-0 overflow-hidden rounded-lg">
                          <ToolLogo name={name} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="dash-mock-tool-name">{name}{!yours && <svg className="h-[11px] w-[11px] text-[var(--orange)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>}</div>
                          <div className="text-[10px] leading-[1.2] text-[var(--g5)]">{tag}</div>
                        </div>
                        {yours && <span className={`${dmSans.className} shrink-0 rounded-[100px] bg-[var(--blue-tint)] px-[6px] py-[2px] text-[8px] font-bold uppercase tracking-[.12em] text-[var(--blue)]`}>Yours</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="problem border-t border-[var(--g3)] bg-[var(--g1)] py-24">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <div className="eyebrow">Sound Familiar?</div>
            <h2 className="h2 mb-[14px]">Your AI Stack Is Everywhere.</h2>
            <p className="lede">Most people I work with have AI tools spread across browser tabs, password managers, sticky notes and forgotten emails. The dashboard fixes that.</p>
          </div>
          <div className="problem-grid mx-auto grid max-w-[980px] grid-cols-2 gap-[18px]">
            <div className="flex items-start gap-[14px] rounded-[14px] border border-[var(--g3)] bg-[var(--white)] px-7 py-6 transition-[transform,border-color] duration-200 hover:-translate-y-[2px] hover:border-[var(--g5)]">
              <span className={`${dmSans.className} inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(220,38,38,.1)] text-lg font-black leading-none text-[var(--red)]`}>!</span>
              <p className="text-[15px] leading-[1.6] text-[var(--g7)]">You have <strong className="font-bold text-[var(--black)]">eight AI tabs open</strong> right now and forgot which one does what.</p>
            </div>
            <div className="flex items-start gap-[14px] rounded-[14px] border border-[var(--g3)] bg-[var(--white)] px-7 py-6 transition-[transform,border-color] duration-200 hover:-translate-y-[2px] hover:border-[var(--g5)]">
              <span className={`${dmSans.className} inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(220,38,38,.1)] text-lg font-black leading-none text-[var(--red)]`}>!</span>
              <p className="text-[15px] leading-[1.6] text-[var(--g7)]">You signed up for a free trial three months ago and <strong className="font-bold text-[var(--black)]">cannot remember if you cancelled</strong>.</p>
            </div>
            <div className="flex items-start gap-[14px] rounded-[14px] border border-[var(--g3)] bg-[var(--white)] px-7 py-6 transition-[transform,border-color] duration-200 hover:-translate-y-[2px] hover:border-[var(--g5)]">
              <span className={`${dmSans.className} inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(220,38,38,.1)] text-lg font-black leading-none text-[var(--red)]`}>!</span>
              <p className="text-[15px] leading-[1.6] text-[var(--g7)]">You bookmarked an AI tool a friend recommended and <strong className="font-bold text-[var(--black)]">cannot find the bookmark</strong>.</p>
            </div>
            <div className="flex items-start gap-[14px] rounded-[14px] border border-[var(--g3)] bg-[var(--white)] px-7 py-6 transition-[transform,border-color] duration-200 hover:-translate-y-[2px] hover:border-[var(--g5)]">
              <span className={`${dmSans.className} inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(220,38,38,.1)] text-lg font-black leading-none text-[var(--red)]`}>!</span>
              <p className="text-[15px] leading-[1.6] text-[var(--g7)]">You want to recommend a tool to a colleague and <strong className="font-bold text-[var(--black)]">cannot remember its name</strong>.</p>
            </div>
            <div className="flex items-start gap-[14px] rounded-[14px] border border-[var(--g3)] bg-[var(--white)] px-7 py-6 transition-[transform,border-color] duration-200 hover:-translate-y-[2px] hover:border-[var(--g5)]">
              <span className={`${dmSans.className} inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(220,38,38,.1)] text-lg font-black leading-none text-[var(--red)]`}>!</span>
              <p className="text-[15px] leading-[1.6] text-[var(--g7)]">You read a list of &quot;the best AI tools&quot; and have no idea which ones are <strong className="font-bold text-[var(--black)]">actually any good</strong>.</p>
            </div>
            <div className="flex items-start gap-[14px] rounded-[14px] border border-[var(--g3)] bg-[var(--white)] px-7 py-6 transition-[transform,border-color] duration-200 hover:-translate-y-[2px] hover:border-[var(--g5)]">
              <span className={`${dmSans.className} inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(220,38,38,.1)] text-lg font-black leading-none text-[var(--red)]`}>!</span>
              <p className="text-[15px] leading-[1.6] text-[var(--g7)]">You want one place to see <strong className="font-bold text-[var(--black)]">everything you use</strong>, instead of starting from zero every time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="inside border-t border-[var(--g3)] bg-[var(--white)] py-24">
        <div className="wrap">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <div className="eyebrow">What Is Inside</div>
            <h2 className="h2 mb-[14px]">Two Things. One Dashboard.</h2>
            <p className="lede">No clever features. No clutter. The dashboard does two things, and it does them well.</p>
          </div>
          <div className="inside-grid mx-auto grid max-w-[1080px] grid-cols-2 gap-6">
            <div className="flex flex-col rounded-[18px] border border-[rgba(232,137,12,.2)] bg-[#FFF8EE] px-9 py-10 transition-[transform,border-color] duration-200 hover:-translate-y-[3px] hover:border-[var(--blue)]">
              <span className={`${dmSans.className} mb-[18px] inline-block w-fit rounded-[100px] bg-[var(--orange)] px-[11px] py-[5px] text-[10px] font-black uppercase tracking-[.12em] text-[var(--white)]`}>Curated</span>
              <h3 className={`${dmSans.className} mb-[14px] text-2xl font-black leading-[1.2] text-[var(--black)]`}>My AI Toolkit</h3>
              <p className="mb-[22px] flex-1 text-[15px] leading-[1.65] text-[var(--g7)]">The AI tools I actually use, with my honest take on each one. The good, the overhyped, the actually worth paying for. Pick the ones that work for you.</p>
              <ul className="list-none p-0">
                <li className="relative border-b border-[rgba(0,0,0,.06)] py-[9px] pl-7 text-[14px] leading-[1.5] text-[var(--g7)] before:absolute before:left-0 before:top-[11px] before:inline-flex before:h-[18px] before:w-[18px] before:items-center before:justify-center before:rounded-full before:bg-[var(--green)] before:text-[10px] before:font-bold before:text-[var(--white)] before:content-['✓']"><strong className="font-bold text-[var(--black)]">Pick the tools you want</strong> from my curated list</li>
                <li className="relative border-b border-[rgba(0,0,0,.06)] py-[9px] pl-7 text-[14px] leading-[1.5] text-[var(--g7)] before:absolute before:left-0 before:top-[11px] before:inline-flex before:h-[18px] before:w-[18px] before:items-center before:justify-center before:rounded-full before:bg-[var(--green)] before:text-[10px] before:font-bold before:text-[var(--white)] before:content-['✓']"><strong className="font-bold text-[var(--black)]">Sarah&apos;s honest take</strong> on every single one</li>
                <li className="relative border-b border-[rgba(0,0,0,.06)] py-[9px] pl-7 text-[14px] leading-[1.5] text-[var(--g7)] before:absolute before:left-0 before:top-[11px] before:inline-flex before:h-[18px] before:w-[18px] before:items-center before:justify-center before:rounded-full before:bg-[var(--green)] before:text-[10px] before:font-bold before:text-[var(--white)] before:content-['✓']">Tools tagged by what they are best for</li>
                <li className="relative py-[9px] pl-7 text-[14px] leading-[1.5] text-[var(--g7)] before:absolute before:left-0 before:top-[11px] before:inline-flex before:h-[18px] before:w-[18px] before:items-center before:justify-center before:rounded-full before:bg-[var(--green)] before:text-[10px] before:font-bold before:text-[var(--white)] before:content-['✓']">Updated as the AI landscape shifts</li>
              </ul>
            </div>
            <div className="flex flex-col rounded-[18px] border border-[rgba(0,74,173,.15)] bg-[var(--blue-tint)] px-9 py-10 transition-[transform,border-color] duration-200 hover:-translate-y-[3px] hover:border-[var(--blue)]">
              <span className={`${dmSans.className} mb-[18px] inline-block w-fit rounded-[100px] bg-[var(--blue)] px-[11px] py-[5px] text-[10px] font-black uppercase tracking-[.12em] text-[var(--white)]`}>Yours</span>
              <h3 className={`${dmSans.className} mb-[14px] text-2xl font-black leading-[1.2] text-[var(--black)]`}>Add Your Own Tools</h3>
              <p className="mb-[22px] flex-1 text-[15px] leading-[1.65] text-[var(--g7)]">The dashboard is not just my list. Add anything you already use, anything you find later, anything a colleague recommends.</p>
              <ul className="list-none p-0">
                <li className="relative border-b border-[rgba(0,0,0,.06)] py-[9px] pl-7 text-[14px] leading-[1.5] text-[var(--g7)] before:absolute before:left-0 before:top-[11px] before:inline-flex before:h-[18px] before:w-[18px] before:items-center before:justify-center before:rounded-full before:bg-[var(--green)] before:text-[10px] before:font-bold before:text-[var(--white)] before:content-['✓']">Add <strong className="font-bold text-[var(--black)]">any AI tool</strong>, no limits</li>
                <li className="relative border-b border-[rgba(0,0,0,.06)] py-[9px] pl-7 text-[14px] leading-[1.5] text-[var(--g7)] before:absolute before:left-0 before:top-[11px] before:inline-flex before:h-[18px] before:w-[18px] before:items-center before:justify-center before:rounded-full before:bg-[var(--green)] before:text-[10px] before:font-bold before:text-[var(--white)] before:content-['✓']">Note what it costs and what you use it for</li>
                <li className="relative border-b border-[rgba(0,0,0,.06)] py-[9px] pl-7 text-[14px] leading-[1.5] text-[var(--g7)] before:absolute before:left-0 before:top-[11px] before:inline-flex before:h-[18px] before:w-[18px] before:items-center before:justify-center before:rounded-full before:bg-[var(--green)] before:text-[10px] before:font-bold before:text-[var(--white)] before:content-['✓']">See your whole stack in one place</li>
                <li className="relative py-[9px] pl-7 text-[14px] leading-[1.5] text-[var(--g7)] before:absolute before:left-0 before:top-[11px] before:inline-flex before:h-[18px] before:w-[18px] before:items-center before:justify-center before:rounded-full before:bg-[var(--green)] before:text-[10px] before:font-bold before:text-[var(--white)] before:content-['✓']">Yours forever, even if you cancel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="how border-t border-[var(--g3)] bg-[var(--g1)] py-24" id="how-it-works">
        <div className="wrap">
          <div className="mb-12 max-w-[760px]">
            <div className="eyebrow">How It Works</div>
            <h2 className="h2 mb-[14px]">Three Steps. Five Minutes.</h2>
            <p className="lede">No setup, no integrations, no learning curve. Pay once and the dashboard is ready to go.</p>
          </div>
          <div className="how-grid grid grid-cols-3 gap-5">
            {[
              ["01", "Unlock Access", "Pay $27 once. The dashboard loads with my full curated toolkit ready to go. Lifetime access, yours forever."],
              ["02", "Add Your Tools", "Drop in any AI tool you already use. Notion AI, the plugin a colleague swears by, the random tool you tried last week. All of it."],
              ["03", "One Place To Find Everything", "No more browser-tab chaos. Open the dashboard and see your whole AI stack in one tidy view."],
            ].map(([num, title, body]) => (
              <div key={num} className="flex h-full flex-col rounded-2xl border border-[var(--g3)] bg-[var(--white)] px-7 py-8 transition-[transform,border-color] duration-200 hover:-translate-y-[3px] hover:border-[var(--blue)]">
                <div className={`${dmSans.className} mb-[14px] text-[42px] font-black leading-none tracking-[-.04em] text-[var(--orange)]`}>{num}</div>
                <h3 className={`${dmSans.className} mb-[10px] text-xl font-black leading-[1.25] text-[var(--black)]`}>{title}</h3>
                <p className="m-0 text-[14px] leading-[1.65] text-[var(--g7)]">{body}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-[640px] text-center">
            <a href="https://aieconomy.thrivecart.com/myo-ai-toolkit/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large btn-arrow mb-[14px]">Unlock Now · $27 USD</a>
            <p className="m-0 text-[13px] tracking-[.02em] text-[var(--g5)]">One-time payment · Lifetime access · Add your own tools forever.</p>
          </div>
        </div>
      </section>

      <section className="quote border-t border-[var(--g3)] bg-[var(--white)] py-24">
        <div className="wrap">
          <div className="relative mx-auto max-w-[840px] rounded-[14px] border border-[var(--g3)] border-l-4 border-l-[var(--orange)] bg-[var(--white)] px-12 pb-9 pt-[52px] shadow-[0_20px_40px_-28px_rgba(0,0,0,.15)] before:pointer-events-none before:absolute before:left-7 before:top-[-12px] before:font-sans before:text-[110px] before:font-black before:leading-none before:text-[var(--orange)] before:content-['“']">
            <span className={`${dmSans.className} block text-[clamp(20px,2.2vw,26px)] font-black leading-[1.35] tracking-[-.01em] text-[var(--black)]`}>
              I built this because I was tired of explaining my AI stack one tool at a time. Now you get the whole list, with my honest take on each one, plus a place to add your own. One dashboard, your whole stack, no more chaos.
            </span>
            <div className={`${dmSans.className} mt-6 flex items-center gap-3 border-t border-[var(--g3)] pt-[18px] text-[12px] font-bold uppercase tracking-[.14em] text-[var(--orange)] before:h-[2px] before:w-7 before:bg-[var(--orange)] before:content-['']`}>
              Sarah&apos;s Take
            </div>
          </div>
        </div>
      </section>

      <section className="price-section border-t border-[var(--g3)] bg-[var(--g1)] py-24" id="pricing">
        <div className="wrap">
          <div className="relative mx-auto max-w-[780px] overflow-hidden rounded-3xl bg-[var(--black)] px-14 py-16 text-center text-[var(--white)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] before:bg-[length:32px_32px]">
            <div className="relative z-[1]">
              <span className={`${dmSans.className} mb-[22px] inline-block rounded-[100px] bg-[var(--orange)] px-[14px] py-[6px] text-[11px] font-black uppercase tracking-[.14em]`}>Sale Price</span>
              <h2 className={`${dmSans.className} mb-[14px] text-[clamp(32px,4.5vw,48px)] text-[var(--white)]`}>Stop Losing Tabs. <span className="text-[var(--orange)]">Start Owning Your Stack.</span></h2>
              <p className="mx-auto mb-8 max-w-[560px] text-[16px] leading-[1.65] text-[rgba(255,255,255,.85)]">Pay $27 once. Get the curated toolkit, get the dashboard, get the ability to add your own tools, get it for life.</p>
              <div className="mb-7 inline-flex flex-wrap items-baseline justify-center gap-4 rounded-[100px] border border-[rgba(255,255,255,.12)] bg-[rgba(255,255,255,.05)] px-8 py-5">
                <span className={`${dmSans.className} text-xl font-bold text-[rgba(255,255,255,.4)] line-through`}>$97</span>
                <span className={`${dmSans.className} text-4xl font-black leading-none`}>$27<span className="ml-1 text-[13px] font-bold text-[rgba(255,255,255,.65)]">USD · One-time</span></span>
                <span className={`${dmSans.className} self-center rounded-[100px] bg-[var(--orange)] px-[14px] py-[6px] text-[10px] font-black uppercase tracking-[.12em]`}>Save $70</span>
              </div>
              <div className="mb-8 flex flex-wrap justify-center gap-x-7 gap-y-[14px] text-[13px] text-[rgba(255,255,255,.85)]">
                {["Pick what works for you", "Add your own", "Lifetime access", "Instant access"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 before:inline-flex before:h-[14px] before:w-[14px] before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-[var(--orange)] before:text-[9px] before:font-bold before:text-[var(--white)] before:content-['✓']">{item}</span>
                ))}
              </div>
              <a href="https://aieconomy.thrivecart.com/myo-ai-toolkit/" target="_blank" rel="noopener noreferrer" className="btn btn-white btn-large btn-arrow">Unlock Now</a>
              <p className="mt-[18px] text-[13px] text-[rgba(255,255,255,.6)]">Instant access. No subscription, no renewal, no catch.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq border-t border-[var(--g3)] bg-[var(--white)] py-24">
        <div className="wrap">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <div className="eyebrow">Common Questions</div>
            <h2 className="h2 mb-[14px]">FAQ.</h2>
          </div>
          <div className="mx-auto flex max-w-[780px] flex-col gap-3">
            <details className="faq-item overflow-hidden rounded-[14px] border border-[var(--g3)] bg-[var(--g1)] transition-colors duration-200 hover:border-[var(--blue)]">
              <summary className="faq-q flex cursor-pointer items-center justify-between gap-5 px-7 py-[22px] font-sans text-[16px] font-black leading-[1.3] text-[var(--black)]">Is this a subscription?</summary>
              <div className="px-7 pb-[22px] text-[14.5px] leading-[1.65] text-[var(--g7)]"><p>No. <strong className="font-bold text-[var(--black)]">Pay $27 once and the dashboard is yours.</strong> No monthly fee, no renewal, no surprise charge. The price you see is the price you pay, full stop.</p></div>
            </details>
            <details className="faq-item overflow-hidden rounded-[14px] border border-[var(--g3)] bg-[var(--g1)] transition-colors duration-200 hover:border-[var(--blue)]">
              <summary className="faq-q flex cursor-pointer items-center justify-between gap-5 px-7 py-[22px] font-sans text-[16px] font-black leading-[1.3] text-[var(--black)]">What is in the curated toolkit?</summary>
              <div className="px-7 pb-[22px] text-[14.5px] leading-[1.65] text-[var(--g7)]"><p>The <strong className="font-bold text-[var(--black)]">AI tools I actually use and recommend</strong>, with my honest take on each one. Pick the tools that work for you, ignore the rest. Each tool comes with my take on what it does well, what it does not, and whether it is worth paying for.</p></div>
            </details>
            <details className="faq-item overflow-hidden rounded-[14px] border border-[var(--g3)] bg-[var(--g1)] transition-colors duration-200 hover:border-[var(--blue)]">
              <summary className="faq-q flex cursor-pointer items-center justify-between gap-5 px-7 py-[22px] font-sans text-[16px] font-black leading-[1.3] text-[var(--black)]">Can I add tools that are not on Sarah&apos;s list?</summary>
              <div className="px-7 pb-[22px] text-[14.5px] leading-[1.65] text-[var(--g7)]"><p>Yes. That is half the point of the dashboard. <strong className="font-bold text-[var(--black)]">Add any AI tool you use</strong>, no limits. Notion AI, Canva Magic, the random plugin a friend recommended. All of it lives in your dashboard alongside my picks.</p></div>
            </details>
            <details className="faq-item overflow-hidden rounded-[14px] border border-[var(--g3)] bg-[var(--g1)] transition-colors duration-200 hover:border-[var(--blue)]">
              <summary className="faq-q flex cursor-pointer items-center justify-between gap-5 px-7 py-[22px] font-sans text-[16px] font-black leading-[1.3] text-[var(--black)]">What if my needs change later?</summary>
              <div className="px-7 pb-[22px] text-[14.5px] leading-[1.65] text-[var(--g7)]"><p>You add and remove tools whenever you want. Your dashboard reflects whatever stack you are running right now. The list is yours to shape.</p></div>
            </details>
            <details className="faq-item overflow-hidden rounded-[14px] border border-[var(--g3)] bg-[var(--g1)] transition-colors duration-200 hover:border-[var(--blue)]">
              <summary className="faq-q flex cursor-pointer items-center justify-between gap-5 px-7 py-[22px] font-sans text-[16px] font-black leading-[1.3] text-[var(--black)]">Does the toolkit get updated?</summary>
              <div className="px-7 pb-[22px] text-[14.5px] leading-[1.65] text-[var(--g7)]"><p>Yes. As the AI landscape shifts, I add new tools and update my take on existing ones. Updates are included with your access for life. <strong className="font-bold text-[var(--black)]">If you want monthly updates pushed to you the moment they happen, <Link href="/upsell/fresh-stack">add Fresh Stack</Link> for $17 a month.</strong></p></div>
            </details>
            <details className="faq-item overflow-hidden rounded-[14px] border border-[var(--g3)] bg-[var(--g1)] transition-colors duration-200 hover:border-[var(--blue)]">
              <summary className="faq-q flex cursor-pointer items-center justify-between gap-5 px-7 py-[22px] font-sans text-[16px] font-black leading-[1.3] text-[var(--black)]">What if I am brand new to AI?</summary>
              <div className="px-7 pb-[22px] text-[14.5px] leading-[1.65] text-[var(--g7)]"><p>The dashboard is built for that. Every tool has my plain-English take, a recommended starting point, and what to use it for. You will not be left figuring out what each thing does.</p></div>
            </details>
          </div>
        </div>
      </section>

      <footer className="footer bg-[#111111] pb-8 pt-[72px] text-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-14 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Link
                href="/"
                aria-label="AI Economy"
                className="mb-5 block w-[160px] text-white"
              >
                <LogoSVG />
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
