import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram.png'
import Whatsapp_icon from '../Assets/whatsapp.png'
import LinkedIn_icon from '../Assets/linkedin.png'

const Footer = () => {
    return (
        <div className='footer'>
            <ul className="footer-links">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
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
                    Copyright &copy; 2025 <a href="https://yourcompany.com" style={{ color: 'inherit', textDecoration: 'none' }}>AMCA</a> | All rights reserved.

                </p>
            </div>
        </div>
    )
}

export default Footer