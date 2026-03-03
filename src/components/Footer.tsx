import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  "Real Estate", "Import & Export", "Trading", "Coil Project",
  "Iron Ore Project", "Gold & Diamonds", "Hospital Project",
  "Government Projects", "Palmyrah Fiber", "Bone Crushing", "Gold Bonds",
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-corporate py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="PR Group Logo" className="h-12 w-12 rounded-full object-cover bg-primary-foreground" />
              <span className="font-heading font-bold text-lg">PR GROUP OF COMPANIES</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Diversified Business Excellence Across Industries. A trusted Indian business conglomerate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={scrollTop}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    onClick={scrollTop}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Business Hours & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              <span className="font-semibold text-primary-foreground/80">Business Hours:</span>{" "}
              Mon–Fri: 9AM–5PM | Sat: 9AM–3PM | Sun: Holiday
            </div>
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} PR Group of Companies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
