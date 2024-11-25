// backend/routes/news.js
const express = require('express');
const News = require('../models/News');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const newsItems = await News.find();
    res.json(newsItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

module.exports = router;
