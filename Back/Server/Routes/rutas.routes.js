const express = require('express');
const router = express.Router();

const rutasCtrl = require('../Controllers/rutas.controller');

router.get('/:id', rutasCtrl.getRuta);

module.exports = router; 