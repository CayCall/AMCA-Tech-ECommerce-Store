import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Logo_Small_New.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, SetMenu] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false); // 🔁 Toggle state

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to="/home">
                    <img src={logo} alt="AMCA-LOGO" />
                </Link>
            </div>



            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                {["home", "shop", "about"].map((item) => (
                    <li key={item} onClick={() => { SetMenu(item); setMenuOpen(false); }}>
                        <Link className="nav-link" style={{ textDecoration: 'none' }} to={`/${item === "home" ? "" : item}`}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                        <hr style={{ width: menu === item ? "80%" : "0%" }} />
                    </li>
                ))}
                <Link to='/login' className='hamburger-login-btn'><button>Login</button></Link>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
            
        </div>
    );
};

export default Navbar;
