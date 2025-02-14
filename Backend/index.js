import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();

// Enable CORS for all routes
app.use(cors());

// Load data from JSON file
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// Route to get all products
app.get('/api/allproducts', (req, res) => {
  const allProducts = data.flatMap(category => category.products);
  res.json(allProducts);
});

// Route to get products by category
app.get('/api/:category', (req, res) => {
  const categoryName = req.params.category;
  const category = data.find(cat => cat.category.toLowerCase() === categoryName.toLowerCase());
  if (category) {
    res.json(category.products);
  } else {
    res.status(404).json({ message: `Category '${categoryName}' not found` });
  }
});

// Route to search products
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase(); // Get the query parameter and convert to lowercase
  if (!query) {
    return res.status(400).json({ message: 'Search query parameter "q" is required' });
  }

  // Combine all products
  const allProducts = data.flatMap(category => 
    category.products.map(product => ({
      ...product,
      category: category.category // Add the category name to each product
    }))
  );

  // Filter products based on the query
  const results = allProducts.filter(product => 
    product.name.toLowerCase().includes(query) || // Search by product name
    product.category.toLowerCase().includes(query) // Search by category name
  );

  if (results.length === 0) {
    return res.status(404).json({ message: 'No products found matching your query' });
  }

  res.json(results);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
