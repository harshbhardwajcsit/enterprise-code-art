import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

export function CTASection() {
  return (
    <section className="section">
      <div className="container-wide text-center">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6">Let's build something that actually works</h2>
            <p className="text-body-lg text-body mb-10">
              If you care about speed, quality, and long-term impact — we should talk.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">Book a strategy call</Link>
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
