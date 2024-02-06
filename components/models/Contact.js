// components/models/Contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: [true, 'El nombre completo es obligatorio.'],
    trim: true,
    maxlength: [100, 'El nombre completo no puede tener más de 100 caracteres.']
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio.'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un email válido.']
  },
  telefono: {
    type: String,
    required: [true, 'El teléfono es obligatorio.'],
    trim: true,
    match: [/^\+?[1-9]\d{1,14}$/, 'Por favor, ingresa un número de teléfono válido.']
  },
  pais: {
    type: String,
    required: [true, 'El país es obligatorio.'],
    trim: true
  },
  mensaje: {
    type: String,
    required: [true, 'El mensaje no puede estar vacío.'],
    trim: true,
    minlength: [10, 'El mensaje debe tener al menos 10 caracteres.'],
    maxlength: [1000, 'El mensaje no puede tener más de 1000 caracteres.']
  },
  experienciaInversiones: {
    type: String,
    required: [true, 'Es necesario especificar si posees experiencia en inversiones.'],
    trim: true,
    enum: {
      values: ['Sí', 'No'],
      message: 'Experiencia en inversiones debe ser "Sí" o "No".'
    }
  },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);
