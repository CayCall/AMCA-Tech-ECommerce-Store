import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About'
import Checkout from './Pages/Checkout';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import { Navigate } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home />} />            
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
