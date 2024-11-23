const mongoose = require('mongoose');

const upcomingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  release: { type: String, required: true }
});

const Upcoming = mongoose.model('Upcoming', upcomingSchema);

module.exports = Upcoming;
