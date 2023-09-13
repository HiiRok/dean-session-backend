const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.header('Authorization');
  let tokenWithoutBearer="";

  if (token && token.startsWith('Bearer ')) {
    tokenWithoutBearer = token.substring(7); 
    console.log(tokenWithoutBearer);
  } else {
    console.error('Invalid or missing Bearer token');
  }


  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(tokenWithoutBearer,"dog", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
}


module.exports = verifyToken;
