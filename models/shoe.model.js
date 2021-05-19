const mongoose = require('../db/connection');
const { Schema } = mongoose;

const shoeSchema = new Schema({
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
  inventory: {
    5: Number,
    6: Number,
    7: Number,
    8: Number,
    9: Number,
    10: Number,
    11: Number,
    12: Number,
  },
  userCart: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

shoeSchema.index({
  sku: 'text',
  brand: 'text',
  name: 'text',
  colorway: 'text',
  gender: 'text',
  silhouette: 'text',
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;
