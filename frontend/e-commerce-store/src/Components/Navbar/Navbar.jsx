import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/Logo_Small_New.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import profileImage from '../Assets/profileImage.jpg'
import { ShopContext } from '../../Context/ShopContext';
import { AuthContext } from '../../Context/AuthContext';


const Navbar = () => {
  //menu navigation for routes
  const [menu, SetMenu] = useState("home");

  //shop
  const { getTotalCartItems } = useContext(ShopContext);
  // hamburger
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [menuOpen, setMenuOpen] = useState(false);

  //signuplocal - signup stuff
  const { user, setUser } = useContext(AuthContext);

  //logoutlocal 
  const handleLogout = () => {
    localStorage.setItem(0, 'user');
    setUser(null);
  };


  //HANDLE NAV FOR SMALLER SCREENs
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='navbar' aria-label="Main navigation">
      <div className='nav-logo'>
        <Link to="/home" aria-label="Home page">
          <img src={logo} alt="AMCA-LOGO" />
        </Link>
      </div>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`} role="menu">
        {["home", "shop", "about"].map((item) => (
          <li
            key={item}
            onClick={() => {
              SetMenu(item);
              setMenuOpen(false);
            }}
          >
            <Link
              className="nav-link"
              style={{ textDecoration: 'none' }}
              to={`/${item}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            <hr style={{ width: menu === item ? "80%" : "0%" }} />
          </li>
        ))}
        {!user && isMobile && (
          <li className="hamburger-login-item" role="none">
            <Link to='/login'>
              <button className='login-form-btn' aria-label="Login">Login</button>
            </Link>
            <Link to='/signup'>
              <button className='signup-form-btn' aria-label="Sign">Sign Up</button>
            </Link>
          </li>
        )}
      </ul>

      <div className='nav-login-cart'>
        {user ? (
          <>
            <div className="user-info" aria-label={`Logged in as ${user.username}`}>
              <img src={profileImage} alt={`${user.username}'s profile`} className='profile-image' />
              <span className="welcome-text">Hi, {user.username}</span>
              <button
                onClick={handleLogout}
                className='logout-btn' a
                aria-label="Logout"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to='/login' ><button className='login-form-btn' aria-label="Login">Login</button></Link>
            <Link to='/signup'><button className='signup-form-btn' aria-label="Sign Up">Sign Up</button></Link>
          </>
        )}

        <Link
          to='/cart'
          aria-label="Shopping Cart">
          <img
            src={cart_icon}
            alt="Cart"
          />
        </Link>
        <div
          className='nav-cart-count'
          aria-label={`Cart has ${getTotalCartItems()} items`}
        >
          {getTotalCartItems()}
        </div>
      </div>




      <button 
        className="hamburger"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="main-menu"
      >
        ☰
      </button>
    </nav >
  );
};

export default Navbar;
