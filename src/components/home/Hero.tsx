import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent font-bold tracking-widest uppercase mb-6 text-sm md:text-base">Your Journey Begins With</p>
          <h1 className="text-6xl md:text-[120px] font-extrabold tracking-tighter mb-20 leading-[0.9]">
            AI That Works
          </h1>
        </motion.div>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-left"
          >
            <p className="text-xl md:text-3xl text-foreground/60 mb-12 leading-tight font-medium">
              We meet you where you are, whether you're just starting out or reshaping direction, and help you take confident next steps with AI
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a 
                href="#products" 
                className="w-full sm:w-auto px-12 py-5 bg-[#2563EB] text-white rounded-full font-bold hover:bg-[#1D4ED8] transition-all transform hover:scale-[1.02] text-center text-lg shadow-lg shadow-blue-500/20"
              >
                Explore Products
              </a>
              <a 
                href="#priority-ai" 
                className="text-[#2563EB] hover:underline font-bold flex items-center group text-lg"
              >
                Start your diagnostic
                <span className="ml-1 group-hover:translate-x-1 transition-transform">›</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
