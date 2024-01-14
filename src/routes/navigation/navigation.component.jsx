import { Fragment } from 'react';
import {Outlet} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import ProfileIconContainer from '../../components/profile-icon/profile-icon.component.jsx';

import { selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { signOutStart } from '../../store/user/user.action.js';

import {NavigationContainer,LogoContainer,NavLinks,NavLink} from './navigation.styles.jsx';

const Navigation =()=>{
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart())
  
  return[
    <Fragment key='navigation-component'>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo'/>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          <NavLink to='/contact'>
            CONTACT
          </NavLink>
          {currentUser ? 
            (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>  
            )
            :
            (
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>
            )
          }
          {currentUser ? 
            (<ProfileIconContainer/>  
            )
            :
            (
              null
            )
          }
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  ]
}

export default Navigation;