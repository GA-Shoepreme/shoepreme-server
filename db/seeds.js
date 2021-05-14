const mongoose = require('./connection');
const { connection } = mongoose;

const catchAsync = require('../utils/catchAsync');

const Shoe = require('../models/shoe.model');
const shoeData = require('./seed-data/sneaker-db.json');

const User = require('../models/user.model');
const userData = require('./seed-data/users-db.json');

const seedShoes = catchAsync(async (req, res, next) => {
  await Shoe.deleteMany({});
  await Shoe.insertMany(shoeData.results);
});

seedShoes();

const randomSize = () => Math.floor(Math.random() * 21);

const seedInventory = catchAsync(async (req, res, next) => {
  await Shoe.updateMany(
    {},
    {
      $set: {
        inventory: {
          5: randomSize(),
          6: randomSize(),
          7: randomSize(),
          8: randomSize(),
          9: randomSize(),
          10: randomSize(),
          11: randomSize(),
          12: randomSize(),
        },
      },
    }
  );
});

seedInventory();

const seedUsers = catchAsync(async (req, res, next) => {
  await User.deleteMany({});
  await User.insertMany(userData.users);

  connection.close();
});

seedUsers();
