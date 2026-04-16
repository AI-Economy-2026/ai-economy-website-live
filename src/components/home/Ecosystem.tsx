import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, GraduationCap, Zap } from 'lucide-react';

const ecosystem = [
  {
    id: 'discover',
    icon: Search,
    title: 'Discover',
    tagline: 'Simplify the complex',
    description: 'Focus on what works. PriorityAI maps your AI opportunities. GEO Audit checks your brand visibility. Start with data, not assumptions.',
    products: ['PriorityAI', 'GEO Audit'],
    color: '#2563EB'
  },
  {
    id: 'train',
    icon: GraduationCap,
    title: 'Train',
    tagline: 'Build the capability',
    description: 'Sarah Speaks AI courses and the AI That Works podcast build team fluency. From awareness to confident adoption.',
    products: ['Sarah Speaks AI', 'Podcast'],
    color: '#34c759'
  },
  {
    id: 'activate',
    icon: Zap,
    title: 'Activate',
    tagline: 'From idea to outcome. Fast',
    description: 'PROLINKS transforms your documents. Agent Alice amplifies your marketing. Parently organises your family.',
    products: ['Agent Alice', 'PROLINKS', 'Parently'],
    color: '#5856d6'
  }
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-24"
        >
          <p className="text-accent font-bold tracking-widest uppercase mb-6 text-sm">One Interconnected Toolkit</p>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">Discover. Train. Activate</h2>
          <p className="text-foreground/60 text-xl md:text-2xl font-medium leading-relaxed">
            Three lanes. One ecosystem. Every product connects to move your business from "where do we start?" to "it's working."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecosystem.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group p-10 bg-secondary/30 rounded-[48px] border border-transparent hover:border-black/5 hover:bg-secondary/50 transition-all flex flex-col h-full"
            >
              <div 
                className="w-16 h-16 rounded-[20px] flex items-center justify-center text-white mb-10 shadow-lg group-hover:scale-110 transition-transform"
                style={{ backgroundColor: item.color }}
              >
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2 tracking-tight group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-foreground font-bold mb-8 text-lg opacity-60">{item.tagline}</p>
              <p className="text-foreground/60 leading-relaxed mb-12 text-lg font-medium flex-grow">
                {item.description}
              </p>
              
              <div className="mt-auto pt-8 border-t border-foreground/5 flex flex-wrap gap-2">
                {item.products.map((p) => (
                  <span key={p} className="px-5 py-2 bg-white rounded-full text-[10px] font-bold uppercase tracking-wider text-foreground shadow-sm">
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
