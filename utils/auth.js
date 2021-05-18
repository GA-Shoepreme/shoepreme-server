const jwt = require('jsonwebtoken');

const generateAccessToken = user => {
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '30s',
  });

  return accessToken;
};

const generateRefreshToken = user => {
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

  return refreshToken;
};

module.exports = { generateAccessToken, generateRefreshToken };
