import React from 'react'
import './ShopHero.css'
import shopHeroImage from '../Assets/ShopHeroImage.png'

const ShopHero = () => {
    return (
        <div className='shop-hero'>
            <div className='hero'>
                <div className='hero-left'>
                    <h2>
                        Shop our latest collection
                    </h2>
                </div>
                <div className='hero-right'>
                    <div class="fade-border-container">
                        <img src={shopHeroImage} alt="hero-image-phone" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopHero