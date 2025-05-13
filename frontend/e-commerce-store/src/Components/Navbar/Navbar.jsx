import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo_Small.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    const [menu, SetMenu] = useState("Home")
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="AMCA-LOGO" />
            </div>
            <ul className="nav-menu">
                <li onClick={() => SetMenu("Home")}>
                    Home
                    <hr style={{ width: menu === "Home" ? "80%" : "0%" }} />
                </li>
                <li onClick={() => SetMenu("Shop")}>
                    Shop
                    <hr style={{ width: menu === "Shop" ? "80%" : "0%" }} />
                </li>
                <li onClick={() => SetMenu("About")}>
                    About
                    <hr style={{ width: menu === "About" ? "80%" : "0%" }} />
                </li>
            </ul>

            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt="Cart-Icon" />
                <div className='nav-cart-count'> 0 </div>
            </div>
        </div>
    )
}

export default Navbar