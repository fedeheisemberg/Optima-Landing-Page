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
            <a href="#education">
              <AcademicCapIcon className="h-5 w-5 inline-block mr-1" />
              Educación
            </a>
            <a href="#contact">
              <ChatIcon className="h-5 w-5 inline-block mr-1" />
              Contacto
            </a>
          </nav>
        </div>
      </header>
      <div class="banner-content">
        <h1>Estrategias cuantitativas de inversión</h1>
        <p>
          Gestionamos capital en renta fija y variable para maximizar retornos y
          minimizar riesgos.
        </p>
        <a href="#about-us" class="button explore-now">
          Conocer más <ChevronDownIcon className="h-5 w-5 inline-block ml-1" />
        </a>
      </div>
    </div>
  );
};

export default Header;
