"use client";

import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type SalesClientProps = {
  isAuthenticated: boolean;
  userEmail: string;
  ownedProducts: string[];
  hasToolkit?: boolean;
};

function LoginCard({
  initialEmail,
  onLoggedIn,
}: {
  initialEmail: string;
  onLoggedIn: (email: string) => void;
}) {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState(initialEmail ?? "");
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
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

  async function handleSendOtp(e: FormEvent) {
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
      if (data.exists === false) {
        setError(
          "We could not find a purchase for that email. Use the offers below to get access.",
        );
        return;
      }
      setStep("otp");
      setResendTimer(60);
      setTimeout(() => otpRefs.current[0]?.focus(), 120);
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
      onLoggedIn(email);
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setOtp(["", "", "", "", "", ""]);
      setTimeout(() => otpRefs.current[0]?.focus(), 120);
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

  function handleOtpKeyDown(index: number, e: KeyboardEvent) {
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
      setTimeout(() => otpRefs.current[0]?.focus(), 120);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (step === "email") {
    return (
      <div className="bg-white border border-[#E8E8E8] rounded-2xl p-9 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <h2 className="text-[24px] font-black text-[#111111] mb-1.5 tracking-tight">
          Welcome Back
        </h2>
        <p className="text-[14px] text-[#777777] mb-6 leading-relaxed">
          Enter your email to access your guide.
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
            className="w-full py-[15px] rounded-lg text-[15px] font-bold text-white bg-[#004AAD] hover:bg-[#003A8C] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Sending code..." : "Send My Access Code"}
          </button>
        </form>
        <div className="mt-5 pt-4 border-t border-[#F5F5F5]">
          <p className="text-[12px] text-[#777777] leading-relaxed">
            We will send a one-time access code to the email you used at
            purchase.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E8E8E8] rounded-2xl p-9 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
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
      <h2 className="text-[24px] font-black text-[#111111] mb-1.5 tracking-tight">
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
        className="w-full py-[15px] rounded-lg text-[15px] font-bold text-white bg-[#004AAD] hover:bg-[#003A8C] disabled:opacity-40 disabled:cursor-not-allowed transition-colors mb-4"
      >
        {loading ? "Verifying..." : "Verify & Download"}
      </button>
      <p className="text-center text-[13px] text-[#777777]">
        Didn't receive it?{" "}
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

function DownloadCard() {
  return (
    <div className="bg-white border border-[#E8E8E8] rounded-2xl p-9 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-2 mb-3">
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
      <p className="text-[14px] text-[#777777] leading-[1.6] mb-5">
        Click below to download your copy of Start Right with AI.
      </p>
      <a
        href="/assets/Start_Right_with_AI.pdf"
        download="Start_Right_with_AI.pdf"
        className="block w-full text-center py-[14px] rounded-lg text-[15px] font-bold text-white bg-[#004AAD] hover:bg-[#003A8C] transition-colors mb-2"
      >
        Download Start Right with AI (PDF)
      </a>
      <p className="text-[12px] text-[#777777] text-center">
        PDF | 14 pages | 1.2 MB
      </p>
    </div>
  );
}

function UpsellGrid({
  ownedProducts,
  hasToolkit,
}: {
  ownedProducts: string[];
  hasToolkit?: boolean;
}) {
  // Start Winning has no upsell page yet — hide the card until /upsell/start-winning exists.
  const showStartWinning = false;
  const showAskSarah = true; // always offer Ask Sarah upsell
  const showToolkit = hasToolkit ? false : !ownedProducts.includes("toolkit");

  const visibleCards = [showStartWinning, showAskSarah, showToolkit].filter(
    Boolean,
  ).length;
  const gridCols =
    visibleCards === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="border-t border-[#E8E8E8] bg-[#F5F5F5] px-5 md:px-10 py-10 md:py-12">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[13px] font-bold text-[#777777] uppercase tracking-[0.08em] mb-5">
          You might also like
        </p>
        <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
          {showStartWinning && (
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex flex-col">
              <h3 className="text-[16px] font-black text-[#111111] mb-1">
                Start Winning with AI
              </h3>
              <p className="text-[13px] text-[#444444] leading-[1.55] mb-3">
                Go deeper. Understand AI properly.
              </p>
              <p className="text-[13px] text-[#444444] leading-[1.55] mb-4">
                5 modules. 25 lessons. From overwhelmed to operational.
              </p>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-[12px] text-[#CCCCCC] line-through">
                    $197
                  </span>
                  <span className="text-[24px] font-black text-[#111111]">
                    $97
                  </span>
                  <span className="text-[12px] text-[#777777]">USD</span>
                </div>
                <Link
                  href="/upsell/start-winning"
                  className="block text-center py-3 rounded-lg text-[13px] font-bold text-white bg-[#004AAD] hover:bg-[#003A8C] transition-colors"
                >
                  Get Start Winning with AI
                </Link>
              </div>
            </div>
          )}

          {showAskSarah && (
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex flex-col">
              <h3 className="text-[16px] font-black text-[#111111] mb-1">
                Ask Sarah
              </h3>
              <p className="text-[13px] text-[#444444] leading-[1.55] mb-3">
                Not sure what tool to use? Ask me.
              </p>
              <p className="text-[13px] text-[#444444] leading-[1.55] mb-4">
                AI chatbot trained on everything I know. Available 24/7.
              </p>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-[12px] text-[#CCCCCC] line-through">
                    $327
                  </span>
                  <span className="text-[24px] font-black text-[#111111]">
                    $149
                  </span>
                  <span className="text-[12px] text-[#777777]">USD/year</span>
                </div>
                <Link
                  href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                  className="block text-center py-3 rounded-lg text-[13px] font-bold text-[#004AAD] border-2 border-[#004AAD] hover:bg-[#E6F1FB] transition-colors"
                >
                  Join the Waitlist
                </Link>
              </div>
            </div>
          )}

          {showToolkit && (
            <div className="bg-white border border-[#E8E8E8] rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex flex-col">
              <h3 className="text-[16px] font-black text-[#111111] mb-1">
                AI Toolkit
              </h3>
              <p className="text-[13px] text-[#444444] leading-[1.55] mb-3">
                Get the full stack.
              </p>
              <p className="text-[13px] text-[#444444] leading-[1.55] mb-4">
                My complete AI toolkit. 50+ tools. 9 categories. Honest reviews.
              </p>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-[12px] text-[#CCCCCC] line-through">
                    $97
                  </span>
                  <span className="text-[24px] font-black text-[#111111]">
                    $49
                  </span>
                  <span className="text-[12px] text-[#777777]">USD</span>
                </div>
                <a
                  href="https://aieconomy.thrivecart.com/ai-toolkit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-lg text-[13px] font-bold text-white bg-[#004AAD] hover:bg-[#003A8C] transition-colors text-center"
                >
                  Get the Toolkit
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SalesClient({
  isAuthenticated,
  userEmail,
  ownedProducts,
  hasToolkit,
}: SalesClientProps) {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated);
  const [email, setEmail] = useState(userEmail);
  const router = useRouter();

  async function handleSignOut() {
    await fetch("/api/auth/session", {
      method: "DELETE",
      credentials: "include",
    });
    setLoggedIn(false);
    window.location.href = "/login?redirect=/sales/dashboard";
  }

  return (
    <div className="min-h-screen bg-white font-[Poppins,sans-serif]">
      <div className="border-b border-[#E8E8E8] px-5 md:px-10 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-[13px] font-black tracking-[0.15em] uppercase"
            style={{
              fontFamily:
                "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            AI<span className="text-[#004AAD]">Economy</span>
          </Link>
          {loggedIn && (
            <button
              onClick={handleSignOut}
              className="text-[12px] font-semibold text-[#004AAD] border border-[#004AAD] px-3 py-1.5 rounded-lg hover:bg-[#E6F1FB] transition-colors"
            >
              Sign out
            </button>
          )}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 md:px-10 pt-10 md:pt-16 pb-10 md:pb-12 grid grid-cols-1 md:grid-cols-[1fr_400px] gap-8 md:gap-16 items-start">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#004AAD] bg-[#E6F1FB] px-3.5 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]" />
            AI Economy Toolkit
          </div>
          <h1 className="text-[36px] md:text-[44px] font-black text-[#111111] leading-[1.08] tracking-tight mb-4">
            AI Tools That
            <br />
            <span className="text-[#004AAD]">Actually Work.</span>
          </h1>
          <p className="text-[16px] text-[#444444] leading-[1.65] mb-8 max-w-[520px]">
            Start with AI today. Whether you are a busy professional or business
            owner, I have curated a set of AI tools that work best across the
            most universal use cases.
          </p>
          <div className="flex gap-8 mb-6">
            <div>
              <div className="text-[28px] font-black text-[#111111]">100's</div>
              <div className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#777777] mt-0.5">
                Tools tested
              </div>
            </div>
            <div>
              <div className="text-[28px] font-black text-[#111111]">
                3<span className="text-[16px] font-bold">YRS</span>
              </div>
              <div className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#777777] mt-0.5">
                Experimenting
              </div>
            </div>
            <div>
              <div className="text-[28px] font-black text-[#111111]">
                5+<span className="text-[16px] font-bold"> HRS</span>
              </div>
              <div className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#777777] mt-0.5">
                Saved daily
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-4">
            <div className="w-20 h-20 min-w-[80px] rounded-full overflow-hidden bg-[#E8E8E8]">
              <Image
                src="/assets/sarah-laptop.png"
                alt="Sarah Balmer"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[15px] text-[#444444] italic leading-[1.6] mb-2">
                "Your first useful AI output is 10 minutes away. Copy my prompts
                and get going."
              </p>
              <p className="text-[13px] font-bold text-[#111111]">
                Sarah Balmer
              </p>
              <p className="text-[11px] text-[#777777]">
                AI Strategist & Trainer | AI Speaker | Host, AI That Works
                Podcast
              </p>
              <p className="text-[11px] text-[#777777]">
                CEO & Founder, AI Economy | Creator, Parently.ai | Founder,
                Balmer Agency
              </p>
            </div>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="flex items-center justify-center py-20">
              <div className="w-6 h-6 border-2 border-[#004AAD] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          {loggedIn ? (
            <DownloadCard />
          ) : (
            <LoginCard
              initialEmail={email}
              onLoggedIn={(em) => {
                setEmail(em);
                setLoggedIn(true);
              }}
            />
          )}
        </Suspense>
      </div>

      <UpsellGrid ownedProducts={ownedProducts} hasToolkit={hasToolkit} />

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
