import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop =()=>{
  return[
    <h1>I am the Shop page</h1>
  ]
}
const Contact =()=>{
  return[
    <h1>I am the Contact page</h1>
  ]
}


const App= () => {
  return [
    <Routes key={'routes'}>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/auth' element={<Authentication/>}/>
      </Route>
    </Routes>
    
  ]
}

export default App;
