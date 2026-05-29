'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import { Menu, ArrowRight, Star, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-dm-sans',
});

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function SalesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const mockTools = [
    { fav: 'C', name: 'Claude', by: 'Anthropic', cat: 'My Pick', category: 'Core AI', desc: 'My number one. Writing, strategy & analysis.', star: true, orange: true },
    { fav: 'G', name: 'Gamma', by: 'Gamma', cat: 'Presentations', category: 'Content', desc: 'AI presentations, decks & documents.', star: false },
    { fav: 'F', name: 'Figma', by: 'Figma', cat: 'Design (UI)', category: 'Design', desc: 'Industry standard for UI & brand.', star: false },
    { fav: 'E', name: 'ElevenLabs', by: 'ElevenLabs', cat: 'Voice', category: 'Automate', desc: 'Natural AI speech & voice cloning.', star: true }
  ];

  const filteredTools = activeFilter === 'All'
    ? mockTools
    : mockTools.filter(tool => tool.category === activeFilter);

  useEffect(() => {
    console.log('Home page visited');
  }, []);

  return (
    <div className={`${dmSans.variable} font-poppins text-[#444444] bg-white min-h-screen selection:bg-[#E6F1FB] selection:text-[#004AAD]`}>
      <style jsx global>{`
        :root {
          --blue: #004AAD;
          --blue-dark: #003A8C;
          --blue-tint: #E6F1FB;
          --black: #111111;
          --white: #FFFFFF;
          --g1: #FAFAFA;
          --g2: #F0F0F0;
          --g3: #E2E2E2;
          --g5: #777777;
          --g7: #444444;
          --green: #1D9E75;
          --orange: #E8890C;
          --grid: #ECECEC;
        }

        .hero-grid {
          background-image: linear-gradient(var(--grid) 1px, transparent 1px),
                            linear-gradient(90deg, var(--grid) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .manage-grid-pattern {
          background-image: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-[#E2E2E2] h-[64px]">
        <div className="max-w-[1100px] mx-auto px-8 h-full flex items-center justify-between">
          <Link href="/" className="block w-[150px] flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-70.40 -827.40 6209.80 954.80" className="w-full h-auto text-[#111111]">
              <title>AI Economy</title>
              <g fill="currentColor">
                <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" /><path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
              </g>
            </svg>
          </Link>
          <ul className="hidden md:flex gap-8 list-none items-center">
            <li><Link href="/about" className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD] transition-colors">About</Link></li>
            <li><Link href="#showcase" className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD] transition-colors">What's Inside</Link></li>
            <li><Link href="#why" className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD] transition-colors">Why I Built It</Link></li>
            <li><Link href="#pricing" className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD] transition-colors">Pricing</Link></li>
          </ul>
          <div className="flex items-center gap-2">
            <Link href="https://aieconomy.thrivecart.com/sarahs-ai-toolkit/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#004AAD] text-white text-[13px] font-semibold hover:bg-[#003A8C] transition-all hover:-translate-y-px">
              Get the Toolkit
            </Link>
            <button className="md:hidden p-2 text-[#111111]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E2E2E2] absolute top-[64px] left-0 right-0 p-8 shadow-xl">
            <ul className="flex flex-col gap-6 list-none items-start">
              <li><Link href="/about" className="text-[16px] font-medium text-[#111111]" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link href="#showcase" className="text-[16px] font-medium text-[#111111]" onClick={() => setIsMenuOpen(false)}>What's Inside</Link></li>
              <li><Link href="#why" className="text-[16px] font-medium text-[#111111]" onClick={() => setIsMenuOpen(false)}>Why I Built It</Link></li>
              <li><Link href="#pricing" className="text-[16px] font-medium text-[#111111]" onClick={() => setIsMenuOpen(false)}>Pricing</Link></li>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-[104px] pb-14 bg-white hero-grid relative border-b border-[#E2E2E2]">
        <div className="max-w-[960px] mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block font-dm-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#004AAD] mb-3.5">
                Your Shortcut To AI That Works
              </div>
              <h1 className="font-dm-sans font-black text-[44px] md:text-[72px] leading-[1] tracking-[-0.02em] text-[#111111] mb-6">
                Unlock My <span className="text-[#004AAD]">AI Blueprint.</span>
              </h1>
              <div className="bg-[#004AAD] text-white p-5 md:p-6 rounded-xl italic font-medium text-[15px] leading-[1.5] mb-6 shadow-lg shadow-blue-500/20">
                "Three years. Hours of testing. This is my AI Toolkit."
              </div>
              <p className="text-[16px] leading-[1.65] text-[#444444] mb-3 max-w-[520px]">
                AI is everywhere, and it is hard to know where to start. Whether you are exploring what is possible or already using a few tools but not seeing results, the overwhelm is real. I have spent three years doing the hard work so you can skip the noise, know what tools to use for what jobs and get real results.
              </p>
              <p className="text-[15px] italic text-[#444444] mb-7 max-w-[520px] leading-[1.5]">
                I hope this helps you as much as it helps me. <span className="font-dm-sans font-bold not-italic text-[#004AAD] ml-1">Sarah</span>
              </p>
              <div className="flex flex-col items-center md:items-start gap-3">
                <Link href="https://aieconomy.thrivecart.com/sarahs-ai-toolkit/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#004AAD] text-white text-[15px] font-semibold hover:bg-[#003A8C] transition-all hover:-translate-y-px group shadow-lg shadow-blue-500/20">
                  See What's Inside <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="w-full max-w-[220px] md:max-w-none flex justify-center md:justify-start">
                  <span className="text-[10px] text-[#777777] uppercase tracking-[0.15em] font-bold whitespace-nowrap opacity-80">
                    One payment · Lifetime access
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
              <img src="/assets/sarah-laptop.png" alt="Sarah Balmer working at her laptop" className="w-full rounded-[20px] aspect-[4/5] object-cover shadow-2xl shadow-black/10" />
              <div className="absolute -left-3 -bottom-4.5 bg-white border border-[#E2E2E2] rounded-xl p-3.5 md:p-4.5 flex items-center gap-3 shadow-lg max-w-[280px]">
                <a href="https://www.linkedin.com/in/sarahbalmer/" target="_blank" rel="noopener noreferrer" className="w-10 md:w-[42px] h-10 md:h-[42px] rounded-full bg-[#004AAD] text-white flex items-center justify-center flex-shrink-0 hover:bg-[#003A8C] transition-all hover:scale-105" title="Sarah Balmer on LinkedIn">
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <div className="text-[11px] leading-[1.35] text-[#444444]">
                  <strong className="block text-[#111111] font-dm-sans font-bold text-[13px] mb-0.5">Sarah Balmer</strong>
                  AI Strategy - Consultant - Trainer<br />
                  Founder & CEO - 25yrs+
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-8">
          <div className="text-center max-w-[680px] mx-auto mb-8">
            <h2 className="font-dm-sans font-black text-[26px] md:text-[38px] leading-[1.1] text-[#111111] mb-3.5">
              Stop The AI Tool Overwhelm.<br />Start With The Right Ones.
            </h2>
          </div>
          <ul className="max-w-[720px] mx-auto list-none p-0">
            {[
              "You keep hearing about AI but have no idea which tools are actually worth using.",
              "You have tried a few tools and either got overwhelmed or got nothing useful out of them.",
              "You are spending money on subscriptions you do not fully understand or use.",
              "You know AI could save you time but you cannot seem to make it stick.",
              "You want honest, practical advice. Not sponsored content."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3.5 py-3.5 text-[15px] leading-[1.6] text-[#444444] border-b border-[#E2E2E2] last:border-b-0">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#004AAD] flex items-center justify-center">
                  <Check size={12} className="text-white" strokeWidth={4} />
                </div>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="pb-16 px-8">
        <div className="max-w-[920px] mx-auto bg-[#004AAD] text-white rounded-[18px] p-10 md:px-14 md:py-10 font-dm-sans font-bold text-lg md:text-[22px] leading-[1.5] text-center shadow-2xl shadow-blue-500/20">
          "Knowing what AI tools to use is half the battle. I have done all the heavy lifting. I use all these AI tools, I have tried and tested them, and they really do work."
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section id="showcase" className="py-16 bg-[#FAFAFA] border-y border-[#E2E2E2]">
        <div className="max-w-[960px] mx-auto px-8">
          <div className="text-center max-w-[680px] mx-auto mb-8">
            <div className="font-dm-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#E8890C] mb-3.5">Your AI Command Centre</div>
            <h2 className="font-dm-sans font-black text-[26px] md:text-[38px] leading-[1.1] text-[#111111] mb-3.5">One Home For All Your AI Tools.</h2>
            <p className="text-[15px] leading-[1.55] text-[#444444]">Goodbye AI tool overwhelm. My tool guide for AI that works.</p>
          </div>

          <div className="max-w-[780px] mx-auto mb-7 bg-white border border-[#E2E2E2] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
            <div className="bg-[#FAFAFA] border-b border-[#E2E2E2] p-2.5 px-4 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></span>
            </div>
            <div className="grid md:grid-cols-[1fr_1.2fr] bg-white">
              <div className="p-8 md:px-7 md:py-8 bg-gradient-to-br from-[#E6F1FB] to-white flex items-center justify-center border-r border-[#E2E2E2]">
                <div className="text-center">
                  <h4 className="font-dm-sans font-black text-[18px] text-[#111111] mb-1.5">The AI Toolkit</h4>
                  <p className="text-[12px] text-[#777777]">Browse · Filter · Star · Manage</p>
                </div>
              </div>
              <div className="p-[22px] flex flex-col gap-2.5">
                {[
                  "See what I use to save time",
                  "Get ahead with everyday AI tools",
                  "A guide to start your AI journey",
                  "Stop the tool overwhelm"
                ].map((feat, i) => (
                  <div key={i} className="bg-[#FAFAFA] border border-[#E2E2E2] rounded-xl p-[11px] px-3.5 text-[13px] font-medium text-[#444444] flex items-center gap-2.5 hover:bg-[#E6F1FB] hover:border-[#004AAD] transition-all group">
                    <span className="w-2 h-2 rounded-full bg-[#004AAD]"></span>
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="#pricing" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#004AAD] text-white text-[15px] font-semibold hover:bg-[#003A8C] transition-all hover:-translate-y-px group">
              Get The Toolkit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FIVE THINGS */}
      <section className="py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-8">
          <div className="text-center max-w-[720px] mx-auto mb-8">
            <div className="font-dm-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#E8890C] mb-3.5">Start Somewhere</div>
            <h2 className="font-dm-sans font-black text-[26px] md:text-[38px] leading-[1.1] text-[#111111] mb-3.5">
              Here Are Five Things AI Can Make Faster, Easier And Better.
            </h2>
            <p className="text-[15px] leading-[1.55] text-[#444444]">You do not need to learn everything. You just need to start. I have done the heavy lifting so you do not have to.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-7">
            {[
              { num: '01', title: 'Write Faster', desc: 'Emails, follow-ups, proposals. Stop staring at a blank screen and get a solid first draft in seconds.' },
              { num: '02', title: 'Research Smarter', desc: 'Get clear, sourced answers to real questions without falling down a 47-tab rabbit hole.' },
              { num: '03', title: 'Create Content', desc: 'Blog posts, social captions, newsletters. Write once, publish anywhere, without hiring a copywriter.' },
              { num: '04', title: 'Save Time On Admin', desc: 'Summarise documents, extract notes, draft agendas. Let AI handle the structure, you keep the strategy.' },
              { num: '05', title: 'Repurpose Everything', desc: 'Turn one piece of content into five. A blog becomes a post, an email, a script and a caption.' }
            ].map((item, i) => (
              <div key={i} className="bg-[#FAFAFA] border border-[#E2E2E2] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#004AAD] transition-all group">
                <div className="font-dm-sans font-black text-[14px] text-[#004AAD] tracking-wider mb-3.5">{item.num}</div>
                <h3 className="font-dm-sans font-black text-[16px] mb-2.5 leading-tight text-[#111111]">{item.title}</h3>
                <p className="text-[13px] leading-[1.5] text-[#444444]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="https://aieconomy.thrivecart.com/sarahs-ai-toolkit/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-[1.5px] border-[#111111] text-[#111111] text-[14px] font-semibold hover:bg-[#111111] hover:text-white transition-all group">
              Show Me How <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* BLUEPRINT */}
      <section className="py-16 bg-[#FAFAFA] border-y border-[#E2E2E2]">
        <div className="max-w-[960px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-dm-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#E8890C] mb-3.5">What's Inside</div>
              <h2 className="font-dm-sans font-black text-[26px] md:text-[38px] leading-[1.1] text-[#111111] mb-4.5">My Blueprint. Your Shortcut.</h2>
              <p className="text-[15px] leading-[1.65] text-[#444444] mb-6">This is not a directory. It is my actual blueprint: the tools I use every day, with direct links to every one of them, honest reviews, and exactly how I use them in my business.</p>
              <ul className="list-none p-0 m-0 space-y-0">
                {[
                  { bold: "The tools I actually use.", text: "Not a sponsored list. Not every tool that exists. The ones I use daily, recommend to clients, and trust." },
                  { bold: "Direct links to every tool.", text: "No searching. No guessing. Click through and get started immediately." },
                  { bold: "What each tool costs.", text: "Free tiers, paid plans, and when the upgrade is actually worth it." },
                  { bold: "What each tool is best for.", text: "So you stop using the wrong tool for the wrong job." },
                  { bold: "Sarah's honest take.", text: "My real opinion on each tool. What I love, what frustrates me, and whether I would recommend it or not." },
                  { bold: "Organised by use case.", text: "Core AI, automate, build, content, video, audio, design, meetings and more. Every business need covered." }
                ].map((item, i) => (
                  <li key={i} className="py-3.5 text-[14px] leading-[1.55] text-[#444444] border-b border-[#E2E2E2] last:border-b-0 flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-[18px] h-[18px] rounded-full bg-[#004AAD] flex items-center justify-center">
                      <Check size={10} className="text-white" strokeWidth={4} />
                    </div>
                    <span><strong className="text-[#111111] font-semibold">{item.bold}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white border border-[#E2E2E2] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                <div className="bg-[#FAFAFA] border-b border-[#E2E2E2] p-2.5 px-3.5 flex items-center gap-1.5">
                  <span className="w-[9px] h-[9px] rounded-full bg-[#FF5F57]"></span>
                  <span className="w-[9px] h-[9px] rounded-full bg-[#FEBC2E]"></span>
                  <span className="w-[9px] h-[9px] rounded-full bg-[#28C840]"></span>
                  <div className="ml-2 flex-1 bg-white border border-[#E2E2E2] rounded-md px-2.5 py-1 text-[10px] text-[#777777]">aieconomy.ai/use-cases</div>
                </div>
                <div className="p-[18px]">
                  <div className="font-dm-sans font-black text-[14px] text-[#111111] mb-1">Use Cases</div>
                  <div className="text-[11px] text-[#777777] mb-3.5">31 tools · personally tested</div>
                  <div className="flex gap-1.5 mb-3.5 flex-wrap">
                    {['All', 'Core AI', 'Automate', 'Content'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all ${activeFilter === cat
                          ? 'bg-[#111111] text-white'
                          : 'bg-white border border-[#E2E2E2] text-[#444444] hover:border-[#004AAD] hover:text-[#004AAD]'
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 blur-[5px] select-none pointer-events-none">
                    {filteredTools.map((tool, i) => (
                      <div key={i} className="bg-white border border-[#E2E2E2] rounded-xl p-[11px] relative">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-6 h-6 rounded-md bg-[#FAFAFA] border border-[#E2E2E2] flex items-center justify-center font-dm-sans font-black text-[11px] text-[#004AAD]">{tool.fav}</div>
                          <div>
                            <div className="font-dm-sans font-black text-[11px] text-[#111111] leading-none">{tool.name}</div>
                            <div className="text-[9px] text-[#777777] mt-0.5">{tool.by}</div>
                          </div>
                        </div>
                        <span className={`inline-block text-[8px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full mb-1.5 ${tool.orange ? 'bg-orange-500/15 text-[#E8890C]' : 'bg-[#E6F1FB] text-[#004AAD]'}`}>{tool.cat}</span>
                        <div className="text-[10px] text-[#444444] leading-relaxed">{tool.desc}</div>
                        <div className={`absolute top-[11px] right-[11px] w-[18px] h-[18px] rounded-full flex items-center justify-center ${tool.star ? 'bg-[#E8890C] text-white' : 'bg-white border border-[#E2E2E2] text-[#E2E2E2]'}`}>
                          <Star size={9} fill={tool.star ? 'currentColor' : 'none'} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-8">
          <div className="text-center max-w-[680px] mx-auto mb-8">
            <div className="font-dm-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#E8890C] mb-3.5">What's In My Stack</div>
            <h2 className="font-dm-sans font-black text-[26px] md:text-[38px] leading-[1.1] text-[#111111] mb-3.5">AI Tools That Help Me Work Smarter.</h2>
            <p className="text-[15px] leading-[1.55] text-[#444444]">Here are just some of the things they help with.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-7">
            {[
              { title: "Core AI", desc: "The engine behind everything. Use AI search tools that power your daily work." },
              { title: "Automate", desc: "Automate emails, forms, and repetitive work. Set it up once, save hours weekly." },
              { title: "Build & Launch", desc: "Build websites, apps, and tools without needing a dev or spending a fortune." },
              { title: "Content", desc: "Write, edit, and repurpose content across every channel." },
              { title: "Video & Media", desc: "Create, edit, and publish video without a production team." },
              { title: "Audio & Voice", desc: "Generate voiceovers, clone your voice, and produce podcast-quality audio." },
              { title: "Design", desc: "Create presentations, graphics, and visual assets with professional tools." },
              { title: "Meetings", desc: "Record transcripts and summarise meetings. Never miss an action item." },
              { title: "Run Your Business", desc: "Manage projects, track workflows, and streamline operations with AI-powered tools." }
            ].map((use, i) => (
              <div key={i} className="bg-[#FAFAFA] border border-[#E2E2E2] rounded-[22px] p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#004AAD] transition-all group relative flex flex-col min-h-[190px]">
                <h3 className="font-dm-sans font-black text-[18px] mb-3 flex items-center justify-between gap-3 text-[#111111]">
                  {use.title}
                  <span className="inline-flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#E6F1FB] text-[#004AAD] text-sm group-hover:bg-[#004AAD] group-hover:text-white transition-all shrink-0">
                    <ArrowRight size={15} />
                  </span>
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-[#444444] flex-1">{use.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="https://aieconomy.thrivecart.com/sarahs-ai-toolkit/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#004AAD] text-white text-[15px] font-semibold hover:bg-[#003A8C] transition-all hover:-translate-y-px group">
              Explore The Full Blueprint <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* MANAGE BAND (DARK) */}
      <section className="bg-[#111111] text-white py-16">
        <div className="max-w-[960px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-dm-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#E8890C] mb-3.5">Stay Organised</div>
              <h2 className="font-dm-sans font-black text-[26px] md:text-[38px] leading-[1.1] text-white mb-4.5">Manage Your Tools<br />All In One Place.</h2>
              <p className="text-[16px] leading-[1.65] text-white/80 mb-6 max-w-[520px]">
                Remembering what you are using for which use case is impossible. <strong className="text-[#E8890C] font-semibold">Not any more.</strong> Curate your favourite tools from my Toolkit here, add others that work for you. Finally, a home to track and manage your AI tools.
              </p>
              <Link href="https://aieconomy.thrivecart.com/sarahs-ai-toolkit/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#111111] text-[15px] font-semibold hover:bg-[#E8890C] hover:text-white transition-all hover:-translate-y-px group">
                Get Instant Access <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[20px] p-8 aspect-[5/4] flex flex-col justify-center gap-3.5 manage-grid-pattern relative overflow-hidden">
              <div className="flex flex-col gap-3.5 blur-[5px] select-none pointer-events-none">
                {[
                  { fav: 'C', title: 'Claude', cat: 'My Pick · Anthropic', star: true },
                  { fav: 'G', title: 'Gamma', cat: 'Presentations · Gamma', star: true },
                  { fav: 'F', title: 'Figma', cat: 'Design (UI) · Figma', star: false }
                ].map((mock, i) => (
                  <div key={i} className="bg-white rounded-xl p-3.5 px-4 flex items-center gap-3 shadow-2xl shadow-black/40">
                    <div className="w-8 h-8 rounded-lg bg-[#FAFAFA] border border-[#E2E2E2] flex items-center justify-center font-dm-sans font-black text-sm text-[#004AAD] flex-shrink-0">{mock.fav}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-dm-sans font-bold text-[13px] text-[#111111] leading-none">{mock.title}</div>
                      <div className="text-[10px] text-[#777777] uppercase tracking-wider mt-1">{mock.cat}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${mock.star ? 'bg-[#E8890C] text-white' : 'bg-white border border-[#E2E2E2] text-[#E2E2E2]'}`}>
                      <Star size={11} fill={mock.star ? 'currentColor' : 'none'} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY I BUILT THIS */}
      <section id="why" className="py-16 bg-white">
        <div className="max-w-[920px] mx-auto px-8">
          <div className="font-dm-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#E8890C] mb-3.5">Why I Built This</div>
          <h2 className="font-dm-sans font-black text-[26px] md:text-[38px] leading-[1.1] text-[#111111] mb-4.5">AI Is Life Changing. But Moving So Fast.</h2>
          <p className="text-[15px] leading-[1.7] text-[#444444] mb-6 max-w-[760px]">
            In late 2022, I started paying attention to AI. Not casually. I am not technical. I do not code. But I was running businesses and I could see that something significant was happening. So I started testing. Obsessively.
          </p>
          <div className="bg-[#004AAD] text-white p-6 md:px-7 md:py-6 rounded-2xl italic font-semibold text-[16px] leading-[1.55] my-6 max-w-[760px] shadow-xl shadow-blue-500/20">
            "I have genuinely tested every tool on this list. I only show what delivers results for me."
          </div>
          <p className="text-[15px] leading-[1.7] text-[#444444] mb-6 max-w-[760px]">
            Three years later, I have tested hundreds of tools, built AI workflows into my businesses, trained teams, and spoken at conferences about what actually works. Whether you are a creator, entrepreneur or team lead, this blueprint is designed to save you hours of research and help you adopt AI tools that move the needle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-10">
            <Link href="https://truckshowx.com.au/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer group">
              <img src="/assets/Winning-with-AI-Sarah-Balmer.png" alt="Sarah speaking at AI keynote" className="bg-[#F0F0F0] rounded-2xl aspect-[4/5] object-contain w-full shadow-lg group-hover:shadow-xl transition-all" />
            </Link>
            <img src="/assets/collab-interview.png" alt="Sarah hosting monthly AI Q&A" className="bg-[#F0F0F0] rounded-2xl aspect-[4/5] object-contain w-full shadow-lg" />
            <img src="/assets/speaking-hrgurus.jpeg" alt="Sarah keynote & panels" className="bg-[#F0F0F0] rounded-2xl aspect-[4/5] object-contain w-full shadow-lg" />
          </div>

          <div className="flex gap-2 flex-wrap mt-2">
            {["25+ Years Digital", "AI Strategist", "Speaker", "Balmer Agency"].map((tag, i) => (
              <span key={i} className="inline-block px-3 py-1.5 rounded-full bg-[#FAFAFA] border border-[#E2E2E2] text-[11px] font-semibold text-[#444444] tracking-wider uppercase">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-[#FAFAFA] border-y border-[#E2E2E2]">
        <div className="max-w-[960px] mx-auto px-8">
          <div className="text-center max-w-[560px] mx-auto mb-8">
            <div className="font-dm-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#004AAD] mb-3.5">What People Say</div>
            <h2 className="font-dm-sans font-black text-[26px] md:text-[38px] leading-[1.1] text-[#111111] mb-0">Real Results From Real Professionals.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5 mb-7">
            {[
              { body: "I thought ChatGPT was AI. Now I know there is so much more I can use it for every day.", name: "Anya G", role: "Real Estate Professional" },
              { body: "I have not been able to get started with AI. I love the benefits but had no time to learn. My whole team has adopted Sarah's AI Toolkit. It is a game changer.", name: "Michael S", role: "Business Owner" },
              { body: "This is a game changer. Everything all in one easy to access space. I get the starter kit too. We were off and racing straight away. Already saving so much time.", name: "Kate W", role: "Marketing Lead" }
            ].map((testi, i) => (
              <div key={i} className="bg-white border border-[#E2E2E2] rounded-2xl p-7">
                <div className="text-[#E8890C] text-sm tracking-widest mb-3.5">★★★★★</div>
                <p className="text-[14px] leading-[1.6] text-[#444444] mb-4.5 italic">"{testi.body}"</p>
                <div className="font-dm-sans font-bold text-[13px] text-[#111111]">{testi.name}</div>
                <div className="text-[11px] text-[#777777] uppercase tracking-wider mt-0.5">{testi.role}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="https://aieconomy.thrivecart.com/sarahs-ai-toolkit/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#004AAD] text-white text-[15px] font-semibold hover:bg-[#003A8C] transition-all hover:-translate-y-px group">
              Skip The Overwhelm <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-8">
          <div className="text-center max-w-[680px] mx-auto mb-8">
            <div className="font-dm-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#004AAD] mb-3.5">Get Started</div>
            <h2 className="font-dm-sans font-black text-[26px] md:text-[38px] leading-[1.1] text-[#111111] mb-3.5">Stop Delaying. Start With The Right Tools Today.</h2>
            <p className="text-[15px] leading-[1.55] text-[#444444]">Tested tools for everyday use. Every tool reviewed by Sarah.</p>
          </div>
          <div className="max-w-[480px] mx-auto bg-[#FAFAFA] border border-[#E2E2E2] rounded-[20px] p-10 md:p-12 text-center shadow-2xl shadow-blue-500/10">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#E6F1FB] text-[#004AAD] text-[11px] font-semibold tracking-widest uppercase mb-4.5">AI Toolkit</div>
            <h3 className="font-dm-sans font-black text-[22px] mb-2 text-[#111111]">The AI Blueprint</h3>
            <p className="text-[13px] text-[#444444] leading-[1.55] mb-6">My complete AI blueprint. Tested tools for every everyday use case, with direct links, honest reviews and pricing.</p>
            <span className="text-[14px] text-[#777777] line-through mb-1.5 block">was $97</span>
            <div className="font-dm-sans font-black text-[64px] text-[#111111] leading-none mb-1.5">$49</div>
            <div className="text-[11px] text-[#777777] tracking-widest uppercase mb-6">USD · One-Time Payment</div>
            <Link href="https://aieconomy.thrivecart.com/sarahs-ai-toolkit/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-full bg-[#004AAD] text-white text-[15px] font-semibold hover:bg-[#003A8C] transition-all hover:-translate-y-px group mb-5">
              Start Using AI Properly <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <ul className="list-none p-0 m-0 text-left border-t border-[#E2E2E2] pt-5 space-y-2">
              {[
                "Direct links to every tool",
                "Organised by everyday use case",
                "Honest reviews and pricing breakdowns",
                "Lifetime access"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#444444] leading-tight">
                  <div className="mt-1 flex-shrink-0 w-3.5 h-3.5 rounded-full bg-[#004AAD] flex items-center justify-center">
                    <Check size={9} className="text-white" strokeWidth={4} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#111111] text-white py-16 text-center">
        <div className="max-w-[760px] mx-auto px-8">
          <div className="font-dm-sans font-bold text-[11px] tracking-[0.14em] uppercase text-[#E8890C] mb-3.5">Stop The AI Tool Overwhelm</div>
          <h2 className="font-dm-sans font-black text-[26px] md:text-[38px] leading-[1.1] text-white mb-4.5">Your Blueprint Is Ready.</h2>
          <p className="text-[16px] text-white/80 mb-8 max-w-[520px] mx-auto">Manage all your tools in one place.</p>
          <Link href="https://aieconomy.thrivecart.com/sarahs-ai-toolkit/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#111111] text-[15px] font-semibold hover:bg-[#E8890C] hover:text-white transition-all hover:-translate-y-px group shadow-xl shadow-orange-500/20">
            Get The Toolkit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white border-t border-white/10">
        <div className="max-w-[1100px] mx-auto px-8 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-14">
            <div className="md:col-span-1">
              <Link href="/" className="block w-[160px] mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-70.40 -827.40 6209.80 954.80" className="w-full h-auto text-white">
                  <g fill="currentColor">
                    <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" /><path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
                  </g>
                </svg>
              </Link>
              <p className="text-[14px] text-white/60 leading-relaxed max-w-[320px]">
                AI trainer, strategist and consultant. Building AI platforms including parently.ai and aieconomy.ai. Cutting through the AI chaos so you can focus on what matters.
              </p>
            </div>
            <div>
              <h4 className="font-dm-sans font-bold text-[12px] tracking-[0.14em] uppercase text-white mb-4.5">Products</h4>
              <ul className="list-none p-0 space-y-2.5">
                <li><Link href="/toolkit/cluster" className="text-[14px] text-white/70 hover:text-white transition-colors">AI Toolkit</Link></li>
                <li><Link href="https://crm.njin.co/v2/preview/ggENr5gfNpziNl3iqQEB" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 hover:text-white transition-colors">AI Training</Link></li>
                <li><Link href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 hover:text-white transition-colors">Ask Sarah</Link></li>
                <li><Link href="/upsell/fresh-stack" className="text-[14px] text-white/70 hover:text-white transition-colors">Fresh Stack</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-dm-sans font-bold text-[12px] tracking-[0.14em] uppercase text-white mb-4.5">Education</h4>
              <ul className="list-none p-0 space-y-2.5">
                <li><Link href="/llm-comparison" className="text-[14px] text-white/70 hover:text-white transition-colors">LLMs</Link></li>
                <li><Link href="/toolkit/cluster" className="text-[14px] text-white/70 hover:text-white transition-colors">Use Cases</Link></li>
                <li><Link href="/ai-tips" className="text-[14px] text-white/70 hover:text-white transition-colors">AI Tips</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-dm-sans font-bold text-[12px] tracking-[0.14em] uppercase text-white mb-4.5">Company</h4>
              <ul className="list-none p-0 space-y-2.5">
                <li><Link href="/about" className="text-[14px] text-white/70 hover:text-white transition-colors">About Sarah</Link></li>
                <li><Link href="https://www.youtube.com/@aieconomyai" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 hover:text-white transition-colors">Podcast</Link></li>
                <li><Link href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="text-[14px] text-white/70 hover:text-white transition-colors">Privacy & Data</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-7 border-t border-white/10 flex justify-between items-center text-[12px] text-white/50 flex-wrap gap-4">
            <div>© 2026 AI Economy. ABN: 24 602 295 698.</div>
            <div>Melbourne, Australia.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
