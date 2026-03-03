import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <img src={heroBg} alt="PR Group Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container-corporate">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              PR GROUP OF COMPANIES
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-heading font-medium mb-4">
              Diversified Business Excellence Across Industries
            </p>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mb-8 leading-relaxed">
              The P.R. Group of Companies is a diversified Indian business conglomerate with interests spanning real estate, infrastructure development, education, consultancy, trading, import & export, and major private & government projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 section-gradient">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={aboutBg} alt="About PR Group" className="rounded-lg card-shadow w-full aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                About PR Group
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The P.R. Group of Companies is a diversified Indian business conglomerate with interests spanning real estate, infrastructure development, education, consultancy, and large-scale private and government projects.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a commitment to innovation, quality delivery, and sustainable growth, we continue to expand our operations across multiple industries.
              </p>
              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container-corporate">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive business solutions across diverse industries"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
