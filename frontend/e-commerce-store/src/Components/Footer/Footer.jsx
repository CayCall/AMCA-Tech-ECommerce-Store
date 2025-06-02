import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram.png'
import Whatsapp_icon from '../Assets/whatsapp.png'
import LinkedIn_icon from '../Assets/linkedin.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <ul className="footer-links">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>

            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="instagram" />
                </div>
                <div className="footer-icons-container">
                    <img src={Whatsapp_icon} alt="whatsapp" />
                </div>
                <div className="footer-icons-container">
                    <img src={LinkedIn_icon} alt="linkedin" />
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>
                    Copyright &copy; 2025 <Link to='/home' style={{ color: 'inherit', textDecoration: 'none' }}>AMCA | </Link>
                      <span> All rights reserved.</span>
                </p>
          
            </div>
        </div>
    )
}

export default Footer