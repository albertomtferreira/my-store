import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return[
    <div key='cart-item-component' className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} className='img'/>
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
     
    </div>
  ]

}

export default CartItem