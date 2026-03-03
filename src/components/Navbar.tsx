import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container-corporate">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="PR Group Logo" className="h-12 w-12 rounded-full object-cover bg-primary-foreground" />
            <span className="text-lg font-heading font-bold text-primary-foreground tracking-wide">
              PR GROUP OF COMPANIES
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}
                className={`block py-2 text-sm font-semibold tracking-wider uppercase ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
