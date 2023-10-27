//server/server.cjs
const express = require('express');
const app = express();
const db = require('./db.cjs'); // Import your database connection module
const productsRoute = require('./routes/products.cjs'); // Import your products route

// Middleware
app.use(express.json()); // JSON body parser

// Routes
app.use('/api/products', productsRoute); // Use the products route for API endpoints

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to your Express API!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
