const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
  try {
    res.send('hello from /users');
  } catch (err) {
    console.log('~ err', err);
  }
});

module.exports = router;
