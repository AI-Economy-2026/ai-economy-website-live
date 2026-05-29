"use client";

import { useEffect, useState } from "react";

interface ThriveCartCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThriveCartCheckout({ isOpen, onClose }: ThriveCartCheckoutProps) {
  const [mounted, setMounted] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Animate in / out
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setIframeLoaded(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const timer = setTimeout(() => {
        setMounted(false);
        setIframeLoaded(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div
        className={`relative z-10 w-full max-w-2xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        style={{ height: "88vh", maxHeight: "780px" }}
      >
        {/* Sticky header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0D0D14] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5L14.5 5.25V10.75L8 14.5L1.5 10.75V5.25L8 1.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="8" cy="8" r="2" fill="white" />
              </svg>
            </div>
            <div>
              <div className="text-[13px] font-bold text-gray-900 tracking-wide uppercase">AI Economy Toolkit</div>
              <div className="text-[11px] text-gray-400">Secure checkout · One-time payment · $49</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Close checkout"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* iframe checkout — fills remaining space */}
        <div className="relative flex-1 min-h-0">
          {/* Loading skeleton */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-blue-200 border-t-blue-600 animate-spin" />
              <p className="text-[13px] text-gray-400">Loading secure checkout…</p>
            </div>
          )}
          <iframe
            src="https://aieconomy.thrivecart.com/ai-toolkit/"
            title="AI Economy Toolkit Checkout"
            className={`w-full h-full border-0 transition-opacity duration-300 ${iframeLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setIframeLoaded(true)}
            allow="payment"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
          />
        </div>

        {/* Trust footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-center gap-6 shrink-0">
          {[
            { icon: "🔒", text: "SSL Secured" },
            { icon: "⚡", text: "Instant Access" },
            { icon: "✓", text: "One-time Payment" },
          ].map((t) => (
            <div key={t.text} className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
              <span>{t.icon}</span>
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
