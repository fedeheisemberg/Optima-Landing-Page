/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import "./styles.css";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChatIcon,
  ChevronDownIcon,
  LightBulbIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main-banner">
      <header className="main-nav">
        <div className="container">
          <a href="#" className="logo">
            <img src="/images/Optima (2).png" alt="Optima Logo" />
          </a>
          <button
            className={`hamburger ${isOpen ? "hidden" : ""}`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            className={`cerrar ${isOpen ? "visible" : ""}`}
            onClick={toggleMenu}
            aria-label="Cerrar menú"
          >
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <nav className={`${isOpen ? "visible" : ""}`}>
            <a href="#about-us">
              <BriefcaseIcon className="h-5 w-5 inline-block mr-1" />
              Servicios
            </a>
            <a href="#what-we-do">
              <LightBulbIcon className="h-5 w-5 inline-block mr-1" />
              Nuestro proceso
            </a>
            <a href="https://www.optimalearning.site/search">
              <AcademicCapIcon className="h-5 w-5 inline-block mr-1" />
              OptimaLearning
            </a>
            <a href="#contact">
              <ChatIcon className="h-5 w-5 inline-block mr-1" />
              Contacto
            </a>
            <a href="https://optima-blog.vercel.app/">
              <ChatIcon className="h-5 w-5 inline-block mr-1" />
              OptimaBlog
            </a>
            <a href="https://forms.gle/aCkad8dtzoVQK7Wx8">
              <ChatIcon className="h-5 w-5 inline-block mr-1" />
              Trabaja con Nosotros
            </a>
          </nav>
        </div>
      </header>
      <div className="banner-content">
      <h1>Ciencia de Datos para Empresas y Finanzas.</h1>
      <p>Utilizamos un enfoque basado en datos para guiar decisiones financieras y empresariales, buscando efectividad y minimizando exposición al riesgo.</p>

        <a href="#management-team" className="button explore-now">
          Conocer más <ChevronDownIcon className="h-5 w-5 inline-block ml-1" />
        </a>
      </div>
    </div>
  );
};

export default Header;
