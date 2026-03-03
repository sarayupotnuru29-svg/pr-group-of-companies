import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import heroBg from "@/assets/hero-bg.jpg";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-20">
      <PageBanner title="Contact Us" subtitle="Get in touch with our team" image={heroBg} />

      <section className="py-20">
        <div className="container-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading title="Get In Touch" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Samalkot, opposite to Samalkot Subregister Office,<br />
                      Surampalem Road, Kakinada District,<br />
                      Andhra Pradesh – 533440
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-accent flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">
                      <a href="tel:+916300381586" className="hover:text-accent transition-colors">6300381586</a><br />
                      <a href="tel:+919515309211" className="hover:text-accent transition-colors">9515309211</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-accent flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:prgroupofcompanies056@gmail.com" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                      prgroupofcompanies056@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Facebook className="text-accent flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Facebook</h4>
                    <a
                      href="https://www.facebook.com/share/1dCeWTUhbg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      Follow us on Facebook
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="text-accent flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/pr_group_of_companies1?igsh=MXNqdTU4eHI1aXF5ag=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-accent transition-colors"
                    >
                      @pr_group_of_companies1
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading title="Send a Message" />
              <div className="bg-card rounded-lg p-8 card-shadow">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
