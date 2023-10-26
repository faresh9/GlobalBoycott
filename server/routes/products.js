// routes/products.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get a list of products
router.get('/products', productController.getProducts);
    

module.exports = router;
