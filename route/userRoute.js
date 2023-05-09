const express = require('express');
const userRoute = require('../conrtroller/userController');

const route = express.Router();

route.post('/login', userRoute.userLogin);

route.post('/signup', userRoute.signup);

module.exports = route;