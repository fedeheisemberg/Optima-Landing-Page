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
          <FaqItem title="¿Qué es un fondo de inversión?">
            Un fondo de inversión es un instrumento financiero que reúne capital
            de varios inversores para invertir en una diversidad de activos.
          </FaqItem>
          <FaqItem title="¿Cómo funcionan las estrategias algorítmicas?">
            Las estrategias algorítmicas utilizan modelos matemáticos para tomar
            decisiones de inversión automatizadas basadas en datos del mercado.
          </FaqItem>
          <FaqItem title="¿Cómo utilizan las Ciencias de la Computación para mejorar las estrategias de inversión?">
            Utilizamos técnicas como el aprendizaje automático y la inteligencia
            artificial para analizar grandes conjuntos de datos del mercado, lo
            que nos permite anticipar tendencias y ajustar nuestras estrategias
            en tiempo real para maximizar los retornos y minimizar los riesgos
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
          <FaqItem title="¿Cómo garantizan la alineación de sus servicios con mis objetivos financieros personales?">
            En Optima, entendemos que cada cliente tiene objetivos y necesidades
            únicas. Por eso, nuestro equipo de expertos trabaja de cerca contigo
            para comprender tus metas financieras a corto y largo plazo.
            Basándonos en esta comprensión, personalizamos planes de inversión
            que se alinean específicamente con tus objetivos, garantizando una
            estrategia que se adapte a tus necesidades individuales y a tu
            tolerancia al riesgo.
          </FaqItem>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
