/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = () => {
  return (
    <div class="main-banner">
      <header class="main-nav">
        <div class="container">
          <a href="#" class="logo">
            <img src="/images/Optima (2).png" alt="" />
          </a>
          <button class="hamburger" id="hamburger">
            <img src="/images/menu.svg" alt="" />
          </button>
          <button class="cerrar" id="cerrar">
            <img src="/images/close.svg" alt="" />
          </button>
          <nav class="nav-words" id="nav">
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
