const mongoose = require('./connection');

const Shoe = require('../models/shoe.model');
const shoeData = require('./sneaker-db.json');

const User = require('../models/user.model');
const userData = require('./users-db.json');

const seedShoes = async () => {
  try {
    await Shoe.deleteMany({});
    await Shoe.insertMany(shoeData.results);
  } catch (err) {
    console.log('~ err', err);
  } finally {
    mongoose.connection.close();
  }
};

seedShoes();

const seedUsers = async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(userData.users);
  } catch (err) {
    console.log('~ err', err);
  } finally {
    mongoose.connection.close();
  }
};

seedUsers();