const productModel = require('../model/Product');

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
    return res.status(201).json({ status: "201", message: "Product Created" })
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}

const updateProduct = async (req, res) => {
  try {
    return res.status(201).json({ status: "201", message: "Product Created" })
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}

const getProductDetails = async (req, res) => {
  try {
    return res.status(201).json({ status: "201", message: "Product Created" })
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}

const deleteProduct = async (req, res) => {
  try {
    return res.status(201).json({ status: "201", message: "Product Created" })
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}




module.exports = { addProduct, allProduct, updateProduct, getProductDetails, deleteProduct };


