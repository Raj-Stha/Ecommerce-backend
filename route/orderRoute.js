

const express = require('express');
const routes = express.Router();
const userAuth = require('../middleware/UserAuth');
const orderController = require('../conrtroller/orderController');

const methodNotAllowed = (req, res) => res.status(405).json({
  status: "405", message: "Not allowed"
});

routes.route('/api/create-order').post(userAuth.checkUser, orderController.createOrder).all(methodNotAllowed);

routes.route('/api/get-all-order').get(userAuth.checkUser, orderController.getAllOrder).all(methodNotAllowed);

routes.route('/api/get-orderdetail').get(userAuth.checkUser, orderController.getOrderByID).all(methodNotAllowed);


module.exports = routes;