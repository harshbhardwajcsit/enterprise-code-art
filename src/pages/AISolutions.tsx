import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { FloatingElements } from "@/components/animations/FloatingElements";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { BorderBeam } from "@/components/animations/BorderBeam";

import { TrendingUp, BarChart3, Workflow, Sparkles } from "lucide-react";
import { useState } from "react";

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

const aiUseCases = [
  {
    title: "AI for Growth & Marketing",
    description: "Leverage AI to identify opportunities, personalize customer experiences, optimize campaigns, and scale what's working. From lead scoring to content generation — practical applications that drive measurable growth.",
    examples: ["Intelligent lead qualification", "Personalized recommendations", "Content generation at scale", "Campaign optimization"],
    icon: TrendingUp,
  },
  {
    title: "AI-Powered Analytics & Insights",
    description: "Turn raw data into actionable intelligence. AI systems that surface patterns, predict trends, and help you make better decisions faster than traditional analytics.",
    examples: ["Predictive analytics", "Anomaly detection", "Customer behavior analysis", "Business intelligence automation"],
    icon: BarChart3,
  },
  {
    title: "Workflow Automation with Intelligence",
    description: "Go beyond simple automation. AI-powered workflows that can understand context, make decisions, and handle edge cases that rule-based systems can't.",
    examples: ["Document processing & extraction", "Intelligent routing & triage", "Automated quality checks", "Smart notifications & escalations"],
    icon: Workflow,
  },
  {
    title: "Custom AI-Powered Products",
    description: "Build AI capabilities directly into your product. From chatbots to recommendation engines — we help you integrate AI in ways that create competitive advantage.",
    examples: ["Conversational AI assistants", "Search & discovery systems", "Matching & recommendation engines", "Intelligent automation features"],
    icon: Sparkles,
  },
];

export default function AISolutions() {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="section relative">
        <FloatingElements variant="hero" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 }}
            >
              <h1 className="mb-6">
                AI that makes <span className="text-highlight">business sense</span>
              </h1>
              <motion.p 
                className="text-body-lg text-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.15 }}
              >
                We don't add AI for the sake of it. We use it where it creates measurable value.
              </motion.p>
            </motion.div>
            <div className="hidden lg:block">
              <AnimatedImage 
                src={aiAbstract} 
                alt="Abstract flowing lines representing AI and data"
                delay={0.2}
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-wide">
        <motion.div 
          className="divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ originX: 0 }}
        />
      </div>

      {/* AI Use Cases */}
      <section className="section">
        <div className="container-wide">
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.05}>
            {aiUseCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="impact-card group h-full relative"
                    whileHover={{ y: -6 }}
                    transition={spring}
                    onHoverStart={() => setFocusedIndex(index)}
                    onHoverEnd={() => setFocusedIndex(null)}
                  >
                    {focusedIndex === index && <BorderBeam size={200} duration={6} />}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={spring}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h3 className="text-xl">{useCase.title}</h3>
                    </div>
                    <p className="text-body mb-6">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-text-muted">{example}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* AI Philosophy */}
      <section className="section bg-secondary/30 overflow-hidden relative">
        <FloatingElements variant="section" />
        <div className="container-wide relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={spring}
              >
                <h2 className="mb-8">Our AI Philosophy</h2>
                <p className="text-lg text-body leading-relaxed">
                  AI is a tool — not the product. We focus on outcomes, not buzzwords. Every AI feature we build starts with a clear business problem and ends with measurable results. We're skeptical of hype and focused on what actually works.
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative">
        <FloatingElements variant="cta" />
        <FadeIn>
          <div className="container-wide text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="mb-6">Thinking about AI for your business?</h2>
              <p className="text-body-lg text-body mb-10">
                Let's explore what's realistic and valuable for your specific situation.
              </p>
              <MagneticButton className="inline-block">
                <Button asChild size="lg" variant="hero">
                  <Link to="/contact">Start a conversation</Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}
