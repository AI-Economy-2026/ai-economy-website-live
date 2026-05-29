import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import PageTransition from "@/components/PageTransition";
import MetaPixel from "@/components/MetaPixel";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AI Economy Toolkit",
  description:
    "The curated AI toolkit for business owners who want results, not overwhelm.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className="min-h-screen bg-background font-poppins antialiased"
        style={{
          fontFamily:
            "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <MetaPixel />
        {/* Global page transition: top progress bar + logo splash */}
        <PageTransition />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
