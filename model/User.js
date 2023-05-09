const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  shippingAddress: {
    city: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    isEmpty: {
      type: Boolean,
      default: true
    }
  }

}, { timestamps: true });


const User = mongoose.model("User", userSchema);

module.exports = User;