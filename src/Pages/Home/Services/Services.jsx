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
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, animi laboriosam cum ab ",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, animi laborios",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, animi laboriosam !",
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
