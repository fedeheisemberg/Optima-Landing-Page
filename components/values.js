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
            Empoderar la toma de decisiones financieras y empresariales sustentadas en análisis de datos exhaustivos. Nos comprometemos a transformar datos complejos en estrategias claras y efectivas para impulsar el crecimiento y la rentabilidad de nuestros clientes.
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
            Aspiramos a ser pioneros en la industria de la ciencia de datos, reconocidos por nuestra capacidad de integrar tecnología de punta a nuestro modelo de negocio. Nuestra visión se centra en ser una fuerza motriz para la innovación y el progreso a través de insights basados en datos.
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
            Valoramos la comunicación precisa, la comprensión profunda de las necesidades del cliente, la paciencia estratégica, la confianza en los números, la lealtad a la evidencia y el compromiso continuo con la vanguardia tecnológica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
