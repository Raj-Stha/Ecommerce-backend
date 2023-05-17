const jwt = require('jsonwebtoken');

module.exports.checkAdmin = (req, res, next) => {
  const token = req.headers.authorization;
  const decode = jwt.decode(token, 'UserToken');

  // console.log(decode);
  if (token) {
    if (decode && decode.admin) {
      req.userID = decode.id;
      return next();
    }
    else {
      return res.status(200).json({ status: "200", message: "You are authorized" });
    }

  } else {
    return res.status(400).json({ status: "400", message: "You are unauthorized" });
  }

}