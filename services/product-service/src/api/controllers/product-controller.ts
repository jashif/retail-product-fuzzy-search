import { Request, Response } from "express";
import { ProductService } from "../../core/services/product-service";

export class ProductController {
  constructor(private readonly productService: ProductService) {}

  public async addProduct(req: Request, res: Response): Promise<void> {
    const product = req.body;
    const result = await this.productService.addProduct(product);
    res.json(result);
  }
}
