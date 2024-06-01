/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="footer-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="footer-section">
          <h3 className="font-bold text-xl mb-4">
            Optima - Consulting & Management
          </h3>
          <p>Laprida 230 Oeste. Oficina 11, Piso 1.</p>
          <p>San Juan, Argentina. Código Postal 5400.</p>
          <p>optimaconsultingmanagement@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3 className="font-bold text-xl mb-4">Links</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#home" className="hover:text-primary-500">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" className="hover:text-primary-500">
                Nuestros servicios
              </a>
            </li>
            <li className="mb-2">
              <a href="#services" className="hover:text-primary-500">
                Cómo lo hacemos
              </a>
            </li>
            <li className="mb-2">
              <a href="https://www.optimalearning.site/search" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                OptimaLearning
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary-500">
                Contacto
              </a>
            </li>
            <li>
              <a href="https://optima-blog.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
              OptimaBlog
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/drive/folders/1g8yRqicXvtFnpt8U3Wa23wLKoaX6QMd8?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
              Legales
              </a>
            </li>
            <li>
              <a href="https://forms.gle/aCkad8dtzoVQK7Wx8" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
              Únete al Equipo
              </a>
            </li>

          </ul>
        </div>
        <div className="footer-section">
          <h3 className="font-bold text-xl mb-4">Síguenos en redes</h3>
          <div className="social-icons flex">
            <a
              href="https://www.facebook.com/optimaconsultingmanagement"
              className="mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/optimaconsultingmanagement/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/Optimaconsmgmt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center text-sm mt-8">
        <p>
          Toda la información contenida en este sitio web está destinada
          exclusivamente al interés general y no constituye asesoramiento
          jurídico o fiscal ni una oferta de fondos o servicios de inversión.
          Ninguna parte de este sitio web debe interpretarse como asesoramiento
          financiero. Las inversiones implican riesgos. El valor de las
          inversiones puede subir o bajar, y los inversores deben ser
          conscientes de que es posible que no recuperen la totalidad del
          importe invertido Optima Consulting & Management no será responsable
          de ninguna inexactitud en la información contenida en este sitio web
          ni de errores u omisiones en su contenido, independientemente del
          motivo de tales inexactitudes, errores u omisiones. En cualquier
          inversión financiera, los resultados pasados no garantizan los
          resultados futuros.
        </p>
        <p className="mt-4">
          Copyright © 2024 Optima Consulting & Management LLC. Todos los
          derechos reservados.
        </p>
      </div>
      <a
        href="https://wa.me/5492645880556"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button fixed bottom-4 right-4"
      >
        <img
          src="/images/whatsapp.png"
          alt="Chat on WhatsApp"
          className="w-12 h-12"
        />
      </a>
    </footer>
  );
};

export default Footer;
