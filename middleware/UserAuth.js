const jwt = require('jsonwebtoken');

module.exports.checkAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  const decode = jwt.decode(token, 'UserToken');

  if (token) {

    if (decode && decode.admin) {
      req.userID = decode.id;
      return next();
    }
    else if (decode && decode.admin === false) {
      return res.status(400).json({ status: "400", message: "You are not authorized" });
    }

  } else {
    return res.status(400).json({ status: "400", message: "You are unauthorized" });
  }

}



module.exports.checkUser = (req, res, next) => {
  const token = req.headers.authorization;
  const decode = jwt.decode(token, 'UserToken');

  if (token) {

    if (decode) {
      req.userID = decode.id;
      return next();
    }
    else {
      return res.status(400).json({ status: "400", message: "You are not authorized" });
    }

  } else {
    return res.status(400).json({ status: "400", message: "You are unauthorized" });
  }

}