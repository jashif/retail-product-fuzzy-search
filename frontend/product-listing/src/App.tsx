import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./views/MainPage";
import ProductDetail from "./views/ProductDetail";
import { ProductProvider } from "./context/product-context";

const App = () => (
  <div className="App">
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
