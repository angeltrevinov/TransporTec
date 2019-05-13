const mongoose = require('mongoose');
const { Schema } = mongoose;

const CamionSchema = new Schema({
    _id: { type: String, required: true },
    intCapacidad: { type: Number, required: true },
    intAsiOcup: { type: Number, required: true },
    strRuta: { type: String, required: true },
},{
  collection : 'camiones'
});

module.exports = mongoose.model('Camion', CamionSchema);
