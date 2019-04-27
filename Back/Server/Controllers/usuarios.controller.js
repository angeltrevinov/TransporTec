const Usuario = require('../Models/usuario.js');
const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
}
usuarioCtrl.createUsuario = function(){

}
usuarioCtrl.getUsuario = function(){

}
usuarioCtrl.editUsuario = function(){

}
usuarioCtrl.delUsuario = function(){

}
module.exports = usuarioCtrl;
