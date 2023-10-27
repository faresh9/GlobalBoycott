//server /controllers/productController.js
const db = require('../db.cjs'); // Use your database connection module

// Controller function to get a list of products
async function getProducts(req, res) {
  try {
    const products = await db.any('SELECT * FROM products');
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
}

module.exports = {
  getProducts,
};
