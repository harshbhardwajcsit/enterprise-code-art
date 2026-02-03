import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { TrendingUp, Users, Shield } from "lucide-react";

const impactStories = [
  {
    quote: "Helping teams move faster without sacrificing quality",
    context: "Fintech Startup",
    outcome: "3x faster feature delivery",
    icon: TrendingUp,
  },
  {
    quote: "Software that didn't break as the business scaled",
    context: "E-commerce Platform",
    outcome: "10x user growth handled",
    icon: Users,
  },
  {
    quote: "Finally, a system we can build on for years",
    context: "Healthcare SaaS",
    outcome: "Zero critical incidents",
    icon: Shield,
  },
];

export function ImpactSection() {
  return (
    <section className="section">
      <div className="container-wide">
        <FadeIn>
          <p className="section-label mb-12">Impact Stories</p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {impactStories.map((story, index) => {
            const Icon = story.icon;
            return (
              <StaggerItem key={index}>
                <motion.div 
                  className="impact-card group cursor-default h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-text-muted">{story.context}</span>
                  </div>
                  <p className="text-lg font-medium text-heading mb-4">
                    "{story.quote}"
                  </p>
                  <div className="mt-auto pt-6 border-t border-border">
                    <motion.span 
                      className="text-sm font-semibold text-primary inline-flex items-center gap-2"
                      whileHover={{ x: 4 }}
                    >
                      {story.outcome}
                      <TrendingUp className="w-4 h-4" />
                    </motion.span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
