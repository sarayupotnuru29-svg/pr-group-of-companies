import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg card-shadow hover:card-shadow-hover transition-shadow duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[hsla(224,80%,10%,0.9)] via-[hsla(224,80%,10%,0.3)] to-transparent flex flex-col justify-end p-6">
        <h3 className="font-heading text-xl font-bold text-[hsl(0,0%,100%)] mb-2">{title}</h3>
        <p className="text-sm text-[hsl(0,0%,100%)]/80 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
