const orderModel = require('../model/Order');

module.exports.createOrder = async (req, res) => {
  const { orderItems, totalAmount } = req.body;
  try {
    const result = await orderModel.create({
      userID: req.userID,
      orderItems: orderItems,
      totalAmount: totalAmount,

    });

    return res.status(201).json({ status: 201, message: "Order Created" })
  }
  catch (e) {
    console.log(e);
    // return res.status(400).json({ status: 400, message: `${e}` })
  }



}

module.exports.getAllOrder = (req, res) => {
  return res.send("Hey");
}

module.exports.getOrderByID = (req, res) => {
  return res.send("Hey");
}

