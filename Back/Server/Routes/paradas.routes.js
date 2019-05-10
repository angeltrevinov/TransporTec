const express = require('express');
const router = express.Router();

const paradasCtrl = require('../Controllers/paradas.controller');

router.get('/:idRuta', paradasCtrl.getParadas);

module.exports = router;