const Ruta = require('../Models/rutas.js');
const rutasCtrl = {};

rutasCtrl.getRuta = async (req, res, next) => {

    //This is the id of the route, just to get the info of the route
    strIdRuta = req.params.id
    const ruta = await Ruta.findOne(
        {
            _id: strIdRuta
        }
    );

    if(!ruta) {
        return res.status(400).send({
            message: 'Ruta not found!'
        });
    } else {
        res.json(ruta);
    }

}

module.exports = rutasCtrl;
