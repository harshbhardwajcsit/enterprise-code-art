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
        duration: 0.7, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="overflow-hidden rounded-2xl"
    >
      <motion.img 
        src={src} 
        alt={alt} 
        className={`w-full h-auto ${className}`}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}
