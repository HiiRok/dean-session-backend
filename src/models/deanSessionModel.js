const mongoose = require('mongoose');

const deanSessionSchema = new mongoose.Schema({
  deanID: { type: mongoose.Schema.Types.ObjectId, ref: 'Dean' },
  studentID: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' ,default: null},
  sessionTime: Date,
  status: String, // "pending", "available", "completed", or "expired"
  expiresAt: Date, // Date and time of expiration
});

const DeanSession = mongoose.model('DeanSession', deanSessionSchema);

module.exports = DeanSession;
