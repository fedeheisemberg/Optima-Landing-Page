/* eslint-disable @next/next/no-img-element */
import React from "react";

const Values = () => {
  return (
    <section id="values" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Nuestro compromiso
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full value-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
              src="/images/target.png"
              alt="Aligned with clients"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Misión</h3>
            <p className="text-gray-600">
              Brindar soluciones financieras de alta calidad y confiabilidad
              para la toma de decisiones sólidas y estratégicas con el objetivo
              de alcanzar crecimiento y rentabilidad.
            </p>
          </div>
          <div className="value-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
              src="/images/evidence.png"
              alt="Evidence Based"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Visión</h3>
            <p className="text-gray-600">
              Ser reconocidos como líderes en la industria, destacándonos por
              nuestro enfoque innovador en tecnología, ético y profesional, y
              por el impacto positivo que generamos.
            </p>
          </div>
          <div className="value-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
              src="/images/increase.png"
              alt="Tested Portfolios"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Valores
            </h3>
            <p className="text-gray-600">
              Nos regimos estrictamente por valores como la comunicación, la
              comprensión, paciencia, confianza, fidelidad e innovación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
