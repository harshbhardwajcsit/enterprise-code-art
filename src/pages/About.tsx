import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedImage } from "@/components/animations/AnimatedImage";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { FloatingElements } from "@/components/animations/FloatingElements";
import teamCollab from "@/assets/team-collab.jpg";

const beliefs = [
  "Strong foundations beat quick hacks",
  "Clean systems scale better",
  "Software is a long-term investment",
  "We work as partners, not vendors",
];

const values = [
  {
    title: "Engineering Excellence",
    description: "We take pride in our craft. Clean code, solid architecture, and thoughtful design aren't optional — they're the baseline.",
  },
  {
    title: "Business-First Thinking",
    description: "Technology is a means to an end. We focus on solving business problems, not showcasing technical cleverness.",
  },
  {
    title: "Ownership & Accountability",
    description: "We don't disappear after handoff. We take responsibility for outcomes and stand behind our work.",
  },
  {
    title: "Long-Term Relationships",
    description: "We optimize for trust over time, not short-term revenue. Our best clients become long-term partners.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section relative">
        <FloatingElements variant="hero" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6">
                Built by engineers who care about doing things{" "}
                <span className="text-highlight">right</span>
              </h1>
            </motion.div>
            <div className="hidden lg:block">
              <AnimatedImage 
                src={teamCollab} 
                alt="Team collaborating in a modern office"
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

      {/* About Content */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="mb-8">Who we are</h2>
              <div className="space-y-6 text-body text-lg">
                <p>
                  We are a founder-led software company focused on building systems that last. Our team combines deep technical expertise with real business experience.
                </p>
                <p>
                  We've seen what happens when software is built for short-term wins. Systems become fragile, technical debt accumulates, and eventually everything needs to be rebuilt. We take a different approach.
                </p>
                <p>
                  We build software the way we'd want it built for our own companies — with clean architecture, maintainable code, and a focus on long-term value.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="mb-8">What we believe</h2>
              <ul className="space-y-4">
                {beliefs.map((belief, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4 p-4 border border-border rounded-lg group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 4, borderColor: "hsl(var(--primary))" }}
                  >
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-lg text-heading font-medium">{belief}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-secondary/30 relative">
        <FloatingElements variant="section" />
        <div className="container-wide relative z-10">
          <FadeIn>
            <h2 className="mb-16 text-center">Our values</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-8 bg-background border border-border rounded-lg h-full"
                  whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="mb-4">{value.title}</h4>
                  <p className="text-body">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative">
        <FloatingElements variant="cta" />
          <div className="container-wide text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="mb-6">
                If this sounds like your mindset,<br />
                we'll probably work well together.
              </h2>
              <motion.div 
                className="mt-10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild size="lg" variant="hero">
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}
