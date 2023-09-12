const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  universityID: String,
  password: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
