import { createContext, useState, useEffect } from "react";

import PRODUCTS from '../shop-data.json';


// actual value to be accessed
export const ProductsContext = createContext({
  products:[],
});

//provider
export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState(PRODUCTS)
  const value = {products}

  return[
    <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
  ]
}