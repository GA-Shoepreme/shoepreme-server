const mongoose = require('../db/connection');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
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

const User = mongoose.model('User', userSchema);

module.exports = User;
