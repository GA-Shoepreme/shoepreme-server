const mongoose = require('../db/connection');

const shoeSchema = new mongoose.Schema({
  items: {
    properties: {
      //
    },
  },
  required: {
    //
  },
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;
