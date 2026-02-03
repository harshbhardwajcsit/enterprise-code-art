import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import aiAbstract from "@/assets/ai-abstract.jpg";

const aiUseCases = [
  {
    title: "AI for Growth & Marketing",
    description: "Leverage AI to identify opportunities, personalize customer experiences, optimize campaigns, and scale what's working. From lead scoring to content generation — practical applications that drive measurable growth.",
    examples: ["Intelligent lead qualification", "Personalized recommendations", "Content generation at scale", "Campaign optimization"],
  },
  {
    title: "AI-Powered Analytics & Insights",
    description: "Turn raw data into actionable intelligence. AI systems that surface patterns, predict trends, and help you make better decisions faster than traditional analytics.",
    examples: ["Predictive analytics", "Anomaly detection", "Customer behavior analysis", "Business intelligence automation"],
  },
  {
    title: "Workflow Automation with Intelligence",
    description: "Go beyond simple automation. AI-powered workflows that can understand context, make decisions, and handle edge cases that rule-based systems can't.",
    examples: ["Document processing & extraction", "Intelligent routing & triage", "Automated quality checks", "Smart notifications & escalations"],
  },
  {
    title: "Custom AI-Powered Products",
    description: "Build AI capabilities directly into your product. From chatbots to recommendation engines — we help you integrate AI in ways that create competitive advantage.",
    examples: ["Conversational AI assistants", "Search & discovery systems", "Matching & recommendation engines", "Intelligent automation features"],
  },
];

export default function AISolutions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="mb-6">
                AI that makes <span className="text-highlight">business sense</span>
              </h1>
              <p className="text-body-lg text-body">
                We don't add AI for the sake of it. We use it where it creates measurable value.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={aiAbstract} 
                alt="Abstract flowing lines representing AI and data" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-wide">
        <div className="divider" />
      </div>

      {/* AI Use Cases */}
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            {aiUseCases.map((useCase, index) => (
              <div key={index} className="impact-card">
                <h3 className="mb-4">{useCase.title}</h3>
                <p className="text-body mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-text-muted">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Philosophy */}
      <section className="section bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Our AI Philosophy</h2>
            <p className="text-lg text-body leading-relaxed">
              AI is a tool — not the product. We focus on outcomes, not buzzwords. Every AI feature we build starts with a clear business problem and ends with measurable results. We're skeptical of hype and focused on what actually works.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6">Thinking about AI for your business?</h2>
            <p className="text-body-lg text-body mb-10">
              Let's explore what's realistic and valuable for your specific situation.
            </p>
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
