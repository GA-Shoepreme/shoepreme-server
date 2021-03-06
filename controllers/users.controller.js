const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const { generateAccessToken, generateRefreshToken } = require('../utils/auth');

const User = require('../models/user.model');

const createUser = catchAsync(async (req, res) => {
  const { password } = req.body;
  console.log('~ req.body', req.body);
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ password: hashedPassword, ...req.body });

  res.status(201).json(user);
});

const getUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

const getUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.status(200).json(user);
});

const loginUser = catchAsync(async (req, res) => {
  const { username, password } = req.body;
  const validatedUser = await User.validateLogin(username, password);

  if (!validatedUser) {
    throw new ExpressError(404, 'Invalid password');
  }

  const user = { username };
  const accessToken = generateAccessToken(user);
  const refreshToken = generateAccessToken(user);

  res.status(200).json({ accessToken, refreshToken });
});

const logoutUser = catchAsync(async (req, res) => {
  req.session.destroy();
});

module.exports = { createUser, getUsers, getUser, loginUser, logoutUser };
