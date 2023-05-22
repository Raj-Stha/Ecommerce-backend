
const path = require('path');
const fs = require('fs')

module.exports.fileCheck = (req, res, next) => {
  const image = req.files.productImage;
  try {
    if (image) {
      const supExtension = [".jpeg", ".jpg", ".png"];
      const imgExtension = path.extname(image.name);

      if (supExtension.includes(imgExtension)) {
        image.mv(`./uploads/images/${image.name}`, (err) => {
          console.log(err)
        });
        req.prodImage = `/uploads/images/${image.name}`;
        return next();
      }
      else {
        return res.status(402).json({ status: 402, message: "Invalid Image format" })
      }
    } else {
      return res.status(400).json({ status: '400', message: "Please select the image" });
    }
  }
  catch (e) {
    return res.status(400).json({ status: '400', message: e })
  }
}




module.exports.updateCheck = (req, res, next) => {
  const { productImage } = req.body;
  try {
    if (req.files === null) {
      req.finalImage = productImage;
      return next();

    } else {
      const { oldPath } = req.body;
      const image = req.files.productImage;
      if (image) {
        const supExtension = [".jpeg", ".jpg", ".png"];
        const imgExtension = path.extname(image.name);

        if (supExtension.includes(imgExtension)) {
          image.mv(`./uploads/images/${image.name}`, (err) => {
            console.log(err)
          });
          if (oldPath !== " ") {
            fs.unlink(`.${oldPath}`, (err) => {
              console.log(err);
            })
          }
          req.finalImage = `/uploads/images/${image.name}`;
          return next();
        }
        else {
          return res.status(402).json({ status: 402, message: "Invalid Image format" })
        }
      } else {
        return res.status(400).json({ status: '400', message: "Please select the image" });
      }
    }
  }
  catch (e) {
    return res.status(400).json({ status: '400', message: e })
  }




}