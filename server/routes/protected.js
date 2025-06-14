const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token missing' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
}

router.get('/dashboard', verifyToken, (req, res) => {
  console.log("📥 /api/dashboard route hit");
  res.json({ message: `Welcome ${req.user.role}! Access granted.` });
});

module.exports = router;


