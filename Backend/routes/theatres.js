// backend/routes/theatres.js
const express = require('express');
const Theatre = require('../models/Theatre');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const theatres = await Theatre.find();
    res.json(theatres);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch theatres' });
  }
});

module.exports = router;
