import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// ✅ Get All Products
export const getAllProducts = (req, res) => {
  const allProducts = data.flatMap(category => category.products);
  res.json(allProducts);
};

// ✅ Get Products by Category
export const getProductsByCategory = (req, res) => {
  const categoryName = req.params.category.toLowerCase();
  const category = data.find(cat => cat.category.toLowerCase() === categoryName);
  
  if (category) {
    res.json(category.products);
  } else {
    res.status(404).json({ message: "Category Not Found" });
  }
};

// ✅ Optimized Product Search API
export const searchProducts = (req, res) => {
  const { query } = req.query;
  if (!query) return res.json([]); // Return empty array if query is missing

  const allProducts = data.flatMap(category => category.products);

  //    Search Optimization: Show Exact Matches First
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().startsWith(query.toLowerCase()) // Show only relevant results
  );

  if (filteredProducts.length > 0) {
    res.json(filteredProducts);
  } else {
    res.status(404).json({ message: "No Products Found" });
  }
};
