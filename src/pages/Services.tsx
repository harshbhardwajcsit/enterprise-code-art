import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Building2, Globe, Zap, Brain, Code2 } from "lucide-react";

const services = [
  {
    title: "Business Application Development",
    description: "We build internal tools, dashboards, admin panels, and workflow systems that match how your business actually operates. No one-size-fits-all templates — every system is architected around your specific processes.",
    whenNeeded: "When off-the-shelf tools are slowing you down or creating workarounds across your team.",
    outcome: "A custom system that removes friction, increases visibility, and scales with your operations.",
    icon: Building2,
  },
  {
    title: "Website Development for SMEs",
    description: "High-performance, conversion-focused websites built for growth. We focus on speed, SEO, and user experience — not flashy features that don't move the needle.",
    whenNeeded: "When your current site isn't generating leads, loading fast, or reflecting the quality of your business.",
    outcome: "A professional web presence that builds trust and converts visitors into customers.",
    icon: Globe,
  },
  {
    title: "Productivity & Workflow Tools",
    description: "Custom software designed to automate repetitive tasks, streamline approvals, and help your team focus on high-value work instead of manual processes.",
    whenNeeded: "When your team spends too much time on spreadsheets, copy-pasting, or chasing updates.",
    outcome: "Streamlined workflows that save hours every week and reduce human error.",
    icon: Zap,
  },
  {
    title: "AI & Intelligent Systems",
    description: "Practical AI applications for growth, marketing, customer support, and decision-making. We integrate AI where it creates measurable value — not where it sounds impressive.",
    whenNeeded: "When you want to leverage AI but need guidance on what's realistic and valuable for your business.",
    outcome: "AI-powered features that solve real problems and deliver measurable ROI.",
    icon: Brain,
  },
  {
    title: "Custom Software Engineering",
    description: "End-to-end product development from initial concept through to production-ready systems. We handle architecture, development, testing, deployment, and ongoing support.",
    whenNeeded: "When you have a product idea or complex technical challenge that requires experienced engineering.",
    outcome: "A scalable, maintainable software product built on solid foundations.",
    icon: Code2,
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section">
        <div className="container-wide">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Capabilities</h1>
            <p className="text-body-lg text-body">
              We offer focused, end-to-end software development services designed around real business needs.
            </p>
          </motion.div>
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

      {/* Services */}
      <section className="section">
        <div className="container-wide">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index} 
                  className="max-w-4xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="mt-2">{service.title}</h3>
                  </div>
                  <p className="text-body text-lg mb-8 ml-20">{service.description}</p>
                  
                  <motion.div 
                    className="grid md:grid-cols-2 gap-8 ml-20 pl-6 border-l-2 border-border"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div>
                      <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">
                        When you need it
                      </p>
                      <p className="text-body">{service.whenNeeded}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">
                        What you get
                      </p>
                      <p className="text-body">{service.outcome}</p>
                    </div>
                  </motion.div>

                  {index < services.length - 1 && (
                    <motion.div 
                      className="divider mt-20"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      style={{ originX: 0 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-secondary/30">
        <FadeIn>
          <div className="container-wide text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="mb-6">Have a complex problem?</h2>
              <p className="text-body-lg text-body mb-10">
                We help you simplify it.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild size="lg" variant="hero">
                  <Link to="/contact">Talk to us</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}
