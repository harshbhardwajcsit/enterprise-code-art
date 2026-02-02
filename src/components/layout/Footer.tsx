import { Link } from "react-router-dom";

const navigation = {
  main: [
    { name: "Services", href: "/services" },
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide section-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <Link to="/" className="text-xl font-bold tracking-tight text-heading">
              Apex<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-text-muted max-w-xs">
              Engineering-led software that scales with your business.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm text-body hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Apex. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-text-muted hover:text-body transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-text-muted hover:text-body transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
