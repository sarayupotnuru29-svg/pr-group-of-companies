import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import testimonialsBg from "@/assets/testimonials-bg.jpg";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

const clientTestimonials = [
  { company: "MVR Enterprises", quote: "Unmatched performance and outstanding results." },
  { company: "Lakshmi Trading", quote: "Exceeded deliverables with professionalism and energy." },
  { company: "Harit Group", quote: "Dedicated, professional and always on time." },
];

const positives = [
  "Strong learning opportunities",
  "Supportive seniors",
  "Excellent exposure for freshers",
];

const negatives = [
  "High workload",
  "Sometimes extended working hours",
];

const Testimonials = () => {
  return (
    <main className="pt-20">
      <PageBanner title="Testimonials" subtitle="What our clients and employees say about us" image={testimonialsBg} />

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container-corporate">
          <SectionHeading title="Client Testimonials" subtitle="Trusted by leading businesses across India" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTestimonials.map((t, i) => (
              <motion.div
                key={t.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-lg p-8 card-shadow text-center"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.quote}"</p>
                <h4 className="font-heading font-bold text-foreground">{t.company}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Reviews */}
      <section className="py-20 section-gradient">
        <div className="container-corporate">
          <SectionHeading title="Employee Reviews" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 card-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <ThumbsUp className="text-accent" size={24} />
                <h3 className="font-heading font-bold text-foreground text-xl">Positives</h3>
              </div>
              <ul className="space-y-3">
                {positives.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 card-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <ThumbsDown className="text-destructive" size={24} />
                <h3 className="font-heading font-bold text-foreground text-xl">Areas of Improvement</h3>
              </div>
              <ul className="space-y-3">
                {negatives.map((n) => (
                  <li key={n} className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-destructive flex-shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
