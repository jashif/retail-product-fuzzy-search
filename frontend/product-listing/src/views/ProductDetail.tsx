import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../context/product-context";
import ProductItem from "../components/product-item";

const ProductDetail = () => {
  const { getProduct, loadingDetail } = useProductContext()!;
  const { productId } = useParams();
  const [product, setProduct] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!productId) {
      return;
    }

    getProduct(productId)
      .then((data) => {
        setProduct(data);
      })
      .catch(() => {
        setError("Error fetching product");
      });
  }, []);

  if (loadingDetail) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <ProductItem product={product}></ProductItem>
    </div>
  );
};

export default ProductDetail;
