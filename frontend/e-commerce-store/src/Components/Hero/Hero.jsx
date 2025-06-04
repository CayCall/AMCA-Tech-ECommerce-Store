import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import hero_image from '../Hero/hero_image.jpg'

const Hero = () => {
    return (
        <section className='hero' aria-label='Promotional hero section'>
            <div className='hero-left'>
                <h3>
                    Explore the latest tech
                </h3>
                <header>
                    <h2>
                        Tech For The Future, 
                    </h2>
                    <h2>
                        Tech For Today.
                    </h2>
                </header>

                <Link to='/shop' aria aria-label='Shop our latest tech products'> 
                    <button className='btn-variation-1' aria-label='Shop now'>
                        Shop Now <i className="fas fa-arrow-right" aria-hidden='true'></i>
                    </button>
                </Link>
            </div>
            <div className='hero-right'>
                <div class="fade-border-container">
                    <img 
                        src={hero_image} 
                        alt="A collection of technology devices - phone and laptop." 
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero