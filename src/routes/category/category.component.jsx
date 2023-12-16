import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import {CategoryRouteContainer,CategoryTitleReturn,CategoryTitle} from './category.styles.jsx';

const Category = () => {
  const {category} = useParams();
  const {categoriesMap} = useContext(CategoriesContext);
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