import { fuzzySearch } from "../../utils/fuzzy-search";
import { Product } from "../interfaces/product";

export class MemoryStore {
  private products: Product[] = [];

  addProduct(product: Product): Product {
    this.products.push(product);
    return product;
  }

  getAllProducts(offset: number, limit: number): Product[] {
    return this.products.slice(offset, offset + limit);
  }

  searchProducts(term: string): Product[] {
    return fuzzySearch(term, this.products);
  }

  getProduct(id: string): Product | null {
    return this.products.find((product) => product.id === id) || null;
  }
}
