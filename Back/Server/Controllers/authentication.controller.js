const Usuario = require('../Models/usuario.js');
const authCtrl = {};

authCtrl.LogIn = async (req, res, next) => {
    //LogIn method, finds the user by email and password and retrieves everything but the password
    const usuario = await Usuario.findOne(
        { 
            strCorreo: req.body.strCorreo,
            strContraseña: req.body.strContraseña
        },
        {
            strContraseña: 0
        }
    );

    res.json(usuario);
}

module.exports = authCtrl;
