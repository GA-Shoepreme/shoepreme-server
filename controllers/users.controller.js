const User = require('../models/user.model');

const getUsers = async (req, res) => {
  try {
    res.send('hello from /users');
  } catch (err) {
    console.log('~ err', err);
  }
};

module.exports = { getUsers };
