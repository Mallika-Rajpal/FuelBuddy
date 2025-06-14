const mongoose = require('mongoose');

const FuelBookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fuelType: { type: String, required: true },
  quantity: { type: Number, required: true },
  address: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FuelBooking', FuelBookingSchema);
