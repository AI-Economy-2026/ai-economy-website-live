import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ClipboardCheck, Code, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: MessageSquare,
    title: "The Conversation",
    description: "We start with a conversation to understand your business, your goals, and your current AI fluency.",
    color: "#2563EB"
  },
  {
    icon: ClipboardCheck,
    title: "The Diagnostic",
    description: "Our Priority AI framework identifies high-value entry points and departmental readiness.",
    color: "#34c759"
  },
  {
    icon: Code,
    title: "The Build",
    description: "We build and train custom AI agents and tools tailored to your specific workflows.",
    color: "#5856d6"
  },
  {
    icon: Rocket,
    title: "The Activation",
    description: "Continuous improvement and scaling as AI becomes a core part of your competitive advantage.",
    color: "#ff9f0a"
  }
];

export function Process() {
  return (
    <section className="py-32 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-accent font-bold tracking-widest uppercase mb-6 text-sm">Our Engagement Model</p>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">How we work with you</h2>
          <p className="text-foreground/60 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            A structured, repeatable process to ensure AI adoption is safe, predictable, and commercially impactful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative p-10 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all group"
            >
              <div 
                className="w-16 h-16 rounded-[20px] flex items-center justify-center mb-10 text-white shadow-lg transform transition-transform group-hover:scale-110"
                style={{ backgroundColor: step.color }}
              >
                <step.icon className="w-8 h-8" />
              </div>
              <p className="text-foreground/30 font-bold text-sm uppercase tracking-widest mb-4">Phase 0{index + 1}</p>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">{step.title}</h3>
              <p className="text-foreground/60 font-medium leading-relaxed">{step.description}</p>
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-[calc(100%+16px)] -translate-x-1/2 -translate-y-1/2 z-10 text-foreground/10">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
