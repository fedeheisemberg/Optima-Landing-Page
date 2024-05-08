// components/models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre completo es obligatorio."],
      trim: true,
      maxlength: [
        100,
        "El nombre completo no puede tener más de 100 caracteres.",
      ],
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio."],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Por favor, ingresa un email válido.",
      ],
    },
    phone: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: [true, "El mensaje no puede estar vacío."],
      trim: true,
    },
    investment_experience: {
      type: String,
      required: [
        true,
        "Es necesario especificar si posees experiencia en inversiones.",
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models?.Contact ||
  mongoose.model("Contact", contactSchema);
