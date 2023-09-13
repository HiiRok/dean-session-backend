const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  deanID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  studentID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  sessionTime: Date,
  status: String, // "pending", "available", "completed", or "expired"
  expiresAt: Date, // Date and time of expiration
});

const Session = mongoose.model('Session', sessionSchema);


module.exports = Session;
