import React from "react";

const Team = () => {
  return (
    <section id="management-team">
      <h2>Nuestro Equipo</h2>
      <p>
        Centrado en mejorar la experiencia del cliente, nuestro competente
        equipo de gestión se especializa en ofrecer soluciones a medida para
        cada área clave, garantizando una funcionalidad perfecta en cada paso.
      </p>
      <div class="team-container">
        <div class="team-member">
          <img src="/images/Fede.jpg" alt="Federico Martinez" />
          <h3>Federico Martinez</h3>
          <p>
            Financial Data Analyst
          </p>
        </div>
        <div class="team-member">
          <img src="/images/Gabriel.jpg" alt="Gabriel Guardia" />
          <h3>Gabriel Guardia</h3>
          <p>
            Financial Data Analyst
          </p>
        </div>
        <div class="team-member">
          <img src="/images/mati.jpg" alt="Matias Camisay" />
          <h3>Matias Camisay</h3>
          <p>
            Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
