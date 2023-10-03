import express from "express";
import { getAllBrands, getBrand, createBrand, updateBrand, deleteBrand } from "../controllers/brandController.js";

const router = express.Router();

router.get('/', getAllBrands);
router.get('/:id', getBrand);
router.post('/', createBrand);
router.patch('/:id', updateBrand);
router.delete('/:id', deleteBrand);

export default router;