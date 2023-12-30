import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';

import {CategoryRouteContainer,CategoryTitleReturn,CategoryTitle} from './category.styles.jsx';
import { selectCategoriesMap } from '../../store/categories/category.selector.js';

const Category = () => {
  const {category} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(()=> {
    setProducts(categoriesMap[category]);
  },[category, categoriesMap])

  return[
    <Fragment key='CategoryRouteContainerCategoryRouteContainer' >
        <CategoryTitleReturn to='/shop'>RETURN</CategoryTitleReturn>
        <CategoryTitle as='h2'>{category.toUpperCase()}</CategoryTitle>
      <CategoryRouteContainer>
        {products &&
          products.map((product) => <ProductCard key={product.id} product={product} /> )
        }
      </CategoryRouteContainer>
    </Fragment>
  ]
}

export default Category;