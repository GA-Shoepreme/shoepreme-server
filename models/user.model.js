const mongoose = require('../db/connection');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const ExpressError = require('../utils/ExpressError');

const userSchema = new Schema({
  name: {
    first: String,
    last: String,
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: Number,
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Shoe',
    },
  ],
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Shoe',
    },
  ],
});

userSchema.virtual('fullName').get(function () {
  return `${this.name.first} ${this.name.last}`;
});

userSchema.statics.validateLogin = async function (username, password) {
  const user = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, user.password);

  if (!user) {
    throw new ExpressError(404, `Username "${username}" does not exist`);
  } else {
    return isValid ? user : false;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
