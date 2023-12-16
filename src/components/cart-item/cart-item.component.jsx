//Inside dropdown basket

import {CartItemContainer, ItemDetails} from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return[
    <CartItemContainer key='CartItemContainer'>
      <img src={imageUrl} alt={`${name}`} className='img'/>
      <ItemDetails>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  ]
}

export default CartItem