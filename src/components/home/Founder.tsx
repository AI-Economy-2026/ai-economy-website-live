import { motion } from 'framer-motion';
// @ts-expect-error - TS doesn't know how to import images
import sarahImg from '@/assets/sarah_balmer.jpg';

export function Founder() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] md:aspect-square rounded-[48px] overflow-hidden bg-secondary group w-full max-w-[450px]"
        >
          <img 
            src={sarahImg} 
            alt="Sarah Balmer"
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <p className="text-2xl font-bold tracking-tight mb-1">Sarah Balmer</p>
            <p className="text-white/60 font-medium uppercase tracking-widest text-xs">LinkedIn Top Voice for AI</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center font-bold text-2xl text-accent mb-8">
            SB
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-10 leading-[1.1]">Built by Sarah Balmer</h2>
          
          <div className="space-y-6 text-xl md:text-2xl text-foreground/60 leading-relaxed font-medium mb-12">
            <p>
              25+ years helping businesses simplify the complex and focus on what works. 
              LinkedIn Top Voice for AI in Australia. 
            </p>
            <p>
              Both agency and in-house experience, from brand transformation to AI adoption. 
              Commercial, practical, and focused on results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="https://www.balmeragency.com.au/profile/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-all text-center">
              About Sarah ›
            </a>
            <a href="#" className="w-full sm:w-auto px-8 py-4 bg-secondary text-foreground rounded-full font-bold hover:bg-secondary/80 transition-all text-center">
              Listen to the Podcast ›
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
