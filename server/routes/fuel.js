const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const FuelBooking = require('../models/FuelBooking');

// Book a fuel service
router.post('/book', verifyToken, async (req, res) => {
  const { fuelType, quantity, address } = req.body;
  try {
    const newBooking = new FuelBooking({
      user: req.user.id,
      fuelType,
      quantity,
      address,
    });

    await newBooking.save();
    res.status(201).json({ message: 'Fuel booking successful', booking: newBooking });
  } catch (err) {
    res.status(500).json({ error: 'Booking failed' });
  }
});

// Get user's fuel booking history
router.get('/history', verifyToken, async (req, res) => {
  try {
    const bookings = await FuelBooking.find({ user: req.user.id });
    res.json({ bookings });
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch history' });
  }
});

module.exports = router;


