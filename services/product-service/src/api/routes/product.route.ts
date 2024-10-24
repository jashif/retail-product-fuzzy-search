import express from "express";
import { MemoryStore } from "../../core/db/mem-store";
import { ProductService } from "../../core/services/product-service";
import { ProductController } from "../controllers/product-controller";
import { asyncErrorMiddleware } from "../middlewares/async-middleware";

export function initProductRoute(store: MemoryStore): express.Router {
  const router = express.Router();
  const productService = new ProductService(store);
  const productController = new ProductController(productService);

  router.post(
    "/products",
    asyncErrorMiddleware(productController.addProduct.bind(productController))
  );
  router.get(
    "/products",
    asyncErrorMiddleware(productController.getProducts.bind(productController))
  );

  router.get(
    "/search",
    asyncErrorMiddleware(
      productController.searchProducts.bind(productController)
    )
  );
  return router;
}
