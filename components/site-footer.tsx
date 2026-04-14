import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:px-12">
        <div>
          <Link href="/" className="mb-5 block text-lg font-bold tracking-tight text-black">
            AI ECONOMY
          </Link>
          <p className="max-w-xs text-sm leading-7 text-midGrey">
            Helping businesses simplify the complex and focus on what works in the AI era.
          </p>
        </div>
        <div>
          <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-black">Services</h4>
          <div className="space-y-3 text-sm text-midGrey">
            <Link href="/services/ai-consultancy" className="block transition hover:text-black">AI Consultancy</Link>
            <Link href="/services/priority-ai" className="block transition hover:text-black">Priority AI</Link>
            <Link href="/services/geo-audit" className="block transition hover:text-black">GEO Audit</Link>
            <Link href="/tools" className="block transition hover:text-black">AI Toolkit</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-black">Products</h4>
          <div className="space-y-3 text-sm text-midGrey">
            <Link href="/products/agent-alice" className="block transition hover:text-black">Agent Alice</Link>
            <Link href="/products/gatha-ai" className="block transition hover:text-black">Gatha.ai</Link>
            <Link href="/products/sarah-speaks" className="block transition hover:text-black">Sarah Speaks</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-black">Legal</h4>
          <div className="space-y-3 text-sm text-midGrey">
            <Link href="/privacy" className="block transition hover:text-black">Privacy policy</Link>
            <Link href="/terms" className="block transition hover:text-black">Terms of use</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 px-6 py-5 text-center text-xs text-black/40 md:px-12">
        © 2026 AI Economy. All rights reserved.
      </div>
    </footer>
  );
}
