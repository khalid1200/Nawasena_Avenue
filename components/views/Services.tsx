import { services_data } from "@/helper";
import Card from "@/components/shared/Card";

const Service = () => {
  return (
    <main className="lg:px-32 px-4">
      <h2 className="font-medium mt-16 lg:text-start text-center">
        OUR SERVICES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 space-y-4">
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
