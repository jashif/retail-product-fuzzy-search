import React, { useState, ReactNode, useEffect } from "react";
import { Product } from "../interfaces/Product";

interface ProductContextType {
  searchResults: Product[];
  setSearchValue: (value: string) => void;
  loading: boolean;
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

  return (
    <ProductContext.Provider
      value={{
        searchResults,
        setSearchValue,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, useProductContext, ProductProvider };
