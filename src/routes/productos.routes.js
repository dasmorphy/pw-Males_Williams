import { Router } from "express";
import { createProducts, getProducts, getProductsById, putProductsById, deleteProductsById } from "../controllers/productosController";

const router = Router();

router.post('/', createProducts)
router.get('/', getProducts)
router.get('/:productById', getProductsById)
router.put('/:productById', putProductsById)
router.delete('/:productById', deleteProductsById)




export default router;