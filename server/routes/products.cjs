// routes/products.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.cjs');

// Get a list of products
router.get('/', productController.getProducts);


module.exports = router;
