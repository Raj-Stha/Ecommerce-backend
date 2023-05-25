const express = require('express');
const userRoute = require('../conrtroller/userController');

const Joi = require('joi');
const expJoi = require('express-joi-validation').createValidator({});
const userMiddleware = require('../middleware/UserAuth');

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(3),
});

const signUpSchema = Joi.object().keys({
  fullName: Joi.string().required().min(5),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(3).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

})

const routes = express.Router();
const methodNotAllowed = (req, res) => res.status(405).json({
  status: "405", message: "Not allowed"
});



routes.route('/login').post(expJoi.body(loginSchema), userRoute.userLogin).all(methodNotAllowed);


routes.route('/signup').post(expJoi.body(signUpSchema), userRoute.signup).all(methodNotAllowed);


routes.route('/update').patch(userMiddleware.checkUser, userRoute.updateUser).all(methodNotAllowed);

module.exports = routes;