const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/collegeDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the application with an error code
  }
};

module.exports = connectDB;
