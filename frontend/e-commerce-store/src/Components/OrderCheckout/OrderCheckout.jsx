import React, { useContext } from 'react';
import './OrderCheckout.css';
import { ShopContext } from '../../Context/ShopContext';

const OrderCheckout = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="checkout-container">
            <h1>Secure Checkout</h1>
            <div className="checkout-wrapper">

                <div className="checkout-wrapper-left">
                    <h3>1. Order Summary</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all_product.map((product) => {
                                if (cartItems[product.id] > 0) {
                                    return (
                                        <tr key={product.id}>
                                            <td>{product.name}</td>
                                            <td>{cartItems[product.id]}</td>
                                            <td>R {product.new_price * cartItems[product.id]}</td>
                                            <td>
                                                <button onClick={() => removeFromCart(product.id)}>Remove</button>
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                    <div className='total-section'>
                        <p className="order-total">ORDER TOTAL: R {getTotalCartAmount()}</p>
                    </div>
                </div>


                <div className="checkout-wrapper-middle">
                    <h3>2. Delivery Address</h3>
                    <p></p>
                </div>

                <div className="checkout-wrapper-right">
                    <h3>3. Confirmation</h3>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default OrderCheckout;
