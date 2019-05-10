const mongoose = require('mongoose');
const { Schema } = mongoose;

const ParadaSchema = new Schema({
    _id: { type: String, required: true },
    decLon: { type: Number, required: true },
    decLat: { type: Number, required: true },
    intMin: { type: Number, required: true },
    strIdRuta: { type: Array, required: true }
});

module.exports = mongoose.model('Parada', ParadaSchema);