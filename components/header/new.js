/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";
import { cn } from "@/lib/classnames";
import { Link } from "react-scroll";

const NewHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

  useEffect(() => {
    const changeNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("bg-black");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", changeNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  const smoothScrollTo = (id) => {
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{
        height: "100vh",
        backgroundImage: "url('/images/principal_image 3.jpg')",
      }}
    >
      <header
        className={cn(
          "fixed top-0 w-full z-10 p-4 bg-opacity-75 bg-transparent backdrop-blur-lg backdrop-filter transition-opacity duration-500 ease-in-out",
          navbarColor
        )}
      >
        <div className="container flex items-center justify-between mx-auto">
          <a
            href="#"
            className="flex items-center text-2xl font-bold text-gray-800"
          >
            <img
              src="/images/imagotipo-negativo.svg"
              alt="Optima Logo"
              className="h-16 mr-2"
            />
          </a>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-200 hover:text-gray-900 focus:outline-none focus:text-gray-900 hover:bg-gray-200 p-2 rounded-md"
            >
              <MenuIcon className={`${isOpen ? "hidden" : "block"} w-6 h-6`} />
              <XIcon className={`${isOpen ? "block" : "hidden"} w-6 h-6`} />
            </button>
          </div>
          <nav className="hidden lg:flex">
            <a
              href="#about-us"
              className="px-3 py-2 text-sm font-medium text-gray-100 rounded-md hover:bg-gray-200 lg:mx-2 hover:text-gray-800"
            >
              Servicios
            </a>
            <a
              href="#what-we-do"
              className="px-3 py-2 text-sm font-medium text-gray-100 rounded-md hover:bg-gray-200 lg:mx-2 hover:text-gray-800"
            >
              Nuestro proceso
            </a>
            <a
              href="#education"
              className="px-3 py-2 text-sm font-medium text-gray-100 rounded-md hover:bg-gray-200 lg:mx-2 hover:text-gray-800"
            >
              Educación
            </a>
            <a
              href="#contact"
              className="px-3 py-2 text-sm font-medium text-gray-100 rounded-md hover:bg-gray-200 lg:mx-2 hover:text-gray-800"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>
      <Transition
        as={"nav"}
        show={isOpen}
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="lg:hidden"
      >
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
        <div className="fixed z-30 top-0 right-0 w-5/6 max-w-sm p-5 bg-white h-full overflow-y-auto">
          <a
            href="#about-us"
            className="block px-3 py-2 mt-4 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200 lg:mt-0 lg:inline-block"
          >
            Servicios
          </a>
          <a
            href="#what-we-do"
            className="block px-3 py-2 mt-4 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200 lg:mt-0 lg:inline-block"
          >
            Nuestro proceso
          </a>
          <a
            href="#education"
            className="block px-3 py-2 mt-4 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200 lg:mt-0 lg:inline-block"
          >
            Educación
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 mt-4 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200 lg:mt-0 lg:inline-block"
          >
            Contacto
          </a>
          <a
            href="https://optima-blog.vercel.app/"
            className="block px-3 py-2 mt-4 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200 lg:mt-0 lg:inline-block"
          >
            OptimaBlog
          </a>
        </div>
      </Transition>
      <div className="flex items-center justify-center w-full h-full bg-opacity-50 bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white uppercase tracking-wide leading-tight md:text-5xl lg:text-6xl">
            Ciencia de Datos para {" "}
            <span className="text-blue-400">Empresas y Finanzas</span>
          </h1>
          <p className="mt-4 text-base text-white leading-relaxed md:text-lg lg:text-xl">
            Utilizamos un enfoque basado en datos para guiar decisiones financieras y empresariales estratégicas, buscando efectividad y minimizando exposición al riesgo.
          </p>
          <Link to="contact_scroll" smooth={true} duration={500}>
            <button className="mt-8 px-6 py-3 text-white text-lg font-medium uppercase bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 focus:outline-none focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Conocer más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
