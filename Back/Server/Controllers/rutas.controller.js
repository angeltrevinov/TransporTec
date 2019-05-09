const rutasCtrl = {};

rutasCtrl.getRuta = async (req, res, next) => {
    console.log(req.params.id);    
}

module.exports = rutasCtrl;