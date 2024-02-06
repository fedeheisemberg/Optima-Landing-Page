// pages/api/contact/index.js
import connectToDatabase from '../../../lib/mongodb'; // Importas la función para conectarte a MongoDB.
import Contact from '../../../components/models/Contact'; // Importas el modelo de Mongoose que definiste para los datos de contacto.

export default async function handler(req, res) {
  // Antes de manejar la solicitud, te conectas a la base de datos.
  await connectToDatabase();

  // Manejas las solicitudes POST, que es lo que tu formulario enviará.
  if (req.method === 'POST') {
    try {
      // Creas un nuevo documento en la colección Contact con los datos recibidos en req.body.
      const contact = await Contact.create(req.body);
      // Si todo sale bien, envías una respuesta de éxito con los datos del contacto guardado.
      res.status(200).json({ success: true, message: 'Contact saved', data: contact });
    } catch (error) {
      // Si algo sale mal, envías una respuesta de error.
      res.status(500).json({ success: false, message: 'Error saving contact', error: error.message });
    }
  } else {
    // Si la solicitud no es un POST, respondes con un código de estado 405 Method Not Allowed.
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
