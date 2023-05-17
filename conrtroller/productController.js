const addProduct = async (req, res) => {
  try {
    // console.log(req.userID);
    return res.send("You have accesss");
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}

const allProduct = async (req, res) => {
  try {
    return res.status(201).json({ status: "201", message: "Product Created" })
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}

const updateProduct = async (req, res) => {
  try {
    return res.status(201).json({ status: "201", message: "Product Created" })
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}

const getProductDetails = async (req, res) => {
  try {
    return res.status(201).json({ status: "201", message: "Product Created" })
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}

const deleteProduct = async (req, res) => {
  try {
    return res.status(201).json({ status: "201", message: "Product Created" })
  }
  catch (e) {
    return (res.status(401).json({ status: "401", message: e }))
  }
}




module.exports = { addProduct, allProduct, updateProduct, getProductDetails, deleteProduct };


