
const path = require('path');

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
      }
      else {
        return res.status(402).json({ status: 402, message: "Invalid Image format" })
      }
      return res.send("Success");
    } else {
      return res.status(400).json({ status: '400', message: "Please select the image" });
    }
  }
  catch (e) {
    return res.status(400).json({ status: '400', message: e })
  }




}