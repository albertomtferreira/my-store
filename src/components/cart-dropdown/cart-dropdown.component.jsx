import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return[
    <div key='cart-dropdown-container' className='cart-dropdown-container'>
      <div className='cart-items'/>
      <Button>Checkout</Button>      
    </div>
  ]
}

export default CartDropdown;