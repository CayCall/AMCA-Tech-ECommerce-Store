import React from 'react'
import './Offers.css'
import { Link } from 'react-router-dom'
import phoneImage from '../Assets/i12_4.png'


const Offers = () => {
    return (
        <div className='offers'>

            <img className="offers-bg-image" src={phoneImage} alt="iPhone" />
            <div className="offers-left">
                <h1 className="offers-h1-first">Exclusive Offers For You</h1>
                <h1 className="offers-h1-second">GET TECH TODAY</h1>
                <Link to='/shop'>
                    <button className="btn-variation-1">
                        Learn More <i className="fas fa-arrow-right"></i>
                    </button>
                </Link>

            </div>

        </div>
    )
}

export default Offers