import { motion } from "framer-motion";

interface FloatingElementsProps {
  variant?: "hero" | "section" | "cta";
  className?: string;
}

export function FloatingElements({ variant = "hero", className = "" }: FloatingElementsProps) {
  const config = variants[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {config.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
          style={{
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
            width: blob.size,
            height: blob.size,
            background: blob.gradient,
            filter: `blur(${blob.blur ?? 0}px)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: blob.opacity }}
          transition={{ duration: 1.5, delay: i * 0.3 }}
        >
          <motion.div
            className="w-full h-full rounded-[inherit]"
            style={{ background: "inherit" }}
            animate={{
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 50% 60% 40% 50%",
                "30% 70% 50% 50% / 60% 40% 70% 30%",
                "40% 60% 70% 30% / 40% 50% 60% 50%",
              ],
              rotate: [0, blob.rotateEnd ?? 15, -(blob.rotateEnd ?? 10), 0],
              x: [0, blob.driftX ?? 20, -(blob.driftX ?? 15), 0],
              y: [0, blob.driftY ?? -25, blob.driftY ?? 15, 0],
              scale: [1, blob.scaleEnd ?? 1.05, blob.scaleEnd ?? 0.95, 1],
            }}
            transition={{
              duration: blob.duration ?? 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

interface BlobConfig {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: string;
  gradient: string;
  opacity: number;
  blur?: number;
  duration?: number;
  rotateEnd?: number;
  driftX?: number;
  driftY?: number;
  scaleEnd?: number;
}

const variants: Record<string, BlobConfig[]> = {
  hero: [
    {
      top: "-15%",
      right: "-5%",
      size: "55vw",
      gradient: "linear-gradient(135deg, hsl(var(--primary) / 0.7) 0%, hsl(217 91% 72% / 0.5) 100%)",
      opacity: 0.6,
      blur: 40,
      duration: 20,
      driftX: 30,
      driftY: -20,
      rotateEnd: 20,
      scaleEnd: 1.08,
    },
    {
      bottom: "-20%",
      right: "-10%",
      size: "45vw",
      gradient: "linear-gradient(225deg, hsl(280 70% 65% / 0.6) 0%, hsl(320 75% 60% / 0.4) 100%)",
      opacity: 0.5,
      blur: 50,
      duration: 24,
      driftX: -25,
      driftY: 30,
      rotateEnd: -15,
      scaleEnd: 1.06,
    },
    {
      top: "30%",
      right: "15%",
      size: "20vw",
      gradient: "linear-gradient(180deg, hsl(var(--primary) / 0.3) 0%, hsl(200 80% 70% / 0.2) 100%)",
      opacity: 0.4,
      blur: 30,
      duration: 15,
      driftX: 15,
      driftY: -15,
      rotateEnd: 25,
      scaleEnd: 1.1,
    },
  ],
  section: [
    {
      top: "-10%",
      left: "-8%",
      size: "35vw",
      gradient: "linear-gradient(160deg, hsl(var(--primary) / 0.4) 0%, hsl(200 80% 70% / 0.2) 100%)",
      opacity: 0.35,
      blur: 50,
      duration: 22,
      driftX: 20,
      driftY: -18,
      rotateEnd: 12,
      scaleEnd: 1.05,
    },
    {
      bottom: "-15%",
      right: "-5%",
      size: "30vw",
      gradient: "linear-gradient(200deg, hsl(280 60% 65% / 0.3) 0%, hsl(var(--primary) / 0.15) 100%)",
      opacity: 0.3,
      blur: 45,
      duration: 26,
      driftX: -15,
      driftY: 20,
      rotateEnd: -18,
      scaleEnd: 1.04,
    },
  ],
  cta: [
    {
      top: "-20%",
      left: "10%",
      size: "40vw",
      gradient: "linear-gradient(135deg, hsl(var(--primary) / 0.5) 0%, hsl(240 70% 65% / 0.3) 100%)",
      opacity: 0.4,
      blur: 45,
      duration: 18,
      driftX: 25,
      driftY: -20,
      rotateEnd: 15,
      scaleEnd: 1.06,
    },
    {
      bottom: "-25%",
      right: "5%",
      size: "35vw",
      gradient: "linear-gradient(300deg, hsl(320 70% 60% / 0.4) 0%, hsl(280 65% 55% / 0.25) 100%)",
      opacity: 0.35,
      blur: 50,
      duration: 22,
      driftX: -20,
      driftY: 25,
      rotateEnd: -20,
      scaleEnd: 1.08,
    },
  ],
};
