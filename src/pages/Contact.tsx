import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FloatingElements } from "@/components/animations/FloatingElements";

const reasons = [
  "Launching a new product",
  "Fixing a system that doesn't scale",
  "Building internal tools",
  "Exploring AI for growth",
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section relative">
        <FloatingElements variant="hero" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6">Let's talk</h1>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-wide">
        <div className="divider" />
      </div>

      {/* Contact Content */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Copy */}
            <div>
              <h3 className="mb-8">Whether you're:</h3>
              <ul className="space-y-4 mb-12">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-lg text-body">{reason}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-body mb-8">
                We're happy to help. Every conversation starts with understanding your situation — no sales pitch, no pressure.
              </p>
              <p className="text-lg text-heading font-medium mb-8">
                Book a call and let's start with a conversation.
              </p>
              <Button size="lg" variant="hero" asChild>
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Right Column - Contact Info */}
            <div className="bg-secondary/50 rounded-lg p-8 md:p-12">
              <h4 className="mb-8">Other ways to reach us</h4>
              
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">
                    Email
                  </p>
                  <a 
                    href="mailto:hello@apex.dev" 
                    className="text-lg text-primary hover:underline"
                  >
                    hello@apex.dev
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">
                    Response time
                  </p>
                  <p className="text-body">
                    We typically respond within 24 hours on business days.
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-text-muted">
                    Based in the UK. Working with clients globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="section-sm bg-secondary/30">
        <div className="container-wide text-center">
          <p className="text-body-lg text-body max-w-2xl mx-auto">
            Not ready for a call? No problem. Drop us an email with some context about your project and we'll get back to you with our thoughts.
          </p>
        </div>
      </section>
    </Layout>
  );
}
