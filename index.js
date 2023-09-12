const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./src/routes/studentRoutes');
const deanRoutes = require('./src/routes/deanRoutes');
const deanSessionRoutes = require('./src/routes/deanSessionRoutes');
const verifyToken = require('./src/utils/auth');
const connectDB = require('./src/config/db');

const app = express();
app.use(bodyParser.json());

connectDB();


app.use('/api/student', studentRoutes); 
app.use('/api/dean', deanRoutes);
app.use('/api/dean-session', verifyToken, deanSessionRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
