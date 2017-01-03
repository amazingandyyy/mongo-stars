const mongoose = require('mongoose');
const AlbumSchema = require('./album');

const Schema = new mongoose.Schema({
  name: {
    type: String,
    text: true
  },
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AlbumSchema]
});

module.exports = mongoose.model('Artist', Schema);