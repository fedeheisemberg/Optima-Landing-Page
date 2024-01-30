/* eslint-disable @next/next/no-img-element */
import React from "react";

const Values = () => {
  return (
    <section id="values">
      <h2>Lo que nos mueve</h2>
      <div class="values-container">
        <div class="value-item">
          <img src="/images/target.png" alt="Aligned with clients" />
          <h3>Misión</h3>
          <p>
            Brindar soluciones financieras de alta calidad y confiabilidad para
            la toma de decisiones sólidas y estratégicas con el objetivo de
            alcanzar crecimiento y rentabilidad.
          </p>
        </div>
        <div class="value-item">
          <img src="/images/evidence.png" alt="Evidence Based" />
          <h3>Visión</h3>
          <p>
            Ser reconocidos como líderes en la industria, destacándonos por
            nuestro enfoque innovador en tecnología, ético y profesional, y por
            el impacto positivo que generamos
          </p>
        </div>
        <div class="value-item">
          <img src="/images/increase.png" alt="Tested Portfolios" />
          <h3>Valores</h3>
          <p>
            Nos regimos estrictamente por valores como la comunicación, la
            comprensión, paciencia, confianza, fidelidad e innovación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
