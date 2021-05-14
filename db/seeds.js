const mongoose = require("./connection");

const shoeData = require("./seed-data/sneaker-db.json");
const Shoe = require("../models/shoe.model");

const User = require("../models/user.model");
const userData = require("./seed-data/users-db.json");

const seedShoes = async () => {
  try {
    await Shoe.deleteMany({});
    await Shoe.insertMany(shoeData.results);
  } catch (err) {
    console.log("~ err", err);
  } finally {
    await mongoose.connection.close();
  }
};

seedShoes();

// const seedInventory = async () => {
//   try {
//     const random = Math.floor(Math.random() * 21);

//     await Shoe.updateMany({}, {
//       $set: {
//         inventory: {
//           "5": random,
//           "6": random,
//           "7": random,
//           "8": random,
//           "9": random,
//           "10": random,
//           "11": random,
//           "12": random,
//         }
//       }
//     })
//   } catch (err) {
//     console.log("~ err", err);
//   } finally {
//     await mongoose.connection.close();
//   }
// };

// seedInventory();

const seedUsers = async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(userData.users);
  } catch (err) {
    console.log("~ err", err);
  } finally {
    await mongoose.connection.close();
  }
};

seedUsers();
