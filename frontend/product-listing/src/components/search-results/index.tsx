import React from "react";
import { useProductContext } from "../../context/product-context";
import "./results.css";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {
  const { searchResults } = useProductContext()!;
  const navigate = useNavigate();

  return (
    <div className="results">
      <ol>
        {searchResults.map((product, index) => (
          <li
            key={index}
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
          >
            <div className="product-name">{product.name}</div>
            <div className="product-category">Category: {product.category}</div>
            <div className="product-price">Price: ${product.price}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
