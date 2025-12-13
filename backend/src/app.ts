const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const sweetRoutes = require('./routes/sweets');
require('./models/database'); // Initialize database

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sweet Shop Management API');
});

app.use('/api/auth', authRoutes);
app.use('/api/sweets', sweetRoutes);

module.exports = app;