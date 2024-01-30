/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <h3>Óptima - Consulting & Management</h3>
          <p>San Juan, Argentina. Codigo Postal 5400.</p>
          <p>optimaconsultingmanagement@gmail.com</p>
          <p>+5192645</p>
        </div>
        <div class="footer-section">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Nuestros servicios</a>
            </li>
            <li>
              <a href="#services">Cómo lo hacemos</a>
            </li>
            <li>
              <a href="#products">Educación</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Síguenos en redes.</h3>
          <div class="social-icons">
            <a href="https://linkedin.com">
              <img src="/images/twitter.png" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/optimaconsultingmanagement/">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
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
        <p>
          Copyright © 2024 Optima Consulting & Management. Todos los derechos
          reservados.{" "}
        </p>
      </div>
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        class="whatsapp-button"
      >
        <img src="/images/whatsapp.png" alt="Chat on WhatsApp" />
      </a>
    </footer>
  );
};

export default Footer;
