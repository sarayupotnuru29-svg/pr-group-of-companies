import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageBanner = ({ title, subtitle, image }: PageBannerProps) => (
  <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 hero-overlay" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 text-center px-4"
    >
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{title}</h1>
      {subtitle && <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">{subtitle}</p>}
    </motion.div>
  </section>
);

export default PageBanner;
