'use client';

import Link from 'next/link';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { featuredCards } from '@/lib/products';

interface MoreProductsProps {
  currentId: string;
}

export function MoreProducts({ currentId }: MoreProductsProps) {
  const others = featuredCards.filter((p) => p.id !== currentId);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', dragFree: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-6">
              {others.map((p) => {
                const card = (
                  <div
                    className="group relative rounded-[28px] overflow-hidden bg-black h-[380px] flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 w-full"
                    style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' } as React.CSSProperties}
                  >
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

                return (
                  <div key={p.id} className="pl-6 md:basis-1/2 min-w-0 shrink-0 grow-0 basis-full">
                    {p.external ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer">
                        {card}
                      </a>
                    ) : (
                      <Link href={p.href}>{card}</Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 mt-10">
            <button
              onClick={scrollPrev}
              className="h-12 w-12 rounded-full bg-[#F5F5F7] hover:bg-black hover:text-white transition-colors flex items-center justify-center"
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="h-12 w-12 rounded-full bg-[#F5F5F7] hover:bg-black hover:text-white transition-colors flex items-center justify-center"
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
