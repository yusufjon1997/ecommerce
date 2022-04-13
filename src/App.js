import { useEffect } from "react";
import { onAuthStateChangedListener, createUserDocument } from "./utils/firebase/Firebase";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/userAction";

import { Routes , Route} from 'react-router-dom';


import { ProductsProvider } from './contexts/productsContext';
import { CartProvider } from './contexts/cartContext';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Shop from './pages/shop/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './components/Error/Error';
import Auth from './pages/Auth/Auth';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';

function App() {

const dispatch = useDispatch();

useEffect(() => {
  const unsbscribe = onAuthStateChangedListener((user) => {
    if(user) {
        createUserDocument(user);
    }
    dispatch(setCurrentUser(user));
  })  

  return unsbscribe;

}, []);
 

  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/shop' element={ <ProductsProvider><Shop /></ProductsProvider>} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/contact/' element={<Contact />} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </>
  );
}

export default App;
