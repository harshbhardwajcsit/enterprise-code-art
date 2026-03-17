import { motion } from "framer-motion";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export function AnimatedImage({ 
  src, 
  alt, 
  className = "",
  delay = 0 
}: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay,
        opacity: { duration: 0.5, delay }
      }}
      className="overflow-hidden rounded-2xl"
    >
      <motion.img 
        src={src} 
        alt={alt} 
        className={`w-full h-auto ${className}`}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.div>
  );
}
