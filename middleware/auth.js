const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

const authorizeUser = catchAsync(async (req, res, next) => {
  console.log('~ req.headers', req.headers);
  const token = req.header('jwt-token');

  if (!token) {
    return new ExpressError(401, 'Unauthorized Access');
  }

  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  next();
});

module.exports = { authorizeUser };
