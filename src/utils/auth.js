const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.header('Authorization');

  const decodedToken = decodeToken(token);

if (decodedToken) {
  console.log('Decoded Token:', decodedToken);
} else {
  console.log('Token decoding failed.');
}


  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token,"dog", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
}


function decodeToken(token) {
  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}


module.exports = verifyToken;
