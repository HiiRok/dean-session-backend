const express = require('express');
const router = express.Router();
const deanSessionController = require('../controllers/deanSessionController');
const verifyToken = require('../utils/auth');
const User = require('../models/userModel')

async function verifyDean(req, res, next) {
  const user = await User.findOne({ _id:req.user.id });
    if (user.role === "dean") {
      return next();
    }
    res.status(403).json({ message: 'Access denied. Only deans are allowed.' });
  }
  

router.get('/pending-sessions', verifyToken, verifyDean, deanSessionController.listPendingDeanSessions);
  
router.get('/sessions', verifyToken, deanSessionController.listAvailableDeanSessions);

router.post('/book',  deanSessionController.bookDeanSession);

module.exports = router;
