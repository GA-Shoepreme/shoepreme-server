const Shoe = require('../models/shoe.model');

const getShoes = async (req, res) => {
  try {
    const shoes = await Shoe.find({});

    res.send(shoes);
  } catch (err) {
    console.log('~ err', err);
  }
};

module.exports = { getShoes };
