// backend/models/News.js
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model('News', newsSchema);
