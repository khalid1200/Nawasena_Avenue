import { services_data } from "@/helper";
import Card from "@/components/shared/Card";

const Service = () => {
  return (
    <main className="mx-32">
      <h2 className="font-medium mt-16">OUR SERVICES</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 space-y-4">
        {services_data.map((service, index) => (
          <Card
            key={index}
            mode="service"
            icon={service.icon}
            title={service.title}
            description={service.desc}
          />
        ))}
      </div>
    </main>
  );
};

export default Service;
