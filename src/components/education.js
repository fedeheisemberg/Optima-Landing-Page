import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            Educación
          </h2>
          <p className="text-lg leading-6 text-gray-600 mb-4">
            En Optima Consulting & Management, creemos que una buena decisión
            financiera se origina en la educación de calidad. Por eso, ofrecemos
            seminarios especializados que empoderan a nuestros clientes con
            conocimientos prácticos sobre mercados financieros, inversiones
            inteligentes y estrategias de trading, todo diseñado por expertos
            reconocidos en la industria.
          </p>
          <p className="text-lg leading-6 text-gray-600 mb-4">
            Nuestro enfoque educativo va más allá de los fundamentos teóricos;
            brindamos análisis de casos reales, simulaciones de mercado y
            herramientas avanzadas para que cada estudiante adquiera una
            experiencia integral y aplicable al mundo real de las finanzas.
          </p>
          <p className="text-lg leading-6 text-gray-600 mb-8">
            Con Optima, no solo inviertes en activos, sino también en tu
            crecimiento personal y profesional. Unite a nuestra comunidad y
            transforma tu futuro financiero con la sabiduría que solo la
            verdadera educación puede proporcionar.
          </p>
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-lg leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            Próximamente
          </button>
        </div>
      </div>
    </section>
  );
};

export default Education;
