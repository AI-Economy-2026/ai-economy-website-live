"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DM_Sans, Poppins } from "next/font/google";
import AskSarahWidget from "@/components/AskSarahWidget";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-dm-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function AiEconomyPage() {
  const [llmFaqOpen, setLlmFaqOpen] = useState(false);

  return (
    <div
      className={`${poppins.variable} ${dmSans.variable} font-sans bg-white text-[#0F172A]`}
    >
      {/* TOPBAR */}
      <div className="bg-[#0F172A] text-[#94A3B8] text-center py-[9px] px-4 text-[12px] font-[400]">
        Hundreds of AI tools personally tested by Sarah Balmer
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-[100] bg-white/94 backdrop-blur-[14px] border-b border-[#E2E8F0]">
        <div className="max-w-[1080px] mx-auto px-6 py-3 flex justify-between items-center">
          <Link
            href="/ai-economy"
            className="font-display text-[13px] font-[900] tracking-[0.12em] uppercase text-[#0F172A]"
          >
            AI <em className="not-italic text-[#004AAD]">Economy</em>
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link
              href="/llm-comparison"
              className="text-[13px] font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              LLMs
            </Link>
            <Link
              href="/toolkit/cluster"
              className="text-[13px] font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="/ai-tips"
              className="text-[13px] font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              AI Tips
            </Link>
            <Link
              href="/about"
              className="text-[13px] font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              About
            </Link>
            <Link
              href="/upsell/ask-sarah-waitlist"
              className="text-[13px] font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              Ask Sarah
            </Link>
            <Link
              href="/dashboard"
              className="text-[13px] font-semibold text-[#0F172A]"
            >
              Dashboard
            </Link>
            <a
              href="https://www.linkedin.com/in/SarahBalmer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#0A66C2]"
              title="LinkedIn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-[72px] px-0 text-center">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="font-display text-[11px] font-[700] tracking-[0.12em] uppercase text-[#0BA5C9] mb-[14px]">
            AI Economy Toolkit
          </div>
          <h1 className="font-display text-[32px] md:text-[44px] font-[800] leading-[1.15] tracking-[-0.02em] mb-4 text-[#0F172A]">
            Cut Through The AI Overwhelm.
          </h1>
          <p className="text-[16px] text-[#64748B] max-w-[540px] mx-auto mb-8 leading-[1.65]">
            I have personally tested hundreds of tools and this is what I use to
            get ahead with AI. From everyday AI to common AI use cases, this is
            my honest take on every single one.
          </p>
          <div className="flex gap-[10px] justify-center">
            <Link
              href="/ai-tips"
              className="inline-flex items-center justify-center gap-2 font-display font-semibold text-[15px] py-[14px] px-[32px] min-w-[180px] rounded-full bg-[#0F172A] text-white hover:bg-[#1e293b] transition-all"
            >
              Let's Go
            </Link>
          </div>
        </div>
      </section>

      {/* LLM SECTION */}
      <section className="py-[72px] bg-[#F8FAFC]" id="tools">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-8">
            <div className="font-display text-[11px] font-[700] tracking-[0.12em] uppercase text-[#0BA5C9] mb-[10px]">
              Start Here
            </div>
            <h2 className="font-display text-[28px] font-[800] tracking-[-0.02em] mb-2">
              Large Language Models & Search
            </h2>
            <p className="text-[14px] text-[#64748B] max-w-[500px] mx-auto">
              The engine behind most of what AI can do. Before anything else in
              this stack, you need one of these.
            </p>
          </div>

          <h3 className="font-display text-[22px] font-[800] text-[#0F172A] mb-5 tracking-[-0.01em]">
            Not A Day Goes By Without These Three.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
            {/* Claude */}
            <Link
              href="/toolkit/claude-deep-dive"
              className="group relative border border-[#E2E8F0] rounded-[16px] p-6 bg-white hover:border-[#004AAD] hover:shadow-[0_4px_20px_rgba(0,74,173,0.06)] hover:-translate-y-[2px] transition-all flex flex-col"
            >
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#94A3B8] group-hover:bg-[#004AAD] group-hover:text-white transition-all">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 10h10M11 6l4 4-4 4" />
                </svg>
              </div>
              <div className="absolute top-[14px] right-[54px] text-[9px] font-[700] px-[10px] py-[3px] rounded-full bg-[#E0F5FA] text-[#085041] uppercase tracking-[0.05em]">
                Daily
              </div>
              <div className="flex items-center gap-3 mb-[14px]">
                <div className="w-10 h-10 rounded-[10px] bg-[#D4A574] flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M11 3L14.5 9.5L11 11L7.5 9.5L11 3Z"
                      fill="#fff"
                      opacity="0.9"
                    />
                    <path
                      d="M11 11L14.5 9.5L17 15L11 19L5 15L7.5 9.5L11 11Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-display text-[16px] font-[700]">
                    Claude
                  </div>
                  <div className="text-[12px] text-[#94A3B8] mt-[1px]">
                    Anthropic
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-[#64748B] leading-[1.55] mb-[14px]">
                My number one tool. Best for long-form writing, deep analysis,
                nuanced reasoning and coding. Designed to be helpful, harmless
                and honest.
              </p>
              <div className="mt-auto pt-[14px] border-t border-[#E2E8F0] text-[12px] text-[#94A3B8]">
                Free plan available.{" "}
                <strong className="text-[#0F172A] font-[600]">
                  Pro: US$20/month
                </strong>
              </div>
            </Link>

            {/* ChatGPT */}
            <Link
              href="/toolkit/chatgpt-deep-dive"
              className="group relative border border-[#E2E8F0] rounded-[16px] p-6 bg-white hover:border-[#004AAD] hover:shadow-[0_4px_20px_rgba(0,74,173,0.06)] hover:-translate-y-[2px] transition-all flex flex-col"
            >
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#94A3B8] group-hover:bg-[#004AAD] group-hover:text-white transition-all">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 10h10M11 6l4 4-4 4" />
                </svg>
              </div>
              <div className="absolute top-[14px] right-[54px] text-[9px] font-[700] px-[10px] py-[3px] rounded-full bg-[#E0F5FA] text-[#085041] uppercase tracking-[0.05em]">
                Daily
              </div>
              <div className="flex items-center gap-3 mb-[14px]">
                <div className="w-10 h-10 rounded-[10px] bg-[#10A37F] flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      stroke="#fff"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M8 11L10 13L14 9"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-display text-[16px] font-[700]">
                    ChatGPT
                  </div>
                  <div className="text-[12px] text-[#94A3B8] mt-[1px]">
                    OpenAI
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-[#64748B] leading-[1.55] mb-[14px]">
                My thinking partner. The most widely used AI assistant.
                Versatile for writing, research, image generation and custom
                GPTs.
              </p>
              <div className="mt-auto pt-[14px] border-t border-[#E2E8F0] text-[12px] text-[#94A3B8]">
                Free plan available.{" "}
                <strong className="text-[#0F172A] font-[600]">
                  Plus: US$20/month
                </strong>
              </div>
            </Link>

            {/* Perplexity */}
            <Link
              href="/toolkit/perplexity-deep-dive"
              className="group relative border border-[#E2E8F0] rounded-[16px] p-6 bg-white hover:border-[#004AAD] hover:shadow-[0_4px_20px_rgba(0,74,173,0.06)] hover:-translate-y-[2px] transition-all flex flex-col"
            >
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#94A3B8] group-hover:bg-[#004AAD] group-hover:text-white transition-all">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 10h10M11 6l4 4-4 4" />
                </svg>
              </div>
              <div className="absolute top-[14px] right-[54px] text-[9px] font-[700] px-[10px] py-[3px] rounded-full bg-[#E0F5FA] text-[#085041] uppercase tracking-[0.05em]">
                Daily
              </div>
              <div className="flex items-center gap-3 mb-[14px]">
                <div className="w-10 h-10 rounded-[10px] bg-[#20B2AA] flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle
                      cx="10"
                      cy="10"
                      r="5.5"
                      stroke="#fff"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <line
                      x1="14"
                      y1="14"
                      x2="18"
                      y2="18"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-display text-[16px] font-[700]">
                    Perplexity
                  </div>
                  <div className="text-[12px] text-[#94A3B8] mt-[1px]">
                    Perplexity AI
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-[#64748B] leading-[1.55] mb-[14px]">
                My live research starting point. AI-powered search engine with
                cited sources. Not an LLM, a wrapper built on top of them.
              </p>
              <div className="mt-auto pt-[14px] border-t border-[#E2E8F0] text-[12px] text-[#94A3B8]">
                Free plan available.{" "}
                <strong className="text-[#0F172A] font-[600]">
                  Pro: US$20/month
                </strong>
              </div>
            </Link>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/llm-comparison"
              className="inline-flex items-center justify-center gap-2 bg-[#004AAD] text-white font-display font-semibold text-[14px] py-3 px-7 rounded-full hover:bg-[#003A8C] transition-all"
            >
              Compare All 6 Models
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 3L9 7L5 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>

          {/* FAQ */}
          <div className="max-w-[600px] mx-auto mt-5">
            <div
              onClick={() => setLlmFaqOpen(!llmFaqOpen)}
              className={`flex items-center justify-between p-4 px-[18px] bg-[#F8FAFC] border border-[#E2E8F0] cursor-pointer transition-all duration-150 ${llmFaqOpen ? "rounded-t-[12px]" : "rounded-[12px]"}`}
            >
              <span className="font-display text-[14px] font-[700] text-[#0F172A]">
                What Is An LLM?
              </span>
              <span
                className={`text-[18px] text-[#94A3B8] transition-transform ${llmFaqOpen ? "rotate-45" : ""}`}
              >
                {llmFaqOpen ? "×" : "+"}
              </span>
            </div>
            {llmFaqOpen && (
              <div className="p-4 px-[18px] border border-[#E2E8F0] border-t-0 rounded-b-[12px] bg-white">
                <p className="text-[13px] text-[#64748B] leading-[1.6] mb-[10px]">
                  A large language model (LLM) is the AI behind tools like
                  Claude, ChatGPT and Gemini. You type a question or
                  instruction, it generates a response. Think of it as a very
                  smart writing and thinking partner that can draft, analyse,
                  summarise and brainstorm with you.
                </p>
                <p className="text-[13px] text-[#64748B] leading-[1.6]">
                  Perplexity is different. It is an AI search engine that pulls
                  live information from the web with sources. Not an LLM, but
                  essential alongside one.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TOOL CATEGORIES */}
      <section className="py-[72px]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="text-center mb-8">
            <div className="font-display text-[11px] font-[700] tracking-[0.12em] uppercase text-[#0BA5C9] mb-[10px]">
              Explore The Toolkit
            </div>
            <h2 className="font-display text-[28px] font-[800] tracking-[-0.02em] mb-2">
              8 Use Cases. Hundreds Of Tools Tested. My Honest Take.
            </h2>
            <p className="text-[14px] text-[#64748B] max-w-[480px] mx-auto">
              Every tool has been personally tested. If it is not worth your
              time, I will tell you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {/* Automate */}
            <Link
              href="/toolkit/cluster#automate"
              className="relative group border border-[#E2E8F0] rounded-[16px] p-6 bg-white hover:border-[#004AAD] hover:shadow-[0_4px_20px_rgba(0,74,173,0.06)] hover:-translate-y-[2px] transition-all flex flex-col"
            >
              <div className="absolute top-[14px] right-[14px] text-[10px] font-[700] py-1 px-3 rounded-full bg-[#E6F1FB] text-[#004AAD]">
                3 tools
              </div>
              <div className="w-10 h-10 rounded-[10px] bg-[#E1F5EE] flex items-center justify-center mb-[14px] text-[#1D9E75]">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="14" height="14" rx="3" />
                  <path d="M7 10l2 2 4-4" />
                </svg>
              </div>
              <div className="font-display text-[17px] font-[800] mb-[6px] text-[#0F172A]">
                Automate & Save Time
              </div>
              <p className="text-[13px] text-[#64748B] leading-[1.5] mb-[14px]">
                AI agents that handle multi-step tasks and automate workflows
                independently.
              </p>
              <div className="flex flex-wrap gap-[5px]">
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Lindy
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Manus
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Genspark
                </span>
              </div>
            </Link>

            {/* Build */}
            <Link
              href="/toolkit/cluster#build"
              className="relative group border border-[#E2E8F0] rounded-[16px] p-6 bg-white hover:border-[#004AAD] hover:shadow-[0_4px_20px_rgba(0,74,173,0.06)] hover:-translate-y-[2px] transition-all flex flex-col"
            >
              <div className="absolute top-[14px] right-[14px] text-[10px] font-[700] py-1 px-3 rounded-full bg-[#E6F1FB] text-[#004AAD]">
                2 tools
              </div>
              <div className="w-10 h-10 rounded-[10px] bg-[#FFF3E0] flex items-center justify-center mb-[14px] text-[#E8890C]">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="10" cy="10" r="7" />
                  <path d="M10 6v4l3 2" />
                </svg>
              </div>
              <div className="font-display text-[17px] font-[800] mb-[6px] text-[#0F172A]">
                Build & Launch
              </div>
              <p className="text-[13px] text-[#64748B] leading-[1.5] mb-[14px]">
                Turn ideas into working apps and websites without a development
                team.
              </p>
              <div className="flex flex-wrap gap-[5px]">
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Lovable
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Blink.new
                </span>
              </div>
            </Link>

            {/* Create Content */}
            <Link
              href="/toolkit/cluster#content"
              className="relative group border border-[#E2E8F0] rounded-[16px] p-6 bg-white hover:border-[#004AAD] hover:shadow-[0_4px_20px_rgba(0,74,173,0.06)] hover:-translate-y-[2px] transition-all flex flex-col"
            >
              <div className="absolute top-[14px] right-[14px] text-[10px] font-[700] py-1 px-3 rounded-full bg-[#E6F1FB] text-[#004AAD]">
                3 tools
              </div>
              <div className="w-10 h-10 rounded-[10px] bg-[#F3EEFF] flex items-center justify-center mb-[14px] text-[#7C3AED]">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 17V7l4 4 4-8 4 6 2-2v10H3z" />
                </svg>
              </div>
              <div className="font-display text-[17px] font-[800] mb-[6px] text-[#0F172A]">
                Create Content
              </div>
              <p className="text-[13px] text-[#64748B] leading-[1.5] mb-[14px]">
                Social media posts, presentations, visual content and written
                material at scale.
              </p>
              <div className="flex flex-wrap gap-[5px]">
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Blotato
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Gamma
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Napkin
                </span>
              </div>
            </Link>

            {/* Design */}
            <Link
              href="/toolkit/cluster#design"
              className="relative group border border-[#E2E8F0] rounded-[16px] p-6 bg-white hover:border-[#004AAD] hover:shadow-[0_4px_20px_rgba(0,74,173,0.06)] hover:-translate-y-[2px] transition-all flex flex-col"
            >
              <div className="absolute top-[14px] right-[14px] text-[10px] font-[700] py-1 px-3 rounded-full bg-[#E6F1FB] text-[#004AAD]">
                3 tools
              </div>
              <div className="w-10 h-10 rounded-[10px] bg-[#FFF1F2] flex items-center justify-center mb-[14px] text-[#E11D48]">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 2h8l4 4v12H4V2z" />
                  <path d="M12 2v4h4" />
                </svg>
              </div>
              <div className="font-display text-[17px] font-[800] mb-[6px] text-[#0F172A]">
                Design & Presentation
              </div>
              <p className="text-[13px] text-[#64748B] leading-[1.5] mb-[14px]">
                Professional design tools for brand assets, UI and visual
                content.
              </p>
              <div className="flex flex-wrap gap-[5px]">
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Figma
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Canva
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Midjourney
                </span>
              </div>
            </Link>

            {/* Video */}
            <Link
              href="/toolkit/cluster#video"
              className="relative group border border-[#E2E8F0] rounded-[16px] p-6 bg-white hover:border-[#004AAD] hover:shadow-[0_4px_20px_rgba(0,74,173,0.06)] hover:-translate-y-[2px] transition-all flex flex-col"
            >
              <div className="absolute top-[14px] right-[14px] text-[10px] font-[700] py-1 px-3 rounded-full bg-[#E6F1FB] text-[#004AAD]">
                4 tools
              </div>
              <div className="w-10 h-10 rounded-[10px] bg-[#FEF9E7] flex items-center justify-center mb-[14px] text-[#D97706]">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="10" cy="10" r="7" />
                  <circle cx="10" cy="10" r="3" />
                </svg>
              </div>
              <div className="font-display text-[17px] font-[800] mb-[6px] text-[#0F172A]">
                Video & Media
              </div>
              <p className="text-[13px] text-[#64748B] leading-[1.5] mb-[14px]">
                AI avatars, screen recording, clip generation and video content
                creation.
              </p>
              <div className="flex flex-wrap gap-[5px]">
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  HeyGen
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Loom
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Opus Clip
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Higgsfield
                </span>
              </div>
            </Link>

            {/* Audio */}
            <Link
              href="/toolkit/cluster#audio"
              className="relative group border border-[#E2E8F0] rounded-[16px] p-6 bg-white hover:border-[#004AAD] hover:shadow-[0_4px_20px_rgba(0,74,173,0.06)] hover:-translate-y-[2px] transition-all flex flex-col"
            >
              <div className="absolute top-[14px] right-[14px] text-[10px] font-[700] py-1 px-3 rounded-full bg-[#E6F1FB] text-[#004AAD]">
                2 tools
              </div>
              <div className="w-10 h-10 rounded-[10px] bg-[#E0F5FA] flex items-center justify-center mb-[14px] text-[#0BA5C9]">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="4" width="16" height="10" rx="2" />
                  <path d="M6 17h8" />
                </svg>
              </div>
              <div className="font-display text-[17px] font-[800] mb-[6px] text-[#0F172A]">
                Audio & Voice
              </div>
              <p className="text-[13px] text-[#64748B] leading-[1.5] mb-[14px]">
                Turn your voice into content, create voiceovers and transcribe
                speech instantly.
              </p>
              <div className="flex flex-wrap gap-[5px]">
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  ElevenLabs
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Wispr Flow
                </span>
              </div>
            </Link>

            {/* Productivity */}
            <Link
              href="/toolkit/cluster#productivity"
              className="relative group border border-[#E2E8F0] rounded-[16px] p-6 bg-white hover:border-[#004AAD] hover:shadow-[0_4px_20px_rgba(0,74,173,0.06)] hover:-translate-y-[2px] transition-all flex flex-col"
            >
              <div className="absolute top-[14px] right-[14px] text-[10px] font-[700] py-1 px-3 rounded-full bg-[#E6F1FB] text-[#004AAD]">
                4 tools
              </div>
              <div className="w-10 h-10 rounded-[10px] bg-[#E6F1FB] flex items-center justify-center mb-[14px] text-[#004AAD]">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 5h14M3 10h10M3 15h6" />
                </svg>
              </div>
              <div className="font-display text-[17px] font-[800] mb-[6px] text-[#0F172A]">
                Productivity & Business
              </div>
              <p className="text-[13px] text-[#64748B] leading-[1.5] mb-[14px]">
                Manage meetings, tasks, CRM, scheduling and team workflows.
              </p>
              <div className="flex flex-wrap gap-[5px]">
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Read AI
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Calendly
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  GoHighLevel
                </span>
                <span className="text-[11px] font-[600] py-[4px] px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0]">
                  Asana
                </span>
              </div>
            </Link>

            {/* Build Your Own */}
            <div className="relative border-2 border-dashed border-[#004AAD] rounded-[16px] p-6 py-6 bg-white text-center flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-[10px] bg-[#E6F1FB] flex items-center justify-center mb-4">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#004AAD"
                  strokeWidth="1.5"
                >
                  <path d="M10 2l2.35 4.76 5.25.77-3.8 3.7.9 5.24L10 13.97l-4.7 2.5.9-5.24-3.8-3.7 5.25-.77L10 2z" />
                </svg>
              </div>
              <div className="font-display text-[17px] font-[800] mb-[6px] text-[#0F172A]">
                Build Your Own AI Stack
              </div>
              <p className="text-[13px] text-[#64748B] leading-[1.5] mb-4">
                Pick your favourite tools and create your own dashboard. Keep
                everything in one place.
              </p>
              <Link
                href="/dashboard"
                className="mt-auto inline-flex items-center justify-center font-display font-semibold text-[12px] py-2 px-5 rounded-full bg-[#004AAD] text-white hover:bg-[#003A8C] transition-all"
              >
                Go To Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SARAH SECTION */}
      <section className="py-[72px] bg-[#F8FAFC]">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-center">
            <div className="aspect-[3/4] bg-[#F1F5F9] rounded-[16px] overflow-hidden flex items-center justify-center border border-[#E2E8F0]">
              <img
                src="/sarah-hero.png"
                alt="Sarah Balmer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-display text-[11px] font-[700] tracking-[0.12em] uppercase text-[#0BA5C9] mb-[10px]">
                About Sarah
              </div>
              <h2 className="font-display text-[28px] font-[800] tracking-[-0.02em] mb-3">
                Built By Someone Who Uses AI Every Day
              </h2>
              <p className="text-[14px] text-[#64748B] leading-[1.7] mb-3">
                I spent 25 years building brands, strategies and digital
                marketing campaigns. Then generative AI arrived and changed
                everything. This toolkit is not a tech blog. It is a practical
                guide built by someone who uses these tools to run real
                businesses.
              </p>

              <div className="flex gap-[48px] my-6 flex-wrap justify-start">
                <div className="text-center">
                  <div className="font-display text-[28px] font-[900] text-[#004AAD]">
                    25+
                  </div>
                  <div className="text-[11px] text-[#94A3B8] max-w-[100px]">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-display text-[28px] font-[900] text-[#004AAD]">
                    100's
                  </div>
                  <div className="text-[11px] text-[#94A3B8] max-w-[100px]">
                    AI Tools Tested
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-display text-[28px] font-[900] text-[#004AAD]">
                    8
                  </div>
                  <div className="text-[11px] text-[#94A3B8] max-w-[100px]">
                    AI Use Cases
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-5">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center font-display font-semibold text-[12px] py-2 px-[22px] min-w-[140px] rounded-full bg-[#004AAD] text-white hover:bg-[#003A8C] transition-all"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-[72px] bg-[#0F172A] text-white text-center">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="font-display text-[11px] font-[700] tracking-[0.12em] uppercase text-[#0BA5C9] mb-[10px]">
            Keep Learning
          </div>
          <h2 className="font-display text-[28px] tracking-[-0.02em] text-white mb-3">
            Ready To Go Deeper?
          </h2>
          <p className="text-[15px] text-[#94A3B8] max-w-[460px] mx-auto mb-6">
            Practical, self-paced online training to help you get real results
            from the AI tools in your stack. Get started the right way.
          </p>
          <Link
            href="/ai-tips"
            className="inline-flex items-center justify-center font-display font-semibold text-[15px] py-[14px] px-[32px] min-w-[180px] rounded-full bg-[#004AAD] text-white hover:bg-[#003A8C] transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F172A] text-[#94A3B8] py-12 pb-7">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-[36px] mb-9">
            <div className="text-[13px] leading-[1.7]">
              <div className="font-display text-[13px] font-[900] tracking-[0.12em] uppercase mb-[10px]">
                <span className="text-white">AI</span>{" "}
                <span className="text-white">Economy</span>
              </div>
              <p>
                I am an AI trainer, strategist and consultant. I build AI
                platforms, including parently.ai and aieconomy.ai. For 25 years
                I've helped businesses navigate through digital change. Now with
                AI.
              </p>
            </div>
            <div>
              <h4 className="font-display text-[10px] font-[700] tracking-[0.1em] uppercase text-[#CBD5E1] mb-[14px]">
                Toolkit
              </h4>
              <nav className="flex flex-col gap-[7px]">
                <Link
                  href="/llm-comparison"
                  className="text-[13px] hover:text-white transition-colors"
                >
                  LLM Comparison
                </Link>
                <Link
                  href="/toolkit/cluster"
                  className="text-[13px] hover:text-white transition-colors"
                >
                  All Tools
                </Link>
                <Link
                  href="/ai-tips"
                  className="text-[13px] hover:text-white transition-colors"
                >
                  AI Tips
                </Link>
                <Link
                  href="/dashboard"
                  className="text-[13px] hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="font-display text-[10px] font-[700] tracking-[0.1em] uppercase text-[#CBD5E1] mb-[14px]">
                Learn
              </h4>
              <nav className="flex flex-col gap-[7px]">
                <Link
                  href="/toolkit/claude-deep-dive"
                  className="text-[13px] hover:text-white transition-colors"
                >
                  Claude deep dive
                </Link>
                <Link
                  href="/toolkit/chatgpt-deep-dive"
                  className="text-[13px] hover:text-white transition-colors"
                >
                  ChatGPT deep dive
                </Link>
                <Link
                  href="/toolkit/perplexity-deep-dive"
                  className="text-[13px] hover:text-white transition-colors"
                >
                  Perplexity deep dive
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="font-display text-[10px] font-[700] tracking-[0.1em] uppercase text-[#CBD5E1] mb-[14px]">
                Company
              </h4>
              <nav className="flex flex-col gap-[7px]">
                <Link
                  href="/about"
                  className="text-[13px] hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                  className="text-[13px] hover:text-white transition-colors"
                >
                  Ask Sarah
                </Link>
                <Link
                  href="/privacy"
                  className="text-[13px] hover:text-white transition-colors"
                >
                  Privacy &amp; data
                </Link>
                <Link
                  href="#"
                  className="text-[13px] hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
          <div className="border-t border-[#1e293b] pt-5 text-[11px] text-[#64748B] flex flex-col md:flex-row justify-between flex-wrap gap-[10px]">
            <span>&copy; 2026 AI Economy. ABN: 24602295698</span>
            <div className="flex gap-[16px]">
              <Link href="/privacy" className="hover:text-[#94A3B8]">
                Privacy
              </Link>
              <Link href="/privacy" className="hover:text-[#94A3B8]">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-[#94A3B8]">
                Data disclaimer
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <AskSarahWidget />
    </div>
  );
}
