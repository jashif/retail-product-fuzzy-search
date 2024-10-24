import { MemoryStore } from "../db/mem-store";
import { Product } from "../interfaces/product";

export class ProductService {
  constructor(private readonly store: MemoryStore) {}

  public async addProduct(product: Product): Promise<Product> {
    return this.store.addProduct(product);
  }
}
