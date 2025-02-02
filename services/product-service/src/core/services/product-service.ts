import { MemoryStore } from "../db/mem-store";
import { Product } from "../interfaces/product";

export class ProductService {
  constructor(private readonly store: MemoryStore) {}

  public async addProduct(product: Product): Promise<Product> {
    return this.store.addProduct(product);
  }

  public async getProducts(offset: number, limit: number): Promise<Product[]> {
    return this.store.getAllProducts(offset, limit);
  }

  public async searchProducts(term: string): Promise<Product[]> {
    return this.store.searchProducts(term);
  }

  public async getProduct(id: string): Promise<Product | null> {
    return this.store.getProduct(id);
  }
}
