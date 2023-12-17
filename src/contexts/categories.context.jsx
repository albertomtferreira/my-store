import { createContext, useState, useEffect} from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from '../shop-data.js';


// actual value to be accessed
export const CategoriesContext = createContext({
  categoriesMap:{},
});

//provider
export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  useEffect(()=>{
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  },[]);

  // useEffect(()=>{
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // },[])
  const value = {categoriesMap}

  return[
    <CategoriesContext.Provider key='CategoriesProvider' value={value} >{children}</CategoriesContext.Provider>
  ]
}