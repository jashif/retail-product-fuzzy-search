import { Product } from "../interfaces/product";

export class MemoryStore {
  private products: Product[] = [];

  addProduct(product: Product): Product {
    this.products.push(product);
    return product;
  }

  populateMockData(): void {
    for (let i = 0; i < 100; i++) {
      const product: Product = {
        name: `Ikea Product ${i}`,
        price: Math.floor(Math.random() * 1000),
        description: `This is a description for Ikea Product ${i}`,
        imageUrl: `https://picsum.photos/200/300?random=${i}`,
        category: `Ikea Category ${i}`,
      };
      this.products.push(product);
    }
  }
}
