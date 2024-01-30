import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js';
import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from './checkout.styles.jsx';


const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return[
    <CheckoutContainer key='CheckoutContainer'>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
        {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        ))}
        <Total>TOTAL: £{cartTotal}</Total>
        <PaymentForm />
    </CheckoutContainer>
  ]
}

export default Checkout;