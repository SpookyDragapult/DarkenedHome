// backend/routes/movies.js
const express = require('express');
const Upcoming = require('../models/Upcoming');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const upcoming = await Upcoming.find();
    res.json(upcoming);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

module.exports = router;
