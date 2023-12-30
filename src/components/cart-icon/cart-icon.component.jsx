//image of the shopping basket on top right corner

import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import {CartIconContainer,ItemCount,ShoppingIcon} from './cart-icon.styles.jsx';

const CartIcon = () =>{
  const dispatch = useDispatch()

  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return[
    <CartIconContainer key='CartIconContainer' onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  ]
}

export default CartIcon