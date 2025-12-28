import data from "../Data";

function Services() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">
          Nossos Serviços
        </h1>

        {data.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Imagem */}
            <div className="md:w-1/2 w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Texto */}
            <div className="md:w-1/2 w-full md:px-12 mt-6 md:mt-0">
              <h4 className="text-2xl font-semibold mb-4">
                {service.title[0]}{" "}
                <span className="text-[#0055FF]">{service.title[1]}</span>
              </h4>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
