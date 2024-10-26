import { Product } from "../core/interfaces/product";

export function fuzzySearch(term: string, products: Product[]): Product[] {
  if (!term || !products.length) return [];
  return products.filter((product) => fuzzy(product.name, term));
}

const fuzzy = (str: string, query: string): boolean => {
  str = str.toLowerCase();
  query = query.toLowerCase();

  let i = 0;
  let lastSearched = -1;

  for (const char of query) {
    lastSearched = str.indexOf(char, lastSearched + 1);
    if (lastSearched === -1) return false;
  }
  return true;
};
