import { ProductsContext } from "./context";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const url = "https://fakestoreapi.com/products";
export const useProducts = () => {
  return useContext(ProductsContext);
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [isChanged, setIsChanges] = useState(false);

  const productsFetching = async () => {
    try {
      const { data } = await axios.get(url);

      const categoryInfo = data.map((c, i, item) => c?.category);
      const uniqueProducts = new Set(categoryInfo);

      //   console.log([...uniqueProducts]);
      setCategory([...uniqueProducts]);
      const productsInfo = data.map((c, i, item) => ({
        category: c?.category,
        id: c?.id,
        title: c?.title,
        price: c?.price,
        isActive: true,
      }));
      setProducts(productsInfo);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    productsFetching();
  }, []);

  const fetchProductsList = (category, id, product) => {
    const info = products.filter((p, i) => p?.category === category);
    // console.log("info", info);
    return info;
  };

  const handleIsActive = (e, index) => {
    const isChecked = e.target.checked;
    const productsInfo = products.map((p, i) => {
      if (i === index) {
        return { ...p, isActive: isChecked };
      }
      return p;
    });
    setProducts(productsInfo);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        category,
        handleIsActive,
        fetchProductsList,
        isChanged,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
