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
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;
