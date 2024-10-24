import express from "express";
import { ProductController } from "../controllers/product-controller";
import { asyncErrorMiddleware } from "../middlewares/async-middleware";
import { ProductService } from "../../core/services/product-service";
import { MemoryStore } from "../../core/db/mem-store";

const store = new MemoryStore();
store.populateMockData();

const productService = new ProductService(store);
const controller = new ProductController(productService);

const router = express.Router();

router.post("/products", asyncErrorMiddleware(controller.addProduct.bind(controller)));
export default router;
