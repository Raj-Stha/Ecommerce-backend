const productModel = require('../model/Product');
const mongoose = require('mongoose');
const fs = require('fs');

const addProduct = async (req, res) => {

  const { productName, brand, price, categories, productDesc, stock } = req.body;
  const productImage = req.prodImage;

  try {
    productModel.create({
      productName,
      productImage,
      brand,
      productPrice: price,
      categories,
      productDetail: productDesc,
      stock
    })
    return res.status(201).json({ status: 201, message: "Product Created" });
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}

const allProduct = async (req, res) => {
  try {
    const result = await productModel.find();
    if (result) {
      return res.status(200).json({ products: result })
    } else {
      return (res.status(404).json({ status: "401", message: "No product found" }))

    }
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { productName, brand, price, categories, productDesc, stock } = req.body;
  const productImage = req.finalImage;

  try {
    const result = await productModel.findByIdAndUpdate({ _id: id }, {
      productImage,
      productName,
      brand,
      productPrice: price,
      categories,
      productDetail: productDesc,
      stock,
    })
    return res.status(201).json({ status: "201", message: "Product Updated" })
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}



const getProductDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const idExists = mongoose.isValidObjectId(id);
    if (idExists) {
      const result = await productModel.findOne({ '_id': id });
      return res.status(200).json(result);
    } else {
      return (res.status(404).json({ status: "401", message: "Invalid Product ID" }))
    }
  }
  catch (e) {
    return (res.status(404).json({ status: "404", message: `${e}` }))
  }
}



const deleteProduct = async (req, res) => {
  const { productID, imagePath } = req.body;
  try {
    if (productID) {
      fs.unlink(`.${imagePath}`, (err) => {
        console.log(err);
      });
      await productModel.findByIdAndDelete({ _id: productID });
      return res.status(200).json({ status: 200, message: "Product Deleted" })

    } else {
      return (res.status(404).json({ status: "404", message: "Product ID and Image Path is required" }))
    }
  }
  catch (e) {
    return (res.status(404).json({ status: "404", message: `${e}` }))
  }
}




module.exports = { addProduct, allProduct, updateProduct, getProductDetails, deleteProduct };


