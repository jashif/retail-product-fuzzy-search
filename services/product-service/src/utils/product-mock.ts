import { MemoryStore } from "../core/db/mem-store";
import { Product } from "../core/interfaces/product";

const productNames = [
  "Karlstad Sofa",
  "Hemnes Dresser",
  "Friheten Sofa Bed",
  "Malm Bed Frame",
  "Billy Bookcase",
  "Lack Coffee Table",
  "Ekedalen Dining Table",
  "Stuva Bench",
  "PS 2014 Sofa",
  "Fjallbo Coffee Table",
  "Tarva Bed Frame",
  "Vittsjo Coffee Table",
  "Nordli Chest of Drawers",
  "Friheten Sofa Bed 2",
  "Malm Dresser",
  "Brauns Kitchen Cabinet",
  "Kalax Shelf Unit",
  "Hemnes TV Unit",
  "Ekedalen Chairs",
  "Stuva Storage Bench",
  "Nyhamn Sofa",
  "Hemnes Bed Frame",
  "Lappljung Ruta Curtain",
  "Kivik Sofa",
  "Tjillevips Pillow",
  "Fargrik Dinnerware Set",
  "Kullen Drawer Unit",
  "Hemnes Bedside Table",
  "Fjallbo Side Table",
  "Vittsjo Shelf Unit",
  "Nordli Nightstand",
  "Tarva Chest of Drawers",
  "Lack Side Table",
  "Friheten Sofa Bed 3",
  "Malm Nightstand",
  "Brauns Dining Table",
  "Lappljung Flora Cushion",
  "Vittsjo Desk",
  "Kalax Shelf Unit 2",
  "Nyhamn Armchair",
  "Lack Wall Shelf",
  "Fjallbo TV Unit",
  "Nordli Bed Frame",
  "PS 2017 Sofa",
  "Karlstad Armchair",
  "Malm Desk",
  "Billy Bookcase 2",
  "Friheten Sofa Bed 4",
  "Vittsjo Computer Desk",
  "Kalax Bookcase 2",
  "Fargrik Mug",
  "Kullen Dresser",
  "Hemnes Chest of Drawers",
  "Stuva Storage Unit",
  "Tarva Nightstand",
  "Lack TV Bench",
  "Malm Bedside Table",
  "Nyhamn Sofa 2",
  "Ekedalen Bench",
  "Fjallbo Dining Table",
  "Karlstad Armchair 2",
  "Brauns Cabinet",
  "Vittsjo Dining Table",
  "Nordli Bed Frame 2",
  "PS 2015 Sofa",
  "Malm Coffee Table",
  "Lack Side Table 2",
  "Kalax Bookcase 3",
];

const categories = [
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Bathroom",
  "Office",
  "Outdoor",
  "Storage",
  "Decor",
  "Dining",
  "Lighting",
];

export function generateRandomProducts(store: MemoryStore): void {
  let productIndex = 0;

  while (productIndex < productNames.length) {
    const product: Product = {
      id: `${productIndex}`,
      name: productNames[productIndex],
      price: Math.floor(Math.random() * 1000),
      description: `This is a high-quality ${
        productNames[productIndex]
      } perfect for any ${
        categories[Math.floor(Math.random() * categories.length)]
      }.`,
      imageUrl: `https://fakeimg.pl/500x500/0057AD/FBDA0C?text=${productNames[productIndex]}&font=noto&font_size=24`,
      category: categories[Math.floor(Math.random() * categories.length)],
    };

    store.addProduct(product);
    productIndex++;
  }
}
