//server/routes/products.cjs
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.cjs');

// Create a new product
router.post('/', productController.createProduct);

// Get a list of products
router.get('/', productController.getProducts);

module.exports = router;
