const orderModel = require('../model/Order');

module.exports.createOrder = async (req, res) => {

  const result = await orderModel.create({
    userID: req.userID,
    orderItems: orderItems,
    totalAmount: totalAmount,

  });

  return res.status(201).json({ status: 201, message: "Order Created" })
}

module.exports.getAllOrder = (req, res) => {
  return res.send("Hey");
}

module.exports.getOrderByID = (req, res) => {
  return res.send("Hey");
}

