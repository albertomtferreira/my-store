import {Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useEffect, lazy, Suspense} from "react";

import { checkUserSession } from './store/user/user.action';
import Spinner from './components/spinner/spinner.component';
import {GlobalStyle} from './global.styles';

const Home = lazy(()=>import('./routes/home/home.component'));
const Navigation = lazy(()=>import('./routes/navigation/navigation.component'));
const Authentication = lazy(()=>import('./routes/authentication/authentication.component'));
const Shop = lazy(()=>import('./routes/shop/shop.component'));
const Contact = lazy(()=>import('./routes/contact/contact.component'));
const Checkout = lazy(()=>import('./routes/checkout/checkout.component'));
const Profile = lazy(()=>import('./routes/profile/profile.component'));

const App= () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkUserSession())
  },[]);

  return [
    <Suspense fallback={<Spinner/>}>
      <GlobalStyle/>
        <Routes key={'routes'}>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='/shop/*' element={<Shop/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/auth' element={<Authentication/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
        </Routes>
    </Suspense>
  ]
}

export default App;
