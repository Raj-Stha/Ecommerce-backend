const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  orderItems: [
    {
      productName: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      productImage: {
        type: String,
        required: true
      },
      productPrice: {
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
