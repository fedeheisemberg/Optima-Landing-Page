/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import "./styles.css";

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
            className={`hamburger ${isOpen ? "hidden" : ''}`}
            onClick={toggleMenu}
          >
            <img src="/images/menu.svg" alt="Menu" />
          </button>
          <button
            className={`cerrar ${isOpen ? "visible" : ""}`}
            onClick={toggleMenu}
          >
            <img src="/images/close.svg" alt="Close" />
          </button>
          <nav className={`nav-words ${isOpen ? "visible" : ""}`}>
            <a href="#about-us">Nuestros servicios</a>
            <a href="#what-we-do">Cómo lo hacemos</a>
            <a href="#products">Educación</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
