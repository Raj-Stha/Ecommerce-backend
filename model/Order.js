const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  orderItems: [
    {
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      productID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      }
    }

  ],
  totalAmount: {
    type: Number,
    required: true
  }


}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
