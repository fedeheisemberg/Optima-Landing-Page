import React from "react";

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          Cómo lo hacemos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Formación de carteras
            </h3>
            <p className="text-gray-600">
              Gestión completa y efectiva de carteras por un equipo de
              profesionales altamente capacitados en mercados financieros en
              general.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Estrategias algorítmicas de mercado
            </h3>
            <p className="text-gray-600">
              Otorgamos soluciones a conjeturas de mercado de manera efectiva.
              Esto es logrado a través de un proceso de análisis de datos
              financieros riguroso.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Planes de inversión
            </h3>
            <p className="text-gray-600">
              Diseñados para ayudarte a alcanzar tus objetivos en el mercado a
              corto y largo plazo, siempre minimizando y gestionando el riesgo
              apropiadamente.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Asesoría bursátil y financiera
            </h3>
            <p className="text-gray-600">
              Soluciones precisas y confiables para todas tus necesidades
              económicas y financieras relacionados a la evolución de los
              mercados bursátiles de acciones, commodities y renta fija.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
