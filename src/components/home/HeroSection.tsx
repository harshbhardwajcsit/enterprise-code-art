import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedImage } from "@/components/animations/AnimatedImage";
import heroAbstract from "@/assets/hero-abstract.jpg";

export function HeroSection() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <motion.h1 
              className="text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
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
              </motion.span> to last
            </motion.h1>
            <motion.p 
              className="mt-6 text-body-lg text-body max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              From SMEs to fast-growing startups, teams trust us to deliver speed and quality when both are non-negotiable. Built right, software scales with your business.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">Book a call</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services" className="group">
                  See our capabilities
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
          <div className="hidden lg:block">
            <AnimatedImage 
              src={heroAbstract} 
              alt="Abstract geometric shapes representing precision engineering"
              delay={0.3}
              className="shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
