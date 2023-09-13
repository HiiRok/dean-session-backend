const Session = require('../models/deanSessionModel');
const User = require('../models/userModel');

async function listPendingDeanSessions(req, res) {
  const deanID = req.user.id; // Extracted from JWT token
  try {
    const pendingSessions = await Session.find({
      deanID,
      status: 'pending',
      sessionTime: { $gte: new Date() }, // Ensure the session is in the future
    }).populate('studentID', 'universityID');

    res.json(pendingSessions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


async function listAvailableDeanSessions(req, res) {
  try {
    const availableSessions = await Session.find({ status: 'available' });
    res.json(availableSessions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


async function bookDeanSession(req, res) {
  const studentID = req.user.id; 
  const { sessionTime } = req.body;

  try {
    const session = await Session.findOne({ sessionTime, status: 'available' });

    if (!session) {
      return res.status(400).json({ message: 'Session not available for booking' });
    }

 
    session.status = 'pending';
    session.studentID = studentID;
    await session.save();

    res.json({ message: 'Session booked successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { listPendingDeanSessions, listAvailableDeanSessions, bookDeanSession };
