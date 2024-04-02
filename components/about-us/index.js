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
            Nos especializamos en estrategias de inversión con toma de
            decisiones basadas en datos para optimizar resultados.
          </p>
          <p className="mt-2 text-lg leading-6 text-gray-600">
            Somos un equipo de profesionales de las Ciencias Económicas y de la
            Computación específicamente dedicado a ayudarte a mejorar tu
            situación financiera de largo plazo.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
