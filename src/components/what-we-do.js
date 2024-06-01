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
            Ofrecemos gestión integral de carteras con estrategias de inversión orientadas a tus metas financieras. Nuestros planes, basados en un análisis profundo del mercado y evaluación de riesgos, optimizan el crecimiento y la rentabilidad.
            </p>
          </div>
          {/* Nueva tarjeta 3 con contenido sobre ciencia de datos */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Ciencia de Datos
            </h3>
            <p className="text-gray-600">
            Aplicamos ciencia de datos para ofrecer insights que mejoran estrategias financieras y resuelven desafíos empresariales, analizando ventas, costos y rotación para decisiones efectivas.
            </p>
          </div>
          {/* Nueva tarjeta 4 con contenido sobre personalización tecnológica */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Personalización Tecnológica 
            </h3>
            <p className="text-gray-600">
            Desarrollamos soluciones tecnológicas personalizadas, incluyendo algoritmos de Machine Learning y bots adaptados a cada empresa. Nuestras herramientas mejoran la eficiencia operativa e integran con tu identidad única.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Asesoría y Análisis
           </h3>
           <p className="text-gray-600">
           Ofrecemos consultoría en finanzas y análisis de datos, ayudando a empresas a optimizar inversiones y tomar decisiones estratégicas mediante estrategias basadas en inteligencia de datos.
           </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};


export default WhatWeDo;
