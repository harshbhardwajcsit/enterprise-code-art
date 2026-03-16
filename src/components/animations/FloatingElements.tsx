import { motion } from "framer-motion";

interface FloatingElementsProps {
  variant?: "default" | "dense" | "minimal";
  className?: string;
}

export function FloatingElements({ variant = "default", className = "" }: FloatingElementsProps) {
  const elements = variant === "dense" 
    ? denseElements 
    : variant === "minimal" 
    ? minimalElements 
    : defaultElements;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: el.top, left: el.left, right: el.right, bottom: el.bottom }}
          initial={{ opacity: 0 }}
          animate={{ opacity: el.opacity }}
          transition={{ delay: i * 0.2, duration: 1.5 }}
        >
          {el.type === "circle" && (
            <motion.div
              className="rounded-full border"
              style={{
                width: el.size,
                height: el.size,
                borderColor: `hsl(var(--primary) / ${el.borderOpacity ?? 0.15})`,
                background: el.filled ? `hsl(var(--primary) / 0.04)` : "transparent",
              }}
              animate={{
                y: [0, el.floatY ?? -20, 0],
                rotate: [0, el.rotate ?? 0],
                scale: [1, el.pulse ?? 1, 1],
              }}
              transition={{
                duration: el.duration ?? 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
          {el.type === "ring" && (
            <motion.div
              className="rounded-full border-2"
              style={{
                width: el.size,
                height: el.size,
                borderColor: `hsl(var(--primary) / ${el.borderOpacity ?? 0.1})`,
              }}
              animate={{
                y: [0, el.floatY ?? -15, 0],
                rotate: [0, 360],
                scale: [1, el.pulse ?? 1.05, 1],
              }}
              transition={{
                duration: el.duration ?? 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}
          {el.type === "dot" && (
            <motion.div
              className="rounded-full"
              style={{
                width: el.size,
                height: el.size,
                background: `hsl(var(--primary) / ${el.borderOpacity ?? 0.2})`,
              }}
              animate={{
                y: [0, el.floatY ?? -10, 0],
                scale: [1, el.pulse ?? 1.4, 1],
              }}
              transition={{
                duration: el.duration ?? 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
          {el.type === "cross" && (
            <motion.div
              style={{ width: el.size, height: el.size }}
              className="relative"
              animate={{
                y: [0, el.floatY ?? -12, 0],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: el.duration ?? 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2"
                style={{ background: `hsl(var(--primary) / ${el.borderOpacity ?? 0.15})` }}
              />
              <div
                className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
                style={{ background: `hsl(var(--primary) / ${el.borderOpacity ?? 0.15})` }}
              />
            </motion.div>
          )}
          {el.type === "line" && (
            <motion.div
              style={{
                width: el.size,
                height: 1,
                background: `hsl(var(--primary) / ${el.borderOpacity ?? 0.12})`,
                transformOrigin: "center",
              }}
              animate={{
                scaleX: [0, 1, 0],
                y: [0, el.floatY ?? -8, 0],
              }}
              transition={{
                duration: el.duration ?? 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
          {el.type === "diamond" && (
            <motion.div
              style={{
                width: el.size,
                height: el.size,
                borderColor: `hsl(var(--primary) / ${el.borderOpacity ?? 0.12})`,
              }}
              className="border rotate-45"
              animate={{
                y: [0, el.floatY ?? -18, 0],
                rotate: [45, 135, 45],
              }}
              transition={{
                duration: el.duration ?? 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

interface ElementConfig {
  type: "circle" | "ring" | "dot" | "cross" | "line" | "diamond";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  opacity: number;
  borderOpacity?: number;
  filled?: boolean;
  floatY?: number;
  rotate?: number;
  pulse?: number;
  duration?: number;
}

const defaultElements: ElementConfig[] = [
  { type: "circle", top: "8%", right: "12%", size: 80, opacity: 1, borderOpacity: 0.1, floatY: -25, duration: 9 },
  { type: "dot", top: "15%", left: "8%", size: 6, opacity: 1, borderOpacity: 0.25, floatY: -12, duration: 5, pulse: 1.6 },
  { type: "ring", bottom: "20%", right: "8%", size: 50, opacity: 1, borderOpacity: 0.08, duration: 25 },
  { type: "cross", top: "35%", left: "5%", size: 20, opacity: 1, borderOpacity: 0.12, duration: 14 },
  { type: "diamond", bottom: "15%", left: "15%", size: 16, opacity: 1, borderOpacity: 0.1, floatY: -20, duration: 11 },
  { type: "circle", top: "55%", right: "5%", size: 30, opacity: 1, borderOpacity: 0.08, filled: true, floatY: -15, duration: 7 },
  { type: "dot", top: "70%", left: "20%", size: 4, opacity: 1, borderOpacity: 0.2, floatY: -8, duration: 4, pulse: 1.3 },
  { type: "line", top: "25%", right: "20%", size: 60, opacity: 1, borderOpacity: 0.1, duration: 8 },
];

const denseElements: ElementConfig[] = [
  ...defaultElements,
  { type: "circle", top: "12%", left: "25%", size: 120, opacity: 1, borderOpacity: 0.06, floatY: -30, duration: 12 },
  { type: "dot", top: "45%", right: "18%", size: 5, opacity: 1, borderOpacity: 0.2, pulse: 1.5, duration: 3 },
  { type: "cross", bottom: "30%", right: "25%", size: 14, opacity: 1, borderOpacity: 0.1, duration: 16 },
  { type: "diamond", top: "65%", left: "8%", size: 22, opacity: 1, borderOpacity: 0.08, floatY: -22, duration: 13 },
  { type: "line", bottom: "40%", left: "30%", size: 80, opacity: 1, borderOpacity: 0.08, duration: 10 },
  { type: "ring", top: "5%", left: "40%", size: 40, opacity: 1, borderOpacity: 0.06, duration: 22 },
];

const minimalElements: ElementConfig[] = [
  { type: "circle", top: "10%", right: "10%", size: 60, opacity: 1, borderOpacity: 0.08, floatY: -20, duration: 10 },
  { type: "dot", bottom: "20%", left: "10%", size: 5, opacity: 1, borderOpacity: 0.18, floatY: -10, duration: 5, pulse: 1.4 },
  { type: "diamond", top: "50%", left: "5%", size: 14, opacity: 1, borderOpacity: 0.1, floatY: -15, duration: 12 },
];
