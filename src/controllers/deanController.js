const Dean = require('../models/deanModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function deanLogin(req, res) {
  const { universityID, password } = req.body;
  const userRole = 'dean';

  try {
    const dean = await Dean.findOne({ universityID });

    if (!dean) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (!bcrypt.compareSync(password, dean.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: dean._id}, "dog");
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { deanLogin };
