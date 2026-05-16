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

function CardCta({ href, label }: { href: string; label: string }) {
  const isInternal = href.startsWith('/');
  const cls =
    'inline-flex items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 hover:underline';

  if (isInternal) {
    return (
      <Link href={href} className={cls}>
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function CardButton({ href, label }: { href: string; label: string }) {
  const isInternal = href.startsWith('/');
  const cls =
    'mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200';

  if (isInternal) {
    return (
      <Link href={href} className={cls}>
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export function ProductCard({ card, index }: { card: HomepageCardItem; index: number }) {
  const spanClass = index < 2 ? 'md:col-span-3' : 'md:col-span-2';
  const hasSecondaryCta = !!card.ctaSecondary && !!card.hrefSecondary;
  const standalone = hasSecondaryCta || !!card.ctaAsButton;

  const inner = (
    <>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/95" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
          {card.label}
        </p>
        <h3 className="mb-2 text-[28px] font-bold tracking-tight text-white">{card.title}</h3>
        <p className="max-w-[32ch] text-sm font-medium leading-6 text-white">{card.description}</p>
        {card.ctaAsButton ? (
          <CardButton href={card.href} label={card.cta} />
        ) : hasSecondaryCta ? (
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            <CardCta href={card.href} label={card.cta} />
            <CardCta href={card.hrefSecondary!} label={card.ctaSecondary!} />
          </div>
        ) : (
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
        )}
      </div>
    </>
  );

  if (standalone) {
    return (
      <div className={`group relative min-h-[440px] overflow-hidden rounded-2xl ${spanClass}`}>
        {inner}
      </div>
    );
  }

  return (
    <SmartLink
      href={card.href}
      className={`group relative min-h-[440px] overflow-hidden rounded-2xl ${spanClass}`}
    >
      {inner}
    </SmartLink>
  );
}
