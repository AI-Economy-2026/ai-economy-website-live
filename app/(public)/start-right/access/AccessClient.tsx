"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThriveCartButton from "@/components/ThriveCartButton";

// ── OTP login card (shown when not authenticated) ─────────────────────────────
function LoginCard() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const t = setTimeout(() => setResendTimer((s) => s - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [resendTimer]);

  async function handleSendOtp(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send code.");
      setStep("otp");
      setResendTimer(60);
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyOtp(code?: string) {
    const finalCode = code ?? otp.join("");
    if (finalCode.length < 6 || loading) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: finalCode }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Invalid or expired code.");
      // Reload page — server component will now see the session cookie
      router.refresh();
      router.push("/start-right/access");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setOtp(["", "", "", "", "", ""]);
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    } finally {
      setLoading(false);
    }
  }

  function handleOtpChange(index: number, value: string) {
    if (!/^\d*$/.test(value)) return;
    const next = [...otp];
    if (value.length > 1) {
      const digits = value.replace(/\D/g, "").slice(0, 6 - index);
      digits.split("").forEach((d, i) => {
        if (index + i < 6) next[index + i] = d;
      });
      setOtp(next);
      const nextIdx = Math.min(index + digits.length, 5);
      otpRefs.current[nextIdx]?.focus();
      if (next.every((d) => d !== "")) handleVerifyOtp(next.join(""));
      return;
    }
    next[index] = value;
    setOtp(next);
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
    if (next.every((d) => d !== "")) handleVerifyOtp(next.join(""));
  }

  function handleOtpKeyDown(index: number, e: React.KeyboardEvent) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  }

  async function handleResend() {
    if (resendTimer > 0 || loading) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to resend.");
      setResendTimer(60);
      setOtp(["", "", "", "", "", ""]);
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (step === "email") {
    return (
      <div className="bg-white border border-[#E8E8E8] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <h2 className="text-[20px] font-black text-[#111111] mb-1.5 tracking-tight">
          Download Your Guide
        </h2>
        <p className="text-[14px] text-[#777777] mb-6 leading-relaxed">
          Enter the email you used at purchase to access your guide.
        </p>
        <form onSubmit={handleSendOtp}>
          <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            autoFocus
            className="w-full px-4 py-[13px] border border-[#E8E8E8] rounded-lg text-[14px] text-[#111111] placeholder-[#CCCCCC] mb-4 outline-none focus:border-[#004AAD] focus:shadow-[0_0_0_3px_rgba(0,74,173,0.08)] transition-all"
          />
          {error && (
            <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-4">
              <p className="text-red-600 text-[13px]">{error}</p>
            </div>
          )}
          <button
            type="submit"
            disabled={loading || !email}
            className="w-full py-[14px] rounded-lg text-[15px] font-bold text-white bg-[#004AAD] hover:bg-[#003A8C] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Sending code..." : "Send My Access Code"}
          </button>
        </form>
        <div className="mt-5 pt-4 border-t border-[#F5F5F5]">
          <p className="text-[12px] text-[#777777] leading-relaxed">
            We will send a one-time access code to the email you used at
            purchase. Check your inbox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E8E8E8] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <button
        onClick={() => {
          setStep("email");
          setError("");
          setOtp(["", "", "", "", "", ""]);
        }}
        className="flex items-center gap-1.5 text-[#777777] hover:text-[#444444] text-[13px] mb-6 transition-colors"
      >
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>
      <h2 className="text-[20px] font-black text-[#111111] mb-1.5 tracking-tight">
        Check your inbox
      </h2>
      <p className="text-[14px] text-[#777777] mb-1">
        We sent a 6-digit code to
      </p>
      <p className="text-[14px] font-semibold text-[#111111] mb-6">{email}</p>
      <div className="flex gap-2 mb-5">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => {
              otpRefs.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={digit}
            onChange={(e) => handleOtpChange(i, e.target.value)}
            onKeyDown={(e) => handleOtpKeyDown(i, e)}
            className={`w-11 h-[52px] text-center text-xl font-bold rounded-lg border-2 outline-none transition-all ${
              digit
                ? "border-[#004AAD] bg-[#E6F1FB] text-[#004AAD]"
                : "border-[#E8E8E8] bg-[#F5F5F5] text-[#111111] focus:border-[#004AAD] focus:bg-white"
            }`}
          />
        ))}
      </div>
      {error && (
        <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-4">
          <p className="text-red-600 text-[13px]">{error}</p>
        </div>
      )}
      <button
        onClick={() => handleVerifyOtp()}
        disabled={loading || otp.some((d) => !d)}
        className="w-full py-[14px] rounded-lg text-[15px] font-bold text-white bg-[#004AAD] hover:bg-[#003A8C] disabled:opacity-40 disabled:cursor-not-allowed transition-colors mb-4"
      >
        {loading ? "Verifying..." : "Access My Guide"}
      </button>
      <p className="text-center text-[13px] text-[#777777]">
        Didn&apos;t receive it?{" "}
        {resendTimer > 0 ? (
          <span>Resend in {resendTimer}s</span>
        ) : (
          <button
            onClick={handleResend}
            disabled={loading}
            className="text-[#004AAD] font-semibold hover:text-[#003A8C] transition-colors"
          >
            Resend code
          </button>
        )}
      </p>
    </div>
  );
}

// ── Download card (shown when authenticated) ──────────────────────────────────
function DownloadCard() {
  return (
    <div className="bg-white border border-[#E8E8E8] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-2 mb-4">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1D9E75"
          strokeWidth="2"
        >
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
        <h2 className="text-[20px] font-black text-[#111111] tracking-tight">
          Your Guide Is Ready
        </h2>
      </div>
      <p className="text-[14px] text-[#777777] mb-6 leading-relaxed">
        Click below to download your copy of Start Right with AI.
      </p>
      <a
        href="/start-right-with-ai.pdf"
        download="Start_Right_with_AI.pdf"
        className="block text-center py-[14px] rounded-lg text-[15px] font-bold text-white bg-[#004AAD] hover:bg-[#003A8C] transition-colors mb-3"
      >
        Download Start Right with AI (PDF)
      </a>
      <p className="text-[12px] text-[#777777] text-center">
        PDF &middot; 14 pages
      </p>

      <div className="mt-6 pt-5 border-t border-[#F5F5F5]">
        <p className="text-[13px] text-[#444444] mb-3 font-semibold">
          Ready for your next step?
        </p>
        <Link
          href="/dashboard"
          className="block text-center py-3 rounded-lg text-[13px] font-bold text-[#004AAD] border-2 border-[#004AAD] hover:bg-[#E6F1FB] transition-colors"
        >
          Access the AI Toolkit
        </Link>
      </div>
    </div>
  );
}

// ── Page layout ───────────────────────────────────────────────────────────────
export default function StartRightAccessClient({
  isAuthenticated,
  userEmail,
  hasToolkit,
}: {
  isAuthenticated: boolean;
  userEmail: string;
  hasToolkit: boolean;
}) {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Header */}
      <div className="border-b border-[#E8E8E8] px-5 md:px-10 py-4">
        <Link
          href="/ai-economy"
          className="text-[13px] font-black tracking-[0.15em] uppercase text-[#111111]"
          style={{
            fontFamily:
              "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          aieconomy.ai
        </Link>
      </div>

      {/* Main: Left content + Right card */}
      <div className="max-w-[960px] mx-auto px-5 md:px-10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-8 md:gap-12 items-start">
        {/* Left */}
        <div>
          <h1 className="text-[32px] md:text-[36px] font-black text-[#111111] leading-[1.08] tracking-tight mb-4">
            Start Right with AI.
          </h1>
          <p className="text-[15px] text-[#444444] leading-[1.6] mb-8">
            My tried and tested prompts to get you going with AI now. Download
            your guide below and start getting results immediately.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10">
            {[
              { num: "20", label: "Prompts" },
              { num: "9", label: "Use Cases" },
              { num: "8", label: "Sections" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[28px] font-black text-[#111111]">
                  {s.num}
                </div>
                <div className="text-[11px] text-[#777777] mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Sarah quote */}
          <div className="flex gap-4 items-start">
            <div className="w-16 h-16 min-w-[64px] rounded-full overflow-hidden bg-[#E8E8E8]">
              <Image
                src="/assets/me-chair.png"
                alt="Sarah Balmer"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[15px] text-[#444444] italic leading-[1.6] mb-2">
                &ldquo;Your first useful AI output is 10 minutes away. Copy my
                prompts and get going.&rdquo;
              </p>
              <p className="text-[13px] font-bold text-[#111111]">
                Sarah Balmer
              </p>
              <p className="text-[11px] text-[#777777]">
                AI Strategist &amp; Trainer | AI Speaker | Host, AI That Works
                Podcast
              </p>
              <p className="text-[11px] text-[#777777]">
                CEO &amp; Founder, AI Economy | Creator, Parently.ai
              </p>
            </div>
          </div>
        </div>

        {/* Right: login or download */}
        {isAuthenticated ? <DownloadCard /> : <LoginCard />}
      </div>

      {/* Upsell cards */}
      <div className="border-t border-[#E8E8E8] bg-[#F5F5F5] px-5 md:px-10 py-10">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[13px] font-bold text-[#777777] uppercase tracking-[0.08em] mb-5">
            You might also like
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Start Winning */}
            <div className="bg-white border border-[#E8E8E8] rounded-2xl p-6 flex flex-col">
              <h3 className="text-[15px] font-black text-[#111111] mb-1">
                Start Winning with AI
              </h3>
              <p className="text-[13px] font-semibold text-[#004AAD] mb-2">
                Go deeper. Understand AI properly.
              </p>
              <p className="text-[13px] text-[#444444] leading-[1.5] mb-4">
                5 modules. 25 lessons. From overwhelmed to operational.
              </p>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-[12px] text-[#CCCCCC] line-through">
                    $197
                  </span>
                  <span className="text-[22px] font-black text-[#111111]">
                    $97
                  </span>
                  <span className="text-[12px] text-[#777777]">USD</span>
                </div>
                <Link
                  href="/upsell/start-winning"
                  className="block text-center py-2.5 rounded-lg text-[13px] font-bold text-white bg-[#004AAD] hover:bg-[#003A8C] transition-colors"
                >
                  Get Start Winning with AI
                </Link>
              </div>
            </div>

            {/* Ask Sarah */}
            <div className="bg-[#E6F1FB] border border-[#c5ddf5] rounded-2xl p-6 flex flex-col">
              <h3 className="text-[15px] font-black text-[#111111] mb-1">
                Ask Sarah
              </h3>
              <p className="text-[13px] font-semibold text-[#004AAD] mb-2">
                Not sure what tool to use? Ask me.
              </p>
              <p className="text-[13px] text-[#444444] leading-[1.5] mb-4">
                AI chatbot trained on everything I know. Available 24/7.
              </p>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-[12px] text-[#CCCCCC] line-through">
                    $327
                  </span>
                  <span className="text-[22px] font-black text-[#111111]">
                    $149
                  </span>
                  <span className="text-[12px] text-[#777777]">USD/year</span>
                </div>
                <a
                  href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg border-2 border-[#004AAD] py-2.5 text-center text-[13px] font-bold text-[#004AAD] transition-colors hover:bg-white"
                >
                  Get Ask Sarah
                </a>
              </div>
            </div>

            {/* AI Toolkit — hidden if user already owns it */}
            {!hasToolkit && (
              <div className="bg-white border border-[#E8E8E8] rounded-2xl p-6 flex flex-col">
                <h3 className="text-[15px] font-black text-[#111111] mb-1">
                  AI Toolkit
                </h3>
                <p className="text-[13px] font-semibold text-[#004AAD] mb-2">
                  Get the full stack.
                </p>
                <p className="text-[13px] text-[#444444] leading-[1.5] mb-4">
                  My complete AI toolkit. 30+ tools. 9 categories. Honest
                  reviews.
                </p>
                <div className="mt-auto">
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-[12px] text-[#CCCCCC] line-through">
                      $97
                    </span>
                    <span className="text-[22px] font-black text-[#111111]">
                      $49
                    </span>
                    <span className="text-[12px] text-[#777777]">USD</span>
                  </div>
                  <ThriveCartButton
                    productId={7}
                    label="Get the Toolkit"
                    className="w-full py-2.5 rounded-lg text-[13px] font-bold text-white bg-[#004AAD] hover:bg-[#003A8C] transition-colors"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#E8E8E8] px-5 md:px-10 py-5 text-center text-[11px] text-[#777777]">
        AI Economy &middot; Sarah Balmer &middot;{" "}
        <Link href="/privacy" className="text-[#777777] hover:underline">
          Privacy Policy
        </Link>{" "}
        &middot;{" "}
        <Link href="/terms" className="text-[#777777] hover:underline">
          Terms and Conditions
        </Link>
      </div>
    </div>
  );
}
