import { services } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="flex w-full my-10 flex-wrap gap-9 justify-around">
      {services.map((service, index) => (
        <ServiceCard service={service} key={index} />
      ))}
    </section>
  );
};

export default Services;
