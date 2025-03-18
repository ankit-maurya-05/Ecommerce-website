import express from 'express';
import { getAllProducts, getProductsByCategory, searchProducts } from "../controller/productController.js";

const router = express.Router();

router.get('/allproducts', getAllProducts);
router.get('/:category', getProductsByCategory);
router.get('/search/products', searchProducts); // New search endpoint

export default router;