import { MemoryStore } from "../core/db/mem-store";
import { Product } from "../core/interfaces/product";

const productNames = [
  "Armchair",
  "Sofa",
  "Coffee Table",
  "Dining Table",
  "Bed Frame",
  "Wardrobe",
  "Bookshelf",
  "TV Stand",
  "Office Chair",
  "Desk",
  "Cabinet",
  "Drawer",
  "Mirror",
  "Lamp",
  "Curtains",
  "Cushion",
  "Rug",
  "Shelf",
  "Stool",
  "Bench",
  "Vase",
  "Clock",
  "Picture Frame",
  "Plant",
  "Cupboard",
  "Mattress",
  "Blanket",
  "Pillow",
  "Plate",
  "Cutlery Set",
  "Mug",
  "Towel",
  "Shower Curtain",
  "Laundry Basket",
  "Bath Mat",
  "Toothbrush Holder",
  "Clothes Hanger",
  "Trash Bin",
  "Storage Box",
  "Chopping Board",
  "Knife Set",
  "Pot",
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
      name: productNames[productIndex],
      price: Math.floor(Math.random() * 1000),
      description: `A high-quality ${productNames[productIndex]}`,
      imageUrl: `https://picsum.photos/200/300?random=${Math.floor(
        Math.random() * 1000
      )}`,
      category: categories[Math.floor(Math.random() * categories.length)],
    };

    store.addProduct(product);
    productIndex++;
  }
}
