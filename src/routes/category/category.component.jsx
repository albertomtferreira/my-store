import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss';

const Category = () => {
  const {category} = useParams();
  const {categoriesMap} = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(()=> {
    setProducts(categoriesMap[category]);
  },[category, categoriesMap])

  return[
    <Fragment key='category-container' >
        <Link className='category-title-return' to='/shop'>RETURN</Link>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-route-container'>
        {products &&
          products.map((product) => <ProductCard key={product.id} product={product} /> )
        }
      </div>
    </Fragment>
  ]
}

export default Category;