const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

const getUsers = catchAsync(async (req, res) => {
  res.send('hello from /users');
});

module.exports = { getUsers };
