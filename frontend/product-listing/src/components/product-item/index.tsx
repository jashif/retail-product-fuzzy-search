import React from "react";
import { Product } from "../../interfaces/Product";
import "./detail.css";

type ProductItemProps = {
  product: Product;
};
const ProductItem = ({ product }: ProductItemProps) => {
  if (!product) {
    return <div className="product-detail">No product selected.</div>;
  }

  const { name, category, description, price, imageUrl } = product;

  return (
    <div className="product-item-detail">
      <div className="product-item-image">
        <img src={imageUrl} />
      </div>
      <div className="product-item-desc">
        <h2 className="product-item-name">{name}</h2>

        <div className="product-item-category">Category: {category}</div>
        <div className="product-item-description">{description}</div>
        <div className="product-item-price">Price: ${price}</div>
      </div>
    </div>
  );
};

export default ProductItem;
