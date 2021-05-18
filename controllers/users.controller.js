const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const { generateAccessToken } = require('../utils/auth');

const User = require('../models/user.model');

const createUser = catchAsync(async (req, res) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ username, email, password: hashedPassword });

  // req.session.user_id = user._id;
  res.status(201).json(user);
});

const getUsers = catchAsync(async (req, res) => {
  const users = await User.find({});

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

  // req.session.user_id = validatedUser._id;
  res.status(200).json(accessToken);
});

const logoutUser = catchAsync(async (req, res) => {
  req.session.destroy();
});

module.exports = { createUser, getUsers, getUser, loginUser, logoutUser };
