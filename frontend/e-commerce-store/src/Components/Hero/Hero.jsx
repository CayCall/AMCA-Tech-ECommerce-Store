import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import hero_image from '../Hero/hero_image.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h3>
                    Explore the latest tech
                </h3>
                <h2>
                    Tech For The Future, Tech <br/>For Today.
                </h2>
                <Link to='/shop'>
                    <button className='btn-variation-1'>
                        Shop Now <i className="fas fa-arrow-right"></i>
                    </button>
                </Link>
            </div>
            <div className='hero-right'>
                <div class="fade-border-container">
                    <img src={hero_image} alt="hero-image-phone" />
                </div>

            </div>
        </div>
    )
}

export default Hero