import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { featuredCards } from '@/lib/products';

interface MoreProductsProps {
  currentId: string;
}

export function MoreProducts({ currentId }: MoreProductsProps) {
  const others = featuredCards.filter((p) => p.id !== currentId);
  if (others.length === 0) return null;

  return (
    <>
      {/* Get Started CTA */}
      <section className="py-24 bg-[#F5F5F7] border-t text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Get Started with AI Today.{' '}
            <a
              href="https://calendar.app.google/bZ3j6WLHznPt1FP4A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline"
            >
              Contact us
            </a>
          </h2>
        </div>
      </section>

      {/* More from the toolkit */}
      <section className="py-24 bg-white border-t overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-12">
            More from the toolkit
          </p>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6">
            {others.map((p) => {
              const card = (
                <div className="group relative rounded-[28px] overflow-hidden bg-black h-[380px] flex flex-col flex-shrink-0 w-[320px] md:w-[calc(50%-12px)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)] transition-all duration-500 snap-start">
                  {p.image && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/90" />
                    </>
                  )}
                  {!p.image && <div className="absolute inset-0 bg-black" />}
                  <div className="relative p-8 flex flex-col h-full z-10">
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-2">
                      {p.label}
                    </p>
                    <div className="mt-auto">
                      <h3 className="text-3xl font-bold text-white mb-3">{p.title}</h3>
                      <p className="text-white/70 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                        {p.description}
                      </p>
                      <p className="text-white/90 text-sm font-semibold flex items-center group-hover:text-white transition-colors">
                        Learn more{' '}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </div>
                </div>
              );

              if (p.external) {
                return (
                  <a
                    key={p.id}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card}
                  </a>
                );
              }
              return (
                <Link key={p.id} href={p.href}>
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
