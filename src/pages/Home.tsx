import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroAbstract from "@/assets/hero-abstract.jpg";
import workspaceImage from "@/assets/workspace.jpg";

// Trust logos (company names as text for now)
const trustLogos = [
  "TechCorp",
  "ScaleUp",
  "InnovateCo",
  "GrowthLabs",
  "Velocity",
];

// Impact stories
const impactStories = [
  {
    quote: "Helping teams move faster without sacrificing quality",
    context: "Fintech Startup",
    outcome: "3x faster feature delivery",
  },
  {
    quote: "Software that didn't break as the business scaled",
    context: "E-commerce Platform",
    outcome: "10x user growth handled",
  },
  {
    quote: "Finally, a system we can build on for years",
    context: "Healthcare SaaS",
    outcome: "Zero critical incidents",
  },
];

// Services
const services = [
  {
    title: "Business Applications",
    description: "Internal tools, dashboards, workflows, and automation built around how your business actually operates.",
  },
  {
    title: "Websites for SMEs",
    description: "High-performance, conversion-focused websites designed to scale as your business grows.",
  },
  {
    title: "Productivity Tools",
    description: "Custom software that removes friction and helps teams move faster every day.",
  },
  {
    title: "AI Solutions",
    description: "Practical AI systems for growth, marketing, analytics, and intelligent automation.",
  },
  {
    title: "Custom Software Engineering",
    description: "End-to-end product development — from idea to scalable production systems.",
  },
];

// Principles
const principles = [
  "Business-first architecture",
  "Clean, maintainable codebases",
  "Strong engineering foundations",
  "Speed without shortcuts",
  "Systems designed for long-term evolution",
];

// Process steps
const processSteps = [
  "Understand the business problem",
  "Define the right solution",
  "Design & architecture",
  "Build, test, iterate",
  "Launch, support, scale",
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-balance animate-fade-in">
                We engineer for{" "}
                <span className="text-highlight">speed</span>,
                <br />
                and build{" "}
                <span className="text-highlight">software</span> to last
              </h1>
              <p className="mt-6 text-body-lg text-body max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
                From SMEs to fast-growing startups, teams trust us to deliver speed and quality when both are non-negotiable. Built right, software scales with your business.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Button asChild size="lg" variant="hero">
                  <Link to="/contact">Book a call</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/services">
                    See our capabilities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <img 
                src={heroAbstract} 
                alt="Abstract geometric shapes representing precision engineering" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="section-sm border-y border-border bg-secondary/30">
        <div className="container-wide">
          <p className="text-sm font-medium text-body text-center mb-8">
            Trusted by founders, operators, and executives who care about long-term software quality
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustLogos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-semibold text-text-muted opacity-60 hover:opacity-100 transition-opacity"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section">
        <div className="container-wide">
          <p className="section-label mb-12">Impact Stories</p>
          <div className="grid md:grid-cols-3 gap-6">
            {impactStories.map((story, index) => (
              <div key={index} className="impact-card">
                <p className="text-lg font-medium text-heading mb-4">
                  "{story.quote}"
                </p>
                <div className="flex justify-between items-end mt-auto pt-6 border-t border-border">
                  <span className="text-sm text-text-muted">{story.context}</span>
                  <span className="text-sm font-semibold text-primary">{story.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-secondary/30">
        <div className="container-wide">
          <h2 className="mb-16">What we build</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map((service, index) => (
              <div key={index} className="border-l-2 border-border pl-6 hover:border-primary transition-colors">
                <h4 className="mb-3">{service.title}</h4>
                <p className="text-body">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Software Lasts */}
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-12">Built right. Scales forever.</h2>
              <ul className="space-y-4">
                {principles.map((principle, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-lg text-body">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <img 
                src={workspaceImage} 
                alt="Modern development workspace with clean code" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-secondary/30">
        <div className="container-wide">
          <h2 className="mb-16 text-center">How we work</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-number">{index + 1}</div>
                <p className="text-sm font-medium text-body">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6">Let's build something that actually works</h2>
            <p className="text-body-lg text-body mb-10">
              If you care about speed, quality, and long-term impact — we should talk.
            </p>
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Book a strategy call</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
