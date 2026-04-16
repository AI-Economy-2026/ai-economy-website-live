import { motion } from 'framer-motion';
import { ArrowRight, Search, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
// @ts-expect-error - TS doesn't know how to import images
import discoverImg from '@/assets/roadmap_discover.jpg';
// @ts-expect-error - TS doesn't know how to import images
import trainImg from '@/assets/roadmap_train.jpg';
// @ts-expect-error - TS doesn't know how to import images
import activateImg from '@/assets/roadmap_activate.jpg';

const steps = [
  {
    icon: Search,
    title: "Discover",
    subtitle: "Identify high-value entry points",
    description: "Your journey begins with a diagnostic. We strip away the hype and find where AI will actually move the needle for your business. We map opportunity, fluency, and change readiness by department to create a clear roadmap.",
    details: [
      { label: "Priority AI Diagnostic Framework", to: "/product/priority-ai" },
      { label: "Departmental Opportunity Mapping", to: "/product/priority-ai" },
      { label: "AI Search Visibility Audit (GEO)", to: "/product/geo-audit" },
      { label: "Readiness & Fluency Assessment", to: "/product/priority-ai" },
    ],
    image: discoverImg
  },
  {
    icon: Users,
    title: "Train",
    subtitle: "Build the capability to scale",
    description: "Intelligence is a team sport. We provide practical, jargon-free training to build AI fluency across your organization. From board-level strategy to team-level prompt masterclasses, we ensure your people are ready to lead.",
    details: [
      { label: "Sarah Speaks AI Training Courses", to: "/product/sarah-speaks" },
      { label: "Prompt Engineering Masterclasses", to: "/product/sarah-speaks" },
      { label: "AI Leadership Workshops", to: "/product/ai-consultancy" },
      { label: "Capability Building Roadmap", to: "/product/ai-consultancy" },
    ],
    image: trainImg
  },
  {
    icon: Rocket,
    title: "Activate",
    subtitle: "Deploy tools that drive results",
    description: "Activation is where the value is unlocked. We deploy brand-trained agents and smart tools that integrate seamlessly into your workflow. From content engines to family hubs, we build the tools that work for you.",
    details: [
      { label: "Agent Alice Content Engine", to: "/product/agent-alice" },
      { label: "Gatha.ai Personal Knowledge Hub", to: "/product/gatha-ai" },
      { label: "Parently Life Admin Assistant", href: "https://parently.ai/" },
      { label: "Custom Strategic Implementation", to: "/product/ai-consultancy" },
    ],
    image: activateImg
  }
];

export function Approach() {
  return (
    <section id="approach" className="py-32 bg-white overflow-hidden border-t">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">The Roadmap to AI Integration</h2>
          <p className="text-foreground/60 text-xl md:text-2xl font-medium leading-relaxed">
            We don't just give you tools. We provide the strategic roadmap to ensure AI becomes a permanent, value-driving part of your culture.
          </p>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-start gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="w-16 h-16 bg-[#2563EB] text-white rounded-[20px] flex items-center justify-center mb-10 shadow-xl shadow-blue-500/20">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{step.title}</h3>
                <p className="text-[#2563EB] text-xl font-bold mb-8 uppercase tracking-widest">{step.subtitle}</p>
                <p className="text-foreground/60 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl">
                  {step.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {step.details.map((detail) => {
                    const inner = (
                      <>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="group-hover:text-accent transition-colors">{detail.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all -ml-1" />
                      </>
                    );
                    if ('href' in detail) {
                      return (
                        <a key={detail.label} href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-foreground/80 font-semibold group">
                          {inner}
                        </a>
                      );
                    }
                    return (
                      <Link key={detail.label} to={detail.to} className="flex items-center space-x-3 text-foreground/80 font-semibold group">
                        {inner}
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] rounded-[48px] overflow-hidden bg-secondary/30 border shadow-sm group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent group-hover:opacity-0 transition-opacity" />
                  <div className="absolute inset-0">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
