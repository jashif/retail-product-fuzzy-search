import { Product } from "../core/interfaces/product";

export function fuzzySearch(term: string, products: Product[]): Product[] {
  const buf = ".*" + term.replace(/(.)/g, "$1.*").toLowerCase();
  const reg = new RegExp(buf);
  const newList = products.filter(function (e) {
    return reg.test(e.name.toLowerCase());
  });
  return newList;
}
