const fuelRequestSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    location: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], required: true } // [longitude, latitude]
    },
    fuelType: { type: String, enum: ['petrol', 'diesel'], required: true },
    quantity: { type: Number, required: true }, // in liters
    status: { type: String, enum: ['pending', 'accepted', 'on_the_way', 'delivered'], default: 'pending' },
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
  });
  fuelRequestSchema.index({ location: '2dsphere' }); // for geo queries
  module.exports = mongoose.model('FuelRequest', fuelRequestSchema);