import React from "react";
// import "./styles.css";

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
          Nos especializamos en estrategias de inversión y aplicaciones de machine learning orientadas al ámbito corporativo, con el fin de potenciar resultados y acrecentar la rentabilidad. 
          </p>
          <p className="mt-2 text-lg leading-6 text-gray-600">
            Somos un equipo de profesionales de las Ciencias Económicas y de la
            Computación específicamente dedicado a ayudarte a mejorar tu
            situación financiera de largo plazo, ofreciendo además soluciones personalizadas de aprendizaje automático que catalizan la eficiencia operativa y la transformación empresarial.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-lg leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            Quiero saber más
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
