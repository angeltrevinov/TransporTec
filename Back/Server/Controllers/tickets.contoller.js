const ticketsCtrl = {};
const qrcode = require('qrcode');

ticketsCtrl.requestTicket = async (req, res, next) => {

    //                                                      //Request the data as a qr
    const qrres = await qrcode.toDataURL('hola');
    if(!qrres) {
        return res.status(401).send({
            message: 'an error ocurred getting the ticket, try again later'
        });
    }  else {
        res.json(qrres);
    }

}

module.exports = ticketsCtrl;