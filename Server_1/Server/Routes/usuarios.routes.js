const express = require('express');
const router = express.Router();

const usuaCtrl = require('../controllers/usuarios.controller');

router.get('/',usuaCtrl.getUsuarios);
router.post('/', usuaCtrl.createUsuario);
router.get('/:id', usuaCtrl.getUsuario);
router.put('/:id', usuaCtrl.editUsuario);
router.delete('/:id', usuaCtrl.delUsuario);

module.exports = router;
