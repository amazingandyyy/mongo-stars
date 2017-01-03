const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  title: String,
  date: Date,
  copiesSolid: Number,
  numberTracks: Number,
  image: String,
  revenue: Number
});

module.exports = Schema;