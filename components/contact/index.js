"use client";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../ui/input-field";
import TextareaField from "../ui/text-area";
import { saveContactInfo } from "./action";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (formData) => {
    try {
      const { success } = await saveContactInfo(formData);
      if (!success) {
        return toast.error("Error al guardar la información de contacto.");
      }
      toast.success("Información de contacto guardada con éxito!");
    } catch (error) {
      console.error("Error de conexión con la API:", error);
      toast.error("Error al guardar la información de contacto.");
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            label="Nombre completo"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre completo"
            register={register}
            required
            error={errors.name}
          />
          <InputField
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            error={errors.email}
            register={register}
            required
          />
          <InputField
            label="Teléfono"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Teléfono"
            register={register}
          />
          <InputField
            label="País"
            type="text"
            id="country"
            name="country"
            placeholder="País"
            register={register}
          />
          <TextareaField
            label="¿Cómo podemos ayudarte?"
            id="message"
            name="message"
            placeholder="¿Cómo podemos ayudarte?"
            className="col-span-full"
            register={register}
            required
            error={errors.message}
          />
          <TextareaField
            label="¿Posees experiencia en inversiones?"
            id="investment_experience"
            name="investment_experience"
            placeholder="¿Posees experiencia en inversiones?"
            className="col-span-full"
            register={register}
            required
            error={errors.investment_experience}
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
