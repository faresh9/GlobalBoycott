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

async function createProduct(req, res) {
  const { name, description, price } = req.body;

  try {
    const newProduct = await db.one(
      'INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *',
      [name, description, price]
    );
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating a product.' });
  }
}

module.exports = {
  getProducts,
  createProduct,
};
