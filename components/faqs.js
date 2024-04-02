"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/outline";

const FaqItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="faq mb-4">
      <motion.header
        className="flex justify-between items-center p-5 bg-gray-200 rounded-lg cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <ChevronDownIcon
          className={`h-6 w-6 transform ${isOpen ? "rotate-180" : ""}`}
        />
      </motion.header>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-5 bg-white rounded-b-lg"
        >
          <p>{children}</p>
        </motion.div>
      )}
    </div>
  );
};

const Faqs = () => {
  return (
    <section className="faqs py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Preguntas Frecuentes
        </h2>
        <div className="faq-container">
          <FaqItem title="¿Qué es el Machine Learning y cómo lo aplicamos en el mundo de las finanzas y la resolución de problemas empresariales?">
            El Machine Learning, o aprendizaje automático, es una rama de las Ciencias de la Computación que se centra en el desarrollo de sistemas capaces de aprender y hacer predicciones a partir de datos. En el mundo de las finanzas, lo usamos para identificar patrones de mercado, optimizar carteras, evaluar riesgos y mucho más, mejorando así la toma de decisiones y la eficiencia operativa.
          </FaqItem>

          <FaqItem title="¿Qué es un fondo de inversión?">
            Un fondo de inversión es un instrumento financiero que reúne capital
            de varios inversores para invertir en una diversidad de activos.
          </FaqItem>
          <FaqItem title="¿Cómo funcionan las estrategias algorítmicas?">
            Las estrategias algorítmicas utilizan modelos matemáticos para tomar
            decisiones de inversión automatizadas basadas en datos del mercado.
          </FaqItem>
          <FaqItem title="¿Cómo aplican las Ciencias de la Computación y la Ciencia de Datos para mejorar las estrategias de inversión y resolver problemas empresariales?">
            Además de optimizar estrategias de inversión mediante técnicas de aprendizaje automático e inteligencia artificial para analizar grandes conjuntos de datos del mercado, aplicamos la ciencia de datos para abordar retos empresariales. Esto incluye modelos predictivos para reducir la rotación de empleados, algoritmos de optimización de inventarios para reducir costos, y análisis avanzados de datos para impulsar las ventas y la toma de decisiones. Nuestro enfoque holístico integra múltiples fuentes de datos y metodologías para proporcionar soluciones completas y accionables.
          </FaqItem>

          <FaqItem title="¿Qué tipo de apoyo educativo ofrecen para inversores principiantes?">
            Ofrecemos una gama de seminarios y programas educativos diseñados
            para todos los niveles de experiencia. Para los inversores
            principiantes, tenemos cursos que cubren los fundamentos de las
            inversiones, la comprensión del mercado, y estrategias básicas de
            trading. Nuestros programas están diseñados para equipar a los
            inversores con el conocimiento necesario para tomar decisiones
            informadas y confiadas.
          </FaqItem>
          <FaqItem title="¿Cómo garantizan la alineación de sus servicios con mis objetivos financieros, tanto personales como empresariales?">
            En Optima, reconocemos que cada cliente y empresa tiene metas únicas. Nuestro equipo de expertos colabora estrechamente contigo o con tu departamento financiero para entender los objetivos financieros a corto y largo plazo, ya sean personales o relacionados con el crecimiento y estabilidad de tu negocio. Con esta información detallada, diseñamos planes de inversión personalizados y asesoramiento estratégico que se ajustan específicamente a tus necesidades y perfil de riesgo, o los de tu empresa, asegurando así que nuestras estrategias promuevan el éxito y la sostenibilidad financiera de tu cartera individual o corporativa.
          </FaqItem>

        </div>
      </div>
    </section>
  );
};

export default Faqs;
