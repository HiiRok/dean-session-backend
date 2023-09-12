const express = require('express');
const router = express.Router();
const deanController = require('../controllers/deanController');

router.post('/login', deanController.deanLogin);

module.exports = router;
