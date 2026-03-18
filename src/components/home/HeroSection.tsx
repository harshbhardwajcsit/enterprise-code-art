import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AuroraBackground } from "@/components/ui/aurora-background";

const spring = { type: "spring" as const, stiffness: 300, damping: 30 };

export function HeroSection() {
  return (
    <AuroraBackground className="h-[100vh] -mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.1 }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <h1 className="text-balance max-w-4xl">
          We engineer for{" "}
          <motion.span
            className="text-highlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            speed
          </motion.span>,
          <br />
          and build{" "}
          <motion.span
            className="text-highlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            software
          </motion.span>{" "}
          to last
        </h1>
        <motion.p
          className="mt-6 text-body-lg text-body max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.15 }}
        >
          From SMEs to Retail Businesses to D2C brands, teams trust us to deliver speed
          and quality when both are non-negotiable. Built right, software scales
          with your business.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
        >
          <MagneticButton>
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Book a call</Link>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button asChild size="lg" variant="outline">
              <Link to="/services" className="group">
                See our capabilities
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}
