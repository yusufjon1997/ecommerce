// import { useEffect, useState, useId } from "react";
import { Routes , Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './components/Error/Error';
import Auth from './pages/Auth/Auth';

function App() {


  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact/' element={<Contact />} />
      <Route path='/contact/:id' element={<Contact />} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </>
  );
}

export default App;
