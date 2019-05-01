const Usuario = require('../Models/usuario.js');
const usuarioCtrl = {};
const fs = require('fs');
const qrcode = require('qrcode');

usuarioCtrl.getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);

run().catch(error => console.error(error.stack));


async function run() {
  const mags = await Usuario.find({"strNombre" : "Julia Jimenez"}, { strNombre: 1 });

  const res = await qrcode.toDataURL(JSON.stringify(mags));

  fs.writeFileSync('./mags.html', `<img src="${res}">`);
  //console.log(<img src="${res}">);
}
}
usuarioCtrl.createUsuario = async (req, res) =>{
}
usuarioCtrl.getUsuario = function(){

}
usuarioCtrl.editUsuario = function(){

}
usuarioCtrl.delUsuario = function(){

}
usuarioCtrl.Ticket = async (req, res) => {

}
module.exports = usuarioCtrl;
