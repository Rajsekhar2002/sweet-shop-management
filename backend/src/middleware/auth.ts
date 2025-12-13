const { verifyToken } = require('../services/authService');

const authenticate = (req, res, next) => {
  const header = req.header('Authorization');
  
  if (!header) {
    return res.status(401).json({ error: 'Access denied' });
  }

  const token = header.replace('Bearer ', '');

  try {
    const decoded = verifyToken(token);
    req.user = decoded;   // store user data
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

const authorizeAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

module.exports = { authenticate, authorizeAdmin };
