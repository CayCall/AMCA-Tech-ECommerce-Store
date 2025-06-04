import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram.png'
import Whatsapp_icon from '../Assets/whatsapp.png'
import LinkedIn_icon from '../Assets/linkedin.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer' role="contentinfo" aria-label="Footer section">
            <nav>
                <ul className="footer-links">
                    <li><Link to='/home' aria-label="Go to Home page">Home</Link></li>
                    <li><Link to='/shop' aria-label="Go to Shop page">Shop</Link></li>
                    <li><Link to='/about' aria-label="Go to About page">About</Link></li>
                </ul>

            </nav>

            <div className="footer-social-icon" aria-label="Social media links">
                <div className="footer-icons-container" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram (placeholder)">
                    <img src={instagram_icon} alt="Instagram Logo" />target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram (placeholder)"
                </div>
                <div className="footer-icons-container" target="_blank" rel="noopener noreferrer" aria-label="Visit WhatsApp (placeholder)">
                    <img src={Whatsapp_icon} alt="Whatsapp Logo" />
                </div>
                <div className="footer-icons-container" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn (placeholder)">
                    <img src={LinkedIn_icon} alt="LinkedIn Logo" />
                </div>
            </div>

            <div className="footer-copyright">
                <hr aria-hidden="true" />
                <p>
                    Copyright &copy; 2025 <Link to='/home' aria-label="Go to AMCA homepage" style={{ color: 'inherit', textDecoration: 'none' }}>AMCA | </Link>
                    <span> All rights reserved.</span>
                </p>

            </div>
        </footer >
    )
}

export default Footer