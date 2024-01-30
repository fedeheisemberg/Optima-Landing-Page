import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contáctanos. Te responderemos a la brevedad.</h2>
      <form
        class="contact-form"
        action="http://localhost:3000/submit-form"
        method="POST"
      >
        <input type="text" id="name" name="name" placeholder="Nombre" />
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Apellido"
        />
        <input type="email" id="email" name="email" placeholder="Email" />
        <input type="tel" id="phone" name="phone" placeholder="Teléfono" />
        <textarea
          id="message"
          name="message"
          placeholder="¿Cómo podemos ayudarte?"
        ></textarea>
        <input type="text" id="country" name="country" placeholder="País" />
        <textarea
          id="investment_experience"
          name="investment_experience"
          placeholder="¿Posees experiencia en inversiones?"
        ></textarea>
        <button type="submit">Contactar</button>
      </form>
    </section>
  );
};

export default Contact;
