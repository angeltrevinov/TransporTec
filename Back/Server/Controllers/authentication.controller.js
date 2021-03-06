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
    //Checar que exista el usuario
    if(!usuario){
        return res.status(400).send({
            message: 'This is an error!'
         });
    } else {
        res.json(usuario);
    }
}

module.exports = authCtrl;
