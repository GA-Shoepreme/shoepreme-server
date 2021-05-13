const { Router } = require('express');
const router = Router();

const User = require('../models/user.model');

router.get('/', async (req, res) => {
  try {
    res.send('hello from /users');
  } catch (err) {
    console.log('~ err', err);
  }
});

module.exports = router;
