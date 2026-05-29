"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

// ── Logo SVG ─────────────────────────────────────────────────────────────────
function AIEconomyLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagon background */}
      <path
        d="M24 3L43.05 13.5V34.5L24 45L4.95 34.5V13.5L24 3Z"
        fill="#0D0D14"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="0.5"
      />
      {/* Inner glow ring */}
      <path
        d="M24 8L39.5 16.75V34.25L24 43L8.5 34.25V16.75L24 8Z"
        fill="none"
        stroke="rgba(0,74,173,0.4)"
        strokeWidth="0.75"
      />
      {/* Centre node */}
      <circle cx="24" cy="24" r="4" fill="#004AAD" />
      {/* Orbit dots */}
      <circle cx="24" cy="13" r="2" fill="#004AAD" opacity="0.9" />
      <circle cx="33.5" cy="18.5" r="2" fill="#004AAD" opacity="0.7" />
      <circle cx="33.5" cy="29.5" r="2" fill="#004AAD" opacity="0.5" />
      <circle cx="24" cy="35" r="2" fill="#004AAD" opacity="0.7" />
      <circle cx="14.5" cy="29.5" r="2" fill="#004AAD" opacity="0.5" />
      <circle cx="14.5" cy="18.5" r="2" fill="#004AAD" opacity="0.9" />
      {/* Connecting lines */}
      <line x1="24" y1="20" x2="24" y2="15" stroke="#004AAD" strokeWidth="0.75" opacity="0.6" />
      <line x1="27.5" y1="22" x2="31.5" y2="19.5" stroke="#004AAD" strokeWidth="0.75" opacity="0.4" />
      <line x1="27.5" y1="26" x2="31.5" y2="28.5" stroke="#004AAD" strokeWidth="0.75" opacity="0.3" />
      <line x1="24" y1="28" x2="24" y2="33" stroke="#004AAD" strokeWidth="0.75" opacity="0.4" />
      <line x1="20.5" y1="26" x2="16.5" y2="28.5" stroke="#004AAD" strokeWidth="0.75" opacity="0.3" />
      <line x1="20.5" y1="22" x2="16.5" y2="19.5" stroke="#004AAD" strokeWidth="0.75" opacity="0.6" />
    </svg>
  );
}

// ── Splash overlay ─────────────────────────────────────────────────────────────
function SplashOverlay({ visible }: { visible: boolean }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.22s ease",
      }}
    >
      {/* Logo + wordmark */}
      <div
        style={{
          transform: visible ? "scale(1) translateY(0)" : "scale(0.92) translateY(8px)",
          transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
        }}
      >
        {/* Pulsing ring behind logo */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute rounded-full"
            style={{
              width: 80,
              height: 80,
              background: "radial-gradient(circle, rgba(0,74,173,0.12) 0%, transparent 70%)",
              animation: visible ? "loader-pulse 1.4s ease-in-out infinite" : "none",
            }}
          />
          <AIEconomyLogo size={52} />
        </div>

        {/* Wordmark */}
        <div className="flex flex-col items-center gap-0.5">
          <span
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              fontWeight: 900,
              fontSize: "13px",
              letterSpacing: "0.18em",
              color: "#0D0D14",
              textTransform: "uppercase",
            }}
          >
            AIEconomy
          </span>
          <span
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "10px",
              letterSpacing: "0.12em",
              color: "#9ca3af",
              textTransform: "uppercase",
            }}
          >
            AI Toolkit
          </span>
        </div>

        {/* Loading dots */}
        <div className="flex items-center gap-1.5 mt-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#004AAD",
                animation: visible ? `loader-dot 1.2s ease-in-out ${i * 0.18}s infinite` : "none",
                opacity: 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────────
export default function PageTransition() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  // Show splash when pathname changes
  useEffect(() => {
    if (pathname !== prevPath) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setPrevPath(pathname);
      }, 420);
      return () => clearTimeout(timer);
    }
  }, [pathname, prevPath]);

  return (
    <>
      {/* Top progress bar */}
      <NextTopLoader
        color="#004AAD"
        initialPosition={0.12}
        crawlSpeed={180}
        height={3}
        crawl
        showSpinner={false}
        easing="ease"
        speed={280}
        shadow="0 0 12px #004AAD, 0 0 6px #004AAD"
        zIndex={9998}
      />

      {/* Full-screen logo splash */}
      <SplashOverlay visible={loading} />

      {/* Keyframe styles */}
      <style>{`
        @keyframes loader-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.25); opacity: 1; }
        }
        @keyframes loader-dot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
