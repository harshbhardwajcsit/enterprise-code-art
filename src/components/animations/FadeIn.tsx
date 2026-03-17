import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "" 
}: FadeInProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        ...springTransition,
        delay,
        opacity: { duration: 0.4, delay }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
