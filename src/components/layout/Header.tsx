import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type DropdownOption = { name: string; href: string; comingSoon?: boolean };

type NavItem = {
  name: string;
  href: string;
  dropdown?: DropdownOption[];
};

const navigation: NavItem[] = [
  {
    name: "Products",
    href: "/products",
    dropdown: [
      { name: "SMEs", href: "/coming-soon" },
      { name: "Real Estate Developers", href: "/coming-soon" },
      { name: "Retail", href: "/coming-soon" },
      { name: "Whole Sellers", href: "/coming-soon" },
      { name: "D2C", href: "/coming-soon" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Business Application Development", href: "/services#business-application-development" },
      { name: "Website Development for SMEs", href: "/services#website-development-for-smes" },
      { name: "Productivity & Workflow Tools", href: "/services#productivity-workflow-tools" },
      { name: "AI & Intelligent Systems", href: "/services#ai-intelligent-systems" },
      { name: "Custom Software Engineering", href: "/services#custom-software-engineering" },
    ],
  },
  {
    name: "AI Solutions",
    href: "/ai-solutions",
    dropdown: [
      { name: "AI for Sales", href: "/coming-soon" },
      { name: "Vyapaar.ai", href: "/coming-soon", comingSoon: true },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    // If it's a hash link on the current page, scroll to the element
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (location.pathname === path) {
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{
      background: "hsl(var(--glass-bg))",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderColor: "hsl(var(--glass-border))",
    }}>
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-heading font-display">
            AtomIQ<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                    location.pathname.startsWith(item.href) ? "text-primary" : "text-body"
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 rounded-lg border border-border bg-background shadow-lg py-2">
                    {item.dropdown.map((option) => (
                      <Link
                        key={option.name}
                        to={option.href}
                        className="block px-4 py-2.5 text-sm text-body hover:text-primary hover:bg-muted transition-colors"
                        onClick={() => handleLinkClick(option.href)}
                      >
                        <span className="inline-flex items-center">
                          {option.name}
                          {option.comingSoon && (
                            <span className="bg-green-500/10 text-green-600 text-[10px] px-1.5 py-0.5 rounded-md border border-green-200 ml-2 font-bold inline-flex items-center">
                              Coming Soon
                            </span>
                          )}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-body"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link to="/contact">Book a call</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-body"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b" style={{
          background: "hsl(var(--glass-bg))",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "hsl(var(--glass-border))",
        }}>
          <div className="container-wide py-4 space-y-4">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    className={`flex items-center justify-between w-full py-2 text-base font-medium transition-colors ${
                      location.pathname.startsWith(item.href) ? "text-primary" : "text-body"
                    }`}
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((option) => (
                        <Link
                          key={option.name}
                          to={option.href}
                          className="block py-2 text-sm text-body hover:text-primary transition-colors"
                          onClick={() => handleLinkClick(option.href)}
                        >
                          <span className="inline-flex items-center">
                            {option.name}
                            {option.comingSoon && (
                              <span className="bg-green-500/10 text-green-600 text-[10px] px-1.5 py-0.5 rounded-md border border-green-200 ml-2 font-bold inline-flex items-center">
                                Coming Soon
                              </span>
                            )}
                          </span>
                        >
                          {option.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 text-base font-medium transition-colors ${
                    isActive(item.href) ? "text-primary" : "text-body"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-border">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book a call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
