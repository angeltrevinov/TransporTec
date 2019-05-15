const Parada = require('../Models/paradas.js');
const paradasCtrl = {};

paradasCtrl.getParadas = async (req, res, next) => {

    // Obtener las paradas apartir de la ruta que mandan
    strIdRuta = req.params.idRuta;
    const paradas = await Parada.find(
        {
            strIdRuta: strIdRuta
        }
    );

    if(!paradas){
        return res.status(400).send({
            message: 'Ruta not found!'
        });
    } else {
        res.json(paradas);
    }

}

module.exports = paradasCtrl;
