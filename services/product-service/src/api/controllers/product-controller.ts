import { Request, Response } from "express";
import { ProductService } from "../../core/services/product-service";

export class ProductController {
  constructor(private readonly productService: ProductService) {}

  public async addProduct(req: Request, res: Response): Promise<void> {
    const product = req.body;
    const result = await this.productService.addProduct(product);
    res.json(result);
  }

  public async getProducts(req: Request, res: Response): Promise<void> {
    const offset = parseInt(req.query.offset as string) || 0;
    const limit = parseInt(req.query.limit as string) || 10;
    const result = await this.productService.getProducts(offset, limit);
    res.json(result);
  }

  public async searchProducts(req: Request, res: Response): Promise<void> {
    const term = req.query.term as string;
    const result = await this.productService.searchProducts(term);
    res.json(result);
  }

  public async getProduct(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const result = await this.productService.getProduct(id);
    res.json(result);
  }
}
