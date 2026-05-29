"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const LOGIN_ERROR_MESSAGES: Record<string, string> = {
  missing_token: "That sign-in link is incomplete. Request a new one below.",
  invalid_or_expired:
    "That sign-in link has expired or already been used. Request a new one below.",
  account_not_found: "We couldn't find an account for that link. Please try again.",
  server_error: "Something went wrong signing you in. Please request a new link.",
};

function LoginContent() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";
  const incomingError = searchParams.get("error");

  const [step, setStep] = useState<"email" | "sent">("email");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(
    incomingError ? LOGIN_ERROR_MESSAGES[incomingError] ?? "" : ""
  );
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    if (resendTimer > 0) {
      const t = setTimeout(() => setResendTimer((s) => s - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [resendTimer]);

  async function requestMagicLink(targetEmail: string): Promise<void> {
    const res = await fetch("/api/auth/send-magic-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: targetEmail, redirect }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to send sign-in link.");
    if (data.exists === false) {
      throw new Error("We couldn't find an account with that email.");
    }
  }

  async function handleSendMagicLink(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await requestMagicLink(email);
      setStep("sent");
      setResendTimer(60);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    if (resendTimer > 0 || loading) return;
    setError("");
    setLoading(true);
    try {
      await requestMagicLink(email);
      setResendTimer(60);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen font-poppins">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
        body {
          font-family: "Poppins", sans-serif;
        }
      `}</style>

      {/* Left Panel */}
      <div
        className="hidden md:flex flex-1 bg-white p-10 flex-col"
        style={{
          backgroundImage: `
            linear-gradient(#e8e8e8 1px, transparent 1px),
            linear-gradient(90deg, #e8e8e8 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      >
        <div className="w-[150px] mb-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-70.40 -827.40 6209.80 954.80"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto block shape-geometric-precision"
          >
            <title>AI Economy</title>
            <g fill="#111111">
              <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z"></path>
              <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z"></path>
            </g>
          </svg>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-[480px]">
          <div className="mb-7 inline-block w-fit rounded-full border-[1.5px] border-[#004AAD] px-4 py-2 text-[11px] font-semibold text-[#004AAD]">
            Make Your Own AI Stack
          </div>
          <h1 className="mb-4 text-[26px] font-bold leading-[1.15] text-[#111111] md:text-[42px]">
            MYO. All Your AI Tools
            <br />
            <span className="text-[#004AAD]">In One Place.</span>
          </h1>
            <div className="mt-7 flex items-start gap-4">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[#d2d2d2]">
              <img
                src="/assets/login-sarah.png"
                alt="Sarah Balmer"
                className="h-full w-full scale-[1.28] origin-top object-cover object-top"
              />
            </div>
            <div>
              <p className="mb-1.5 text-[14px] italic leading-[1.5] text-[#4b4b4b]">
                "Congratulations, now you can track, manage and organise your favourite AI tools all in one place."
              </p>
              <p className="text-[12px] font-medium leading-[1.45] text-[#666666]">
                Sarah Balmer,
                <br />
                AI Trainer, Strategist and Founder of{" "}
                <a
                  href="https://aieconomy.ai"
                  className="font-semibold text-[#004AAD] no-underline"
                >
                  aieconomy.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-[#f5f5f5] p-6 md:p-10 flex flex-col justify-center items-center">
        <div className="bg-white border border-[#dddddd] rounded-xl p-8 w-full max-w-[400px]">
          <h2 className="text-[22px] font-bold text-[#111111] leading-[1.2] mb-1.5">
            {step === "email"
              ? "Get Started Today. Let's Go."
              : "Check Your Inbox."}
          </h2>
          <p className="text-[13px] text-[#555555] mb-7 leading-relaxed">
            {step === "email"
              ? "Unlock your purchase. We'll email you a sign-in link."
              : `We sent a sign-in link to ${email}. Click the link to continue. It expires in 5 minutes.`}
          </p>

          {step === "email" ? (
            <form onSubmit={handleSendMagicLink}>
              <div className="mb-4">
                <label
                  className="block text-[12px] font-medium text-[#555555] mb-1.5"
                  htmlFor="email-address"
                >
                  Email address
                </label>
                <input
                  className="w-full h-11 border border-[#dddddd] rounded-lg px-3.5 text-[14px] text-[#111111] bg-white outline-none focus:border-[#004AAD] transition-colors placeholder:text-[#999999]"
                  type="email"
                  id="email-address"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div
                className="flex items-center gap-2 mb-6 cursor-pointer select-none"
                onClick={() => setRememberMe(!rememberMe)}
              >
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => {}} // Handled by div click
                  className="w-4 h-4 border border-[#cccccc] rounded accent-[#004AAD] cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="text-[13px] text-[#555555] cursor-pointer"
                >
                  Remember me on this device
                </label>
              </div>

              {error && (
                <div className="text-red-500 text-[12px] mb-4">{error}</div>
              )}

              <button
                className="w-full h-12 bg-[#004AAD] hover:bg-[#003d91] text-white rounded-lg text-[15px] font-semibold transition-all active:scale-[0.985] disabled:opacity-50"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending link..." : "Send Sign-In Link"}
              </button>
            </form>
          ) : (
            <div>
              {error && (
                <div className="text-red-500 text-[12px] mb-4">{error}</div>
              )}

              <div className="mt-2 text-center">
                <button
                  onClick={handleResend}
                  disabled={resendTimer > 0 || loading}
                  className="text-[12px] text-[#004AAD] hover:underline disabled:text-gray-400"
                >
                  {resendTimer > 0
                    ? `Resend link in ${resendTimer}s`
                    : "Didn't receive an email? Resend link"}
                </button>
                <button
                  onClick={() => {
                    setStep("email");
                    setError("");
                  }}
                  className="block mx-auto mt-2 text-[12px] text-[#555555] hover:underline"
                >
                  Change email
                </button>
              </div>
            </div>
          )}

          <div className="bg-[#f7f7f7] rounded-lg p-3.5 mt-4 text-[11px] text-[#888888] leading-relaxed">
            {step === "email"
              ? "Your account was created at purchase. Use the same email you used at checkout."
              : "Check your spam folder if you don't see the email within a minute."}
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-1.5 text-[11px] text-[#999999]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#004AAD]"></div> Secure
            login
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-[#999999]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#004AAD]"></div>{" "}
            Instant access
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginContent />
    </Suspense>
  );
}
