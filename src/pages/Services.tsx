import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Business Application Development",
    description: "We build internal tools, dashboards, admin panels, and workflow systems that match how your business actually operates. No one-size-fits-all templates — every system is architected around your specific processes.",
    whenNeeded: "When off-the-shelf tools are slowing you down or creating workarounds across your team.",
    outcome: "A custom system that removes friction, increases visibility, and scales with your operations.",
  },
  {
    title: "Website Development for SMEs",
    description: "High-performance, conversion-focused websites built for growth. We focus on speed, SEO, and user experience — not flashy features that don't move the needle.",
    whenNeeded: "When your current site isn't generating leads, loading fast, or reflecting the quality of your business.",
    outcome: "A professional web presence that builds trust and converts visitors into customers.",
  },
  {
    title: "Productivity & Workflow Tools",
    description: "Custom software designed to automate repetitive tasks, streamline approvals, and help your team focus on high-value work instead of manual processes.",
    whenNeeded: "When your team spends too much time on spreadsheets, copy-pasting, or chasing updates.",
    outcome: "Streamlined workflows that save hours every week and reduce human error.",
  },
  {
    title: "AI & Intelligent Systems",
    description: "Practical AI applications for growth, marketing, customer support, and decision-making. We integrate AI where it creates measurable value — not where it sounds impressive.",
    whenNeeded: "When you want to leverage AI but need guidance on what's realistic and valuable for your business.",
    outcome: "AI-powered features that solve real problems and deliver measurable ROI.",
  },
  {
    title: "Custom Software Engineering",
    description: "End-to-end product development from initial concept through to production-ready systems. We handle architecture, development, testing, deployment, and ongoing support.",
    whenNeeded: "When you have a product idea or complex technical challenge that requires experienced engineering.",
    outcome: "A scalable, maintainable software product built on solid foundations.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="mb-6">Capabilities</h1>
            <p className="text-body-lg text-body">
              We offer focused, end-to-end software development services designed around real business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-wide">
        <div className="divider" />
      </div>

      {/* Services */}
      <section className="section">
        <div className="container-wide">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="max-w-3xl">
                <h3 className="mb-6">{service.title}</h3>
                <p className="text-body text-lg mb-8">{service.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 pl-6 border-l-2 border-border">
                  <div>
                    <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">
                      When you need it
                    </p>
                    <p className="text-body">{service.whenNeeded}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">
                      What you get
                    </p>
                    <p className="text-body">{service.outcome}</p>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="divider mt-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-secondary/30">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6">Have a complex problem?</h2>
            <p className="text-body-lg text-body mb-10">
              We help you simplify it.
            </p>
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Talk to us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
