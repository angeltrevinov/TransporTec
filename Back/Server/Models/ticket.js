const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
   _id: { type: String, required: true },
   strUsuario: { type: String, required: true },
   strParadaSubida: { type: String, required: true },
   strParabaBajada: { type: String, required: true },
   intHoraSubida: { type: Number, required: true },
   intPasajeroExtra: { type: Number, required: true }
});

module.exports = mongoose.model('Ticket', TicketSchema);
