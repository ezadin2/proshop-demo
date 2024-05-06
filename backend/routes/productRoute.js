import express from 'express';
import { getProductById, getProducts } from '../controllers/productController.js';
import asyncHandler from '../middleware/asyncHandler.js';
const router = express.Router(); 

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

export default router;
