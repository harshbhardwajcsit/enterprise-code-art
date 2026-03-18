import { motion } from "framer-motion";

interface BrandLogo {
  name: string;
  url: string;
  fontStyle: string; // Tailwind classes for brand-like typography
  color: string; // Brand color for hover state
}

const brands: BrandLogo[] = [
  {
    name: "Ampere EV",
    url: "https://ampere.greaveselectricmobility.com/",
    fontStyle: "font-bold tracking-tight uppercase",
    color: "#E31837",
  },
  {
    name: "Greaves Electric Mobility",
    url: "https://greaveselectricmobility.com/",
    fontStyle: "font-bold tracking-tight",
    color: "#00A651",
  },
  {
    name: "Organic India",
    url: "https://organicindia.com/",
    fontStyle: "font-semibold tracking-wide",
    color: "#4A7C2E",
  },
  {
    name: "PepsiCo",
    url: "https://www.pepsico.com/",
    fontStyle: "font-extrabold uppercase tracking-tight",
    color: "#004B93",
  },
  {
    name: "Airtel",
    url: "https://www.airtel.in/",
    fontStyle: "font-bold tracking-normal",
    color: "#E40000",
  },
  {
    name: "OPPO",
    url: "https://www.oppo.com/in/",
    fontStyle: "font-bold uppercase tracking-[0.2em]",
    color: "#1A8C3A",
  },
  {
    name: "Bhavya Ramesh",
    url: "https://bhavyaramesh.com/",
    fontStyle: "font-medium italic tracking-wide",
    color: "#8B5CF6",
  },
  {
    name: "PTC",
    url: "https://www.ptc.com",
    fontStyle: "font-extrabold uppercase tracking-widest",
    color: "#00843D",
  },
  {
    name: "Rattle",
    url: "https://www.rattle.co",
    fontStyle: "font-bold tracking-tight",
    color: "#6366F1",
  },
  {
    name: "ValetCopter",
    url: "https://www.valetcopter.com",
    fontStyle: "font-semibold uppercase tracking-[0.15em]",
    color: "#0EA5E9",
  },
  {
    name: "EasierChef",
    url: "https://www.easierchef.com",
    fontStyle: "font-bold tracking-normal",
    color: "#F97316",
  },
  {
    name: "Jugnoo",
    url: "https://www.jugnoo.in",
    fontStyle: "font-extrabold tracking-tight",
    color: "#FACC15",
  },
  {
    name: "Vestas",
    url: "https://www.vestas.com",
    fontStyle: "font-bold uppercase tracking-wide",
    color: "#003C71",
  },
];

export function TrustStrip() {
  const doubled = [...brands, ...brands];

  return (
    <section className="section-sm border-y border-border bg-secondary/30 overflow-hidden py-10">
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
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary/80 to-transparent z-10" />

        <motion.div
          className="flex items-center gap-14 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {doubled.map((brand, index) => (
            <a
              key={`${brand.name}-${index}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-shrink-0"
            >
              <span
                className={`text-lg ${brand.fontStyle} text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:drop-shadow-sm`}
                style={{
                  // @ts-ignore
                  "--brand-color": brand.color,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = brand.color;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "";
                }}
              >
                {brand.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
