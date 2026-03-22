import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const productOptions = [
  { name: "SMEs", href: "/products/smes" },
  { name: "Real Estate Developers", href: "/products/real-estate" },
  { name: "Retail", href: "/products/retail" },
  { name: "Whole Sellers", href: "/products/whole-sellers" },
  { name: "D2C", href: "/products/d2c" },
];

const navigation = [
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Services", href: "/services" },
  { name: "AI Solutions", href: "/ai-solutions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
            item.hasDropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                    location.pathname.startsWith("/products") ? "text-primary" : "text-body"
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                </button>
                {productsOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-border bg-background shadow-lg py-2"
                  >
                    {productOptions.map((option) => (
                      <Link
                        key={option.name}
                        to={option.href}
                        className="block px-4 py-2.5 text-sm text-body hover:text-primary hover:bg-muted transition-colors"
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
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    className={`flex items-center justify-between w-full py-2 text-base font-medium transition-colors ${
                      location.pathname.startsWith("/products") ? "text-primary" : "text-body"
                    }`}
                    onClick={() => setProductsOpen(!productsOpen)}
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {productsOpen && (
                    <div className="pl-4 space-y-1">
                      {productOptions.map((option) => (
                        <Link
                          key={option.name}
                          to={option.href}
                          className="block py-2 text-sm text-body hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
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
