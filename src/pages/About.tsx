// import { motion } from "framer-motion";
// import PageBanner from "@/components/PageBanner";
// import SectionHeading from "@/components/SectionHeading";
// import aboutBg from "@/assets/about-bg.jpg";
// import { CheckCircle, Clock } from "lucide-react";

// const highlights = [
//   "Innovation",
//   "Quality Delivery",
//   "Infrastructure Development",
//   "Government Projects",
//   "Import & Export Operations",
// ];

// const businessHours = [
//   { day: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
//   { day: "Saturday", time: "9:00 AM – 3:00 PM" },
//   { day: "Sunday", time: "Holiday" },
// ];

// const About = () => {
//   return (
//     <main className="pt-20">
//       <PageBanner title="About Us" subtitle="Building trust through diversified excellence" image={aboutBg} />

//       {/* Content */}
//       <section className="py-20">
//         <div className="container-corporate">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//                 The P.R. Group of Companies is a diversified Indian business conglomerate with interests spanning real estate, infrastructure development, education, consultancy, and large-scale private and government projects.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed mb-12">
//                 With unwavering dedication to excellence, we have built a reputation for reliability and professionalism across all our business verticals. Our team of experts ensures that every project is delivered with the highest standards of quality.
//               </p>
//             </motion.div>

//             <SectionHeading title="What Sets Us Apart" />
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
//               {highlights.map((item, i) => (
//                 <motion.div
//                   key={item}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: i * 0.1 }}
//                   className="flex items-center gap-3 p-4 rounded-lg bg-secondary"
//                 >
//                   <CheckCircle className="text-accent flex-shrink-0" size={22} />
//                   <span className="font-semibold text-secondary-foreground">{item}</span>
//                 </motion.div>
//               ))}
//             </div>

//             <SectionHeading title="Business Hours" />
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//               {businessHours.map((item, i) => (
//                 <motion.div
//                   key={item.day}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: i * 0.1 }}
//                   className="bg-card rounded-lg p-6 text-center card-shadow"
//                 >
//                   <Clock className="mx-auto text-accent mb-3" size={28} />
//                   <h3 className="font-heading font-bold text-foreground mb-1">{item.day}</h3>
//                   <p className={`font-semibold ${item.time === "Holiday" ? "text-destructive" : "text-muted-foreground"}`}>
//                     {item.time}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;




import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import aboutBg from "@/assets/about-bg.jpg";
import { CheckCircle, Clock } from "lucide-react";

// Image Imports
import chairmanImg from "@/assets/chairman.jpeg";
import viceChairmanImg from "@/assets/vice chairman.jpeg";

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

const leadership = [
  {
    name: "Kondru Paulraju",
    role: "Chairman",
    image: chairmanImg,
  },
  {
    name: "Kondru Sunitha",
    role: "Vice Chairman",
    image: viceChairmanImg,
  },
];

const About = () => {
  return (
    <main className="pt-20">
      <PageBanner title="About Us" subtitle="Building trust through diversified excellence" image={aboutBg} />

      {/* Content */}
      <section className="py-20">
        <div className="container-corporate">
          <div className="max-w-4xl mx-auto">
            {/* Introductory Text */}
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

            {/* Leadership Section - Reduced Image Sizes */}
            <div className="mb-20">
              <SectionHeading title="Our Leadership" />
              {/* Added max-w-2xl and mx-auto to make the whole grid narrower */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 max-w-2xl mx-auto">
                {leadership.map((leader, i) => (
                  <motion.div
                    key={leader.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className="group flex flex-col items-center"
                  >
                    {/* Reduced size using w-48 (12rem) or w-64 (16rem) and centered it */}
                    <div className="relative overflow-hidden rounded-2xl bg-secondary w-48 h-60 mb-4 card-shadow">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-xs italic text-center w-full">"Visionary Leadership"</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-heading font-bold text-primary">{leader.name}</h3>
                      <p className="text-accent font-semibold tracking-wider uppercase text-xs">{leader.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <SectionHeading title="What Sets Us Apart" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
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

            {/* Business Hours */}
            <SectionHeading title="Business Hours" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {businessHours.map((item, i) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-lg p-6 text-center card-shadow border border-border/50"
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