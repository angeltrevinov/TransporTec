const ticketsCtrl = {};
const qrcode = require('qrcode');
//const Camion = require('../Models/camiones.js');
const Parada = require('../Models/paradas.js');
const Usuario = require('../Models/usuario.js');

ticketsCtrl.requestTicket = async (req, res, next) => {

    // Verificar si todavia hay asientos
    /*const asientos = await Camion.findOne(
      {
        strRuta : req.body.strRuta
      },
      {
        _id: 1,
        intAsiOcup: 1
      }
    );
    //console.log(asientos.intAsiOcup);
    if(asientos.intAsiOcup == 30){
      return res.status(403).send({
        message: 'Error getting the ticket, try another hour'
      });
    }else{
      asientos.intAsiOcup++;
    }*/
    //Conseguir el usuario (id y nombre)
    const usuario = await Usuario.findOne(
      {
        _id : req.body._id
      },
      {
        _id: 1,
        strNombre: 1
      }
    );
    //console.log(usuario);
    //Conseguir la parada de subida
    const paradaS = await Parada.findOne(
      {
        strNombre: req.body.strNombreS
      },
      {
        _id: 1,
        strNombre: 1
      }
    );
    //Obtener la parada de bajada
    const paradaB = await Parada.findOne(
      {
        strNombre: req.body.strNombreB
      },
      {
        _id: 1,
        strNombre: 1
      }
    );

    /*
    console.log(paradaS);
    console.log(paradaB);
    console.log(asientos.intAsiOcup);
    */

    var ticket = {};
    var key = 'Comprobante';
    ticket[key] = [];
    ticket[key].push(usuario);
    ticket[key].push(paradaS);
    ticket[key].push(paradaB);
    console.log(ticket);

    //                                                      //Request the data as a qr
    const qrres = await qrcode.toDataURL(JSON.stringify(ticket));
    if(!qrres) {
        return res.status(401).send({
            message: 'an error ocurred getting the ticket, try again later'
        });
    }  else {
        res.json(qrres);
    }


}

module.exports = ticketsCtrl;
