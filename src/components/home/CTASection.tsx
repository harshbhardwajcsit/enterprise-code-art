import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { FloatingElements } from "@/components/animations/FloatingElements";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function CTASection() {
  return (
    <section className="section relative">
      <FloatingElements variant="cta" />
      <div className="container-wide text-center relative z-10">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6">Let's build something that actually works</h2>
            <p className="text-body-lg text-body mb-10">
              If you care about speed, quality, and long-term impact — we should talk.
            </p>
            <MagneticButton className="inline-block">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">Book a strategy call</Link>
              </Button>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
