import {Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useEffect} from "react";

import { checkUserSession } from './store/user/user.action';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Contact from './routes/contact/contact.component';
import Checkout from './routes/checkout/checkout.component';
import Profile from './routes/profile/profile.component';

const App= () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkUserSession())
  },[]);

  return [
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
    
  ]
}

export default App;
