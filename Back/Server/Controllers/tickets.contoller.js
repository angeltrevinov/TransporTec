const ticketsCtrl = {};
const qrcode = require('qrcode');
const Camion = require('../Models/camiones.js');
const Parada = require('../Models/paradas.js');

ticketsCtrl.requestTicket = async (req, res, next) => {

    //strIdRuta = req.body.id;
    const asientos = await Camion.findOne(
      {
        strRuta : req.body.strRuta
      },
      {
        _id: 1,
        intAsiOcup: 1
      }
    );

    console.log(asientos.intAsiOcup);
    if(asientos.intAsiOcup == 30){
      return res.status(403).send({
        message: 'Error getting the ticket, try another hour'
      });
    }else{
      asientos.intAsiOcup++;
    }

    //                                                      //Request the data as a qr
    const qrres = await qrcode.toDataURL(JSON.stringify(asientos));
    if(!qrres) {
        return res.status(401).send({
            message: 'an error ocurred getting the ticket, try again later'
        });
    }  else {
        res.json(qrres);
    }


}

module.exports = ticketsCtrl;
