const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  address: {
    street:String,
    city: String,
    state: String,
    zipcode: Number,
  },
  favorites: [Object],
  cart: [Object],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
