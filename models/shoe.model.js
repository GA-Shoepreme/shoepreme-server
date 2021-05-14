const mongoose = require('../db/connection');

const shoeSchema = new mongoose.Schema({
  id: String,
  sku: String,
  brand: String,
  name: String,
  colorway: String,
  gender: String,
  silhouette: String,
  releaseYear: Number,
  releaseDate: Date,
  retailPrice: Number,
  estimatedMarketValue: Number,
  story: String,
  image: {
    original: String,
    small: String,
    thumbnail: String,
  },
  links: {
    stockx: String,
    goat: String,
    flightClub: String,
  },
  iventory: {
    "5": Number,
    "6": Number,
    "7": Number,
    "8": Number,
    "9": Number,
    "10": Number,
    "11": Number,
    "12": Number,
  }
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;

