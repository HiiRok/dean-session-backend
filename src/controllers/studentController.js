const Student = require('../models/studentModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function studentLogin(req, res) {
  const { universityID, password } = req.body;

  try {
    const student = await Student.findOne({ universityID });
    const userRole = 'student';

    if (!student) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (!bcrypt.compareSync(password, student.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: student._id}, "dog");
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { studentLogin };
