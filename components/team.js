import React from "react";

const Team = () => {
  return (
    <section id="management-team" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Nuestro Equipo
        </h2>
        <p className="text-lg leading-6 text-gray-600 mb-12">
          Centrado en mejorar la experiencia del cliente, nuestro competente
          equipo de gestión se especializa en ofrecer soluciones a medida para
          cada área clave, garantizando una funcionalidad perfecta en cada paso.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="team-member bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
              src="/images/Fede.jpg"
              alt="Federico Martinez"
              className="w-full h-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Federico Martinez
            </h3>
            <p className="text-gray-600">
              Financial Data Analyst
            </p>
          </div>
          <div className="team-member bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
              src="/images/Gabriel.jpg"
              alt="Gabriel Guardia"
              className="w-full h-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Gabriel Guardia
            </h3>
            <p className="text-gray-600">
              Financial Data Analyst
            </p>
          </div>
          <div className="team-member bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
              src="/images/mati.jpg"
              alt="Matias Camisay"
              className="w-full h-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Matias Camisay
            </h3>
            <p className="text-gray-600">
              Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
