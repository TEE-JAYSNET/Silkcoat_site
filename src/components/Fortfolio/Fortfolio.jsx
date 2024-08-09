const services = [
  {
    title: "Interior Paint & Primers",
    description:
      "High-quality painting services for homes, ensuring beautiful and long-lasting finishes.",
    image: "/src/assets/ic-cephe-2022.jpg",
  },
  {
    title: "Exterior Paint & Primers",
    description:
      "Professional painting solutions for offices, shops, and other commercial spaces.",
    image: "/src/assets/dis-cephe.jpg",
  },
  {
    title: "Effect Paints",
    description:
      "Durable and protective coatings for industrial facilities and equipment.",
    image: "/src/assets/efekt-2022.jpg",
  },
  {
    title: "Silk Plaster",
    description:
      "Durable and protective coatings for industrial facilities and equipment.",
    image: "/src/assets/ipek-2022.jpg",
  },
  {
    title: "Synthetic Paints",
    description:
      "Durable and protective coatings for industrial facilities and equipment.",
    image: "/src/assets/sentetik-2022.jpg",
  },
  {
    title: "Spray Paints",
    description:
      "Durable and protective coatings for industrial facilities and equipment.",
    image: "/src/assets/sprey-2022.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-8 bg-white text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden p-6 bg-gray-100 shadow-lg rounded-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-2 hover:text-red-500">
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
