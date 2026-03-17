import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedImage } from "@/components/animations/AnimatedImage";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { FloatingElements } from "@/components/animations/FloatingElements";
import { MagneticButton } from "@/components/animations/MagneticButton";
import teamCollab from "@/assets/team-collab.jpg";
import member1 from "@/assets/team/member-1.jpg";
import member2 from "@/assets/team/member-2.jpg";
import member3 from "@/assets/team/member-3.jpg";
import member4 from "@/assets/team/member-4.jpg";
import member5 from "@/assets/team/member-5.jpg";
import member6 from "@/assets/team/member-6.jpg";
import member7 from "@/assets/team/member-7.jpg";
import member8 from "@/assets/team/member-8.jpg";

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

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

const teamMembers = [
  { name: "Arjun Mehta", role: "CEO & Founder", experience: "12+ years in enterprise software & scaling startups", photo: member1 },
  { name: "Sara Moreno", role: "VP of Product", experience: "10 years leading product teams at Fortune 500 companies", photo: member2 },
  { name: "David Kowalski", role: "CTO", experience: "15 years in cloud architecture & distributed systems", photo: member3 },
  { name: "Nadia Osei", role: "Head of Design", experience: "8 years crafting award-winning digital experiences", photo: member4 },
  { name: "James Carter", role: "Lead Engineer", experience: "10 years in full-stack development & DevOps", photo: member5 },
  { name: "Mei Lin", role: "Data Scientist", experience: "7 years in ML, AI solutions & data engineering", photo: member6 },
  { name: "Lucas Bernardi", role: "Solutions Architect", experience: "9 years designing scalable system architectures", photo: member7 },
  { name: "Elena Vasquez", role: "Business Development", experience: "11 years in strategic partnerships & growth", photo: member8 },
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 }}
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
            <FadeIn delay={0.1}>
              <h2 className="mb-8">What we believe</h2>
              <ul className="space-y-4">
                {beliefs.map((belief, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4 p-4 glass-card group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...spring, delay: 0.2 + index * 0.05 }}
                    whileHover={{ x: 4, borderColor: "hsl(var(--primary))" }}
                  >
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={spring}
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
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.05}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="p-8 glass-card h-full"
                  whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.3)" }}
                  transition={spring}
                >
                  <h4 className="mb-4">{value.title}</h4>
                  <p className="text-body">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="section relative">
        <FloatingElements variant="section" />
        <div className="container-wide relative z-10">
          <FadeIn>
            <h2 className="mb-16 text-center">
              Meet our <span className="text-highlight">brilliant</span> Team
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.05}>
            {teamMembers.map((member, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -6 }}
                  transition={spring}
                >
                  <div className="relative mb-4 overflow-hidden rounded-2xl glass-card !p-0">
                    <motion.img
                      src={member.photo}
                      alt={member.name}
                      className="w-full aspect-square object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={spring}
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-heading">{member.name}</h4>
                  <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-body text-sm">{member.experience}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative">
        <FloatingElements variant="cta" />
        <FadeIn>
          <div className="container-wide text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="mb-6">
                If this sounds like your mindset,<br />
                we'll probably work well together.
              </h2>
              <div className="mt-10">
                <MagneticButton className="inline-block">
                  <Button asChild size="lg" variant="hero">
                    <Link to="/contact">Get in touch</Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}
