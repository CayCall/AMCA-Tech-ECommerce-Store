import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About'
import Checkout from './Pages/Checkout';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Home path='/home'/>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
