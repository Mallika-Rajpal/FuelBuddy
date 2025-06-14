const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const protectedRoutes = require('./routes/protected');
const fuelRoutes = require('./routes/fuel');




const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);
app.use('/api/fuel', fuelRoutes);

app.get('/', (req, res) => {
    res.send('FuelBuddy Backend is live!');
  });
  

const PORT = process.env.PORT || 5001;

// Connect MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
