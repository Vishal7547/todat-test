import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import ProductsProvider from "./context/ProductsProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CssBaseline />
      <App />
    </ProductsProvider>
  </React.StrictMode>
);
