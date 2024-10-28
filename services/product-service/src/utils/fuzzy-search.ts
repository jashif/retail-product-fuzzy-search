import { Product } from "../core/interfaces/product";
import { calculateDistance } from "./damerau-levenshtein";
export function fuzzySearch(term: string, products: Product[]): Product[] {
  if (!term || !products.length) return [];
  return products.filter((product) => calculateDistance(product.name, term));
}
