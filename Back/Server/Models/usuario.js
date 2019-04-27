const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  strNombre: { type: String, required: true},
  strContraseña: { type: String, required: true},
  strSexo: { type: String, required: true},
  intEdad: { type: Number, required: true},
  strCorreo: { type: String, required: true},
  strPagado: { type: String, required: false},
  strCarrera: { type: String, required: false},
  strTipo: { type: String, required: true},
})

module.exports = mongoose.model('Usuario', UsuarioSchema);
