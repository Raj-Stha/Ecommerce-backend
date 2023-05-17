
const express = require('express');
const productController = require('../conrtroller/productController');
const files = require('../middleware/fileCheck');

const router = express.Router();
const userAuth = require('../middleware/UserAuth');

router.post('/api/add-product', userAuth.checkAdmin, files.fileCheck, productController.addProduct);
router.get('/api/all-products', productController.allProduct);
router.get('/api/products/:id', productController.getProductDetails);
router.patch('/api/update-product/:id', userAuth.checkAdmin, productController.updateProduct);
router.delete('/api/delete-product/:id', userAuth.checkAdmin, productController.deleteProduct);


module.exports = router;