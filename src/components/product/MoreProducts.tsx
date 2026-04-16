import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MoreProductsProps {
  currentProductId: string;
}

export function MoreProducts({ currentProductId }: MoreProductsProps) {
  const otherProducts = products.filter(p => p.id !== currentProductId);

  if (otherProducts.length === 0) return null;

  return (
    <section className="py-24 bg-white border-t overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[11px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-12">More from the toolkit</p>
        
        <Carousel
          opts={{
            align: "start",
            dragFree: true
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {otherProducts.map((p) => {
              const content = (
                <>
                  {p.image && !p.isBlack ? (
                    <>
                      <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/90" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-black" />
                  )}
                  <div className="relative p-8 flex flex-col h-full z-10">
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-2">{p.label}</p>
                    <div className="mt-auto">
                      <h3 className="text-3xl font-bold text-white mb-3">{p.name}</h3>
                      <p className="text-white/70 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                        {p.description}
                      </p>
                      <p className="text-white/90 text-sm font-semibold flex items-center group-hover:text-white transition-colors">
                        Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </div>
                </>
              );

              // 1) Softened the shadow from hover:shadow-2xl to a lighter rgba value
              // 2) Adjusted the height to fit the newly added description
              const className = "group relative rounded-[28px] overflow-hidden bg-black h-[380px] flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 w-full";
              const clipStyle = { WebkitMaskImage: '-webkit-radial-gradient(white, black)' };

              return (
                <CarouselItem key={p.id} className="pl-6 md:basis-1/2">
                  {p.externalLink ? (
                    <a href={p.externalLink} target={p.externalLink.startsWith('#') ? undefined : "_blank"} rel="noopener noreferrer" className={className} style={clipStyle}>
                      {content}
                    </a>
                  ) : (
                    <Link to={`/product/${p.id}`} className={className} style={clipStyle}>
                      {content}
                    </Link>
                  )}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex items-center justify-end gap-3 mt-10">
            <CarouselPrevious className="relative inset-auto translate-y-0 translate-x-0 h-12 w-12 bg-[#F5F5F7] hover:bg-black hover:text-white border-none transition-colors" />
            <CarouselNext className="relative inset-auto translate-y-0 translate-x-0 h-12 w-12 bg-[#F5F5F7] hover:bg-black hover:text-white border-none transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
