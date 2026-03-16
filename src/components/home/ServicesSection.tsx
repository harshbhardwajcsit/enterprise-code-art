import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Business Applications",
    description: "Internal tools, dashboards, workflows, and automation built around how your business actually operates.",
  },
  {
    title: "Websites for SMEs",
    description: "High-performance, conversion-focused websites designed to scale as your business grows.",
  },
  {
    title: "Productivity Tools",
    description: "Custom software that removes friction and helps teams move faster every day.",
  },
  {
    title: "AI Solutions",
    description: "Practical AI systems for growth, marketing, analytics, and intelligent automation.",
  },
  {
    title: "Custom Software Engineering",
    description: "End-to-end product development — from idea to scalable production systems.",
  },
];

import { FloatingElements } from "@/components/animations/FloatingElements";

export function ServicesSection() {
  return (
    <section className="section bg-secondary/30 relative">
      <FloatingElements variant="minimal" />
      <div className="container-wide relative z-10">
        <FadeIn>
          <h2 className="mb-16">What we build</h2>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-2 gap-x-16 gap-y-10" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="group border-l-2 border-border pl-6 hover:border-primary transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <h4 className="mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-body">{service.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <FadeIn delay={0.4} className="mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary font-medium group"
          >
            <span>View all capabilities</span>
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
