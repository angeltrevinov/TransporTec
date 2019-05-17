const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../Controllers/tickets.contoller');

router.post('/', ticketsCtrl.requestTicket);

module.exports = router;