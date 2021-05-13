const { Router } = require('express');
const router = Router();

const Shoe = require('../models/shoe.model');

router.get('/', async (req, res) => {
  try {
    const shoes = await Shoe.find({});

    res.send(shoes);
  } catch (err) {
    console.log('~ err', err);
  }
});

module.exports = router;
