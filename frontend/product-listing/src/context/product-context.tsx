import React, { useState, ReactNode, useEffect } from "react";
import { Product } from "../interfaces/Product";

interface ProductContextType {
  searchResults: Product[];
  setSearchValue: (value: string) => void;
  loading: boolean;
  loadingDetail: boolean;
  getProduct: (id: string) => Promise<Product>;
}

const ProductContext = React.createContext<ProductContextType | undefined>(
  undefined
);

const useProductContext = () => {
  const context = React.useContext(ProductContext);
  return context;
};

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchValue) {
        setSearchResults([]);
        return;
      }
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/search?term=${searchValue}`
      );
      const data = await response.json();
      setSearchResults(data);
      setLoading(false);
    };
    fetchData();
  }, [searchValue]);

  const getProduct = async (id: string): Promise<Product> => {
    setLoadingDetail(true);
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const data = await response.json();
    setLoadingDetail(false);
    return data;
  };

  return (
    <ProductContext.Provider
      value={{
        searchResults,
        setSearchValue,
        loading,
        loadingDetail,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, useProductContext, ProductProvider };
