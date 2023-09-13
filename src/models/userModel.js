const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  universityID: String,
  password: String,
  role: String,
});

const User = mongoose.model('User', userSchema);


module.exports = User;
