import { motion } from "framer-motion";

const trustLogos = [
  "ValetCopter",
  "EasierChef",
  "Rattle",
  "PTC",
  "Vestas",
  "FoodSwap",
  "JS Constructions",
  "Jugnoo Mobility",
];

export function TrustStrip() {
  // Duplicate for seamless loop
  const doubled = [...trustLogos, ...trustLogos];

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
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {doubled.map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="text-lg font-semibold text-muted-foreground opacity-60 hover:opacity-100 transition-opacity cursor-default"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
