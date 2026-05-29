import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { type HomepageCardItem } from '@/content/homepage';

function SmartLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function ProductCard({ card, index }: { card: HomepageCardItem; index: number }) {
  const spanClass = index < 2 ? 'md:col-span-3' : 'md:col-span-2';

  return (
    <SmartLink
      href={card.href}
      className={`group relative min-h-[440px] overflow-hidden rounded-2xl ${spanClass}`}
    >
      <div className="absolute inset-0">
        {card.image ? (
          <img
            src={card.image}
            alt={card.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#0d1b2a] via-[#1b2d4f] to-[#4a2070]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
          {card.label}
        </p>
        <h3 className="mb-2 text-[28px] font-bold tracking-tight">{card.title}</h3>
        <p className="max-w-[32ch] text-sm leading-6 text-white/85">{card.description}</p>
        <div className="mt-4 flex items-center gap-3">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-white">
            {card.cta}
            <ArrowRight className="h-4 w-4" />
          </span>
          {card.comingSoon && (
            <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </SmartLink>
  );
}
