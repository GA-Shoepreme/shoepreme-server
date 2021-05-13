const express = require('express');
const router = express.Router();

const Shoe = require('../models/shoe');

router.get('/', async (req, res) => {
  try {
    res.send('hello from /shoes');
  } catch (err) {
    console.log('~ err', err);
  }
});

module.exports = router;
