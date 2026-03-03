import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import aboutBg from "@/assets/about-bg.jpg";
import { CheckCircle, Clock } from "lucide-react";

const highlights = [
  "Innovation",
  "Quality Delivery",
  "Infrastructure Development",
  "Government Projects",
  "Import & Export Operations",
];

const businessHours = [
  { day: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "9:00 AM – 3:00 PM" },
  { day: "Sunday", time: "Holiday" },
];

const About = () => {
  return (
    <main className="pt-20">
      <PageBanner title="About Us" subtitle="Building trust through diversified excellence" image={aboutBg} />

      {/* Content */}
      <section className="py-20">
        <div className="container-corporate">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The P.R. Group of Companies is a diversified Indian business conglomerate with interests spanning real estate, infrastructure development, education, consultancy, and large-scale private and government projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                With unwavering dedication to excellence, we have built a reputation for reliability and professionalism across all our business verticals. Our team of experts ensures that every project is delivered with the highest standards of quality.
              </p>
            </motion.div>

            <SectionHeading title="What Sets Us Apart" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary"
                >
                  <CheckCircle className="text-accent flex-shrink-0" size={22} />
                  <span className="font-semibold text-secondary-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <SectionHeading title="Business Hours" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {businessHours.map((item, i) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-lg p-6 text-center card-shadow"
                >
                  <Clock className="mx-auto text-accent mb-3" size={28} />
                  <h3 className="font-heading font-bold text-foreground mb-1">{item.day}</h3>
                  <p className={`font-semibold ${item.time === "Holiday" ? "text-destructive" : "text-muted-foreground"}`}>
                    {item.time}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
