import { screen } from '@testing-library/react';

import CartIcon from '../cart-icon.component';
import { renderWithProviders } from '../../../utils/test/test.utils';

describe('Cart Icon tests', () => {
  test('Uses preloaded state to render', () => {
    const initialCartItems = [
      { id: 1, name: 'Item A', imageUrl: 'test', price: 10, quantity: 1 },
      { id: 2, name: 'Item B', imageUrl: 'test', price: 10, quantity: 2 },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    const CartLogo = screen.getByText('3');
    expect(CartLogo).toBeInTheDocument();
  });
});