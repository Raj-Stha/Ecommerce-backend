const { default: mongoose } = require('mongoose');
const user = require('../model/User');
const bcrpyt = require('bcrypt');
const jwt = require('jsonwebtoken');



const userLogin = async (req, res) => {
  const { email, password } = req.body;
  let result = await user.findOne({ email: email });

  if (result) {
    const validPass = bcrpyt.compareSync(password, result.password);
    console.log(validPass);
    if (validPass) {
      const token = jwt.sign({ id: result._id, admin: result.admin }, "UserToken");
      return res.status(201).json({
        status: "success", userDetails: {
          token,
          email, address: result.shippingAddress,
          isAdmin: res.admin
        }
      })
    } else {
      return res.status(422).json({ status: "error", message: "Invalid Login Credential" })
    }

  } else {
    return res.status(422).json({ status: "error", message: "Invalid Login Credential" })
  }

}


const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  let result = await user.findOne({ email: email });

  if (result) {
    return res.status(402).json({ status: "error", message: "User already exits" })

  } else {
    const hashed = await bcrpyt.hash(password, 10);
    user.create({
      fullName: fullName,
      email: email,
      password: hashed

    });
    return res.status(201).json({ status: "success", message: "User Created" })
  }
}

module.exports = { userLogin, signup };