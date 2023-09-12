const mongoose = require('mongoose');

const deanSchema = new mongoose.Schema({
  universityID: String,
  password: String,
});

const Dean = mongoose.model('Dean', deanSchema);

module.exports = Dean;
