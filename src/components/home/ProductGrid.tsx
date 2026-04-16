import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { products } from '@/data/products';

export function ProductGrid() {
  return (
    <section id="products" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">Cut through AI overwhelm</h2>
          <p className="text-foreground/60 text-lg md:text-xl font-medium">Explore the toolkit</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                index === 0 ? "col-span-12 lg:col-span-7 h-[450px] lg:h-[500px]" :
                  index === 1 ? "col-span-12 lg:col-span-5 h-[450px] lg:h-[500px]" :
                    "col-span-12 md:col-span-6 lg:col-span-4 h-[550px]"
              )}
            >
              {(() => {
                const content = (
                  <>
                    {/* Image Background */}
                    {!product.isBlack ? (
                      <>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/50 transition-colors duration-500" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-black">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[160px] font-bold text-white/5 select-none">{product.letter}</span>
                        </div>
                      </div>
                    )}

                    {/* Text Content */}
                    <div className="relative p-8 md:p-10 flex flex-col h-full">
                      <div className="mb-auto">
                        <p className="text-[10px] md:text-[12px] font-bold text-white/80 uppercase tracking-[0.1em] mb-2 drop-shadow-md">
                          {product.label}
                        </p>
                        <h3 className={cn(
                          "font-bold text-white mb-2 leading-tight drop-shadow-lg group-hover:text-amber-50 transition-colors duration-300",
                          index < 2 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                        )}>
                          {product.name}
                        </h3>
                      </div>

                      <div className="mt-auto flex items-end justify-between">
                        <div className="text-white/80 text-sm font-medium max-w-[85%] leading-snug space-y-1 drop-shadow-md">
                          <p className="group-hover:text-white transition-colors duration-300">{product.tagline}</p>
                          <p className="text-white/60 group-hover:text-white/80 text-[11px] leading-tight mt-1 transition-colors duration-300">{product.description}</p>
                        </div>
                        {/* Arrow Button */}
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </>
                );

                const className = "group relative rounded-[32px] overflow-hidden bg-black cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full";
                const clipStyle = { WebkitMaskImage: '-webkit-radial-gradient(white, black)' };

                if (product.externalLink) {
                  return (
                    <a href={product.externalLink} target={product.externalLink.startsWith('#') ? undefined : "_blank"} rel="noopener noreferrer" className={className} style={clipStyle}>
                      {content}
                    </a>
                  );
                }

                return (
                  <Link to={`/product/${product.id}`} className={className} style={clipStyle}>
                    {content}
                  </Link>
                );
              })()}
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
}
