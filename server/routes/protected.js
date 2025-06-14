const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const User = require('../models/User');

// Protected Dashboard Route
router.get('/dashboard', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({
      message: `Welcome back, ${user.name}!`,
      user,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

module.exports = router;



