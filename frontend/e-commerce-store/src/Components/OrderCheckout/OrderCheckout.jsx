import React, { useContext } from 'react'
import './OrderCheckout.css'
import { ShopContext } from '../../Context/ShopContext'

const OrderCheckout = () => {
    console.log('OrderCheckout component mounted');
      const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div>
            <h1>Secure Checkout</h1>
            <div className="checkout-wrapper">
                <div className="ordersummary-left">
                    <h3>1. Order Summary</h3>
                    <table>
                        
                    </table>
                    <p>ORDER TOTAL: R {getTotalCartAmount}</p>
                </div>
                <div className="deliveryaddress-middle">
                     <h3>2. Delivery Address</h3>
               
                </div>
                <div className="confirmation-right">
                     <h3>3. Confirmation</h3>
                </div>
            </div>

        </div>
    )
}

export default OrderCheckout