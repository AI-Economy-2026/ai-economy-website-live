"use client";

import Link from "next/link";
import LeadCaptureCheckout from "./LeadCaptureCheckout";

export default function HeroCTAs() {
  return (
    <>
      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        {/* Lead capture → ThriveCart modal */}
        <LeadCaptureCheckout
          label="Get the Toolkit — $49 →"
          className="inline-flex items-center justify-center bg-[#1a56db] hover:bg-blue-600 text-white font-bold px-7 py-4 rounded-xl text-[15px] transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-[0.98]"
        />
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-white/55 hover:text-white/90 font-medium text-[14px] transition-colors px-2 py-4"
        >
          Already a member?
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Trust signals */}
      <div className="flex items-center gap-5 mt-8">
        {["✓ One-time payment", "✓ Instant access", "✓ Updated weekly"].map((t) => (
          <span key={t} className="text-white/55 text-[12px]">{t}</span>
        ))}
      </div>
    </>
  );
}
