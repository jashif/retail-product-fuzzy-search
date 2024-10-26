import React, { useState, ReactNode, useEffect } from "react";
import { Product } from "../interfaces/Product";

interface ProductContextType {
  searchResults: Product[];
  setSearchValue: (value: string) => void;
  loading: boolean;
  loadingDetail: boolean;
  getProduct: (id: string) => Promise<Product>;
  searchError: boolean;
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
  const [searchError, setSearchError] = useState(false);
  const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
  useEffect(() => {
    const fetchData = async () => {
      if (!searchValue) {
        setSearchResults([]);
        return;
      }
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/search?term=${searchValue}`);
        const data = await response.json();
        setSearchResults(data);
        setLoading(false);
      } catch (error) {
        setSearchError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchValue]);

  const getProduct = async (id: string): Promise<Product> => {
    try {
      setLoadingDetail(true);
      const response = await fetch(`${baseUrl}/products/${id}`);
      const data = await response.json();
      setLoadingDetail(false);
      return data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <ProductContext.Provider
      value={{
        searchResults,
        setSearchValue,
        loading,
        loadingDetail,
        getProduct,
        searchError,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, useProductContext, ProductProvider };
