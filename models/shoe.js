const mongoose = require('../db/connection');

const shoeSchema = new mongoose.Schema({
  sku: String,
  brand: String,
  model: String,
  gender: String,
  colorway: [String],
  releaseDate: Date,
  retailPrice: Number,
  marketValue: Number,
  shopLinks: [String],
  description: String,
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;
