"use client";

import { useState, CSSProperties } from "react";

// ThriveCart product IDs per product
const THRIVECART_PRODUCTS: Record<string, string> = {
  toolkit: "5",
  "start-right": "67", // Update this to the real TC product ID for Start Right
};

interface LeadCaptureCheckoutProps {
  /** Label shown on the trigger button */
  label?: string;
  /** Extra classes for the trigger button */
  className?: string;
  /** Inline style for the trigger button (e.g. background color) */
  buttonStyle?: CSSProperties;
  /** Lead source tag sent to GHL */
  source?: string;
  /** Product key — determines ThriveCart product ID */
  product?: "toolkit" | "start-right";
}

export default function LeadCaptureCheckout({
  label = "Get the Toolkit — $49",
  className = "",
  buttonStyle,
  source = "toolkit-checkout",
  product = "toolkit",
}: LeadCaptureCheckoutProps) {
  const [step, setStep] = useState<"idle" | "capture" | "checkout">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tcProductId = THRIVECART_PRODUCTS[product] ?? "5";

  function openCapture() {
    setStep("capture");
    setError("");
  }

  function closeAll() {
    setStep("idle");
    setName("");
    setEmail("");
    setError("");
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email to continue.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Save the lead to GHL via our API before opening checkout
      await fetch("/api/leads/capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), source }),
      });
    } catch {
      // Non-blocking — proceed to checkout even if lead save fails
      console.warn("Lead capture save failed — proceeding to checkout anyway");
    }

    setLoading(false);
    setStep("checkout");

    // Give the DOM a tick to render the ThriveCart trigger, then fire it
    setTimeout(() => {
      const trigger = document.querySelector<HTMLElement>(".tc-lead-trigger");
      if (trigger) trigger.click();
    }, 300);
  }

  return (
    <>
      {/* ── Primary CTA button ─────────────────────────────────────────── */}
      <button onClick={openCapture} className={className} style={buttonStyle}>
        {label}
      </button>

      {/* ── Lead capture modal ─────────────────────────────────────────── */}
      {(step === "capture" || step === "checkout") && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) closeAll(); }}
        >
          {step === "capture" && (
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-in fade-in slide-in-from-bottom-4 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeAll}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0D0D14] flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5L14.5 5.25V10.75L8 14.5L1.5 10.75V5.25L8 1.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                      <circle cx="8" cy="8" r="2" fill="white" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#0D0D14] tracking-[0.1em] text-[12px] uppercase">AIEconomy</span>
                </div>
                <h2 className="text-[22px] font-extrabold text-[#111111] leading-tight">
                  Almost there — one quick step
                </h2>
                <p className="text-[14px] text-[#777777] mt-1.5">
                  Tell us where to send your access details after purchase.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#444444] uppercase tracking-wide mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Balmer"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#111111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004AAD]/30 focus:border-[#004AAD] transition"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#444444] uppercase tracking-wide mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#111111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004AAD]/30 focus:border-[#004AAD] transition"
                  />
                </div>

                {error && (
                  <p className="text-[13px] text-red-500 font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#004AAD] hover:bg-[#003d91] text-white font-bold text-[15px] py-3.5 rounded-lg transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Preparing checkout...
                    </>
                  ) : (
                    <>
                      Continue to Checkout
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-[12px] text-[#777777]">
                  🔒 Secure checkout · One-time payment · Instant access
                </p>
              </form>
            </div>
          )}

          {/* ── ThriveCart checkout step ──────────────────────────────── */}
          {step === "checkout" && (
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#0D0D14] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5L14.5 5.25V10.75L8 14.5L1.5 10.75V5.25L8 1.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                      <circle cx="8" cy="8" r="2" fill="white" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#0D0D14] tracking-[0.1em] text-[12px] uppercase">AIEconomy</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[12px] text-[#777777] flex items-center gap-1">
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure checkout
                  </span>
                  <button
                    onClick={closeAll}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close checkout"
                  >
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* ThriveCart embed */}
              <div className="p-6">
                <div
                  className="tc-v2-embeddable-target tc-lead-trigger builder-v2-widget tc-v2-widget-embeddable_button tc-v2-embeddable-trigger"
                  data-widget-layout="embeddable_button"
                  data-thrivecart-account="aieconomy"
                  data-thrivecart-tpl="v2"
                  data-thrivecart-product={tcProductId}
                  data-thrivecart-modal="on"
                  data-thrivecart-modal-opts={JSON.stringify({
                    style_modal_width: "40",
                    style_content_border_radius: "0.5",
                    attr_modal_background: "on",
                    style_modal_background_color: "#000000",
                    style_modal_background_opacity: "40",
                    attr_modal_blur: "off",
                    attr_content_shadow: "off",
                  })}
                  data-thrivecart-customer-name={name}
                  data-thrivecart-customer-email={email}
                >
                  <div data-size="auto" data-style="rounded" data-align="center" data-block="embeddable_button">
                    <button
                      className="tc-v2-embeddable-trigger-el button tc-lead-trigger"
                      style={{
                        backgroundColor: "#004AAD",
                        borderRadius: "0.25em",
                        color: "#fff",
                        padding: "14px 32px",
                        fontWeight: 700,
                        fontSize: "15px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      Complete Purchase
                    </button>
                  </div>
                </div>
                <script
                  async
                  src="//tinder.thrivecart.com/embed/v2/thrivecart.js"
                  id={`tc-aieconomy-${tcProductId}`}
                />
              </div>

              {/* Trust footer */}
              <div className="px-6 pb-5 flex items-center justify-center gap-6 text-[12px] text-[#777777]">
                <span>🔒 SSL Secured</span>
                <span>⚡ Instant Access</span>
                <span>💳 One-time Payment</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
