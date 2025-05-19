import React, { useEffect, useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
    const [SuccessMessage, ShowMessage] = useState(false);
    const [EmailAddress, CheckEmail] = useState("");





















    return (
        <div className='newsletter'>

            <h1>Sign Up For Exclusive Deals & News</h1>
            <p>Subscribe to our newsletter</p>
            <div>
                <input type="text" placeholder='Email Address' onChange={(e) => CheckEmail(e.target.value)}>

                </input>
                <button className='btn-variation-1' >Subscribe</button>

            </div>
            {
                SuccessMessage && <p className='success message'>Thank you for Subscribing to our newsletter.</p>
            }
        </div>
    )
}

export default Newsletter

 






