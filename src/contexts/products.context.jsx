import { createContext, useState, useEffect} from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from '../shop-data.js';


// actual value to be accessed
export const ProductsContext = createContext({
  products:[],
});

//provider
export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    }
    getCategoriesMap();
  },[]);

  // useEffect(()=>{
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // },[])
  const value = {products}

  return[
    <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
  ]
}