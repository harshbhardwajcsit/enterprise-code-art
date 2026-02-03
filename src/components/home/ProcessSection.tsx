import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Lightbulb, Target, PenTool, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    title: "Understand",
    subtitle: "the business problem",
    icon: Lightbulb,
    description: "Deep dive into your goals, constraints, and what success looks like."
  },
  {
    title: "Define",
    subtitle: "the right solution",
    icon: Target,
    description: "Shape the approach that fits your business, timeline, and budget."
  },
  {
    title: "Design",
    subtitle: "& architecture",
    icon: PenTool,
    description: "Create the blueprint for a system built to scale and evolve."
  },
  {
    title: "Build",
    subtitle: "test, iterate",
    icon: Code2,
    description: "Rapid development with continuous feedback and refinement."
  },
  {
    title: "Launch",
    subtitle: "support, scale",
    icon: Rocket,
    description: "Go live with confidence. We're here for the long haul."
  },
];

export function ProcessSection() {
  return (
    <section className="section bg-secondary/30 overflow-hidden">
      <div className="container-wide">
        <FadeIn>
          <h2 className="mb-6 text-center">How we work</h2>
          <p className="text-body text-center max-w-2xl mx-auto mb-16">
            A proven process that balances speed with quality at every step.
          </p>
        </FadeIn>
        
        {/* Desktop: Timeline view */}
        <div className="hidden lg:block relative">
          {/* Animated connecting line */}
          <motion.div 
            className="absolute top-16 left-0 right-0 h-0.5 bg-border"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originX: 0 }}
          />
          <motion.div 
            className="absolute top-16 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          />
          
          <div className="grid grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2 + index * 0.15,
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                >
                  {/* Step number with icon */}
                  <motion.div 
                    className="relative z-10 w-32 h-32 mx-auto mb-6 bg-background border-2 border-border rounded-2xl flex flex-col items-center justify-center shadow-sm"
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: "hsl(var(--primary))",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="text-xs font-bold text-primary mb-1">0{index + 1}</span>
                    <Icon className="w-8 h-8 text-heading" strokeWidth={1.5} />
                  </motion.div>
                  
                  {/* Step content */}
                  <h4 className="text-lg font-semibold text-heading mb-1">{step.title}</h4>
                  <p className="text-sm text-primary font-medium mb-3">{step.subtitle}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-background border-2 border-primary/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xs font-bold text-primary">0{index + 1}</span>
                    <h4 className="text-lg font-semibold text-heading">{step.title}</h4>
                    <span className="text-sm text-text-muted">{step.subtitle}</span>
                  </div>
                  <p className="text-body">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
