const mongoose = require('mongoose');
const { Schema } = mongoose;

const RutaShema = new Schema({
   _id: { type: String, required: true },
   strNombre: { type: String, required: true },
   intHoraInic: { type: Number, required: true },
   intHoraFin: { type: Number, required: true } 
});

module.exports = mongoose.model('Ruta', RutaShema);