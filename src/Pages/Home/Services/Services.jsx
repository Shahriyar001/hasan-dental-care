import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Floride Treatment",
      description:
        "Protect your teeth with professional fluoride treatments to strengthen enamel and prevent tooth decay effectively.",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Restore your smile with pain-free cavity filling services using safe, durable, and aesthetic dental materials.",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Brighten your smile with our advanced teeth whitening treatment, removing stains and enhancing your confidence.",
      img: whitening,
    },
  ];

  return (
    <div className="mt-16 mb-8 py-10">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid:cols:2 grid-cols-1 gap-8">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
