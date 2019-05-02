const express = require('express')
const router = express.Router();

const authCtrl = require('../Controllers/authentication.controller');

//All routes for authentification
router.post('/', authCtrl.LogIn);

module.exports = router;