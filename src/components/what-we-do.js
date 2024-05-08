import React from "react";

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
        {/*Cómo lo hacemos*/}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta 1 y 2 unificadas en contenido */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Gestión Integral de Inversiones
            </h3>
            <p className="text-gray-600">
              Ofrecemos una gestión de carteras integral, con estrategias de inversión diseñadas para la consecución de tus metas financieras. Nuestros planes están basados en un profundo entendimiento del mercado y una evaluación detallada de los riesgos, asegurando soluciones que optimizan el crecimiento y la rentabilidad.
            </p>
          </div>
          {/* Nueva tarjeta 3 con contenido sobre ciencia de datos */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Ciencia de Datos
            </h3>
            <p className="text-gray-600">
              Aplicamos la ciencia de datos para ofrecer insights que mejoran las estrategias financieras y resuelven desafíos empresariales. A través del análisis de ventas, costos y rotación, proporcionamos una comprensión más profunda para la toma de decisiones efectivas.
            </p>
          </div>
          {/* Nueva tarjeta 4 con contenido sobre personalización tecnológica */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Personalización Tecnológica y Algoritmos
            </h3>
            <p className="text-gray-600">
              Desarrollamos soluciones tecnológicas personalizadas, incluyendo algoritmos de Machine Learning y bots que se adaptan a la identidad única de cada empresa. Estas herramientas están diseñadas para integrarse y mejorar la eficiencia operativa de tu empresa.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Asesoría Financiera y Análisis de Datos
           </h3>
           <p className="text-gray-600">
           Ofrecemos consultoría especializada en finanzas y análisis de datos, ayudando a empresas a navegar el mercado bursátil con estrategias basadas en inteligencia de datos para la optimización de inversiones y la toma de decisiones estratégicas.
           </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};


export default WhatWeDo;
