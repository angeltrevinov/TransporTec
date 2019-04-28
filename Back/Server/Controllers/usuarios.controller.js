const Usuario = require('../Models/usuario.js');
const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
}
usuarioCtrl.createUsuario = async (req, res) =>{
}
usuarioCtrl.getUsuario = function(){

}
usuarioCtrl.editUsuario = function(){

}
usuarioCtrl.delUsuario = function(){

}
module.exports = usuarioCtrl;
