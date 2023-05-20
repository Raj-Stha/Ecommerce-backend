
const express = require('express');
const productController = require('../conrtroller/productController');
const files = require('../middleware/fileCheck');

const router = express.Router();
const userAuth = require('../middleware/UserAuth');

router.get('/', productController.allProduct);

router.post('/api/add-product', userAuth.checkAdmin, files.fileCheck, productController.addProduct);

router.get('/api/product/:id', productController.getProductDetails);
router.patch('/api/update-product/:id', userAuth.checkAdmin, files.updateCheck, productController.updateProduct);
router.post('/api/delete-product', userAuth.checkAdmin, productController.deleteProduct);


module.exports = router;