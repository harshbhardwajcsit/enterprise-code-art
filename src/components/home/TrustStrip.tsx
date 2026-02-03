import { motion } from "framer-motion";

const trustLogos = [
  "TechCorp",
  "ScaleUp",
  "InnovateCo",
  "GrowthLabs",
  "Velocity",
];

export function TrustStrip() {
  return (
    <section className="section-sm border-y border-border bg-secondary/30 overflow-hidden">
      <div className="container-wide">
        <motion.p 
          className="text-sm font-medium text-body text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by founders, operators, and executives who care about long-term software quality
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustLogos.map((logo, index) => (
            <motion.span
              key={logo}
              className="text-lg font-semibold text-text-muted cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
