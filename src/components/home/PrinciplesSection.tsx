import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedImage } from "@/components/animations/AnimatedImage";
import { FloatingElements } from "@/components/animations/FloatingElements";
import workspaceImage from "@/assets/workspace.jpg";

const principles = [
  "Business-first architecture",
  "Clean, maintainable codebases",
  "Strong engineering foundations",
  "Speed without shortcuts",
  "Systems designed for long-term evolution",
];

export function PrinciplesSection() {
  return (
    <section className="section relative">
      <FloatingElements variant="section" />
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <h2 className="mb-12">Built right. Scales forever.</h2>
            </FadeIn>
            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 4 }}
                >
                  <motion.span 
                    className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-lg text-body group-hover:text-heading transition-colors">
                    {principle}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <AnimatedImage 
              src={workspaceImage} 
              alt="Modern development workspace with clean code"
              className="shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
