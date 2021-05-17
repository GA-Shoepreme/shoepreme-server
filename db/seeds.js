const mongoose = require('./connection');
const { connection } = mongoose;

const Shoe = require('../models/shoe.model');
const shoeData = require('./seed-data/sneaker-db.json');

const User = require('../models/user.model');
const userData = require('./seed-data/users-db.json');

const randomSize = () => Math.floor(Math.random() * 21);

Shoe.deleteMany({})
  .then(() => Shoe.insertMany(shoeData.results))
  .then(() =>
    Shoe.updateMany(
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
    )
  )
  .then(() => User.deleteMany({}))
  .then(() => User.insertMany(userData.users))
  .then(() => connection.close())
  .catch(console.error)
  .finally(() => {
    connection.close();
  });
