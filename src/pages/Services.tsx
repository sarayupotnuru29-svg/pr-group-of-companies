import PageBanner from "@/components/PageBanner";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";

const Services = () => {
  return (
    <main className="pt-20">
      <PageBanner title="Our Services" subtitle="Comprehensive solutions across diverse industries" image={heroBg} />

      <section className="py-20">
        <div className="container-corporate">
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

export default Services;
