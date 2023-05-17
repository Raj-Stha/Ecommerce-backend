const { required } = require('joi');
const mongoose = require('mongoose');

const reviewSechema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true
  }
});


const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDetail: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true
  },
  reviews: [reviewSechema],
  productPrice: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0

  },
  rating: {
    type: Number,
    default: 0

  },
  categories: {
    type: String,
  },
  stockCount: {
    type: Number,
    required: true
  }



}, { timestamps: true });


const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;