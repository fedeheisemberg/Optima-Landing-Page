import React from "react";
import InputField from "./ui/input-field";
import TextareaField from "./ui/text-area";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Detiene el envío por defecto del formulario

    // Recolecta los valores del formulario
    const formData = {
      nombreCompleto: event.target.name.value,
      email: event.target.email.value,
      telefono: event.target.phone.value,
      pais: event.target.country.value,
      mensaje: event.target.message.value,
      experienciaInversiones: event.target.investment_experience.value,
    };

    // Envía los valores del formulario a la API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Manejo cuando la inserción es exitosa
        console.log('Formulario enviado con éxito:', result);
      } else {
        // Manejo de errores del servidor
        console.error('Error al enviar formulario:', result);
      }
    } catch (error) {
      // Manejo de errores de conexión
      console.error('Error de conexión con la API:', error);
    }
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Contáctanos. Te responderemos a la brevedad.
        </h2>
        <form
          className="contact-form grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          onSubmit={handleSubmit}
        >
          <InputField
            label="Nombre completo"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre completo"
            required
          />
          <InputField
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <InputField
            label="Teléfono"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Teléfono"
          />
          <InputField
            label="País"
            type="text"
            id="country"
            name="country"
            placeholder="País"
          />
          <TextareaField
            label="¿Cómo podemos ayudarte?"
            id="message"
            name="message"
            placeholder="¿Cómo podemos ayudarte?"
            className="col-span-full"
          />
          <TextareaField
            label="¿Posees experiencia en inversiones?"
            id="investment_experience"
            name="investment_experience"
            placeholder="¿Posees experiencia en inversiones?"
            className="col-span-full"
          />
          <div className="col-span-full text-right">
            <button
              type="submit"
              className="px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Contactar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

