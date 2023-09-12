const express = require('express');
const router = express.Router();
const deanSessionController = require('../controllers/deanSessionController');
const verifyToken = require('../utils/auth');
const Dean = require('../models/deanModel')

async function verifyDean(req, res, next) {
  const dean = await Dean.findOne({ _id:req.user.id });
    if (dean) {
      return next();
    }
    res.status(403).json({ message: 'Access denied. Only deans are allowed.' });
  }
  

router.get('/pending-sessions', verifyToken, verifyDean, deanSessionController.listPendingDeanSessions);
  
router.get('/sessions', verifyToken, deanSessionController.listAvailableDeanSessions);

router.post('/book',  deanSessionController.bookDeanSession);

module.exports = router;
